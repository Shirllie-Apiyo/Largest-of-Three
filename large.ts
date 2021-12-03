//npm install -g typescript (to install typescript globally)

function largestOfThree(arr:any) {
    let largest:number= 0;
    for (let i =0;i<arr.length;i++){
        
        for(let x=0; x < arr[i].length;x++){
            if (arr[i][x]>largest){
                largest=arr[i][x];
            }
        }//end loop inner
    }//end loop 1
    return largest;
  }

  let value1:any= largestOfThree([[2,6,1], [6,4,2,9]]);
  console.log(value1)