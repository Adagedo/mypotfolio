import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";

function PrimaryNav() {
	return (
		<>
			<header className="bg-secondary-background py-4">
				<nav className="w-[1024px] mx-auto flex items-center justify-between max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em]">
					<div className="flex items-center gap-4">
						<a
							href="https://github.com/Adagedo"
							target="_blank"
							rel="noopener noreferrer">
							<BsGithub className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
						</a>
						<a
							href="https://www.linkedin.com/in/adagedo-solomon"
							target="_blank"
							rel="noopener noreferrer">
							<FaLinkedinIn className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
						</a>
					</div>
					<div className="flex items-center gap-4 max-[730px]:hidden">
						<span className="flex items-center gap-3">
							<MdOutlineLocalPhone className="text-[1rem]" />
							<span className="text-[0.8rem]">+234 816 099 0661</span>
						</span>
						<span className="flex items-center gap-3">
							<AiOutlineMail className="text-[1rem]" />
							<span className="text-[0.8rem]">adagedoizzydev@gmail.com</span>
						</span>
						<span className="flex items-center gap-3">
							<IoLocationOutline className="text-[1rem]" />
							<span className="text-[0.8rem]">
								Talba road, Gidan Kwano, Niger state.
							</span>
						</span>
					</div>
				</nav>
			</header>
		</>
	);
}

export default PrimaryNav;
