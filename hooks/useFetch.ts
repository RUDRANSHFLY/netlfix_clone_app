import { useState, useEffect } from "react"

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {

        try {
            setIsLoading(true)
            setError(null)
            const result = await fetchFunction();
            setData(result)
        } catch (err) {
            setError(err instanceof Error ? err : new Error("An unknown error occurred"))
        } finally {
            setIsLoading(false)
        }

    }


    const reset = () => {
        setData(null);
        setIsLoading(false);
        setError(null);
    }


    useEffect(() => {
        if (autoFetch) {
            fetchData()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return { data, loading, error, refetch: fetchData, reset }

}


export default useFetch;