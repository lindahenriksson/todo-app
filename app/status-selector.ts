import  {Component, Output, EventEmitter} from "@angular/core";

@Component({
	selector: 'status-selector',
	template: `<div>
	<select #sel (change)="select.emit(sel.value)">
	<option *ngFor="#status of statuses">
	{{status}}
	</option>
	</select>
	</div>`
})

export class StatusSelector{
	@Output() select = new EventEmitter();
statuses = ["All", "Started", "Completed"];

ngOnInit(){
	this.select.emit(this.statuses[0]); 
}

}
