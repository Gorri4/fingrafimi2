function createSounds(){

    //Upprifjun
    sounds['leftFJ']      =          game.add.audio('leftFJ');
    sounds['byrjunUpprifjun'] =      game.add.audio('byrjunUpprifjun');
    sounds['endirUpprifjun'] =       game.add.audio('endirUpprifjun');
    sounds['rightFJ'] =              game.add.audio('rightFJ');
    sounds['findFJ'] =               game.add.audio('findFJ');
    sounds['findF'] =                game.add.audio('findF');
    sounds['findJ'] =                game.add.audio('findJ');
    sounds['spaceFJ'] =              game.add.audio('spaceFJ');
    sounds['finalFJ'] =              game.add.audio('finalFJ');

    //T og M
    sounds['byrjunTM']      = game.add.audio('byrjunTM');
    sounds['findTTM']      = game.add.audio('findTTM');
    sounds['visV']      = game.add.audio('visV');
    sounds['visH']      = game.add.audio('visH');
    sounds['skrifT']    = game.add.audio('skrifT');
    sounds['findM']    = game.add.audio('findM');
    sounds['skrifM']    = game.add.audio('skrifM');
    sounds['finalTM'] =     game.add.audio('finalTM');

    //D og V
    sounds['byrjunDV'] =      game.add.audio('byrjunDV');
    sounds['findV'] =       game.add.audio('findV');
    sounds['lilD'] =       game.add.audio('lilD');
    sounds['visVV'] =     game.add.audio('visVV');
    sounds['skrifD'] =      game.add.audio('skrifD');
    sounds['findD'] =       game.add.audio('findD');
    sounds['finalDV'] =       game.add.audio('finalDV');
    sounds['skrifV'] =     game.add.audio('skrifV');

    //P og U
    sounds['byrjunPU'] =      game.add.audio('byrjunPU');
    sounds['findP'] =       game.add.audio('findP');
    sounds['lilP'] =       game.add.audio('lilP');
    sounds['visU'] =     game.add.audio('visU');
    sounds['skrifP'] =      game.add.audio('skrifP');
    sounds['findU'] =       game.add.audio('findU');
    sounds['finalPU'] =       game.add.audio('finalPU');
    sounds['skrifU'] =     game.add.audio('skrifU');

    //Þ og Y
    sounds['byrjunÞY'] =      game.add.audio('byrjunÞY');
    sounds['findÞ'] =       game.add.audio('findÞ');
    sounds['lilÞ'] =       game.add.audio('lilÞ');
    sounds['visY'] =     game.add.audio('visY');
    sounds['skrifÞ'] =      game.add.audio('skrifÞ');
    sounds['findY'] =       game.add.audio('findY');
    sounds['finalÞY'] =       game.add.audio('finalÞY');
    sounds['skrifY'] =     game.add.audio('skrifY');

    //Ö og C
    sounds['byrjunÖC'] =      game.add.audio('byrjunÖC');
    sounds['findÖ'] =       game.add.audio('findÖ');
    sounds['lilÖ'] =       game.add.audio('lilÖ');
    sounds['visC'] =     game.add.audio('visC');
    sounds['skrifÖ'] =      game.add.audio('skrifÖ');
    sounds['findC'] =       game.add.audio('findC');
    sounds['finalÖC'] =       game.add.audio('finalÖC');
    sounds['skrifC'] =     game.add.audio('skrifC');

    //Komma
    sounds['byrjunKomma'] =      game.add.audio('byrjunKomma');
    sounds['findUppKomma'] =       game.add.audio('findUppKomma');
    sounds['lilUppKomma'] =       game.add.audio('lilUppKomma');
    sounds['langKomma'] =     game.add.audio('langKomma');
    sounds['skrifÁ'] =      game.add.audio('skrifÁ');
    sounds['findKomma'] =       game.add.audio('findKomma');
    sounds['finalKomma'] =       game.add.audio('finalKomma');
    sounds['skrifKomma'] =     game.add.audio('skrifKomma');
    sounds['pressE'] =      game.add.audio('pressE');

    //Spurn
    sounds['upphafSpurn'] =      game.add.audio('upphafSpurn');
    sounds['findStrik'] =       game.add.audio('findStrik');
    sounds['lilStrik'] =       game.add.audio('lilStrik');
    sounds['skrifStrik'] =     game.add.audio('skrifStrik');
    sounds['findPunktur'] =      game.add.audio('findPunktur');
    sounds['baugPunktur'] =       game.add.audio('baugPunktur');
    sounds['skrifPunktur'] =       game.add.audio('skrifPunktur');
    sounds['findSpurn'] =     game.add.audio('findSpurn');
    sounds['shiftSpurn'] =      game.add.audio('shiftSpurn');
    sounds['shiftSpurn2'] =       game.add.audio('shiftSpurn2');
    sounds['skrifSpurn'] =     game.add.audio('skrifSpurn');
    sounds['finalSpurn'] =      game.add.audio('finalSpurn');

    //Textar
    sounds['byrjunTextar'] =      game.add.audio('byrjunTextar');
    sounds['findLTextar'] =       game.add.audio('findLTextar');
    sounds['findRTextar'] =       game.add.audio('findRTextar');
    sounds['finalTextar'] =     game.add.audio('finalTextar');
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
        if(nextPage[assignmentNr] === false){
            sounds['endirUpprifjun'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['endirUpprifjun'].play();
        }
            break;
        case 1:
        if(nextPage[assignmentNr] === false){
            sounds['finalTM'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalTM'].play();
        }
            break;
        case 2:
        if(nextPage[assignmentNr] === false){
            sounds['finalDV'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalDV'].play();
        }
            break;
        case 3:
        if(nextPage[assignmentNr] === false){
            sounds['finalPU'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalPU'].play();
        }
            break;
        case 4:
        if(nextPage[assignmentNr] === false){
            sounds['finalÞY'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalÞY'].play();
        }
            break;
        case 5:
        if(nextPage[assignmentNr] === false){
            sounds['finalÖC'].onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            sounds['finalÖC'].play();
        }
            break;
        case 6:
        if(nextPage[assignmentNr] === false){
            sounds['finalKomma'].onStop.addOnce(function(){  stopInstructorTalk(); }, this);
            sounds['finalKomma'].play();
        }
            break;
        case 7:
        if(nextPage[assignmentNr] === false){
            sounds['finalSpurn'].onStop.addOnce(function(){  stopInstructorTalk(); }, this);
            sounds['finalSpurn'].play();
        }
            break;
        case 8:
        if(nextPage[assignmentNr] === false){
            sounds['finalTextar'].onStop.addOnce(function(){  stopInstructorTalk(); }, this);
            sounds['finalTextar'].play();
        }
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
function addComplimentSound(assignmentNr,exerciseNr)
{
    if(assignmentNr === 0)
    {
        return game.add.audio(hrosMarglytta[exerciseNr]);
    }
    else if(assignmentNr === 1)
    {
        return game.add.audio(hrosFroskur[exerciseNr]);
    }
    else if(assignmentNr === 2)
    {
        return game.add.audio(hrosFroskur[exerciseNr]);
    }
    else if(assignmentNr === 3)
    {
        return game.add.audio(hrosByfluga[exerciseNr]);
    }
    else if(assignmentNr === 4)
    {
        return game.add.audio(hrosByfluga[exerciseNr]);
    }
    else if(assignmentNr === 5)
    {
        return game.add.audio(hrosLedur[exerciseNr]);
    }
    else if(assignmentNr === 6)
    {
        return game.add.audio(hrosLedur[exerciseNr]);
    }
    else if(assignmentNr === 7)
    {
        return game.add.audio(hrosMarglytta[exerciseNr]);
    }
    else if(assignmentNr === 8)
    {
        return game.add.audio(hrosMarglytta[exerciseNr]);
    }
}

function addMoreExerSound(assignmentNr){
    if(assignmentNr === 0)
    {
        console.log('hingad');
        
        return game.add.audio('UpprifjunFleiri');
    }
    else if(assignmentNr === 1)
    {
        return game.add.audio('TogMFleiri');
    }
    else if(assignmentNr === 2)
    {
        return game.add.audio('DogVFleiri');
    }
    else if(assignmentNr === 3)
    {
        return game.add.audio('PogUFleiri');
    }
    else if(assignmentNr === 4)
    {
        return game.add.audio('ÞogYFleiri');
    }
    else if(assignmentNr === 5)
    {
        return game.add.audio('OogCFleiri');
    }
    else if(assignmentNr === 6)
    {
        return game.add.audio('BroddFleiri');
    }
    else if(assignmentNr === 7)
    {
        return game.add.audio('SpurnFleiri');
    }
    else if(assignmentNr === 8)
    {
        return game.add.audio('TextiFleiri');
    }
    else {
        return game.add.audio('TextiFleiri');
    }
}

//Returns the correct audio to play for when you have finished all the exercises in an assignment
function addFinishSound(assignmentNr)
{
    if(assignmentNr === 0)
    {
        return game.add.audio('finishUpprifjun');
    }
    else if(assignmentNr === 1)
    {
        return game.add.audio('finishTogM');
    }
    else if(assignmentNr === 2)
    {
        return game.add.audio('finishDogV');
    }
    else if(assignmentNr === 3)
    {
        return game.add.audio('finishPogU');
    }
    else if(assignmentNr === 4)
    {
        return game.add.audio('finishÞogY');
    }
    else if(assignmentNr === 5)
    {
        return game.add.audio('finishOogC');
    }
    else if(assignmentNr === 6)
    {
        return game.add.audio('finishBrodd');
    }
    else if(assignmentNr === 7)
    {
        return game.add.audio('finishSpurn');
    }
    else if(assignmentNr === 8)
    {
        return game.add.audio('finishTexti');
    }
}