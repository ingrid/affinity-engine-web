import Ember from 'ember';
import RouteTitleMixin from 'affinity-engine-web/mixins/route-title';

const {
  Route
} = Ember;

export default Route.extend(RouteTitleMixin, {
  _titleKey: 'configuration'
});
