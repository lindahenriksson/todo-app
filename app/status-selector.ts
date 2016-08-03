import  {Component, Output, EventEmitter} from "@angular/core";

@Component({
	selector: 'status-selector',
	template: `<div>
	<select #sel (change)="select.emit(sel.value)">
	<option *ngFor="#status of statuses">
	{{status}}
	</option>
	</select>
	</div>`,
	styles: [`

 	select{
 		margin: 10px;
	 	padding: 10px;
    	border: 1px solid #d6bf0c;
    	height: 30px;
	    font-size: 14;
	    margin-top: 0;
	    margin-bottom: 0;
	    color: #d6bf0c;
	    background-color: #fff;
	 }
	 
	`],


})

export class StatusSelector{
	@Output() select = new EventEmitter();
statuses = ["All", "Started", "Completed"];

ngOnInit(){
	this.select.emit(this.statuses[0]); 
}

}
