import { showChallengeDetails } from "../../utils/show-challenge-details";

export const runningSumOf1dArray = (nums: number[]): number[] => {
    for(let i = 1; i < nums.length; i++){
        nums[i] += nums[i - 1];
    }
    return nums;
}

const inputs = { nums: [1,2,3,4] };
const output = runningSumOf1dArray([...inputs.nums]);
showChallengeDetails('Running-Sum-of-1d-Array', inputs, output);