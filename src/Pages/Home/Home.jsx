import ContactUs from "../../Components/ContactUs/ContactUs";
import Featured from "../../Components/Featured/Featured";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";
import "./home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
