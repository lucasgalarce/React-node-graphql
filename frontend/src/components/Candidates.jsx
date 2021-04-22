import React from 'react';

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost';

const fetchedCandidates = graphql(gql` 
query fetchedCandidates {
        Users {
            email
            name
            _id
        }
    }
`);


const CandidatesComponent = ({ data: { Users = [] }  } ) => {

    return (
        <ul>
            {Users.map( candidate => 
                <li key={candidate._id}> {candidate.name} - {candidate.email}
                    <button>Download CV</button>
                    <button>Delete</button>
                </li>)
            }

        </ul>
    )
}

export const Candidates = fetchedCandidates(CandidatesComponent)