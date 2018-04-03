'use strict'
import {Kitchen,Microwave,Oven} from './kitchen.js'

microwave.switchPower()
microwave.quickCook()
oven.switchPower()
oven.slowCook()

const microwave = new Microwave(true)
const oven = new Oven(false, 'Burning')
const kitchen = new Kitchen(microwave, oven)
const kitchen2 = new Kitchen(new Microwave(false), new Oven(true))


console.log('Is the Microwave On?', kitchen.microwave.switchPower(), 'Is the Oven On?', kitchen.oven.switchPower())
console.log('The Microwave Is', kitchen.microwave.quickCook('Exploding'), '& The Oven Is', kitchen.oven.slowCook())
console.log('Kitchen2', kitchen.microwave.switchPower(), kitchen.oven.switchPower())
