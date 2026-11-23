/**
 * Returns value only after the delay has stopped changing.
 */

import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay = 500): T => {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const timout = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(timout);
    }, [value, delay]);
    return debounce;
};
export default useDebounce;
