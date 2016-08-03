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

	 }
	`],

})
export class TodoItemRenderer{
	@Input() todo;
	@Output() toggle = new EventEmitter();
}