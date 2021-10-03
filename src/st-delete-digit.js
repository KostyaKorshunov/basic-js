import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
//  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = ""+n;
  let maxN = 0;
//    let out = 0;
  for( let i = 0; i < str.length; i++){
    let sub = sst(str, i);
    let cnum = Number(sub);
    if( cnum > maxN ){
      maxN = cnum;
    }
      console.log("=== "+i+" === "+sub );
  }

  return maxN;
}
function sst(str, ind){
  if( str === '' )  return "";
  if( ind == 0) return str.substring(1);
  if( str.length-1 > ind ) return (str.substring( 0, ind )+str.substring( ind+1 ));
  return str.slice(0, -1);
}