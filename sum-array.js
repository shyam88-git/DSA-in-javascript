function sumArr(arr){
    let sum=0;

    for(let i=0;i<arr.length;i++){

        sum+=arr[i];
    }
    return sum;


}
console.log(sumArr([10,20,30,40,50,60]));