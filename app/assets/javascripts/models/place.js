App.Contact = DS.Model.extend({
  name: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});

App.Contact.FIXTURES = [
  { id: 1,
    name: "a place",
    latitude: 42.111,
    longitude: -42.111
  }
]
