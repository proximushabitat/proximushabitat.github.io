export function formatDate(uglyDate: string) {
	var prettyDate = "";
	////////////////console.log.log("uglyDate");
	////////////////console.log.log(uglyDate);
	const day = uglyDate.getDate();
	const month = uglyDate.getMonth()+1;
	const year = uglyDate.getFullYear();
	////console.log.log("day");
	////console.log.log(day);
	////console.log.log("month");
	////console.log.log(month);
	////console.log.log("year");
	////console.log.log(year);

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
	//////////////////console.log.log("things");
	//////////////////console.log.log(things);
	return things.sort((a, b) => {
		//////////////////console.log.log("a.data[sorter]");
		//////////////////console.log.log(a.data[sorter]);
		if (a.data[sorter] < b.data[sorter]) {
			return -1;
		}
		if (a.data[sorter] > b.data[sorter]) {
			return 1;
		}
		return 0;
	});
}