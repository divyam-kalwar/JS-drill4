// Q3 Find all users with masters Degree.

function postGradUser(users){
    const pgUsers = {};
    for(const user in users){
        if(/master/i.test(users[user].qualification)){
            pgUsers[user] = users[user];
        }
    }
    return pgUsers;
}

export default postGradUser;