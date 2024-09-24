import { useState } from "react";

const ClickCounter = ({ title, message }) => {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
    const [showMessage, setShowMessage] = useState(false);
    
    const handleCount = () => {
        setCount(count + 1);
        localStorage.setItem("count", JSON.stringify(count + 1));
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>Count :{count}</p>
            <button onClick={() => handleCount()} onMouseEnter={() => setShowMessage(true)} onMouseLeave={() => setShowMessage(false)}>
                {showMessage ? '"Please click on me now !"' : 'Click'}
            </button>
            {count >= 10 && <p>{message}</p>}
        </div>
    );
};

export default ClickCounter;