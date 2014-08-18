var SM_JUMBLE_MODULE = (function () {
    var generatedPieces;

    function createPuzzle(scriptureText, percentToJumble, minimunToJumble, difficulty) {
        return generatePuzzle(scriptureText, percentToJumble, minimunToJumble, difficulty);
    }
    // Breaks up scripture and makes game pieces and fills generatedPieces array.
    function generatePuzzle(scriptureText, percentToJumble, minimunToJumble, difficulty) {
        var jumble = jumblePhrase(scriptureText, percentToJumble, minimunToJumble, difficulty), jumblePieces = jumble.split('###'), length = jumblePieces.length, 
            i, currentPiece, splitPieces;

        generatedPieces = [];

        for(i = 0; i < length; i++) {
            currentPiece = jumblePieces[i];
            if(currentPiece.indexOf('##') === -1) { // it's just plain old text
                generatedPieces.push({
                    'display': currentPiece,
                    'isJumbledPiece': false,
                    'isSelected': false,
                    'index': i
                });
            }
            else { // it's a jumbled piece
                splitPieces = currentPiece.split('##');
                generatedPieces.push({
                    'display': splitPieces[1],
                    'isJumbledPiece': true,
                    'isAnsweredCorrectly': false,
                    'isAnsweredIncorrectly': false,
                    'isSelected': false,
                    'index': i,
                    'answerKey': splitPieces[0]
                });
            }
        }

        return generatedPieces;
    }
    // Goes through the phrase and passes each word to the jumbleWord function and returns the phrase with jumbled pieces in it.
    function jumblePhrase(phrase, percentToJumble, minimunToJumble, difficulty) {
        var words = phrase.split(' '), i, jumbleableIndexes = [], jumbleableIndexesLength, jumbleIndexValue, numberToJumble;

        // Go through the words and see what words are jumbleable and put their indexes in an array.
        for(i = 0; i < words.length; i++) {
            if(isJumbleable(words[i])) {
                jumbleableIndexes.push(i);
            }
        }

        // Adjust the jumbleableIndexes array to only include the indexes of words to shuffle based on the 
        // number of jumbleable words, the percent to jumble, and the minimum to jumble.
        // Set indexes to -1 if we don't want to jumble them.
        jumbleableIndexesLength = jumbleableIndexes.length;
        numberToJumble = Math.ceil(jumbleableIndexesLength*percentToJumble/100) > minimunToJumble ? Math.ceil(jumbleableIndexesLength*percentToJumble/100) : minimunToJumble;

        if(jumbleableIndexesLength !== numberToJumble) { // if we only want to jumble a subset, then figure out which ones to mark
            // mix up the array 
            shuffleArray(jumbleableIndexes);
            // set the pieces of the array to -1 that we don't want to jumble
            for(i = numberToJumble; i < jumbleableIndexesLength; i++) {
                jumbleableIndexes[i] = -1;
            }
        }
        // jumble the words for whatever indexes are left in the jumbleableIndexes array. 
        for(i = 0; i < jumbleableIndexesLength; i++) {
            jumbleIndexValue = jumbleableIndexes[i];
            if(jumbleIndexValue !== -1) {
                words[jumbleIndexValue] = jumbleWord(words[jumbleIndexValue], difficulty);
            }
        }

        return words.join(' ');
    }
    // Contains the rules as to whether or not a word should be jumbleable.
    // Returns true if it meets the criteria, else false.
    function isJumbleable(word) {
        var regX = /^(\W*)([\w']+)(\W*)$/, minLength = 4, groups = word.match(regX);

        // if it has a number in it, don't jumble it.
        if(/\d/.test(word)) {
            return false;
        }
        // regex it and if it doesn't match (meaning it's not something we want to jumble) return false.
        if(!groups) {
            return false;
        }
        // let's not do small words  (groups[1] contains pre-word punctuation, that's why we're checking groups[2]). 
        if(groups[2].length < minLength) {
            return false;
        }

        return true;
    }
    // Takes in a word from the phrase and jumbles it if it meets certain criteria like not containing numbers, etc.
    // Transforms word into form of '### word ## word-jumbled ###'
    // It also accounts for punctuation at the beginning or end of word and leaves it alone.
    function jumbleWord(original, jumbleLevel) {
        var chars, length, i, j, temp, pre, word, post, jumbledWord, regX = /^(\W*)([\w']+)(\W*)$/, groups;

        groups = original.match(regX);

        // find all non-character letters at beginning of string, we don't want those jumbled in.
        pre = groups[1];
        // the actual word to jumble is next.
        word = groups[2];
        // find all non-character letters at end of string, we don't want these jumbled in either.  
        post = groups[3];

        // jumble it! break the string up.
        chars = word.split('');
        
        // mix it up.
        if(jumbleLevel === 1) { // jumbles all the letters
            shuffleArray(chars);
        }
        else if(jumbleLevel === 2) { // only shows the first letter and blank for all the others
            length = chars.length;
            for(i = length - 1; i > 0; i--) {
                chars[i] = '_';
            }
        }
        else { // hard
            length = chars.length;
            for(i = length - 1; i >= 0; i--) { // blanks out all the spaces
                chars[i] = '_';
            }       
        }

        // put it back together.
        jumbledWord = chars.join('');
        
        // if it wasn't randomized, try again. if we're good, return the jumbled word with the pre and post punctuation.
        return jumbledWord === word ? jumbleWord(word, jumbleLevel) : pre + '###' + word + '##' + jumbledWord + '###' + post;
    }
    // Returns false if it finds any jumbled pieces that haven't been answered. Returns true if all jumbled pieces have been answered.
    function isPuzzleComplete() {
        var i, piece, length = generatedPieces.length;

        for(i = 0; i < length; i++) {
            piece = generatedPieces[i];
            if(piece.isJumbledPiece && !piece.isAnsweredCorrectly && !piece.isAnsweredIncorrectly) {
                return false;
            }
        }

        return true;
    }
    function shuffleArray(arrayToShuffle) {
        var i, j, temp, length = arrayToShuffle.length;
        for(i = length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arrayToShuffle[i];
            arrayToShuffle[i] = arrayToShuffle[j];
            arrayToShuffle[j] = temp;
        } 
    }

    return {
        createPuzzle: createPuzzle,
        isPuzzleComplete: isPuzzleComplete
    };

})();