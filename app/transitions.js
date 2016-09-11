export default function() {
  this.transition(
    this.toRoute((routeName) => true),
    this.use('toRight')
  );

  this.transition(
    this.toRoute((routeName) => (routeName.match(/\./g) || []).length === 0 || routeName === 'index'),
    this.use('toDown')
  );
}
