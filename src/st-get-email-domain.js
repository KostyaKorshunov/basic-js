import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain( email ) {
//  throw new NotImplementedError('Not implemented');
    if( email.indexOf('@') >= 0 ){
      let out = email.split("@");
      return out[ out.length - 1 ];
    }else{
      return "";
    }
}
