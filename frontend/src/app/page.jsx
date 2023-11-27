import Footer from "@/components/user_components/Footer";
import Header from "@/components/user_components/Header";
import "../assets/styles/globals.css";
import HeroSection from "@/components/user_components/HeroSection";

function Home() {
  return (
    <div className="poppins">
      <Header />
      <HeroSection />
    </div>
  );
}

export default Home;
