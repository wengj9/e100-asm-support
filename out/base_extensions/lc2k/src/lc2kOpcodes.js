"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
function hoverString(op) {
    return new vscode_1.MarkdownString(`${op.name}: opcode ${op.opcode}\n\n`)
        .appendMarkdown(op.spec.value)
        .appendMarkdown(op.type.value);
}
exports.hoverString = hoverString;
exports.RType = new vscode_1.MarkdownString().appendCodeblock(`R-type instructions (add, nor):
  bits 24-22: opcode
  bits 21-19: reg A
  bits 18-16: reg B
  bits 15-3:  unused (should all be 0)
  bits 2-0:   destReg`);
exports.IType = new vscode_1.MarkdownString().appendCodeblock(`I-type instructions (lw, sw, beq):
  bits 24-22: opcode
  bits 21-19: reg A
  bits 18-16: reg B
  bits 15-0:  offsetField (a 16-bit, 2's complement number with a range of -32768 to 32767)`);
exports.JType = new vscode_1.MarkdownString().appendCodeblock(`J-type instructions (jalr):
  bits 24-22: opcode
  bits 21-19: reg A
  bits 18-16: reg B
  bits 15-0:  unused (should all be 0)`);
exports.OType = new vscode_1.MarkdownString().appendCodeblock(`O-type instructions (halt, noop):
  bits 24-22: opcode
  bits 21-0:  unused (should all be 0)`);
exports.OPCODES = {
    "add": {
        name: "add",
        opcode: "000",
        type: exports.RType,
        spec: new vscode_1.MarkdownString("Add contents of regA withcontents of regB, store results in destReg."),
    },
    "nor": {
        name: "nor",
        opcode: "001",
        type: exports.RType,
        spec: new vscode_1.MarkdownString(`Nor contents of regA with contents of regB, store results in destReg.
This is a bitwise nor; each bit is treated independently.`),
    },
    "lw": {
        name: "lw",
        opcode: "010",
        type: exports.IType,
        spec: new vscode_1.MarkdownString("Load regB from memory. Memory address is formed by adding offsetField with the contents of regA."),
    },
    "sw": {
        name: "sw",
        opcode: "011",
        type: exports.IType,
        spec: new vscode_1.MarkdownString("Store regB into memory. Memory address is formed by adding offsetField with the contents of regA."),
    },
    "beq": {
        name: "beq",
        opcode: "100",
        type: exports.IType,
        spec: new vscode_1.MarkdownString(`If the contents of regA and regB are the same,
  then branch to the address PC + 1 + offsetField,
    where PC is the address of this beq instruction.`),
    },
    "jalr": {
        name: "jalr",
        opcode: "101",
        type: exports.JType,
        spec: new vscode_1.MarkdownString(`First store PC + 1 into regB, where PC is the address of this jalr instruction.
Then branch to the address contained in regA.Note that this implies if regA and
regB refer to the same register, the net effect will be jumping to PC + 1.

Call function = jalr 4 7  \nReturn = jalr 7 4`),
    },
    "halt": {
        name: "halt",
        opcode: "110",
        type: exports.OType,
        spec: new vscode_1.MarkdownString(`Increment the PC(as with all instructions), then halt the machine(let the simulator notice that the
	machine	halted).`)
    },
    "noop": {
        name: "noop",
        opcode: "111",
        type: exports.OType,
        spec: new vscode_1.MarkdownString("Do nothing."),
    },
};
//# sourceMappingURL=lc2kOpcodes.js.map