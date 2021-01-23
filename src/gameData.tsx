import { Block } from './components/FlowChart/config';

export interface ICodeBlock {
    blockType: keyof Block;
    code: string;
    id: string;
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
                id: 'start',
            },
            {
                blockType: 'io',
                code: 'array <- input',
                id: 'input-arr',
            },
            {
                blockType: 'exec',
                code: 'n <- Length of Array',
                id: 'init-n',
            },
            {
                blockType: 'exec',
                code: 'sum <- 0',
                id: 'init-sum',
            },
            {
                blockType: 'loop',
                code: 'Loop i: 0 -> n',
                id: 'loop-i-0-n',
            },
            {
                blockType: 'exec',
                code: 'sum <- sum + i',
                id: 'add-i-to-sum',
            },
            {
                blockType: 'exec',
                code: 'sum <- sum / i',
                id: 'divide-sum-by-n',
            },
            {
                blockType: 'io',
                code: 'print sum',
                id: 'print-sum',
            },
            {
                blockType: 'end',
                code: 'END',
                id: 'end',
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
            'print-sum',
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
            { blockType: 'start', code: 'START', id: 'start' },
            {
                blockType: 'end',
                code: 'END',
                id: 'end',
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

interface footerIcons_interface {
    blockType: keyof Block;
}

export const footerIcons: footerIcons_interface[] = [
    {
        blockType: 'start',
    },
    {
        blockType: 'exec',
    },
    {
        blockType: 'io',
    },
    {
        blockType: 'cond',
    },
    {
        blockType: 'end',
    },
];
