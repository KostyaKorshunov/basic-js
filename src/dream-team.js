import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
//  throw new NotImplementedError('Not implemented');
  let out = "";
    
    if( !Array.isArray( members ) ){
      return false;
    }
    members.forEach(el => {
        if(     el != null
            &&  typeof( el ) == 'string' 
          //  &&  chkUpper(el) 
          ){
          let el_t = el.trim();
          out += el_t.charAt(0);
        }
    });
  //==================
  //  out = sortStr(out).toUpperCase();
  //  let ot = out.toUpperCase();
  out = sortStr(out.toUpperCase());
  //==================
  console.log( "=== my = "+out );
  //==================
  return out;
}
function chkUpper(word){
    return word.charAt(0) === word.charAt(0).toUpperCase();
}
function sortStr(text) {
  return text.split('').sort().join('');
};