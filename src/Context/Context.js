import React, { useEffect, useState } from "react";
import jsonData from '../data/data.json'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState({show:false, msg:""});
    const [query, setQuery] = useState("");

    const getData = () => {
        setIsLoading(true)
        console.log(data);
        try{
            setData(jsonData);
            setIsLoading(false);
        } catch(e) {
            setError({
                show: true,
                msg: data.Error
            })
        }
    }

    useEffect(() => {
        getData();
    }, [setData])

    return (
        <AppContext.Provider value={{isLoading, data, error, query, setQuery, setData}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}