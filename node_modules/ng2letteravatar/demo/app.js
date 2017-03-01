System.register(['@angular/core', '@angular/platform-browser', "@angular/platform-browser-dynamic", "ng2LAjs/ng2letteravatar"], function(exports_1, context_1) {
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
                    this.alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                }
                HelloWorld = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "\n  <div> \n  <h4> Name: <ng2-letter-avatar data='{{name}}' ></ng2-letter-avatar> </h4> <br/>\n  <h4> All alphabets </h4>\n  <span *ngFor=\"let letter of alphabets\">\n   <ng2-letter-avatar data='{{letter}}' ></ng2-letter-avatar>\n   </span>\n  </div>\n  "
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
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
        }
    }
});
//# sourceMappingURL=app.js.map