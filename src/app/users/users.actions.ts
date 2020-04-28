
    import {Action} from '@ngrx/store';
    import { iUser } from './users.reducer'
    
    export enum UsersActions {
     CreateUsers = '[Users Page] CreateUsers',
     DeleteUsers = '[Users Page] DeleteUsers',
     Increase = '[Users Page] Increase',
     Decrease = '[Users Page] Decrease',
    }
    

    
    export class CreateUsers implements Action{
     readonly type = UsersActions.CreateUsers;
     constructor(public payload: string ){}
    }
    
    export class Increase implements Action{
     readonly type = UsersActions.Increase;
     constructor(public payload: number ){}
    }

    export class Decrease implements Action{
        readonly type = UsersActions.Decrease;
        constructor(public payload: number ){}
    }
    export class DeleteUsers implements Action{
        readonly type = UsersActions.DeleteUsers;
        constructor(public payload: number ){}
    }
    
    export type iUsersUnion = CreateUsers |Increase| Decrease |DeleteUsers;

