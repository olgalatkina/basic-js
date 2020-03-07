module.exports = function getSeason(date) {
    const seasons = [
        'winter', 'winter',
        'spring', 'spring', 'spring',
        'summer', 'summer', 'summer',
        'autumn', 'autumn', 'autumn',
        'winter']

    if (!date) {
        return 'Unable to determine the time of year!';
    }

    if (isNaN(Date.parse(date)) || !date.getTime()) {
        throw new Error('Unable to determine the time of year!');
    }

    let month = new Date(date).getMonth();

    return seasons[month];
};
