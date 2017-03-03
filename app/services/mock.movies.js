System.register(["../model/movie"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var movie_1, Movies;
    return {
        setters: [
            function (movie_1_1) {
                movie_1 = movie_1_1;
            }
        ],
        execute: function () {
            exports_1("Movies", Movies = [
                new movie_1.Movie(1, "Titulo Batman", "Batman", "Zack Snider", 2017),
                new movie_1.Movie(2, "Titulo Superman", "Superman", "Zoe", 2016),
                new movie_1.Movie(3, "Titulo Goku", "Goku", "KLW", 2017),
                new movie_1.Movie(4, "Titulo Pokemon", "Pokemon", "RTU", 1990)
            ]);
        }
    };
});
//# sourceMappingURL=mock.movies.js.map