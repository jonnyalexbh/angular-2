System.register(["angular2/core", "../services/movies.services", "angular2/router"], function (exports_1, context_1) {
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
    var core_1, movies_services_1, router_1, MoviesListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movies_services_1_1) {
                movies_services_1 = movies_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            /*
            * exportamos la clase para que el componente este disponible
            */
            MoviesListComponent = (function () {
                function MoviesListComponent(_moviesServices) {
                    this._moviesServices = _moviesServices;
                    this.showData = false;
                    this.dataService = this._moviesServices.getHello();
                    this.movies = this._moviesServices.getMovies();
                    this.movie = this.movies[0];
                    this.movieSeleted = this.movies[0];
                    this.debug();
                }
                /*
                * debug
                */
                MoviesListComponent.prototype.debug = function () {
                    console.log(this.movie);
                };
                /*
                * onShowHide
                */
                MoviesListComponent.prototype.onShowHide = function (value) {
                    this.showData = value;
                };
                /*
                * onLog
                */
                MoviesListComponent.prototype.onLog = function () {
                    console.log(this.movie.title);
                };
                /*
                * onChangeMovie
                */
                MoviesListComponent.prototype.onChangeMovie = function (movie) {
                    this.movie = movie;
                    this.movieSeleted = movie;
                };
                return MoviesListComponent;
            }());
            MoviesListComponent = __decorate([
                core_1.Component({
                    selector: 'movies-list',
                    templateUrl: "app/views/movies-list.html",
                    styleUrls: ["assets/css/styles.css"],
                    providers: [movies_services_1.MoviesService],
                    directives: [router_1.ROUTER_DIRECTIVES]
                })
                /*
                * exportamos la clase para que el componente este disponible
                */
                ,
                __metadata("design:paramtypes", [movies_services_1.MoviesService])
            ], MoviesListComponent);
            exports_1("MoviesListComponent", MoviesListComponent);
        }
    };
});
//# sourceMappingURL=movies-list.component.js.map