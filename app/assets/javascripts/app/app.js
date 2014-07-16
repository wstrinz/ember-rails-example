App = Ember.Application.create({ LOG_TRANSITIONS: true});

App.Router.map(function() {
  this.resource('places', function(){
    this.resource('place', { path: '/:place' });
  })
})

App.ApplicationAdapter = DS.FixtureAdapter.extend();
