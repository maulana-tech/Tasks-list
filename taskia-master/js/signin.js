//file ini adalah penghubung untuk mode Html dan model user

document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        
        e.preventDefault();

        const usernameByInput = document.getElementById('username').value;

        const result = userManager.signInUser(usernameByInput);
        
        if(result.success) {
            localStorage.setItem('username', usernameByInput);

            return window.location.href = 'tasks.html';
        }
        else{
            alert('data username tidak ada');
            console.log(result.message);
        }


    });
});