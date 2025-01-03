import axios from "axios";
import { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setData(response.data.data); // La lista de animes está aquí
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, fetchData, loading, error };
};

export default useFetch;
