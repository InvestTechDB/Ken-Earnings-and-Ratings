const pgp = require('pg-promise')();
const db = pgp('postgres://kencrimmins@localhost:5432/investechsol_jb');

const getCompanyData = (id, callback) => {
	db.one('SELECT * FROM companies WHERE id = $1', id)
		.then( (data) => {
			callback(null, data);
		})
		.catch( (error) => {
			console.log('ERROR:', error)
			callback(error, null);
		})
}

module.exports = {getCompanyData};
