import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";

class SnacksService {

    setActive(snackName) {
        let foundSnack = appState.snacks.find(s => s.name == snackName)
        console.log(foundSnack);
        appState.activeSnack = foundSnack
    }

    dispenseSnack() {
        if (appState.money > 0) {
            appState.money--
            let randomIndex = Math.floor(Math.random() * appState.snacks.length)
            let randomSnack = appState.snacks[randomIndex]
            console.log(randomSnack);
            appState.activeSnack = randomSnack
            appState.mySnacks.push(randomSnack)
            saveState('snackInventory', appState.mySnacks)
            appState.emit('mySnacks')
        } else {
            window.alert("Insufficient funds")
        }
    }

}

export const snacksService = new SnacksService()