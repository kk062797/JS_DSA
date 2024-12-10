//Linear Search : sorted Array

const valueToBeSearch = 7;
const arr = [3,7,11,15,23,27];
//const arr = [102, 118, 124, 131, 140, 148, 161, 166, 176, 180];
//const arr = [2,4,23,45,54,67];


function findElementUsingBinarySearch(arr,value){
    let startIndex = 0;
    let endIndex = arr.length -1;

    let iterationCount = 0;
    while(startIndex <= endIndex){
        iterationCount++;
        let midIndex = Math.floor((startIndex + endIndex)/2);
        let midValue = arr[midIndex];
        console.log(`In interation count ${iterationCount}: valueToSearch is ${value} , midValue is ${midValue} startindex is: ${startIndex}, endIndex is ${endIndex}  and midIndex is: ${midIndex}`)
        if( midValue=== value){
        return midIndex;
        }else if(midValue > value){
        endIndex = midIndex - 1;
        }else{
        startIndex = midIndex + 1;
        }
    }
    console.log(`Not found value: startindex is: ${startIndex}, endIndex is ${endIndex} `)
    return -1;
}

const foundElement = findElementUsingBinarySearch(arr,valueToBeSearch);
if (foundElement <0){
    console.log(`Element ${valueToBeSearch} not found in the array`)
}else {
    console.log(`Element ${valueToBeSearch} is placed at pos ${foundElement}`);
}