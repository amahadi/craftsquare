function pathName(){
    return window
        .location
        .pathname
        .replace(/(^\/)|(\/$)/g, "")
}

export {
    pathName
}