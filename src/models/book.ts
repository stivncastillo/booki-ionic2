export class Book {

	constructor(
		public id:number,
		public name:string,
		public author:string,
		public pages:number,
		public started_in:string,
		public description:string,
		public user_id:number,
		public state_id:number,
		public created_at:string,
		public updated_at:string
	) {}
}