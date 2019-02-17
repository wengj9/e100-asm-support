import { MarkdownString } from 'vscode';

export interface E100Opcode {
    name: string;
    opcode: string;
    type: MarkdownString;
    spec: MarkdownString;
}

export function hoverString(op: E100Opcode): MarkdownString {
    return new MarkdownString(`${op.name}: opcode ${op.opcode}\n\n`)
        .appendMarkdown(op.spec.value)
        .appendMarkdown(op.type.value);
}

export const ThreeType = new MarkdownString().appendCodeblock(`Three-argument instructions:
  word 0: opcode
  word 1: arg1
  word 2: arg2
  word 3: arg3`);

export const TwoType = new MarkdownString().appendCodeblock(`Two-argument instructions:
  word 0: opcode
  word 1: arg1
  word 2: arg2
  word 3: unused (0)`);

export const OneType = new MarkdownString().appendCodeblock(`One-argument instructions:
  word 0: opcode
  word 1: arg1
  word 2: unused (0)
  word 3: unused (0)`);

export const ZeroType = new MarkdownString().appendCodeblock(`Zero-argument instructions:
  word 0: opcode
  word 1: unused (0)
  word 2: unused (0)
  word 3: unused (0)`);


export const OPCODES: { [name: string]: E100Opcode } = {
    "halt": {
        name: "halt",
        opcode: "0",
        type: ZeroType,
        spec: new MarkdownString().appendCodeblock(`IAR = IAR+4, halt instructions`)
    },
    "add": {
        name: "add",
        opcode: "1",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`mem[arg1] = mem[arg2] + mem[arg3]\nIAR = IAR+4`),
    },
    "sub": {
        name: "sub",
        opcode: "2",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] - memory[arg3]\nIAR = IAR+4`),
    },
    "mult": {
        name: "mult",
        opcode: "3",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] * memory[arg3]\nIAR = IAR+4`),
    },
    "div": {
        name: "div",
        opcode: "4",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] / memory[arg3]\nIAR = IAR+4`),
    },
    "cp": {
        name: "cp",
        opcode: "5",
        type: TwoType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2]\nIAR = IAR+4`),
    },
    "and": {
        name: "and",
        opcode: "6",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] & memory[arg3]\nIAR = IAR+4`),
    },
    "or": {
        name: "or",
        opcode: "7",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] | memory[arg3]\nIAR = IAR+4`),
    },
    "not": {
        name: "not",
        opcode: "8",
        type: TwoType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = ~memory[arg2]\nIAR = IAR+4`),
    },
    "sl": {
        name: "sl",
        opcode: "9",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] << memory[arg3]\nIAR = IAR+4`),
    },
    "sr": {
        name: "sr",
        opcode: "10",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2] >> memory[arg3]\nIAR = IAR+4`),
    },
    "cpfa": {
        name: "cpfa",
        opcode: "11",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`memory[arg1] = memory[arg2 + memory[arg3]]\nIAR = IAR+4`),
    },
    "cpta": {
        name: "cpta",
        opcode: "12",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`memory[arg2 + memory[arg3]] = memory[arg1]\nIAR = IAR+4`),
    },
    "be": {
        name: "be",
        opcode: "13",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`if (memory[arg2] == memory[arg3]) {\n IAR = arg1\n} else {\nIAR = IAR+4\n} `),
    },
    "bne": {
        name: "bne",
        opcode: "14",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`if (memory[arg2] != memory[arg3]) {\n IAR = arg1\n} else {\nIAR = IAR+4\n} `),
    },
    "blt": {
        name: "blt",
        opcode: "15",
        type: ThreeType,
        spec: new MarkdownString().appendCodeblock(`if (memory[arg2] < memory[arg3]) {\n IAR = arg1\n} else {\nIAR = IAR+4\n} `),
    },
    "call": {
        name: "call",
        opcode: "16",
        type: TwoType,
        spec: new MarkdownString().appendCodeblock(`memory[arg2] = IAR+4\nIAR = arg1`),
    },
    "return": {
        name: "return",
        opcode: "17",
        type: OneType,
        spec: new MarkdownString().appendCodeblock(`IAR = arg1`),
    },
};
