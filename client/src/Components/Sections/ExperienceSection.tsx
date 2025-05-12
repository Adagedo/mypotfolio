import { motion } from "framer-motion";
import Experience from "../Experience";

const experiences = [
	{
		id: 1,
		company: "Freelancer",
		role: "Python developer",
		from: "Jan 2022",
		to: "present",
		description:
			"Here, I designed and maintained high-performance Python backend services with a focus on scalability, security, and maintainability,Implemented a simple machine learning algorithm (linear regression and support vector machine) to analyze stock market, and I Worked closely with clients to meet requirements and enhance project quality.",
	},
	{
		id: 2,
		company: "Devengine Technologies",
		role: "Fullstack junior developer",
		from: "jan 2024",
		to: "present",
		description:
			"A place to be. Here, I was also able to work efficiently with django due to ny previous experience with django and django rest framework at bunzitech, overseeing the backend of a mobile app. Here, I learnt about microservices and kafka, how they work and why it is necessary to build using microservices. My job also included me building frontend applications which gave me a strong confidence on working with react.js and typescript with a provided figma design. Learning and improvement is one of my best experiences @ devengine technologies.",
	},
	{
		id: 3,
		company: "Jovian",
		role: "web developer intern Remote",
		from: "Jan 2023",
		to: "jun 2023",
		description:
			"My experience here as an intern was greate, where I improved the user experience for online courses by designing intuitive layouts, integrating interactive elements, and ensuring smooth functionality, Streamlined backend functionalities to support course features, resulting in improved user authentication and learner progress tracking, and assist in optimizing course navigation and implementing learner engagement tools, like discussion boards and feedback systems.",
	},
];

function ExperienceSection() {
	return (
		<>
			<motion.section
				initial={{ opacity: 0, translateY: 100 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				transition={{ delay: 0, duration: 1 }}
				className="mt-[12em]"
				id="experience">
				<div className="w-[1024px] mx-auto max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em]">
					<div className="flex items-center justify-center flex-col gap-2">
						<h4 className="uppercase text-[0.7rem] text-slate-500 tracking-widest">
							Experience
						</h4>
						<h2 className="flex items-center gap-2 text-2xl">
							<span>My</span>
							<span className="text-green-cool">Experience</span>
						</h2>
						<p className="w-[300px] text-center text-[1rem] text-slate-500">
							Let me showcase my journey through the realm of fullstack
							development. Explore the experiences that have shaped my expertise
							and propelled me towards digital excellence.
						</p>
					</div>

					<div className="mt-16 resume grid grid-cols-2 gap-12 max-[675px]:grid-cols-1">
						{experiences.map((experience) => {
							return (
								<Experience
									key={experience.id}
									company={experience.company}
									role={experience.role}
									from={experience.from}
									to={experience.to}
									description={experience.description}
								/>
							);
						})}
					</div>
				</div>
			</motion.section>
		</>
	);
}

export default ExperienceSection;
