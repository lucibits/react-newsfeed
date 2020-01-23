import React, { Component } from 'react';
import './Api.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Categories from './Categories.js';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: [],
        urlBase: 'https://newsapi.org/v2/',
        urlTopHeadlines: 'top-headlines?',
        urlSources: 'sources=google-news',
        urlCategory: 'category=',
        urlEverything: 'everything?q=',
        urlKey: '&apiKey=5b9005b25af8476e8361b0e0676518f6'
      };

      this.handleCategory = this.handleCategory.bind(this);

      this.handleSearch = this.handleSearch.bind(this);
    }

    handleCategory(category) {
        var url = this.state.urlBase + this.state.urlTopHeadlines + this.state.urlCategory + category + this.state.urlKey;
        this.setState({
            isLoaded: false
        });
        this.fetchNews(url);
    }

    handleSearch(input) {
        var url = this.state.urlBase + this.state.urlEverything + input + this.state.urlKey;
        this.setState({
            isLoaded: false
        });
        this.fetchNews(url);
    }

  
    componentDidMount() {
        this.fetchNews(this.state.urlBase + this.state.urlTopHeadlines + this.state.urlSources + this.state.urlKey);
    }

    removeDuplicity(datas){
        return datas.filter((item, index,arr)=>{
        const c = arr.map(item=> item.title);
        return index === c.indexOf(item.title)
      })
    }

    fetchNews(url){
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                isLoaded: true,
                data: this.removeDuplicity(result.articles)
            });
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="wrapper">
                    <Header />
                    <main className="main">
                        <Categories className="categories" handleCategory={this.handleCategory} handleSearch={this.handleSearch}/>
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

                    </main>
                    <Footer />
                </div>
                
            );
        }
    }
}

export default App