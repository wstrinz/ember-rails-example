App.Router.map(function() {
  this.resource('places', function(){
    this.resource('place', { path: '/:place' });
  })
})
