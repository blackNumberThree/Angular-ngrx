
    import {iUsersUnion, UsersActions} from './users.actions';

    export interface iUser{
      name: string,
      count: number,
      createNumber:number
     }
let usersStorage = JSON.parse(localStorage.getItem('usersStorage')).users;
    
    const initialState = usersStorage?
    usersStorage : []
    
    export function usersReducer(
      state : iUser[] = initialState, action: iUsersUnion){

        function getPlayer(playerData:number) {
          let user:number
          state.forEach(function(item,index){  if(item.createNumber == action.payload) user =  index });
          return user
        }

        function changedPlayer(playerIndex:number){
          return{
            name:state[playerIndex].name,
            count:state[playerIndex].count,
            createNumber:state[playerIndex].createNumber
           }
        }
        
     switch(action.type){
       case UsersActions.CreateUsers:
         return [...state,
          {name: action.payload,count:0,createNumber:Date.now() }
        ]

       case UsersActions.DeleteUsers:
         return [
           ...state.slice(0,getPlayer(action.payload)),
           ...state.slice(getPlayer(action.payload)+1 ,state.length )
          ];
         
        case UsersActions.Increase:
        let increasePlayer=changedPlayer(getPlayer(action.payload))
        increasePlayer.count += 1
         return [
           ...state.slice( 0,getPlayer(action.payload) ),
          increasePlayer,
          ...state.slice(getPlayer(action.payload)+1 ,state.length )
        ];

        case UsersActions.Decrease:
          let decreasePlayer = changedPlayer(getPlayer(action.payload))
          decreasePlayer.count -= 1
           return [
             ...state.slice(0,getPlayer(action.payload)),
             decreasePlayer,
            ...state.slice(getPlayer(action.payload)+1 ,state.length )
          ];

       default:
         return state;
     }
    }

