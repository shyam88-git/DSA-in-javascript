function insertElem(arr){

    let pos=2;
    let newEl=30;

    for(let i=arr.length-1;i>=pos;i--){

        if(i>=pos){

            arr[i+1]=arr[i];
            if(i==pos){

                arr[i]=newEl;
            }
        }
       
    }

    console.log(arr);


}
insertElem([10,20,40,50,60,70]);