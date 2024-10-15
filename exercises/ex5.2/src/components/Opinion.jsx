import { useContext } from "react"
import { OpinionsContext } from "contexts/opinionsContext"

const Opinion = ({id, opinion, votes}) => {
    const {addVote} = useContext(OpinionsContext)

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