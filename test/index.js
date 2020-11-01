const axios = require('axios');

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

const initDatabase = () => console.log('database initialized...');
const closeDatabase = () => console.log('database closed...');
let functions = {
  add:(num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => { 
    const user = {firstName: "Juma" };
    user['lastName'] = "Makota";
    return user;
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(res => res.data)
          .catch(err => 'error')
  
}
module.exports = functions;