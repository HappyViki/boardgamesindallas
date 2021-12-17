const tagTemp = (event) => {
    return `<div class="margin-10px-bottom font-size14">${event.time}</div><button id="event${event.id}" class="event-button bg-${cityColors[event.city]} border-0 padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">${event.city}</button>`
}

const modalTemp = (event) => {
    const mapsLink = "https://www.google.com/maps/place/" + event.address.replace(" ", "+")

    return `<div class="modal-header">
			<h5 class="modal-title">Board games at ${event.location}</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">×</span>
			</button>
		</div>
		<div class="modal-body">
			<div><b>Group:</b> ${event.groupName}</div>
			<div><b>Time:</b> ${event.time}</div>
			<div><b>Address:</b><br/>${event.address ? event.address : "Check event page"}</div>
		</div>
		<div class="modal-footer">
			<a class="btn btn-danger" href="${event.groupLink}events/">Double check events page</a>
			${event.address ? `<a class="btn btn-primary" href="${mapsLink}">Get directions!</a>` : ""}
		</div>`
}