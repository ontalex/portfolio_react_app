import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchGet = (link) => {

        const [data, setData] = useState({ hits: [] });
        const [url, setUrl] = useState(link);
        const [isError, setIsError] = useState(false);
        const [isLoading, setIsLoading] = useState(false);

        useEffect( () => {
                const fetchData = async () => {
                        setIsError(false);
                        setIsLoading(true);

                        try {
                                const result = await axios(url);

                                setData({ hits: result.data });

                                console.group('first');
                                console.log("data: ", result.data);
                                console.log("error: ", isError);
                                console.groupEnd();
                        } catch (error) {
                                setIsError(true);
                        }

                        setIsLoading(false);

                };

                fetchData();


        }, []);

        return [{ data, isError, isLoading }, setUrl];

}