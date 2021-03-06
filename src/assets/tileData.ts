import cv from "./img/cv.png";
import auth from "./img/auth.png";
import bagram from "./img/Bagram.png";
import itunesReact from "./img/itunesReact.png";
import itunesVue from "./img/itunesVue.png";
import mealshop from "./img/mealshop.png";
import redux from "./img/redux.png";
import router from "./img/router.png";
import todo from "./img/todo.png";
import rmgarden from "./img/rmgarden.png";
export interface GalleryData {
	id: number;
	title: string;
	info: string;
	describe: string;
	sourceHref: string;
	liveDemoHref: string;
	imgSrc: string;
}
export const tileData: GalleryData[] = [
	{
		id: 1,
		title: "I-Tunes",
		info: "React + Ts app for search music from apple i-tunes.",
		describe:
			"Táto I-tunes aplikácia je už v poradí tretia. Všetky sú samozrejme od Yablka za, čo si ho veľmi vážim, lebo to je super nástreľ technológie. V našom jazyku asi nič lepšie nenájdete a jeho kurz vrelo odporúčam. Túto apku som spravil najprv v Angular potom vo Vue a táto konkrétna je s Reactom, pri ktorom som nakoniec aj ostal, pretože mi sadol najviac.",
		sourceHref: "https://github.com/MKrasnansk/TS-REACT-itunes",
		liveDemoHref: "https://react-itunes-ts.netlify.app/",
		imgSrc: `${itunesReact}`,
	},
	{
		id: 2,
		title: "Bagram",
		info: "My first PWA app. It should look likes instagram",
		describe:
			"Moja prvá väčšia aplikácia samozrejme tvorená pomocou kurzu na udemy. Je to Vue apka s frameworkom quasar. Použité sú workre na cache a databáza firebase. Riešené je v nej zdielanie polohy, fotoaparát, úložisko, notifikacie. Možnosť naištalovať ako mobilApp.",
		sourceHref: "https://github.com/MKrasnansk/bagram-vue-pwq-quasar",
		liveDemoHref: "https://bagram-92914.web.app/#/",
		imgSrc: `${bagram}`,
	},
	{
		id: 3,
		title: "To-do list",
		info: "Pretty and simple to-do list. I use it too often.",
		describe: "Tento to-do list je vytvorený s Vue. Používa localbase na lokálne ukladanie položiek v zariadení bez databázy. Komponenty s Vuetify.",
		sourceHref: "https://github.com/MKrasnansk/to-do_vue_vuetify",
		liveDemoHref: "https://to-do-vuetify.netlify.app/",
		imgSrc: `${todo}`,
	},
	{
		id: 4,
		title: "Meal Shop",
		info: "Meal shop is an app for orderdering a food.",
		describe: "Meal Shop je web apka pre donášku jedla. Použitý je React. Požite rôzne hooky.",
		sourceHref: "https://github.com/MKrasnansk/meal-shop",
		liveDemoHref: "https://meal-shop-react.netlify.app/",
		imgSrc: `${mealshop}`,
	},
	{
		id: 5,
		title: "Vue - itunes",
		info: "Vue.js - app for search music from apple i-tunes.",
		describe:
			"Táto I-tunes aplikácia je už v poradí tretia. Všetky sú samozrejme od Yablka za, čo si ho veľmi vážim, lebo to je super nástreľ technológie. V našom jazyku asi nič lepšie nenájdete a jeho kurz vrelo odporúčam. Túto apku som spravil najprv v Angular potom vo Vue a nakoniec s Reactom, pri ktorom som ostal pretože mi sadol najviac.",
		sourceHref: "https://github.com/MKrasnansk/Vue-iTunes",
		liveDemoHref: "https://itunes-skuska.netlify.app/#/tunes",
		imgSrc: `${itunesVue}`,
	},
	{
		id: 6,
		title: "About this page",
		info: "My CV React/Nest with types and Material-UI",
		describe:
			"Ahoj, ak si už tu tak ti poviem trochu detailov o tomto mojom portfóliu. Vydal som ho v júly 2021. Toto moje portfólio sa vám zatiaľ bude dúfam páčiť použil som nodemailer volany cez axios na posielanie formuláru, ostatné ostáva v React.Potom strava API je super vec hlavne pre takých bláznov, ako som ja. Keď bude čas plánujem vytiahnuť z toho viac a spraviť takú internú app. ",
		sourceHref: "https://github.com/MKrasnansk/krasnansky-react-cv",
		liveDemoHref: "",
		imgSrc: `${cv}`,
	},
	{
		id: 7,
		title: "React-redux",
		info: "Praxes in React-redux.",
		describe: "Jednoduchá aplikácia, pri ktorej som si precvičil implementáciu a používanie redux. Použite: react-redux, reduxjs/toolkit, firebase.",
		sourceHref: "https://github.com/MKrasnansk/react-redux-praxes",
		liveDemoHref: "https://redux-praxes.netlify.app/",
		imgSrc: `${redux}`,
	},
	{
		id: 8,
		title: "React-router",
		info: "App practice example to work with react-router.",
		describe: "Prakticke precvicovanie SPA, react-router-dom, lazy-loading, firebase hosting.",
		sourceHref: "https://github.com/MKrasnansk/react-router-practise",
		liveDemoHref: "https://react-prep-6e47c.web.app/quotes",
		imgSrc: `${router}`,
	},

	{
		id: 9,
		title: "React-Authentication",
		info: "Authentication to firebase with email and pass.",
		describe: "Login do firebase za pomoci react, react router, firebase, localStorage. Moznost zmeny hesla.",
		sourceHref: "https://github.com/MKrasnansk/react-Authentication-firebase",
		liveDemoHref: "https://authentication-firebase-react.netlify.app/",
		imgSrc: `${auth}`,
	},
	{
		id: 10,
		title: "RM-Garden",
		info: "Web site for RM - Garden.",
		describe: "Web stránka pre záhradkársku firmu RM garden. Použitý react, typescript, router, material-ui.",
		sourceHref: "",
		liveDemoHref: "https://rm-garden.netlify.app/",
		imgSrc: `${rmgarden}`,
	},
];
