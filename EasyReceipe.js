import React, { useEffect , useState} from "react" ; 3.5k

const App = () => {

const APIIID = "";
const APIKEY = "";

const [receipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('');

useEffect(() => {
    getRecipes();

}, [query]);

const getRecipes = async () => {
    const response = await fetch(

    'https://api.edamam.com/search?q=${query}&app_id=${APIID}&app+key=${APIKEY}'
    )
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
};

const updateSearch = e => {
    setSearch(e.target.value);
};

const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
};

return (
    <div classname="App">
        <form onSubmit={getSearch} className="search-form">
            <Input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            />
            <button className="search-button" type="submit">
                Receipe It!
            </button>
        </form>
        {receipes.map(receipe => (
            <Receipe
            key = {receipe.receipe.label}
            title = {receipe.receipe.tile }
            calories = {receipe.receipe.calories}
            image = {receipe.receipe.image}
            />
        ))}
    </div>
);
};

export default App;
