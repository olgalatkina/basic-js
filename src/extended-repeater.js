module.exports = function repeater(str, options) {
    if (options === undefined) {
        throw 'options: undefined';
    }

    let separator = options.separator;
    if (separator === undefined) {
        separator = '+';
    }

    let repeatTimes = options.repeatTimes;
    if (repeatTimes === undefined) {
        repeatTimes = 1; // NB: условия задачи не оговаривают defult для repeatTimes
    }

    let addition = options.addition;
    if (addition === undefined) {
        addition = ''; // NB: условия задачи не оговаривают defult для addition
    }

    let additionSeparator = options.additionSeparator;
    if (additionSeparator === undefined) {
        additionSeparator = '|';
    }

    let additionRepeatTimes = options.additionRepeatTimes;
    if (additionRepeatTimes === undefined) {
        additionRepeatTimes = 1; // NB: условия задачи не оговаривают defult для additionRepeatTimes
    }

    let addon = '' + str; // NB: convert to string
    for (let j = 0; j < additionRepeatTimes; j++)
    {
        if (j > 0) {
            addon += additionSeparator;
        }
        addon += addition;
    }

    let result = '';
    for (let i = 0; i < repeatTimes; i++)
    {
        if (i > 0) {
            result += separator;
        }
        result += addon;
    }

    return result;
};
