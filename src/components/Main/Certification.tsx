import { Chip, Grid, Grow, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { Fragment, useState } from "react";
import { learnCourses, otherCourses, udemyCourses } from "../../assets/courseData";
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			minWidth: "150px",
			padding: theme.spacing(1),
			textAlign: "center",
			margin: "0 10px 10px 10px",
		},
		chip: {
			maxWidth: "100%",
			textAlign: "center",
		},
	}),
);

export const Certification: React.FC = () => {
	const classes = useStyles();
	const [udemy, setUdemy] = useState(true);
	const [learn, setLearn] = useState(false);
	const [mastery, setMastery] = useState(false);

	const handleUdemy = () => {
		setLearn(false);
		setMastery(false);
		setUdemy((prev) => !prev);
	};
	const handleLearn = () => {
		setUdemy(false);
		setMastery(false);
		setLearn((prev) => !prev);
	};
	const handleMastery = () => {
		setLearn(false);
		setUdemy(false);
		setMastery((prev) => !prev);
	};
	return (
		<>
			<Typography className={classes.paper}>My mastered courses.</Typography>
			<Grid container direction="row" justifyContent="center" item xs={12}>
				<Chip className={classes.paper} variant="default" size="medium" label="UDEMY" color="secondary" clickable onClick={handleUdemy} />
				<Chip className={classes.paper} variant="default" size="medium" label="Learn2code" color="secondary" clickable onClick={handleLearn} />
				<Chip className={classes.paper} variant="default" size="medium" label="Other courses" color="secondary" clickable onClick={handleMastery} />
			</Grid>
			<Grid container justifyContent="center">
				{udemy ? (
					<>
						{udemyCourses.map((ud, index) => (
							<Grow in={udemy} key={Math.random()}>
								<Chip className={classes.chip} variant="outlined" size="small" label={ud.title} color="primary" />
							</Grow>
						))}
					</>
				) : (
					<></>
				)}
				{learn ? (
					<Fragment>
						{learnCourses.map((ler) => (
							<Grow in={learn} key={Math.random()}>
								<Chip variant="outlined" size="small" label={ler.title} color="primary" />
							</Grow>
						))}
					</Fragment>
				) : (
					<></>
				)}
				{mastery ? (
					<Fragment>
						{otherCourses.map((oth) => (
							<Grow in={mastery} key={Math.random()}>
								<Chip variant="outlined" size="small" label={oth.title} color="primary" />
							</Grow>
						))}
					</Fragment>
				) : (
					<></>
				)}
			</Grid>
		</>
	);
};
