import { useEffect } from 'react';

// API key: 38c34efd

const API_URL = 'http://www.omdbapi.com?apikey=38c34efd';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);
    return (
        <h1>App</h1>
    );
}

export default App;
