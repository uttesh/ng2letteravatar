/**
 * A basic hello-world Angular 2 app
 */
import {
    NgModule,
    Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Ng2LetterAvatar } from "ng2letteravatar/ng2letteravatar";

@Component({
    selector: 'hello-world',
    templateUrl: './ng2_letteravatar_sample.html'

})
class HelloWorld {
    name: string = 'testing';
    customColors: string[] = ["#D93A37", "#5A8770", "#5A8770", "#5A8770", "#5A8770", "#5A8770", "#5A8770", "#5A8770", "#5C9BBC", "#F5888D", "#9A89B5", "#407887", "#9A89B5", "#5A8770", "#D33F33", "#A2B01F", "#F0B126", "#0087BF", "#F18636", "#0087BF", "#B2B7BB", "#72ACAE", "#9C8AB4", "#5A8770", "#EEB424", "#407887"];
    alphabets: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
}

@NgModule({
    declarations: [HelloWorld, Ng2LetterAvatar],
    imports: [BrowserModule],
    bootstrap: [HelloWorld],
})
class HelloWorldAppModule { }

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
