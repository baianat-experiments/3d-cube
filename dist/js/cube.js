(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Cube = factory());
}(this, (function () { 'use strict';

/**
 * Utilities
 */
function select(element) {
  if (typeof element === 'string') {
    return document.querySelector(element);
  }
  return element;
}















/**
   * Converts an array-like object to an array.
   */

var Cube = function Cube(selector, ref) {
  if ( ref === void 0 ) ref = {};
  var openClass = ref.openClass; if ( openClass === void 0 ) openClass = 'is-open';
  var closeClass = ref.closeClass; if ( closeClass === void 0 ) closeClass = 'is-close';
  var time = ref.time; if ( time === void 0 ) time = 1000;

  this.el = select(selector);
  this.settings = {
    openClass: openClass,
    closeClass: closeClass,
      
  };
  this.init();
};

Cube.prototype.init = function init () {
    var this$1 = this;

  this.light   = this.el.querySelector('.cube-light');
  this.wrapper = this.el.parentNode;
  this.currentX= 0;
  this.currentY= 0;
  this.rotateX = 0;
  this.rotateY = 0;
  this.callbacks = {};
  this.state   = false;

  this.el.style.transform = 'translate3d(0, 0, 0) rotateX(-20deg) rotateY(45deg)';
  if (this.light) this.light.style.transform = 'rotateX(20deg) rotateY(-45deg)';
  this.el.addEventListener('mousedown', function () {
    event.preventDefault();
    this$1.currentX = event.clientX;
    this$1.currentY = event.clientY;
    this$1.rotateX = parseInt(this$1.el.style.transform.match(/rotateX\(-?[0-9]+(\.[0-9]+)*deg\)/)[0].slice(8, -4));
    this$1.rotateY = parseInt(this$1.el.style.transform.match(/rotateY\(-?[0-9]+(\.[0-9]+)*deg\)/)[0].slice(8, -4));
    if (! this$1.state) {
      this$1.callbacks.onDrag = this$1.drag.bind(this$1);
      this$1.callbacks.onRelease = this$1.relase.bind(this$1);
      document.addEventListener('mousemove', this$1.callbacks.onDrag, false);
      document.addEventListener('mouseup', this$1.callbacks.onRelease, false);
    }
  });
  this.callbacks.dblClick = this.opening.bind(this);
  this.el.addEventListener('dblclick', this.callbacks.dblClick, false);
};

Cube.prototype.drag = function drag () {
  var dragX = (event.clientX - this.currentX);
  var dragY = (event.clientY - this.currentY);
  if (event.buttons === 1) {
    this.el.style.transform = "rotateX(" + (this.rotateX - (dragY / 2)) + "deg) rotateY(" + (this.rotateY + (dragX / 2)) + "deg)";
  }
  if (event.buttons === 1 && this.light) {
    this.light.style.transform = "rotateX(" + ((this.rotateX - (dragY / 2)) * -1) + "deg) rotateY(" + ((this.rotateY + (dragX / 2)) * -1) + "deg)";
  }
};

Cube.prototype.relase = function relase () {
  event.preventDefault();
  document.removeEventListener('mousemove', this.callbacks.onDrag);
  document.removeEventListener('mouseup', this.callbacks.onRelease);
};

Cube.prototype.opening = function opening () {
    var this$1 = this;

  if (! this.state) {
    this.state = true;
    this.el.style.transition = '1s';
    this.el.classList.remove(this.settings.closeClass);
    this.el.classList.add(this.settings.openClass);
    this.wrapper.classList.add('is-open');
    return;
  }
  this.state = false;
  this.el.classList.remove(this.settings.openClass);
  setTimeout(function () {
    this$1.el.classList.add(this$1.settings.closeClass);
    this$1.wrapper.classList.remove('is-open');
  }, 1);
  setTimeout(function () {
    this$1.el.style.transition = '0s';
    this$1.el.classList.remove(this$1.settings.closeClass);
  }, this.settings.time);
};

return Cube;

})));
