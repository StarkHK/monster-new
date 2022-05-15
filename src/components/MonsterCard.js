import React from 'react';

import '../styling/monsterCard.css';

const MonsterCard = ({ monster }) => {
	console.log('monster', monster);
	return (
		<div className='card-container'>
			<img
				alt='monster'
				src={`https://robohash.org/${monster.id}?set=set2&size=120x120`}
			></img>
			<h2>{monster.name}</h2>
			<p>{monster.email}</p>
		</div>
	);
};

export default MonsterCard;
