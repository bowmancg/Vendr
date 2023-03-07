import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js"
import { setHTML } from "../Utils/Writer.js"

function _drawSnacks() {
    let snack = appState.activeSnack
    setHTML('active', snack.ActiveTemplate)
}

function _drawActive() {
    let snack = appState.activeSnack
    setHTML('active', snack.ActiveTemplate)
}

function _drawMySnacks() {
    let mySnacks = appState.mySnacks
    let template = ''
    mySnacks.forEach(s => template += s.ListTemplate)
    setHTML('mySnacks', template)
}

export class SnacksController {
    constructor() {
        console.log('snacks controller');
        _drawMySnacks()
        _drawSnacks()
        appState.on('activeSnacks', _drawActive)
        appState.on('mySnacks', _drawMySnacks)
    }

    setActive(snackName) {
        snacksService.setActive(snackName)
    }

    dispenseSnacks() {
        console.log('snack');
        snacksService.dispenseSnack()
    }
}