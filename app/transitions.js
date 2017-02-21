export default function() {
  this.transition(
    this.toRoute(() => true),
    this.use('toRight')
  );

  this.transition(
    this.toRoute((routeName) => (routeName.match(/\./g) || []).length === 0 || routeName === 'index'),
    this.use('toDown')
  );

  this.transition(
    this.hasClass('liquid-engine'),

    this.toValue(true),
    this.use('crossFade', { duration: 500 })
  );
}
