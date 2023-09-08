"use client";
import Link from "next/link";
import { useEffect, Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

type Props = {
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Menu = ({ menuOpen, setMenuOpen }: Props) => {
	const pathname = usePathname();

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [menuOpen]);

	const menu_item_style = `relative h-[60px] w-[300px] xs:w-[200px] flex items-center justify-center overflow-hidden text-2xl xs:text-xl text-gray-400 transition-all delay-100 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom-right before:scale-x-0 before:transform before:bg-gray-100 before:transition-transform before:duration-700 before:ease-in-out hover:text-gray-950 hover:font-bold hover:before:origin-bottom-left hover:before:scale-x-100 drop-shadow-text-shadow`;

	return (
		<div
			className={`max-w-[1440px] mx-auto bg-slate-950 bg-opacity-90 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col py-10 ${
				menuOpen
					? "visible opacity-100 filter backdrop-blur-[30px] min-h-screen h-full w-full z-[999]"
					: "opacity-0 invisible w-0 h-0"
			} transition-all duration-500 z-0`}
		>
			<div className="flex flex-col gap-5 xs:gap-2 text-center text-gray-400 text-2xl font-semibold relative z-[9999]">
				<Link
					onClick={() => setMenuOpen((prev) => !prev)}
					href={"/"}
					className={`${menu_item_style} ${
						pathname === "/" && "before:scale-x-100 text-gray-950 font-bold"
					}`}
				>
					<span className="relative z-40">Home</span>
				</Link>
				<Link
					onClick={() => setMenuOpen((prev) => !prev)}
					href={"/portfolio"}
					className={`${menu_item_style} ${
						pathname === "/portfolio" &&
						"before:scale-x-100 text-gray-950 font-bold"
					}`}
				>
					<span className="relative z-40">Portfolio</span>
				</Link>
				<Link
					onClick={() => setMenuOpen((prev) => !prev)}
					href={"/about"}
					className={`${menu_item_style} ${
						pathname === "/about" &&
						"before:scale-x-100 text-gray-950 font-bold"
					}`}
				>
					<span className="relative z-40">About</span>
				</Link>
				<Link
					onClick={() => setMenuOpen((prev) => !prev)}
					href={"/blogs"}
					className={`${menu_item_style} ${
						pathname === "/blogs" &&
						"before:scale-x-100 text-gray-950 font-bold"
					}`}
				>
					<span className="relative z-40">Blogs</span>
				</Link>
				<Link
					onClick={() => setMenuOpen((prev) => !prev)}
					href={"/contact"}
					className={`${menu_item_style} ${
						pathname === "/contact" &&
						"before:scale-x-100 text-gray-950 font-bold"
					}`}
				>
					<span className="relative z-40">Contact</span>
				</Link>
			</div>
			<button
				onClick={() => setMenuOpen((prev) => !prev)}
				className="text-white text-3xl absolute top-5 right-5"
				title="Close"
			>
				<AiOutlineClose />
			</button>
		</div>
	);
};

export default Menu;

// before:origin-bottom-left before:scale-x-100
