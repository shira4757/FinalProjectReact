import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyAUmvRRuOjEojpsY82IxFo133HpbSHReJE';

const CityStreetList = () => {
    const [cities, setCities] = useState([]);
    const [streets, setStreets] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCities();
    }, []);

    const fetchCities = async () => {
        try {
            const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cities+in+Israel&key=${API_KEY}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const cityNames = data.results.map(city => city.name);
            setCities(cityNames);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch cities:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    const fetchStreets = async (city) => {
        setLoading(true);
        try {
            const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY}`;
            const geocodeResponse = await fetch(geocodeUrl);
            if (!geocodeResponse.ok) {
                throw new Error(`HTTP error! status: ${geocodeResponse.status}`);
            }
            const geocodeData = await geocodeResponse.json();
            const location = geocodeData.results[0].geometry.location;
            const placeUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=10000&type=route&key=${API_KEY}`;
            const placeResponse = await fetch(placeUrl);
            if (!placeResponse.ok) {
                throw new Error(`HTTP error! status: ${placeResponse.status}`);
            }
            const placeData = await placeResponse.json();
            const streetNames = placeData.results.map(street => street.name);
            setStreets(streetNames);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch streets:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        fetchStreets(city);
    };

    return (
        <div>
            <h1>Cities and Streets in Israel</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div>
                <h2>Cities:</h2>
                <ul>
                    {cities.map((city, index) => (
                        <li key={index} onClick={() => handleCitySelect(city)}>{city}</li>
                    ))}
                </ul>
            </div>
            {selectedCity && (
                <div>
                    <h2>Streets in {selectedCity}:</h2>
                    <ul>
                        {streets.map((street, index) => (
                            <li key={index}>{street}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CityStreetList;
