import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);

    const updateCount = (newCount) => {
        localStorage.setItem(key, JSON.stringify(newCount));
        setCount(newCount);
    }

    return [count, updateCount];
};

export default useLocalStorage;