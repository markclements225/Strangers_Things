import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const history = useHistory();
    const onSubmit = (event) => {
        history.push(`?s=${searchQuery}`);
        event.preventDefault();
    };

    return (
        <form
            onSubmit={onSubmit}
        >
            <label>
                <span>
                    Search posts
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="This doesn't work :)"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;