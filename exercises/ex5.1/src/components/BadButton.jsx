import { useContext } from "react";
import { Context } from "contexts/countersContext";

const BadButton = () => {
    const { increaseBad } = useContext(Context);
    return <button onClick={increaseBad}>Good Button</button>;
}

export default BadButton;