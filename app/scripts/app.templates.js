angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/modules/directives/templates/loading.html',
    "<div class=\"loadingMessage center-align ani ani-fast tinUpIn\" style=\"position:fixed; margin-left: -100px; left:50%; top:140px; width:180px; z-index:9999999\"><div class=\"row-fluid black-back opacity-6 withRadius width-padding small-top-padding small-bottom-padding\"><div class=\"pull-left loading-dark line height-med\" style=width:60px></div><div class=pull-left><h4 class=\"machine lightest-text no-height-margin line height-med\">Loading</h4></div></div></div>"
  );


  $templateCache.put('app/views/about.html',
    "<section class=jumbotron><h1>Welcome!</h1><p class=lead>You're ready to start working on your next Parse AngularJS app!</p><a ng-click=createMonster() class=\"btn btn-secondary\">Create Monster</a><br>The New Monster ID is: {{ homeCtrl.monster.id }}</section><hr><div class=row-fluid><div class=\"npm packages span6\"><h3><a href=\"https://npmjs.org/\">NPM</a> Packages</h3><table class=\"table table-striped table-bordered table-hover table-condensed\"><tbody><tr ng-repeat=\"(module, version) in server.data.dependencies | orderBy:module\"><th><a ng-href=\"https://npmjs.org/package/{{ module }}\">{{ module }}</a></th><td class=text-right>{{ version }}</td></tr></tbody></table></div><div class=\"bower packages span6\"><h3><a href=\"http://bower.io/\">Bower</a> Packages</h3><pre>\n" +
    "      \n" +
    "      {{ client.data.dependencies }}\n" +
    "\n" +
    "    </pre><table class=\"table table-striped table-bordered table-hover table-condensed\"><tbody><tr ng-repeat=\"(module, version) in client.data.dependencies\"><th>{{ module }}</th><td class=text-right>{{ version }}</td></tr></tbody></table></div></div>"
  );


  $templateCache.put('app/views/app-layout.html',
    "<div ui-view=subheader></div><div class=\"container med-grey-back dark-dust top-margin\"><div class=\"med-grey-back dark-dust\"><div class=row-fluid><div class=\"span10-90 expands-phone\"><div ng-include=\"\" src=\"'app/views/leftnav.html'\"></div></div><div class=\"span90-10 contracts-phone light-back shadow-ninja left-dark right-dark hide-overflow\"><div ui-view=panel></div></div></div></div></div>"
  );


  $templateCache.put('app/views/brandid-block.html',
    "<div class=\"row-fluid width-padding\"><div class=\"muted white-back withShadow withRadius\"><div class=\"row-fluid center-align\"><img src=http://brandid.s3.amazonaws.com/logo.png alt=\"BRANDiD Logo\" class=top-margin width=70px></div><div class=\"row-fluid width-padding small-top-padding bottom-padding machine center-align\">If you found this useful, consider kicking shopping's ass at <a href=http://www.getbrandid.com>getbrandid.com</a></div></div></div>"
  );


  $templateCache.put('app/views/debug.html',
    "<div class=\"row-fluid center-align\"><h5 class=\"machine bottom-margin muted\">ui-router states</h5></div><pre>\n" +
    "$state = {{$state.current.name}}\n" +
    "$stateParams = {{$stateParams}}\n" +
    "</pre>"
  );


  $templateCache.put('app/views/detail/about.list.animations.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=transitionBack()>Back</a><h1 class=\"human title\">Angular Animations</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-sitemap small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=punchy>Angular Class Based Animations</h4></div></div></div><div class=\"row-fluid left-align muted\"><span class=muted>We use <span class=bold><a href=https://github.com/brandid/animate-helpers.scss>animate-helpers.scss</a></span> which is a library we wrote that allows us to easily customise the famous <a href=https://github.com/daneden/animate.css>Animate.css</a> library for use with Angular 1.2 class based animations. Read more on that <a href=http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html>here</a>.</span></div></div><div class=top-margin><a href=#/about class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/about.list.bootstrap.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=transitionBack()>Back</a><h1 class=\"human title\">Sass Bootstrap</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-twitter small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=punchy>Sass Bootstrap 2.3.2</h4></div></div></div><div class=\"row-fluid left-align muted\"><span class=muted>We use <a href=https://github.com/thomas-mcdonald/bootstrap-sass>sass-bootstrap</a> which is, believe it or not, Bootstrap converted to Sass.</span></div></div><div class=top-margin><a href=#/about class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/about.list.font-awesome.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=transitionBack()>Back</a><h1 class=\"human title\">Font Awesome</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-flag small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=punchy>Font Awesome is Awesome</h4></div></div></div><div class=\"row-fluid left-align muted\"><span class=muted>Anything with the word <a href=\"http://fortawesome.github.io/Font-Awesome/icons/\">awesome</a> in its name better be pretty damn good. Luckily it is.</span></div></div><div class=top-margin><a href=#/about class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/about.list.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><h1 class=\"human title\">About</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=row-fluid><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-info-sign small-right-margin\"></i></h1></div><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align machine\"><span class=muted>We love Parse and AngularJS. We hate servers.<br><br>Whilst building <a href=https://www.getbrandid.com>getbrandid.com</a> we developed some best practices around this stack, so we decided to open source it here. We even talked about it on the <a target=_blank href=\"http://blog.parse.com/\">Parse Blog</a>.<br><br>This boilerplate is great for launching complex database enabled apps really fast. Fork it, try it out, let us know what features you want!</span></div></div></div><div class=\"row-fluid white-back withShadow withRadius center-align\"><a ng-click=goForwardToPath(item.path) class=\"block row-fluid top-padding bottom-padding relative light-border-bottom white-border-top line height-med\" ng-repeat=\"item in masterDetailCtrl.about\" style=cursor:pointer><div class=\"span11 muted left-align\"><div class=med-width-padding><div class=\"pull-left small-right-margin\"><i class=\"icon {{item.icon}} icon-large small-right-margin\"></i><span class=\"small-left-margin machine\">{{item.title}}</span></div></div></div><div class=\"span1 muted pull-right\"><i class=\"icon icon-chevron-right\"></i></div></a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/about.list.state.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=transitionBack()>Back</a><h1 class=\"human title\">Angular State Manager</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-sitemap small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=punchy>Ui-router</h4></div></div></div><div class=\"row-fluid left-align muted\"><span class=muted>We use <span class=bold><a href=https://github.com/angular-ui/ui-router>ui-router</a></span> instead of the core Angular router because it handles application states excellently, a lot like the <a href=http://emberjs.com/api/classes/Ember.Router.html>Ember.Router</a>. This is important when building a large complex app, as you often need a better way to handle nested views, parent views and have the ability to override them depending on the application's state.</span></div></div><div class=top-margin><a href=#/about class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/about.list.theme.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=transitionBack()>Back</a><h1 class=\"human title\">BRAND<span class=lowercase>i</span>D UI Kit</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-tint small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=punchy>Master Detail Theme + OOCSS + SASS</h4></div></div></div><div class=\"row-fluid left-align muted\"><span class=muted>We developed a <a href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/styles/_brandid-ui.scss>UI Kit</a> that augments Twitter Bootstrap with some awesome helper classes, animations and this master-detail theme you're looking at now.</span><br><br><span class=muted>We subscribe to our friend <a href=\"http://ianstormtaylor.com/oocss-plus-sass-is-the-best-way-to-css/\">Ian Storm Taylor</a>'s philosophy of OOCSS + Sass, and our UI Kit is pretty flexible, so we hardly ever have to write ANY new classes when developing new features. This means our CSS filesize remains relatively constant.</span></div></div><div class=top-margin><a href=#/about class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/crud.detail.edit.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=\"setAnimationClass('moveleft')\" href=#/crud/{{detailCtrl.current.id}}>Back</a><h1 class=\"human title\">Edit</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-user small-right-margin\"></i></h1></div></div><div id=loadingContainer class=\"relative row-fluid\"><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=\"row-fluid left-align\"><form edit-monster-form=\"\" monster-to-save=detailCtrl.current name=editForm class=form-horizontal ng-submit=saveMonster() novalidate><div class=control-group><label class=control-label for=inputEmail>Name</label><div class=controls><input style=width:97% ng-model=editedMonster.name placeholder=Email required></div></div><div class=control-group><label class=control-label for=inputPassword>Reason</label><div class=controls><input style=width:97% ng-model=editedMonster.reason required></div></div><div class=control-group><div class=controls><button type=submit ng-disabled=editForm.$invalid class=\"btn btn-block btn-large btn-success\">Save To Parse</button></div></div></form></div></div></div><div class=row-fluid></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/crud.detail.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=\"goBackTo('demo.crud')\"><i class=\"icon icon-th-list small-right-margin\"></i>List</a><h1 class=\"human title\">Detail</h1><a class=navi-button-main href=#/crud/{{detailCtrl.current.id}}/edit>Edit</a></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-user small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=row-fluid><div class=\"row-fluid center-align\"><h4 class=punchy>Name</h4><span class=\"machine muted\">{{detailCtrl.current.getName()}}</span></div></div></div><div class=\"horizontal-line full-fade top-margin bottom-margin\"></div><h4 class=punchy>Reason</h4><span class=\"machine muted\">{{detailCtrl.current.getReason()}}</span></div><div class=\"row-fluid top-margin\"><a ng-click=destroyMonster(detailCtrl.current) class=\"btn btn-block btn-large btn-danger\">Delete this model</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/crud.list.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><h1 class=\"human title\">CRUD</h1><a ng-click=createMonster() class=navi-button-main><i class=\"icon icon-plus\"></i></a></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=row-fluid><h1 class=\"human muted light-text-shadow\"><i class=\"icon icon-cloud small-right-margin\"></i></h1></div><div class=\"row-fluid top-margin big-bottom-margin\"><div class=\"row-fluid center-align\"><span class=\"muted machine\">Reasons why shopping online for clothes sucks</span></div></div></div><div class=\"row-fluid white-back withShadow withRadius center-align\"><a href=#/crud/{{item.id}} class=\"block row-fluid top-padding bottom-padding relative light-border-bottom white-border-top\" ng-repeat=\"item in masterDetailCtrl.collection.models\" ng-animate=\"{ enter: 'waveForward-enter', leave: 'waveForward-leave' }\"><div class=\"span90-10 muted\"><div class=\"row-fluid tiny-bottom-margin\"><div class=\"span20-80 right-align\"><span class=\"machine bold\">Name:</span></div><div class=\"span80-20 left-align\"><div class=\"small-left-margin machine\">{{item.getName()}}</div></div></div><div class=row-fluid><div class=\"span20-80 right-align\"><span class=\"machine bold\">Reason:</span></div><div class=\"span80-20 left-align\"><span class=\"small-left-margin machine\">{{item.getReason()}}</span></div></div></div><div class=\"span10-90 muted center-align small-top-padding\"><div class=small-top-margin><i class=\"icon icon-chevron-right\"></i></div></div></a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/facebook.example.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><h1 class=\"human title\">Facebook API Wrapper</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=row-fluid><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-facebook small-right-margin\"></i></h1></div><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><span class=\"muted machine\">Extending the Facebook JavaScript SDK with FB.apiAngular</span></div></div></div><div class=\"row-fluid max-width-400 withShadow bottom-margin\"><a ng-click=fbConnect() class=\"btn-fb btn-large\"><div class=row-fluid><div class=\"span25-75 center-align\"><h4 class=\"no-height-margin line height-btn\"><i class=\"icon icon-facebook icon-large lightest-text\"></i></h4></div><div class=\"span75-25 center-align\"><span class=\"machine no-height-margin line normalcase height-btn lightest-text\">1. Connect</span></div></div></a></div><div class=\"row-fluid max-width-400 withShadow bottom-margin\"><a ng-click=exampleCall() class=\"btn-fb btn-large\"><div class=row-fluid><div class=\"span25-75 center-align\"><h4 class=\"no-height-margin line height-btn\"><i class=\"icon icon-facebook icon-large lightest-text\"></i></h4></div><div class=\"span75-25 center-align\"><span class=\"machine no-height-margin line normalcase height-btn lightest-text\">2. Send Request</span></div></div></a></div><pre>\n" +
    "  $scope.facebookCtrl.fbAuthData = {{ facebookCtrl.fbAuthData }}\n" +
    "\n" +
    "  $scope.facebookCtrl.response = {{ facebookCtrl.response }}\n" +
    "\n" +
    "</pre><div class=\"row-fluid white-back withShadow withRadius top-margin top-padding bottom-padding width-padding\"><div class=\"row-fluid left-align muted\">So what did we do here? We made it an actual joy to work with the Facebook API.<br><br>Check out the details <a href=#/features/facebookSDK>Features > Angular Wrapper for Facebook SDK</a></div></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/features.list.cloud-code.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=\"setAnimationClass('moveleft')\" href=#/features>Back</a><h1 class=\"human title\">Angular Cloud Code Wrapper</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-cloud small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=\"punchy small-bottom-margin\">A Service to Wrap Parse Cloud Code Calls</h4></div></div></div><div class=\"row-fluid left-align muted\">We really love AngularJS. However, you often hit the WTF ZONE of Angular, especially when you try to update scope variables outside of the \"Angular Kingdom\". Since all your data will be pulled in asynchronously from Parse, you'll run in to this issue pretty quickly.<br><br>So we wrote <strong><a href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/services/ParseCloudCodeAngular.js>ParseCloudCodeAngular</a></strong>, a simple AngularJS wrapper for the Parse.Cloud.run, saving even more boilerplate code. We're also using deferred promises, because they're awesome. This allows you to call Parse.Cloud.run, pass in any parameters, and it wraps the result in a promise <em>inside</em> the \"Angular Kingdom\". Here's an example:<em></em><br><br><pre>ParseCloudCodeAngular('customCloudCodeFunction',dataToSend);</pre><br>This single line of code calls Parse.Cloud.run, passes in your data and wraps the result in an AngularJS promise.<br><br>Here's how it works:<br><br><strong><a href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/services/ParseQueryAngular.js>ParseCloudCodeAngular.js</a></strong><pre>angular.module('ParseServices')\n" +
    "\n" +
    ".factory('ParseCloudCodeAngular',['$q','$timeout','ParseQueryAngular',function ($q, $timeout, ParseQueryAngular) { \n" +
    "\treturn function(name,params) {\n" +
    "    \treturn ParseQueryAngular(Parse.Cloud,{functionToCall:\"run\",params:[name,params]});\n" +
    "  }\n" +
    "}]);</pre><br>Just a simple shortcut to keep your code DRY.</div></div><div class=top-margin><a href=#/features class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/features.list.data.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=\"setAnimationClass('moveleft')\" href=#/features>Back</a><h1 class=\"human title\">AngularJS & Backbone</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-heart small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=\"punchy small-bottom-margin\">AngularJS + Backbone.js = <i class=\"icon icon-heart\"></i></h4><span class=muted>AngularJS for views, Backbone for models</span></div></div></div><div class=\"row-fluid left-align muted\">The awesome thing about the Parse Javascript SDK is that it's a fork of Backbone, so we can make use of the kickass Model and Collection architecture, but still use AngularJS for all UI events and views (this is where Backbone loses out to other frameworks).<br><br>The best way to stay organised is to separate each Parse Object definition into a separate file in a <strong>data</strong> folder. Each definition is a factory of an overall Angular module we have called 'ExternalDataServices' which you'll see is first declared above in #2. Extending the 'ExternalDataServices' module with new factories is easy, just leave out the square brackets. Here's what our folder structure looks like with this architecture.<br><br><pre>|-- app\n" +
    "  |-- scripts\n" +
    "    |-- modules\n" +
    "      |-- data\n" +
    "        // this is where all your model definitions \n" +
    "        |-- Monster.js</pre>And this is what a Parse Object definition would look like:<br><br><strong><a target=_blank href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/modules/data/Monsters.js>Monsters.js</a></strong><pre>// Monster.js\n" +
    "\n" +
    "// reference the module we declared earlier\n" +
    "angular.module('ExternalDataServices')\n" +
    "\n" +
    "// add a factory\n" +
    ".factory('MonsterService', ['ParseQueryAngular', function(ParseQueryAngular) {\n" +
    "\n" +
    "  // use the extendAngular instead of just extend to gain enhanced Angular functionality\n" +
    "\n" +
    "  var Monster = Parse.Object.extendAngular({\n" +
    "    className:\"Monster\",\n" +
    "    setScaryMove: function(move) {\n" +
    "      this.set('scaryMove',move);\n" +
    "      return this;\n" +
    "    }\n" +
    "  });\n" +
    "  \n" +
    "\n" +
    "  // use the extendAngular instead of just extend to gain enhanced Angular functionality\n" +
    "\n" +
    "  var Monsters = Parse.Collection.extendAngular({\n" +
    "    model: Monster,\n" +
    "    loadMonstersWithMove: function(move) {\n" +
    "      this.query = (new Parse.Query(Monster));\n" +
    "\n" +
    "      // use the enhanced load() function to fetch the collection\n" +
    "      return this.load();\n" +
    "    }\n" +
    "  });\n" +
    "\n" +
    "  // Return a simple API : model or collection.\n" +
    "  return {\n" +
    "    model: Monster,\n" +
    "    collection: Monsters\n" +
    "  }\n" +
    "\n" +
    "}])</pre><br>Now wherever we need a Monster model or collection, like in the directive below, we can instantiate it using the MonsterService like this:<br><br><pre>// SomeDirective.js\n" +
    "\n" +
    "// inject the MonsterService into your directive\n" +
    "\n" +
    "angular.module('foo',[]).directive('bar',['MonsterService',function(\n" +
    "\n" +
    "  return {\n" +
    "    controller: ['$scope','$element','$attrs', function($scope, $element, $attrs) {\n" +
    "\n" +
    "      // new up a collection so we can use it to perform a query\n" +
    "      var monsters = new MonsterService.collection;\n" +
    "\n" +
    "      // perform the Parse.Query\n" +
    "      $scope.monsters = monsters.loadMonstersWithMove('fireBreath');\n" +
    "\n" +
    "      // and remember its a promise, so we can add synchronous logic here with a .then()\n" +
    "\n" +
    "    }\n" +
    "  }]\n" +
    "\n" +
    "}])</pre><br>A great side-effect of injecting your Parse data services only when you need it is that AngularJS's awesome dependency injection system knows when to remove this stuff from memory. Also, if you build your app in a modular way, in Angular 2.0 you will also be able to take advantage of lazy loading modules which will speed up the load-time of your app tremendously.</div></div><div class=top-margin><a href=#/features class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/features.list.facebook.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=\"setAnimationClass('moveleft')\" href=#/features>Back</a><h1 class=\"human title\">Parse & Facebook SDK</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-facebook-sign small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=\"punchy small-bottom-margin\">Use a Promise to Init Parse.FacebookUtils</h4><span class=muted>Allowing you to asynchronously Load the Parse SDK and the Facebook SDK</span></div></div></div><div class=\"row-fluid left-align muted\">We all know that we should asynchronously load the Facebook SDK near the closing <span class=bold>body</span> tag to speed up page loads. We load the Parse SDK here too instead of in the <span class=bold>head</span>for the same reason. But if you try to<span class=bold></span>asynchronously load the <span class=bold>Parse SDK and Facebook SDK</span> you will run into the problem where Parse will try to call FB.init() at some point, and the FB object does not exist because the Facebook SDK has not yet loaded.<br><br>We developed an clever way to get around this. The key thing here is that Facebook calls a function <span class=bold>window.fbAsyncInit</span> as soon as the SDK is finished loading. We use this to resolve the <span class=bold>window.fbPromise</span>, which in turn is used to trigger <span class=bold>Parse.FacebookUtils.init()</span>. This method is flawless, and you never get any out of sync errors. Here's the code to define the <span class=bold>fbPromise</span>:<br><br><strong><a target=_blank href=https://github.com/brandid/parse-angular-demo/blob/master/index.html>index.html</a></strong><pre>\n" +
    "\n" +
    "  var fbDeferred = $.Deferred();\n" +
    "  window.fbPromise = fbDeferred.promise();\n" +
    "  window.fbAsyncInit = function() {\n" +
    "    fbDeferred.resolve();\n" +
    "  };\n" +
    "\n" +
    "</pre><br>... and here's the code to subsequently trigger the init()<br><br><strong><a target=_blank href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/services/ParseServices.js>ParseServices.js</a></strong><pre>\n" +
    "// FACEBOOK init\n" +
    "window.fbPromise.then(function() {\n" +
    "  Parse.FacebookUtils.init({\n" +
    "    appId: /*** FB APP ID ***/, \n" +
    "    channelUrl: /*** HTTP://YOURDOMAIN.COM/ ***/channel.html',\n" +
    "    cookie: true, // enable cookies to allow Parse to access the session\n" +
    "    xfbml: true, // parse XFBML\n" +
    "    frictionlessRequests: true // recommended\n" +
    "  });\n" +
    "});\n" +
    "</pre>Simple, elegant, highly effective.</div></div><div class=top-margin><a href=#/features class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/features.list.facebookSDK.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=\"setAnimationClass('moveleft')\" href=#/features>Back</a><h1 class=\"human title\">Facebook API Wrapper</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-facebook-sign small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius top-margin top-padding bottom-padding width-padding\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=\"punchy small-bottom-margin\">FB.api wrapped in an Angular Promise</h4><span class=muted>Extending the Facebook JavaScript SDK with FB.apiAngular</span></div></div></div><div class=\"row-fluid left-align muted\">So what did we do <a href=#/facebook>here</a>? We made it an actual joy to work with the Facebook API.<br><br><span class=bold>1. Wrapped all FB.api calls in an AngularJS promise</span><br>For the same reason we need to wrap all Parse calls in an Angular promise, we need to do it with all <span class=bold>FB.api</span> calls too.<br><br>This is because <span class=bold>FB.api</span> performs requests outside the Angular kingdom. We took inspiration from our Parse wrapper and created a similar one for <span class=bold>FB.api</span>.<br><br><span class=bold>2. Extended Facebook JS SDK with FB.apiAngular</span><br>So after creating a cleanly wrapped Angular promise for <span class=bold>FB.api</span>, we gave ourselves access to it by extended the Facebook SDK with the <span class=bold>FB.apiAngular</span> method. Now, instead of calling <span class=bold>FB.api</span>, you just call <span class=bold>FB.apiAngular</span>, and you get to use the Facebook SDK with promises!<br><br><strong><a target=_blank href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/controllers/facebook-example.js>facebook-example.js</a></strong><pre>\n" +
    "\n" +
    "  $scope.exampleCall = function() {\n" +
    "\n" +
    "    FB.apiAngular(\n" +
    "      '/me/apprequests',\n" +
    "      { message: 'From the app to the user.' },\n" +
    "      'POST')\n" +
    "\n" +
    "    .then(function(data) {\n" +
    "\n" +
    "      alert('done'); console.log(data)\n" +
    "    \n" +
    "    }, function(error) {\n" +
    "    \n" +
    "    $scope.facebookCtrl.response = error.message;\n" +
    "  \n" +
    "  });\n" +
    "\n" +
    "  }\n" +
    "\n" +
    "</pre><br><br>Check out <strong><a href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/services/FacebookAngularPatch.js>FacebookAngularPatch.js</a></strong> to see exactly how we extended the FB SDK with the FB.apiAngular method.</div></div><div class=top-margin><a href=#/features class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/features.list.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><h1 class=\"human title\">FEATURES</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=row-fluid><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-bolt small-right-margin\"></i></h1></div><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><span class=\"muted machine\">Some best practices from our <a href=\"http://blog.parse.com/2013/10/17/guest-post-parse-x-angular-js-boilerplate/\" target=new>guest blog post</a> on Parse.com</span></div></div></div><div class=\"row-fluid white-back withShadow withRadius center-align\"><a href={{item.path}} class=\"block row-fluid top-padding bottom-padding relative light-border-bottom white-border-top line height-med\" ng-repeat=\"item in masterDetailCtrl.features\" ng-animate=\"{ enter: 'waveForward-enter', leave: 'waveForward-leave' }\"><div class=\"span11 muted left-align\"><div class=med-width-padding><div class=\"pull-left small-right-margin\"><i class=\"icon {{item.icon}} icon-large small-right-margin\"></i><span class=\"small-left-margin machine\">{{item.title}}</span></div></div></div><div class=\"span1 muted pull-right\"><i class=\"icon icon-chevron-right\"></i></div></a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/features.list.parse-sdk.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=\"setAnimationClass('moveleft')\" href=#/features>Back</a><h1 class=\"human title\">Extend Parse SDK</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-cogs small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=\"punchy small-bottom-margin\">Give Parse AngularJS Superpowers</h4><span class=muted>Extending Parse.Object gives all your Parse data load() and save() methods auto wrapping them in AngularJS promises</span></div></div></div><div class=\"row-fluid left-align muted\">With the simple code below, we beefed up all our Parse objects and collections with enhanced functionality, allowing us to save and load any Parse.Object or Parse.Collection inside the AngularJS digest with finesse.<br><br><strong><a target=_blank href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/services/ParseServices.js>ParseServices.js</a></strong><pre>\n" +
    "  Parse.Object.extendAngular = function(options) {\n" +
    "    return ParseAbstractService.EnhanceObject(Parse.Object.extend(options));\n" +
    "  };\n" +
    "\n" +
    "  Parse.Collection.extendAngular = function(options) {\n" +
    "    return ParseAbstractService.EnhanceCollection(Parse.Collection.extend(options));\n" +
    "  };\n" +
    "</pre><br>It doesn't take a genius to notice that this requires something we called ParseAbstractService, which is a simple bit of code that adds the Parse.Object and Parse.Collection methods.<br><br><strong><a target=_blank href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/modules/data/_ParseObjects.js>_ParseObjects.js</a></strong><pre>angular.module('ExternalDataServices',[])\n" +
    ".factory('ParseAbstractService', ['ParseQueryAngular', function(ParseQueryAngular) {\n" +
    " /********\n" +
    " This service provides an enhanced Parse.Object and Parse.Collection\n" +
    " So we can call load and saveParse from any extending Class and have that wrapped\n" +
    " within ParseQueryAngular\n" +
    " **********/\n" +
    "\n" +
    "  var object = function(originalClass) {\n" +
    "    originalClass.prototype = _.extend(originalClass.prototype,{\n" +
    "      load:function() {\n" +
    "        return ParseQueryAngular(this,{functionToCall:\"fetch\"});\n" +
    "      },\n" +
    "      saveParse:function(data) {\n" +
    "        if (data &amp;&amp; typeof data == \"object\") this.set(data);\n" +
    "        return ParseQueryAngular(this,{functionToCall:\"save\", params:[null]});\n" +
    "      }\n" +
    "    });\n" +
    "   return originalClass;\n" +
    "  }\n" +
    "\n" +
    "  var collection = function(originalClass){\n" +
    "    originalClass.prototype = _.extend(originalClass.prototype,{\n" +
    "      load:function() {\n" +
    "        return ParseQueryAngular(this,{functionToCall:\"fetch\"});\n" +
    "      }\n" +
    "    });\n" +
    "    return originalClass;\n" +
    "  };\n" +
    "\n" +
    "  return {\n" +
    "    EnhanceObject:object,\n" +
    "    EnhanceCollection:collection\n" +
    "  }\n" +
    "}]);</pre><br>We can now make use of these new methods on any models or collections that extend Parse.Object.extendAngular or Parse.Collection.extendAngular, like so:<br><br><pre>// =============\n" +
    "// new way using enhanced Parse.Object\n" +
    "// =============\n" +
    "\n" +
    "var collection = new TestCollection();\n" +
    "collection.load();</pre><br>For a clearer idea of how much more awesome this is, below is the old way:<br><br><pre>// ============\n" +
    "// old way\n" +
    "// ============\n" +
    "\n" +
    "var collection = new TestCollection();\n" +
    "\n" +
    "var defer = $q.defer();\n" +
    "\n" +
    "// fetch all models\n" +
    "collection.fetch({\n" +
    "  success: function(result) {\n" +
    "    $rootScope.$apply(function() {\n" +
    "      defer.resolve(result);\n" +
    "  },\n" +
    "  error: function(error) {\n" +
    "    $rootScope.$apply(function() {\n" +
    "      defer.reject(error);\n" +
    "    }\n" +
    "  }\n" +
    "});\n" +
    "\n" +
    "defer.promise.then(function(data) {\n" +
    "\n" +
    "  collection = data;\n" +
    "  // now, finally the collection is ready to use in AngularJS\n" +
    "});</pre><br>Yuck! And you would have to repeat all that for every save or fetch!</div></div><div class=top-margin><a href=#/features class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/detail/features.list.parse.html',
    "<div class=row-fluid><div class=\"navi-bar-title dark\"><a class=navi-button-prev ng-click=\"setAnimationClass('moveleft')\" href=#/features>Back</a><h1 class=\"human title\">Parse Angular Wrapper</h1></div><div class=\"row-fluid width-padding top-padding bottom-padding\"><div class=\"row-fluid center-align\"><div class=\"row-fluid bottom-margin\"><h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-cloud small-right-margin\"></i></h1></div></div><div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\"><div class=row-fluid><div class=\"row-fluid bottom-margin\"><div class=\"row-fluid center-align\"><h4 class=\"punchy small-bottom-margin\">A Service to Wrap All Parse Calls</h4><span class=muted>Saving you from writing the same code over and over</span></div></div></div><div class=\"row-fluid left-align muted\">We really love AngularJS. However, you often hit the WTF ZONE of Angular, especially when you try to update scope variables outside of the \"Angular Kingdom\". Since all your data will be pulled in asynchronously from Parse, you'll run in to this issue pretty quickly.<br><br>So we wrote <strong><a href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/services/ParseQueryAngular.js>ParseQueryAngular</a></strong>, a simple AngularJS wrapper for the Parse JS SDK, saving gazillions of lines of code (at least), and we're also using deferred promises, because they're awesome. This allows you to call any Parse API method on any Parse.Object, pass in any parameters, and it wraps the result in a promise <em>inside</em> the \"Angular Kingdom\". Here's an example:<em></em><br><br><pre>ParseQueryAngular(Parse.FacebookUtils,{functionToCall:\"link\", params:[user, \"email,user_likes,publish_actions\"]})</pre><br>This single line of code calls Parse.FacebookUtils.link to connect the current Parse User with their Facebook account, and passes in some parameters for permissions and wraps the result in an AngularJS promise.<br><br>If you're familiar with the Parse docs, you 'll notice something magical here: there is no need to write the same old success: and error: functions every time you make an API call to Parse.<br><br>If you're familiar with AngularJS you'll also notice something magical here: the result of the API call is automatically wrapped into the AngularJS digest for use within your $scope. No need to do any<strong>$scope.$apply</strong>nonsense. Here's another example that we do all the time:<br><br><pre>var user = new Parse.User();\n" +
    "\n" +
    "user.set('username', 'spacenick');\n" +
    "user.set('password', 'sp4c3n1ck');\n" +
    "user.set('email','space@nick.com');\n" +
    "\n" +
    "ParseQueryAngular(user,{functionToCall:\"signUp\", params:[null]}).then(function(registeredUser) {\n" +
    "\n" +
    "    // since we know that the result will be inside the Angular digest, we make use of Angular's two-way data binding and automatically update all our views by simply updating the user object\n" +
    "\n" +
    "    user = registeredUser;\n" +
    "\n" +
    "    // we can even use it with Parse.Query\n" +
    "    var query = new Parse.Query(MyObject);\n" +
    "    query.include('myStuff').equalTo('someRandom','thing');\n" +
    "    return ParseQueryAngular(query);\n" +
    "}).then(function(queriedObj) {\n" +
    "\n" +
    "    // assuming $scope.obj is used elsewhere in the app, this would update any views automatically\n" +
    "    $scope.obj = queriedObj;\n" +
    "\n" +
    "    return queriedObj;\n" +
    "}, function(error) {\n" +
    "\n" +
    "    // any rejected promises in the chain will be caught here\n" +
    "    console.log(error);\n" +
    "\n" +
    "});</pre><br>Without ParseQueryAngular, doing two API calls one after the other would have been a nightmare of asynchronous spaghetti mess with lots of repetitive callback handling code. We just tamed it into a synchronous process and our AngularJS views would have been auto-updated every step of the way thanks to two-way data binding.<br><br>We also didn't need write any repetitive success: error: functions. This is the guts of creating a seamless Parse x Angular integration, we use this anytime we need talk to Parse. Check out the <strong><a href=https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/services/ParseQueryAngular.js>ParseQueryAngular</a></strong> source and read the code comments on how we did this.</div></div><div class=top-margin><a href=#/features class=\"btn btn-block btn-secondary btn-large\">Back</a></div></div><div class=row-fluid ng-include=\"\" src=\"'app/views/footer.html'\"></div></div>"
  );


  $templateCache.put('app/views/footer.html',
    "<div class=\"row-fluid big-top-margin width-padding big-bottom-margin hide-on-animate\"><div class=\"muted white-back withShadow withRadius\"><div class=\"row-fluid width-padding top-padding bottom-padding machine\"><img src=http://brandid.s3.amazonaws.com/logo.png alt=\"BRANDiD Logo\" style=\"margin-top: 3px\" class=\"pull-left small-right-margin\" width=70px> If you found this useful, consider kicking shopping's ass at <a href=http://www.getbrandid.com>getbrandid.com</a></div></div></div>"
  );


  $templateCache.put('app/views/header.html',
    "<header class=\"row-fluid center-align\"><div class=\"row-fluid top-margin\"><h2 class=\"lightest-text text-shadow human\" style=text-transform:none>Parse x AngularJS Boilerplate</h2></div><div class=\"row-fluid small-top-margin\"><iframe src=\"http://ghbtns.com/github-btn.html?user=brandid&repo=parse-angular-demo&type=watch&count=true\" allowtransparency=true frameborder=0 scrolling=0 width=110 height=20></iframe><iframe src=\"http://ghbtns.com/github-btn.html?user=brandid&repo=parse-angular-demo&type=fork&count=true\" allowtransparency=true frameborder=0 scrolling=0 width=95 height=20></iframe></div><div class=\"row-fluid top-margin small-bottom-margin max-width-600\"><div class=\"well muted withShadow\"><div class=\"row-fluid small-bottom-margin machine\">A battle-tested boilerplate for building large, powerful, serverless apps with AngularJS and Parse, including angular wrappers for the Parse SDK, Parse Cloud Code, Facebook SDK and more.</div><div class=row-fluid><iframe allowtransparency=true frameborder=0 scrolling=no src=\"//platform.twitter.com/widgets/tweet_button.html?text=Pretty cool @Parseit x @AngularJS boilerplate http://brandid.github.io/parse-angular-demo by @BRANDiD\" style=\"width:90px; height:20px\"></iframe></div><hr><div class=row-fluid><div class=\"row-fluid machine\">Follow the discussion on <a href=\"https://news.ycombinator.com/item?id=6567104\">HackerNews</a></div></div><div class=\"row-fluid small-top-margin\"><iframe allowtransparency=true frameborder=0 scrolling=no src=\"//platform.twitter.com/widgets/follow_button.html?screen_name=spacenick&size=small\" style=\"width:200px; height:20px\"></iframe><iframe allowtransparency=true frameborder=0 scrolling=no src=\"//platform.twitter.com/widgets/follow_button.html?screen_name=arush&size=small\" style=\"width:200px; height:20px\"></iframe></div></div></div><a href=https://github.com/brandid/parse-angular-demo><img style=\"position: absolute; top: 0; right: 0; border: 0\" src=https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png alt=\"Fork me on GitHub\"></a></header>"
  );


  $templateCache.put('app/views/leftnav.html',
    "<div ng-controller=MenuController><div class=\"row-fluid top-margin {{menuItem.css}}\" ng-repeat=\"menuItem in menuCtrl.menu\"><a href={{menuItem.href}} class=\"muted line height-btn center-align menuItem\" ng-class=isActive(menuItem)><div class=\"row-fluid center-align dark-text text-shadow\"><div class=\"line height-btn font-size-large\"><i class=\"icon {{menuItem.icon}} icon-large\"></i></div><div class=\"line height-btn row-fluid tichy\"><span class=\"muted small machine\">{{menuItem.name}}</span></div></div></a></div></div>"
  );


  $templateCache.put('app/views/master-detail.html',
    "<div class=row-fluid><div class=\"one-third light-dark-back shadow-ninja right-light inset\" style=\"height: 1500px\"><div class=\"row-fluid top-padding bottom-padding width-padding light-border-top light-border-bottom\"><div ng-include=\"\" src=\"'app/views/brandid-block.html'\"></div></div><a ng-click=transitionTo(item.state) class=\"block light-back-hover width-padding row-fluid top-padding bottom-padding light-border-top light-border-bottom\" ng-class=isActiveState(item.state) ng-repeat=\"item in masterDetailCtrl.menu\"><div class=\"span3 center-align\"><h4 class=\"power muted no-height-margin line height-btn\"><i class=\"icon {{item.icon}} small-right-margin\"></i></h4></div><div class=span7><h4 class=\"human muted no-height-margin line height-btn\">{{item.title}}</h4></div><div class=\"span1 pull-right\"><h4 class=\"muted no-height-margin line height-btn\"><i class=\"icon icon-chevron-right\"></i></h4></div></a><div class=\"row-fluid width-padding top-margin\"><div ng-include=\"\" src=\"'app/views/debug.html'\"></div></div></div><div class=\"two-thirds relative\"><div ng-class=masterDetailCtrl.animate ui-view=detail booty-shake=\"\"></div></div></div>"
  );


  $templateCache.put('app/views/sphere.html',
    "<p>shnuur</p><canvas id=three-scene></canvas>"
  );


  $templateCache.put('app/views/tips/crud-tips.html',
    "<div class=row-fluid><h5 class=punchy>How To CRUD:</h5></div><pre class=\"muted white-back left-align ani flash\">\n" +
    "// create\n" +
    "$scope.masterDetailCtrl.collection.addComment('Joe', 'exploding feces')\n" +
    "\n" +
    "// update\n" +
    "current.set('name', 'Bob');\n" +
    "ParseQueryAngular(current, {functionToCall:\"save\", params:[null]});\n" +
    "\n" +
    "// delete\n" +
    "ParseQueryAngular(current, {functionToCall:\"destroy\"});\n" +
    "</pre>"
  );


  $templateCache.put('app/views/tips/load-collections.html',
    "<div class=row-fluid><h5 class=punchy>How To Load Collections:</h5></div><pre class=\"muted white-back left-align ani flash\">\n" +
    "// get the collection from our data definitions\n" +
    "var Monsters = Monsterservice.collection;\n" +
    "\n" +
    "// new up a collection\n" +
    "$scope.masterDetailCtrl.collection = new Monsters;\n" +
    "\n" +
    "// use the extended Parse SDK to load the whole collection\n" +
    "$scope.masterDetailCtrl.collection.load();\n" +
    "</pre>"
  );


  $templateCache.put('app/views/welcome.html',
    "<div class=row-fluid>test</div>"
  );

}]);
