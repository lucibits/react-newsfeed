import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="cardsContainer"> 
                <div className="title-container">
                        <h1 className="activeTab">Latest news</h1>
                </div>
                
                {this.state.data.map((item, index) => (
                    <a href={item.url} target="_blank" key={index}>
                        <div className="card">
                        
                            <div className="card__img" style={{ backgroundImage: "url("+item.urlToImage+")" }}></div>
                                
                            <div className="card__body">
                                <p className="date">{new Date(item.publishedAt).toLocaleDateString()}</p>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>  
                        
                        </div> 
                    </a>              
                ))}
                
            </div>
        )
    }
    
}