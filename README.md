# magic-cube
Image gallery from a deferent angle using ES6

[examples](https://baianat.github.io/magic-cube/)


## How to use
#### include necessary files
``` html
<head>
  <link rel="stylesheet" href="dist/css/cube.css">
</head>
<body>
    ...
    <script type="text/javascript" src="dist/js/cube.js"></script>
</body>
```

#### HTML markup
``` html
<div class="cube-wrapper">
  <div class="cube" id="myCube">
    <div class="cube-light"></div>
    <div class="cube-top"    style="background-image: url('assets/img/image-01.jpg')"></div>
    <div class="cube-bottom" style="background-image: url('assets/img/image-02.jpg')"></div>
    <div class="cube-left"   style="background-image: url('assets/img/image-03.jpg')"></div>
    <div class="cube-right"  style="background-image: url('assets/img/image-04.jpg')"></div>
    <div class="cube-front"  style="background-image: url('assets/img/image-05.jpg')"></div>
    <div class="cube-back"   style="background-image: url('assets/img/image-06.jpg')"></div>
  </div>
</div>
```

#### Create new slider
``` javascript
let myCube new Cube('#myCube');
```

#### custom open/close animation
you can create your custom classes for open/close state
> naming classes and keyframes contestant is very important
``` javascript
new Cube('#myCube', {
  openClass: 'is-magic',
  closeClass: 'is-unmagic',
  time: 3000
});
```

in css file provide the animation for each side and for the cube itself
``` css
@keyframes magicCube {
  0%   { transform: translate3d(0, 0, 0) rotateX(-20deg) rotateY(45deg); }
  80%  { transform: translate3d(0, -100px, 0) rotateX(0deg) rotateY((360 * 4)deg); }
  100% {transform: translate3d(0, 0, 0) rotateX(0deg) rotateY((360 * 4)deg); }
}

@keyframes magicTop {
    0% { transform: translate3d(0, -100px, 0) rotateX(90deg); }
    60%, 80% { transform: translate3d(0, -200px, 0) rotateX(90deg); }
    100% { transform: translate3d(-550px, 0, 0) rotateX(0); }
}

@keyframes magicBottom {
    0% { transform: translate3d(0, 100px, 0) rotateX(90deg); }
    60%, 80% { transform: translate3d(0, 200px, 0) rotateX(90deg); }
    100% { transform: translate3d(550px, 0, 0) rotateX(0); }
}

@keyframes magicLeft {
    0% { transform: translate3d(-100px, 0, 0) rotateY(-90deg); }
    60%, 80% { transform: translate3d(-200px, 0, 0) rotateY(-90deg); }
    100% { transform: translate3d(-330px, 0, 0) rotateY(0);}
}

@keyframes magicRight {
    0% { transform: translate3d(100px, 0, 0) rotateY(-90deg); }
    60%, 80% { transform: translate3d(200px, 0, 0) rotateY(-90deg); }
    100% { transform: translate3d(330px, 0, 0) rotateY(0); }
}

@keyframes magicFront {
    0% { transform: translate3d(0, 0, 100px) rotateY(0); }
    60%, 80% { transform: translate3d(0, 0, 200px) rotateY(0); }
    100% { transform: translate3d(110px, 0, 0) rotateY(0); }
}

@keyframes magicBack {
    0% { transform: translate3d(0, 0, -100px) rotateY(-180deg); }
    60%, 80% { transform: translate3d(0, 0, -200px) rotateY(-180deg); }
    100% { transform: translate3d(-110px, 0, 0) rotateY(0); }
}
```

#### Enable 3D mode
first you have to include ```cube3D``` plugin after ```femto```
``` html
<body>
    ...
    <script type="text/javascript" src="dist/js/femto.js"></script>
    <script type="text/javascript" src="dist/js/cube3D.js"></script>
</body>
```

then pass the options
``` javascript
new Femto('#femto2', {
    autoPlay: false,
    plugin: Cube3D,
    active3D: true,
    slicesCount: 6,
    mode3D: 1
});
```
## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 [Baianat](http://baianat.com)
