import Ember from 'ember';
import RouteTitleMixin from 'affinity-engine-web/mixins/route-title';
import SidebarRouteMixin from 'affinity-engine-web/mixins/sidebar-route';

const {
  Route
} = Ember;

export default Route.extend(RouteTitleMixin, SidebarRouteMixin, {
  sidebarParentRoute: 'engine'
});
