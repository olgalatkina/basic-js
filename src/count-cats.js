module.exports = function countCats(matrix) {
    let catsCount = 0;
    for (let i = 0; i < matrix.length; i++)
    {
        let array = matrix[i];
        for (let j = 0; j < array.length; j++)
        {
            if (array[j] === '^^')
                catsCount++;
        }
    }
    return catsCount;
};
