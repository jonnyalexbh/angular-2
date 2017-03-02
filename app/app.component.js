System.register(["angular2/core", "./model/movie"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, movie_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_1_1) {
                movie_1 = movie_1_1;
            }
        ],
        execute: function () {
            /*
            * exportamos la clase para que el componente este disponible
            */
            AppComponent = (function () {
                function AppComponent() {
                    this.showData = false;
                    this.movie = new movie_1.Movie(1, "Titulo", "Batman v Superman", "Zack Snider", 2016);
                    this.debug();
                }
                /*
                * debug
                */
                AppComponent.prototype.debug = function () {
                    console.log(this.movie);
                };
                /*
                * onShowHide
                */
                AppComponent.prototype.onShowHide = function (value) {
                    this.showData = value;
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: "app/views/movies.html",
                    styleUrls: ["assets/css/styles.css"]
                })
                /*
                * exportamos la clase para que el componente este disponible
                */
                ,
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map