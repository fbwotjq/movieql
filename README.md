# personql
Person api with graphql

## command
 - make project => mkdir movieql && cd movieql/ && yarn init && code . && git init 
 - add github repo => git remote add origin https://github.com/fbwotjq/movieql
 - sync repo => git pull origin master
 - install graphql-yoga server => yarn add graphql-yoga
 - for dev => yarn global add nodemon
 - wanna use es6, but fail => yarn add babel-node --dev ==> npm install -g babel-cli
 - so install babel for backend dev => yarn global add babel-cli --ignore-engines 
 - install babel => yarn add babel-node --dev
 - install babel => yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev

 ## example graph query
 ### select all list
 ```
 query {
    people {
        name,
        age,
        gender,
        id
    }
 }
 ```

 ### select one
 ```
 {
    person(id:4) {
        name
    }
 }
 ```

 ### add one
 ```
 mutation {
    addPerson(name:"ja1", age:10, gender:"male") {
        name,
        age,
        gender
    }
 }
 ```

 ### remove one
 ```
 mutation {
    removePerson(id: 1)
 }
 ```