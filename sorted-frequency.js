
function sortedFrequency(sortedArr, val) {

    function findFirst() {

        let leftIdx = 0;
        let rightIdx = sortedArr.length - 1;

        while(leftIdx <= rightIdx){

            let middleIdx = Math.floor((leftIdx + rightIdx)/2)

            if(sortedArr[middleIdx] === val && sortedArr[(middleIdx - 1)] !== val) {

                return middleIdx

            }

            if(sortedArr[middleIdx] === val || sortedArr[middleIdx] > val) {

                rightIdx = middleIdx - 1

            } else {

                leftIdx = middleIdx + 1
            }

        }

        return -1
        
    }

    function findLast(sortedArr, val) {

        let leftIdx = 0;
        let rightIdx = sortedArr.length - 1;

        while(leftIdx <= rightIdx){

            let middleIdx = Math.floor((leftIdx + rightIdx)/2)

            if(sortedArr[middleIdx] === val && sortedArr[(middleIdx + 1)] !== val) {

                return middleIdx

            }

            if(sortedArr[middleIdx] === val || sortedArr[middleIdx] < val) {

                leftIdx = middleIdx + 1

            } else {

                rightIdx = middleIdx - 1

            }

        }

        return (sortedArr.length - 1)

    }

    const first = findFirst(sortedArr, val)
    if (first === -1){return first}
    const last = findLast(sortedArr,val)
    return last - first + 1

}

module.exports = sortedFrequency