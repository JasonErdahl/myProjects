* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	  Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

  	- Answer: What advantages does it offer?
		Developers can only focus on business logic rather than writing interfaces between code and db.
		Reduces development time and costs by avoiding redundant codes
		Capable of connecting to different databases, which comes handy during switching from one db to the other.
		Helps to effectively query from multiple tables similar to SQL JOIN—ORM takes the responsibility of converting the object-oriented query approach to SQL queries.

  	- Answer: How do I install it? How do I incorporate it into my app?
	  	// Using NPM
		$ npm install --save sequelize

		const Sequelize = require('sequelize');
		const sequelize = new Sequelize('database', 'username', 'password', {
		host: 'localhost',
		dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
		operatorsAliases: false,

		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		},

		// SQLite only
		storage: 'path/to/database.sqlite'
		});

		// Or you can simply use a connection uri
		const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

  	- Answer: What the heck is a Sequelize model? What role will it play?
	  	Actual representation of database table

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
		  	const tableName = sequelize.define('user', {
			Country: {
				type: Sequelize.STRING
			},
			PhoneCode: {
				type: Sequelize.INTEGER
			},
			Capital: {
				type: Sequelize.STRING
			},
			IndependenceYear: {
				type: Sequelize.INTEGER
			},
			},
			{});

  		- How would I query for all the records where the Independence Year was less than 50 years ago?
			findAll
  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
