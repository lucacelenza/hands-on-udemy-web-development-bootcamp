#Our first Mongo commands
* mongod - starts the mongo process
* mongo - opens up the mongo shell
* help - gives us a list of the basic features of mongo
* show dbs - shows database names
* use - sets current database or creates it if not exists (db_name as parameter)
* show collections - shows a list of the collections of the current database
* db.collection.insert - inserts an object into the collection
* db.collection.find - finds every object with the specified properties into 
*   the collection
* db.collection.update(filterObject, updateObject) - gets every object with the
*   filterObject properties in the collection and updates it with updateObject 
*   properties
* db.collection.update(filterObject, { $set: updateObject }) - gets every object
*   with the filterObject properties in the collection and updates it with 
*   updateObject properties, without altering the original properties unset
* db.collection.remove - removes every object with the specified properties from
*   the collection