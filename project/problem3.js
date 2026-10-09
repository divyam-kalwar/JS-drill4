// Q3 Find all users with masters Degree.

function postGradUser(users){
    return Object.entries(users).filter(([userName, userData]) =>
        /master/i.test(userData.qualification)
    ).reduce((acc, [userName, userData]) => {
        acc[userName] = userData;
        return acc;
    }, {});
}

export default postGradUser;