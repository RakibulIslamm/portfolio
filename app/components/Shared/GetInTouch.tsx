"use client";
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import { philosopher } from "../Home/HeroSection/HeroSection";

type Props = {};

const GetInTouch = (props: Props) => {
	const [email, setEmail] = useState("");
	const [open, setOpen] = useState(false);
	const emailRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (emailRef?.current?.innerText) {
			setEmail(emailRef.current.innerText);
		}
	}, []);

	const handleCopy = async () => {
		await window.navigator.clipboard.writeText(email);
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
		}, 1000);
	};

	return (
		<div
			id="footer"
			className="w-10/12 xs:w-full xs:px-5 h-screen xs:h-full xs:py-16 mx-auto flex justify-center items-center flex-col footer relative z-50"
		>
			<div
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 11, 42, 0))",
				}}
				className=" absolute w-[500px] h-[500px] -bottom-[200px] -right-[200px] filter blur-3xl rounded-full"
			></div>
			<div>
				<h2
					className={`text-[80px] md:text-[65px] sm:text-[40px] xs:text-[40px] text-[#d9d9d9] ${philosopher.className} text-center leading-none f-headline`}
				>
					Lets Talk
				</h2>
				<p className="text-[18px] xs:text-[15px] text-[#d9d9d9] font-poppins text-center font-extralight f-desc">
					If you want to discuss a project or just say hi feel free.{" "}
					<br className="xs:hidden" /> My inbox is open for all of your needs!
				</p>
			</div>
			<div className="flex justify-center items-center flex-col gap-4 mt-5">
				<div className="relative border border-[#d9d9d9] rounded flex items-center justify-between gap-8 px-5 xs:px-3 py-3 xs:py-2 email-container">
					<p
						className="text-[#d9d9d9] text-lg xs:text-xs font-extralight select-all email"
						ref={emailRef}
					>
						rakibulislam01010010@gmail.com
					</p>
					<button className="relative" onClick={handleCopy}>
						<AiOutlineCopy className="text-[#d9d9d9] text-2xl font-normal" />{" "}
						{open && (
							<span className=" inline-block absolute -top-9 -left-4 text-xs text-white">
								Copied
							</span>
						)}
					</button>
				</div>
				<div className="flex items-center gap-6 text-2xl text-[#d9d9d9] mt-5 social">
					<FaGithubSquare className="icon" />
					<FaLinkedin className="icon" />
					<FaInstagramSquare className="icon" />
					<FaFacebookSquare className="icon" />
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
