import { MdOutlineMenuOpen } from "react-icons/md";
import Logo from "../Logo";
import GradientButton from "../GradientButton";

function SecondaryNav({
  setIsNavOpen,
}: {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <header className="bg-secondary-background py-4 border-t-[1px] border-green-cool">
        <nav className="w-[1024px] mx-auto flex items-center justify-between max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em]">
          <div className="flex items-center gap-2">
            <button
              className="text-[1.4rem] text-green-cool min-[731px]:hidden"
              onClick={() => {
                setIsNavOpen(true);
              }}
            >
              <MdOutlineMenuOpen />
            </button>
            <Logo />
          </div>

          <div className="flex items-center gap-5 max-[730px]:hidden">
            <a
              href="#home"
              className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300"
            >
              Skills
            </a>
            <a
              href="#specialty"
              className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300"
            >
              Specialty
            </a>
            <a
              href="#projects"
              className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-green-cool hover:before:w-full before:transition-all before:duration-300"
            >
              Contact
            </a>
          </div>

          <GradientButton text="Discuss for projects" href="#contact" />
        </nav>
      </header>
    </>
  );
}

export default SecondaryNav;
