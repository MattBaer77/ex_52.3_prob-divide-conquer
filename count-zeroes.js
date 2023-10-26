// function countZeroes(sortedArr) {

//     let leftIdx = 0
//     let rightIdx = sortedArr.length - 1

//     while (leftIdx <= rightIdx) {

//         let middleIdx = Math.floor((leftIdx + rightIdx)/2);
//         // let middleVal = sortedArr[middleIdx]

//         if (sortedArr[middleIdx] === 1) {

//             console.log("moving right")
//             leftIdx = middleIdx + 1;

//         } else if (sortedArr[middleIdx] === 0) {

//             console.log("checking left")

//             if (sortedArr[(middleIdx - 1)] === 1) {

                

//             }

//         } else {

//             console.log(middleIdx)

//             return (sortedArr.length)

//         }

//     }

//     return 0;

// }
// function countZeroes(sortedArr) {

//     let leftIdx = 0
//     let rightIdx = sortedArr.length - 1

//     while (leftIdx <= rightIdx) {

//         let middleIdx = Math.floor((leftIdx + rightIdx)/2);

//         if (sortedArr[middleIdx] === 0 && sortedArr[(middleIdx-1)] === 1) {

//             return sortedArr.length - middleIdx

//         } else if (sortedArr[middleIdx] === 0) {

//             console.log("Move Left")

//             rightIdx = middleIdx - 1

//         } else {

//             console.log("Move Right")

//             leftIdx = middleIdx + 1
//         }

//     }

//     return 0;

// }
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

            console.log("Move Left")

            rightIdx = middleIdx - 1

        } else {

            console.log("Move Right")

            leftIdx = middleIdx + 1
        }

    }

    return 0;

}

module.exports = countZeroes