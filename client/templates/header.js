Template.header.helpers({
	homeActive: function() {
		if (Router.current().route._path === '/ownedMangas') {
			return 'active';
		} else {
			return false;
		}
	},
	missingActive: function() {
		if (Router.current().route._path === '/missingMangas') {
			return 'active';
		} else {
			return false;
		}
	},
	adminActive: function() {
		if (Router.current().route._path.match('admin')) {
			return 'active';
		} else {
			return false;
		}
	},
	admin: function() {
		if (Meteor.user().profile.admin) {
			return true;
		} else {
			return false;
		}
	}
});

Template.header.events({
	'click .route': function() {
		if ($('#navigation').hasClass('in')) {
			$('#navigation').removeClass('in');
		}
	},
	'click .navbar-brand': function() {
		if ($('#navigation').hasClass('in')) {
			$('#navigation').removeClass('in');
		}
	}
});
