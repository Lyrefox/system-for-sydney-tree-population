const content = document.getElementById('content')

const area = 8172

const width = parseFloat(Math.sqrt(area)).toFixed(4)
console.log(width)
const spacing = 5 / 1000
console.log(spacing)

const num = Math.floor(width /  spacing + 1)
console.log(num)
const answer = Math.pow(num,2)
console.log(answer)

content.innerHTML = answer