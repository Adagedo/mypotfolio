import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import Logo from "../Logo";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

function FooterSection() {
	return (
		<>
			<footer className="mt-[5em]">
				<div className="w-[1024px] mx-auto grid grid-cols-3 max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em] max-[555px]:grid-cols-1 max-[555px]:gap-12">
					<div className="flex flex-col gap-4">
						<Logo />
						<div className="flex items-center gap-4 text-slate-500">
							<a href="#!" target="_blank" rel="noopener noreferrer">
								<BsGithub className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
							</a>
							<a href="#!" target="_blank" rel="noopener noreferrer">
								<GrFacebookOption className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
							</a>
							<a href="#!" target="_blank" rel="noopener noreferrer">
								<FaXTwitter className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
							</a>
							<a href="#!" target="_blank" rel="noopener noreferrer">
								<FaLinkedinIn className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
							</a>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<h4>Quick links</h4>
						<div className="flex flex-col items-start gap-2 text-slate-500">
							<a
								href="#home"
								className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300">
								Home
							</a>
							<a
								href="#about"
								className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300">
								About
							</a>
							<a
								href="#skills"
								className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300">
								Skills
							</a>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<h4>Contacts</h4>
						<div className="flex flex-col gap-4 items-start text-slate-500">
							<a
								href="tel:+2349020617734"
								target="_blank"
								className="flex items-center gap-3">
								<FaPhoneAlt className="text-[0.8rem]" />
								<span className="text-[0.8rem]">+234 816 099 0661</span>
							</a>
							<a
								href="mailto:codewitgabi222@gmail.com"
								target="_blank"
								className="flex items-center gap-3">
								<AiOutlineMail className="text-[1rem]" />
								<span className="text-[0.8rem]">adagedoizzydev@gmail.com</span>
							</a>
							<span className="flex items-center gap-3">
								<IoLocationOutline className="text-[1rem]" />
								<span className="text-[0.8rem]">Talba road, Gidan Kwano</span>
							</span>
						</div>
					</div>
				</div>
				<div className="text-center text-[0.85rem] text-green-cool py-4 border-t-[0.1px] border-green-cool mt-4 max-[555px]:mt-16">
					Copyright 2024 | All Rights Reserved
				</div>
			</footer>
		</>
	);
}

export default FooterSection;
