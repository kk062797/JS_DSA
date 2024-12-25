let originalArray = [963, 2068, 5, 128, 54, 67];
const len = originalArray.length;

//const maxNumber = Math.max(...originalArray);

function findMaxElement(arr, len) {
    let max = arr[0];
    for (let i = 1; i < len; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const maxNumber = findMaxElement(originalArray, len);
const digitCountOfMaxNum = maxNumber.toString().length;

function findDigitBasedOnPosition(value, position) {
    const res = Math.floor(value / Math.pow(10, position));
    const digit = res % 10;
    return digit;
}


const arrayLike = {
    length: 10,
}
//const countArray = Array.from(arrayLike, () => []);


for (let i = 0; i < digitCountOfMaxNum; i++) {

    const countArray = Array.from(arrayLike, () => []);
    for (let j = 0; j < len; j++) {
        let indexPosInCountArray = findDigitBasedOnPosition(originalArray[j], i);
        countArray[indexPosInCountArray].push(originalArray[j]);
    }
    originalArray = countArray.flat();
}
console.log(originalArray);
//console.log(digitCountOfMaxNum);
//console.log(maxNumber)