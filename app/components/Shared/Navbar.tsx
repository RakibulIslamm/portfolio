import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ menuOpen, setMenuOpen }: Props) => {
	return (
		<div className="w-full max-w-[1440px] mx-auto flex justify-between items-center fixed z-50 p-[22px]">
			<Link href={"/"}>
				<Image
					width={36}
					height={36}
					className="w-[36px] h-[36px] sm:w-[26px] sm:h-[26px] xs:w-[20px] xs:h-[20px] object-cover logo "
					src="/images/riLogo.png"
					alt="ri logo"
				/>
			</Link>
			<button
				onClick={() => setMenuOpen((prev) => !prev)}
				className="flex items-end flex-col gap-3 sm:gap-2 xs:gap-2 relative menu-icon"
			>
				<span className="w-[36px] sm:w-[30px] xs:w-[25px] h-[2px] line-1 bg-[#d9d9d9] bar "></span>
				<span className="w-[25px] sm:w-[24px] xs:w-[20px] h-[2px] line-2 bg-[#d9d9d9] bar "></span>
				<span className="w-[36px] sm:w-[30px] xs:w-[25px] h-[2px] line-3 bg-[#d9d9d9] bar "></span>
			</button>
		</div>
	);
};

export default NavBar;
