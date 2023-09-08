"use client";
import { useState, useEffect } from "react";
import Projects from "./components/Home/Projects/Projects";
import HeroSection from "./components/Home/HeroSection/HeroSection";
import AboutMe from "./components/Home/AboutMe/AboutMe";
import GetInTouch from "./components/Shared/GetInTouch";
import Menu from "./components/Shared/Menu";
import PageLayout from "./components/Layout/PageLayout";

export default function Home() {
	return (
		<PageLayout>
			<main className="w-full min-h-screen relative">
				<HeroSection />
				<Projects />
				<AboutMe />
				<GetInTouch />
			</main>
		</PageLayout>
	);
}
