
function setup() {
  createCanvas(500,400)
}

function draw() {
 

  background(0)
  fill(250)
  
    var y = 100
    var x = 50
    for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
       fill ('black') // even
      } else {
        fill ('white')// odd
      }
    rect(x, y, 40, 40)
    x += 40
  }
  
        var x = 50
     for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
       fill ('white') // even
      } else {
        fill ('black')// odd
      }
    rect(x, y - 40, 40, 40)
    x += 40
  }
  
    var x = 50
     for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
       fill ('white') // even
      } else {
        fill ('black')// odd
      }
    rect(x, y + 40, 40, 40)
    x += 40
  }
      var x = 50
     for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
       fill ('black') // even
      } else {
        fill ('white')// odd
      }
    rect(x, y + 80, 40, 40)
    x += 40
  }
        var x = 50
     for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
       fill ('white') // even
      } else {
        fill ('black')// odd
      }
    rect(x, y + 120, 40, 40)
    x += 40
  }
        var x = 50
     for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
       fill ('black') // even
      } else {
        fill ('white')// odd
      }
    rect(x, y + 80, 40, 40)
    x += 40
  }
        var x = 50
     for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
       fill ('black') // even
      } else {
        fill ('white')// odd
      }
    rect(x, y + 160, 40, 40)
    x += 40
  }
        var x = 50
     for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
       fill ('white') // even
      } else {
        fill ('black')// odd
      }
    rect(x, y + 200, 40, 40)
    x += 40
  }
        var x = 50
     for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
       fill ('black') // even
      } else {
        fill ('white')// odd
      }
    rect(x, y + 240, 40, 40)
    x += 40
  }
  
}