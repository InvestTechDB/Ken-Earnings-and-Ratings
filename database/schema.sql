DROP DATABASE IF EXISTS investechsol_jb;

CREATE DATABASE investechsol_jb;

\c investechsol_jb;


DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS companies;

CREATE TABLE ratings (did serial PRIMARY KEY, companyId integer, rating varchar
);

CREATE TABLE companies (did serial PRIMARY KEY, name varchar, estimated varchar, actual varchar, best_summary varchar, sell_summary varchar
);

