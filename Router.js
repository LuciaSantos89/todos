Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    template: 'home',
    data:function(){
    	console.log("hola");
    	return Meteor.user();
    },
    onBeforeAction: function() {
        var currentUser = Meteor.user();
        if (currentUser) {
            this.next();
        } else {
            this.render("login");
        }
    }
});

Router.route('register',{
	onBeforeAction: function() {
        var currentUser = Meteor.user();
        if (!currentUser) {
            this.next();
        } else {
            Router.go('/');
        }
    }
});

/*if (this.ready()) {
    this.render();
  } else {
    this.render('Loading');
  }*/