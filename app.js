const read = require('./read.js')
const add = require('./add.js')
const write = require('./write.js')
const update = require('./update.js')
const del = require('./del.js')
const present = require('./present.js')

const data = process.argv
var note = {}


if (data[2]=='add'){
    note = {
        "id":data[3],
        "title":data[4],
        "body":data[5]
    }
    var oldNote = read()
    add(note, oldNote)
}
if(data[2] == 'read'){
    present(read())
}
if(data[2] == "delete"){
    let id = data[3]
    let oldNote = read()
    let del = require('./del')
    del(id, oldNote);
    console.log(read());
}
if(data[2] == "update"){
    const note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
    const oldNote=read()
    update(note, oldNote)
    present(read())
}