import { appState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";
import { setText } from "../Utils/Writer.js";

function _drawMoney() {
    console.log('money draw');
    let template = ''
    for (let i = 0; i < appState.money; i++) {
        template += 1
    }
    setText('money', template)
}

export class MoneyController {
    constructor() {
        console.log('money controller');
        appState.on('money', _drawMoney)
    }

    addMoney() {
        console.log('added dollar');
        moneyService.addMoney()
    }
}