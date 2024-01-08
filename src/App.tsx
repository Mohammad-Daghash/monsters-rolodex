import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]);
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchfield)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchfield]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchfield(event.target.value);
  };

  if (monsters.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        placeholder="search monster"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
