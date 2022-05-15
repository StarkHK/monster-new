import React from 'react';
import MonsterCard from './MonsterCard';

import '../styling/monsterList.css';

const MonsterList = ({ monsters }) => {
	return (
		<div className='card-list'>
			{monsters.map((monster) => (
				<MonsterCard monster={monster} />
			))}
		</div>
	);
};

export default MonsterList;
