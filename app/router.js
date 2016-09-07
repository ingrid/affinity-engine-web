import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('engine');
  this.route('stage');
  this.route('menu-bar');
  this.route('curtain');
  this.route('plugins');
});

export default Router;
