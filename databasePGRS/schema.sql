DROP DATABASE IF EXISTS investechsol_jb;

CREATE DATABASE investechsol_jb;

\c investechsol_jb;


DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS companies;

CREATE TABLE ratings (id serial, companyId integer, ratings text
);
CREATE TABLE earnings (id serial, estimated decimal, actual decimal
);
CREATE TABLE companies (id serial, name varchar, best_summary varchar, sell_summary varchar
);

