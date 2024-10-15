import { useContext } from "react";
import { Context } from "contexts/countersContext";

const OkButton = () => {
    const { increaseOk } = useContext(Context);
    return <button onClick={increaseOk}>Good Button</button>;
}

export default OkButton;