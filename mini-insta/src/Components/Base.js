import React, { Component } from 'react'

export class Base extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className="row justify-content-end bg-light">
                    <button className='btn btn-primary m-2'>Logout</button>
                </div>
                
                
            </div>
        )
    }
}

export default Base
