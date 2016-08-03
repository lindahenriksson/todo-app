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
	</div>`,
	styles: [`
 	ul{
	 	margin: 0;
    	padding: 0;
    	list-style: none;
	 	padding: 10px;
	 }
	 li{
	 	display: block;
    	padding: 13px 15px;
    	font-size: 14px;
    	border-bottom: 1px solid #E7E3E3;
    	color: #868686;
	 }
	 li:first-child{
	 	border-top: 1px solid #E7E3E3;
	 }


	`],

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