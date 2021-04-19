import React from 'react';

import candidates from '../candidates.json'

const Candidates = () => {
    return (
        <ul>
            {candidates.map( candidate => 
                <li key={candidate.id}> {candidate.name} 
                    <button>Download</button>
                    <button>Delsete</button>
                </li>)
            }
        </ul>
    )
}

export default Candidates;