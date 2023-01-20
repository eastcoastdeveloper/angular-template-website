import { Component, OnInit } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-angularjs-project',
  templateUrl: './angularjs-project.component.html'
})
export class AngularjsProjectComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: 'AngularJS Project',
    publishedOn: 'Oct 16, 2017',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angularjs-project',
    repoLink: 'https://github.com/eastcoastdeveloper/angularjs-project',
    category: '',
    views: 2015,
    forks: 0,
    cornerStone: true,
    threeColumnLayout: false
  };

  controller: string;
  directives: string;

  angularJSimageOne: string = 'assets/projects-grid/angularjs-project-home.jpg';
  angularJSimageTwo: string =
    'assets/projects-grid/angularjs-filtered-table.jpg';
  angularJSimageThree: string =
    'assets/projects-grid/angularjs-deck-gallery.jpg';
  angularJSimageFour: string = 'assets/projects-grid/angularjs-slider-view.jpg';
  angularJSimageFive: string = 'assets/projects-grid/angularjs-map-view.jpg';

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    this.renderCode();
  }

  private renderCode() {
    this.controller = `
angular.module("vikingApp").controller("homeController", function ($scope) {
    $scope.code = "";
    // YOUTUBE VIDEO URL
    $scope.optObj = [
        { choice: "Riviera", link: "#/riviera" },
        { choice: "Main", link: "#/main" },
        { choice: "Lobby", link: "#/lobby" },
        { choice: "Mezzanine", link: "#/mezzanine" },
        { choice: "Promenade", link: "#/promenade" },
        { choice: "Upper", link: "#/upper" },
        { choice: "Empress", link: "#/empress" },
        { choice: "Verandah", link: "#/verandah" },
        { choice: "Vista", link: "#/vista" },
        { choice: "Sun", link: "#/sun" }
    ];

    $scope.ship = angular.element(document.querySelector(".discoverShip"));
    $scope.backgroundImage = "/discoverShip.jpg";
    $scope.myBg = $scope.backgroundImage;
    $scope.myVideo = $scope.showVideo = false;
    $scope.closeText = angular.element(document.querySelector(".closeVid"));
    $scope.closeText[0].innerHTML = "Show Videos";
    $scope.hideVideo = function () {
        if ($scope.myVideo == false) $scope.closeText[0].innerHTML = "Hide Videos";
        else if ($scope.myVideo == true) $scope.closeText[0].innerHTML = "Show Videos";
        $scope.myVideo = !$scope.myVideo;
    };

    // SWAP BG IMAGE DEPENDENT ON OPTION DROPDOWN MENU
    $scope.selected = angular.element(document.querySelector("#selected"));
    $scope.selectedItemChanged = function () {
        $scope.showVideo = true;
        switch ($scope.chosen.choice) {
            case "Riviera":
                $scope.myBg = "../Deck9.jpg";
                $scope.code = "pJaCrB6mDyI";
                break;
            case "Main":
                $scope.myBg = "../Deck8.jpg";
                $scope.code = "n7vqlKSAwIs";
                break;
            case "Lobby":
                $scope.myBg = "../Deck7.jpg";
                $scope.code = "dGz5V3dwFbQ";
                break;
            case "Mezzanine":
                $scope.myBg = "../Deck6.jpg";
                $scope.code = "SYqv2UOP_fM";
                break;
            case "Promenade":
                $scope.myBg = "../Deck5.jpg";
                $scope.code = "wAHzTLiaSDQ";
                break;
            case "Upper":
                $scope.myBg = "../Deck4.jpg";
                $scope.code = "8QZrk1-Ty-E";
                break;
            case "Empress":
                $scope.myBg = "../Deck3.jpg";
                $scope.code = "4ulB5HEYNT4";
                break;
            case "Verandah":
                $scope.myBg = "../Deck2.jpg";
                $scope.code = "wZylMc_yZVE";
                break;
            case "Vista":
                $scope.myBg = "../Deck1.jpg";
                $scope.code = "o5nTQXv3Zfw";
                break;
            case "Sun":
                $scope.myBg = "../DeckA.jpg";
                $scope.code = "Ry9U_boekKg";
                break;
        }
    };
    });

    angular.module("vikingApp").controller("riviera", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Riviera";
        // SERVICE FUNCTION DISPLAYS FEATURES LIST
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deckA, $scope.deckNum);
        };
        // LOCAL VAR = SERVICE OBJECT HOLDING IMAGE GALLERY OBJECT
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = ["No content for the Medical Center"];
    });

    angular.module("vikingApp").controller("main", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Main";
        $scope.mobileNav = false;
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck1, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description",
        "Gallery 3 description"];
    });

    angular.module("vikingApp").controller("lobby", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Lobby";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck2, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description",
        "Gallery 3 description"];
    });

    angular.module("vikingApp").controller("mezzanine", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Mezzanine";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck3, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description",
        "Gallery 3 description", "Gallery 4 description"];
    });

    angular.module("vikingApp").controller("promenade", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Promenade";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck4, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description",
        "Gallery 3 description", "Gallery 4 description", "Gallery 5 description"];
    });

    angular.module("vikingApp").controller("upper", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Upper";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck5, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description",
        "Gallery 3 description", "Gallery 4 description", "Gallery 5 description"];
    });

    angular.module("vikingApp").controller("empress", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Empress";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck6, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description", 
        "Gallery 3 description", "Gallery 4 description"];
    });

    angular.module("vikingApp").controller("verandah", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Verandah";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck7, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = ["Gallery 1 description", "Gallery 2 description",
        "Gallery 3 description", "Gallery 4 description", "Gallery 5 description"];
    });

    angular.module("vikingApp").controller("vista", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Vista";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck8, $scope.deckNum);
        };
        $scope.linkData = 0;
    });

    angular.module("vikingApp").controller("sun", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Sun";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck9, $scope.deckNum);
        };
        $scope.linkData = 0;
    });

    angular.module("vikingApp").controller(
        "mainController",
        function ($scope, $rootScope, $window, divService, cfpLoadingBar, $location, $http
        ) {
            $rootScope.pageClass = "slideRight";
            $scope.currentRoute = null;
            $scope.screenSize = null;
            $scope.hideOthers = function (clicked) {
                $scope.btnOne = $scope.btnTwo = $scope.oneActive = $scope.twoActive = $scope.apis = false;
                $scope.gallery = false;
                $rootScope.apiText = "Trip Forecast";
            };

            // ITINERARIES & STATEROOM BTNS
            $scope.showBtnOne = function () {
                $scope.btnOne = $scope.btnOne ? false : true;
                $scope.oneActive = !$scope.oneActive;
                $scope.oneActive ? ($rootScope.apiText = "Trip Forecast") : "Close";
                $scope.twoActive = $scope.btnTwo = $scope.details = $scope.apis = false;
                $scope.gallery = false;
                $scope.overlayActive = false;
            };
            $scope.openAccordionSection = function (e) {
                let elems = [];
                elems = Array.from(document.querySelectorAll(".panel-wrapper"));
                for (var i = 0; i < elems.length; i++) {
                    elems[i].classList.add("panel-default");
                }
                let elem = e.target.parentElement.querySelector(".panel-wrapper");
                elem.classList.remove("panel-default");
            };
            $scope.showBtnTwo = function () {
                $scope.btnTwo = $scope.btnTwo ? false : true;
                $scope.twoActive = !$scope.twoActive;
                $scope.twoActive ? ($rootScope.apiText = "Trip Forecast") : "Close";
                $scope.oneActive = $scope.btnOne = $scope.details = $scope.apis = false;
                $scope.gallery = false;
                $scope.overlayActive = false;
            };
            $scope.closeAll = function () {
                $scope.mobileNav = false;
                $scope.btnOne = false;
                $scope.btnTwo = false;
                $scope.oneActive = false;
                $scope.twoActive = false;
                $scope.details = false;
                $rootScope.apiText = "Trip Forecast";
            };
            $scope.toggleNav = function () {
                $scope.mobileNav = !$scope.mobileNav;
                $scope.hideOthers();
            };
            $scope.hideOthers();

            // CHANGE DETAILS BTN COPY
            $scope.detailsText = function () {
                if ($scope.details == true) $scope.divText = "Close";
                else { $scope.divText = "Deck Details"; }
            };

            // DETAILS BTN/ SIDEBAR MENU TOGGLE
            $scope.details = false;
            $scope.myBtn = angular.element(document.querySelector("#h5Btn"));
            $scope.divText = "Deck Details";
            $scope.detailsToggle = function () {
                $scope.details = !$scope.details;
                $scope.btnOne = $scope.btnTwo = $scope.oneActive = $scope.twoActive = false;
                $scope.detailsText();
            };

            $scope.grid = $scope.apis = false;
            $scope.slider = true;
            $rootScope.apiText = "Trip Forecast";
            $scope.getElem = function (obj) {
                $scope.closeGallery();
                $scope.details = false;

                // GET ELEMENT BY DATA VALUE. EVALUATE WHICH BUTTONS TO DISPLAY
                var elemData = obj.target.attributes.data.value;
                switch (elemData) {
                    case "slider":
                        $scope.grid = false;
                        $scope.slider = true;
                        break;
                    case "grid":
                        $scope.slider = false;
                        $scope.grid = true;
                        break;
                    case "apis":
                        $scope.apis = !$scope.apis;
                        $scope.apis ? ($rootScope.apiText = "Close") : ($rootScope.apiText = "Trip Forecast");
                        $scope.btnOne = $scope.btnTwo = $scope.oneActive = $scope.twoActive = false;
                }
            };

            // WEATHER & MAP API
            $scope.textSearching = $scope.results = false;
            $scope.changeInput = "Please enter your city destination.";
            $scope.userSearching = function () {
                $scope.changeInput = "Google maps API searching for";
                $scope.textSearching = true;
            };

            $scope.getForecast = function () {
                
            // API CALL W/ CITY VAR
                $scope.url = "https://api.openweathermap.org/data/2.5/weather?q=" + $scope.cityName;
                $http.get($scope.url).then(function (response) {
                    var myWeather;
                    $scope.myWeather = myWeather;
                    // DATA IN RETRIEVED OBJECT
                    myWeather = response.data;
                });
                
                $.getJSON($scope.url, weatherCallback);
                function weatherCallback(myWeather) {
                    var mapOptions = {
                        
                        // WEATHER LONGITUDE & LATITUDE COORDINATES
                        center: new google.maps.LatLng(myWeather.coord.lat, myWeather.coord.lon),
                        zoom: 10,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(
                        document.getElementById("maps"),
                        mapOptions
                    );
                    // WEATHER & DATE VARS
                    var cityName = myWeather.name,
                        country = myWeather.sys.country,
                        
                        // CONVERT KELVIN TO FAHRENHEIT
                        Fahrenheit = Math.ceil((myWeather.main.temp - 273.15) * 1.8) + 32,
                        
                        // CONVERT KELVIN TO CELCIUS
                        Celcius = Math.ceil(myWeather.main.temp - 273.15).toFixed(0),
                        myDate = new Date(),
                        time = myDate.toLocaleTimeString(),
                        month = myDate.getMonth(),
                        months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],
                        today = myDate.getDate(),
                        year = myDate.getFullYear();

                    // DISPLAY TEXT HERE
                    $scope.results = angular.element(document.querySelector("#temp"));
                    $scope.results.html(
                        "The temperature in " + cityName + " (" + country + ")
                        is:<br>" + Fahrenheit + "<span class='fahrenheit'> (Fahrenheit)</span>" + "<br>" +
                            Celcius + "<span class='fahrenheit'> (Celcius)</span>"
                    );
                    $("#temp").append("<br>" + "Humidity: " + myWeather.main.humidity + "<span class='fahrenheit'>%</span>");
                    $("#temp").append("<br><br>" + "Requested at " + time + ", " + months[month] + " " + today + ", " + year);
                }
            };

            // CLEAR RESULTS
            $scope.clear = function (myWeather) {
                $scope.cityName = "";
            };
            // BOOTSTRAP OPEN ACCORDION SECTIONS ON CLICK
            $scope.captureClick = function (obj) {
                var elemData = obj.target.attributes.data.value;
                $scope.detailsToggle();
                // CLOSE BOOTSTRAP ACCORDION SECTIONS, OPEN SECTION ASSOCIATED W/ DATA VALUE
                $(".panel-collapse.in").collapse("hide");
                $("#collapse" + elemData).collapse("toggle");
                $scope.gallery = false;
            };
            // SET GALLERY TO CLOSED
            $scope.gallery = false;
            // GET ID & DATA VALUE OF RED DOT CLICKED ON DECK
            $scope.myFunction = function (obj) {
                this.myElem = obj.target.attributes.data.value;
                this.ID = obj.target.attributes.id.value;
                // OPEN GALLERY
                $scope.gallery = true;
            };
            // CLOSE GALLERY TEMPLATE URL
            $scope.closeGallery = function () {
                $scope.gallery = false;
            };

            // BROWSER BACK BUTTON FIX PART 1
            $rootScope.$on("$locationChangeSuccess", function () {
                $scope.screenSize = window.innerWidth;
                $rootScope.actualLocation = $location.path();
                $scope.apis = false;
            });
            // BROWSER BACK BUTTON FIX PART 2
            $rootScope.$watch(
                function () {
                    $scope.currentRoute = $location.$$path;
                    return $location.path();
                },
                function (newLocation, oldLocation) {
                    if ($rootScope.actualLocation === newLocation) {
                        $scope.gallery = false;
                    }
                }
            );

            $scope.start = function () {
                cfpLoadingBar.start();
            };

            $scope.complete = function () {
                cfpLoadingBar.complete();
            };
        }
    );`;
    this.directives = `
angular.module("vikingApp").directive("itineraries", function ($http) {
    return {
        // ITINERARIES SLIDER TEMPLATE
        templateUrl: "pages/itineraries.html",
        restrict: "E",
        link: function (scope, element, attrs) {
            // LOAD JSON
            $http.get("app/itineraries.json").then(function (myData) {
                $.ajax({ cache: false }); // IE & EDGE FIX
                scope.trips = myData.data;
            });
            scope.trips = [];
            scope.value = 0;
            scope.nextTrip = function () {
                scope.value++;
                if (scope.value > scope.trips.length - 1) {
                    scope.value = 0;
                }
            };
            scope.prevTrip = function () {
                scope.value--;
                if (scope.value < 0) {
                    scope.value = scope.trips.length - 1;
                }
            };
        }
    };
});

// ITINERARIES GRID TEMPLATE
angular.module("vikingApp").directive("gridView", function ($http) {
    return {
        templateUrl: "pages/itinerariesGrid.html",
        restrict: "E",
        link: function (scope, element, attrs) {
            // FILTER TABLE
            scope.trips = [];
            scope.sortType = "days";
            scope.sortReverse = false;
            scope.searchTable = "";
        }
    };
});

// IMAGE GALLERY TEMPLATE
angular.module("vikingApp").directive("gallery", function () {
    return {
        templateUrl: "pages/imageGallery.html",
        restrict: "E",
        link: function (scope, element, attrs) {
            scope.changeImg = function (event) {
                event.event || window.event;
                var targetEvent = event.target || window.event;
                if ((targetEvent.tagName = "IMG")) {
                    mainImg.src = targetEvent.getAttribute("src");
                }
            };
        }
    };
});

// IMAGE GALLERY TEMPLATE
angular.module("vikingApp").directive("discoverShip", function (divService) {
    return {
        templateUrl: "pages/discoverShip.html",
        restrict: "E",
        link: function (scope, element, attrs) { }
    };
});

// VIDEO PLAYER
vikingApp.directive("myYoutube", function ($sce) {
    return {
        restrict: "EA",
        scope: { code: "=" },
        replace: true,
        template:
            '<div><iframe src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
        link: function (scope) {
            scope.$watch("code", function (newVal) {
                if (newVal) {
                    scope.url = $sce.trustAsResourceUrl(
                        "https://www.youtube.com/embed/" + newVal
                    );
                }
            });
        }
    };
});`;
  }
}
