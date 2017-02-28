# ng2letteravatar
Angular 2 letter avatar component, letter avatar for the given string. Like gmail or google inbox text avatar i.e. First letter of the given data will be the avatar

AngularJS directive for simple data avatar like gmail/inbox. 
<a href="http://uttesh.github.io/ng2letteravatar/">demo</a>

 preview snaps :
 
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/demo1.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/demo2.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/numbers.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/special_charaters.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/chinese.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/kannada.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/round_shape_digit_special.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/round_chinese_kannada.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/avatar_border1.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/avatar_border2.png)

## Quick start

```
bower install ng2letteravatar or npm install ng2letteravatar
```
How to integrate or use this component:

Example:

```
import {
    NgModule,
    Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Ng2LetterAvatar } from "ng2LAjs/ng2letteravatar";

// import { Ng2LetterAvatar } from "node_modules/ng2letteravatar/ng2letteravatar.js";  full path js path

@Component({
    selector: 'sample',
    template: `
  <div> 
   <ng2-letter-avatar avatar-data='{{name}}' ></ng2-letter-avatar>
  </div>
  `
})
class HelloWorld {
    name: string = 'testing';
}

@NgModule({
    declarations: [HelloWorld, Ng2LetterAvatar],
    imports: [BrowserModule],
    bootstrap: [HelloWorld],
})
class HelloWorldAppModule { }

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);

```

If you are using system.js/systemjs.config.js, don't forget to add 'ng2-letter-avatar' to your list of packages.

```

 var map = {
        'app': 'app',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        'ng2LAjs': 'node_modules/ng2letteravatar'
    };
	
 // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'rxjs': {defaultExtension: 'js'},
        'ng2LAjs': {main: 'ng2LAjs/ng2letteravatar.js'},
    };
```

## Option attirbutes

You can affect how letteravatar operates with the following settings:

<table>
    <thead>
    <th style="width:40%;">name</th>
    <th>default</th>
    <th>description</th>
</thead>

<tbody>
    <tr>
        <td>avatar-custom-bg-color</td>
        <td>No default value</td>
        <td>Using this attribute set the custom color for avatar background.</td>
    </tr>

    <tr>
        <td>avatar-dynamic</td>
        <td>false</td>
        <td>Set this attribute to true if dynamically avatar needs to be generated on data change.</td>
    </tr>

    <tr>
        <td>avatar-rotate-degree</td>
        <td>0</td>
        <td>Set this attribute required degrees of rotation of the avatar.</td>
    </tr>

    <tr>
        <td>avatar-alphabet-colors</td>
        <td>default color set</td>
        <td>Using this attribute set the custom colors for the alphabets only.</td>
    </tr>

    <tr>
        <td>avatar-char-count</td>
        <td>1</td>
        <td>Specifies the number of letters to displayed. to generate combined letter avatar of first name and last name which are separated by space then set the value to '2'.</td>
    </tr>

    <tr>
        <td>avatar-data *</td>
        <td>No default value</td>
        <td>Input data i.e. email, names...etc -OR- If image already exists for item, set image URL or image data.</td>
    </tr>

    <tr>
        <td>avatar-height</td>
        <td>50px</td>
        <td>set the height for the avatar.</td>
    </tr>

    <tr>
        <td>avatar-width</td>
        <td>50px</td>
        <td>set the width for the avatar.</td>
    </tr>

    <tr>
        <td>avatar-font-weight</td>
        <td>400</td>
        <td>set the font weight for the  avatar.</td>
    </tr>

    <tr>
        <td>avatar-font-size</td>
        <td>30px</td>
        <td>set the font size for the letter.</td>
    </tr>

    <tr>
        <td>avatar-shape</td>
        <td>square</td>
        <td>set the shape for the avatar. set 'round' for rounded avatars.</td>
    </tr>

    <tr>
        <td>avatar-font-family</td>
        <td>HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif</td>
        <td>set the font Family of the avatar.</td>
    </tr>

    <tr>
        <td>avatar-border</td>
        <td>false</td>
        <td>set the avatarborder to 'true' for the white border to avatar.</td>
    </tr>

    <tr>
        <td>avatar-custom-border</td>
        <td>no default value</td>
        <td>using this attribute set the custom style to avatar borders i.e <code> "border:5px solid black"</code>.</td>
    </tr>
</tbody>
</table>

## Contributions

For problems/suggestions please create an issue on Github.

## Contributors

* [@uttesh](https://twitter.com/uttesh)

# License

The MIT License

Copyright (c) 2017 Uttesh Kumar T.H. http://www.uttesh.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


