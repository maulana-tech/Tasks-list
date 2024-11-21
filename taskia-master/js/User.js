//file ini digunakan untuk business logic
//file ini digunakan untuk mengelola data seperti crate, read , update,etc

class User {

    constructor (){
        this.users = this.getUsers() || [];
    }

    saveUser(userData) {
        const newUser = {
            id: Date.now(),
            ...userData, 
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        // return window.location.href = 'signin.html'; 

        return {
            successs : true,
        };
    }

    signInUser(usernameByInput){

        //proses pemeriksaan data username ke pada local storage

        const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

        if(userExists){

            //proses pengembalian data ke signin.js controller
            return {
                success : true,
                username,
            };
        }

        else{
            
            return {
                success : false,
                message : 'username not found',
            };
        }

    }

    getUsers(){
        return JSON.parse(localStorage.getItem('users')) || [];
    }

}