import React from "react";
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import HeroSvg from "./HeroSvg";
import { Philosopher } from "next/font/google";

export const philosopher = Philosopher({
	subsets: ["latin"],
	weight: ["400", "700"],
});

type Props = {};

const HeroSection = (props: Props) => {
	return (
		<div className="h-screen w-full max-w-[1440px] mx-auto relative py-[300px] xs:px-5 xs:py-[100px]">
			<div
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 11, 42, 0))",
				}}
				className=" absolute w-[500px] h-[500px] -top-[100px] -left-[100px] filter blur-3xl rounded-full overflow-hidden"
			></div>
			<div
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 11, 42, 0))",
				}}
				className=" absolute w-[500px] h-[500px] top-[100px] right-[100px] filter blur-3xl rounded-full overflow-hidden"
			></div>
			<div className="fixed bottom-0 z-10 w-full max-w-[1440px] mx-auto flex justify-between items-center px-[22px] xs:hidden sm:hidden">
				<div className="flex items-center flex-col gap-4">
					<div className="text-[#d9d9d9] text-xl space-y-5">
						<FaGithubSquare className="social-icon cursor-pointer" />
						<FaLinkedin className="social-icon cursor-pointer" />
						<FaInstagramSquare className="social-icon cursor-pointer" />
						<FaFacebookSquare className="social-icon cursor-pointer" />
					</div>
					<span className="w-[2px] h-[145px] bg-[#d9d9d9] inline-block rounded-full line "></span>
				</div>
				<Link
					href={"#footer"}
					className="transform rotate-90 text-[#d9d9d9] relative -right-10"
				>
					Get In Touch
				</Link>
			</div>

			<div className="flex items-center gap-14 justify-between h-full text-white w-10/12 xs:w-full mx-auto relative z-20">
				<div className="w-1/2 xs:w-full xs:text-center xs:flex xs:flex-col xs:justify-center">
					<p
						className={`text-[#00F0FF] ${philosopher.className} text-[30px] sm:text-[20px] xs:text-[15px] inline-block relative font-thin where`}
					>
						Where{" "}
						<span className="inline-block w-[30px] sm:w-[20px] h-[2px] bg-[#00F0FF] rounded-full  line-line"></span>
					</p>
					<h2
						className={`text-[#d9d9d9] ${philosopher.className} text-[60px] md:text-[40px] sm:text-[30px] xs:text-[55px] leading-[70px] md:leading-[50px] sm:leading-[40px] xs:leading-[55px] font-bold headline`}
					>
						Creativity Meets
					</h2>
					<h2
						className={`text-[#d9d9d9] ${philosopher.className} text-[60px] md:text-[40px] sm:text-[30px] xs:text-[55px] leading-[70px] md:leading-[50px] sm:leading-[40px] xs:leading-[55px] font-bold headline2`}
					>
						Functionality
					</h2>
					<p className="text-[18px] sm:text-[15px] xs:text-[18px] font-extralight desc xs:mt-3">
						Bringing innovative ideas to life with stunning{" "}
						<br className="xs:hidden" /> and functional web development
					</p>
					<Link
						href={"/about"}
						className="inline-block uppercase px-8 py-2 bg-[#010022] text-[#d9d9d9 mt-4 rounded border border-gray-800 hero-button"
					>
						About Me
					</Link>
				</div>
				<div className="w-1/2 hero-svg flex justify-end items-center xs:hidden z-50">
					<HeroSvg />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
