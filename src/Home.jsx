import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./components/Services";
import BookingTable from "./components/BookingTable";
const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Services/>
      <BookingTable/>
    </>
  );
};

export default Home;
