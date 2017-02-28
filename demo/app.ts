/**
 * A basic hello-world Angular 2 app
 */
import {
    NgModule,
    Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Ng2LetterAvatar } from "ng2LAjs/ng2letteravatar";

@Component({
    selector: 'hello-world',
    template: `
  <div> 
  <h4> Name: <ng2-letter-avatar avatar-data='{{name}}' ></ng2-letter-avatar> </h4> <br/>
  <h4> All alphabets </h4>
  <span *ngFor="let letter of alphabets">
   <ng2-letter-avatar avatar-data='{{letter}}' ></ng2-letter-avatar>
   </span>
  </div>
  `
})
class HelloWorld {
    name: string = 'testing';
    alphabets: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
}

@NgModule({
    declarations: [HelloWorld, Ng2LetterAvatar],
    imports: [BrowserModule],
    bootstrap: [HelloWorld],
})
class HelloWorldAppModule { }

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
