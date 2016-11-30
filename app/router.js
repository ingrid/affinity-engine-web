import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome', function() {
    this.route('how-to-use-this-documentation');
    this.route('acknowledgements');
  });
  this.route('overview', function() {
    this.route('installation', function() {
      this.route('tooling');
      this.route('ember');
      this.route('quickstarts');
    });
    this.route('components');
    this.route('plugins');
  });
  this.route('engine', function() {
    this.route('usage');
    this.route('configuration', function() {
      this.route('defaults');
      this.route('usage');
      this.route('configuration-tiers');
    });
    this.route('fixtures', function() {
      this.route('images');
      this.route('keyframes');
      this.route('characters');
      this.route('backdrops');
    });
  });
  this.route('components', function() {
    this.route('stage', function() {
      this.route('scenes');
      this.route('directions', function() {
        this.route('text');
        this.route('menu');
        this.route('backdrop');
        this.route('character');
        this.route('data');
        this.route('image');
        this.route('pause');
        this.route('random');
        this.route('sound');
        this.route('scene');
        this.route('layer');
      });
      this.route('usage');
    });
    this.route('menu-bar', function() {});
    this.route('curtain', function() {});
  });
  this.route('plugins');
});

export default Router;
