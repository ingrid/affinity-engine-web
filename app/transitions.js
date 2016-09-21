export default function() {
  this.transition(
    this.toRoute(() => true),
    this.use('toRight')
  );

  this.transition(
    this.toRoute((routeName) => (routeName.match(/\./g) || []).length === 0 || routeName === 'index'),
    this.use('toDown')
  );
}
