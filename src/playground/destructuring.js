import { maxHeaderSize } from "http";

const book = {
    title: 'EGO is the enemy',
    author: 'ryan holiday',
    publisher: {
        name: 'peguin',
        date: "10月10日"
    }
};

const { name: firstname =  "self_published", date = "3月9日"} = book.publisher
console.log(firstname);


const address = ['1299 s jjj street', 'tokyo', 'yokohama', '12222'];

const [, , , ,state = "new"] = address;

console.log((` you are in ${state}`))

const item = ['coffee(hot)', '$2.00', '$2.50', '$2.50']

const [name, , msize = "3333", ] = item

console.log(` A medium ${name} costs ${msize}`)