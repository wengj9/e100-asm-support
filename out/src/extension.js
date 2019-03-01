'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const E100Declaration_1 = require("./E100Declaration");
// import { E100Formatter } from './E100Format';
const hoverInfo_1 = require("./hoverInfo");
const E100_MODE = {
    language: 'easm',
    scheme: 'file'
};
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // set variables for providers
    let hoverprovider = vscode.languages.registerHoverProvider(E100_MODE, new hoverInfo_1.E100HoverProvider());
    // let formatter = vscode.languages.registerDocumentFormattingEditProvider(E100_MODE, new E100Formatter());
    // let formatter2 = vscode.languages.registerDocumentRangeFormattingEditProvider(E100_MODE, new E100Formatter());
    let defProvider = vscode.languages.registerDefinitionProvider(E100_MODE, new E100Declaration_1.E100DefinitionProvider());
    // register them
    // context.subscriptions.push(formatter);
    // context.subscriptions.push(formatter2);
    context.subscriptions.push(hoverprovider);
    context.subscriptions.push(defProvider);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map