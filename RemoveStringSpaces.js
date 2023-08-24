const noSpace = x => {
    let result = ''
    for(let i=0; i < x.length; i++) {

        if(x[i] === ' ') {
            result +=''
        } else result += x[i]
    }
    return result
}
// function noSpace(x){return x.split(' ').join('')}
