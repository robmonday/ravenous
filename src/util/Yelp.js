const apiKey = "I9aVAho3nTMKu2DBUxTBTxpN3P2MP45fMtm6jYUbYg3J7-5uHjtU2WHo59972uQp-vSn8P3L2MoYA0ADBUG5WW36u3krutIlI44HxvE_9Q5Qem2GN7jj2YTSDnVtY3Yx;

const Yelp = {
	search(term, location, sortBy) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{ headers: { Authorization: `Bearer ${apiKey}` } }
			).then(
				response => { return response.json(); }
			).then(
				jsonResponse => {
					if (jsonResponse.businesses) {
						return return jsonResponse.businesses.map(
							business => {
								return {
									id: business.id, 
									imageSrc: business.image_url, 
									name: business.name, 
									address: business.address1, 
									city: business.city, 
									state: business.state, 
									zipCode: business.zip_code, 
									category: business.categories[0].title, 
									rating: business.rating, 
									reviewCount: business.review_count
								};
							}
						);
					}
				};
			);
	} 
};

export default Yelp;