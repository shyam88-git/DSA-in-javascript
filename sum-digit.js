function sumArr(arr){
    let sum=0;
    arr.forEach((ele)=>{

        if(typeof ele==='number')
        sum+=ele;

    


    });
    return sum;




}

console.log(sumArr([10,'Shyam',"Harish","lokesh",20,30,]));