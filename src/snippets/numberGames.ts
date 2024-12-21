export function formatDate(uglyDate: string) {
	var prettyDate = "";
	prettyDate += uglyDate.substring(8, 10);
	prettyDate += ".";
	prettyDate += uglyDate.substring(5, 7);
	prettyDate += ".";
	prettyDate += uglyDate.substring(0, 4);
	return prettyDate;
}