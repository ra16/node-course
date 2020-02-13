var utils = require('./utils');
var notes = require('./notes');
var yargs = require('yargs');

yargs.version('1.1.0');

//add, List, read, list

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        title: {
            describe: 'Note title ',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function(){
        console.log('Reading a new note');
    }
});

yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function(){
        console.log('Listing a new note');
    }
});

yargs.parse();
