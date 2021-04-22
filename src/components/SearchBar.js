import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.onTermSubmit);
    }

    render() { 
        return ( 
            <div className="search-bar ui inverted segment">
                <form className="ui inverted form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;