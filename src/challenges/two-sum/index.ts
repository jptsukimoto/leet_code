import { showChallengeDetails } from "../../utils/show-challenge-details";

export const twoSum = (nums: number[], target: number): number[] => {
    const map: any = {};
    for(let i=0; i<nums.length; i++){
        if(map[nums[i]]>=0) return [ map[nums[i] ] , i];
        map[target-nums[i]] = i;
    }
    return [];
}

const inputs = { 
    nums: [3,2,4],
    target: 6
};
const output = twoSum([...inputs.nums], inputs.target);
showChallengeDetails('Two-Sum', inputs, output);