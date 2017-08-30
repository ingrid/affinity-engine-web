import Ember from 'ember';
import ResetScrollMixin from 'affinity-engine-web/mixins/reset-scroll';
import RouteTitleMixin from 'affinity-engine-web/mixins/route-title';
import SidebarRouteMixin from 'affinity-engine-web/mixins/sidebar-route';

const {
  Route
} = Ember;

export default Route.extend(ResetScrollMixin, RouteTitleMixin, SidebarRouteMixin, {
  sidebarParentRoute: 'api'
});
