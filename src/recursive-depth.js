import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth( arr ) {
//    throw new NotImplementedError('Not implemented');
      let out = 0;
      //  out = getArrayDepth( arr );
        out = getDepth( arr );
      //  out = arr.glubina;
      return out;
  }
}

function getArrayDepth(obj) {
  if (Array.isArray(obj)) return 1 + Math.max(...obj.map(t => getArrayDepth(t)))
  else return 0
}
function getDepth( arr ){
  let counter=0;
  let s=[...JSON.stringify(arr)].filter(i=>(i=="[" || i=="]")).join("");
  while( s.length != 0 ){
      s = s.replace(/\[\]/g, "");
      counter++
  }
  return counter;
}