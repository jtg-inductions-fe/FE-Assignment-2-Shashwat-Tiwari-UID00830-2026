/**
 * Returns value only after the delay has stopped changing.
 */

import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay = 500): T => {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);
    return debounce;
};
