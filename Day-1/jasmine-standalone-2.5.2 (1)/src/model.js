function initCap(str){
    return str.trim()?str.charAt(0).toUpperCase() + str.substring(1).toLowerCase():"string is blank";
}