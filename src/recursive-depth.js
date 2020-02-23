module.exports = class DepthCalculator
{
    calculateDepth(arr)
    {
        if (!(arr instanceof Array)) {
            return 0;
        }

        let maxDepth = 0;
        for (let elem of arr)
        {
            let depth = this.calculateDepth(elem);
            if (maxDepth < depth) {
                maxDepth = depth;
            }
        }

        return maxDepth + 1;
    }
};
