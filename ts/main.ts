import { getUsers } from './user';
import login from './login';
import "jquery";
import loggedIn from './loggedIn';

loggedIn();

document.getElementById('loginButton')!.addEventListener('click', function(e){

    e.preventDefault();

    let username:string = (<HTMLInputElement>document.getElementById('username')).value;
    let password:string = (<HTMLInputElement>document.getElementById('password')).value;


    login(getUsers()[0], {username, password});

});

