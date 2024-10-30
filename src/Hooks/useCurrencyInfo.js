import { useEffect, useState } from "react";


function useCurrncyInfo([currency, date]) {
    const [data, setData] = useState({})
    // console.log(currency);
    // console.log(date);
    useEffect(() => {
        fetch(`https://${date}.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency, date])

    console.log(data)
    return data
}

export default useCurrncyInfo;

