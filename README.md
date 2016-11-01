# [Angular Labelauty](https://tablelist.github.io/angular-labelauty/)

### Getting Started
1) Install via Bower
``` bash
bower install angular-labelauty --save
```

2) Add JS and CSS
``` bash
<script src="bower_components/angular-labelauty/release/js/angular-labelauty.min.js"></script>

<link rel="stylesheet" href="bower_components/angular-labelauty/release/css/angular-labelauty.min.css">
```

3) Add Angular Dependency
``` js
angular.module('demoApp', [
  'angular-labelauty'
]);
```

### Usage

``` html
<labelauty ng-model="disabledDemoForm.on" label="{{ disabledDemoForm.on ? 'Turn Off' : 'Turn On' }}" ng-disabled="{{ disabledDemoForm }}"></labelauty>
```
