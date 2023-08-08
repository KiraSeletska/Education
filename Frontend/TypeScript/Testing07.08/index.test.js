import {sum} from './index.js'

function assert(cond, mes) {
    if(!cond){
        throw new Error (mes)
    }
}

const result = sum(1, 2)
assert(result === 3, 'sum(1. 2 should return 3')