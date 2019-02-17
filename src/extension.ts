'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { E100DefinitionProvider } from './E100Declaration';
// import { E100Formatter } from './E100Format';
import { E100HoverProvider } from './hoverInfo';

const E100_MODE: vscode.DocumentFilter = {
  language: 'easm',
  scheme: 'file'
};


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // set variables for providers
  let hoverprovider = vscode.languages.registerHoverProvider(E100_MODE, new E100HoverProvider());
  // let formatter = vscode.languages.registerDocumentFormattingEditProvider(E100_MODE, new E100Formatter());
  // let formatter2 = vscode.languages.registerDocumentRangeFormattingEditProvider(E100_MODE, new E100Formatter());
  let defProvider = vscode.languages.registerDefinitionProvider(E100_MODE, new E100DefinitionProvider());

  // register them
  // context.subscriptions.push(formatter);
  // context.subscriptions.push(formatter2);
  context.subscriptions.push(hoverprovider);
  context.subscriptions.push(defProvider);
}

// this method is called when your extension is deactivated
export function deactivate() { }
