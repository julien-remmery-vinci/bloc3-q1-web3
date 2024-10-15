import { useContext } from "react"
import { Context } from "contexts/opinionsContext"

const Opinion = ({id, opinion, votes}) => {
    const {addVote} = useContext(Context)

    const handleClick = () => {
        addVote(id)
    }

    return (
        <li>
            {opinion} : {votes}
            <button onClick={handleClick}>Vote</button>
        </li>
    )
}

export default Opinion;