const arr = [2, 0, 90, 65, -3, 7, -5];
//const arr1 = [0,2,90];
//const arr2 = [-5,-3,7,65];

function merge(arr1,arr2){
    const arr3 = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr3.push(arr1[i++]);
        }else{
            arr3.push(arr2[j++]);
        }
    }

    while(i < arr1.length){
        arr3.push(arr1[i++]);
    }
    while(j < arr2.length){
        arr3.push(arr2[j++]);
    }

    return arr3;
}

function mergeSort(array){

    if(array.length === 1){
        return array;
    }
    let len = array.length;
    let mid  = Math.floor(len/2);
    
    const leftArray = array.slice(0,mid);
    const rightArray = array.slice(mid);

    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    return merge(sortedLeftArray,sortedRightArray)

}
console.log(`Unsorted Initial array is: ${arr}`);
const res = mergeSort(arr);
console.log(`Final merged sort is: ${res}`);

