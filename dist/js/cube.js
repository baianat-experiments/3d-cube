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

var el = null;
var light = null;
var wrapper = null;
var currentX = 0;
var currentY = 0;
var rotateX = 0;
var rotateY = 0;

var opened = false;

function Cube(selector, ref) {
  el = select(selector);
  _init();
}

function _init() {
  _initData();
  _initEvents();
}

function _initData() {
  light = el.querySelector('.cube-light');
  wrapper = el.parentNode;
  // reste the cube transform
  // you can add any value for the rotation
  el.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)';
  if (light) {
    light.style.transform = 'rotateX(20deg) rotateY(-45deg)';
  }
}

function _initEvents() {
  el.addEventListener('mousedown', function (event) {
    // to stop browser's default behavoir
    event.preventDefault();
    currentX = event.clientX;
    currentY = event.clientY;
    rotateX = Number(el.style.transform.match(/rotateX\((-?[0-9]+(\.[0-9])?)*deg\)/)[1]);
    rotateY = Number(el.style.transform.match(/rotateY\((-?[0-9]+(\.[0-9])?)*deg\)/)[1]);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', release);
  });

  // when double click open cube
  el.addEventListener('dblclick', open);
}

function drag(event) {
  var draggedX = (event.clientX - currentX);
  var draggedY = (event.clientY - currentY);

  // check if the left mouse button clickec
  if (event.buttons !== 1) return;
  el.style.transform = "rotateX(" + (rotateX - (draggedY / 2)) + "deg) rotateY(" + (rotateY + (draggedX / 2)) + "deg)";

  if (light) {
    light.style.transform = "rotateX(" + ((rotateX - (draggedY / 2)) * -1) + "deg) rotateY(" + ((rotateY + (draggedX / 2)) * -1) + "deg)";
  }
}

function release(event) {
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', release);
}

function open(event) {
  if (!opened) {
    opened = true;
    el.style.transition = '1s';
    el.classList.remove('is-closed');
    el.classList.add('is-opened');
    wrapper.classList.add('is-opened');
    return;
  }
  opened = false;
  el.classList.remove('is-opened');
  el.classList.add('is-closed');
  wrapper.classList.remove('is-opened');

  // remove transition after animation finised
  setTimeout(function () {
    el.style.transition = '0s';
    el.classList.remove('is-closed');
  }, 1000);
}

return Cube;

})));
