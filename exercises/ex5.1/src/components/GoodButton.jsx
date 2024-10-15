import { useContext } from "react";
import { Context } from "contexts/countersContext";

const GoodButton = () => {
    const { increaseGood } = useContext(Context);
    return <button onClick={increaseGood}>Good Button</button>;
}

export default GoodButton;