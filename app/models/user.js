var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,

  // maybe salt here
  initialize: function(params){
    this.on('creating', function(model, attr, options){
        // model = this;
        model.set('username', params.username);
        model.set('password', params.password);
    });    
    //this.salt = Math.rnd() or bcrypt?
    }  
    
});

module.exports = User;