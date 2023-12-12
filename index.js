// 1-masala 3 ta son jufti va 5 ga karralisini kopaytmasi
console.log("1-masala");

let A = 45;
let B = 33;
let C = 28;
let kopaytma = 1;

if (A % 2 == 0 || A % 5 == 0) {
  kopaytma *= A;
}
if (B % 2 == 0 || B % 5 == 0) {
  kopaytma *= B;
}
if (C % 2 == 0 || C % 5 == 0) {
  kopaytma *= C;
}
console.log("Kopaytmasi: " + kopaytma);

// 2-masala 4 ta son 3 ga yoki 7 ga karrali kopaytmasini toping
console.log("2-masala");

let son1 = 15;
let son2 = 31;
let son3 = 42;
let son4 = 74;
let kopaytmasi = 1;
if (son1 % 3 == 0 || son1 % 7 == 0) {
  kopaytmasi *= son1;
}
if (son2 % 3 == 0 || son2 % 7 == 0) {
  kopaytmasi *= son2;
}
if (son3 % 3 == 0 || son3 % 7 == 0) {
  kopaytmasi *= son3;
}
console.log(kopaytmasi);

// 3-masala 2 xonali son berilgan o'nlar hamda birlar xonasidagi raqamlar kopaytmasi
console.log("3-masala");
let num = 45;
let kupaytma;

unlik = Math.trunc(num / 10);
birlik = num % 10;

kupaytma = unlik * birlik;
console.log("Ko'paytma: " + kupaytma);

// 4-masala 2 xonali son berilgan o'nlar xonasidagi son jufta bo'lsa kvadrati, else kubi
console.log("4-masala");
let number = 35;
let numOnlik = Math.trunc(number / 10);
if (numOnlik % 2 == 0) {
  console.log(Math.pow(number, 2));
} else {
  console.log(Math.pow(number, 3));
}

// 5-masala 3 xonali son o'nlar va yuzlar xonasidagi sonni topuvchi algoritm
console.log("5-masala");
let m = 345;
let numYuzlik = Math.trunc(m / 100);
let numUnlik = m % 10;
console.log("Yuzlar xonasi " + numYuzlik);
console.log("Birlar xonasidagi " + numUnlik);

// 6-masala 3 xonali son toq raqamlari ko'paytmasini topuvchi algoritm tuzing
console.log("6-masala");
let Kopaytmasi = 1;
let n = 567;

let x = Math.trunc(n / 100);
if (x % 2 != 0) {
  Kopaytmasi *= x;
}

let y = Math.trunc(n / 10);
y = y % 10;
if (y % 2 != 0) {
  Kopaytmasi *= y;
}

let z = n % 10;
if (z % 2 != 0) {
  Kopaytmasi *= z;
}
console.log("Toq son ko'paytmasi: " + Kopaytmasi);

// 7-masala 4 xonali son juft raqamlari sonini topuvchi algoritm tuzing
console.log("7-masala");
let raqamlarSoni = 0;
k = 1259;

let num1 = Math.trunc(k / 1000);
if (num1 % 2 != 0) {
  raqamlarSoni = raqamlarSoni + 1;
}

let num2 = Math.trunc(k / 100);
num2 = num2 % 10;
if (num2 % 2 != 0) {
  raqamlarSoni = raqamlarSoni + 1;
}

let num3 = Math.trunc(k / 10);
num3 = num3 % 10;
if (num3 % 2 != 0) {
  raqamlarSoni = raqamlarSoni + 1;
}

let num4 = k % 10;
if (num4 % 2 != 0) {
  raqamlarSoni = raqamlarSoni + 1;
}

console.log("Juft raqamlar soni " + raqamlarSoni);

// 8-masala a va b tomon, yuzasi, perimetri,if s>p => s else p
console.log("8-masala");
let a = 5;
let b = 8;
let S = a * b;
let P = 2 * (a + b);
if (S > P) {
  console.log("Yuza: " + S);
} else {
  console.log("Perimetr: " + P);
}

// 9-masala 5 xonali son 0lar sonini topuvchi algoritm
console.log("9-masala");
let anyNumber = 7000;
let nollarSoni = 0;

let raqam1 = Math.trunc(anyNumber / 1000);
if (raqam1 % 10 == 0) {
  nollarSoni = nollarSoni + 1;
}

let raqam2 = Math.trunc(anyNumber / 100);
raqam2 = raqam2 % 10;
if (raqam2 % 10 == 0) {
  nollarSoni = nollarSoni + 1;
}

let raqam3 = Math.trunc(anyNumber / 10);
raqam3 = raqam3 % 10;
if (raqam3 % 10 == 0) {
  nollarSoni = nollarSoni + 1;
}

let raqam4 = anyNumber % 10;
if (raqam4 % 10 == 0) {
  nollarSoni = nollarSoni + 1;
}

console.log("Nollar soni " + nollarSoni);

// 10-masala ketishi kerak edi t - 6 da T- 3 soat kechikdi
console.log("10-masala");

let t = +prompt("Ketishi kerak bolgan vaqt: ");
let T = +prompt("Kechga qolgan soat: ");
let jonabKetdi;
if (0 < t && t < 21) {
  jonabKetdi = t + T;
  console.log("Jo'nab ketgan vaqt: " + jonabKetdi);
} else {
  console.log("t ning qiymati 21 dan katta bo'lmasligi kerak");
}
