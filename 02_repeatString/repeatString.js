const repeatString = function(text, times) {
    if (times < 0) {
        return 'ERROR';
    }
    else if (times == 0) {
        return '';
    } else if (times == 1) {
        return text;
    } 
    
    let slice = text;
    for (let i = 1; i < times; i++) {
        text += slice;
    }

    return text;
    
};

// Do not edit below this line
module.exports = repeatString;
