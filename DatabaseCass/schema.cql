DROP KEYSPACE IF EXISTS investechsol_jb;

CREATE KEYSPACE investechsol_jb 
with replication = {'class':'SimpleStrategy','replication_factor':1};

USE investechsol_jb;

DROP TABLE IF EXISTS companies;

CREATE TABLE companies (
	id int, 
	name varchar, 
	best_summary varchar, 
	sell_summary varchar,
	ratings varchar,
	estimated varchar,
	actual varchar,
	primary key(id, name),
);

