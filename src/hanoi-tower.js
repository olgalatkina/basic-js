module.exports = function calculateHanoi(disksNumber, turnsSpeed)
{
    let turns = 2 ** disksNumber - 1;

    // NB: test fails due to rounding error
    //     if calculated like:
    //            turns /  turnsSpeed * 3600
    let seconds = turns / (turnsSpeed / 3600);

    return {
        turns: turns,
        seconds: seconds
    };
}
