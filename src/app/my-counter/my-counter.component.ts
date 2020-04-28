import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUserCount  } from '../users/users.selector';
import { CreateUsers,DeleteUsers, Decrease, Increase } from '../users/users.actions';
import { iUser } from '../users/users.reducer';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']

})
export class MyCounterComponent  {

 //save current state in localStorage
  constructor(private store: Store) {
     this.store.subscribe(value => localStorage.setItem('usersStorage', JSON.stringify(value))) 
  }

  // part with actions
  createPlayer(payload:string){
    if(payload.replace(/\s/g, '')=='') return
    this.store.dispatch(new CreateUsers( payload ));
    this.changeList( this.lastSort() )
  }
  decrement($event){
   this.store.dispatch(new Decrease( $event ));
   this.changeList( this.lastSort() )
  }
  increment($event){
    this.store.dispatch(new Increase( $event ));
    this.changeList( this.lastSort() )

   }
   deletePlayer($event){
    this.store.dispatch(new DeleteUsers( $event ));
    this.changeList( this.lastSort() )

   }
	//part with sorting state
	getState () {
		let userList:any;
		this.store.subscribe(value => userList=value)
		this.lastSort=this.getState
		return userList.users
	}
	sortByName(){
		let listByName = this.getState().slice().sort(
			(prev, next) =>
				{ 
					if ( prev.name < next.name ) return -1;
					if ( prev.name < next.name ) return 1;
				}
			);
			this.lastSort=this.sortByName
			return listByName
	}
	sortByCountUp (){
		let listByCountUp = this.getState().slice().sort((prev:iUser, next:iUser) => prev.count - next.count);
		this.lastSort=this.sortByCountUp
		return listByCountUp
	}
	sortByCountDown(){
		this.lastSort=this.sortByCountDown
		return this.sortByCountUp().reverse()
	}
//variable with last state (is visible)
	setList:Array<{}> = this.getState()
// last chosen sort(for  actions with checked sort)
	lastSort:any
// function for change setList
	changeList = (list:Array<{}>)=> this.setList = list

// useSelect$:Observable<any> = this.store.pipe(select(selectUserCount));

}
