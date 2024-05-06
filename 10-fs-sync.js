// Fs module
// create first.txt and second.txt under folder, content, and write some text in them.

const {readFileSync, writeFileSync} = require('fs')

console.log('Start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    `./content/result-sync.txt`, 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
    // {flag: 'a'} is to write content after the original content in the file.

)
console.log('Done with the task')
console.log('Start the next one')
console.log(first, second)