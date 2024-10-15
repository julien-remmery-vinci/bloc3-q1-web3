import { useContext } from "react";
import { Context } from "contexts/countersContext";

const ResetButton = () => {
    const { resetAll } = useContext(Context);
    return <button onClick={resetAll}>Good Button</button>;
}

export default ResetButton;