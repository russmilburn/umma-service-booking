const env = require('dinodog-framework/src/utils/Environment');
env.readConfig('./config/common-config');
env.readConfig('./config/development');
env.readConfig('./config/container');

let Service = require('./src/BookingService');
let service = new Service();
service.init();
