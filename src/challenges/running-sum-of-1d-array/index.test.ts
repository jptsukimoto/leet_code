import { runningSumOf1dArray } from './index';

describe('Running Sum of 1d Array', () => {
    it('should return [1, 3, 6, 10] for the input array [1, 2, 3, 4]', () => {
        const nums = [1,2,3,4];
        const output = runningSumOf1dArray(nums);
        expect(output).toStrictEqual([1,3,6,10]);
    });
    
    it('should return [1, 2, 3, 4, 5] for the input array [1, 1, 1, 1, 1]', () => {
        const nums = [1,1,1,1,1];
        const output = runningSumOf1dArray(nums);
        expect(output).toStrictEqual([1,2,3,4,5]);
    });
    
    it('should return [3, 4, 6, 16, 17] for the input array [3, 1, 2, 10, 1]', () => {
        const nums = [3,1,2,10,1];
        const output = runningSumOf1dArray(nums);
        expect(output).toStrictEqual([3,4,6,16,17]);
    });
});
