function SearchBar({user_ip, searchQuery, setIPAddress}) {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        const ipValue = event.target.IPSearch.value; // Get the input value
        setIPAddress(ipValue); // Update the state with the input value

    };

    return (
        <form className="searchBar" onSubmit={handleSubmit}>
            <input
                name="IPSearch"
                placeholder={user_ip}
            ></input>
            <button type='submit'>
                <img
                    src={`${process.env.PUBLIC_URL}/images/icon-arrow.svg`}
                />
            </button>
        </form>
    );
}

export default SearchBar;
