DROP DATABASE IF EXISTS investechsol_jb;

CREATE DATABASE investechsol_jb;

\c investechsol_jb;

-- CREATE TABLE companies (id serial, name varchar, best_summary varchar, sell_summary varchar
-- );
CREATE TABLE companies (
	id serial, 
	name varchar, 
	best_summary varchar, 
	sell_summary varchar,
	ratings varchar,
	earnings varchar
);

COPY companies(name,best_summary,sell_summary,ratings,earnings) FROM '/Users/kencrimmins/Desktop/Earnings-and-Ratings/Database/data.csv' DELIMITER ',' CSV HEADER;

CREATE index index_id on companies(id);
CREATE index index_name on companies(name);