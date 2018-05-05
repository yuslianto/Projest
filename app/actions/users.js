import axios from 'axios';

export function allUsers(){
    return {
        type: "ALL_USERS",
        payload: axios.get('https://api.backendless.com/2DB59910-22B8-02D4-FF6F-1F447D5E5F00/53EAFB6D-836D-A7F8-FFD2-4DC61C5B8E00/data/Users')
    }
}

export function getUsers(){
    return {}
}

export function createUsers(data){
    return {
        type: "CREATE_USERS_FULFILLED",
        payload: axios.post('https://api.backendless.com/2DB59910-22B8-02D4-FF6F-1F447D5E5F00/53EAFB6D-836D-A7F8-FFD2-4DC61C5B8E00/data/Users', data)
    }
}