import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('engine', function() {
    this.route('installation', function() {
      this.route('helpful-links');
      this.route('quick-start');
    });
    this.route('configuration');
    this.route('fixtures');
    this.route('components');
    this.route('plugins');
  });
  this.route('stage');
  this.route('menu-bar');
  this.route('curtain');
  this.route('plugins');
});

export default Router;
