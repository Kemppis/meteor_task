import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

loggedin = false;
clicks = 0;

Template.clickButton.events({
    'click #button': function(){
    	var loggedin = document.getElementById("myCheck").checked;
		console.log("Logged in: " + loggedin);
		console.log(clicks);

		if(loggedin==true){
			clicks+=10;

		} else if(loggedin==false) {
			clicks++;
		}
    }
});

Template.clickButton.helpers({
	clicks(){
		return clicks;	
	},
});