import { appState } from "../AppState.js";

class MoneyService {
    addMoney() {
        appState.money++
        console.log(appState.money);
    }
}

export const moneyService = new MoneyService()