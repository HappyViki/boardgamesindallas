$(document).ready(function () {

	const today = new Date
	const todayNum = today.getDate() + today.getDay()
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
		daysOfWeek, (day, iDay) => {
			dateNum++


			const isToday = (todayNum) === dateNum
			const isTomorrow = (todayNum + 1) === dateNum

			return `<td class="${isToday || isTomorrow ? "table-dark" : "table-white"}"><div>${isToday ? "Today" : ""}${isTomorrow ? "Tomorrow" : ""}</div>` + $.map(
				eventsByDay[day], event => {
					return event.weekNum.includes(weekNum) ? tagTemp(event) : ""
				}
			).join('') + '</td>'
		}
	) + '</tr>'))

	$(".event-button").click(
		(button) => {
			const id = button.target.id.slice(5)
			loadModal(events[id])
		}
	)

})