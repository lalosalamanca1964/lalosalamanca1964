// const queryStr = 'name=Dom&age=45&occupation=Software+Developer'
const usp = new URLSearchParams(JBVinfo)

const myName = usp.get('name') 
console.log(`Value for 'name': ${myName}`)

for (const [key, value] of usp) {
    console.log(`${key} => ${value}`)
}

console.log(usp.toString())
