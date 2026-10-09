// Q2 Find all users staying in Germany.

function germanyUser(users){
    return Object.entries(users).filter(([userName, userData]) =>
        userData.nationality === "Germany"
    ).reduce((acc, [userName, userData]) => {
        acc[userName] = userData;
        return acc;
    }, {});
}

export default germanyUser;