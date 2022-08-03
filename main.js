Alert("Tanda (,) Harus di ganti tanda (.) 
Dan sory kalo belum 100℅ akurat");

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById ('input6');
const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');
const input9 = document.getElementById('input9');
const input10 = document.getElementById('input10');
const input11 = document.getElementById('input11');
const input12 = document.getElementById('input12');
const input13 = document.getElementById('input13');
const input14 = document.getElementById('input14');
const input15 = document.getElementById('input15');
const input16 = document.getElementById('input16');
const input17 = document.getElementById('input17');
const input18 = document.getElementById('input18');
const input19 = document.getElementById('input19');


let angka1 = 0;
let angka2 = 0;
let angka3 = 0;
let angka4 = 0;
let angka5 = 0;
let angka6 = 0;
let angka7 = 0;
let angka8 = 0;
let angka9 = 0;
let angka10 = 0;
let angka11 = 0;
let angka12 = 0;
let angka13 = 0;
let angka14 = 0;
let angka15 = 0;
let angka16 = 0;
let angka17 = 0;
let angka18 = 0;
let angka19 = 0;


let hasil = 0;









const plus = document.getElementById('plus');
const output = document.getElementById('output');
const modal = document.getElementById('modal');







plus.addEventListener('click',function(){

  angka1 = parseFloat(input1.value);
  angka2 = parseFloat(input2.value);
  angka3 = parseFloat(input3.value);
  angka4 = parseFloat(input4.value);
  angka5 = parseFloat(input5.value);
  angka6 = parseFloat(input6.value);
  angka7 = parseFloat(input7.value);
  angka8 = parseFloat(input8.value);
  angka9 = parseFloat(input9.value);
  angka10 = parseFloat(input10.value);
  angka11 = parseFloat(input11.value);
  angka12 = parseFloat(input12.value);
  angka13 = parseFloat(input13.value);
  angka14 = parseFloat(input14.value);
  angka15 = parseFloat(input15.value);
  angka16 = parseFloat(input16.value);
  angka17 = parseFloat(input17.value);
  angka18 = parseFloat(input18.value);
  angka19 = parseFloat(input19.value);


  
  angka3 = angka1*10/angka3
  angka4 = angka1/angka4
  angka5 = angka1/angka5
  tes1 = angka1*5
  angka6 = tes1/angka6
  angka7 = tes1/angka7
  angka8 = tes1/angka8
  angka9 = tes1/angka9
  angka10 = tes1/angka10
  angka11 = tes1/angka11
  angka12 = tes1/angka12
  angka13 = tes1/angka13
  angka14 = tes1/angka14
  angka15 = tes1/angka15
  angka16 = tes1/angka16
  angka17 = tes1/angka17
  angka18 = tes1/angka18
  angka19 = angka1/angka19
  
 hasil1 = angka1*angka2



 
 hasil3 = angka3 + angka4;
 hasil4 = angka5 + angka6;
 hasil5 = angka7 + angka8;
 hasil6 = angka9 + angka10;
 hasil7 = angka11 + angka12;
 hasil8 = angka13 + angka14;
 hasil9 = angka15 + angka16;
 hasil10 = angka17 + angka18;
hasil11 = angka19;
 
 output1 = hasil3+hasil4+hasil5+hasil6+hasil7+hasil8+hasil9+hasil10+hasil11;
 hasil2 = output1 - hasil1 

 
 

  output.innerHTML = output1.toFixed(1);
   modal.innerHTML = hasil1.toFixed(1);
   profit.innerHTML = hasil2.toFixed(1);

 

 
});

