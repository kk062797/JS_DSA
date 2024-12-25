const originalArray = [7, 9, 3, 0, 9, 5, 5, 1, 2, 1, 7];
//index pos            0  1  2  3  4  5  6  7  8  9  10
const len = originalArray.length;

const countArray = new Array(len).fill(0);

for (let i = 0; i < len; i++) {
    currentVal = originalArray[i];
    countArray[currentVal]++;
}
console.log(countArray);
let sortedArray = [];
for (let j = 0; j < countArray.length; j++) {
    let curr_Val = countArray[j];
    while (curr_Val > 0) {
        sortedArray.push(j);
        curr_Val--;
    }
}
console.log(sortedArray);

function printArray(arr, len) {
    for (let i = 0; i < len; i++) {
        console.log(arr[i] + " ");
    }
}
//printArray(sortedArray, len)


