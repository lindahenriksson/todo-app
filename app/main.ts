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
	
	</div>`,
	styles: [`
	div{
	  width: 50%;
	  background-color: #fff;
	  border-radius: 2px;
	  margin: 10px auto;
	  padding: 30px;
	  min-width: 500px;
	  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	}

	div:hover {
	  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}
		 
	 
	`],

})
class App{
	started;


}

bootstrap(App, [TodoService]);
