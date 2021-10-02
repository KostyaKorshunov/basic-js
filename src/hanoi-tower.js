import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 * 
 * 2^n - 1 = steps
 *
 */
export default function calculateHanoi( disksNumber, turnsSpeed ) {
//  throw new NotImplementedError('Not implemented');
    let steps = Math.pow( 2, disksNumber ) - 1;
    let tme = Math.floor( ( steps / turnsSpeed ) * 3600 );

    const out = {
        turns: steps
      , seconds: tme
    };


    return out;
}
