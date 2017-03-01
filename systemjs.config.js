// See also: https://angular.io/docs/ts/latest/quickstart.html
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        'ng2letteravatar': 'node_modules/ng2letteravatar'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'rxjs': {defaultExtension: 'js'},
        'ng2letteravatar': {main: 'ng2letteravatar/ng2letteravatar.js'},
    };

    var angularPackages = [
        'core',
        'common',
        'compiler',
        'platform-browser',
        'platform-browser-dynamic',
        'http',
        'router',
        'forms',
        'upgrade'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    angularPackages.forEach(function (pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    });

    var config = {
        map: map,
        packages: packages,
		baseURL: '/ng2letteravatar/'
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);
