Colors = new Meteor.Collection("colors");

if (Meteor.isClient) {
  Template.color_list.colors = function () {
    return Colors.find({}, {sort: {likes:-1, name:1}});
  };
  
  Template.color_info.maybe_selected = function(){
    return Session.equals('session_color', this._id) ? "selected" : ""; 
  };
  
  Template.color_info.events = {
    'click': function(){
      Session.set('session_color', this._id);
    }
  }
}