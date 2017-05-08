export class Book {

	public id:number;
	public name:string;
	public author:string;
	public pages:number;
	public started_in:string;
	public description:string;
	public user_id:number;
	public state_id:number;
	public created_at:string;
	public updated_at:string;

	constructor(
		id,
		name,
		author,
		pages,
		started_in,
		description,
		user_id,
		state_id,
		created_at,
		updated_at
	) {
		this.id = id; 
		this.name = name; 
		this.author = author; 
		this.pages = pages; 
		this.started_in = started_in; 
		this.description = description; 
		this.user_id = user_id; 
		this.state_id = state_id; 
		this.created_at = created_at; 
		this.updated_at = updated_at; 
	}
}