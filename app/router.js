import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('overview', function() {
    this.route('installation', function() {
      this.route('tooling');
      this.route('ember');
      this.route('quickstarts');
    });
    this.route('configuration', function() {
      this.route('configuration-tiers');
      this.route('defaults');
      this.route('usage');
    });
    this.route('fixtures', function() {});
    this.route('components');
    this.route('plugins');
  });
  this.route('engine', function() {
    this.route('installation');
    this.route('usage');
    this.route('arguments');
    this.route('block-params');
  });
  this.route('stage', function() {
    this.route('directions', function() {});
    this.route('scenes');
  });
  this.route('menu-bar');
  this.route('curtain');
  this.route('plugins');
  this.route('welcome', function() {
    this.route('how-to-use-this-documentation');
    this.route('acknowledgements');
  });
});

export default Router;
