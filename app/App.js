// import { ValuesController } from "./Controllers/ValuesController.js";
import { SnacksController } from "./Controllers/SnacksController.js"
import { MoneyController } from "./Controllers/MoneyController.js"

class App {
  // valuesController = new ValuesController();
  snacksController = new SnacksController()
  moneyController = new MoneyController()
}

window["app"] = new App();
