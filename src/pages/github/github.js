import React, { Component } from 'react';
import './github.css'
class Github extends Component{
    constructor(){
        super();
        this.state = {
            user: [],
            repo: [],
        };
    }

    componentDidMount(){
        fetch('https://api.github.com/users/kalbzero') 
        .then( response => response.json() ) 
        .then( data => {this.setState({user: data}); } );

        fetch('https://api.github.com/users/kalbzero/repos') 
        .then( response => response.json() ) 
        .then( data => {this.setState({repo: data}); } );
    }

    render(){
        const {user, repo} = this.state;
        
        return <>
           <div className="container">
                 <div className="row">
                    <div className="col-md-3 col-12">
                        <p className="titulo">Meu GitHub Infos</p>
                        <div>
                            <img  className="circle-photo" src={user.avatar_url} alt="Profile photo"></img>
                            <div>
                                <span className="font-weight-bold">Login:</span> @{user.login} <br/>
                                <span className="font-weight-bold">Name:</span> {user.name} <br/>
                                <span className="font-weight-bold">Company:</span> {user.company} <br/>
                                <span className="font-weight-bold">Location:</span> {user.lcoation} <br/>
                                <div className="row">
                                    <div className="col-6">
                                        Seguidores
                                        <p>{user.followers}</p>
                                    </div>
                                    <div className="col-6">
                                        Seguindo
                                        <p>{user.following}</p>
                                    </div>
                                </div>
                                <p>
                                        Bio:<br/>
                                        {user.bio}
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-12">
                    {repo.map(
                        repositorio => 
                            <div className="card bg-card mb-3 mb-md-5">
                                <span className="mobile-text">OI</span>Nome do Repositorio: {repositorio.name} <br/>
                                Descrição: {repositorio.description} <br/>
                                Link do Repositório: <a href={repositorio.html_url}>Clique Aqui</a>
                            </div>
                    )}
                    </div>
                </div>
           </div>
             
        </>;
    }

}

export default Github;