System.register(["angular2/core", "./components/movies-list.component", "./components/movies-footer.component", "./components/contact.component", "./components/add-movie.component", "angular2/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, movies_list_component_1, movies_footer_component_1, contact_component_1, add_movie_component_1, router_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movies_list_component_1_1) {
                movies_list_component_1 = movies_list_component_1_1;
            },
            function (movies_footer_component_1_1) {
                movies_footer_component_1 = movies_footer_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (add_movie_component_1_1) {
                add_movie_component_1 = add_movie_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            /*
            * exportamos la clase para que el componente este disponible
            */
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: "app/views/movies.html",
                    directives: [movies_list_component_1.MoviesListComponent, movies_footer_component_1.MoviesFooterComponent, contact_component_1.ContactComponent, add_movie_component_1.AddMovieComponent, router_1.ROUTER_DIRECTIVES]
                })
                /*
                * route
                */
                ,
                router_1.RouteConfig([
                    { path: '/movies', name: "Movies", component: movies_list_component_1.MoviesListComponent, useAsDefault: true },
                    { path: '/add-movie', name: "Addmovie", component: add_movie_component_1.AddMovieComponent },
                    { path: '/add-movie/:title/:director/:year', name: "Addmovieparameter", component: add_movie_component_1.AddMovieComponent },
                    { path: '/contact', name: "Contact", component: contact_component_1.ContactComponent }
                ])
                /*
                * exportamos la clase para que el componente este disponible
                */
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map