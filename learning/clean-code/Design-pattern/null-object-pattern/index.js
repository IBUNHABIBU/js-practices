class User {
 constructor(id, name) {
  this.id = id;
  this.name = name;
 }

 hasAccess() {
  return this.name === 'Bob';
 }
}

const users = [new User(1, 'Bob'), new User(2, 'John')];

function getUser(id) {
 return users.find(user => user.id === id)
}

function printUser(id) {
 const user = getUser(id);

 /*
   we need to explicitly tell the console to print 'Guest' if the user does not have a name
   This is problematic since we need to remember to always put this everytime we use the users name
   It is also bad because if we want to print 'Unknown User' instead we would need to change every place that 
   that we put 'Guest' which will almost likely be all over the application
 */

   let name = 'Guest';
   if (user !== null && user.name !== null) name = user.name;
   console.log('Hello' + name);
   
}