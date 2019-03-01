"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const lc2kOpcodes_1 = require("./lc2kOpcodes");
class Lc2kHoverProvider {
    provideHover(document, position, token) {
        let range = document.getWordRangeAtPosition(position);
        let symbol = document.getText(range);
        if (symbol === "fill") {
            return new vscode.Hover(".fill isnt an opcode. It just puts whatever's to the right into the machine code.");
        }
        else if (lc2kOpcodes_1.OPCODES.hasOwnProperty(symbol)) {
            return new vscode.Hover(lc2kOpcodes_1.hoverString(lc2kOpcodes_1.OPCODES[symbol]));
        }
    }
}
exports.Lc2kHoverProvider = Lc2kHoverProvider;
//# sourceMappingURL=hoverInfo.js.map