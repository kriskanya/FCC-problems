function every(collection, pre) {
    for (var prop in collection) {
        if (collection[prop].hasOwnProperty(pre) === false) {
            return false;
        }
    }
    return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
