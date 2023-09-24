export function validBraces(braces: string): boolean {
    const braceOptions = {
        "(": ')',
        "[": ']',
        "{": '}'
    }
    for(let i=0; i < braces.length; i++) {
        if((braces[i] === '(' && braces[i+1] !== ')' )  || (braces[i] === '(' && braces[braces.length-1] !== ')') ) return false
        if((braces[i] === '[' && braces[i+1] !== ']' )  || (braces[i] === '[' && braces[braces.length-1] !== ']') ) return false
        if((braces[i] === '{' && braces[i+1] !== '}' )  || (braces[i] === '{' && braces[braces.length-1] !== '}') ) return false




    }
    return true

}