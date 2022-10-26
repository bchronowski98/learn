const SearchBar = () => {
  return (
    <>
      <h1>SearchBar</h1>
      <form>
        <input type="text" placeholder="Search..." />
        <tr />
        <label>
          <input type="checkbox" /> Only show products in stock
        </label>
      </form>
    </>
  );
};

export default SearchBar;
