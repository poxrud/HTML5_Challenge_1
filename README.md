Author: Phil Oxrud  
@poxrud

HTML5 Challenge 1
====================
Here is my attempt at the [HTML5 Challenge 1](http://outofcomfortzone.net/2013/04/18/html5-challenge-1-canvas-file-api/) as described by Frédéric Harper.  
Tested to work with Chrome and Firefox. 

This version does not use any external libraries (such as jQuery).

Usage
-------
Click on the canvas to draw straight lines.   
Image files can be loaded and saved.
 

Notes
--------
Unfortunately I had to use a nasty hack to get the file saving method to work.
A much better approach would be to use the new FileWriter API, however it is still not supported in most browser. 
