

// generate name, get lenght and inform size object
function createName(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// receive groups generated and make sure at least one of each letter will appear
let aux = []
function createGroup() {
    let specialChar = 'xyz'
    let groupGen = specialChar.charAt([Math.floor(Math.random() * 3)])
  
    if (!aux.includes(groupGen)) {
        aux.push(groupGen)
        return groupGen
    }

    //if group created exist already and lenght is less then 3 (xyz) call the function again and return all groups generated to other random cases
    if (aux.length < 3) {
        return createGroup()         
    } 
    else {
        return groupGen
    }
}

let listOfObj = []
// loop to create the objects
for (let i = 0; i < 50; i++) {
    let obj = {
        name: createName(6),
        group: createGroup(),
        id: i
    }
    listOfObj.push(obj)
}