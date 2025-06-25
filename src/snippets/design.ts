export function lineSet( nLines: number, baseRem: number, incIncDecimal:number, startWith:string, spacingRem:number ) {
	var totalHeightN = 0; //in rem
	var heightOfLinesRem = [];

	for(let i = 0; i < nLines; i++){
	if(i != 0){
		totalHeightN = totalHeightN + spacingRem;
	}
	var heightOfLine: number = +(baseRem * ((1 + incIncDecimal)**i)).toFixed(1);
	//console.log("baseRem: " + baseRem + ", 1 + incIncDecimal: " + (1 + incIncDecimal) + ", height of line n: " + i + ": " + heightOfLine);
	heightOfLinesRem.push(heightOfLine);
	totalHeightN = totalHeightN + heightOfLine;
	}

	var heightOfLinesRemOrdered = [];

	if(startWith == "l"){
	heightOfLinesRemOrdered = heightOfLinesRem.reverse();
	}else{
	heightOfLinesRemOrdered = heightOfLinesRem;
	}

	var heightOfLinesPerc: Array<string> = [];

	heightOfLinesRem.forEach(heightRem => {
	const perc = (heightRem / totalHeightN * 100).toFixed(1);
	const percString = perc + "%";
	heightOfLinesPerc.push(percString);
	});

	const totalHeight = totalHeightN + "rem";
	return {totalHeight:totalHeight, heightOfLinesPerc:heightOfLinesPerc};
}