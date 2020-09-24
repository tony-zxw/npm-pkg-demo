'use strict'
class Demo {
    constructor() {
        console.log(arguments[0]);
        this.name = arguments[0] || 'demo';
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
}

module.exports = Demo;