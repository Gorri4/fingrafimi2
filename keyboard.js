//Displays the keyboard used in assignment, it is composed of many smaller pictures, all keys used in assignments are added to the canvas
//along with a blinking animation, then a keyboard outline with some grey filled keys is drawn over the other single keys
function loadKeyboard(assignmentNr, exerciseNr)
{
    //The keyboard outline that is over the single images is added in the end
    keyboard = game.add.image(100, 175, 'keyboard');
    keyboard.scale.setTo(0.56);

    keyboardKeysMap.set('a', game.add.sprite(188, 335, 'a', 0));
    keyboardKeysMap.get('a').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
    keyboardKeysMap.get('a').scale.setTo(1.2);

    keyboardKeysMap.set('s', game.add.sprite(228, 335, 's', 0));   
    keyboardKeysMap.get('s').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
    keyboardKeysMap.get('s').scale.setTo(1.2);

    keyboardKeysMap.set('d', game.add.sprite(272, 335, 'd', 0));
    keyboardKeysMap.get('d').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
    keyboardKeysMap.get('d').scale.setTo(1.2);

     keyboardKeysMap.set('f', game.add.sprite(313, 335, 'f', 0));
     keyboardKeysMap.get('f').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
     keyboardKeysMap.get('f').scale.setTo(1.2);

     keyboardKeysMap.set('t', game.add.sprite(346, 293, 't', 0));
     keyboardKeysMap.get('t').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('t').scale.setTo(1.2);

     keyboardKeysMap.set('m', game.add.sprite(462, 376, 'm', 0));
     keyboardKeysMap.get('m').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('m').scale.setTo(1.2);

//     keyboardKeysMap.set('g', game.add.sprite(416, 341, 'keys', 23));
//     keyboardKeysMap.get('g').animations.add('blink', [23, 24, 23, 24, 23], 2, false);
    
//     keyboardKeysMap.set('h', game.add.sprite(459, 340, 'keys', 25));
//     keyboardKeysMap.get('h').animations.add('blink', [25, 26, 25, 26, 25], 2, false);
    
     keyboardKeysMap.set('j', game.add.sprite(440, 334, 'j', 0));
     keyboardKeysMap.get('j').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
     keyboardKeysMap.get('j').scale.setTo(1.2);

     keyboardKeysMap.set('k', game.add.sprite(481, 334, 'k', 0));
     keyboardKeysMap.get('k').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
     keyboardKeysMap.get('k').scale.setTo(1.2);

     keyboardKeysMap.set('l', game.add.sprite(520, 334, 'l', 0));
     keyboardKeysMap.get('l').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
     keyboardKeysMap.get('l').scale.setTo(1.2);

     keyboardKeysMap.set('æ', game.add.sprite(566, 33333, 'æ', 0));
     keyboardKeysMap.get('æ').animations.add('blink', [0, 1, 0,1, 0,1, 0, 1, 0,1, 0], 4, false);
     keyboardKeysMap.get('æ').scale.setTo(1.2);
     
//     keyboardKeysMap.set(' ', game.add.sprite(340, 429, 'spacebar', 0));
//     keyboardKeysMap.get(' ').width = 264;
//     keyboardKeysMap.get(' ').animations12.add('blink', [0, 1, 0, 1, 0], 2, false);

// //     // //If We are in assignment 5 or higher, the e key will be colored and have a blinking animation, else it will just be grey
    

// //     // //If We are in assignment 6 or higher, the i key will be colored and have a blinking animation, else it will just be grey
//     if(assignmentNr > 6)
//     {
//         keyboardKeysMap.set('i', game.add.sprite(536, 296, 'keys', 28));
//         keyboardKeysMap.get('i').animations.add('blink', [28, 29, 28, 29, 28], 2, false);
//     }
//     else
//     {
//         keyboardKeysMap.set('i', game.add.sprite(536, 296, 'keys', 30));
//     }

// //     // //If We are in assignment 7 or higher, the b key will be colored and have a blinking animation, else it will just be grey
//     if(assignmentNr > 7)
//     {
//         keyboardKeysMap.set('b', game.add.sprite(437, 384, 'keys', 11));
//         keyboardKeysMap.get('b').animations.add('blink', [11, 12, 11, 12, 11], 2, false);
        
//         keyboardKeysMap.set('n', game.add.sprite(481, 384, 'keys', 6));
//         keyboardKeysMap.get('n').animations.add('blink', [6, 13, 6, 13, 6], 2, false);
//     }
//     else
//     {
//         keyboardKeysMap.set('b', game.add.sprite(437, 384, 'keys', 14));
//         keyboardKeysMap.set('n', game.add.sprite(481, 384, 'keys', 20));
//     }

// //     // //If We are in assignment 8 or higher, the r key will be colored and have a blinking animation, else it will just be grey
//     if(assignmentNr > 8)
//     {
//         keyboardKeysMap.set('r', game.add.sprite(361, 298, 'keys', 3));
//         keyboardKeysMap.get('r').animations.add('blink', [3, 4, 3, 4, 3], 2, false);
        
//         keyboardKeysMap.set('o', game.add.sprite(579, 297, 'keys', 0));
//         keyboardKeysMap.get('o').animations.add('blink', [0, 1, 0, 1, 0], 2, false);
//     }
//     else
//     {
//         keyboardKeysMap.set('r', game.add.sprite(361, 298, 'keys', 5));
//         keyboardKeysMap.set('o', game.add.sprite(579, 297, 'keys', 2));
//     }

// //     // //If We are in assignment 5 or higher, the ´ key will be colored and have a blinking animation, else it will just be grey
//     if(assignmentNr > 9)
//     {
//         keyboardKeysMap.set('´', game.add.sprite(678, 340, 'keys', 36));
//         keyboardKeysMap.get('´').animations.add('blink', [36, 37, 36, 37, 36], 2, false);
//     }
//     else
//     {
//         keyboardKeysMap.set('´', game.add.sprite(678, 340, 'keys', 38));
//     }

// //     // ////If We are in assignment 10 or higher, the shift keys will be colored and both will have a blinking animation, else they will just be grey
//     if(assignmentNr > 10)
//     {
//         keyboardKeysMap.set('lShift', game.add.sprite(165, 386, 'lShift', 1));
//         keyboardKeysMap.get('lShift').animations.add('blink', [1, 2, 1, 2, 1], 2, false);
//         keyboardKeysMap.set('rShift', game.add.sprite(700, 384, 'rShift', 1));
//         keyboardKeysMap.get('rShift').animations.add('blink', [1, 2, 1, 2, 1], 2, false);
//     }
//     else
//     {
//         keyboardKeysMap.set('lShift', game.add.sprite(165, 386, 'lShift', 0));
//         keyboardKeysMap.set('rShift', game.add.sprite(700, 384, 'rShift', 0));
//     }
    
    
}
