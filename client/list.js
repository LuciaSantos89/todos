Template.list.events({
    'submit form': function(event) {
        event.preventDefault();
        name = event.target.date.value;
        day = DAYS_LABELS[new Date(name.replace(/-/g, '/')).getDay()];
        list = {
            _id: name,
            day: day,
            createdBy: Meteor.userId()
        };
        Meteor.call('insertList', list, function(err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
                Router.go('list/' + res);
            }
        });
    }
});

Template.listItems.events({
    'submit form': function(event) {
        event.preventDefault();
        itemName = event.target.item.value;
        item = {
            itemName: itemName
        };
        Meteor.call('insertItem', list._id, item);
    }
});