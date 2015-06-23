function spinalCase(str) {
    // replaces ' ' with '-'
    str = str.replace(/[^a-zA-Z]+/g, '-');

    /* This will find each occurance of a lower case character followed by an upper case character, and insert a space between them:
    http://stackoverflow.com/questions/5582228/insert-space-before-capital-letters */
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    return str;
}

spinalCase('This Is Spinal Tap');
//spinalCase('thisIsSpinalTap');
//spinalCase('Teletubbies say Eh-oh')
