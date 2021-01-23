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
}

export const problems: IProblem[] = [
    {
        level: 1,
        problemStatement: 'Find the average of all elements in a list.',
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
            'init-n',
            'init-sum',
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
        level: 2,
        problemStatement: 'Add two numbers.',
        initBlocks: [
            { blockType: 'start', code: 'START', blockID: 'start', uid: '111' },
            {
                blockType: 'end',
                code: 'END',
                blockID: 'end',
                uid: '000',
            },
        ],
        validation: [],
        placeHolderDetails: [{ decision: false }, { decision: false }],
    },
    {
        level: 3,
        problemStatement: 'Check if number is a multiple of 4.',
        placeHolderDetails: [],
        initBlocks: [],
        validation: [],
    },
    {
        level: 4,
        problemStatement: 'Find the average of all elements in a list.',
        placeHolderDetails: [],
        initBlocks: [],
        validation: [],
    },
    {
        level: 5,
        problemStatement: 'Add two numbers.',
        placeHolderDetails: [],
        initBlocks: [],
        validation: [],
    },
    {
        level: 6,
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
