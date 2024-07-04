import { useEffect, useState } from "react";

const useLoadingData = () => {
    const [locationData, setLocationData] = useState([]);
    const API_URL = "https://raw.githubusercontent.com/soapinmysight/bezigeBijtjes/master/assets/api/locationData.json?token=GHSAT0AAAAAACRFT4BYAYDGO5DBRVL6KHJUZUGYZHA";

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(API_URL);
                const apiData = await response.json();
                setLocationData(apiData);
            } catch (e) {
                console.log('could not get location data');
            }
        })();
    }, []);

    return locationData;
};

export default useLoadingData;
