const pgp = require('pg-promise')()
var db = pgp('postgres://kencrimmins@localhost:5432/investechsol_jb')

const getCompanyData = (id, callback) => {
	db.one('SELECT * FROM companies where id = $1', id)
		.then( (data) => {
			console.log('DATA:', data)
			callback(null, data);
		})
		.catch( (error) => {
			console.log('ERROR:', error)
			callback(error, null);
		})
}

module.exports = {getCompanyData};
