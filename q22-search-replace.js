function replace(str, before, after) {
    after = before[0] === before[0].toUpperCase() ? after[0].toUpperCase() + after.substr(1, after.length) : after;

    str = str.split(' ');
    var position = str.indexOf(before);

    str.splice(position, 1, after);
    return str.join(' ');
}

replace("He is Sleeping on the couch", "Sleeping", "sitting")
