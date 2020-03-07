const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    const k = 0.693 / HALF_LIFE_PERIOD; // 1.22e-4
    const A0 = MODERN_ACTIVITY; // 15

    if (!(typeof sampleActivity === 'string'))
        return false;

    let A = parseFloat(sampleActivity);

    if (isNaN(A))
        return false;
    if (A <= 0 || A > 15)
        return false;

    let t = Math.log(A0 / A) / k;
    return Math.ceil(t);
};
