
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Mabo",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Mabo Mbebeta",
	description: "I’m a Logistician & Computer Scientist. I support important supply chain decisions by using cognitive predictions and recommendations on optimal actions.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: false,
		},
		{
			title: "Curriculum Vitae",
			link: "https://mabombebeta.me/cv",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
    "I am a Pharmacy Technologist and Computer Scientists. I kick-started my professional career as a logistician managing Pharmaceutical and Laboratory Commodities. My passion for trying to simplify and automate the supply chain systems catapulted me into website design and mobile application development.",
    "The Supply Chain industry is growing and we are seeing the application of Artificial Intelligence and Machine Learning to improving it and I love that I have a foot in both worlds hence I can grow with it, while continually solidifying the fundamentals. I opensource my code - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in supply chain industry.",
    "My other passion is Data Science, I know first hand from experience how critical data is important to make important decisions. Data Science tools applied in the supply chain can help foster for data-driven decision making that can help curb some of the bottlenecks that are experienced in supply chain systems.",
    "When I’m not performing scientific computations, I focus on my hobbies which are: playing chess, watching tech news, meeting people, and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create Andriod, IOS and Windows Mobile applications using Xamarin Forms & React Native.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive static websites and dynamic websites. Using Reactjs, VueJs, PHP and C#.",
			icons: null,
		},
		{
			title: "Machine Learning & Statistical Analysis",
			description: "I can build machine learning models to make predictions on real world data. Using Python's scikit-learn package.",
			icons: null,

		},
		{
			title: "Scientific Computing",
			description: "I can read, clean, process, and analyze real-world data. Using Python & R.",
			icons: null,

		},
		{
			title: "Data Visualization",
			description: "I can translate any data and information into a visual context. Using Tableau, Excel, Google Sheets, Matplotlib, Power BI.",
			icons: null,

		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Malaria Survey App",
			description: "An application that is used to collect Malaria disease trend accross various demograhics.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/ShiZoe/Mwense.Malaria.App",
				},
			]
		},

		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a logistician and a data analyst.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/shizoe/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Want to Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at mabombebeta@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:mabombebeta@gmail.com",
			isPrimary: false,
		},
		{
			title: "Schedule Meeting",
			link: "https://calendly.com/mabombebeta",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Mabo Mbebeta | Computer Scientist | C# | PHP | Java | Reactjs Developer",
	description: "Entry Level Data Scientist with extensive experience in Suppy Chain Management of Pharmaceautical and Laboratory commodities. I am a contemplative coder and analyst inspired by tough problems.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@mabombebeta",
	description: "Computer Scientist | C# | PHP | Java | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://mabombebeta.me/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/shizoe/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/mabo-mbebeta/",
		},
	]
}