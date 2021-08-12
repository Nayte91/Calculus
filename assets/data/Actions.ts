import { Action } from "../types/Action";

export const Actions: Action[] = [
    {
        symbol: '=',
        keyCode: '13',
        perform: 'compute'
    },
    {
        symbol: 'C',
        keyCode: '8',
        perform: 'clear'
    },
    {
        symbol: 'AC',
        keyCode: '27',
        perform: 'allClear'
    }
]