import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Ui/Header'
import Search from './Components/Ui/Search'
import CharacterGrid from './Components/Character/CharacterGrid'
import Axios from 'axios';

// Used the State and Effect hooks.
function App() {
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState('')

  // this is called everytime when the query value get changed. query is dependency.
  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data) 
      setisLoading(false)
    }
    fetchItems();

  }, [query]) // dependency

  return (
    <div className="container">
       <Header />
       
       {/* using props to send value and get value */}
       <Search getQuery={ (q) => setQuery(q)}/>
       <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
