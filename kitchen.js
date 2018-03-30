

'use strict'


class Kitchen {
    constructor(microwave, oven) {
        this.microwave = microwave
        this.oven = oven
    }
}

class Microwave {
    constructor(hasPower) {
        this.hasPower = hasPower
    }
    quickCook(setting) {
        this.nuking = setting
        return this.nuking
    }
    switchPower() {
        this.hasPower = !this.hasPower
        return this.hasPower
    }
}

class Oven {
    constructor(hasPower, burning) {
        this.hasPower = hasPower
        this.burning = burning
    }

    slowCook() {
        return this.burning
    }

    switchPower() {
        this.hasPower = !this.hasPower

        return this.hasPower
    }
}

const microwave = new Microwave(true)
const oven = new Oven(false, 'Burning')

microwave.switchPower()
microwave.quickCook()
oven.switchPower()
oven.slowCook()

console.log('Does My Microwave Have Power?', microwave.hasPower, 'Is it cooking?', microwave.quickCook('exploding'))
console.log('Does My Oven Have Power?', oven.hasPower, 'Is it Cooking?', oven.slowCook())