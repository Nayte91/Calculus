import Key from "../types/Key";

const keys: Key[] = [
    {
        symbol: '0',
        slug: 'zero',
        keyCode: '96'
    },
    {
        symbol: '1',
        slug: 'one',
        keyCode: '97'
    },
    {
        symbol: '2',
        slug: 'two',
        keyCode: '98'
    },
    {
        symbol: '3',
        slug: 'three',
        keyCode: '99'
    },
    {
        symbol: '4',
        slug: 'four',
        keyCode: '100'
    },
    {
        symbol: '5',
        slug: 'five',
        keyCode: '101'
    },
    {
        symbol: '6',
        slug: 'six',
        keyCode: '102'
    },
    {
        symbol: '7',
        slug: 'seven',
        keyCode: '103'
    },
    {
        symbol: '8',
        slug: 'eight',
        keyCode: '104'
    },
    {
        symbol: '9',
        slug: 'nine',
        keyCode: '105'
    },
    {
        symbol: '.',
        slug: 'dot',
        keyCode: '81'
    },
    {
        symbol: '+',
        slug: 'plus',
        keyCode: '107'
    },
    {
        symbol: '-',
        slug: 'minus',
        keyCode: '109'
    },
    {
        symbol: '*',
        slug: 'multiply',
        keyCode: '106'
    },
    {
        symbol: '/',
        slug: 'divide',
        keyCode: '111'
    },
    {
        symbol: '=',
        slug: "equal",
        keyCode: '13',
        perform: 'compute'
    },
    {
        symbol: 'C',
        slug: 'clear',
        keyCode: '8',
        perform: 'clean'
    },
    {
        symbol: 'AC',
        slug: 'reset',
        keyCode: '27',
        perform: 'reset'
    }
]

export default keys