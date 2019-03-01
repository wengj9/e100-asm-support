'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const lc2kDeclaration_1 = require("./lc2kDeclaration");
const lc2kFormat_1 = require("./lc2kFormat");
const hoverInfo_1 = require("./hoverInfo");
const LC2K_MODE = {
    language: 'lc2k',
    scheme: 'file'
};
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // set variables for providers
    let hoverprovider = vscode.languages.registerHoverProvider(LC2K_MODE, new hoverInfo_1.Lc2kHoverProvider());
    let formatter = vscode.languages.registerDocumentFormattingEditProvider(LC2K_MODE, new lc2kFormat_1.Lc2kFormatter());
    let formatter2 = vscode.languages.registerDocumentRangeFormattingEditProvider(LC2K_MODE, new lc2kFormat_1.Lc2kFormatter());
    let defProvider = vscode.languages.registerDefinitionProvider(LC2K_MODE, new lc2kDeclaration_1.Lc2kDefinitionProvider());
    // register them
    context.subscriptions.push(formatter);
    context.subscriptions.push(formatter2);
    context.subscriptions.push(hoverprovider);
    context.subscriptions.push(defProvider);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map