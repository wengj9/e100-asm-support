"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
function hoverString(op) {
    return new vscode_1.MarkdownString(`${op.name}: opcode ${op.opcode}\n\n`)
        .appendMarkdown(op.spec.value)
        .appendMarkdown(op.type.value);
}
exports.hoverString = hoverString;
exports.ThreeType = new vscode_1.MarkdownString().appendCodeblock(`Three-argument instructions:
  word 0: opcode
  word 1: arg1
  word 2: arg2
  word 3: arg3`);
exports.TwoType = new vscode_1.MarkdownString().appendCodeblock(`Two-argument instructions:
  word 0: opcode
  word 1: arg1
  word 2: arg2
  word 3: unused (0)`);
exports.OneType = new vscode_1.MarkdownString().appendCodeblock(`One-argument instructions:
  word 0: opcode
  word 1: arg1
  word 2: unused (0)
  word 3: unused (0)`);
exports.ZeroType = new vscode_1.MarkdownString().appendCodeblock(`Zero-argument instructions:
  word 0: opcode
  word 1: unused (0)
  word 2: unused (0)
  word 3: unused (0)`);
exports.OPCODES = {
    "halt": {
        name: "halt",
        opcode: "0",
        type: exports.ZeroType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`IAR = IAR+4, halt instructions`)
    },
    "add": {
        name: "add",
        opcode: "1",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`mem[arg1] = mem[arg2] + mem[arg3]\nIAR = IAR+4`),
    },
    "sub": {
        name: "sub",
        opcode: "2",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] - memory[arg3]\nIAR = IAR+4`),
    },
    "mult": {
        name: "mult",
        opcode: "3",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] * memory[arg3]\nIAR = IAR+4`),
    },
    "div": {
        name: "div",
        opcode: "4",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] / memory[arg3]\nIAR = IAR+4`),
    },
    "cp": {
        name: "cp",
        opcode: "5",
        type: exports.TwoType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2]\nIAR = IAR+4`),
    },
    "and": {
        name: "and",
        opcode: "6",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] & memory[arg3]\nIAR = IAR+4`),
    },
    "or": {
        name: "or",
        opcode: "7",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] | memory[arg3]\nIAR = IAR+4`),
    },
    "not": {
        name: "not",
        opcode: "8",
        type: exports.TwoType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = ~memory[arg2]\nIAR = IAR+4`),
    },
    "sl": {
        name: "sl",
        opcode: "9",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] << memory[arg3]\nIAR = IAR+4`),
    },
    "sr": {
        name: "sr",
        opcode: "10",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] >> memory[arg3]\nIAR = IAR+4`),
    },
    "cpfa": {
        name: "cpfa",
        opcode: "11",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2 + memory[arg3]]\nIAR = IAR+4`),
    },
    "cpta": {
        name: "cpta",
        opcode: "12",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg2 + memory[arg3]] = memory[arg1]\nIAR = IAR+4`),
    },
    "be": {
        name: "be",
        opcode: "13",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`if (memory[arg2] == memory[arg3]) {\n IAR = arg1\n} else {\nIAR = IAR+4\n} `),
    },
    "bne": {
        name: "bne",
        opcode: "14",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`if (memory[arg2] != memory[arg3]) {\n IAR = arg1\n} else {\nIAR = IAR+4\n} `),
    },
    "blt": {
        name: "blt",
        opcode: "15",
        type: exports.ThreeType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`if (memory[arg2] < memory[arg3]) {\n IAR = arg1\n} else {\nIAR = IAR+4\n} `),
    },
    "call": {
        name: "call",
        opcode: "16",
        type: exports.TwoType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`memory[arg2] = IAR+4\nIAR = arg1`),
    },
    "return": {
        name: "return",
        opcode: "17",
        type: exports.OneType,
        spec: new vscode_1.MarkdownString().appendCodeblock(`IAR = arg1`),
    },
};
//# sourceMappingURL=E100Opcodes.js.map