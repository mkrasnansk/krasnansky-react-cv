import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityComponent } from "./ActivityComponent";
interface Activity {
	id: string;
	type: string;
	distance: string;
	time: string;
	temp: string;
	date: string;
}
const id = String(process.env.REACT_APP_STRAVA_ID);
const secret = process.env.REACT_APP_STRAVA_SECRET;
const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;
const accessToken = process.env.REACT_APP_STRAVA_ACCESS_TOKEN;
const auth_link = "https://www.strava.com/oauth/token";
const activities_link = "https://www.strava.com/api/v3/athlete/activities";

export const StravaApi: React.FC = () => {
	const [activities, setActivites] = useState<Activity[]>([]);
	const [size, setSize] = useState(window.innerWidth);
	const matches = size > 760;
	const [access, setAccess] = useState("");

	const fetchData = useCallback(async () => {
		const stravaAuthResponse = await axios.all([axios.post(`${auth_link}?access_token=${accessToken}&client_id=${id}&client_secret=${secret}&refresh_token=${refreshToken}&grant_type=refresh_token`)]);
		const accessFinal: string = `${stravaAuthResponse[0].data.access_token}`;
		setAccess(accessFinal);
		// eslint-disable-next-line
		const accessRefresh = await axios.post(`${auth_link}?access_token=${accessFinal}&client_id=${id}&client_secret=${secret}&refresh_token=${refreshToken}&grant_type=refresh_token`);
		const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${accessFinal}`);

		const resActivites = [];
		let numberOfActivities: number = 3;
		if (matches) {
			numberOfActivities = 7;
		}
		for (let i = 0; i < numberOfActivities; i += 1) {
			let id = String(stravaActivityResponse.data[i].id);
			let date = stravaActivityResponse.data[i].start_date_local.slice(0, 10);
			date = date.substr(8) + "." + date.slice(5, 7) + "." + date.slice(0, 4);

			let type = stravaActivityResponse.data[i].type;
			let distance = (stravaActivityResponse.data[i].distance / 1000).toFixed(2) + " Km";

			let t = stravaActivityResponse.data[i].moving_time / 60;
			let min = Math.floor(t);
			let sec: number | string = Math.floor(60 * (t - min));
			if (sec < 10) {
				sec = `0${sec}`;
			}
			let time = `${min}:${sec} min.`;

			let d = stravaActivityResponse.data[i].distance / 1000;
			let tempMin = Math.floor(t / d);
			let tempSec: number | string = Math.floor(60 * (t / d - tempMin));
			if (tempSec < 10) {
				tempSec = `0${tempSec}`;
			}
			let temp = `${tempMin}:${tempSec} min/km`;

			if (distance === "0.00 Km" || temp === "Infinity min/km") {
				distance = stravaActivityResponse.data[i].max_heartrate + " maxHR";
				temp = stravaActivityResponse.data[i].average_heartrate + " avgHR";
			}

			resActivites.push({ type, distance, time, temp, id, date });
		}
		setActivites(resActivites);
	}, [matches]);
	useEffect(() => {
		fetchData();
	}, [matches, fetchData]);

	let resizeWindow = () => {
		setSize(window.innerWidth);
	};
	useEffect(() => {
		resizeWindow();
		window.addEventListener("resize", resizeWindow);
		return () => window.removeEventListener("resize", resizeWindow);
	}, []);

	return (
		<Container maxWidth="md">
			<Grid container direction="row" spacing={2} justifyContent="center">
				{activities.map((move) => (
					<ActivityComponent key={move.id} access={access} id={move.id} date={move.date} type={move.type} distance={move.distance} temp={move.temp} time={move.time} />
				))}
			</Grid>
		</Container>
	);
};
export const MemoizedStravaApi = React.memo(StravaApi);
