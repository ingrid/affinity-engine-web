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
    this.route('road-to-release');
  });
  this.route('tutorial', function() {
    this.route('installation', function() {
      this.route('tooling');
      this.route('ember');
      this.route('quickstarts');
      this.route('es6-support');
    });
    this.route('scripts', function() {
      this.route('your-first-direction');
    });
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
  this.route('stage', function() {
    this.route('scenes', function() {
      this.route('data');
    });
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
  this.route('components', function() {
    this.route('menu-bar', function() {
      this.route('buttons', function() {
        this.route('load');
        this.route('reset');
        this.route('resize');
        this.route('rewind');
        this.route('save');
      });
    });
    this.route('curtain', function() {});
  });
  this.route('plugins', function() {
    this.route('animator-velocity');
    this.route('data-manager-rewindable-lokijs');
    this.route('preloader-createjs');
    this.route('sound-manager-createjs');
    this.route('translator-ember-intl');
  });
  this.route('tutorial');
});

export default Router;
