import React from 'react';
import '../styling/search.css';

const SearchInput = ({ placeholder, handleChange }) => {
	return (
		<input
			className='search'
			type={'search'}
			onChange={handleChange}
			placeholder={placeholder}
		/>
	);
};

export default SearchInput;
