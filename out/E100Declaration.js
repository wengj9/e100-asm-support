"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class E100DefinitionProvider {
    provideDefinition(document, position, token) {
        return new Promise((resolve, reject) => {
            let range = document.getWordRangeAtPosition(position);
            let symbol = document.getText(range);
            // console.log(symbol);
            if (false) { // symbol === "add") {
                // console.log("ayay");
                let pos = new vscode.Position(position.line, 5);
                resolve(new vscode.Location(document.uri, pos));
            }
            else {
                reject(null);
            }
        });
    }
}
exports.E100DefinitionProvider = E100DefinitionProvider;
//# sourceMappingURL=E100Declaration.js.map