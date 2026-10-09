/*
Q4 Group users based on their Programming language mentioned in their designation.
*/

function userGroup(users) {
    return Object.entries(users).reduce((group, [userName, userData]) => {

    const designation = userData.desgination ?? "";

        const language = [
            ["Golang", /golang/i],
            ["Javascript", /javascript/i],
            ["Python", /python/i]
        ].find(([_, regex]) => regex.test(designation))?.[0];

        if (language) {
            (group[language] ??= []).push(userName);
        }

        return group;
    }, {});
}

export default userGroup;