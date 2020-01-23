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
    // categories
    handleClick(event) {
        let index = event.target.value;
        let cat = this.state.categories[index];
        // console.log(event, 'event', event.target);
        this.setState({
            selectedCategoryIndex : index
        });
        this.props.handleCategory(cat);
        // let selected = document.getElementById('selected' + index);
        // selected.style.display = 'block';
    }

    // Search bar
    handleInput(event) {
        this.state.textInput = event.target.value;
    }

    handleSearch(event) {
        this.props.handleSearch(this.state.textInput)
    }


  render() {
    return (
        <div className="categories">
            <h1>Categories</h1>
            <ul className="categories__container">
                {this.state.categories.map((category, i) => {
                    return (
                        <li key={i} value={i} onClick={this.handleClick}>
                            {category}
                            <span 
                                className="selected" 
                                style={{
                                    display: this.state.selectedCategoryIndex == i ?
                                    'block': 'none'
                                }}>
                                    &#x2713;
                            </span>
                        </li>
                    )
                })}
            </ul>

            <div className="search-container">
                <input type="text" placeholder="Search news.." name="search" onChange={this.handleInput}/>
                <button type="submit" className="submit-btn" onClick={this.handleSearch}>
                    <span>&#x2315;</span>
                </button>
            </div>
        </div>
    );
  }
}

export default Categories;