let button1, button2, button3;
let sprite1, sprite2, sprite3;
let sprite1Frames = [];
let sprite2Frames = [];
let sprite3Frames = [];
let currentFrame1 = 0;
let currentFrame2 = 0;
let currentFrame3 = 0;
let frameRate1 = 10; // 動畫速度
let frameRate2 = 10; // 動畫速度
let frameRate3 = 10; // 動畫速度

function preload() {
  sprite1 = loadImage('31.png');
  sprite2 = loadImage('32.png');
  sprite3 = loadImage('3.png');
}

function setup() {
  createCanvas(400, 200);
  
  // 設定按鈕1
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(showSprite1);
  button1.mouseOut(hideSprites);
  
  // 設定按鈕2
  button2 = createButton('作品簡介');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(showSprite2);
  button2.mouseOut(hideSprites);
  
  // 設定按鈕3
  button3 = createButton('筆記說明');
  button3.position(310, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(showSprite3);
  button3.mouseOut(hideSprites);
  
  // 分割圖片精靈1
  for (let i = 0; i < 3; i++) {
    sprite1Frames.push(sprite1.get(i * 53, 0, 41, 63));
  }
  
  // 分割圖片精靈2
  for (let i = 0; i < 3; i++) {
    sprite2Frames.push(sprite2.get(i * 56, 0, 43, 63));
  }
  
  // 分割圖片精靈3
  for (let i = 0; i < 3; i++) {
    sprite3Frames.push(sprite3.get(i * 39, 0, 39, 45));
  }
}

function draw() {
  background(255);
  
  if (button1.mouseIsOver) {
    image(sprite1Frames[currentFrame1], 50, 120);
    if (frameCount % frameRate1 === 0) {
      currentFrame1 = (currentFrame1 + 1) % sprite1Frames.length;
    }
  }
  
  if (button2.mouseIsOver) {
    image(sprite2Frames[currentFrame2], 50, 120);
    if (frameCount % frameRate2 === 0) {
      currentFrame2 = (currentFrame2 + 1) % sprite2Frames.length;
    }
  }
  
  if (button3.mouseIsOver) {
    image(sprite3Frames[currentFrame3], 50, 120);
    if (frameCount % frameRate3 === 0) {
      currentFrame3 = (currentFrame3 + 1) % sprite3Frames.length;
    }
  }
}

function showSprite1() {
  button1.mouseIsOver = true;
}

function showSprite2() {
  button2.mouseIsOver = true;
}

function showSprite3() {
  button3.mouseIsOver = true;
}

function hideSprites() {
  button1.mouseIsOver = false;
  button2.mouseIsOver = false;
  button3.mouseIsOver = false;
}
