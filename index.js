// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
//log for blood group
console.log("############   Blood Group   ############");
console.log(faker.bloodgroup.group());
