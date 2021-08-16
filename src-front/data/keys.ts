import Key from "../types/Key";

const keys: Key[] = [
    {
        symbol: '0',
        slug: 'zero',
        keyCode: 96,
        type: 'digit'
    },
    {
        symbol: '1',
        slug: 'one',
        keyCode: 97,
        type: 'digit'
    },
    {
        symbol: '2',
        slug: 'two',
        keyCode: 98,
        type: 'digit'
    },
    {
        symbol: '3',
        slug: 'three',
        keyCode: 99,
        type: 'digit'
    },
    {
        symbol: '4',
        slug: 'four',
        keyCode: 100,
        type: 'digit'
    },
    {
        symbol: '5',
        slug: 'five',
        keyCode: 101,
        type: 'digit'
    },
    {
        symbol: '6',
        slug: 'six',
        keyCode: 102,
        type: 'digit'
    },
    {
        symbol: '7',
        slug: 'seven',
        keyCode: 103,
        type: 'digit'
    },
    {
        symbol: '8',
        slug: 'eight',
        keyCode: 104,
        type: 'digit'
    },
    {
        symbol: '9',
        slug: 'nine',
        keyCode: 105,
        type: 'digit'
    },
    {
        symbol: '.',
        slug: 'dot',
        keyCode: 110,
        type: 'digit'
    },
    {
        symbol: '+',
        slug: 'plus',
        keyCode: 107,
        type: 'operator'
    },
    {
        symbol: '-',
        slug: 'minus',
        keyCode: 109,
        type: 'operator'
    },
    {
        symbol: '*',
        slug: 'multiply',
        keyCode: 106,
        type: 'operator'
    },
    {
        symbol: '/',
        slug: 'divide',
        keyCode: 111,
        type: 'operator'
    },
    {
        symbol: '=',
        slug: "equal",
        keyCode: 13,
        perform: 'compute',
        type: 'executor'
    },
    {
        symbol: 'C',
        slug: 'clear',
        keyCode: 8,
        perform: 'clean',
        type: 'operator'
    },
    {
        symbol: 'AC',
        slug: 'reset',
        keyCode: 27,
        perform: 'reset',
        type: 'operator'
    }
]

export default keys