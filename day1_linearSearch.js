//Linear Search : unsorted Array

const valueToBESearch = 54;
const arr = [23,45,2,4,67,54];

        //Name of the function should depict your action
        // Input data types should be clear for the consumer : arr , num
        // output: number: +ve: >=0, -ve: -1

function findElementUsingLinearSearch(arr,value){
    for(let i =0;i<arr.length;i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

const foundElement = findElementUsingLinearSearch(arr,valueToBESearch);
if (foundElement <0){
    console.log(`Element ${valueToBESearch} not found in the array`)
}else {
    console.log(`Element ${valueToBESearch} is placed at pos ${foundElement}`);
}