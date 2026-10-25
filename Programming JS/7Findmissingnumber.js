
function findMissingNumber(arr) {
    let n = arr.length + 1;

    let expectedSum = n * (n + 1) / 2; //15

    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum = actualSum + arr[i]; //11
    }

    return expectedSum - actualSum; //15-11 = 4
}

console.log(findMissingNumber([1, 2, 3, 5]));
``