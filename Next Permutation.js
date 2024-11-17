function nextPermutation(nums) {
    let n = nums.length;
    let i = n - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let left = i + 1, right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

let nums1 = [1, 2, 3];
nextPermutation(nums1);
console.log(nums1); 

let nums2 = [3, 2, 1];
nextPermutation(nums2);
console.log(nums2); 

let nums3 = [1, 1, 5];
nextPermutation(nums3);
console.log(nums3); 
