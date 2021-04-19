import React, {useState, useEffect} from 'react';

import mockCandidates from '../candidates.json'

const Candidates = () => {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        setCandidates(mockCandidates)

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

export default Candidates;