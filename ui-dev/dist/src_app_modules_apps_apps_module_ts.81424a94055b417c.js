"use strict";(self.webpackChunkFrontendDev=self.webpackChunkFrontendDev||[]).push([["src_app_modules_apps_apps_module_ts"],{9717:(R,g,t)=>{t.r(g),t.d(g,{AppsModule:()=>u});var h=t(6895),$=t(2271),l=t(9965),e=t(8256);class n{ngOnInit(){this.renderCode()}renderCode(){this.controller='\n    angular.module("vikingApp").controller("homeController", function ($scope) {\n      $scope.code = "";\n      // YOUTUBE VIDEO URL\n      $scope.optObj = [\n          { choice: "Riviera", link: "#/riviera" },\n          { choice: "Main", link: "#/main" },\n          { choice: "Lobby", link: "#/lobby" },\n          { choice: "Mezzanine", link: "#/mezzanine" },\n          { choice: "Promenade", link: "#/promenade" },\n          { choice: "Upper", link: "#/upper" },\n          { choice: "Empress", link: "#/empress" },\n          { choice: "Verandah", link: "#/verandah" },\n          { choice: "Vista", link: "#/vista" },\n          { choice: "Sun", link: "#/sun" }\n      ];\n  \n      $scope.ship = angular.element(document.querySelector(".discoverShip"));\n      $scope.backgroundImage = "/discoverShip.jpg";\n      $scope.myBg = $scope.backgroundImage;\n      $scope.myVideo = $scope.showVideo = false;\n      $scope.closeText = angular.element(document.querySelector(".closeVid"));\n      $scope.closeText[0].innerHTML = "Show Videos";\n      $scope.hideVideo = function () {\n          if ($scope.myVideo == false) $scope.closeText[0].innerHTML = "Hide Videos";\n          else if ($scope.myVideo == true) $scope.closeText[0].innerHTML = "Show Videos";\n          $scope.myVideo = !$scope.myVideo;\n      };\n\n      // SWAP BG IMAGE DEPENDENT ON OPTION DROPDOWN MENU\n      $scope.selected = angular.element(document.querySelector("#selected"));\n      $scope.selectedItemChanged = function () {\n          $scope.showVideo = true;\n          switch ($scope.chosen.choice) {\n              case "Riviera":\n                  $scope.myBg = "../Deck9.jpg";\n                  $scope.code = "pJaCrB6mDyI";\n                  break;\n              case "Main":\n                  $scope.myBg = "../Deck8.jpg";\n                  $scope.code = "n7vqlKSAwIs";\n                  break;\n              case "Lobby":\n                  $scope.myBg = "../Deck7.jpg";\n                  $scope.code = "dGz5V3dwFbQ";\n                  break;\n              case "Mezzanine":\n                  $scope.myBg = "../Deck6.jpg";\n                  $scope.code = "SYqv2UOP_fM";\n                  break;\n              case "Promenade":\n                  $scope.myBg = "../Deck5.jpg";\n                  $scope.code = "wAHzTLiaSDQ";\n                  break;\n              case "Upper":\n                  $scope.myBg = "../Deck4.jpg";\n                  $scope.code = "8QZrk1-Ty-E";\n                  break;\n              case "Empress":\n                  $scope.myBg = "../Deck3.jpg";\n                  $scope.code = "4ulB5HEYNT4";\n                  break;\n              case "Verandah":\n                  $scope.myBg = "../Deck2.jpg";\n                  $scope.code = "wZylMc_yZVE";\n                  break;\n              case "Vista":\n                  $scope.myBg = "../Deck1.jpg";\n                  $scope.code = "o5nTQXv3Zfw";\n                  break;\n              case "Sun":\n                  $scope.myBg = "../DeckA.jpg";\n                  $scope.code = "Ry9U_boekKg";\n                  break;\n          }\n      };\n  });\n  \n  angular.module("vikingApp").controller("riviera", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Riviera";\n          // SERVICE FUNCTION DISPLAYS FEATURES LIST\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deckA, $scope.deckNum);\n          };\n          // LOCAL VAR = SERVICE OBJECT HOLDING IMAGE GALLERY OBJECT\n          $scope.galleryPics = divService.galleryPics;\n          $scope.linkData = 0;\n          $scope.galleryContent = ["No content for the Medical Center"];\n      });\n  \n  angular.module("vikingApp").controller("main", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Main";\n          $scope.mobileNav = false;\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deck1, $scope.deckNum);\n          };\n          $scope.galleryPics = divService.galleryPics;\n          $scope.linkData = 0;\n          $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description", "Gallery 3 description"];\n      });\n  \n  angular.module("vikingApp").controller("lobby", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Lobby";\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deck2, $scope.deckNum);\n          };\n          $scope.galleryPics = divService.galleryPics;\n          $scope.linkData = 0;\n          $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description", "Gallery 3 description"];\n      });\n  \n  angular.module("vikingApp").controller("mezzanine", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Mezzanine";\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deck3, $scope.deckNum);\n          };\n          $scope.galleryPics = divService.galleryPics;\n          $scope.linkData = 0;\n          $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description", "Gallery 3 description", "Gallery 4 description"];\n      });\n  \n  angular.module("vikingApp").controller("promenade", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Promenade";\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deck4, $scope.deckNum);\n          };\n          $scope.galleryPics = divService.galleryPics;\n          $scope.linkData = 0;\n          $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description", "Gallery 3 description", "Gallery 4 description", "Gallery 5 description"];\n      });\n  \n  angular.module("vikingApp").controller("upper", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Upper";\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deck5, $scope.deckNum);\n          };\n          $scope.galleryPics = divService.galleryPics;\n          $scope.linkData = 0;\n          $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description", "Gallery 3 description", "Gallery 4 description", "Gallery 5 description"];\n      });\n  \n  angular.module("vikingApp").controller("empress", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Empress";\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deck6, $scope.deckNum);\n          };\n          $scope.galleryPics = divService.galleryPics;\n          $scope.linkData = 0;\n          $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description", "Gallery 3 description", "Gallery 4 description"];\n      });\n  \n  angular.module("vikingApp").controller("verandah", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Verandah";\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deck7, $scope.deckNum);\n          };\n          $scope.galleryPics = divService.galleryPics;\n          $scope.linkData = 0;\n          $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description", "Gallery 3 description", "Gallery 4 description", "Gallery 5 description"];\n      });\n  \n  angular.module("vikingApp").controller("vista", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Vista";\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deck8, $scope.deckNum);\n          };\n          $scope.linkData = 0;\n      });\n  \n  angular.module("vikingApp").controller("sun", function ($scope, displayFeatures, divService) {\n          $scope.deckNum = "Sun";\n          $scope.features = function () {\n              displayFeatures.createList(displayFeatures.deck9, $scope.deckNum);\n          };\n          $scope.linkData = 0;\n      });\n  \n  angular.module("vikingApp").controller(\n          "mainController",\n          function ($scope, $rootScope, $window, divService, cfpLoadingBar, $location, $http\n          ) {\n              $rootScope.pageClass = "slideRight";\n              $scope.currentRoute = null;\n              $scope.screenSize = null;\n              $scope.hideOthers = function (clicked) {\n                  $scope.btnOne = $scope.btnTwo = $scope.oneActive = $scope.twoActive = $scope.apis = false;\n                  $scope.gallery = false;\n                  $rootScope.apiText = "Trip Forecast";\n              };\n  \n              // ITINERARIES & STATEROOM BTNS\n              $scope.showBtnOne = function () {\n                  $scope.btnOne = $scope.btnOne ? false : true;\n                  $scope.oneActive = !$scope.oneActive;\n                  $scope.oneActive ? ($rootScope.apiText = "Trip Forecast") : "Close";\n                  $scope.twoActive = $scope.btnTwo = $scope.details = $scope.apis = false;\n                  $scope.gallery = false;\n                  $scope.overlayActive = false;\n              };\n              $scope.openAccordionSection = function (e) {\n                  let elems = [];\n                  elems = Array.from(document.querySelectorAll(".panel-wrapper"));\n                  for (var i = 0; i < elems.length; i++) {\n                      elems[i].classList.add("panel-default");\n                  }\n                  let elem = e.target.parentElement.querySelector(".panel-wrapper");\n                  elem.classList.remove("panel-default");\n              };\n              $scope.showBtnTwo = function () {\n                  $scope.btnTwo = $scope.btnTwo ? false : true;\n                  $scope.twoActive = !$scope.twoActive;\n                  $scope.twoActive ? ($rootScope.apiText = "Trip Forecast") : "Close";\n                  $scope.oneActive = $scope.btnOne = $scope.details = $scope.apis = false;\n                  $scope.gallery = false;\n                  $scope.overlayActive = false;\n              };\n              $scope.closeAll = function () {\n                  $scope.mobileNav = false;\n                  $scope.btnOne = false;\n                  $scope.btnTwo = false;\n                  $scope.oneActive = false;\n                  $scope.twoActive = false;\n                  $scope.details = false;\n                  $rootScope.apiText = "Trip Forecast";\n              };\n              $scope.toggleNav = function () {\n                  $scope.mobileNav = !$scope.mobileNav;\n                  $scope.hideOthers();\n              };\n              $scope.hideOthers();\n  \n              // CHANGE DETAILS BTN COPY\n              $scope.detailsText = function () {\n                  if ($scope.details == true) $scope.divText = "Close";\n                  else { $scope.divText = "Deck Details"; }\n              };\n  \n              // DETAILS BTN/ SIDEBAR MENU TOGGLE\n              $scope.details = false;\n              $scope.myBtn = angular.element(document.querySelector("#h5Btn"));\n              $scope.divText = "Deck Details";\n              $scope.detailsToggle = function () {\n                  $scope.details = !$scope.details;\n                  $scope.btnOne = $scope.btnTwo = $scope.oneActive = $scope.twoActive = false;\n                  $scope.detailsText();\n              };\n  \n              $scope.grid = $scope.apis = false;\n              $scope.slider = true;\n              $rootScope.apiText = "Trip Forecast";\n              $scope.getElem = function (obj) {\n                  $scope.closeGallery();\n                  $scope.details = false;\n\n                  // GET ELEMENT BY DATA VALUE. EVALUATE WHICH BUTTONS TO DISPLAY\n                  var elemData = obj.target.attributes.data.value;\n                  switch (elemData) {\n                      case "slider":\n                          $scope.grid = false;\n                          $scope.slider = true;\n                          break;\n                      case "grid":\n                          $scope.slider = false;\n                          $scope.grid = true;\n                          break;\n                      case "apis":\n                          $scope.apis = !$scope.apis;\n                          $scope.apis ? ($rootScope.apiText = "Close") : ($rootScope.apiText = "Trip Forecast");\n                          $scope.btnOne = $scope.btnTwo = $scope.oneActive = $scope.twoActive = false;\n                  }\n              };\n  \n              // WEATHER & MAP API\n              $scope.textSearching = $scope.results = false;\n              $scope.changeInput = "Please enter your city destination.";\n              $scope.userSearching = function () {\n                  $scope.changeInput = "Google maps API searching for";\n                  $scope.textSearching = true;\n              };\n  \n              $scope.getForecast = function () {\n                 \n                // API CALL W/ CITY VAR\n                  $scope.url = "https://api.openweathermap.org/data/2.5/weather?q=" + $scope.cityName;\n                  $http.get($scope.url).then(function (response) {\n                      var myWeather;\n                      $scope.myWeather = myWeather;\n                      // DATA IN RETRIEVED OBJECT\n                      myWeather = response.data;\n                  });\n                  \n                  $.getJSON($scope.url, weatherCallback);\n                  function weatherCallback(myWeather) {\n                      var mapOptions = {\n                          \n                          // WEATHER LONGITUDE & LATITUDE COORDINATES\n                          center: new google.maps.LatLng(myWeather.coord.lat, myWeather.coord.lon),\n                          zoom: 10,\n                          mapTypeId: google.maps.MapTypeId.ROADMAP\n                      };\n                      var map = new google.maps.Map(\n                          document.getElementById("maps"),\n                          mapOptions\n                      );\n                      // WEATHER & DATE VARS\n                      var cityName = myWeather.name,\n                          country = myWeather.sys.country,\n                          \n                          // CONVERT KELVIN TO FAHRENHEIT\n                          Fahrenheit = Math.ceil((myWeather.main.temp - 273.15) * 1.8) + 32,\n                          \n                          // CONVERT KELVIN TO CELCIUS\n                          Celcius = Math.ceil(myWeather.main.temp - 273.15).toFixed(0),\n                          myDate = new Date(),\n                          time = myDate.toLocaleTimeString(),\n                          month = myDate.getMonth(),\n                          months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],\n                          today = myDate.getDate(),\n                          year = myDate.getFullYear();\n\n                      // DISPLAY TEXT HERE\n                      $scope.results = angular.element(document.querySelector("#temp"));\n                      $scope.results.html(\n                          "The temperature in " + cityName + " (" + country + ") is:<br>" + Fahrenheit + "<span class=\'fahrenheit\'> (Fahrenheit)</span>" + "<br>" +\n                              Celcius + "<span class=\'fahrenheit\'> (Celcius)</span>"\n                      );\n                      $("#temp").append("<br>" + "Humidity: " + myWeather.main.humidity + "<span class=\'fahrenheit\'>%</span>");\n                      $("#temp").append("<br><br>" + "Requested at " + time + ", " + months[month] + " " + today + ", " + year);\n                  }\n              };\n  \n              // CLEAR RESULTS\n              $scope.clear = function (myWeather) {\n                  $scope.cityName = "";\n              };\n              // BOOTSTRAP OPEN ACCORDION SECTIONS ON CLICK\n              $scope.captureClick = function (obj) {\n                  var elemData = obj.target.attributes.data.value;\n                  $scope.detailsToggle();\n                  // CLOSE BOOTSTRAP ACCORDION SECTIONS, OPEN SECTION ASSOCIATED W/ DATA VALUE\n                  $(".panel-collapse.in").collapse("hide");\n                  $("#collapse" + elemData).collapse("toggle");\n                  $scope.gallery = false;\n              };\n              // SET GALLERY TO CLOSED\n              $scope.gallery = false;\n              // GET ID & DATA VALUE OF RED DOT CLICKED ON DECK\n              $scope.myFunction = function (obj) {\n                  this.myElem = obj.target.attributes.data.value;\n                  this.ID = obj.target.attributes.id.value;\n                  // OPEN GALLERY\n                  $scope.gallery = true;\n              };\n              // CLOSE GALLERY TEMPLATE URL\n              $scope.closeGallery = function () {\n                  $scope.gallery = false;\n              };\n  \n              // BROWSER BACK BUTTON FIX PART 1\n              $rootScope.$on("$locationChangeSuccess", function () {\n                  $scope.screenSize = window.innerWidth;\n                  $rootScope.actualLocation = $location.path();\n                  $scope.apis = false;\n              });\n              // BROWSER BACK BUTTON FIX PART 2\n              $rootScope.$watch(\n                  function () {\n                      $scope.currentRoute = $location.$$path;\n                      return $location.path();\n                  },\n                  function (newLocation, oldLocation) {\n                      if ($rootScope.actualLocation === newLocation) {\n                          $scope.gallery = false;\n                      }\n                  }\n              );\n  \n              $scope.start = function () {\n                  cfpLoadingBar.start();\n              };\n  \n              $scope.complete = function () {\n                  cfpLoadingBar.complete();\n              };\n          }\n      );',this.directives='\n    angular.module("vikingApp").directive("itineraries", function ($http) {\n      return {\n\n          // ITINERARIES SLIDER TEMPLATE\n          templateUrl: "pages/itineraries.html",\n          restrict: "E",\n          link: function (scope, element, attrs) {\n              // LOAD JSON\n              $http.get("app/itineraries.json").then(function (myData) {\n                  $.ajax({ cache: false }); // IE & EDGE FIX\n                  scope.trips = myData.data;\n              });\n              scope.trips = [];\n              scope.value = 0;\n              scope.nextTrip = function () {\n                  scope.value++;\n                  if (scope.value > scope.trips.length - 1) {\n                      scope.value = 0;\n                  }\n              };\n              scope.prevTrip = function () {\n                  scope.value--;\n                  if (scope.value < 0) {\n                      scope.value = scope.trips.length - 1;\n                  }\n              };\n          }\n      };\n  });\n\n  // ITINERARIES GRID TEMPLATE\n  angular.module("vikingApp").directive("gridView", function ($http) {\n      return {\n          templateUrl: "pages/itinerariesGrid.html",\n          restrict: "E",\n          link: function (scope, element, attrs) {\n\n              // FILTER TABLE\n              scope.trips = [];\n              scope.sortType = "days";\n              scope.sortReverse = false;\n              scope.searchTable = "";\n          }\n      };\n  });\n\n  // IMAGE GALLERY TEMPLATE\n  angular.module("vikingApp").directive("gallery", function () {\n      return {\n          templateUrl: "pages/imageGallery.html",\n          restrict: "E",\n          link: function (scope, element, attrs) {\n              scope.changeImg = function (event) {\n                  event.event || window.event;\n                  var targetEvent = event.target || window.event;\n                  if ((targetEvent.tagName = "IMG")) {\n                      mainImg.src = targetEvent.getAttribute("src");\n                  }\n              };\n          }\n      };\n  });\n\n  // IMAGE GALLERY TEMPLATE\n  angular.module("vikingApp").directive("discoverShip", function (divService) {\n      return {\n          templateUrl: "pages/discoverShip.html",\n          restrict: "E",\n          link: function (scope, element, attrs) { }\n      };\n  });\n\n  // VIDEO PLAYER\n  vikingApp.directive("myYoutube", function ($sce) {\n      return {\n          restrict: "EA",\n          scope: { code: "=" },\n          replace: true,\n          template:\n              \'<div><iframe src="{{url}}" frameborder="0" allowfullscreen></iframe></div>\',\n          link: function (scope) {\n              scope.$watch("code", function (newVal) {\n                  if (newVal) {\n                      scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + newVal);\n                  }\n              });\n          }\n      };\n  });'}static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-angularjs-project"]],decls:46,vars:2,consts:[[1,"project-intro"],[1,"snippet-description"],["href","https://codepen.io/eastcoastdeveloper/project/full/ZgbdLb","target","_blank"],["href","https://codepen.io/eastcoastdeveloper/project/editor/ZgbdLb","target","_blank"],[1,"angularjs-project"],[1,"img-wrapper","element-shadow"],["src","assets/components-grid/angularjs-project-home.jpg"],[1,"code-preview"],["src","assets/components-grid/angularjs-filtered-table.jpg"],["src","assets/components-grid/angularjs-deck-gallery.jpg"],["src","assets/components-grid/angularjs-slider-view.jpg"],["src","assets/components-grid/angularjs-map-view.jpg"],["href","https://angular.io/api/core/ViewChild","target","_blank"],["href","https://angular.io/api/core/Renderer2","target","_blank"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," I designed and developed this AngularJS project way back in 2017 for Viking Cruises. They wanted something interactive and innovative. Something they could add to their website as a standalone application. At the time, the only way consumers could explore the decks was by downloading a PDF. I sought out to do more. In turn, bringing a better user experience to the client. "),e.TgZ(3,"a",2),e._uU(4,"View a working demo"),e.qZA(),e._uU(5,", or explore the code on CodePen: "),e.TgZ(6,"a",3),e._uU(7,"AngularJS Project"),e.qZA()()(),e.TgZ(8,"div",4)(9,"div",5),e._UZ(10,"img",6),e.qZA(),e.TgZ(11,"div",1),e._uU(12," Being pressed for time, and without the leisure to create and revise a mock, I simply used one file for numerous controllers (below). Loading was taken care of quite well with a custom AngularJS loader. I created an image and video gallery template with a custom directive, then passed each the appropriate details. Though the data should've been housed in a JSON file, I found this to be a clean method. "),e.qZA(),e.TgZ(13,"div",7)(14,"pre"),e._uU(15,"            "),e.TgZ(16,"code"),e._uU(17),e.qZA(),e._uU(18,"\n        "),e.qZA()(),e.TgZ(19,"div",5),e._UZ(20,"img",8),e.qZA(),e.TgZ(21,"div",1),e._uU(22," These are the five directives I created. The last three are for image galleries and the YouTube player. There's 10 pages with image galleries. Each page has 3-5 image galleries. So there's 30-50 image galleries all powered by the same directive/ template. "),e.qZA(),e.TgZ(23,"div",7)(24,"pre"),e._uU(25,"            "),e.TgZ(26,"code"),e._uU(27),e.qZA(),e._uU(28,"\n        "),e.qZA()(),e.TgZ(29,"div",5),e._UZ(30,"img",9),e.qZA(),e.TgZ(31,"div",5),e._UZ(32,"img",10),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"img",11),e.qZA(),e.TgZ(35,"div",1),e._uU(36," Regardless of whether the project is an archaic or thriving framework, it's the architecture that matters. How it's built. How the features are divided up. Harnessing templates, properly sharing data, and loading assets for instance are of upmost importance. Yes, many of the frameworks of yesterday and today innately advocate these developmental principles, but not everyone takes advantage of them."),e._UZ(37,"br")(38,"br"),e._uU(39,"Just recently for instance, I discovered a coworker trying to query the DOM via getElementById. He had no idea what life cycle hooks are. He was unaware of "),e.TgZ(40,"a",12),e._uU(41,"@ViewChild"),e.qZA(),e._uU(42," and "),e.TgZ(43,"a",13),e._uU(44,"Renderer2."),e.qZA(),e._uU(45," I've seen the same function duplicated across numerous components instead of using a service. Senior devs that don't know how to use observables in TypeScript. But I digress. I hope you've enjoyed this brief explaination and check out my AngularJS project! "),e.qZA()()),2&a&&(e.xp6(17),e.Oqu(i.controller),e.xp6(10),e.Oqu(i.directives))},styles:[".angularjs-project[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]{margin-bottom:20px}.angularjs-project[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.angularjs-project[_ngcontent-%COMP%]   .code-preview[_ngcontent-%COMP%]{margin-bottom:20px}"]})}var v=t(7579),m=t(2722),y=t(4591),f=t(981),T=t(5885),A=t(5140),E=t(9138),S=t(8828),k=t(3366);const C=["projects"],I=["menuIcon"];function L(s,o){1&s&&(e.TgZ(0,"span",15),e._uU(1,"Development"),e.qZA())}function O(s,o){1&s&&(e.TgZ(0,"span",16),e._uU(1,"\u276f"),e.qZA())}function D(s,o){1&s&&e._UZ(0,"app-dev-menu")}function b(s,o){1&s&&e._UZ(0,"app-right-column")}function w(s,o){1&s&&e._UZ(0,"div",17)}class r{constructor(o,a,i,c){this._windowWidthService=o,this._projectListService=a,this._devMenu=i,this._nasaService=c,this.destroy$=new v.x,this.threeColumnLayout=!1}ngOnInit(){this._windowWidthService.currentWidth$.pipe((0,m.R)(this.destroy$)).subscribe(o=>{this.windowWidth=o}),this._projectListService.pageData$.pipe((0,m.R)(this.destroy$)).subscribe(o=>{this.pageTitle=o?.title,this.threeColumnLayout=o?.threeColumnLayout}),this._devMenu.devMenuState$.pipe((0,m.R)(this.destroy$)).subscribe(o=>{this.devMenuStatus=o})}toggleDevMenu(){this.devMenuStatus=!this.devMenuStatus,this._devMenu.changeValue(this.devMenuStatus)}pageClickHandler(o){this._devMenu.devMenu&&o.target!=this.projects.nativeElement&&this._devMenu.devMenu&&o.target!=this.menuIcon.nativeElement&&o.target.parentElement!=this.menuIcon.nativeElement&&this._devMenu.closeMenu(),(o.target.classList.contains("details")||o.target.classList.contains("right-column")||"FORM"===o.target.nodeName||"BUTTON"===o.target.nodeName||"P"===o.target.nodeName||"FORM"===o.target.parentElement.nodeName)&&this._nasaService.changeDatePickerVal(!1)}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#e=this.\u0275fac=function(a){return new(a||r)(e.Y36(y.R),e.Y36(f.h),e.Y36(T.p),e.Y36(A.d))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-apps-wrapper"]],viewQuery:function(a,i){if(1&a&&(e.Gf(C,5),e.Gf(I,5)),2&a){let c;e.iGM(c=e.CRH())&&(i.projects=c.first),e.iGM(c=e.CRH())&&(i.menuIcon=c.first)}},decls:25,vars:6,consts:[[1,"page-content"],[1,"details",3,"click"],[1,"page-title"],[1,"breadcrumbs"],["class","base-category",4,"ngIf"],["class","carrot",4,"ngIf"],[1,"active-crumb",3,"click"],["projects",""],[1,"menu-icon"],["menuIcon",""],[4,"ngIf"],[1,"two-column-layout",3,"click"],[1,"left-column"],["class","middle-column",4,"ngIf"],[1,"right-column",3,"click"],[1,"base-category"],[1,"carrot"],[1,"middle-column"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(p){return i.pageClickHandler(p)}),e.TgZ(2,"h1",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,L,2,0,"span",4),e.YNc(6,O,2,0,"span",5),e.TgZ(7,"div",6),e.NdJ("click",function(){return i.toggleDevMenu()}),e.TgZ(8,"span",null,7),e._uU(10,"Projects"),e.qZA(),e.TgZ(11,"span",8,9),e._UZ(13,"div")(14,"div")(15,"div"),e.qZA()()(),e.YNc(16,D,1,0,"app-dev-menu",10),e.qZA(),e.TgZ(17,"main",11),e.NdJ("click",function(p){return i.pageClickHandler(p)}),e.TgZ(18,"div",12),e._UZ(19,"app-post-details")(20,"router-outlet"),e.YNc(21,b,1,0,"app-right-column",10),e.qZA(),e.YNc(22,w,1,0,"div",13),e.TgZ(23,"div",14),e.NdJ("click",function(p){return i.pageClickHandler(p)}),e._UZ(24,"app-right-column"),e.qZA()()()),2&a&&(e.xp6(3),e.Oqu(i.pageTitle),e.xp6(2),e.Q6J("ngIf",i.windowWidth>768),e.xp6(1),e.Q6J("ngIf",i.windowWidth>768),e.xp6(10),e.Q6J("ngIf",i.devMenuStatus),e.xp6(5),e.Q6J("ngIf",i.windowWidth<769),e.xp6(1),e.Q6J("ngIf",i.threeColumnLayout))},dependencies:[h.O5,E.o,S.k,l.lC,k.Z]})}const N=[{path:"",component:r,children:[{path:"",redirectTo:"javascript-projects",pathMatch:"full"},{path:"javascript-projects",loadChildren:()=>Promise.all([t.e("common"),t.e("src_app_modules_cornerstone-apps_cornerstone-apps_module_ts")]).then(t.bind(t,8285)).then(s=>s.CornerstoneAppsModule)},{path:"apod-nasa-gov",loadChildren:()=>t.e("src_app_modules_nasa_nasa-pod_module_ts").then(t.bind(t,4411)).then(s=>s.NasaPODModule)},{path:"omdb-api",data:{title:"OMDB API"},loadChildren:()=>t.e("src_app_modules_omdb_movie-app_module_ts").then(t.bind(t,1531)).then(s=>s.MovieAppModule)},{path:"rest-countries",data:{title:"REST Countries & Leaflet"},loadChildren:()=>t.e("src_app_modules_rest-countries_rest-countries_module_ts").then(t.bind(t,5747)).then(s=>s.RestCountriesModule)},{path:"angularjs-project",component:n},{path:"website-examples",data:{title:"Website Examples"},loadChildren:()=>t.e("src_app_modules_website-examples_website-examples_module_ts").then(t.bind(t,996)).then(s=>s.WebsiteExamplesModule)},{path:"javascript-drag-and-drop",data:{title:"JavaScript Drag and Drop"},loadChildren:()=>t.e("src_app_modules_drag-drop_drag-drop_module_ts").then(t.bind(t,6014)).then(s=>s.DragDropModule)},{path:"**",redirectTo:"javascript-projects"}]}];class d{static#e=this.\u0275fac=function(a){return new(a||d)};static#t=this.\u0275mod=e.oAB({type:d});static#o=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(N),l.Bz]})}var M=t(4891);class u{static#e=this.\u0275fac=function(a){return new(a||u)};static#t=this.\u0275mod=e.oAB({type:u});static#o=this.\u0275inj=e.cJS({imports:[h.ez,$.m,l.Bz,d,M.A]})}}}]);