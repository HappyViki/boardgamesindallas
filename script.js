$(document).ready(function () {

	const t = new Date()
	const firstDay = new Date(t.setDate(1))

	const today = new Date
	const todayNum = today.getDate() + firstDay.getDay() - 1
	let dateNum = 0

	const loadModal = (event) => {
		$('.modal-content').html(modalTemp(event))

		$('.modal').modal('show')

		$(".close").click(() => {
			$('.modal').modal('hide')
		})
	}

	$("#calHead").html($.map(daysOfWeek, day => `<th class="text-uppercase">${day}</th>`))

	$("#calBody").html($.map([1, 2, 3, 4, 5, 6], (weekNum) => '<tr>' + $.map(
		daysOfWeek, (day) => `<td class="cal-date cal-date-${dateNum++} cal-day-${day} cal-week-${weekNum}"></td>`
	) + '</tr>'))

	events.forEach(
		(event) => event.weekNums.forEach(
			week => $(`#calBody .cal-day-${event.day}.cal-week-${week}`).append(tagTemp(event))
		)
	)

	$(`#calBody .cal-date-${todayNum}`).addClass("table-dark").prepend("<h4>Today</h4>")
	$(`#calBody .cal-date-${todayNum + 1}`).addClass("table-dark").prepend("<h4>Tomorrow</h4>")

	$(".event-button").click(
		(button) => {
			const id = button.target.id.slice(5)
			loadModal(events[id])
		}
	)

})