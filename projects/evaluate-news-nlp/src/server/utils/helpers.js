function matchURL(url) {
    const expression = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/
    const regex = new RegExp(expression)
    return url.match(regex) ? true : false
}

function generateError(response) {
    return {
        error: true,
        response
    }
}

function generateResponse(response) {
    return {
        error: false,
        response
    }
}

module.exports = {
    matchURL,
    generateError,
    generateResponse,
}