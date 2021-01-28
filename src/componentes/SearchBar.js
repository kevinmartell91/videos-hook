import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // calling  the callback of parent component
        onFormSubmit(term);
    }
    
    //declaring inside the function
    return (
        <div className="column">
            <form onSubmit={onSubmit} className="ui form">
                <div className="filed">

                    <label htmlFor="serach"> Search box: </label>
                    <input
                        id="serach"
                        type="text"
                        value={term}
                        onChange={onInputChange} />
                </div>
            </form>
        </div>
    )

}


export default SearchBar;