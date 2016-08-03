import {Component, Output, EventEmitter} from "@angular/core";

@Component({
	selector: 'search-box',
	template: `
	<div>
	<input 
		placeholder="Search" 
		#input 
		type="text" 
		(input)="update.emit(input.value)">
	</div>`,
	styles: [`
 	input{	
	    width: 100%;
	    margin-bottom: 10px;
	    font-size: 20px;
	    line-height: 1.4em;
	    padding: 10px;
	    border: 1px solid #d6bf0c;
	    border-radius: 50px;
	 }

	`],
})
export class SearchBox{
	@Output() update = new EventEmitter();

	ngOnInit(){
		this.update.emit('');
	}
}