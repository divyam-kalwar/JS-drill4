// Q2 Find all users staying in Germany.

function germanyUser(users){
    const germanyUsers = {};
    for(const user in users){
        if(users[user].nationality === "Germany"){
            germanyUsers[user] = users[user];
        }
    }
    return germanyUsers;
}

export default germanyUser;