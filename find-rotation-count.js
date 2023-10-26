// function findRotationCount() {

//     // I DO NOT EVEN UNDERSTAND THE QUESTION.
  
// }

// module.exports = findRotationCount

// ANSWER FROM SOLUTIONS NOTES -
function findRotationCount(arr, low = 0, high = arr.length - 1) {

    console.log(high)
    console.log(low)
    if (high < low) {

        console.log("HIGH OVER LOW")

        return 0;

    } 
    if (high === low) return low;
    let mid = Math.floor((low + high) / 2)
  
    // Check if element (mid+1) is minimum element.
    // Consider the cases like [3, 4, 5, 1, 2]
    if (mid < high && arr[mid + 1] < arr[mid])
      return mid + 1;
  
    // Check if mid itself is minimum element
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid;
    }
  
    // Decide whether we need to go to left half or
    // right half
    if (arr[high] > arr[mid]) {
      return findRotationCount(arr, low, mid - 1);
    }
  
    return findRotationCount(arr, mid + 1, high);
  }
  
  module.exports = findRotationCount