import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
//  throw new NotImplementedError('Not implemented');
    if( !Array.isArray(arr) ) throw Error("'arr' parameter must be an instance of the Array!");
    let out = [];
    let chk = true;
    arr.forEach( (el, ky) => {

        if(       el == "--discard-next" ){
            chk = false;

        }else if( el == "--discard-prev" ){
            out.pop();

        }else if( el == "--double-next" ){
            out.push( arr[ky + 1] );

        }else if( el == "--double-prev" ){
            out.push( arr[ky - 1] );

        }
        if( chk ){
          out.push( el );
        }else{
          chk = true;
        }
    });

    return out;
}
