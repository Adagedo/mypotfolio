import { motion } from "framer-motion";
import Bash from "../../assets/skills/Bash-Dark.svg";
import Bootstrap from "../../assets/skills/Bootstrap.svg";
import CSS from "../../assets/skills/CSS.svg";
import Django from "../../assets/skills/Django.svg";
import Docker from "../../assets/skills/Docker.svg";
import ExpressJS from "../../assets/skills/ExpressJS-Dark.svg";
import Git from "../../assets/skills/Git.svg";
import Github from "../../assets/skills/Github-Dark.svg";
import GraphQL from "../../assets/skills/GraphQL-Dark.svg";
import HTML from "../../assets/skills/HTML.svg";
import JavaScript from "../../assets/skills/JavaScript.svg";
import Markdown from "../../assets/skills/Markdown-Dark.svg";
import MongoDB from "../../assets/skills/MongoDB.svg";
import Nginx from "../../assets/skills/Nginx.svg";
import NodeJS from "../../assets/skills/NodeJS-Dark.svg";
import Npm from "../../assets/skills/Npm-Dark.svg";
import Postgres from "../../assets/skills/PostgreSQL-Dark.svg";
import Postman from "../../assets/skills/Postman.svg";
import Powershell from "../../assets/skills/Powershell-Dark.svg";
import Python from "../../assets/skills/Python-Dark.svg";
import RabbitMQ from "../../assets/skills/RabbitMQ-Dark.svg";
import React from "../../assets/skills/React-Dark.svg";
import Redux from "../../assets/skills/Redux.svg";
import SQLite from "../../assets/skills/SQLite.svg";
import TailwindCSS from "../../assets/skills/TailwindCSS-Dark.svg";
import TypeScript from "../../assets/skills/TypeScript.svg";
import Ubuntu from "../../assets/skills/Ubuntu-Dark.svg";
import Vercel from "../../assets/skills/Vercel-Dark.svg";
import VIM from "../../assets/skills/VIM-Dark.svg";
import VSCode from "../../assets/skills/VSCode-Dark.svg";

function SkillSection() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0, duration: 1 }}
        className="mt-[12em]"
        id="skills"
      >
        <div className="w-[1024px] mx-auto max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em]">
          <div className="flex items-center justify-center flex-col gap-2">
            <h4 className="uppercase text-[0.7rem] text-slate-500 tracking-widest">
              SKills
            </h4>
            <h2 className="flex items-center gap-2 text-2xl">
              <span>My</span>
              <span className="text-green-cool">Stack</span>
            </h2>
            <p className="w-[300px] text-center text-[1rem] text-slate-500">
              Empowering Innovation with a Robust Tech Stack Now, let's delve
              into the tools and technologies that fuel my journey of digital
              transformation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-4 text-center max-[570px]:grid-cols-8 max-[555px]:grid-cols-5 max-[375px]:grid-cols-3">
            <img src={Bash} alt="" />
            <img src={Bootstrap} alt="bash" />
            <img src={CSS} alt="css" />
            <img src={Django} alt="django" />
            <img src={Docker} alt="docker" />
            <img src={ExpressJS} alt="expressjs" />
            <img src={Git} alt="git" />
            <img src={Github} alt="github" />
            <img src={GraphQL} alt="graphql" />
            <img src={HTML} alt="html" />
            <img src={JavaScript} alt="javascript" />
            <img src={Markdown} alt="markdown" />
            <img src={MongoDB} alt="mongodb" />
            <img src={Nginx} alt="nginx" />
            <img src={NodeJS} alt="nodejs" />
            <img src={Npm} alt="npm" />
            <img src={Postgres} alt="postgres" />
            <img src={Postman} alt="postman" />
            <img src={Powershell} alt="powershell" />
            <img src={Python} alt="python" />
            <img src={RabbitMQ} alt="rabbitmq" />
            <img src={React} alt="react" />
            <img src={Redux} alt="redux" />
            <img src={SQLite} alt="sqlite" />
            <img src={TailwindCSS} alt="tailwindcss" />
            <img src={TypeScript} alt="typescript" />
            <img src={Ubuntu} alt="ubuntu" />
            <img src={Vercel} alt="vercel" />
            <img src={VIM} alt="vim" />
            <img src={VSCode} alt="vscode" />
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default SkillSection;
