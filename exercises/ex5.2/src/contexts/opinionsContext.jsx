import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const OpinionsContext = React.createContext(null)

const OpinionsProviderWrapper = (props) => {

    const [opinions, setOpinions] = useState([])

    const addOpinion = (opinion) => {
        const newOpinion = {
            id: uuid(),
            opinion,
            votes: 0
        }
        setOpinions([...opinions, newOpinion])
    }
    const addVote = (id) => {
        console.log(id);
        
        const updatedOpinions = opinions.map(opinion => {
            if (opinion.id === id) {
                return {
                    ...opinion,
                    votes: opinion.votes + 1
                }
            }
            return opinion
        })
        setOpinions(updatedOpinions)
    }

    const sortedOpinions = opinions.sort((a, b) => b.votes - a.votes)

    const exposedValue = {
        sortedOpinions,
        addOpinion,
        addVote,
    }
    
    return <OpinionsContext.Provider value={exposedValue}>
        { props.children }
    </OpinionsContext.Provider>    
}
    
export {    
    OpinionsContext,
    OpinionsProviderWrapper,    
}