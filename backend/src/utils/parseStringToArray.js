const parseStringToArray = (techs) => {
    return techs.split(',').map(tech => tech.trim())
}

export default parseStringToArray