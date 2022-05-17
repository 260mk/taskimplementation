 

var arr= [];
//Mean

function mean(){
    arr[0]=parseInt(document.getElementById("first").value);
    arr[1]=parseInt(document.getElementById("second").value);
    arr[2]=parseInt(document.getElementById("third").value);
    arr[3]=parseInt(document.getElementById("fourth").value);
    arr[4]=parseInt(document.getElementById("fifth").value);
    // console.log(arr[0]);
    // let sum =  arr.map((e,s) => {

    // })
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum/arr.length;
    // console.log(sum);
    // console.log(avg);
    // return avg;
    document.getElementById("mean").innerHTML = avg;
    
}

//Median
function median() {
    arr[0]=parseInt(document.getElementById("first").value);
    arr[1]=parseInt(document.getElementById("second").value);
    arr[2]=parseInt(document.getElementById("third").value);
    arr[3]=parseInt(document.getElementById("fourth").value);
    arr[4]=parseInt(document.getElementById("fifth").value);
    // if you want to sort the array eneble this code 
    let sortedArr = arr.sort((a,b) => a-b)
    const length = sortedArr.length;
    const medianValue = arr.sortedArr % 2 === 0 ? (sortedArr[length/2 - 1] + sortedArr[length/2]) : (sortedArr[Math.floor(length/2)]);
    document.getElementById("median").innerHTML = medianValue;
}


// Mode 
var modes = [], count = [], Index = 0;
function mode() {
    arr[0]=parseInt(document.getElementById("first").value);
    arr[1]=parseInt(document.getElementById("second").value);
    arr[2]=parseInt(document.getElementById("third").value);
    arr[3]=parseInt(document.getElementById("fourth").value);
    arr[4]=parseInt(document.getElementById("fifth").value);
    
    for (var i = 0; i < arr.length; i += 1) {
        number = arr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > Index) {
            Index = count[number];
        }
    }
 
    for (i in count)
        if (count[i]) {
            if (count[i] === Index) {
                modes.push(Number(i));
            }
        }
 
    // return modes[0];
    document.getElementById("mode").innerHTML = modes[0];
    }
/*
console.log('Mean' , mean(arr))
console.log('Median',median(arr));
console.log('Mode' , mode(arr));*/