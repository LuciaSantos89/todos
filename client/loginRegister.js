Template.login.events({
    'click .register': function(event) {
        Router.go("register");
    },
    'submit form': function(event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        //Meteor.call('loginUsers',email, password);

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                console.log(error.reason); // Output error if registration fails
            } else {
                Router.go("/"); // Redirect user if registration succeeds
            }
        });
    }
});
Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        user = {
            username: event.target.username.value,
            password: event.target.password.value,
            email: event.target.email.value
        };
        //Meteor.call('registerUsers', user);
        Accounts.createUser(user, function(error) {
            if (error) {
                console.log(error.reason); // Output error if registration fails
            } else {
                Router.go("/"); // Redirect user if registration succeeds
            }
        });
    }
});

Template.layout.events({
	'click .logout':function(event){
		Meteor.logout();
	}
});