// main functionality offered by this code is to convert between frequencies and musical notes. 

let osc, playing, freq, amp;

// function noteToFreq(note) {
//   const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
//   const octave = parseInt(note.slice(-1), 10);
//   const key = note.slice(0, -1);

//   let index = notes.indexOf(key);
//   if (index < 0) {
//     throw new Error(`Invalid note: ${key}`);
//   }

//   // Calculate the number of cents above A4
//   let centsAboveA4 = (octave - 4) * 1200 + index * 100;
//   // Calculate the frequency
//   let freq = 440 * Math.pow(2, centsAboveA4 / 1200);

//   return freq;
// }

//cents is a unit of measure used to compare musical intervals. - jiaz
function findNearestNote(freq) {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  // Calculate the number of octaves above A4
  let octavesAboveA4 = Math.log2(freq / 440);
  // Calculate the number of cents above A4
  let centsAboveA4 = Math.round(1200 * octavesAboveA4);
  // Calculate the number of cents above the nearest note
  let centsOff = centsAboveA4 % 100;
  // If the frequency is more than 50 cents above the nearest note,
  // round down to the nearest note
  if (centsOff > 50) {
    centsOff -= 100;
  }
  // Calculate the index of the nearest note
  let index = Math.floor(centsAboveA4 / 100);
  // If the index is negative, add 1200 to bring it into the range [0, 1199]
  if (index < 0) {
    index += 1200;
  }
  index = index % 12;

  return notes[index] + (Math.floor(centsAboveA4 / 1200)+5);
}


function freqToCents(freq) {
  return Math.floor(1200 * Math.log2(freq / 440));
}

function freqToNote(freq) {
  return 440 * Math.pow(2, (freq - 49) / 12);
}
