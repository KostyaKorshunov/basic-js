import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats( matrix ) {
//  throw new NotImplementedError('Not implemented');
	let cnt = 0;
	matrix.forEach((sub_m, key, map) => {
		sub_m.forEach((vl, key, map) => {
			if(vl == '^^'){		cnt++	};
		});
	});
	console.log( "=== my = "+cnt );
	return Number(cnt);
}
