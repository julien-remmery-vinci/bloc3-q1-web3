import { OpinionsContext } from "contexts/opinionsContext";
import { useContext } from "react";
import Opinion from "./Opinion";

const OpinionsList = () => {
    const { sortedOpinions } = useContext(OpinionsContext)
    return (
        <ul>
            {sortedOpinions.map(opinion => (
                <Opinion key={opinion.id} id={opinion.id} opinion={opinion.opinion} votes={opinion.votes} />
            ))}
        </ul>
    )
}

export default OpinionsList;