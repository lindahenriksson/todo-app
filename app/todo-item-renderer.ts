import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
	selector: 'todo-item-renderer',
	template: `
	<div>
		<span [ngClass]="todo.status">
			{{todo.title}}
		</span>
		<button (click)="toggle.emit(todo)">
			Toggle
		</button>
	</div>`,
	styles: [`
 	.completed{
	 	text-decoration: line-through;
    	line-height: 3em;
    	font-size: 14px;
	 }
	.started{
  		line-height: 3em;
    	font-size: 14px;
    	color: #000;
	}
	button{
		display:block;
	    background-color: white;
	    border: 1px solid #d6bf0c;
	    width: 70px;
	    height: 40px;
	    font-size: 14px;
	    color: #d6bf0c;
	    float: right;
	    border-radius: 50px;   
	}
	button:hover {
    	background: #d6bf0c;
    	color: #FFF
	}
	div{
		text-transform: uppercase;
	 }
	`],

})
export class TodoItemRenderer{
	@Input() todo;
	@Output() toggle = new EventEmitter();
}