Alex Hand (TA) [10:47 AM]
INSTRUCTIONS:

Create a new local MYSQL database called 'todolist', but don't create any tables.

Delete any references to the orm.js file inside the api-routes.js file.

Delete the config folder.

While inside the activity folder, run npm install in terminal.

In terminal, type in the following command: "sequelize init:models & sequelize init:config". If this produces an error, then you may not have the sequelize and the sequelize-cli installed globally. Fix this by running npm install -g sequelize sequelize-cli in your terminal and trying again.

Step 5 should have created a config and a models folder for us. Navigate to the config folder, open config.json, and modify the development object's "database","username" and "password" values to match your MYSQL database on your machine.

Navigate to the models folder and create a new file called todo.js. Create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).

Navigate to the server.js file and require all of our models by requiring the models folder. Save this to a variable and name it "db".

Sync the models by running db.sequelize.sync() before we start the express server.

In your terminal, run "node server". Check MYSQL Workbench to see if a Todos table was created. If so, you were successful. If not, check your terminal for any errors.