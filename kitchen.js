

'use strict'


class Kitchen {
    constructor(microwave, oven) {
        this.microwave = microwave
        this.oven = oven
    }
}

class Appliance {
    constructor(hasPower){
        this.hasPower = hasPower
    }
    switchPower(){
        this.hasPower = !this.hasPower
        return this.hasPower 
    }
}

class Microwave extends Appliance {
    constructor(hasPower) {
        super(hasPower)
        // this.hasPower = hasPower
    }
    quickCook(setting) {
        this.nuking = setting
        return this.nuking
    }
    // switchPower() {
    //     this.hasPower = !this.hasPower
    //     return this.hasPower
    // }
}

class Oven extends Appliance {
    constructor(hasPower, burning) {
        super(hasPower)
        // this.hasPower = hasPower
        this.burning = burning
    }

    slowCook() {
        return this.burning
    }

    // switchPower() {
    //     this.hasPower = !this.hasPower

    //     return this.hasPower
    // }
}

const microwave = new Microwave(true)
const oven = new Oven(false, 'Burning')
const kitchen = new Kitchen(microwave,oven)
const kitchen2 = new Kitchen (new Microwave(false),new Oven(true))

microwave.switchPower()
microwave.quickCook()
oven.switchPower()
oven.slowCook()

console.log('Is the Microwave On?', kitchen.microwave.switchPower(),'Is the Oven On?', kitchen.oven.switchPower())
console.log('The Microwave Is',kitchen.microwave.quickCook('Exploding'),'& The Oven Is', kitchen.oven.slowCook())
console.log('Kitchen2', kitchen.microwave.switchPower(), kitchen.oven.switchPower())
