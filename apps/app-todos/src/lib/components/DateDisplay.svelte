<script>
	export let date = new Date();

	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	function formatCustomDate(date) {
		let weekday = weekdays[date.getDay()];
		let day = date.getDate();
		let month = months[date.getMonth()];
		return `${weekday}, ${month} ${day} `;
	}

	let formattedDate = formatCustomDate(date);
	let formattedMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
</script>

<div class="flex flex-col items-center space-y-1 py-8 border-b-4 border-slate-100">
	<h1 class="text-4xl font-bold text-gray-500">{formattedMonth}</h1>
	<h2 class="text-base font-bold text-indigo-300">{formattedDate}</h2>
</div>
