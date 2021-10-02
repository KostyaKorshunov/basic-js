import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 * 
 */

export default function repeater( str, options ) {
//  throw new NotImplementedError('Not implemented');
    let out = "";

    if( str === null ){
      str = "null";
    }

    let rep = (  (options.repeatTimes != undefined)
              && (!isNaN(options.repeatTimes))  ) ?  1*options.repeatTimes : 1;

    let sep = (  (options.separator != undefined)
              && (options.separator.length > 0) ) ? String(options.separator) : "+";

    let add_str = (  options.addition != undefined
                  && options.addition.length > 0) ? String(options.addition) : "";
        if( options.addition === null ){
            add_str = "null";
        }else if(   options.addition == undefined ){
            add_str = "";
        }else if(   
              typeof( options.addition ) == 'object' 
          ||  typeof( options.addition ) == 'boolean' 
          ){
            add_str = ""+options.addition;
        }

    let add_rep = (  options.additionRepeatTimes != undefined
                  && !isNaN(options.additionRepeatTimes) ) ? 1*options.additionRepeatTimes: 1;

    let add_sep = (options.additionSeparator != undefined) ? String(options.additionSeparator) : "|";
  //======================
    for(let i = 1; i <= rep; i++){
      if(out.length > 0){   out += sep;    }
      out += str;

        //+++
        let c_add_str = "";
        if( add_str.length > 0 && add_rep > 0 ){
        for(let j = 1; j <= add_rep; j++){
          if(c_add_str.length > 0){   c_add_str += add_sep;    }
            c_add_str += add_str;
        } }
        //+++

      out += c_add_str;
    }
  //======================
  return out;
}
