/*
Q4 Group users based on their Programming language mentioned in their designation.
*/ 

function userGroup(users){
    const group = {};

    for(const user in users){
        const userName = user;
        const golang = /golang/i.test(users[user].desgination);
        const javascript = /javascript/i.test(users[user].desgination);
        const python = /python/i.test(users[user].desgination);
        let userRole;

        if(golang){
            userRole = 'Golang';
        } else if (javascript){
            userRole = 'Javascript'
        } else if (python){
            userRole = 'Python'
        }

        if(group[userRole]){
            group[userRole].push(userName);
        } else {
            group[userRole] = [userName];
        }
    }
    return group;
}

export default userGroup;