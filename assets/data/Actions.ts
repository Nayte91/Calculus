import { Action } from "../types/Action";

export const Actions: Action[] = [
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
        perform: 'clear'
    },
    {
        symbol: 'AC',
        slug: 'reset',
        keyCode: '27',
        perform: 'allClear'
    }
]