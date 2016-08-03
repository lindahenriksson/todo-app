export class TodoModel {
	constructor(
		public title = "",
		public status = "Started"

){}

	toggle():void{
		this.status =
		this.status == "Started"
		? "Completed"
		: "Started";

	}
}