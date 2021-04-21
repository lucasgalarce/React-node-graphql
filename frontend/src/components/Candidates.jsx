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
                <li key={candidate._id}> {candidate.name} - {candidate.email}
                    <button>Download CV</button>
                    <button>Delete</button>
                </li>)
            }

        </ul>
    )
}

export const Candidates = fetchedCandidates(CandidatesComponent)