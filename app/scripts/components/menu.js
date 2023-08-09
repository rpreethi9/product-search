/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor(props) {
        super(props);
        this.state = {
            showingSearch: false,
            searchQuery: ''
        };
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch = async (e) => {
        // Start Here
        const query = e.target.value;
        this.setState({
            searchQuery: query
        });
        // Implementing search logic here
        try{
            const filteredResults = await this.searchLogic(query);
            this.props.onSearchResults(filteredResults);
        } catch (error) {
            console.error(error);
        }
        
    }

    searchLogic = async (query) => {
        // Implementing search logic here
        // Return the filtered results based on the query

        try {
            const response = await fetch('http://localhost:3035/server/data');
            const jsonData = await response.json();
            return jsonData.filter((item) =>
                    item.name.toLowerCase().includes(query.toLowerCase())
        );
        } catch (error) {
            throw new Error('Error fetching search results');
        }
    
      };

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                                <input type="text" value={this.state.searchQuery} onChange={this.onSearch} placeholder="Search..."/>
                            </div>
                        </nav>
                    </div>
                </div>
                
            </header>
        );
    }


}

// Export out the React Component
export default Menu;