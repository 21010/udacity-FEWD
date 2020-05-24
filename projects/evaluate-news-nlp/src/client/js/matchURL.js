export function matchURL(url) {
    const expression = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/
    const regex = new RegExp(expression)
    return url.match(regex) ? true : false
}