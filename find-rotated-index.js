function findRotatedIndex(sortedArr, val) {

    function checkFirstHalf(sortedArr, val) {

        // JUST WORK ON HALF OF THE ARRAY - ADJUST INDEXES ACCORDINGLY - ESPECIALLY IN WHILE LOOP

        const indexCap = (sortedArr.length - 1) / 2

        let leftIdx = 0
        let rightIdx = indexCap

        while(leftIdx <= rightIdx) {

            let middleIdx = Math.floor((leftIdx + rightIdx)/2);

            if(sortedArr[middleIdx] < val) {

                leftIdx = middleIdx + 1

            } else if(sortedArr[middleIdx] > val) {

                rightIdx = middleIdx -1;

            } else {

                return middleIdx

            }

        }

        return -1

    }

    function checkSecondHalf(sortedArr, val) {

        // JUST WORK ON HALF OF THE ARRAY - ADJUST INDEXES ACCORDINGLY - ESPECIALLY IN WHILE LOOP

        const indexCap = (sortedArr.length - 1) / 2

        let leftIdx = indexCap
        let rightIdx = sortedArr.length - 1

        while(leftIdx <= rightIdx) {

            let middleIdx = Math.floor((leftIdx + rightIdx)/2);

            if(sortedArr[middleIdx] < val) {

                leftIdx = middleIdx + 1

            } else if(sortedArr[middleIdx] > val) {

                rightIdx = middleIdx -1;

            } else {

                return middleIdx

            }

        }

        return -1

    }

    // run first function
    const first = checkFirstHalf(sortedArr, val)
    if(first != -1){return first}
    // if found in first - return

    // if not found inf first run second function
    const second = checkSecondHalf(sortedArr, val)
    return second
    // if not found return - 1
 
}

module.exports = findRotatedIndex