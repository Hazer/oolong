if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'core'.");
}
if (typeof oolong === 'undefined') {
  throw new Error("Error loading module 'core'. Its dependency 'oolong' was not found. Please, check whether 'oolong' is loaded prior to 'core'.");
}
var core = function (_, Kotlin, $module$oolong) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var L1000 = Kotlin.Long.fromInt(1000);
  var interval = $module$oolong.oolong.util.delay.interval_emy6dp$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Pair = Kotlin.kotlin.Pair;
  var throwCCE = Kotlin.throwCCE;
  var withoutEffects = $module$oolong.oolong.util.effect.withoutEffects_uj3l1k$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  Time$Msg$Tick.prototype = Object.create(Time$Msg.prototype);
  Time$Msg$Tick.prototype.constructor = Time$Msg$Tick;
  function Time() {
    Time_instance = this;
    this.init = Time$init$lambda;
    this.update = withoutEffects(Time$update$lambda);
    this.view = Time$view$lambda;
  }
  function Time$Model(time) {
    this.time = time;
  }
  Time$Model.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Model',
    interfaces: []
  };
  Time$Model.prototype.component1 = function () {
    return this.time;
  };
  Time$Model.prototype.copy_s8cxhz$ = function (time) {
    return new Time$Model(time === void 0 ? this.time : time);
  };
  Time$Model.prototype.toString = function () {
    return 'Model(time=' + Kotlin.toString(this.time) + ')';
  };
  Time$Model.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  Time$Model.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.time, other.time))));
  };
  function Time$Msg() {
  }
  function Time$Msg$Tick(time) {
    Time$Msg.call(this);
    this.time = time;
  }
  Time$Msg$Tick.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tick',
    interfaces: [Time$Msg]
  };
  Time$Msg$Tick.prototype.component1 = function () {
    return this.time;
  };
  Time$Msg$Tick.prototype.copy_s8cxhz$ = function (time) {
    return new Time$Msg$Tick(time === void 0 ? this.time : time);
  };
  Time$Msg$Tick.prototype.toString = function () {
    return 'Tick(time=' + Kotlin.toString(this.time) + ')';
  };
  Time$Msg$Tick.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  Time$Msg$Tick.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.time, other.time))));
  };
  Time$Msg.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Msg',
    interfaces: []
  };
  function Time$Props(time) {
    this.time = time;
  }
  Time$Props.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Props',
    interfaces: []
  };
  Time$Props.prototype.component1 = function () {
    return this.time;
  };
  Time$Props.prototype.copy_s8cxhz$ = function (time) {
    return new Time$Props(time === void 0 ? this.time : time);
  };
  Time$Props.prototype.toString = function () {
    return 'Props(time=' + Kotlin.toString(this.time) + ')';
  };
  Time$Props.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  Time$Props.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.time, other.time))));
  };
  function Time$init$lambda$lambda() {
    return new Time$Msg$Tick(L0);
  }
  function Time$init$lambda() {
    var tmp$;
    var state = new Time$Model(L0);
    var subscriptions = interval(L1000, void 0, Time$init$lambda$lambda);
    return Kotlin.isType(tmp$ = to(state, subscriptions.first), Pair) ? tmp$ : throwCCE();
  }
  function Time$update$lambda(msg, f) {
    if (Kotlin.isType(msg, Time$Msg$Tick))
      return new Time$Model(msg.time);
    else
      return Kotlin.noWhenBranchMatched();
  }
  function Time$view$lambda(model) {
    return new Time$Props(model.time);
  }
  Time.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Time',
    interfaces: []
  };
  var Time_instance = null;
  function Time_getInstance() {
    if (Time_instance === null) {
      new Time();
    }
    return Time_instance;
  }
  Time.prototype.Model = Time$Model;
  Time$Msg.Tick = Time$Msg$Tick;
  Time.prototype.Msg = Time$Msg;
  Time.prototype.Props = Time$Props;
  var package$time = _.time || (_.time = {});
  Object.defineProperty(package$time, 'Time', {
    get: Time_getInstance
  });
  Kotlin.defineModule('core', _);
  return _;
}(typeof core === 'undefined' ? {} : core, kotlin, oolong);
