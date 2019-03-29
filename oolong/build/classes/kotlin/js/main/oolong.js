(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'oolong'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'oolong'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'oolong'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'oolong'.");
    }
    root.oolong = factory(typeof oolong === 'undefined' ? {} : oolong, kotlin, this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var getCallableRef = Kotlin.getCallableRef;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var SupervisorJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.SupervisorJob_5dx9e$;
  var plus = $module$kotlinx_coroutines_core.kotlinx.coroutines.plus_7n4184$;
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var wrapFunction = Kotlin.wrapFunction;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var asIterable = Kotlin.kotlin.collections.asIterable_us0mfu$;
  var Random = Kotlin.kotlin.random.Random;
  var nextInt = Kotlin.kotlin.random.nextInt_ixthlz$;
  var nextLong = Kotlin.kotlin.random.nextLong_lq3jag$;
  var nextUBytes = Kotlin.kotlin.random.nextUBytes_dg37c5$;
  var nextUBytes_0 = Kotlin.kotlin.random.nextUBytes_wucvsg$;
  var nextUInt = Kotlin.kotlin.random.nextUInt_j8mu42$;
  var nextUInt_0 = Kotlin.kotlin.random.nextUInt_nppi6x$;
  var nextUInt_1 = Kotlin.kotlin.random.nextUInt_3yup1w$;
  var nextUInt_2 = Kotlin.kotlin.random.nextUInt_d63giy$;
  var nextULong = Kotlin.kotlin.random.nextULong_j8mu42$;
  var nextULong_0 = Kotlin.kotlin.random.nextULong_otw1ua$;
  var nextULong_1 = Kotlin.kotlin.random.nextULong_3bt3ku$;
  var nextULong_2 = Kotlin.kotlin.random.nextULong_f33ad7$;
  function Oolong() {
    Oolong_instance = this;
  }
  Oolong.prototype.program = function (program, render, runtimeScope, effectContext, renderContext) {
    if (runtimeScope === void 0)
      runtimeScope = coroutines.GlobalScope;
    if (effectContext === void 0)
      effectContext = coroutines.Dispatchers.Default;
    if (renderContext === void 0)
      renderContext = effectContext;
    return this.runtime(getCallableRef('init', function ($receiver) {
      return $receiver.init();
    }.bind(null, program)), getCallableRef('update', function ($receiver, msg, model) {
      return $receiver.update_xwfjod$(msg, model);
    }.bind(null, program)), getCallableRef('view', function ($receiver, model) {
      return $receiver.view_11rb$(model);
    }.bind(null, program)), render, runtimeScope, effectContext, renderContext);
  };
  function Oolong$runtime$lambda(closure$runtime) {
    return function () {
      closure$runtime.dispose();
      return Unit;
    };
  }
  Oolong.prototype.runtime = function (init, update, view, render, runtimeScope, effectContext, renderContext) {
    if (runtimeScope === void 0)
      runtimeScope = coroutines.GlobalScope;
    if (effectContext === void 0)
      effectContext = coroutines.Dispatchers.Default;
    if (renderContext === void 0)
      renderContext = effectContext;
    var runtime = new Oolong$Runtime(init, update, view, render, runtimeScope, effectContext, renderContext);
    return Oolong$runtime$lambda(runtime);
  };
  function Oolong$Main() {
    Oolong$Main_instance = this;
  }
  Oolong$Main.prototype.program = function (program, render, runtimeScope, effectContext) {
    if (runtimeScope === void 0)
      runtimeScope = coroutines.GlobalScope;
    if (effectContext === void 0)
      effectContext = coroutines.Dispatchers.Default;
    return this.runtime(getCallableRef('init', function ($receiver) {
      return $receiver.init();
    }.bind(null, program)), getCallableRef('update', function ($receiver, msg, model) {
      return $receiver.update_xwfjod$(msg, model);
    }.bind(null, program)), getCallableRef('view', function ($receiver, model) {
      return $receiver.view_11rb$(model);
    }.bind(null, program)), render, runtimeScope, effectContext);
  };
  Oolong$Main.prototype.runtime = function (init, update, view, render, runtimeScope, effectContext) {
    if (runtimeScope === void 0)
      runtimeScope = coroutines.GlobalScope;
    if (effectContext === void 0)
      effectContext = coroutines.Dispatchers.Default;
    return Oolong_getInstance().runtime(init, update, view, render, runtimeScope, effectContext, coroutines.Dispatchers.Main);
  };
  Oolong$Main.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Main',
    interfaces: []
  };
  var Oolong$Main_instance = null;
  function Oolong$Main_getInstance() {
    if (Oolong$Main_instance === null) {
      new Oolong$Main();
    }
    return Oolong$Main_instance;
  }
  function Oolong$Runtime(init, update, view, render, runtimeScope, effectContext, renderContext) {
    if (runtimeScope === void 0)
      runtimeScope = coroutines.GlobalScope;
    if (effectContext === void 0)
      effectContext = coroutines.Dispatchers.Default;
    if (renderContext === void 0)
      renderContext = effectContext;
    this.update_0 = update;
    this.view_0 = view;
    this.render_0 = render;
    this.effectContext_0 = effectContext;
    this.renderContext_0 = renderContext;
    this.$delegate_thwly0$_0 = runtimeScope;
    this.running_0 = true;
    this.currentState_0 = null;
    var $receiver = init();
    this.currentState_0 = $receiver.first;
    this.change_0($receiver);
  }
  Oolong$Runtime.prototype.dispatch_0 = function (msg) {
    if (this.running_0) {
      this.change_0(this.update_0(msg, this.currentState_0));
    }
  };
  function Coroutine$Oolong$Runtime$change$lambda(closure$effect_0, this$Runtime_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$effect = closure$effect_0;
    this.local$this$Runtime = this$Runtime_0;
  }
  Coroutine$Oolong$Runtime$change$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Oolong$Runtime$change$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Oolong$Runtime$change$lambda.prototype.constructor = Coroutine$Oolong$Runtime$change$lambda;
  Coroutine$Oolong$Runtime$change$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$effect(getCallableRef('dispatch', function ($receiver, msg) {
              return $receiver.dispatch_0(msg), Unit;
            }.bind(null, this.local$this$Runtime)));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Oolong$Runtime$change$lambda(closure$effect_0, this$Runtime_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Oolong$Runtime$change$lambda(closure$effect_0, this$Runtime_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Oolong$Runtime$change$lambda_0(this$Runtime_0, closure$state_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Runtime = this$Runtime_0;
    this.local$closure$state = closure$state_0;
  }
  Coroutine$Oolong$Runtime$change$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Oolong$Runtime$change$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Oolong$Runtime$change$lambda_0.prototype.constructor = Coroutine$Oolong$Runtime$change$lambda_0;
  Coroutine$Oolong$Runtime$change$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$Runtime.render_0(this.local$this$Runtime.view_0(this.local$closure$state), getCallableRef('dispatch', function ($receiver, msg) {
              return $receiver.dispatch_0(msg), Unit;
            }.bind(null, this.local$this$Runtime)));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Oolong$Runtime$change$lambda_0(this$Runtime_0, closure$state_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Oolong$Runtime$change$lambda_0(this$Runtime_0, closure$state_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Oolong$Runtime.prototype.change_0 = function (next) {
    var state = next.component1()
    , effect = next.component2();
    this.currentState_0 = state;
    launch(this, this.effectContext_0, void 0, Oolong$Runtime$change$lambda(effect, this));
    launch(this, this.renderContext_0, void 0, Oolong$Runtime$change$lambda_0(this, state));
  };
  Oolong$Runtime.prototype.dispose = function () {
    this.running_0 = false;
  };
  Object.defineProperty(Oolong$Runtime.prototype, 'coroutineContext', {
    get: function () {
      return this.$delegate_thwly0$_0.coroutineContext;
    }
  });
  Oolong$Runtime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Runtime',
    interfaces: [CoroutineScope]
  };
  Oolong.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Oolong',
    interfaces: []
  };
  var Oolong_instance = null;
  function Oolong_getInstance() {
    if (Oolong_instance === null) {
      new Oolong();
    }
    return Oolong_instance;
  }
  function Program() {
  }
  Program.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Program',
    interfaces: []
  };
  function timeout$lambda(closure$msg) {
    return function ($receiver, dispatch) {
      dispatch(closure$msg());
      $receiver.cancel();
      return Unit;
    };
  }
  function Coroutine$delayed$lambda$lambda$lambda$lambda$lambda(closure$block_0, closure$dispatch_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
    this.local$closure$dispatch = closure$dispatch_0;
    this.local$this$ = this$_0;
  }
  Coroutine$delayed$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delayed$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delayed$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$delayed$lambda$lambda$lambda$lambda$lambda;
  Coroutine$delayed$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$block(this.local$this$, this.local$closure$dispatch);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function delayed$lambda$lambda$lambda$lambda$lambda(closure$block_0, closure$dispatch_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$delayed$lambda$lambda$lambda$lambda$lambda(closure$block_0, closure$dispatch_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$delayed$lambda$lambda$lambda(closure$supervisor_0, closure$delay_0, closure$block_0, closure$dispatch_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$supervisor = closure$supervisor_0;
    this.local$closure$delay = closure$delay_0;
    this.local$closure$block = closure$block_0;
    this.local$closure$dispatch = closure$dispatch_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$delayed$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delayed$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delayed$lambda$lambda$lambda.prototype.constructor = Coroutine$delayed$lambda$lambda$lambda;
  Coroutine$delayed$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$closure$supervisor.isActive) {
              this.state_0 = 4;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = delay(this.local$closure$delay, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var receiver = this.local$closure$supervisor;
            var closure$block = this.local$closure$block;
            var closure$dispatch = this.local$closure$dispatch;
            if (receiver.isActive) {
              launch(this.local$$receiver, void 0, void 0, delayed$lambda$lambda$lambda$lambda$lambda(closure$block, closure$dispatch, receiver));
            }

            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function delayed$lambda$lambda$lambda(closure$supervisor_0, closure$delay_0, closure$block_0, closure$dispatch_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$delayed$lambda$lambda$lambda(closure$supervisor_0, closure$delay_0, closure$block_0, closure$dispatch_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function delayed$lambda(closure$scope, closure$supervisor, closure$delay, closure$block) {
    return function (dispatch) {
      launch(plus(closure$scope, closure$supervisor), void 0, void 0, delayed$lambda$lambda$lambda(closure$supervisor, closure$delay, closure$block, dispatch));
      return Unit;
    };
  }
  function delayed$lambda_0(closure$supervisor) {
    return function () {
      closure$supervisor.cancel();
      return Unit;
    };
  }
  function timeout(delay, scope, msg) {
    if (scope === void 0)
      scope = coroutines.GlobalScope;
    var supervisor = SupervisorJob();
    return to(delayed$lambda(scope, supervisor, delay, timeout$lambda(msg)), delayed$lambda_0(supervisor));
  }
  function interval$lambda(closure$msg) {
    return function ($receiver, dispatch) {
      dispatch(closure$msg());
      return Unit;
    };
  }
  function interval(delay, scope, msg) {
    if (scope === void 0)
      scope = coroutines.GlobalScope;
    var supervisor = SupervisorJob();
    return to(delayed$lambda(scope, supervisor, delay, interval$lambda(msg)), delayed$lambda_0(supervisor));
  }
  var delayed = wrapFunction(function () {
    function Coroutine$delayed$lambda$lambda$lambda$lambda$lambda(closure$block_0, closure$dispatch_0, this$_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$block = closure$block_0;
      this.local$closure$dispatch = closure$dispatch_0;
      this.local$this$ = this$_0;
    }
    Coroutine$delayed$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$delayed$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$delayed$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$delayed$lambda$lambda$lambda$lambda$lambda;
    Coroutine$delayed$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              return this.local$closure$block(this.local$this$, this.local$closure$dispatch);
            case 1:
              throw this.exception_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        }
         catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          }
           else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function delayed$lambda$lambda$lambda$lambda$lambda(closure$block_0, closure$dispatch_0, this$_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$delayed$lambda$lambda$lambda$lambda$lambda(closure$block_0, closure$dispatch_0, this$_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$delayed$lambda$lambda$lambda(closure$supervisor_0, closure$delay_0, closure$block_0, closure$dispatch_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$supervisor = closure$supervisor_0;
      this.local$closure$delay = closure$delay_0;
      this.local$closure$block = closure$block_0;
      this.local$closure$dispatch = closure$dispatch_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$delayed$lambda$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$delayed$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$delayed$lambda$lambda$lambda.prototype.constructor = Coroutine$delayed$lambda$lambda$lambda;
    Coroutine$delayed$lambda$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              if (!this.local$closure$supervisor.isActive) {
                this.state_0 = 4;
                continue;
              }

              this.state_0 = 3;
              this.result_0 = delay(this.local$closure$delay, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 3:
              var receiver = this.local$closure$supervisor;
              var closure$block = this.local$closure$block;
              var closure$dispatch = this.local$closure$dispatch;
              if (receiver.isActive) {
                launch(this.local$$receiver, void 0, void 0, delayed$lambda$lambda$lambda$lambda$lambda(closure$block, closure$dispatch, receiver));
              }

              this.state_0 = 2;
              continue;
            case 4:
              return Unit;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        }
         catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          }
           else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function delayed$lambda$lambda$lambda(closure$supervisor_0, closure$delay_0, closure$block_0, closure$dispatch_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$delayed$lambda$lambda$lambda(closure$supervisor_0, closure$delay_0, closure$block_0, closure$dispatch_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function delayed$lambda(closure$scope, closure$supervisor, closure$delay, closure$block) {
      return function (dispatch) {
        launch(plus(closure$scope, closure$supervisor), void 0, void 0, delayed$lambda$lambda$lambda(closure$supervisor, closure$delay, closure$block, dispatch));
        return Unit;
      };
    }
    function delayed$lambda_0(closure$supervisor) {
      return function () {
        closure$supervisor.cancel();
        return Unit;
      };
    }
    return function (delay, scope, block) {
      if (scope === void 0)
        scope = coroutines.GlobalScope;
      var supervisor = SupervisorJob();
      return to(delayed$lambda(scope, supervisor, delay, block), delayed$lambda_0(supervisor));
    };
  });
  function noEffect() {
    return batchEffects_0(emptyList());
  }
  function batchEffects(effects) {
    return batchEffects_0(asIterable(effects));
  }
  function batchEffects$lambda(closure$effects) {
    return function (dispatch) {
      var tmp$;
      tmp$ = closure$effects.iterator();
      while (tmp$.hasNext()) {
        var effect = tmp$.next();
        effect(dispatch);
      }
      return Unit;
    };
  }
  function batchEffects_0(effects) {
    return batchEffects$lambda(effects);
  }
  function withoutEffects$lambda(closure$init) {
    return function () {
      return to(closure$init(), noEffect());
    };
  }
  function withoutEffects(init) {
    return withoutEffects$lambda(init);
  }
  function withoutEffects$lambda_0(closure$init) {
    return function (msg, model) {
      return to(closure$init(msg, model), noEffect());
    };
  }
  function withoutEffects_0(init) {
    return withoutEffects$lambda_0(init);
  }
  function nextBits$lambda(closure$bitCount) {
    return function () {
      return Random.Default.nextBits_za3lpa$(closure$bitCount);
    };
  }
  function effect$lambda(closure$msg, closure$block) {
    return function (dispatch) {
      dispatch(closure$msg(closure$block()));
      return Unit;
    };
  }
  function nextBits($receiver, bitCount, msg) {
    return effect$lambda(msg, nextBits$lambda(bitCount));
  }
  function nextBoolean$lambda() {
    return Random.Default.nextBoolean();
  }
  function nextBoolean($receiver, msg) {
    return effect$lambda(msg, nextBoolean$lambda);
  }
  function nextBytes$lambda(closure$array, closure$fromIndex, closure$toIndex) {
    return function () {
      return Random.Default.nextBytes_mj6st8$(closure$array, closure$fromIndex, closure$toIndex);
    };
  }
  function nextBytes($receiver, array, fromIndex, toIndex, msg) {
    return effect$lambda(msg, nextBytes$lambda(array, fromIndex, toIndex));
  }
  function nextBytes$lambda_0(closure$array) {
    return function () {
      return Random.Default.nextBytes_fqrh44$(closure$array);
    };
  }
  function nextBytes_0($receiver, array, msg) {
    return effect$lambda(msg, nextBytes$lambda_0(array));
  }
  function nextBytes$lambda_1(closure$size) {
    return function () {
      return Random.Default.nextBytes_za3lpa$(closure$size);
    };
  }
  function nextBytes_1($receiver, size, msg) {
    return effect$lambda(msg, nextBytes$lambda_1(size));
  }
  function nextDouble$lambda() {
    return Random.Default.nextDouble();
  }
  function nextDouble($receiver, msg) {
    return effect$lambda(msg, nextDouble$lambda);
  }
  function nextDouble$lambda_0(closure$until) {
    return function () {
      return Random.Default.nextDouble_14dthe$(closure$until);
    };
  }
  function nextDouble_0($receiver, until, msg) {
    return effect$lambda(msg, nextDouble$lambda_0(until));
  }
  function nextDouble$lambda_1(closure$from, closure$until) {
    return function () {
      return Random.Default.nextDouble_lu1900$(closure$from, closure$until);
    };
  }
  function nextDouble_1($receiver, from, until, msg) {
    return effect$lambda(msg, nextDouble$lambda_1(from, until));
  }
  function nextFloat$lambda() {
    return Random.Default.nextFloat();
  }
  function nextFloat($receiver, msg) {
    return effect$lambda(msg, nextFloat$lambda);
  }
  function nextInt$lambda() {
    return Random.Default.nextInt();
  }
  function nextInt_0($receiver, msg) {
    return effect$lambda(msg, nextInt$lambda);
  }
  function nextInt$lambda_0(closure$until) {
    return function () {
      return Random.Default.nextInt_za3lpa$(closure$until);
    };
  }
  function nextInt_1($receiver, until, msg) {
    return effect$lambda(msg, nextInt$lambda_0(until));
  }
  function nextInt$lambda_1(closure$from, closure$until) {
    return function () {
      return Random.Default.nextInt_vux9f0$(closure$from, closure$until);
    };
  }
  function nextInt_2($receiver, from, until, msg) {
    return effect$lambda(msg, nextInt$lambda_1(from, until));
  }
  function nextInt$lambda_2(closure$range) {
    return function () {
      return nextInt(Random.Default, closure$range);
    };
  }
  function nextInt_3($receiver, range, msg) {
    return effect$lambda(msg, nextInt$lambda_2(range));
  }
  function nextLong$lambda() {
    return Random.Default.nextLong();
  }
  function nextLong_0($receiver, msg) {
    return effect$lambda(msg, nextLong$lambda);
  }
  function nextLong$lambda_0(closure$until) {
    return function () {
      return Random.Default.nextLong_s8cxhz$(closure$until);
    };
  }
  function nextLong_1($receiver, until, msg) {
    return effect$lambda(msg, nextLong$lambda_0(until));
  }
  function nextLong$lambda_1(closure$from, closure$until) {
    return function () {
      return Random.Default.nextLong_3pjtqy$(closure$from, closure$until);
    };
  }
  function nextLong_2($receiver, from, until, msg) {
    return effect$lambda(msg, nextLong$lambda_1(from, until));
  }
  function nextLong$lambda_2(closure$range) {
    return function () {
      return nextLong(Random.Default, closure$range);
    };
  }
  function nextLong_3($receiver, range, msg) {
    return effect$lambda(msg, nextLong$lambda_2(range));
  }
  function nextUBytes$lambda(closure$array) {
    return function () {
      return nextUBytes(Random.Default, closure$array);
    };
  }
  function nextUBytes_1($receiver, array, msg) {
    return effect$lambda(msg, nextUBytes$lambda(array));
  }
  function nextUBytes$lambda_0(closure$size) {
    return function () {
      return nextUBytes_0(Random.Default, closure$size);
    };
  }
  function nextUBytes_2($receiver, size, msg) {
    return effect$lambda(msg, nextUBytes$lambda_0(size));
  }
  function nextUInt$lambda() {
    return nextUInt(Random.Default);
  }
  function nextUInt_3($receiver, msg) {
    return effect$lambda(msg, nextUInt$lambda);
  }
  function nextUInt$lambda_0(closure$until) {
    return function () {
      return nextUInt_0(Random.Default, closure$until);
    };
  }
  function nextUInt_4($receiver, until, msg) {
    return effect$lambda(msg, nextUInt$lambda_0(until));
  }
  function nextUInt$lambda_1(closure$from, closure$until) {
    return function () {
      return nextUInt_1(Random.Default, closure$from, closure$until);
    };
  }
  function nextUInt_5($receiver, from, until, msg) {
    return effect$lambda(msg, nextUInt$lambda_1(from, until));
  }
  function nextUInt$lambda_2(closure$range) {
    return function () {
      return nextUInt_2(Random.Default, closure$range);
    };
  }
  function nextUInt_6($receiver, range, msg) {
    return effect$lambda(msg, nextUInt$lambda_2(range));
  }
  function nextULong$lambda() {
    return nextULong(Random.Default);
  }
  function nextULong_3($receiver, msg) {
    return effect$lambda(msg, nextULong$lambda);
  }
  function nextULong$lambda_0(closure$until) {
    return function () {
      return nextULong_0(Random.Default, closure$until);
    };
  }
  function nextULong_4($receiver, until, msg) {
    return effect$lambda(msg, nextULong$lambda_0(until));
  }
  function nextULong$lambda_1(closure$from, closure$until) {
    return function () {
      return nextULong_1(Random.Default, closure$from, closure$until);
    };
  }
  function nextULong_5($receiver, from, until, msg) {
    return effect$lambda(msg, nextULong$lambda_1(from, until));
  }
  function nextULong$lambda_2(closure$range) {
    return function () {
      return nextULong_2(Random.Default, closure$range);
    };
  }
  function nextULong_6($receiver, range, msg) {
    return effect$lambda(msg, nextULong$lambda_2(range));
  }
  var effect = wrapFunction(function () {
    function effect$lambda(closure$msg, closure$block) {
      return function (dispatch) {
        dispatch(closure$msg(closure$block()));
        return Unit;
      };
    }
    return function (msg, block) {
      return effect$lambda(msg, block);
    };
  });
  Object.defineProperty(Oolong.prototype, 'Main', {
    get: Oolong$Main_getInstance
  });
  var package$oolong = _.oolong || (_.oolong = {});
  Object.defineProperty(package$oolong, 'Oolong', {
    get: Oolong_getInstance
  });
  package$oolong.Program = Program;
  $$importsForInline$$.oolong = _;
  var package$util = package$oolong.util || (package$oolong.util = {});
  var package$delay = package$util.delay || (package$util.delay = {});
  package$delay.timeout_emy6dp$ = timeout;
  package$delay.interval_emy6dp$ = interval;
  var package$effect = package$util.effect || (package$util.effect = {});
  package$effect.noEffect_287e2$ = noEffect;
  package$effect.batchEffects_2o3v93$ = batchEffects;
  package$effect.batchEffects_oxdkwl$ = batchEffects_0;
  package$effect.withoutEffects_cpdsdz$ = withoutEffects;
  package$effect.withoutEffects_uj3l1k$ = withoutEffects_0;
  var package$random = package$util.random || (package$util.random = {});
  package$random.nextBits_d7wiqs$ = nextBits;
  package$random.nextBoolean_81kkux$ = nextBoolean;
  package$random.nextBytes_kv62fw$ = nextBytes;
  package$random.nextBytes_576os$ = nextBytes_0;
  package$random.nextBytes_khct2a$ = nextBytes_1;
  package$random.nextDouble_wamt90$ = nextDouble;
  package$random.nextDouble_wcrecm$ = nextDouble_0;
  package$random.nextDouble_udo1u0$ = nextDouble_1;
  package$random.nextFloat_dlh7tx$ = nextFloat;
  package$random.nextInt_nyb3vy$ = nextInt_0;
  package$random.nextInt_d7wiqs$ = nextInt_1;
  package$random.nextInt_e9vck2$ = nextInt_2;
  package$random.nextInt_uacbi3$ = nextInt_3;
  package$random.nextLong_93q1hb$ = nextLong_0;
  package$random.nextLong_tzl6x0$ = nextLong_1;
  package$random.nextLong_ffdn21$ = nextLong_2;
  package$random.nextLong_ry62k7$ = nextLong_3;
  package$random.nextUBytes_f6gu4$ = nextUBytes_1;
  package$random.nextUBytes_15hm1d$ = nextUBytes_2;
  package$random.nextUInt_g124hp$ = nextUInt_3;
  package$random.nextUInt_pmtqvc$ = nextUInt_4;
  package$random.nextUInt_pfmshf$ = nextUInt_5;
  package$random.nextUInt_xk0piv$ = nextUInt_6;
  package$random.nextULong_nfo9v4$ = nextULong_3;
  package$random.nextULong_ur8ows$ = nextULong_4;
  package$random.nextULong_hiqqnk$ = nextULong_5;
  package$random.nextULong_yv15vb$ = nextULong_6;
  Kotlin.defineModule('oolong', _);
  return _;
}));

//# sourceMappingURL=oolong.js.map
