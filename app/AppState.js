import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  /** @type {import('./Models/Snack.js').Snack[]} */
  
  snacks = [
    new Snack({ name: 'Snickers', price: 2.50, image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Snickers-broken.png'}),
    new Snack({ name: 'Twix', price: 3.00, image: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Twix-Wrapper-Small.jpg'}),
    new Snack({ name: 'Kit Kat', price: 2.00, image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KitKat.jpg'})
  ]
  
  activeSnack = null
  
  money = 0

  
  mySnacks = loadState('snackCollection', [Snack])
}




export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
