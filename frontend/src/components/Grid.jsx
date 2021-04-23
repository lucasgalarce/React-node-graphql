import React from 'react';
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button'

import { Candidates } from './Candidates'

const Grid = () => {
    return (
        <div className="container ">
            <div className="row justify-content-center ">
                <div className="col-6">
                    <Candidates/>
                    <Link to="/form">
                        <Button 
                            variant="primary">
                                New user
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Grid;