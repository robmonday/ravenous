import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

/* THIS HARDCODED OBJECT & ARRAY ARE NOT NEEDED NOW THAT WE ARE USING YELP API INSTEAD
const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian/Pizza',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business];
*/

function App() {

  const [businesses, setBusinesses] = useState([]);  // setState used because function component

  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} /> 
      {/* API call is needed here */}
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
