const jaco = {
    id: 1,
    name: "jaco.ryu",
    age: 34,
    gender: "man"
}
const people = [
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

const resolvers = {
    Query: {
        people: () => people,
        //person: (_, args) => args.id ~~
        person: (_, {id}) => getById(id)
    }
}

export default resolvers