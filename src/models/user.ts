export class User {

	public id: number;
	public first_name: string;
	public last_name: string;
	public email: string;
	public password: string;
	public password_confirmation: string;
	public remember_token: string;
	public token: string;

	constructor(id, first_name, last_name, email, password, password_confirmation, remember_token, token) {

		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.password = password;
		this.password_confirmation = password_confirmation;
		this.remember_token = remember_token;
		this.token = token;
	}
	
}