import React, { Component } from 'react'

class Apidragon extends Component {
    constructor(){
        super();
        this.state = {listDragons: [], dragon: {}, id_dragon: 0};
    }

    componentDidMount(){
        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon') 
        .then( response => response.json() ) 
        .then( data => {this.setState({listDragons: data}); } );
    }

    render(){
        const {listDragons} = this.state;
        return <>
            <div className="container">
                <div className="row">
                    <div className="col">

                        {listDragons.map(
                            dragon => <div>
                                <p>{dragon.id}</p>
                                <p>{dragon.createdAt}</p>
                                <p>{dragon.name}</p>
                                <p>{dragon.type}</p>
                                <p>{dragon.histories}</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>;
    }
}

export default Apidragon;