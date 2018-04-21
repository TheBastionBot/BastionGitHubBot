const fs = require('fs');
const path = require('path');

/**
 * Loads the event
 * @function loadEvent
 * @param {string} event Name of the event
 * @returns {function} The event listner
 */
const loadEvent = event => require(`../events/${event}`);

/**
 * Loads the event listner
 * @function handleEvent
 * @param {object} Robot The Robot Object
 * @param {string} event Name of the event
 * @returns {void}
 */
const handleEvent = (Robot, event) => Robot.on(event, loadEvent(event));

/**
 * Handles/Loads all the events
 * @module eventHandler
 * @param {object} Robot The Robot Object
 * @returns {void}
 */
module.exports = Robot => {
  let eventsDir = './events';
  /* eslint-disable no-sync */
  let events = fs.readdirSync(eventsDir)
    .filter(file => !fs.statSync(path.join(eventsDir, file)).isDirectory())
    .map(file => file.replace(/\.js$/, ''));
  /* eslint-enable no-sync */

  for (let event of events) {
    handleEvent(Robot, event);
  }
};
