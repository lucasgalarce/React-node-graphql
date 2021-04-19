import React from 'react';

import candidates from '../candidates.json'

import Candidates from './Candidates'

const Grid = () => {
    return (
        <div>

            {/* {candidates.map( candidate => <li key={candidate.id}> {candidate.name} </li>)} */}
            <Candidates/>
            <button>New user</button>
        </div>
    )
}

export default Grid;