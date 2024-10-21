module.exports.Cat = require('./Cat.js');

module.exports.Dog = require('./Dog.js');

// controller is the middle and it gets data from models and does what it needs to
// if we need to change or edit the data, then gives the data to client (views) to dislay the data
// once we finish editing and changing the data in controller

// controller is the one that works with the data and gives it to
// the view to display it (maps two together for view and model)

// index.js gets automatically pulled when a folder is required
// We use this to our advantage to define an API for this package.
// We could use it to pull as many files as necessary and send it back as one API
// That way the user only has to implement one require for all
// of the files in this folder we want them to use
