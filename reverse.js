const args = process.argv.slice(2)
for (let x = 0; x < args.length; x++) {
  let reverse = []
  for (let y = args[x].length; y >= 0 ; y--) {
    reverse.push(args[x][y])
  }
  console.log(reverse.join(""))
}

module.exports = reverse
