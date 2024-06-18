import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <div className="item"><Link to={"/horoscope?sign=Aries"}>Aries </Link></div>
      <div className="item"><Link to={"/horoscope?sign=Taurus"}>Taurus</Link></div>
      <div className="item"><Link to={"/horoscope?sign=Gemini"}>Gemini</Link></div>
      <div className="item"><Link to={"/horoscope?sign=Cancer"}>Cancer</Link></div>
      <div className="item"><Link to={"/horoscope?sign=Leo"}>Leo</Link></div>
      <div className="item"><Link to={"/horoscope?sign=Virgo"}>Virgo</Link></div>


      <div className="item"><Link to={"/horoscope?sign=Libra"}>Libra</Link></div>
      <div className="item"><Link to={"/horoscope?sign=Scorpio"}>Scorpio</Link></div>
      <div className="item"><Link to={"/horoscope?sign=Sagittarius"}>Sagittarius</Link></div>
      <div className="item"><Link to={"/horoscope?sign=Capricornus"}>Capricornus</Link></div>
      <div className="item"><Link to={"/horoscope?sign=Aquarius"}>Aquarius</Link></div>
      <div className="item"><Link to={"/horoscope?sign=Pisces"}>Pisces</Link></div>
    </div>
  );
}

export default HomePage;