var $ = require('jquery');
//var Person = require('./modules/Person');

import Person from './modules/person';

class Adult extends Person{
    payTaxes() {
        console.log(this.name + "now owes $0 in taxes.");
    }
}

alert("Testing ABC 123 ");

var john = new Person("John Doe","Green ");
john.greet();

var jane = new Adult("jane Smith" , "black");
jane.greet();
jane.payTaxes();
