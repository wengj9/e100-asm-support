"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const E100Opcodes_1 = require("./E100Opcodes");
class E100HoverProvider {
    provideHover(document, position, token) {
        let range = document.getWordRangeAtPosition(position);
        let symbol = document.getText(range);
        return new vscode.Hover(E100Opcodes_1.hoverString(E100Opcodes_1.OPCODES[symbol]));
    }
}
exports.E100HoverProvider = E100HoverProvider;
//# sourceMappingURL=hoverInfo.js.map