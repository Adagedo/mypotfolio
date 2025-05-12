import { useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline, IoCloseOutline } from "react-icons/io5";
import { GoHome, GoInfo, GoProjectSymlink, GoTools } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { LuFocus } from "react-icons/lu";
import { FaBuromobelexperte } from "react-icons/fa";

function MobileSideNav({
	isNavOpen,
	setIsNavOpen,
}: {
	isNavOpen: boolean;
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const navRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: any): void => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setIsNavOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<div
				className={`hidden max-[730px]:w-[300px] max-[730px]:flex max-[730px]:flex-col gap-20 max-[730px]:justify-between max-[730px]:fixed max-[730px]:top-0 ${
					isNavOpen ? "max-[730px]:right-0" : "max-[730px]:-right-[990px]"
				} max-[730px]:h-screen max-[730px]:bg-secondary-background max-[730px]:backdrop-blur-[4px] max-[730px]:p-12 max-[730px]:border-l max-[730px]:border-green-cool max-[730px]:z-[999] transition-all duration-300 overflow-auto`}
				ref={navRef}>
				<div className="flex items-center gap-5 max-[730px]:flex-col max-[730px]:items-start">
					<button
						className="text-2xl text-green-cool border-2 border-slate-500 rounded-full"
						onClick={() => setIsNavOpen(false)}>
						<IoCloseOutline />
					</button>
					<a
						href="#home"
						className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300 flex items-center gap-3">
						<GoHome className="text-xl text-green-cool" />
						<span>Home</span>
					</a>
					<a
						href="#about"
						className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300 flex items-center gap-3">
						<GoInfo className="text-xl text-green-cool" />
						<span>About</span>
					</a>
					<a
						href="#skills"
						className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300 flex items-center gap-3">
						<GoTools className="text-xl text-green-cool" />
						<span>Skills</span>
					</a>
					<a
						href="#specialty"
						className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300 flex items-center gap-3">
						<LuFocus className="text-xl text-green-cool" />
						<span>Specialty</span>
					</a>
					<a
						href="#projects"
						className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300 flex items-center gap-3">
						<GoProjectSymlink className="text-xl text-green-cool" />
						<span>Projects</span>
					</a>
					<a
						href="#experience"
						className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300 flex items-center gap-3">
						<FaBuromobelexperte className="text-xl text-green-cool" />
						Experience
					</a>
					<a
						href="#contact"
						className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300 flex items-center gap-3">
						<MdOutlineLocalPhone className="text-xl text-green-cool" />
						<span>Contact</span>
					</a>
				</div>

				<div className="flex items-center gap-4 max-[730px]:flex-col max-[730px]:items-start">
					<span className="flex items-center gap-3">
						<MdOutlineLocalPhone className="text-[1.2rem] text-green-cool" />
						<span className="text-[0.85rem]">+234 816 099 0661</span>
					</span>
					<span className="flex items-center gap-3">
						<AiOutlineMail className="text-[1.2rem] text-green-cool" />
						<span className="text-[0.85rem]">adagedoizzydev@gmail.com</span>
					</span>
					<span className="flex items-center gap-3">
						<IoLocationOutline className="text-[1.2rem] text-green-cool" />
						<span className="text-[0.85rem]">Talba road, Gidan Kwano</span>
					</span>
				</div>
			</div>
		</>
	);
}

export default MobileSideNav;
