module.exports = function transform(arr)
{
    if (!(arr instanceof Array)) {
        throw new Error('wrong parameter type: ' + (typeof arr));
    }

    let transformed = [];
    for (let i = 0; i < arr.length; i++)
    {
        let elem = arr[i];
        if (elem === '--discard-next')
        {
            i++;
            continue;
        }

        if (elem === '--discard-prev')
        {
            let l = transformed.length;
            if (l > 0) {
                transformed.pop();
            }
            continue;
        }

        if (elem === '--double-next')
        {
            if (i + 1 < arr.length) {
                transformed.push(arr[i + 1]);
            }
            continue;
        }

        if (elem === '--double-prev')
        {
            if (i - 1 >= 0) {
                transformed.push(arr[i - 1]);
            }
            continue;
        }

        transformed.push(elem);
    }

    return transformed;
};
