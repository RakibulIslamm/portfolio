import React from "react";
import Project from "./Project";
import { philosopher } from "../HeroSection/HeroSection";

type Props = {};

const Projects = (props: Props) => {
	return (
		<div className="w-10/12 xs:w-full xs:px-5 mx-auto project relative z-20 pb-16">
			<div>
				<p className="text-[#d9d9d9] text-[20px] sm:text-[17px] xs:text-[17px] xs:text-center font-extralight project-p">
					Personal Projects
				</p>
				<h3
					className={`text-[45px] md:text-[40px] sm:text-[30px] xs:text-[35px] xs:text-center text-[#d9d9d9] ${philosopher.className} leading-none headline`}
				>
					Something I have built{" "}
					<span className="inline-block w-[200px] h-[2px] bg-[#00F0FF] rounded-full xs:hidden"></span>
				</h3>
			</div>
			<div className="mt-10 xs:mt-4 space-y-12 xs:space-y-4 my-project">
				<Project position={1} />
				<Project position={2} />
				<Project position={3} />
				{/* <div className="flex justify-end">
                        <div className="text-[20px] text-[#d9d9d9] font-philosopher leading-none"><span className="inline-block w-[200px] h-[2px] bg-[#00F0FF] rounded-full"></span> <button>More Project</button></div>
                    </div> */}
			</div>
		</div>
	);
};

export default Projects;
