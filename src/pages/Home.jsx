import Blogs from "../components/BlogList";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Blogs />
      <Footer />
    </>
  );
}

export default Home;
