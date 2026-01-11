
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      
      <h1 className="text-2xl font-bold">Home Page</h1>
    </div>
  );
}
