import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import HoroscopeDisplay from "./HoroscopeDisplay";

function Horoscope() {
    const queryParameters = new URLSearchParams(window.location.search);
    const sign = queryParameters.get("sign");

    const [horoscope, setHoroscope] = useState(null);

    const getHoroscope = async (searchTerm) => {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
        fetch(`${import.meta.env.VITE_apiBaseUrl}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setHoroscope({"text": data.content})
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