const logger = require('dinodog-framework/src/utils/Logger');
const DbConnection = require('dinodog-framework/src/database/DbConnection');
const EventQueue = require('dinodog-framework/src/messaging/EventQueue');
const HashMap = require('hashmap');
const SchemaList = require('./schemas/SchemaList');


class BookingService {
  constructor(){
    this.dbConn = new DbConnection();
    this.eventQue = new EventQueue();
  }
  
  init(){
    logger.info('[SERVICE] start');
    
    let schemaMap = new HashMap();
    schemaMap.set(SchemaList.BOOKING, require('./schemas/BookingSchema'));
    schemaMap.set(SchemaList.CALENDAR, require('./schemas/CalendarSchema'));
    
    this.dbConn.setModelList(schemaMap);
    
    
    // this.eventQue.setMessageHandler(this.eventHandler);
  
    this.dbConn.init()
      .then(() => {
        logger.info('[SERVICE] start up successful')
      }, (err) => {
        logger.info('[SERVICE] error');
        logger.error(err);
      })
    
    // this.eventQue.init();
  }
  
  eventHandler(msg) {
    let data = msg.content.toString();
    let event = JSON.parse(data);
    logger.debug('event ::' + JSON.stringify(event));
  }
}

module.exports = BookingService;