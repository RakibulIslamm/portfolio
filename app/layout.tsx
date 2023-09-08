import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import NavBar from "./components/Shared/Navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Rakibul Islam | Expert web developer",
	description:
		"My name is Rakibul Islam (Rakib), a web developer and UI/UX designer with expertise in C/C++, Javascript, HTML, CSS and a variety of modern web development frameworks and library such as React, Django, Next.js, Redux, Express js, GraphQL etc... I have a passion for problem solving and thrive on tackling complex challenges with creativity and critical thinking.",
	keywords:
		"rakibul islam, expert web developer, web developer, experienced web developer, web app developer, programmer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${poppins.className} max-w-[1440px] mx-auto`}>
				{children}
			</body>
		</html>
	);
}
