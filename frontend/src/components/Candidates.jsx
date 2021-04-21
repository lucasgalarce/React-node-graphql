import React, {useState, useEffect} from 'react';

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost';

const fetchedCandidates = graphql(gql` 
    {
        Users {
            email
            name
        }
    }
`);


const CandidatesComponent = ({ data: { Users = [] }  } ) => {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        setCandidates(Users)

    }, []);

    return (
        <ul>
            {candidates.map( candidate => 
                <li key={candidate.id}> {candidate.name} 
                    <button>Download</button>
                    <button>Delete</button>
                </li>)
            }

        </ul>
    )
}

export const Candidates = fetchedCandidates(CandidatesComponent)