function findFloor(sortedArr, val) {

    let leftIdx = 0;
    let rightIdx = sortedArr.length - 1;
    let middleIdx;

    while(leftIdx <= rightIdx) {

        if (leftIdx === sortedArr.length - 1){

            return sortedArr[(sortedArr.length -1)]

        }

        if (rightIdx === 0){

            return -1

        }

        if (leftIdx === rightIdx) {

            return sortedArr[(middleIdx)]

        }

        middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = sortedArr[middleIdx]

        if(middleVal === val){

            return middleVal

        }

        else if(middleVal > val) {

            rightIdx = middleIdx - 1
            
        }

        else if(middleVal < val) {

            leftIdx = middleIdx + 1

        }

    }

}

// ANSWER FROM SOLUTIONS NOTES -
// function findFloor(arr, num, low = 0, high = arr.length - 1) {
//     if (low > high) return -1;
//     if (num >= arr[high]) return arr[high];
  
//     let mid = Math.floor((low + high) / 2)
  
//     if (arr[mid] === num) return arr[mid];
  
//     if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
//       return arr[mid - 1];
//     }
  
//     if (num < arr[mid]) {
//       return findFloor(arr, num, low, mid - 1);
//     }
  
//     return findFloor(arr, num, mid + 1, high)
// }
  

module.exports = findFloor