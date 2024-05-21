import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React, { useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Projects from "./Projects/Projects";
import { DataProvider } from "@/helpers/dataHelpers/dataProvider";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home">
      <DataProvider url="/projects.json">
        <Projects />
      </DataProvider>
    </main>
  );
}
