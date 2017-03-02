System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            /*
            * exportamos la clase para que el componente este disponible
            */
            AppComponent = (function () {
                /*
                * decorador component indicamos el selector donde cargar la
                * plantilla y definimos el html de la plantilla. Utilizamos las
                * dobles llaves para mostrar el valor de las propiedades o
                * atributos de la clase AppComponent
                */
                function AppComponent() {
                    /*
                    * definimos las propiedades y su tipo
                    */
                    this.title = "Peliculas con Angular 2";
                    this.movie = "Batman v Superman";
                    this.director = "Zack Snider";
                    this.year = "2016";
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "<h1>{{title}}</h1>\n  <ul>\n  <li><b>movie: </b> {{movie}}</li>\n  <li><b>director: </b> {{director}}</li>\n  <li><b>year: </b> {{year}}</li>\n  </ul>"
                })
                /*
                * exportamos la clase para que el componente este disponible
                */
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map