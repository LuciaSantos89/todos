DAYS_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

MONTHS_LABELS = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

Template.registerHelper('formatDate', function(date) {
	formatedDate = date.getDate()+" "+DAYS_LABELS[date.getDay()] +","+ MONTHS_LABELS[date.getMonth()]+" "+date.getFullYear()
  	return formatedDate;
});