import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const controller = new AbortController()
      const { signal } = controller

        setTimeout(() => {
          fetch(url, { signal })
          .then(res => {
            if(!res.ok){
              throw Error("erm... sorry we could not fetch the data for that resource ¯\_(ツ)_/¯")
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
          })
          .catch((error) => {
            if(error.name === "AbortError") {
            }else {
              setIsLoading(false);
              setError(error.message);
            }
          })
        }, 1000);

        return () => controller.abort();
      },[]
    );
      
    return { data, isLoading, error }
}
 
export default useFetch;