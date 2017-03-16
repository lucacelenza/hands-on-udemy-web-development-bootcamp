var events = document.querySelectorAll(".wiki-column tbody td:nth-of-type(1) code a");
var eventNames = [];

for (var i = 0; i < events.length; i++) {
	if (eventNames.indexOf(events[i].textContent) === -1) {
		eventNames.push(events[i].textContent);
    }
}

console.log(eventNames.length);