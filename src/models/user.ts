export class User {

	public id: number;
	public name: string;
	public email: string;
	public password: string;
	public confirm_password: string;
	public gender: string;
	public remember_token: string;
	public token: string;

	constructor(id, name, email, password, confirm_password, gender, remember_token, token) {
		
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.confirm_password = confirm_password;
		this.gender = gender;
		this.remember_token = remember_token;
		this.token = token;
	}
	
}