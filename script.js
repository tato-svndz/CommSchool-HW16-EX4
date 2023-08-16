function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    } else {
        let result = '';
        result = str.slice(0, maxlength);
        return result += "...";
    }
}

let sentence = prompt('Enter a Sentence:');
let maxNum = +prompt('Enter Maximum Length: ');
alert(truncate(sentence, maxNum));