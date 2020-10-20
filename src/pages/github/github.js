import React, { Component } from 'react';

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
        console.log(repo);
        return <>
            <div className="row">
                <div className="col-3">
                    <p>Meu GitHub Infos</p>
                    <p>
                        Login: @{user.login} <br/>
                    </p>
                </div>
                <div className="col-9">
                {repo.map(
                    repositorio => 
                        <p>
                            Nome do Repositorio: {repositorio.name} <br/>
                            Descrição: {repositorio.description} <br/>
                            Link do Repositório: <a href={repositorio.html_url}>Clique Aqui</a>
                        </p>
                )}
                </div>
            </div>
             
        </>;
    }

}

export default Github;