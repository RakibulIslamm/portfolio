import React from "react";
import AboutInfo from "./AboutInfo";

type Props = {};

const AboutMe = (props: Props) => {
	return (
		<div className="w-10/12 xs:w-full mx-auto mt-10 xs:mt-5 relative z-20 xs:px-5">
			<div className=" absolute top-0 right-0">
				<h1 className="text-[80px] md:text-[60px] font-extrabold text-center text-[#00112B] leading-none -mt-5 drop-shadow-text-shadow pointer-events-none">
					DESIGNER
				</h1>
				<h1 className="text-[180px] md:text-[120px] font-extrabold text-center text-[#00112B] leading-none drop-shadow-text-shadow pointer-events-none">
					DEVELOPER
				</h1>
			</div>
			<AboutInfo />
		</div>
	);
};

export default AboutMe;
