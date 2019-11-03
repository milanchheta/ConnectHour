module.exports = function(app) {
    let login = require('./controllers/login');
    let events = require('./controllers/events');
    let users = require('./controllers/users');
    let search = require('./controllers/search');

    // Login routes
    app.post('/login', login.login);
    app.post('/register', login.register);
    app.post('/reset_password', login.reset);

    // Event routes
    app.get('/event/:id', events.findById);
    app.get('/event/organizer/:organizer', events.get_events);
    app.get('/event/volunteer/:volunteer', events.get_registered)
    app.get('/event/organizer/registered/:id', events.get_registered_volunteers)
    app.get('/event/activity/:volunteer', events.activityTracking)
    app.post('/event/:organizer', events.create_event);
    app.post('/event/register/:volunteer/:id', events.register);
    app.post('/event/unregister/:volunteer/:id', events.unregister);
    app.put('/event/:organizer/:id', events.edit_event);
    app.delete('/event/:organizer/:id', events.delete_event);


    // Profile data routes
    app.get('/volunteer/:volunteer', users.volunteerById);
    app.put('/volunteer/:volunteer', users.edit_volProfile);
    app.get('/organizer/:organizer', users.organizerById);
    app.put('/organizer/:organizer', users.edit_orgProfile);

    // Search routes
    app.get('/search', search.search);
}
