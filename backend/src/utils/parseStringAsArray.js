module.exports = function parseStringAsArray(arrayString) {
    return parseStringAsArray.split(',').map(tech => tech.trim());
}