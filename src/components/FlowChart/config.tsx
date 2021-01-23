import Animated from 'react-native-reanimated';

export type Block = {
    start: String;
    io: String;
    exec: String;
    cond: String;
    end: String;
    loop: String;
};

export type CodeBlockProps = {
    code: String;
    blockType: keyof Block;
    id: string;
    positions: Animated.SharedValue<positionInterface>;
    scrollView: React.RefObject<Animated.ScrollView>;
    scrollY: Animated.SharedValue<number>;
};

export const colors = {
    start: ['#fc4a1a', '#f7b733'],
    io: ['#0575e6', '#021b79'],
    exec: ['#ed213a', '#93291e'],
    cond: ['#ff0099', '#493240'],
    end: ['#fc4a1a', '#f7b733'],
    loop: ['#093028', '#237a57'],
};

export interface positionInterface {
    [id: string]: number;
}

interface code_block_interface {
    blockType: keyof Block;
    code: string;
    id: string;
}

export const code_blocks: code_block_interface[] = [
    {
        blockType: 'start',
        code: 'START',
        id: 'code0',
    },
    {
        blockType: 'exec',
        code: 'EXEC',
        id: 'code1',
    },
    {
        blockType: 'io',
        code: 'IO',
        id: 'code2',
    },
    {
        blockType: 'cond',
        code: 'COND',
        id: 'code3',
    },
    {
        blockType: 'end',
        code: 'END',
        id: 'code4',
    },
];