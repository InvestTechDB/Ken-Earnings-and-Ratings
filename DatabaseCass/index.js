var cassandra = require('cassandra-driver')
var client = new cassandra.Client({ contactPoints: ['localhost'] })

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash = hash & hash;
    hash = Math.abs(hash); 
  }
  return hash % 10000;
};

const testTheLoad = (name , callback) => {
	client.execute(`select * from investechsol_jb.companies where id=${name.hashCode()} and name='${name}'`, function (err, result) {
	  if (err) {
	  	callback(err, null)
	  } else {
	  	callback(null, result.rows[0])
	  }
	})  
}

module.exports = {testTheLoad};