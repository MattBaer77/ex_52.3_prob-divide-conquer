
function countZeroes(sortedArr) {

    if (sortedArr[0] === 0) {
        return sortedArr.length
    }

    let leftIdx = 0
    let rightIdx = sortedArr.length - 1

    while (leftIdx <= rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx)/2);

        if (sortedArr[middleIdx] === 0 && sortedArr[(middleIdx-1)] === 1) {

            return sortedArr.length - middleIdx

        } else if (sortedArr[middleIdx] === 0) {

            rightIdx = middleIdx - 1

        } else {

            leftIdx = middleIdx + 1
        }

    }

    return 0;

}

module.exports = countZeroes