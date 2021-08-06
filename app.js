const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"; // 그릴 선의 색상
ctx.lineWidth = 2.5; // 그릴 선의 너비

let painting = false;

const stopPainting = () => {
  painting = false;
};

const startPainting = () => {
  painting = true;
};

const onMouseMove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // 클릭하지 않고 움직였을때는 path를 시작
    // path = 선
    // path를 만들면 마우스의 x,y 좌표로 path를 옮긴다. (moveTo)
    // = 마우스를 움직이는 모든 순간에 path를 만든다.
    console.log("creating path in ", x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // 클릭하게 되면 호출되는 부분
    // lineTo 메서드는 path의 이전 위치에서 지금 위치까지 선을 만드는 역할
    console.log("creating line in ", x, y);
    ctx.lineTo(x, y);
    ctx.stroke(); // 선을 그림
  }
};

const onMouseDown = (event) => {
  painting = true;
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
