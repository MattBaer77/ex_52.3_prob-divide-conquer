// function sortedFrequency(sortedArr, val) {

//     let leftIdx = 0;
//     let rightIdx = sortedArr.length - 1;

//     while(leftIdx <= rightIdx) {

//         let middleIdx = Math.floor((leftIdx + rightIdx)/2)
//         let leftCapIdx;
//         let rightCapIdx;

//         if (leftCapIdx && rightCapIdx) {

//             return rightCapIdx - leftCapIdx
//         }

//         if (!leftCapIdx && sortedArr[middleIdx] === val && sortedArr[(middleIdx - 1)] != val) {

//             leftCapIdx = middleIdx;

//         }

//         if (!rightCapIdx && sortedArr[middleIdx] === val && sortedArr[(middleIdx - 1)] != val) {

//             rightCapIdx = middleIdx;

//         }

//         if (sortedArr[middleIdx] )



//     }

// }
function sortedFrequency(sortedArr, val) {

    function findFirst() {

        let leftIdx = 0;
        let rightIdx = sortedArr.length - 1;

        while(leftIdx <= rightIdx){

            let middleIdx = Math.floor((leftIdx + rightIdx)/2)

            console.log("INDEX: " + middleIdx)
            console.log("VALUE: " + sortedArr[middleIdx])

            if(sortedArr[middleIdx] === val && sortedArr[(middleIdx - 1)] !== val) {

                console.log(middleIdx)

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

            console.log("INDEX: " + middleIdx)
            console.log("VALUE: " + sortedArr[middleIdx])

            if(sortedArr[middleIdx] === val && sortedArr[(middleIdx + 1)] !== val) {

                console.log(middleIdx)

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
    console.log(first)
    if (first === -1){return first}
    const last = findLast(sortedArr,val)
    console.log(last)

    console.log("DONE***")

    return last - first + 1

}

module.exports = sortedFrequency