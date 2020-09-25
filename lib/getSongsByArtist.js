const axios = require('axios');

const url = 'http://api.genius.com/artists/:id/songs?per_page=:per_page&page=:page';
/**
 * @param {(number|string)} id
 * @param {string} apiKey
 */
module.exports = async function (id, per_page, page, apiKey) {
  console.log('page: ' + page)
	if (!id) throw 'No id was provided';
	try {
		const headers = {
			Authorization: 'Bearer ' + apiKey
		};
    let u = url.replace(':id', id).replace(':per_page', per_page).replace(':page', page)
    console.log(u)
		let {
			data: { response	}
		} = await axios.get(u, { headers });
		return {songs: response.songs, next: response.next_page}
	} catch (e) {
		throw e;
	}
};
