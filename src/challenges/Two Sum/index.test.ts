import { twoSum } from './index';

describe('Two Sum', () => {
    it('should return [0, 1] when the input array is [2, 7, 11, 15] and the target is 9', () => {
        const nums = [2,7,11,15];
        const target = 9;
        const output = twoSum(nums, target);
        expect(output).toStrictEqual([0,1]);
    });
    
    it('should return [1, 2] when the input array is [3, 2, 4] and the target is 6', () => {
        const nums = [3,2,4];
        const target = 6;
        const output = twoSum(nums, target);
        expect(output).toStrictEqual([1,2]);
    });
    
    it('should return [0, 1] when the input array is [3, 3] and the target is 6', () => {
        const nums = [3,3];
        const target = 6;
        const output = twoSum(nums, target);
        expect(output).toStrictEqual([0,1]);
    });

    it('should return [4, -2, 5, -1, 3, 1] when the input array is [1,4] and the target is 1', () => {
        const nums = [4, -2, 5, -1, 3, 1];
        const target = 1;
        const output = twoSum(nums, target);
        expect(output).toStrictEqual([1,4]);
    });

    it('should return an empty array when the input array is [1, 2, 3] and the target is 7', () => {
        const nums = [1,2,3];
        const target = 7;
        const output = twoSum(nums, target);
        expect(output).toStrictEqual([]);
    });
});
