export const aosDurBase = 200;
export const aosDurOff = 300;
export const aosDurDec = 200;

export const aosDelBase = 0;
export const aosDelOff = 10;
export const aosDelDec = 50;

export function aosDuration(q: number ) {
	var newDuration = aosDurBase + (q * aosDurDec);
	return newDuration;
}
export function aosDelay(q: number ) {
	var newDelay = aosDelBase + (q * aosDelDec);
	return newDelay;
}