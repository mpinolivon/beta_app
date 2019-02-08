export class AppSettings {
	// public static NODE = 'http://localhost:4056/';
	public static BASE = 'http://betaapp.atypax.com/';
	//public static NODE = 'http://192.168.1.11:4056/';
	//public static NODE = 'http://dev.atypax.com:4058/';
	public static USERS = 'users';
	public static TEAMS = 'teams';
	public static QUESTIONS = 'questions';
	public static LOGIN = 'api/oauth/token';
	public static EVENTS = 'api/event';
	public static EVENTSHISTORY = 'api/event/get/available';
	public static CREATE_USER = 'api/user';
	public static INSCRIBED = 'api/event/register/member';
	public static USER = 'api/user/';
	public static LIKE = 'api/event/like/event';
	public static SENDCOMENT = 'api/event/comment/event';
	public static LISTCOMENT = 'api/event/';
	public static IDDEVICE = 'api/user/update/device/';
	public static NOTIFICATION1 = 'api/event/confirm/';
	public static NOTIFICATION2 = 'api/event/reject/';
	public static ROLES = { 'Admin': 0,	'Manager': 1, 'Player': 2, };
}