import React, { Component } from 'react'

export default class Info extends Component {
    constructor(props){
        super(props)
    }
    render( ) {
        const {data,id} =this.props
        console.log(data.id)
        return (
            <div>
            {/* {data.map(el=>  )} */}

           <img src={ data.image}/>
           <p>{ data.name}</p>
           <p>{ data.species}</p>
           <p>{ data.description}</p>
            </div>
        )
    }
}
