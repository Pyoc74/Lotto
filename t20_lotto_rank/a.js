//   로또 01 ~                                     //
//   1. 컴퓨터가 1~45 수를 6개 뽑아서 출력          //
/////////////////////////////////////////////////////

// // 내 번호들
// var p1 = 1;
// var p2 = 2;
// var p3 = 3;
// var p4 = 4;
// var p5 = 5;
// var p6 = 6;

// 내 번호
var p = [0,0,0,0,0,0];

p[0] = Math.floor(Math.random() * 45) + 1;
p[1] = Math.floor(Math.random() * 45) + 1;
p[2] = Math.floor(Math.random() * 45) + 1;
p[3] = Math.floor(Math.random() * 45) + 1;
p[4] = Math.floor(Math.random() * 45) + 1;
p[5] = Math.floor(Math.random() * 45) + 1;

dw(p[0]);
br();
dw(p[1]);
br();
dw(p[2]);
br();
dw(p[3]);
br();
dw(p[4]);
br();
dw(p[5]);
hr();

// // 컴 번호
// var r1,r2,r3,r4,r5,r6;

// 컴 번호
var r = [0,0,0,0,0,0];

// 앞선 번호들과 비교하여 중복된 번호가 나온 경우 다시 번호를 뽑게 하기
// (그렇게 해서 나온 번호도 또 검사를 계속 해야함)
r[0] = Math.floor(Math.random() * 45) + 1;
dw(r[0]);
br();

while (true) {
    r[1] = Math.floor(Math.random() * 45) + 1;
    if (r[0] != r[1]) {
        dw(r[1]);
        br();
        break;
    }
}

while (true) {
    r[2] = Math.floor(Math.random() * 45) + 1;
    if (r[2] != r[0] && r[2] != r[1]) {
        dw(r[2]);
        br();
        break;
    }
}

while (true) {
    r[3] = Math.floor(Math.random() * 45) + 1;
    if (r[3] != r[0] && r[3] != r[1] && r[3] != r[2]) {
        dw(r[3]);
        br();
        break;
    }
}

while (true) {
    r[4] = Math.floor(Math.random() * 45) + 1;
    if (r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]) {
        dw(r[4]);
        br();
        break;
    }
}

while (true) {
    r[5] = Math.floor(Math.random() * 45) + 1;
    if (r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[2]) {
        dw(r[5]);
        br();
        break;
    }
}

// 

// 일치한 갯수
var win = 0;

// 일치하는 갯수 작업을 반복문과 배열로 처리
for (var i = 0; i <= 5; i = i + 1) {
    for (var j = 0; j <= 5; j = j + 1) {
        if (p[i] == r[j]) {
            win = win + 1;
        }
    }
}
dw("win"+win);

// // p1
// if(p[0] == r[0]){
//     win = win + 1;
// }
// if(p[0] == r[1]){
//     win = win + 1;
// }
// if(p[0] == r[2]){
//     win = win + 1;
// }
// if(p[0] == r[3]){
//     win = win + 1;
// }
// if(p[0] == r[4]){
//     win = win + 1;
// }
// if(p[0] == r[5]){
//     win = win + 1;
// }
// //p2
// if(p[1] == r[0]){
//     win = win + 1;
// }
// if(p[1] == r[1]){
//     win = win + 1;
// }
// if(p[1] == r[2]){
//     win = win + 1;
// }
// if(p[1] == r[3]){
//     win = win + 1;
// }
// if(p[1] == r[4]){
//     win = win + 1;
// }
// if(p[1] == r[5]){
//     win = win + 1;
// }
// //p3
// if(p[2] == r[0]){
//     win = win + 1;
// }
// if(p[2] == r[1]){
//     win = win + 1;
// }
// if(p[2] == r[2]){
//     win = win + 1;
// }
// if(p[2] == r[3]){
//     win = win + 1;
// }
// if(p[2] == r[4]){
//     win = win + 1;
// }
// if(p[2] == r[5]){
//     win = win + 1;
// }
// //p4
// if(p[3] == r[0]){
//     win = win + 1;
// }
// if(p[3] == r[1]){
//     win = win + 1;
// }
// if(p[3] == r[2]){
//     win = win + 1;
// }
// if(p[3] == r[3]){
//     win = win + 1;
// }
// if(p[3] == r[4]){
//     win = win + 1;
// }
// if(p[3] == r[5]){
//     win = win + 1;
// }
// //p5
// if(p[4] == r[0]){
//     win = win + 1;
// }
// if(p[4] == r[1]){
//     win = win + 1;
// }
// if(p[4] == r[2]){
//     win = win + 1;
// }
// if(p[4] == r[3]){
//     win = win + 1;
// }
// if(p[4] == r[4]){
//     win = win + 1;
// }
// if(p[4] == r[5]){
//     win = win + 1;
// }
// //p6
// if(p[5] == r[0]){
//     win = win + 1;
// }
// if(p[5] == r[1]){
//     win = win + 1;
// }
// if(p[5] == r[2]){
//     win = win + 1;
// }
// if(p[5] == r[3]){
//     win = win + 1;
// }
// if(p[5] == r[4]){
//     win = win + 1;
// }
// if(p[5] == r[5]){
//     win = win + 1;
// }

// dw("win"+win);


// var p1 = 1;
// var p2 = 2;
// var p3 = 3;
// var p4 = 4;
// var p5 = 5;
// var p6 = 6;

// var r1 = Math.floor(Math.random()*45)+1;
// var r2 = Math.floor(Math.random()*45)+1;
// var r3 = Math.floor(Math.random()*45)+1;
// var r4 = Math.floor(Math.random()*45)+1;
// var r5 = Math.floor(Math.random()*45)+1;
// var r6 = Math.floor(Math.random()*45)+1;

// dw(r1);
// hr();
// dw(r2);
// hr();
// dw(r3);
// hr();
// dw(r4);
// hr();
// dw(r5);
// hr();
// dw(r6);
// hr();

// var p1 = 1;
// var p2 = 2;
// var p3 = 3;
// var p4 = 4;
// var p5 = 5;
// var p6 = 6;

// var r1 = Math.floor(Math.random()*45)+1;
// var r2 = Math.floor(Math.random()*45)+1;
// var r3 = Math.floor(Math.random()*45)+1;
// var r4 = Math.floor(Math.random()*45)+1;
// var r5 = Math.floor(Math.random()*45)+1;
// var r6 = Math.floor(Math.random()*45)+1;

// dw(r1);
// hr();
// dw(r2);
// hr();
// dw(r3);
// hr();
// dw(r4);
// hr();
// dw(r5);
// hr();
// dw(r6);
// hr();