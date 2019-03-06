import axios from 'axios';

export const getPeople = (url, people, resolve, reject) => {
	axios.get(url)
		.then(response => {
			const gottenPeople = people.concat(response.data.results)
			if (response.data.next !== null) {
				getPeople(response.data.next, gottenPeople, resolve, reject)
			} else {
				resolve(gottenPeople)
			}
		})
		.catch(err => console.log(err))
}