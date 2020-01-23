import React, { Component } from 'react';
import Feed from './Feed.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Categories from './Categories.js';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null,
            searchInput: null
        };

        this.handleCategory = this.handleCategory.bind(this);

        this.handleSearch = this.handleSearch.bind(this);

        this.handleLatestNews = this.handleLatestNews.bind(this);
    }

    // category
    handleCategory = (category) => {
        this.setState({
            selectedCategory: category,
            searchInput: null
        });
    }

    // search
    handleSearch = (input) => {
        this.setState({
            searchInput: input,
            selectedCategory: null
        });
    }

    // reload latest news
    handleLatestNews = () => {
        this.setState({
            selectedCategory: null,
            searchInput: null
        });
    }


    render() {
        return (
            <div className="wrapper">
                <Header />
                <main className="main">
                    <div className="categoriesCol">
                        <div className="title-container">
                            <h1>Categories</h1>
                        </div>
                        <Categories className="categories" handleCategory={this.handleCategory} handleSearch={this.handleSearch} selectedCategory={this.state.selectedCategory} searchInput={this.state.searchInput}/>

                    </div>
                    <div className="feedCol">
                        <div className="title-container latest">
                            <h1 onClick={this.handleLatestNews}>Latest news</h1>
                        </div>
                        <Feed selectedCategory={this.state.selectedCategory} searchInput={this.state.searchInput} />
                    </div>
                    
                </main>
                <Footer />
            </div>
            
        );
    }
    
}

export default App