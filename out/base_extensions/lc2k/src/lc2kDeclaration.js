"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class Lc2kDefinitionProvider {
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
exports.Lc2kDefinitionProvider = Lc2kDefinitionProvider;
//# sourceMappingURL=lc2kDeclaration.js.map