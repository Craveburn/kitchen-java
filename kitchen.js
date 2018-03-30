

'use strict'


class Kitchen {
    constructor(microwave, oven) {
        this.microwave = microwave
        this.oven = oven
    }
}

class Microwave {
    constructor(hasPower, nuking) {
        this.hasPower = hasPower
        this.nuking = nuking
    }
    quickCook(){ 
        this.nuking = this.nuking
        return this.nuking
}
    switchPower() {
        this.hasPower = !this.hasPower
        return this.hasPower
    }
}

class Oven {
    constructor(hasPower, burning){
        this.hasPower = hasPower
        this.burning = burning
    }

    slowCook(){
        this.burning = this.burning
        return this.burning
    }

    switchPower() {
        this.hasPower = !this.hasPower

        return this.hasPower
    }
}

const microwave = new Microwave(true, 'Nuking')
const oven = new Oven(false, 'Burning')

microwave.switchPower()
microwave.quickCook()
oven.switchPower()
oven.slowCook()

console.log('Does My Microwave Have Power?', microwave.hasPower, 'Is it cooking?', microwave.quickCook())
console.log('Does My Oven Have Power?', oven.hasPower, 'Is it Cooking?', oven.slowCook())