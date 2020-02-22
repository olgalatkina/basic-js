module.exports = function createDreamTeam(members) {
    if (!(members instanceof Array))
        return false;

    let firstLetters = [];
    for (let i = 0; i < members.length; i++)
    {
        if (!(typeof members[i] === 'string'))
            continue;

        let fullName = members[i].trim().split(' ');
        let letter = fullName[0].charAt(0);
        firstLetters.push(letter.toUpperCase());
    }

    return firstLetters.sort().join('');
};
