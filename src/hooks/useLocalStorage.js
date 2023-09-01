import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {
        try {
            const item = localStorage.getItem(key);

            return item
                ? JSON.parse(item)
                : initialValue
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    })

    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        } catch (error) {
            console.log(error);
        }
    }

    return [state, setItem];
}

export default useLocalStorage;