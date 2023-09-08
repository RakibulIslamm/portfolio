import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Rakibul Islam",
	description:
		"I'm Rakibul Islam (Rakib), a web developer and UI/UX designer with expertise in C/C++, Javascript, HTML, CSS, and a variety of modern web development frameworks and library such as React, Django, Next.js, Redux, Express js, and GraphQL. I have a passion for problem solving and thrive on tackling complex challenges with creativity and critical thinking.",
	keywords:
		"rakibul islam, expert web developer, web developer, experienced web developer, web app developer, programmer",
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
