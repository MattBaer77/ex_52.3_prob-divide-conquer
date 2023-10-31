function findRotationCount(sortedArr) {

  // JUST WORK ON HALF OF THE ARRAY - ADJUST INDEXES ACCORDINGLY - ESPECIALLY IN WHILE LOOP
  let leftIdx = 0
  let rightIdx = sortedArr.length - 1

  while(leftIdx <= rightIdx) {

      let middleIdx = (Math.floor((leftIdx + rightIdx)/2));

      if(sortedArr[middleIdx] <= sortedArr[leftIdx] && sortedArr[middleIdx] < sortedArr[(middleIdx -1)]) {

        return middleIdx

      } else if (sortedArr[middleIdx] < sortedArr[leftIdx]) {

        rightIdx = middleIdx - 1

      } else {

        leftIdx = middleIdx +1;

      }

  }
  return 0

}

// module.exports = findRotationCount

// ANSWER FROM SOLUTIONS NOTES -
// function findRotationCount(arr, low = 0, high = arr.length - 1) {

//     console.log(high)
//     console.log(low)
//     if (high < low) {

//         console.log("HIGH OVER LOW")

//         return 0;

//     } 
//     if (high === low) return low;
//     let mid = Math.floor((low + high) / 2)
  
//     // Check if element (mid+1) is minimum element.
//     // Consider the cases like [3, 4, 5, 1, 2]
//     if (mid < high && arr[mid + 1] < arr[mid])
//       return mid + 1;
  
//     // Check if mid itself is minimum element
//     if (mid > low && arr[mid] < arr[mid - 1]) {
//       return mid;
//     }
  
//     // Decide whether we need to go to left half or
//     // right half
//     if (arr[high] > arr[mid]) {
//       return findRotationCount(arr, low, mid - 1);
//     }
  
//     return findRotationCount(arr, mid + 1, high);
//   }
  
  module.exports = findRotationCount