import * as vscode from 'vscode';
import { OPCODES, hoverString } from './E100Opcodes';

export class E100HoverProvider implements vscode.HoverProvider {
    public provideHover(document: vscode.TextDocument, position: vscode.Position,
        token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
        let range = document.getWordRangeAtPosition(position);
        let symbol = document.getText(range);
        return new vscode.Hover(hoverString(OPCODES[symbol]));
    }
}
