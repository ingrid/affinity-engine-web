export default function() {
  this.transition(
    this.toRoute(() => true),
    this.use('scrollThen', 'toRight', { duration: 250 })
  );

  this.transition(
    this.toRoute((routeName) => (routeName.match(/\./g) || []).length === 0 || routeName === 'index'),
    this.use('scrollThen', 'toDown')
  );
}
