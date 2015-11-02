Meteor.publish('Lists', function() {
    var currentUserId = this.userId;
    return Lists.find({
        createdBy: currentUserId
    })
});

Meteor.methods({
    'insertList': function(list) {
        var idList = Lists.insert(list);
        return idList;
    },
    'insertItem': function(idList, item) {
        Lists.update({
            _id: idList
        }, {
           $addToSet:{ items: item}
        });
    }
});