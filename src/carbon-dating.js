import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
//  throw new NotImplementedError('Not implemented');
    let out = 0;
    let x = 15.0;
    const smp = String(sampleActivity);

//      console.log( "=== my:  inp= "+sampleActivity );

    if(   ( typeof(sampleActivity) != 'string' )
      ||  ( isNaN( sampleActivity ) )
      ||  ( smp === 'undefined' )
      ||  ( smp == 'undefined' )
      ){
//      console.log( "=== 1 === "+smp );
      return false;
    }else if(
        ( !smp.match( /[.0-9]+/g ) )
      ){
//      console.log( "=== 2 === "+smp );
      return false;
    }else if(
          ( parseFloat(smp) >= 15.0 )
      ||  ( parseFloat(smp) <= 0.0 )
    ){
//      console.log( "=== 2 === "+smp );
      return false;
    }

      x = parseFloat(smp);

    const k = 0.693/HALF_LIFE_PERIOD;
    out = Math.ceil( Math.log( MODERN_ACTIVITY / x)/ k );

//    console.log( "=== my = "+out );
    return Number(out);
}
