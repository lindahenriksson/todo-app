import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {TodoInput} from "./todo-input";
import {TodoService} from "./todo-service";
import {TodoList} from "./todo-list";
import {StatusSelector} from "./status-selector";
import {SearchBox} from "./search-box";


@Component({
	selector: 'app',
	directives: [TodoInput, TodoList, StatusSelector, SearchBox],
	template: `<div>
	<search-box (update)="term = $event"></search-box>
	<todo-input></todo-input>
	<status-selector (select)="started = $event"></status-selector>
	<todo-list 
	[status]= "started"
	[term]="term"
	></todo-list>
	
	</div>`
})
class App{
	started;


}

bootstrap(App, [TodoService]);
