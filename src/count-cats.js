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
  throw new NotImplementedError('Not implemented');
	let cnt = 0
	matrix.Map((sub_m, key, map) => {
		sub_m.Map((val, key, map) => {
			if(val === '^^'){	
				cnt++
				}
		});
	});
	console.log( "=== my = "+cnt )
	return cnt;
}