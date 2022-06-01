





const args = process.argv.slice(2)
for (let x = 0; x < args.length; x++) {
  let pigLatin = []
  for (let y = 1; y < args[x].length; y++) {
    pigLatin.push(args[x][y])
  }
  pigLatin.push(args[x][0] + "ay")
  console.log(pigLatin.join(""))
}


// var originalWords = process.argv.slice(2);
// var pigLatinWords = [];

// for (var i = 0; i < originalWords.length; i++) {
//   pigLatinWords.push(translateToPigLatin(originalWords[i]));
// }

// console.log(pigLatinWords.join(' '));

// function translateToPigLatin(word) {
//   return word.slice(1, word.length) + word[0] + "ay";
// }