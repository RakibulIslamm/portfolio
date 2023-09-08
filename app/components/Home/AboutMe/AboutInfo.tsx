import Image from "next/image";
import React from "react";
import myImage from "@/public/images/rakib.png";
import { philosopher } from "../HeroSection/HeroSection";

type Props = {};

const AboutInfo = (props: Props) => {
	return (
		<div className="w-full flex justify-between items-center relative z-50 brief-about">
			<div className="w-6/12 xs:w-full xs:flex xs:items-center xs:flex-col">
				<h3
					className={`text-[55px] md:text-[45px] sm:text-[30px] xs:text-[35px] xs:text-center font-bold text-[#d9d9d9] ${philosopher.className} leading-[10px] about-headline`}
				>
					About Me{" "}
					<span className="inline-block w-[200px] md:w-[140px] sm:w-[80px] h-[2px] bg-[#00F0FF] rounded-full about-line xs:hidden"></span>
				</h3>
				<p className="text-[#d9d9d9] font-extralight text-lg md:text-base sm:text-sm xs:text-[15px] mt-4 xs:text-center about-desc">
					My name is Rakibul Islam (Rakib), a web developer and UI/UX designer
					with expertise in{" "}
					<strong className="text-2xl md:text-xl sm:text-base xs:text-base">
						Javascript, Python, C/C++, HTML, CSS
					</strong>{" "}
					and a variety of modern web development frameworks and library such as{" "}
					<strong className="text-2xl md:text-xl sm:text-base xs:text-base">
						React, Next.js, Django, Redux, Node js, Express js, GraphQL etc..
					</strong>
					<br />I have a passion for problem solving and thrive on tackling
					complex challenges with creativity and critical thinking.
				</p>
				<button className="uppercase px-8 py-2 bg-[#010022] text-[#d9d9d9 mt-4 rounded border border-gray-800 text-[#d9d9d9] about-btn sm:text-sm">
					More Details
				</button>
			</div>
			<div className="w-6/12 flex justify-end relative about-img xs:hidden">
				<Image
					className="w-10/12 h-full object-cover object-top opacity-80 relative z-10 xs:hidden"
					src={myImage}
					alt=""
				/>
				<div className="w-full h-full bg-gradient-to-t from-[#00112B] via-[#00112bbd] to-[#00112b00] absolute -bottom-1 xs:hidden z-50">
					<div className="w-full h-[200px] bg-gradient-to-t from-[#00112B] via-[#00112be7] to-[#00112b00] absolute -bottom-10 left-0"></div>
				</div>
			</div>
		</div>
	);
};

export default AboutInfo;
