import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
//  throw new NotImplementedError('Not implemented');
/*      if (Object.prototype.toString.call(date) === "[object Date]") {
            return false;
        if (isNaN(date.getTime())) {  // d.valueOf() could also work
            return false;
        } else {
            //Ok!
        }
      } else {
            return false;
      } */
      if( date == null || date === undefined ){
        return "Unable to determine the time of year!";
      }
      if( !isValidDate( date ) ){
           throw Error( "Invalid date!" );
           return "Invalid date!";
      }

    let mn = date.getMonth();
    let seas = "";
    if(
        mn == 0 || 
        mn == 1 || 
        mn == 11 
    ){
        seas = "winter";

    }else if(
        mn == 2 || 
        mn == 3 || 
        mn == 4 
    ){
        seas = "spring";

      }else if(
        mn == 5 || 
        mn == 6 || 
        mn == 7 
      ){
          seas = "summer";
  
      }else if(
        mn == 8 || 
        mn == 9 || 
        mn == 10 
      ){
          seas = "fall";
    
    }
  
    return seas;
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}