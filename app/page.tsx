"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileBanner from "../src/component/PortfoiloBanner";
import AboutSection from "@/component/AboutSection";
import LoadingScreen from "@/component/PageLoading";
import ServiceCards from "./service/page";
import ExperiencePage from "./My-Exprience/page";
import MyBlogPages from "./myblog/page";
import HiremePage from "./Hireme/page";
import MyPortfolioPage from "./myportfolio/page";
import ContactPage from "./contact/page";
import ProjectCTA from "@/component/Footerspages";
import MySkills from "./myskills/page";
// import Navbar from "./component/SideBar";

export default function Home() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 3000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <>
      {/* <Navbar /> */}
      <ProfileBanner />
      <AboutSection />
      <ServiceCards />
      <MySkills />
      <MyPortfolioPage />
      <HiremePage />
      <MyBlogPages />
      <ContactPage />
      <ProjectCTA />
    </>
  );
}
