import { useState } from "react";

const ClickCounter = ({ title, message }) => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            {count >= 10 ? <p>{message}</p> : ''}
        </div>
    );
};

export default ClickCounter;