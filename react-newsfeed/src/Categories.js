import React, { Component } from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"],
            selectedCategoryIndex: -1
        };

        // categories
        this.handleClick = this.handleClick.bind(this);

        // search bar
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    categories
    handleClick(event) {
        let index = event.target.value;
        let cat = this.state.categories[index];
        this.setState({
            selectedCategoryIndex : index
        });
        this.props.handleCategory(cat);
    }

    // Search bar
    handleInput(event) {
        this.setState({
            textInput: event.target.value
        });
    }

    handleSearch(event) {
        if(this.state.textInput !== undefined && this.state.textInput.length > 0){
            this.props.handleSearch(this.state.textInput)
        }
    }


    componentDidUpdate(prevProps) {

        if(this.props === prevProps){
            return;
        }

        // Clear search input
        if(this.props.searchInput == null) {
            document.getElementById("searchInput").value = '';
            this.setState({
                textInput : ""
            });
        } 

        // Clear category
        if (this.props.selectedCategory == null) {
            this.setState({
                selectedCategoryIndex : -1
            });
        }
    }

    render() {
        return (
            <div className="categories">

                <ul className="categories__container">
                    {this.state.categories.map((category, i) => {
                        return (
                            <li key={i} value={i} onClick={this.handleClick}>
                                <span
                                    style={{
                                        display: this.state.selectedCategoryIndex === i ?
                                        'block': 'none',
                                        
                                    }}>
                                    &#x2713;
                                </span>
                                {category}
                            </li>
                        )
                    })}
                </ul>

                <div className="search-container">
                    <input id="searchInput" type="text" placeholder="Search news.." name="search" onChange={this.handleInput}/>
                    <button type="submit" className="submit-btn" onClick={this.handleSearch}>
                        <span>&#x2315;</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Categories;