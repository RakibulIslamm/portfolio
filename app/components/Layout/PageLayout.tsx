"use client";
import Menu from "../Shared/Menu";
import NavBar from "../Shared/Navbar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		window.addEventListener("resize", () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		});

		return () => {
			window.removeEventListener("resize", () => {
				// We execute the same script as before
				let vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty("--vh", `${vh}px`);
			});
		};
	}, []);

	return (
		<>
			<NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="w-full min-h-screen absolute top-0 left-0">
				<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</div>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div key={pathname} className=" overflow-hidden">
					{children}
				</motion.div>
			</AnimatePresence>
		</>
	);
}
