const arr = [6, 4, 1, 69, 8];
let len = arr.length;

//Using for loop
function insertionSort(arr, len) {
    for (let i = 1; i < len; i++) {
        let currentValue = arr[i];
        let currentValueIndex = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > currentValue) {
                arr[j + 1] = arr[j];
                currentValueIndex = j;
            } else {
                break;
            }
        }
        arr[currentValueIndex] = currentValue;
    }
}

// Using for & while loop
function insertionSort(arr, len) {
    for (let i = 1; i < len; i++) {
        let currentValue = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentValue;
    }
}
function insertionSort(arr, len) {
    for (let i = 1; i < len; i++) {
        let currentValue = arr[i];
        let j = i - 1;
        while (j >= 0) {
            if (arr[j] > currentValue) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
            j--;
        }
        arr[j + 1] = currentValue;
    }
}



// To print an array
function printArray(arr, len) {
    for (let i = 0; i < len; i++) {
        console.log(arr[i] + " ");
    }
}
insertionSort(arr, len);
console.log("Sorted Array via InsertionSort: " + arr);
//console.log("Sorted Array via InsertionSort: ");
//printArray(arr,len);