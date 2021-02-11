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
    'input-x': string;
    'multiply-x': string;
    'print-x': string;
    '}': string;
    '{': string;
    'print-s': string;
    's[i]-lower': string;
    else: string;
    's[i]-upper': string;
    'if-x.lower': string;
    'input-s': string;
    printno: string;
    printyes: string;
    'input-i': string;
    'if-n%4': string;
    'if-j-a[i]': string;
    'print-j': string;
    'init-j': string;
    'display-y': string;
    'input-n': string;
    'y-x*x': string;
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

export interface ICard {
    title: string;
    desc: string;
    blockType: keyof Block;
}

export interface IFooterIcon {
    blockType: keyof Block;
    blockID: keyof IBlockID;
    code: string;
}

interface IProblem {
    level: number;
    problemStatement: string;
    initBlocks: ICodeBlock[];
    validation: string[];
    placeHolderDetails: IPlaceHolder[];
    desc?: string;
    cardData: ICard[];
    footerIcons: IFooterIcon[];
}

export const problems: IProblem[] = [
    {
        level: 1,
        problemStatement: 'Find the square of a number.',
        desc: 'Find the square of a number using multiplication.',
        initBlocks: [
            { blockType: 'start', code: 'START', blockID: 'start', uid: '0x0' },
            {
                blockType: 'io',
                code: 'x <- input',
                blockID: 'input-x',
                uid: '0x1',
            },
            {
                blockType: 'exec',
                code: 'y <- x * x',
                blockID: 'y-x*x',
                uid: '0x2',
            },
            {
                blockType: 'io',
                code: 'display y',
                blockID: 'display-y',
                uid: '0x3',
            },
            { blockType: 'end', code: 'END', blockID: 'end', uid: '0x4' },
        ],
        validation: ['start', 'input-x', 'y-x*x', 'display-y', 'end'],
        placeHolderDetails: [
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
            { decision: false },
        ],
        cardData: [
            {
                blockType: 'start',
                title: 'START',
                desc: 'Block to be placed at the beginning of the flowchart.',
            },
            {
                title: 'x <- input',
                desc:
                    'Takes input from user. Stores input in variable x. \nIt can be a number, string, array, etc.',
                blockType: 'io',
            },
            {
                title: 'y <- x * x',
                desc: 'Multiplies x with iteself and stores value in y. ',
                blockType: 'exec',
            },
            {
                title: 'display y',
                desc: "Displays value in y on user's screen",
                blockType: 'io',
            },
            {
                title: 'Loop i: 0 -> n',
                desc:
                    'Initialises i to 0 and starts a loop.\nIncrements every loop iteration.\nEnds the loop when i is equal to n (size of the array) .',
                blockType: 'loop',
            },
            {
                blockType: 'end',
                title: 'END',
                desc: 'lock to be placed at the end of the flowchart.',
            },
        ],
        footerIcons: [
            {
                blockType: 'start',
                blockID: 'start',
                code: 'START',
            },
            {
                blockType: 'io',
                blockID: 'input-x',
                code: 'x <- input',
            },
            {
                blockType: 'exec',
                blockID: 'y-x*x',
                code: 'y <- x * x',
            },
            {
                blockType: 'io',
                blockID: 'display-y',
                code: 'display y',
            },
            {
                blockType: 'loop',
                blockID: 'loop-i-0-n',
                code: 'Loop i: 0 -> n',
            },
            {
                blockType: 'end',
                blockID: 'end',
                code: 'END',
            },
        ],
    },
    {
        level: 2,
        problemStatement: 'Check if number is a multiple of 4.',
        desc: 'Using modulo operator find if a number is a multiple of 4',
        initBlocks: [
            { blockType: 'start', code: 'START', blockID: 'start', uid: '893' },
            {
                blockType: 'cond',
                code: 'if n % 4 == 0',
                blockID: 'if-n%4',
                uid: '894',
            },
            { blockType: 'cond', code: '{', blockID: '{', uid: '895' },
            {
                blockType: 'io',
                code: 'n <- input',
                blockID: 'input-n',
                uid: '896',
            },
            { blockType: 'cond', code: '}', blockID: '}', uid: '897' },
            {
                blockType: 'io',
                code: 'print YES',
                blockID: 'printyes',
                uid: '897',
            },
            { blockType: 'cond', code: 'else', blockID: 'else', uid: '898' },
            {
                blockType: 'io',
                code: 'print NO',
                blockID: 'printno',
                uid: '899',
            },
            {
                blockType: 'end',
                code: 'END',
                blockID: 'end',
                uid: '900',
            },
        ],
        validation: [
            'start',
            'input-n',
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
        cardData: [
            {
                blockType: 'start',
                title: 'START',
                desc: 'Block to be placed at the beginning of the flowchart.',
            },
            {
                title: '{',
                desc:
                    'A block which acts as the opening parenthesis to indicate start of loops and conditional statements.',
                blockType: 'cond',
            },
            {
                title: '}',
                desc:
                    'A block which acts as the closing parenthesis to indicate end of loops and conditional statements.',
                blockType: 'cond',
            },
            {
                title: 'else',
                desc:
                    'It is used with "if" condition when it fails. In this case if the condition fails it will execute "else".',
                blockType: 'cond',
            },
            {
                title: 'if n%4(n modulo 4) == 0',
                desc:
                    'A modulo operator is used to get the remainder of n/4. An if conditional statement checks if the given remainder is zero.',
                blockType: 'cond',
            },
            {
                title: 'display YES',
                desc: "Displays YES on user's screen",
                blockType: 'io',
            },
            {
                title: 'display NO',
                desc: "Displays NO on user's screen",
                blockType: 'io',
            },
            {
                title: 'n <- input',
                desc:
                    'Takes input from user. Stores input in variable n. \nIt can be a number, string, array, etc.',
                blockType: 'io',
            },
            {
                blockType: 'end',
                title: 'END',
                desc: 'lock to be placed at the end of the flowchart.',
            },
        ],
        footerIcons: [
            {
                blockType: 'start',
                blockID: 'start',
                code: 'START',
            },
            {
                blockType: 'cond',
                blockID: '{',
                code: '{',
            },
            {
                blockType: 'cond',
                blockID: '}',
                code: '}',
            },
            {
                blockType: 'cond',
                blockID: 'else',
                code: 'else',
            },
            {
                blockType: 'cond',
                blockID: 'if-n%4',
                code: 'if n % 4 == 0',
            },
            {
                blockType: 'io',
                blockID: 'printyes',
                code: 'print YES',
            },
            {
                blockType: 'io',
                blockID: 'printno',
                code: 'print NO',
            },
            {
                blockType: 'io',
                code: 'n <- input',
                blockID: 'input-n',
            },
            {
                blockType: 'end',
                blockID: 'end',
                code: 'END',
            },
        ],
    },
    {
        level: 3,
        problemStatement:
            'Swap lowercase characters to uppercase and uppercase to lowercase.',
        desc: 'Using loops and conditional statements try to swap characters.',
        initBlocks: [
            { blockType: 'start', code: 'START', blockID: 'start', uid: 'kom' },
            {
                blockType: 'io',
                code: 'String<-input',
                blockID: 'input-s',
                uid: '9u8593',
            },
            {
                blockType: 'loop',
                code: 'Loop i=0->len(String)',
                blockID: 'loop-i-0-n',
                uid: '8493',
            },
            { blockType: 'cond', code: '{', blockID: '{', uid: '98792' },
            {
                blockType: 'cond',
                code: "if i'th character is Lowercase",
                blockID: 'if-x.lower',
                uid: 'kpop',
            },
            { blockType: 'cond', code: '{', blockID: '{', uid: '09-0' },
            {
                blockType: 'exec',
                code: 'String[i]=String[i] to uppercase',
                blockID: 's[i]-upper',
                uid: '58604',
            },
            { blockType: 'cond', code: '}', blockID: '}', uid: '644' },
            { blockType: 'cond', code: 'else', blockID: 'else', uid: 'utr' },
            { blockType: 'cond', code: '{', blockID: '{', uid: '9876' },
            {
                blockType: 'exec',
                code: 'String[i]=String[i] to lowercase',
                blockID: 's[i]-lower',
                uid: 'rwsir',
            },
            { blockType: 'cond', code: '}', blockID: '}', uid: '12i' },
            { blockType: 'cond', code: '}', blockID: '}', uid: '1246' },
            {
                blockType: 'io',
                code: 'print String',
                blockID: 'print-s',
                uid: '455q',
            },
            { blockType: 'end', code: 'END', blockID: 'end', uid: '4256' },
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
        cardData: [
            {
                blockType: 'start',
                title: 'START',
                desc: 'Block to be placed at the beginning of the flowchart.',
            },
            {
                blockType: 'io',
                title: 'String<-input',
                desc:
                    'Takes input from user. Stores input in variable String. ',
            },
            {
                blockType: 'loop',
                title: 'Loop i=0->len(String)',
                desc:
                    'Initialises i to 0 and starts a loop.\nIncrements every loop iteration.\nEnds the loop when i is equal to (length of String) .',
            },
            {
                blockType: 'cond',
                title: '{',
                desc:
                    'A block which acts as the opening parenthesis to indicate start of loops and conditional statements.',
            },
            {
                blockType: 'cond',
                title: "if i'th character is Lowercase",
                desc:
                    'Assigns the ith element of String to the lowercase of the ith elemenent of String ',
            },
            {
                blockType: 'exec',
                title: 'String[i]=String[i] to uppercase',
                desc:
                    'Assigns the ith element of String to the uppecase of the ith elemenent of String.',
            },
            {
                blockType: 'cond',
                title: '}',
                desc:
                    'A block which acts as the closing parenthesis to indicate end of loops and conditional statements.',
            },
            {
                blockType: 'cond',
                title: 'else',
                desc:
                    'It is used with "if" condition when it fails. In this case if the condition fails it will execute "else".',
            },
            {
                blockType: 'io',
                title: 'print String',
                desc: "Displays the variable String on the user's screen",
            },
            {
                blockType: 'end',
                title: 'END',
                desc: 'lock to be placed at the end of the flowchart.',
            },
        ],
        footerIcons: [
            { blockType: 'start', code: 'START', blockID: 'start' },
            {
                blockType: 'io',
                code: 'String<-input',
                blockID: 'input-s',
            },
            {
                blockType: 'loop',
                code: 'Loop i=0->len(String)',
                blockID: 'loop-i-0-n',
            },
            { blockType: 'cond', code: '{', blockID: '{' },
            {
                blockType: 'cond',
                code: "if i'th character is Lowercase",
                blockID: 'if-x.lower',
            },
            {
                blockType: 'exec',
                code: 'String[i]=String[i] to uppercase',
                blockID: 's[i]-upper',
            },
            { blockType: 'cond', code: '}', blockID: '}' },
            { blockType: 'cond', code: 'else', blockID: 'else' },
            {
                blockType: 'io',
                code: 'print String',
                blockID: 'print-s',
            },
            { blockType: 'end', code: 'END', blockID: 'end' },
        ],
    },
    {
        level: 4,
        problemStatement: 'Find the average of all elements in a list.',
        desc: 'Use a loop control flow to access the ith element of a list.',
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
        cardData: [
            {
                blockType: 'start',
                title: 'START',
                desc: 'Block to be placed at the beginning of the flowchart.',
            },
            {
                blockType: 'io',
                title: 'array<-input',
                desc: 'Takes input from user and stores input in the array. ',
            },
            {
                blockType: 'exec',
                title: 'n <- Length of Array',
                desc: 'Assigns Length of array to variable "n"',
            },
            {
                blockType: 'exec',
                title: 'sum <- 0',
                desc: 'Assigns zero(0) to variable "sum"',
            },
            {
                title: 'Loop i: 0 -> n',
                desc:
                    'Initialises i to 0 and starts a loop.\nIncrements every loop iteration.\nEnds the loop when i is equal to n (size of the array) .',
                blockType: 'loop',
            },
            {
                title: 'sum <- sum / i',
                blockType: 'exec',
                desc: 'Stores the value of sum/i back into sum',
            },
            {
                blockType: 'io',
                title: 'print sum',
                desc: "Displays the variable 'sum' on the user's screen",
            },
            {
                blockType: 'end',
                title: 'END',
                desc: 'lock to be placed at the end of the flowchart.',
            },
        ],
        footerIcons: [
            {
                blockType: 'start',
                code: 'START',
                blockID: 'start',
            },
            {
                blockType: 'io',
                code: 'array <- input',
                blockID: 'input-arr',
            },
            {
                blockType: 'exec',
                code: 'n <- Length of Array',
                blockID: 'init-n-len-arr',
            },
            {
                blockType: 'exec',
                code: 'sum <- 0',
                blockID: 'init-sum-0',
            },
            {
                blockType: 'loop',
                code: 'Loop i: 0 -> n',
                blockID: 'loop-i-0-n',
            },
            {
                blockType: 'exec',
                code: 'sum <- sum + i',
                blockID: 'add-i-to-sum',
            },
            {
                blockType: 'exec',
                code: 'sum <- sum / i',
                blockID: 'divide-sum-by-n',
            },
            {
                blockType: 'io',
                code: 'print sum',
                blockID: 'display-sum',
            },
            {
                blockType: 'end',
                code: 'END',
                blockID: 'end',
            },
        ],
    },
    {
        level: 5,
        problemStatement: 'Twins in a list(Consecutive repeating numbers).',
        initBlocks: [
            { blockType: 'start', code: 'START', blockID: 'start', uid: '111' },
            {
                blockType: 'cond',
                code: 'if j==array[i]',
                blockID: 'if-j-a[i]',
                uid: '78593',
            },
            {
                blockType: 'io',
                code: 'print j',
                blockID: 'print-j',
                uid: '980i',
            },
            {
                blockType: 'exec',
                code: 'int j=array[0]',
                blockID: 'init-j',
                uid: '123r4',
            },
            { blockType: 'end', code: 'END', blockID: 'end', uid: '789' },
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
        cardData: [
            {
                blockType: 'start',
                title: 'START',
                desc: 'Block to be placed at the beginning of the flowchart.',
            },
            {
                blockType: 'io',
                title: 'array<-input',
                desc: 'Takes input from user and stores input in the array. ',
            },
        ],
        footerIcons: [],
    },
    {
        level: 6,
        problemStatement: 'Find the average of all elements in a list.',
        placeHolderDetails: [],
        initBlocks: [],
        validation: [],
        cardData: [],
        footerIcons: [],
    },
    {
        level: 7,
        problemStatement: 'Add two numbers.',
        placeHolderDetails: [],
        initBlocks: [],
        validation: [],
        cardData: [],
        footerIcons: [],
    },
    {
        level: 8,
        problemStatement: 'Check if number is a multiple of 4.',
        placeHolderDetails: [],
        initBlocks: [],
        validation: [],
        cardData: [],
        footerIcons: [],
    },
];

export const levelData = [
    [
        {
            desc: 'Intro',
            num: 1,
            locked: false,
        },
        {
            desc: 'Input / Output',
            num: 2,
            locked: false,
        },
        {
            desc: 'Conditionals',
            num: 3,
            locked: false,
        },
    ],
    [
        {
            desc: 'Intro',
            num: 4,
            locked: false,
        },
        {
            desc: 'Input / Output',
            num: 5,
            locked: false,
        },
        {
            desc: 'Conditionals',
            num: 6,
            locked: false,
        },
    ],
    [
        {
            desc: 'Intro',
            num: 4,
            locked: true,
        },
        {
            desc: 'Input / Output',
            num: 5,
            locked: true,
        },
        {
            desc: 'Conditionals',
            num: 6,
            locked: true,
        },
    ],
    [
        {
            desc: 'Intro',
            num: 4,
            locked: true,
        },
        {
            desc: 'Input / Output',
            num: 5,
            locked: true,
        },
        {
            desc: 'Conditionals',
            num: 6,
            locked: true,
        },
    ],
    [
        {
            desc: 'Intro',
            num: 4,
            locked: true,
        },
        {
            desc: 'Input / Output',
            num: 5,
            locked: true,
        },
        {
            desc: 'Conditionals',
            num: 6,
            locked: true,
        },
    ],
    [
        {
            desc: 'Intro',
            num: 4,
            locked: true,
        },
        {
            desc: 'Input / Output',
            num: 5,
            locked: true,
        },
        {
            desc: 'Conditionals',
            num: 6,
            locked: true,
        },
    ],
];