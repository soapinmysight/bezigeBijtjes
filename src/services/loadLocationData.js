import { useEffect, useState } from "react";
// Hook for loading location data from API
const useLoadingData = () => {
    // State to hold location data
    const [locationData, setLocationData] = useState([]);
    // Const to hold api url
    const API_URL = "https://raw.githubusercontent.com/soapinmysight/bezigeBijtjes/master/assets/api/locationData.json?token=GHSAT0AAAAAACRFT4BZ6JODEH4HGLYXK4FYZUG2MBA"

    useEffect(() => {
        (async () => {
            try {
                // Fetch data from the API
                const response = await fetch(API_URL);
                // Parse the response as JSON
                const apiData = await response.json();
                // Update the state with the fetched data
                setLocationData(apiData);
            } catch (e) {
                // Log an error message if the fetching fails
                console.log('could not get location data');
            }
        })();
    }, []); // Empty dependency array to ensure the effect runs only once on mount

    // Return the location data so it can be used
    return locationData;
};

export default useLoadingData;
