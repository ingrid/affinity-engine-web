import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('engine', function() {
    this.route('installation', function() {
      this.route('tooling');
      this.route('ember');
      this.route('affinity-engine');
    });
    this.route('usage', function() {
      this.route('block-component');
      this.route('engine-id');
      this.route('focus');
      this.route('preloading');
      this.route('templates');
    });
    this.route('configuration', function() {
      this.route('configuration-tiers');
      this.route('defaults');
      this.route('usage');
    });
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
