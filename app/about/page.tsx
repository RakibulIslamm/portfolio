import React from "react";
import PageLayout from "../components/Layout/PageLayout";

type Props = {};

const AboutPage = (props: Props) => {
	return (
		<PageLayout>
			<div className="min-h-screen w-full flex flex-col justify-center items-center relative z-10">
				<h2 className="text-3xl font-bold text-white">This is about page</h2>
			</div>
		</PageLayout>
	);
};

export default AboutPage;
