System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Movie;
    return {
        setters: [],
        execute: function () {
            Movie = (function () {
                function Movie(id, title, movie, director, year) {
                    this.id = id;
                    this.title = title;
                    this.movie = movie;
                    this.director = director;
                    this.year = year;
                }
                return Movie;
            }());
            exports_1("Movie", Movie);
        }
    };
});
//# sourceMappingURL=movie.js.map