import useLocalStorage from "hooks/useLocalStorage";
import { useState } from "react";

const ClickCounter = ({ title, message }) => {
    const [count, updateCount] = useLocalStorage("count", 0);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div>
            <h2>{title}</h2>
            <p>Count :{count}</p>
            <button 
            onClick={() => updateCount(count + 1)} 
            onMouseEnter={() => setShowMessage(true)} 
            onMouseLeave={() => setShowMessage(false)}>
                {showMessage ? '"Please click on me now !"' : 'Click'}
            </button>
            {count >= 10 && <p>{message}</p>}
        </div>
    );
};

export default ClickCounter;