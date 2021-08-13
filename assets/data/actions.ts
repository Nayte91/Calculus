import Action from "../types/Action";

const actions: Action[] = [
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

export default actions