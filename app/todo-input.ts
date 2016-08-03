import {Component} from "@angular/core";
import {TodoService} from "./todo-service";
import {TodoModel} from "./todo-model";

@Component({
	selector: 'todo-input',
	template: `<div> 
	<form (submit)="onSubmit()">
	<input 
		placeholder="Add a new todo"
		type="text" 
		[(ngModel)]="todoModel.title">
	</form>
	</div>`

})
export class TodoInput{
	todoModel:TodoModel = new TodoModel();

constructor(public todoservice:TodoService){
	
}

	onSubmit(){
		this.todoservice.addTodo(this.todoModel);
		console.log(this.todoservice.todos);
		this.todoModel = new TodoModel();
	}
}
