App.Router.map(function() {
  this.resource('places', { path: '/' })
  this.resource('place', { path: '/places/:id' });
  //this.resource('places', function(){
  //})
})

App.PlacesRoute = Ember.Route.extend({
  templateName: 'places/index',
  model: function() {
    return this.store.find('place');
  }
});
