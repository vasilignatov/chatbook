import { useEffect, useState } from "react";

function useDebaunce(value, delay = 500) {
    const [debauncedValue, setDebauncedValue] = useState();

    useEffect(() => {
        if (value !== '') {
            const id = setTimeout(() => {
                setDebauncedValue(value);
            }, delay);

            return () => {
                clearTimeout(id);
            }
        }
    }, [value, delay]);

    return debauncedValue;
}

export default useDebaunce;