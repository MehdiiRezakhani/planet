"use client";
import { useEffect } from "react";
//store
import useStore from "./store";
//components
import MainCard from "./components/MainCard";
import SideCard from "./components/SideCard";
import Loading from "./components/Loading";
import Footer from "./components/footer";

export default function Home() {
  const { getData, film, filmPlanets, films, loading, allPlanets } = useStore();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="px-16 mb-12">
      {/* title */}
      <h1 className="text-center text-xl text-white font-extrabold my-10">
        Planets of &quot;{film ? film : "..."}&quot;
      </h1>
      {/* Main */}
      {filmPlanets.length ? (
        <div className="grid grid-cols-1 gap-4">
          {filmPlanets.map((planet) => (
            <MainCard key={planet.name} planet={planet} />
          ))}
          {filmPlanets.map((planet) => (
            <SideCard key={planet.name} planet={planet} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
      {/* Footer */}
      <Footer/>
    </div>
  );
}
