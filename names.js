const faker = require("faker");

let arrNames = [];
for (let i = 0; i < 1000; i++) {
  let random = faker.name.findName();
  arrNames.push(random);
}
module.exports = {
  result: arrNames.toString(),
};
