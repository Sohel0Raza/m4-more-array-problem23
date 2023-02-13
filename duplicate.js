function removeDuplicate (names){
    let unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i]
        if(unique.includes(name) === false){
            unique.push(name)
        }
    }
    return unique;
}
const names = ['abul', 'babul', 'cabul', 'dabul', 'babul', 'ebul', 'gabul', 'abul', 'cabul', 
'kabul', 'tabul', 'sabul', 'ebul', 'dabul', 'abul', 'tabul']
const uniqueNames = removeDuplicate(names)
console.log(uniqueNames)