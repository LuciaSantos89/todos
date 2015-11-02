Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() {
        return [
            Meteor.subscribe('Lists')
        ];
    }
});

//Router.onBeforeAction('loading', {except: ['join', 'signin']});

Router.route('/', {
    data: function() {
        return {
            user: Meteor.user(),
            lists: Lists.find({}, {
                sort: {
                    _id: 1
                }
            })
        };
    },
    onBeforeAction: function() {
        var currentUser = Meteor.user();
        if (currentUser) {
            this.next();
        } else {
            this.render("login");
        }
    },
    action: function() {
        this.render('home');
    }
});

Router.route('register', {
    onBeforeAction: function() {
        var currentUser = Meteor.user();
        if (!currentUser) {
            this.next();
        } else {
            Router.go('/');
        }
    }
});

Router.route('list', {
    template: 'list',
    data: {
        user: function() {
            return Meteor.user();
        }
    }
});

Router.route('list/:_id', {
    template: 'listItems',
    data: {
        user: function() {
            return Meteor.user()
        },
        list: function() {
            return list;
        }
    },
    onBeforeAction: function() {
        var idList = String(this.params._id);
        list = Lists.findOne({
            _id: idList
        });
        if (list) {
            this.next();
        } else {
            Router.go('/');
        };
    }
});

/*if (this.ready()) {
    this.render();
  } else {
    this.render('Loading');
  }*/