// Q1 Find all users who are interested in playing video games.

function gamesUsers(users){
    let intrestedUser = {};
    
    for(const user in users){
        for(const interest of users[user].interests){ // here user is name in string that's why I am using users[user] to access the user of that name.
            if(/video game/i.test(interest)){
                intrestedUser[user] = users[user];
            }
        }
    }
    return intrestedUser;
}

export default gamesUsers;