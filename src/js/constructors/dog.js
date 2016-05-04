let Dog = function ( options ) {

  options = options || {};

  this.status = 'normal';
  this.color = options.color || 'undefined';

  if (options.hungry === undefined){
      this.hungry = true;
  } else {
    this.hungry = options.hungry;
  };

}


export default Dog;
