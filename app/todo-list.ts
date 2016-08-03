import {Component, Input} from "@angular/core";
import {TodoService} from "./todo-service";
import {TodoItemRenderer} from "./todo-item-renderer";
import {StartedPipe} from "./started-pipe";
import {SearchPipe} from "./search-pipe";

@Component({
	selector: 'todo-list',
	pipes: [StartedPipe, SearchPipe],
	directives: [TodoItemRenderer],
	template: `<div> 
	<ul>
	<li *ngFor="#todo of todoservice.todos 
	| started : status
	| search : term

	">
	<todo-item-renderer
	[todo]="todo"
	(toggle)="todoservice.toggleTodo($event)"
	></todo-item-renderer>
	</li>
	</ul>
	</div>`

})
export class TodoList{
	@Input() status;
	@Input() term;

constructor(public todoservice:TodoService){
	
}
ngOnInit(){
	console.log(this.term);

}
	
}