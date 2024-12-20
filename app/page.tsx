import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="mx-auto h-screen flex flex-col justify-between">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
