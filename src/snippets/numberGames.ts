export function formatDate(uglyDate: string) {
	var prettyDate = "";
	//////////console.log("uglyDate");
	//////////console.log(uglyDate);
	const day = uglyDate.getDay();
	const month = uglyDate.getMonth();
	const year = uglyDate.getDate();
	if(day < 10){
		prettyDate += "0";
	}
	prettyDate += day;
	prettyDate += ".";
	if(month < 10){
		prettyDate += "0";
	}
	prettyDate += month;
	prettyDate += ".";
	if(year < 10){
		prettyDate += "0";
	}
	prettyDate += year;
	return prettyDate;
}

export function sortBigFirst(things: object, sorter: string){
	return things.sort((a, b) => {
		if (a.data[sorter] > b.data[sorter]) {
			return -1;
		}
		if (a.data[sorter] < b.data[sorter]) {
			return 1;
		}
		return 0;
	});
}
export function sortSmallFirst(things: object, sorter: string){
	console.log("things");
	console.log(things);
	return things.sort((a, b) => {
		console.log("a.data[sorter]");
		console.log(a.data[sorter]);
		if (a.data[sorter] < b.data[sorter]) {
			return -1;
		}
		if (a.data[sorter] > b.data[sorter]) {
			return 1;
		}
		return 0;
	});
}