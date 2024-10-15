import { useContext } from "react";
import { Context } from "contexts/opinionsContext";

const AddOpinion = () => {
    const { addOpinion } = useContext(Context)

    const handleClick = (e) => {
        e.preventDefault()
        const opinion = document.querySelector('input').value
        addOpinion(opinion)
    }

    return (
        <form>
            <input type="text" />
            <button onClick={handleClick}>Add</button>
        </form>
    )
}

export default AddOpinion;