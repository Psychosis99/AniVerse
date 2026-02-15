const { NekosiaAPI } = require('nekosia.js');

(async () => {
	console.log(await NekosiaAPI.fetchTags()); // Simply returns all available tags, etc.
})();

(async () => {
	const response1 = await NekosiaAPI.fetchCategoryImages('catgirl');
	console.log(response1);
	
	const response2 = await NekosiaAPI.fetchImages({ session: 'ip', count: 1, tags: ['cute', 'blue-hair'], blacklist: ['yellow-hair'] });
	console.log(response2);
	
	// https://nekosia.cat/documentation?page=api-endpoints#example-response
})();