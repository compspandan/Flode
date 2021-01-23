import { Block } from './components/FlowChart/config';

export interface IBlockID {
    start: string;
    end: string;
    'init-sum-0': string;
    'input-arr': string;
    'loop-i-0-n': string;
    'init-n-len-arr': string;
    'add-i-to-sum': string;
    'display-sum': string;
    'divide-sum-by-n': string;
    'input-x':string;
    'multiply-x':string;
    'print-x':string;
    '}':string;
    '{':string;
    'print-s':string;
    's[i]-lower':string;
    'else':string;
    's[i]-upper':string;
    'if-x.lower':string;
    'input-s':string;
    'printno':string;
    'printyes':string;
    'input-i':string;
    'if-n%4':string;
    'if-j-a[i]':string;
    'print-j':string;
    'init-j':string;
}

export interface ICodeBlock {
    blockType: keyof Block;
    code: string;
    blockID: keyof IBlockID;
    uid: string;
}

interface IPlaceHolder {
    decision: boolean;
}

interface IProblem {
    level: number;
    problemStatement: string;
    initBlocks: ICodeBlock[];
    validation: string[];
    placeHolderDetails: IPlaceHolder[];
    desc?:string;
}
export const problems: IProblem[] = [
    {
        level: 1,
        problemStatement: 'Find the square of a number.',
        desc:'Find the square of a number using multiplication.',
        initBlocks: [
            { blockType: 'start', code: 'START',blockID: 'start',uid:'0x0' },
            { blockType: 'io', code: 'x <- input', blockID: 'input-x',uid:'0x1' },
            { blockType: 'exec', code: 'y <- x * x', blockID: 'multiply-x',uid:'0x2' },
            { blockType: 'io', code: 'print y', blockID: 'print-x',uid:'0x3' },
            { blockType: 'end', code: 'END', blockID: 'end',uid:'0x4'},
        ],
        validation: ['start', 'input-x', 'multiply-x', 'print-x', 'end'],
        placeHolderDetails: [
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
        ],
    },
    {
        level: 2,
        problemStatement: 'Check if number is a multiple of 4.',
        desc:'Using modulo operator find if a number is a multiple of 4',
        initBlocks: [
            { blockType: 'start', code: 'START', blockID: 'start',uid:'893' },
            { blockType: 'cond', code: 'if n % 4==0', blockID: 'if-n%4',uid:'894' },
            { blockType: 'cond', code: '{', blockID: '{',uid:'895' },
            { blockType: 'io', code: 'n<-input', blockID: 'input-i',uid:'896' },
            { blockType: 'cond', code: '}', blockID: '}',uid:'897'},
            { blockType: 'io', code: 'print YES', blockID: 'printyes',uid:'897'},
            { blockType: 'cond', code: 'else', blockID: 'else',uid:'898'},
            { blockType: 'io', code: 'print NO', blockID: 'printno',uid:'899'},
            {
                blockType: 'end',
                code: 'END',
                blockID: 'end',
                uid:'900'
            },
        ],
        validation: [
            'start',
            'input-i',
            'if-n%4',
            '{',
            'printyes',
            '}',
            'else',
            'printno',
            'end',
        ],
        placeHolderDetails: [
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
        ],
    },
    {
        level: 3,
        problemStatement:
            'Swap lowercase characters to uppercase and uppercase to lowercase.',
        desc:'Using loops and conditional statements try to swap characters.',
        initBlocks: [
            { blockType: 'start', code: 'START', blockID: 'start',uid:'kom' },
            { blockType: 'io', code: 'String<-input', blockID: 'input-s',uid:'9u8593' },
            {
                blockType: 'loop',
                code: 'Loop i=0->len(String)',
                blockID: 'loop-i-0-n',
                uid:'8493'

            },
            { blockType: 'cond', code: '{', blockID: '{' ,uid:'98792'},
            {
                blockType: 'cond',
                code: 'if String[i] is Lowercase',
                blockID: 'if-x.lower',
                uid:'kpop'
            },
            { blockType: 'cond', code: '{', blockID: '{',uid:'09-0' },
            {
                blockType: 'exec',
                code: 'String[i]=String[i] to uppercase',
                blockID: 's[i]-upper',uid:'58604'
            },
            { blockType: 'cond', code: '}', blockID: '}',uid:'644'},
            { blockType: 'cond', code: 'Else', blockID: 'else',uid:'utr' },
            { blockType: 'cond', code: '{', blockID: '{',uid:'9876' },
            {
                blockType: 'exec',
                code: 'String[i]=String[i] to lowercase',
                blockID: 's[i]-lower',
                uid:'rwsir'
            },
            { blockType: 'cond', code: '}', blockID: '}',uid:'12i' },
            { blockType: 'cond', code: '}', blockID: '}',uid:'1246' },
            { blockType: 'io', code: 'print String', blockID: 'print-s',uid:'455q' },
            { blockType: 'end', code: 'END', blockID: 'end',uid:'4256' },
        ],
        validation: [
            'start',
            'input-s',
            'loop-i-0-n',
            '{',
            'if-x.lower',
            '{',
            's[i]-upper',
            '}',
            'else',
            '{',
            's[i]-lower',
            '}',
            '}',
            'print-s',
            'end',
        ],
        placeHolderDetails: [
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
        ],
    },
    {
        level: 4,
        problemStatement: 'Find the average of all elements in a list.',
        desc:'Use a loop control flow to access the ith element of a list.',
        initBlocks: [
            {
                blockType: 'start',
                code: 'START',
                blockID: 'start',
                uid: 'start',
            },
            {
                blockType: 'io',
                code: 'array <- input',
                blockID: 'input-arr',
                uid: 'input-arr',
            },
            {
                blockType: 'exec',
                code: 'n <- Length of Array',
                uid: 'init-n',
                blockID: 'init-n-len-arr',
            },
            {
                blockType: 'exec',
                code: 'sum <- 0',
                uid: 'init-sum',
                blockID: 'init-sum-0',
            },
            {
                blockType: 'loop',
                code: 'Loop i: 0 -> n',
                uid: 'loop-i-0-n',
                blockID: 'loop-i-0-n',
            },
            {
                blockType: 'exec',
                code: 'sum <- sum + i',
                uid: 'add-i-to-sum',
                blockID: 'add-i-to-sum',
            },
            {
                blockType: 'exec',
                code: 'sum <- sum / i',
                uid: 'divide-sum-by-n',
                blockID: 'divide-sum-by-n',
            },
            {
                blockType: 'io',
                code: 'print sum',
                uid: 'display-sum',
                blockID: 'display-sum',
            },
            {
                blockType: 'end',
                code: 'END',
                uid: 'end',
                blockID: 'end',
            },
        ],
        validation: [
            'start',
            'input-arr',
            'init-n-len-arr',
            'init-sum-0',
            'loop-i-0-n',
            'add-i-to-sum',
            'divide-sum-by-n',
            'display-sum',
            'end',
        ],
        placeHolderDetails: [
            {
                decision: false,
            },
            {
                decision: false,
            },
            {
                decision: false,
            },
            {
                decision: false,
            },
            {
                decision: false,
            },
            {
                decision: false,
            },
            {
                decision: false,
            },
            {
                decision: false,
            },
            {
                decision: false,
            },
        ],
    },
    {
        level: 5,
        problemStatement: 'Twins in a list(Consecutive repeating numbers).',
        initBlocks: [
            { blockType: 'start', code: 'START', blockID: 'start', uid: '111' },
            {
                blockType: 'end',
                code: 'END',
                blockID: 'end',
                uid: '000',
            },
            { blockType: 'cond', code: 'if j==array[i]', blockID: 'if-j-a[i]',uid:'78593' },
            { blockType: 'io', code: 'print j', blockID: 'print-j',uid:'980i'},
            { blockType: 'exec', code: 'int j=array[0]', blockID: 'init-j',uid:'123r4' },
            { blockType: 'end', code: 'END', blockID: 'end',uid:'789' },
        ],
        validation: [
            'start',
            'input-arr',
            'init-j',
            'loop-i-1-n',
            'if-j-a[i]',
            'print-j',
            'assign-j',
            'end',
        ],
        placeHolderDetails: [
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
        ],
    },
    {
        level: 6,
        problemStatement: 'Find the average of all elements in a list.',
        placeHolderDetails: [],
        initBlocks: [],
        validation: [],
    },
    {
        level: 7,
        problemStatement: 'Add two numbers.',
        placeHolderDetails: [],
        initBlocks: [],
        validation: [],
    },
    {
        level: 8,
        problemStatement: 'Check if number is a multiple of 4.',
        placeHolderDetails: [],
        initBlocks: [],
        validation: [],
    },
];


interface IFooterIcon {
    blockType: keyof Block;
    blockID: keyof IBlockID;
    code: string;
}

export const footerIcons: IFooterIcon[] = [
    {
        blockType: 'start',
        blockID: 'start',
        code: 'START',
    },
    {
        blockType: 'exec',
        blockID: 'init-sum-0',
        code: 'sum <- 0',
    },
    {
        blockType: 'io',
        blockID: 'input-arr',
        code: 'array <- input',
    },
    {
        blockType: 'end',
        blockID: 'end',
        code: 'END',
    },
    {
        blockType: 'loop',
        blockID: 'loop-i-0-n',
        code: 'Loop i: 0 -> n',
    },
];
