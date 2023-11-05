function generateHashtag (str) {


    if(!arguments.length) return '#DoWeHaveAHashtag'

    if(!str?.trim().length || str.length > 139 ) return false

    return "#" + str.split(' ').map(el => el[0].toUpperCase() +el.slice(1)).join('')
}
