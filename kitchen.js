

'use strict'


class Kitchen {
    constructor(microwave, oven) {
        this.microwave = microwave
        this.oven = oven
    }
}

class Appliance {
    constructor(hasPower) {
        this.hasPower = hasPower
    }
    switchPower() {
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

export { Kitchen, Microwave, Oven}