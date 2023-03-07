import { appState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";
import { setText } from "../Utils/Writer.js";

function _drawMoney() {
    console.log('money draw');
}

export class MoneyController {
    constructor() {
        console.log('money controller');
    }
}