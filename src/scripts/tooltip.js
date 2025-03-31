import {
	computePosition,
	flip,
	shift,
	offset,
	arrow,
} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.13/+esm';

const toolTipTool = document.querySelectorAll('.toolTipTool');
const toolTipTip = document.querySelectorAll('.toolTipTip');
const arrowElement = document.querySelectorAll('.toolTipArrow');

//////////console.log.log("toolTipTool");
//////////console.log.log(toolTipTool);
//////////console.log.log("toolTipTool[0]");
//////////console.log.log(toolTipTool[0]);
//////////console.log.log("toolTipTool.length");
//////////console.log.log(toolTipTool.length);


for(let i = 0; i < toolTipTool.length; i++){
	//////////console.log.log("i");
	//////////console.log.log(i);
	function update() {
		computePosition(toolTipTool[i], toolTipTip[i], {
			placement: 'top',
			middleware: [
				offset(6),
				flip(),
				shift({padding: 5}),
				arrow({element: arrowElement[i]}),
			],
		}).then(({x, y, placement, middlewareData}) => {
			//////////console.log.log("placement");
			//////////console.log.log(placement);
			//////////console.log.log("placement");
			//////////console.log.log(placement);

			Object.assign(toolTipTip[i].style, {
				left: `${x}px`,
				top: `${y}px`,
			});
			
			// Accessing the data
			const {x: arrowX, y: arrowY} = middlewareData.arrow;
			
			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right',
			}[placement.split('-')];

			//////////console.log.log("staticSide");
			//////////console.log.log(staticSide);
			
			Object.assign(arrowElement[i].style, {
				left: arrowX != null ? `${arrowX}px` : '',
				top: arrowY != null ? `${arrowY}px` : '',
				right: '',
				bottom: '',
				[staticSide]: '-4.3px',
			});
		});
	}

	function showTooltip() {
		toolTipTip[i].style.display = 'block';
		update();
	}

	function hideTooltip() {
		toolTipTip[i].style.display = '';
	}

	[
		['mouseenter', showTooltip],
		['mouseleave', hideTooltip],
		['focus', showTooltip],
		['blur', hideTooltip],
	].forEach(([event, listener]) => {
		toolTipTool[i].addEventListener(event, listener);
	});
}