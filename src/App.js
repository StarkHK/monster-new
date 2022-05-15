import React, { useState, useEffect } from 'react';
import SearchInput from './components/SearchInput';
import MonsterList from './components/MonsterList';
import './App.css';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [search, setSearch] = useState('');
	const [filteredMonster, setFilteredMonster] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((monsters) => {
				setMonsters(monsters);
				setFilteredMonster(monsters);
			});
	}, []);

	useEffect(() => {
		filterCards(search);
	}, [search]);

	const filterCards = (search) => {
		const filter = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(search.toLowerCase())
		);

		setFilteredMonster(filter);
	};
	return (
		<div className='App'>
			<SearchInput
				placeholder={'Search Monsters'}
				handleChange={(e) => setSearch(e.target.value)}
			/>

			<MonsterList monsters={filteredMonster} />
		</div>
	);
};
export default App;
