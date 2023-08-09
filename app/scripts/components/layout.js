/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import Menu from './menu';
import Home from './home';

class Layout extends React.Component {

    /**
     * Main constructor for the Layout Class
     * @memberof Layout
     */
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    handleSearchResults = (searchResults) => {
        this.setState({
            results: searchResults
        });
    };

    /**
     * Renders the Layout in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Layout
    */
    render() {
        return (
            <div>
                <Menu onSearchResults={this.handleSearchResults} />
                <Home searchResults={this.state.results} />
            </div>
        );
    }


}

// Export out the React Component
export default Layout;