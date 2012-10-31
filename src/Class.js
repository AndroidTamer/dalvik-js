// Class.js
// dependencies: ClassLibrary
var Class = function (_type, _accessFlags, _parent, _interfaces, _staticFields, _instanceFields, _directMethods, _virtualMethods) {		
  this.type = _type;
  this.accessFlags = _accessFlags;
  this.parent = _parent;		
  this.interfaces = _interfaces || [];

  this.staticFields = _staticFields || [];
  this.instanceFields = _instanceFields || [];

  this.directMethods = _directMethods || []; // directMethods are "static" or class methods
  this.virtualMethods = _virtualMethods || []; // virtualMethods are instance methods
};

var Instance = function(_type, _fields){
  // type must refer to the class
  this.type = _type;
  if (_fields) {
    this.fields = _fields;      
  } else {
    assert(false, "what to do in the event of instantiation without args? Are there default args we should be filling in?");
  }
};

Instance.prototype.getClass = function (_classLibrary){
  return _classLibrary.findClass(this.type);
};

Instance.prototype.getTypeString = function (){
  return this.type.getTypeString();
};

Class.prototype.hasMain = function() {
  var _foo = this.directMethods.map(function(_method){ return _method.isMain(); });
  if(_foo.length === 0) {
    return false;
  }
  return _foo.reduce(function(a, b){ return a || b; });
};

Class.prototype.getMain = function(){
  var _main = this.directMethods.filter(function(_method){ return _method.isMain(); });
  assert(_main.length===1, 'There should only be one main method per class.');
  return _main[0];
};

Class.prototype.makeNew = function(){
  return new Instance(this.type.clone(), this.instanceFields.map(function(_f){ return _f.clone();}));
};

Class.prototype.getTypeString = function(){
  return this.type.getTypeString();
};

Class.prototype.interfaceOf = function(_interface, _classLibrary){
  assert(isA(_interface, 'Type'), 'argument '+_interface+' must be of type Type');
  var _i, _retval=false, _super = (this.parent) ? _classLibrary.findClass(this.parent) : null;
  for (_i=0;_i<this.interfaces.length;_i++){
    if (this.interfaces[_i].isEquals(_interface)){
      _retval=true; break;
    }
  }
  return _retval || (_super && _super.interfaceOf(_interface, _classLibrary));
};
