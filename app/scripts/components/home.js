/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Home
     */
    constructor(props) {
        super(props);
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        const { searchResults } = this.props;

        return (
            <section id="home">
                <div className="content">
                    {searchResults.length > 0 ? (
                    <div className="product-grid">
                        {searchResults.map((product) => (
                        <div key={product._id} className="product-item">
                            <img src={product.picture} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.about}</p>
                            <h4>Price: {product.price}</h4>
                        </div>
                        ))}
                    </div>
                    ) : (
                    <h2>No results found</h2>
                    )}
                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;