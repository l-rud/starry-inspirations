export default function HoroscopeDisplay({ horoscope }) {

    // Function to return loaded JSX
    const loaded = () => {
        return (
            <>
                <h1>{horoscope.text}</h1>
            </>
        );
    };

    // Function to return loading JSX
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // Ternary operator will determine which functions JSX we will return
    return horoscope ? loaded() : loading();
}