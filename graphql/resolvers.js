const jaco = {
    id: 1,
    name: "jaco.ryu",
    age: 34,
    gender: "man"
}
let people = [
    jaco,
    {
        id: 2,
        name: "jaco.ryu1",
        age: 35,
        gender: "man"
    },
    {
        id: 3,
        name: "jaco.ryu2",
        age: 36 ,
        gender: "man"
    }   
]

const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0]
}

const addPerson = (name, age, gender) => {
    const person = {
        name, 
        age, 
        gender,
        id: people.length + 1
    }
    people.push(person)
    return person
}

const removePerson = id => {
    try {
        const idx = people.findIndex(person => id === person.id)
        const person = people[idx]
        people.splice(idx, 1)
        return true
    } catch(e) {
        console.log(e)
        return false
    } 
}

const resolvers = {
    Query: {
        people: () => people,
        //person: (_, args) => args.id ~~
        person: (_, {id}) => getById(id)
    },
    Mutation: {
        addPerson: (_, {name, age, gender}) => addPerson(name, age, gender),
        removePerson: (_, {id}) => removePerson(id)
    }
}

export default resolvers