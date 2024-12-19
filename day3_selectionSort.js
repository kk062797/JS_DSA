const arr = [7,8,3,9,2];
let len = arr.length;

function selectionSort(arr,len){
    for(let i = 0;i<len-1;i++){
        let smallestIndex = i;
        for(let j =i+1;j < len;j++){
            if(arr[smallestIndex] > arr[j]){
                smallestIndex =j;
            }
        }
        if(smallestIndex != i){
            
            let temp = arr[smallestIndex];
            arr[smallestIndex] = arr[i];
            arr[i] = temp;   
        }
    }
}

// To print an array
function printArray(arr, len){
    for(let i =0;i<len;i++){
        console.log(arr[i]+" ");
    }
}
selectionSort(arr,len);
console.log("Sorted Array via SelectionSort: "+ arr);
//console.log("Sorted Array via SelectionSort: ");
//printArray(arr,len);
