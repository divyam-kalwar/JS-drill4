// Q1 Find all users who are interested in playing video games.

function gamesUsers(users){
    return Object.entries(users).filter(([userName, userData]) =>
        userData.interests.some(interest =>
            /video game/i.test(interest)
        )
    ).reduce((acc, [userName, userData]) => {
        acc[userName] = userData;
        return acc;
    }, {});
}

export default gamesUsers;