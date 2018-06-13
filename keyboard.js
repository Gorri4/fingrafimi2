//Displays the keyboard used in assignment, it is composed of many smaller pictures, all keys used in assignments are added to the canvas
//along with a blinking animation, then a keyboard outline with some grey filled keys is drawn over the other single keys
function loadKeyboard(assignmentNr)
{
    //Base keyboard
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

     keyboardKeysMap.set('t', game.add.sprite(345, 293, 't', 0));
     keyboardKeysMap.get('t').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('t').scale.setTo(1.2);

     keyboardKeysMap.set('m', game.add.sprite(462, 376, 'm', 0));
     keyboardKeysMap.get('m').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('m').scale.setTo(1.2);

     keyboardKeysMap.set('dd', game.add.sprite(598, 292, 'dd', 0));
     keyboardKeysMap.get('dd').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('dd').scale.setTo(1.2);

     keyboardKeysMap.set('c', game.add.sprite(292, 377, 'c', 0));
     keyboardKeysMap.get('c').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('c').scale.setTo(1.2);

     keyboardKeysMap.set('ö', game.add.sprite(575, 250, 'ö', 0));
     keyboardKeysMap.get('ö').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('ö').scale.setTo(1.2);

     keyboardKeysMap.set('j', game.add.sprite(440, 334, 'j', 0));
     keyboardKeysMap.get('j').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
     keyboardKeysMap.get('j').scale.setTo(1.2);

     keyboardKeysMap.set('v', game.add.sprite(336, 378, 'v', 0));
     keyboardKeysMap.get('v').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
     keyboardKeysMap.get('v').scale.setTo(1.2);

     keyboardKeysMap.set('k', game.add.sprite(481, 334, 'k', 0));
     keyboardKeysMap.get('k').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
     keyboardKeysMap.get('k').scale.setTo(1.2);

     keyboardKeysMap.set('l', game.add.sprite(520, 334, 'l', 0));
     keyboardKeysMap.get('l').animations.add('blink', [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0], 4, false);
     keyboardKeysMap.get('l').scale.setTo(1.2);

     keyboardKeysMap.set('æ', game.add.sprite(566, 333, 'æ', 0));
     keyboardKeysMap.get('æ').animations.add('blink', [0, 1, 0,1, 0,1, 0, 1, 0,1, 0], 4, false);
     keyboardKeysMap.get('æ').scale.setTo(1.2);

     keyboardKeysMap.set('p', game.add.sprite(555, 292, 'p', 0));
     keyboardKeysMap.get('p').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('p').scale.setTo(1.2);

     keyboardKeysMap.set('u', game.add.sprite(429, 294, 'u', 0));
     keyboardKeysMap.get('u').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('u').scale.setTo(1.2);

     keyboardKeysMap.set('þ', game.add.sprite(588, 376, 'þ', 0));
     keyboardKeysMap.get('þ').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('þ').scale.setTo(1.2);

     keyboardKeysMap.set('g', game.add.sprite(356, 334, 'g', 0));
     keyboardKeysMap.get('g').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('g').scale.setTo(1.2);

     keyboardKeysMap.set('h', game.add.sprite(398, 334, 'h', 0));
     keyboardKeysMap.get('h').animations.add('blink', [0, 8, 0, 8, 0,8, 0, 8, 0, 8, 0], 4, false);
     keyboardKeysMap.get('h').scale.setTo(1.2);

     keyboardKeysMap.set('e', game.add.sprite(263, 294, 'e', 0));
     keyboardKeysMap.get('e').animations.add('blink', [0, 1, 0, 1, 0,1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('e').scale.setTo(1.2);

     keyboardKeysMap.set('i', game.add.sprite(470, 292, 'i', 0));
     keyboardKeysMap.get('i').animations.add('blink', [0, 1, 0, 1, 0,1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('i').scale.setTo(1.2);

     keyboardKeysMap.set('y', game.add.sprite(387, 293, 'y', 0));
     keyboardKeysMap.get('y').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('y').scale.setTo(1.2);

     keyboardKeysMap.set('o', game.add.sprite(515, 293, 'o', 0));
     keyboardKeysMap.get('o').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('o').scale.setTo(1.2);

     keyboardKeysMap.set('b', game.add.sprite(377, 378, 'b', 0));
     keyboardKeysMap.get('b').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('b').scale.setTo(1.2);

     keyboardKeysMap.set('n', game.add.sprite(420, 378, 'n', 0));
     keyboardKeysMap.get('n').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('n').scale.setTo(1.2);

     keyboardKeysMap.set('m', game.add.sprite(461, 376.5, 'm', 0));
     keyboardKeysMap.get('m').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 4, false);
     keyboardKeysMap.get('m').scale.setTo(1.2);

     keyboardKeysMap.set('´', game.add.sprite(607, 334, '´', 0));
     keyboardKeysMap.get('´').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 2, false);
     keyboardKeysMap.get('´').scale.setTo(1.2);

     keyboardKeysMap.set('-', game.add.sprite(619, 250, '-', 0));
     keyboardKeysMap.get('-').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 2, false);
     keyboardKeysMap.get('-').scale.setTo(1.2);

     keyboardKeysMap.set('?', game.add.sprite(643, 293, '?', 0));
     keyboardKeysMap.get('?').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 2, false);
     keyboardKeysMap.get('?').scale.setTo(1.2);

     keyboardKeysMap.set('.', game.add.sprite(546, 376, '.', 0));
     keyboardKeysMap.get('.').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 2, false);
     keyboardKeysMap.get('.').scale.setTo(1.2);

     keyboardKeysMap.set('lshift', game.add.sprite(115, 377, 'lshift', 0));
     keyboardKeysMap.get('lshift').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 2, false);
     keyboardKeysMap.get('lshift').scale.setTo(1.2);

     keyboardKeysMap.set('hshift', game.add.sprite(630, 375.5, 'hshift', 0));
     keyboardKeysMap.get('hshift').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 2, false);
     keyboardKeysMap.get('hshift').scale.setTo(1.2);

     keyboardKeysMap.set(',', game.add.sprite(502, 376, ',', 0));
     keyboardKeysMap.get(',').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 2, false);
     keyboardKeysMap.get(',').scale.setTo(1.2);

     keyboardKeysMap.set(' ', game.add.sprite(284, 419, ' ', 0));
     keyboardKeysMap.get(' ').animations.add('blink', [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 2, false);
     keyboardKeysMap.get(' ').scale.setTo(1.2);
}
