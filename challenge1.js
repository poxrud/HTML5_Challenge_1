/*
 * HTML5 Challenge 1
 * http://outofcomfortzone.net/2013/04/18/html5-challenge-1-canvas-file-api/
 * author: Phil Oxrud
 * twitter: @poxrud
 */

window.onload = function() {
  var openBtn = document.getElementById("fileInput");
  var saveBtn = document.getElementById("saveFile");

  openBtn.onchange = openFile;
  saveBtn.onclick = saveFile;

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");  
  var lineX = 0, lineY = 0;
  

  // detect click on canvas
  canvas.onclick = function(e) {
    x = e.clientX - this.offsetLeft;
    y = e.clientY - this.offsetTop;
    
    if (lineX === 0 || lineY === 0)  {
      lineX = x;
      lineY = y;
      return;
    }

    //draw the line
    ctx.beginPath();
    ctx.moveTo(lineX, lineY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();

    //save the latest x,y cordinates
    lineX = x;
    lineY = y;

  };


  function openFile(e) {
    myFile = e.target.files[0]

    fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);

    fileReader.onload = function(e) {
      var img = new Image;
      img.src = this.result;
      img.onload = function () {
        ctx.drawImage(img, 0,0, 700, 500);
      }
      
    }

  }

  // This uses a dirty hack to trigger the "save as" dialog
  // There is a better way using the FileWriter API
  // however it hasn't been implement in many browsers yet.
  function saveFile() {

    var image = canvas.toDataURL("image/png");

    image = image.replace("image/png", "image/octet-stream");
    document.location.href = image;

  }

};