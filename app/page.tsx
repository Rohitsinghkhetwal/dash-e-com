import AllProducts from "@/component/AllProducts";
import CardSection from "@/component/CardSection";
import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import Newsletter from "@/component/Newsletter";





export default function Home() {

  return (
    <div className="flex min-h-screen w-full flex-col ">
      <Navbar/>
      <HeroSection/>
      <CardSection/>
      <AllProducts/>
      <Newsletter/>
      
    </div>
  );
}
