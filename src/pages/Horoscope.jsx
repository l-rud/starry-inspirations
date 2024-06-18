import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import HoroscopeDisplay from "./HoroscopeDisplay";

function Horoscope() {
    const queryParameters = new URLSearchParams(window.location.search);
    const sign = queryParameters.get("sign");

    const [horoscope, setHoroscope] = useState(null);

    const getHoroscope = async (searchTerm) => {
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          const randomItem = data[Math.floor(Math.random() * data.length)];
          setHoroscope({"text": randomItem.text})
        });
    };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
        getHoroscope();
    }, []);

    return (
        <div className="horoscope-container">
            <HoroscopeDisplay horoscope={horoscope} />
            <Link to={"/"}>Back</Link>
        </div>
    );
}

export default Horoscope;