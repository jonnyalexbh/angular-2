System.register(["angular2/core", "../model/movie", "angular2/router", "../services/movies.services"], function (exports_1, context_1) {
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
    var core_1, movie_1, router_1, movies_services_1, AddMovieComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_1_1) {
                movie_1 = movie_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movies_services_1_1) {
                movies_services_1 = movies_services_1_1;
            }
        ],
        execute: function () {
            AddMovieComponent = (function () {
                function AddMovieComponent(_moviesServices, _router, _routeParams) {
                    this._moviesServices = _moviesServices;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.TitleMovie = "";
                }
                AddMovieComponent.prototype.onAddMovie = function (title, director, year) {
                    var movie = new movie_1.Movie(77, title, "N/A", director, year);
                    this._moviesServices.insertMovie(movie);
                    this._router.navigate(["Movies"]);
                };
                AddMovieComponent.prototype.ngOnInit = function () {
                    this.TitleMovie = this._routeParams.get("title");
                };
                return AddMovieComponent;
            }());
            AddMovieComponent = __decorate([
                core_1.Component({
                    templateUrl: "app/views/add-movie.html",
                    providers: [movies_services_1.MoviesService]
                }),
                __metadata("design:paramtypes", [movies_services_1.MoviesService,
                    router_1.Router,
                    router_1.RouteParams])
            ], AddMovieComponent);
            exports_1("AddMovieComponent", AddMovieComponent);
        }
    };
});
//# sourceMappingURL=add-movie.component.js.map