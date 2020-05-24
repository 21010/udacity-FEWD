function getPhotoSize (size) {
    switch (size) {
        case 'small' :
            return { width: 320, height: 168 }
        case 'medium' : 
            return { width: 640, height: 480 }
        case 'large' :
            return { width: 1920, height: 1080 }
        default :
            return { width: 840, height: 680 }
    }
}

module.exports = {
    getPhotoSize
}