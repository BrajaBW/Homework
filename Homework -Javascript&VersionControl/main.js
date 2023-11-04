//Array dengan jumlah index 100

let nilaiRandom = [];
for (let i = 1; i < 101; i++) {
  nilaiRandom.push(Math.floor(Math.random() * 50));
}

//Array Genap
let arrayGenap = nilaiRandom.filter(function(bilangangenap){
return bilangangenap %2 == 0
})
//Array Ganjil
let arrayGanjil = nilaiRandom.filter(function(blanganganjil){
return blanganganjil %2 != 0
})

//function total
function total(num){
    let totalArray = 0;
    for (let i = 0; i < num.length; i++) {
        totalArray += num[i];
    } 
return totalArray
}


//function MAX
function max(nummax){
  let maxarray = nummax[0]
for (let i = 1 ; i < nummax.length; i++)
    if(nummax[i] > maxarray){
      maxarray = nummax[i]  
    }
return maxarray
  }

//function MIN 
function min(nummin){
let minarray = nummin[0]
for (let i = 1;i <nummin.length; i++)
if(nummin[i] < minarray){
  minarray = nummin[i]
}
  return minarray
}


// function RATA RATA 

function rataRataArray(numarray){
  let ratAray = total(numarray)/numarray.length
 return ratAray
 }

// function Perbandingan
function perbandinganMin(){
  if (min(arrayGenap)<min(arrayGanjil)){
    console.log("Min lebih besar array Ganjil")
  }else{
    console.log("Min Lebih Besar array Genap")
  }

}

function perbandinganMax(){
  if (max(arrayGenap)>max(arrayGanjil)){
    console.log("Max lebih besar array Genap")
  }else{
    console.log("Max lebih besar array Ganjil")
  }

}

function perbandinganTotal(){
  if (total(arrayGenap)>total(arrayGanjil)){
    console.log("Total lebih besar array Genap")
  }else{
    console.log("Total lebih besar array Ganjil")
  }

}

function ratarata(){
  if (rataRataArray(arrayGenap)>rataRataArray(arrayGanjil)){
    console.log("Total lebih besar array Genap")
  }else{
    console.log("Total lebih besar array Ganjil")
  }

}

console.log("Array nilai Ramdom:\n",nilaiRandom,"\nArray Nilai Genap :\n",arrayGenap,
"\nMin Array Genap :",min(arrayGenap),"\nMax Array Genap :",max(arrayGenap),
"\nTotal Array Genap :",total(arrayGenap),"\nRata-rata Array Genap",rataRataArray(arrayGenap),
"\nArray Nilai Ganjil :\n",arrayGanjil,"\nMin Array Ganjil:",min(arrayGanjil),
"\nMax Array Ganjil :",max(arrayGanjil),"\nTotal Array Ganjil :",total(arrayGanjil),
"\nRata-rata Array Ganjil:",rataRataArray(arrayGanjil),"\n"
)
perbandinganMax()
perbandinganMin()
perbandinganTotal()
ratarata()



 
