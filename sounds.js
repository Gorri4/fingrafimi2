function createSounds(){
        //Sound files initialized in a map so it is always accessible
    //Sounds initialized in map regarding the F og J assignment
    sounds['leftFJ']      = game.add.audio('leftFJ');
    sounds['byrjunUpprifjun']      = game.add.audio('byrjunUpprifjun');
    sounds['endirFJ']      = game.add.audio('endirFJ');
    sounds['rightFJ'] =     game.add.audio('rightFJ');
    sounds['findFJ'] =      game.add.audio('findFJ');
    sounds['findF'] =       game.add.audio('findF');
    sounds['findJ'] =       game.add.audio('findJ');
    sounds['spaceFJ'] =     game.add.audio('spaceFJ');
    sounds['finalFJ'] =     game.add.audio('finalFJ');

    //Sounds initialized in map regarding the D og K assignment
    sounds['byrjunDK']      = game.add.audio('byrjunDK');
    sounds['findTDK']      = game.add.audio('findTDK');
    sounds['visV']      = game.add.audio('visV');
    sounds['visH']      = game.add.audio('visH');
    sounds['skrifT']    = game.add.audio('skrifT');
    sounds['findM']    = game.add.audio('findM');
    sounds['skrifM']    = game.add.audio('skrifM');
    sounds['finalTM'] =     game.add.audio('finalTM');
    // sounds['findDK'] =      game.add.audio('findDK');
    // sounds['findD'] =       game.add.audio('findD');
    // sounds['findK'] =       game.add.audio('findK');

    //Sounds initialized in map regarding the S og L assignment
    sounds['findSL'] =      game.add.audio('findSL');
    sounds['findS'] =       game.add.audio('findS');
    sounds['findL'] =       game.add.audio('findL');
    sounds['finalSL'] =     game.add.audio('finalSL');

    //Sounds initialized in map regarding the A og Æ assignment
    sounds['findAAE'] =     game.add.audio('findAAE');
    sounds['findA'] =       game.add.audio('findA');
    sounds['findAE'] =      game.add.audio('findAE');
    sounds['finalAAE'] =    game.add.audio('finalAAE');

    //Sounds initialized in map regarding the Allir heimalyklar 1 assignment
    sounds['leftAll1'] =    game.add.audio('leftAll1');
    sounds['rightAll1'] =   game.add.audio('rightAll1');
    sounds['finalAll1'] =   game.add.audio('finalAll1');

    //Sounds initialized in map regarding the Allir heimalyklar 2 assignment
    sounds['leftAll2'] =    game.add.audio('leftAll2');
    sounds['rightAll2'] =   game.add.audio('rightAll2');
    sounds['finalAll2'] =   game.add.audio('finalAll2');

    //Sounds initialized in map regarding the E og H assignment
    sounds['handsEH'] =     game.add.audio('handsEH');
    sounds['findE'] =       game.add.audio('findE');
    sounds['typingE'] =     game.add.audio('typingE');
    sounds['typeE'] =       game.add.audio('typeE');
    sounds['findH'] =       game.add.audio('findH');
    sounds['typingH'] =     game.add.audio('typingH');
    sounds['typeH'] =       game.add.audio('typeH');
    sounds['finalEH'] =     game.add.audio('finalEH');

    //Sounds initialized in map regarding the I og G assignment
    sounds['handsIG'] =     game.add.audio('handsIG');
    sounds['findI'] =       game.add.audio('findI');
    sounds['typingI'] =     game.add.audio('typingI');
    sounds['typeI'] =       game.add.audio('typeI');
    sounds['gjIG1'] =       game.add.audio('gjIG');
    sounds['gjIG2'] =       game.add.audio('gjIG');
    sounds['findG'] =       game.add.audio('findG');
    sounds['typingG'] =     game.add.audio('typingG');
    sounds['typeG'] =       game.add.audio('typeG');
    sounds['finalIG'] =     game.add.audio('finalIG');

    //Sounds initialized in map regarding the B og N assignment
    sounds['handsBN'] =     game.add.audio('handsBN');
    sounds['findB'] =       game.add.audio('findB');
    sounds['typingB'] =     game.add.audio('typingB');
    sounds['typeB'] =       game.add.audio('typeB');
    sounds['gjBN1'] =       game.add.audio('gjBN');
    sounds['gjBN2'] =       game.add.audio('gjBN');
    sounds['findN'] =       game.add.audio('findN');
    sounds['typingN'] =     game.add.audio('typingN');
    sounds['typeN'] =       game.add.audio('typeN');
    sounds['finalBN'] =     game.add.audio('finalBN'); 

    //Sounds initialized in map regarding the R og O assignment
    sounds['handsRO'] =     game.add.audio('handsRO');
    sounds['findR'] =       game.add.audio('findR');
    sounds['typingR'] =     game.add.audio('typingR');
    sounds['typeR'] =       game.add.audio('typeR');
    sounds['findO'] =       game.add.audio('findO');
    sounds['typingO'] =     game.add.audio('typingO');
    sounds['typeO'] =       game.add.audio('typeO');
    sounds['finalRO'] =     game.add.audio('finalRO');

    //Sounds initialized in map regarding the Broddstafir assignment
    sounds['handsBRODD'] =      game.add.audio('handsBRODD');
    sounds['findComma'] =       game.add.audio('findComma');
    sounds['typingComma'] =     game.add.audio('typingComma');
    sounds['typingComma2'] =    game.add.audio('typingComma2');
    sounds['typingComma3'] =    game.add.audio('typingComma3');
    sounds['typeCommaE'] =      game.add.audio('typeCommaE');
    sounds['finalBRODD'] =      game.add.audio('finalBRODD');

    //Sounds initialized in map regarding the Hástafir assignment
    sounds['handsHA'] =         game.add.audio('handsHA');
    sounds['findLShift'] =      game.add.audio('findLShift');
    sounds['typingLShift'] =    game.add.audio('typingLShift');
    sounds['findRShift'] =      game.add.audio('findRShift');
    sounds['typingRShift'] =    game.add.audio('typingRShift');
    sounds['typingOHA'] =       game.add.audio('typingOHA');
    sounds['typingOHA2'] =      game.add.audio('typingOHA2');
    sounds['typeOHA'] =         game.add.audio('typeOHA');
    sounds['finalHA'] =         game.add.audio('finalHA');

}

function stopAllSounds()
{
    for(var key in sounds)
    {
        sounds[key].onStop.removeAll();   
    }
}

//Depending on what assignment you are on, it will play the correct sound when you are entering the Assignment page coming from the
//warmUp animations
function addFinalSound(assignmentNr)
{
    switch(assignmentNr)
    {
        case 0:
            sounds['endirFJ'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['endirFJ'].play();
            break;
        case 1:
            sounds['finalTM'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalTM'].play();
            break;
        case 2:
            sounds['finalSL'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalSL'].play();
            break;
        case 3:
            sounds['finalAAE'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalAAE'].play();
            break;
        case 4:
            sounds['finalAll1'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalAll1'].play();
            break;
        case 5:
            sounds['finalAll2'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalAll2'].play();
            break;
        case 6:
            sounds['finalEH'].onStop.addOnce(function(){  stopInstructorTalk(); }, this);
            sounds['finalEH'].play();
            break;
        case 7:
            sounds['finalIG'].onStop.addOnce(function(){  stopInstructorTalk(); }, this);
            sounds['finalIG'].play();
            break;
        case 8:
            sounds['finalBN'].onStop.addOnce(function(){  stopInstructorTalk(); }, this);
            sounds['finalBN'].play();
            break;
        case 9:
            sounds['finalRO'].onStop.addOnce(function(){  stopInstructorTalk(); }, this);
            sounds['finalRO'].play();
            break;
        case 10:
            sounds['finalBRODD'].onStop.addOnce(function(){  stopInstructorTalk(); }, this);
            sounds['finalBRODD'].play();
            break;
        case 11:
            sounds['finalHA'].onStop.addOnce(function(){  stopInstructorTalk(); }, this);
            sounds['finalHA'].play();
            break;
    }
}


//Returns the correct audio to play for when you select an assignment in the home page
function addInstructionSound(assignmentNr)
{
    if(assignmentNr === 0)
    {
            return game.add.audio('instructionUpprifjun');
    }
    else if(assignmentNr === 1)
    {
            return game.add.audio('instructionTM');
    }
    else if(assignmentNr === 2)
    {
            return game.add.audio('instructionDV');
    }
    else if(assignmentNr == 3)
    {
            return game.add.audio('instructionPU');
    }
    else if(assignmentNr === 4)
    {
            return game.add.audio('instructionÞY');
    }
    else if(assignmentNr === 5)
    {
            return game.add.audio('instructionOC');
    }
    else if(assignmentNr === 6)
    {
            return game.add.audio('instructionBrodd');
    }
    else if(assignmentNr === 7)
    {
            return game.add.audio('instructionSpurn');
    }
    else if(assignmentNr === 8)
    {
            return game.add.audio('instructionTexti');
    }
    else if(assignmentNr === 9)
    {
            return game.add.audio('instructionRO');
    }
    else if(assignmentNr === 10)
    {
            return game.add.audio('instructionBRODD');
    }
    else if(assignmentNr === 11)
    {
            return game.add.audio('instructionHA');
    }
}


//Returns the correct audio to play for when you have finished an exercises in an assignment
function addComplimentSound(assignmentNr)
{
    if(assignmentNr === 0)
    {
        return this.game.add.sound('complimentFJ');
    }
    else if(assignmentNr === 1)
    {
        return game.add.audio('complimentDK');
    }
    else if(assignmentNr === 2)
    {
        return game.add.audio('complimentSL');
    }
    else if(assignmentNr === 3)
    {
        return game.add.audio('complimentAAE');
    }
    else if(assignmentNr === 4)
    {
        return game.add.audio('complimentALL1');
    }
    else if(assignmentNr === 5)
    {
        return game.add.audio('complimentALL2');
    }
    else if(assignmentNr === 6)
    {
        return game.add.audio('complimentEH');
    }
    else if(assignmentNr === 7)
    {
        return game.add.audio('complimentIG');
    }
    else if(assignmentNr === 8 || assignmentNr === 9)
    {
        return game.add.audio('complimentBN');
    }
    else if(assignmentNr === 10 || assignmentNr === 11)
    {
        return game.add.audio('complimentBRODD');
    }
}

//Returns the correct audio to play for when you have finished all the exercises in an assignment
function addFinishSound(assignmentNr)
{
    if(assignmentNr === 0)
    {
        return game.add.audio('finishFJ');
    }
    else if(assignmentNr === 1)
    {
        return game.add.audio('finishDK');
    }
    else if(assignmentNr === 2)
    {
        return game.add.audio('finishSL');
    }
    else if(assignmentNr === 3)
    {
        return game.add.audio('finishAAE');
    }
    else if(assignmentNr === 4)
    {
        return game.add.audio('finishALL1');
    }
    else if(assignmentNr === 5)
    {
        return game.add.audio('finishALL2');
    }
    else if(assignmentNr === 6)
    {
        return game.add.audio('finishEH');
    }
    else if(assignmentNr === 7)
    {
        return game.add.audio('finishIG');
    }
    else if(assignmentNr === 8 || assignmentNr === 9)
    {
        return game.add.audio('finishBN');
    }
    else if(assignmentNr === 10 || assignmentNr === 11)
    {
        return game.add.audio('finishBRODD');
    }
}