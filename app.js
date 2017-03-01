System.register(['@angular/core', '@angular/platform-browser', "@angular/platform-browser-dynamic", "ng2letteravatar/ng2letteravatar"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, platform_browser_dynamic_1, ng2letteravatar_1;
    var HelloWorld, HelloWorldAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (ng2letteravatar_1_1) {
                ng2letteravatar_1 = ng2letteravatar_1_1;
            }],
        execute: function() {
            HelloWorld = (function () {
                function HelloWorld() {
                    this.name = 'testing';
                    this.customColors = ["#D93A37", "#5A8770", "#5A8770", "#5A8770", "#5A8770", "#5A8770", "#5A8770", "#5A8770", "#5C9BBC", "#F5888D", "#9A89B5", "#407887", "#9A89B5", "#5A8770", "#D33F33", "#A2B01F", "#F0B126", "#0087BF", "#F18636", "#0087BF", "#B2B7BB", "#72ACAE", "#9C8AB4", "#5A8770", "#EEB424", "#407887"];
                    this.alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                }
                HelloWorld = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        templateUrl: './ng2_letteravatar_sample.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorld);
                return HelloWorld;
            }());
            HelloWorldAppModule = (function () {
                function HelloWorldAppModule() {
                }
                HelloWorldAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [HelloWorld, ng2letteravatar_1.Ng2LetterAvatar],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [HelloWorld],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorldAppModule);
                return HelloWorldAppModule;
            }());
            enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
        }
    }
});
//# sourceMappingURL=app.js.map