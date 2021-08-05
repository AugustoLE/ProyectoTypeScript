import { User } from './user';
import loggedIn from './loggedIn';

export default function(dbUser:User, formInfo:{username:string, password:string}){

    if( formInfo.username === dbUser.username ){
        
        if( formInfo.password === dbUser.password ){

            localStorage.setItem('username', formInfo.username);
            
            loggedIn();

        } else{

            return;

        }

    } else{
        return;
    }

}