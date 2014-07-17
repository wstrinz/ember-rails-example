App.Router.map(function() {
  this.resource('places', { path: '/' })
  this.resource('place', { path: '/places/:id' });
  //this.resource('places', function(){
  //})
})

App.PlacesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('place', 1);
  }
});
