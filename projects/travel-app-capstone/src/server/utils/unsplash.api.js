const { getPhotoSize } = require('./common')

/** 
 * The function takes a keyword (string) and a size (string: small, medium, large)
 * and returns the URI to photo hosted by unsplash - API endpoint which returns the image
*/ 
function getPhoto (keyword, size) {
    const query = encodeURIComponent(keyword)
    const { width, height } = getPhotoSize(size)
    return `https://source.unsplash.com/${width}x${height}/?${query}`
}

/** 
 * The function takes a keyword (string), width (integer) and height (integer)
 * and returns the URI to photo hosted by unsplash - API endpoint which returns the image
*/
function getCustomPhoto (keyword, width, height) {
    const query = encodeURIComponent(keyword)
    const _width = parseInt(width)
    const _height = parseInt(height)
    return `https://source.unsplash.com/${_width}x${_height}/?${query}`    
}

module.exports = {
    getPhoto,
    getCustomPhoto,
}