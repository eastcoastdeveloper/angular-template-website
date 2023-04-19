import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-angularjs-project',
  templateUrl: './angularjs-project.component.html'
})
export class AngularjsProjectComponent {
  urlFull = 'https://codepen.io/eastcoastdeveloper/project/full/ZgbdLb';
  angularJSimageOne = 'assets/projects-grid/angularjs-project-home.jpg';
  angularJSimageThree = 'assets/projects-grid/angularjs-deck-gallery.jpg';
  urlEditor = 'https://codepen.io/eastcoastdeveloper/project/editor/ZgbdLb';
  urlViewChild = 'https://angular.io/api/core/ViewChild';
  urlRenderer = 'https://angular.io/api/core/Renderer2';

  pageDataObject: PageDataObject = {
    title: 'AngularJS Project',
    publishedOn: 'Oct 16, 2017',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angularjs-project',
    repoLink: 'https://github.com/eastcoastdeveloper/angularjs-project',
    category: '',
    views: 2027,
    forks: 0,
    cornerStone: false,
    threeColumnLayout: true,
    meta: {
      description:
        'AngularJS project showcasing an intricately designed single page app. Clean code, numerous UI features, video & image galleries.',
      keywords:
        'web development project, angularjs directive, angularjs single page application',
      title: 'AngularJS Project',
      dateCreated: '2022-10-15',
      dateModified: '2023-10-25'
    }
  };

  directives = `angular.module("vikingApp").directive("itineraries", function ($http) {
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

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
