//const arr = [45,56,15,23,21,6];
const arr = [4,1,5,2,3]
//const arr = [ 64, 34, 25, 12, 22, 11, 90 ];
const len = arr.length;

function bubbleSort(arr,len){
    for(let i =0;i<len-1;i++){
        let isSwap = false;
        for(let j = 0;j<len-1-i;j++){
            if(arr[j] > arr[j+1]){
                /*
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                isSwap = true;
                */
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                isSwap = true;
            }
        }
        if(!isSwap){ //array is already sorted
            return;
        }
    }
}
// To print an array
function printArray(arr, len){
    for(let i =0;i<len;i++){
        console.log(arr[i]+" ");
    }
}
bubbleSort(arr,len);
console.log("Sorted Array via BubbleSort: "+ arr);
//console.log();
//printArray(arr,len);