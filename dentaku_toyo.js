'use strict'
{
const num_bth = document.querySelectorAll('.num_bth');
const act_bth = document.querySelectorAll('.act_bth');
const symbol_bth = document.querySelectorAll('.symbol_bth');
let output_sub = document.getElementById('output_sub');//計算結果の表示場所
const output_total = document.getElementById('output_total');//計算過程の表示場所
let total = 0;//計算式を表す変数

//数字や記号のボタンを押した時
num_bth.forEach(index => {
    index.addEventListener('click',() => {
        console.log(index.dataset.indexId)
        if(total ===0){
            total = index.dataset.indexId;
        }else{
            total += index.dataset.indexId;
        }
        output_sub.textContent = total;
    })
})

symbol_bth.forEach(index => {
    index.addEventListener('click',() => {
        console.log(index.dataset.indexId)
        if(total ===0){
            total = index.dataset.indexId;
        }else{
            total += index.dataset.indexId;
        }
        output_sub.textContent = total;
    })
})

//イコールを押した時
const equal_btn = document.getElementById('equal_btn');
equal_btn.addEventListener('click',() => {
    console.log(eval(total));
    output_total.textContent = eval(total);
});

}