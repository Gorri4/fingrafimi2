/*jshint sub:true*/

// Entering each assignment is a sequence of functions which we have named the following:
// Instruction: The first animation when you choose an assignment
// WarmUp: The rest of the animations which happen when you press the arrow ("Skip button") after the first animation
// Assignment: The main screen of an assignment. Here you can choose different exercises, once an exercise is selected
// the keyboad input is activated and the exercise text is displayed above the displayed keyboard so the user can execute the exercise.
// We reffer to the assignments by numbers from 0 (F og J) to 11 (Hástafir)

// Create instance of the game
var width = 900;
var height = 600;
var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update}, true);

// Create a variable for bitMapData to display text, used in functions Assignment and KeyPress
var textArea;
var textAreaX = 1000;
var textAreaY = 65;

// Variables for the assignments texts and its stylings
var style = { font: '42px Calibri', fill: 'black', align: 'right', wordWrap: true, wordWrapWidth: 900, backgroundColor: "rgba(110,255,255,1)", align: 'center'};
var instrstyle = { font: '14px Calibri', fill: 'black', wordWrap: true, align: 'center', wordWrapWidth: 200,backgroundColor: "rgba(0,0,0,0)"}
var instructionStyle = { font: '64px Calibri', fill: 'black', align: 'left', wordWrap: true, wordWrapWidth: 600,backgroundColor: "rgba(110,255,255,1)", align: 'center'};
var text = "";
var textX = 500;
var textY = 50;

//Variables for text positions used by keyPress
var corrCount = 0;
var incorrPos = -1;
var textPos = 0;

// Variables for intro sound
var intro;
var firstLoad = true;

// Exit button, mute button and logo
var exitBtn;
var logo;
var logoS;
var muteBtn;

// Buttons that need to be initialized at beginning
var balloon;
var clouds;
var fish1;
var fish2;
var leftHand;
var rightHand;
var warmupHead;
var moveDownRight = false;
var moveDownLeft = false;

//Audio variables
var sounds = {};
var wrongSound;

//Other variables
var comingFromExercise = false;
var warmUps = [ false, false, false, false, false, false, false, false, false, false, false, false ];
var nextPage = [false, false, false, false, false, false, false, false, false];
var preloadBar;
var moreExerSoundPlay = false;
var distXSpider = 0.7;

function create() 
{
    //Objects that need to be created at first to be moved later by the Update() function
    balloon = game.add.sprite(100, 100, 'balloonSprite', 0);
    clouds = game.add.image(0, 10,'clouds');
    spider = game.add.image(0, 10,'spider');
    solBak = game.add.sprite(0,10,'solBak');
    bee = game.add.image(0,10,'bee');
    intro = game.add.audio('intro');
    leftHand = game.add.sprite(75, 700, 'lHand', 0);
    rightHand = game.add.sprite(205, 700, 'rHand', 0);
    warmupHead = game.add.sprite(1000, 210, 'instructorMarglytta', 0);

    createSounds();

    //loadHomePage will display the main screen of the game
    loadHomePage();    
}

function animateBee(){
    if(bee.x > 500){
        bee.x -= 1;
        bee.y -= 0.2;
    }
    if(bee.x < 500 || bee.x === 500){
        bee.x -= 1;
        bee.y += 0.5;
    }
}

//This function is called upon and repaints the canvas constantly, thus the actions in here are only called upon at certain times
function update()
{

        //This will make the left and right hand move from below the visible part of the canvas to their correct positions above the keys
        if(leftHand.y > 303 && balloon.visible === true && moveDownLeft===false)
        {
            leftHand.y -= 4;
        }
        if(rightHand.y > 275 && balloon.visible === true && moveDownRight===false)
        {
            rightHand.y -= 4;
        }
        
         if(moveDownRight && rightHand.y < 350){
             rightHand.y += 4;
         }
        
        if(moveDownLeft && leftHand.y < 450){
            leftHand.y += 4;
        }

    //The clouds will constantly move to the right, although the clouds are not visible when not inside the
    //Allir heimalyklar 1 and 2.
    clouds.x += 0.3;

    //Animate moving bee
    animateBee();

    //The clouds position will reset at a certain position and keep moving from there, making the illusion that
    //they are continiously moving to the right 
    if(clouds.x === -129)
    {
        clouds.x = -995;
    }

    //Animate moving spider
    if(spider.x > 50){
        distXSpider -= 0.0001;
        spider.x -= distXSpider;
        spider.y += distXSpider/6;
    }
}

// loadHomePage initializes and displays the necessary items for the Home Page of the game where the user can
// select assignments to practice in
function loadHomePage() 
{
    
    //Sets all of the warmUps array to false
    initWarmUps();
    //Clears canvas, stops all currently playing sounds and erases all CallBack events.
    initGame();

    //Background loaded
    var homePage = game.add.image(game.world.centerX, game.world.centerY, 'homePage');
    homePage.anchor.setTo(0.5, 0.5);
    homePage.width = width;
    homePage.height = height;
    
    //Fingrafimi logo loaded
    var logoL = game.add.image(0, 0, 'logoL');

    //Buttons for all assignments added, clicking on them calls on the Instructions function first sending into it
    //the number of the assignment and exercise chosen
    
    var btnUpprifjun = game.add.button(125, 300, 'upprifjun');
    btnUpprifjun.events.onInputDown.add(function(){ Instructions(0, -1); });
    btnUpprifjun.frame = 0;
    btnUpprifjun.events.onInputOver.add(function(){ btnUpprifjun.frame = 1; }, this);
    btnUpprifjun.events.onInputOut.add(function(){ btnUpprifjun.frame = 0; }, this);

    var btnTogM = game.add.button(165, 420, 'togm');
    btnTogM.events.onInputDown.add(function(){ Instructions(1, -1); });
    btnTogM.frame = 0;
    btnTogM.events.onInputOver.add(function(){ btnTogM.frame = 1; }, this);
    btnTogM.events.onInputOut.add(function(){ btnTogM.frame = 0; }, this);

    var btnDogV = game.add.button(220, 480, 'dogv');
    btnDogV.events.onInputDown.add(function(){ Instructions(2, -1); });
     btnDogV.frame = 0;
     btnDogV.events.onInputOver.add(function(){ btnDogV.frame = 1; }, this);
     btnDogV.events.onInputOut.add(function(){ btnDogV.frame = 0; }, this);
     
    var btnPogU = game.add.button(330, 470, 'pogu');
    btnPogU.events.onInputDown.add(function(){ Instructions(3, -1); });
    btnPogU.frame = 0;
    btnPogU.events.onInputOver.add(function(){ btnPogU.frame = 1; }, this);
    btnPogU.events.onInputOut.add(function(){ btnPogU.frame = 0; }, this);

    var btnÞogY = game.add.button(450, 515, 'þogy');
    btnÞogY.events.onInputDown.add(function(){ Instructions(4, -1); });
    btnÞogY.frame = 0;
    btnÞogY.events.onInputOver.add(function(){ btnÞogY.frame = 1; }, this);
    btnÞogY.events.onInputOut.add(function(){ btnÞogY.frame = 0; }, this);

    var btnOogC = game.add.button(540, 460, 'oogc');
    btnOogC.events.onInputDown.add(function(){ Instructions(5, -1); });
    btnOogC.frame = 0;
    btnOogC.events.onInputOver.add(function(){ btnOogC.frame = 1; }, this);
    btnOogC.events.onInputOut.add(function(){ btnOogC.frame = 0; }, this);

    var btnBroddstafir = game.add.button(560, 410, 'broddstafir');
    btnBroddstafir.events.onInputDown.add(function(){ Instructions(6, -1); });
    btnBroddstafir.frame = 0;
    btnBroddstafir.events.onInputOver.add(function(){ btnBroddstafir.frame = 1; }, this);
    btnBroddstafir.events.onInputOut.add(function(){ btnBroddstafir.frame = 0; }, this);

    var btnBandogSpurn = game.add.button(145, 365, 'bandogspurn');
    btnBandogSpurn.events.onInputDown.add(function(){ Instructions(7, -1); });
     btnBandogSpurn.frame = 0;
     btnBandogSpurn.events.onInputOver.add(function(){ btnBandogSpurn.frame = 1; }, this);
     btnBandogSpurn.events.onInputOut.add(function(){ btnBandogSpurn.frame = 0; }, this);
 

    var btnTexta = game.add.button(615, 355, 'texta');
    btnTexta.events.onInputDown.add(function(){ Instructions(8, -1); });
    btnTexta.frame = 0;
    btnTexta.events.onInputOver.add(function(){ btnTexta.frame = 1; }, this);
    btnTexta.events.onInputOut.add(function(){ btnTexta.frame = 0; }, this);
    
    // Turn off keyboard listening events
    game.input.keyboard.stop();
    
    //Displays the logo from Menntamálastofnun in the botton left corner
    addLogo(20, 0.4);

    //Resets all variables regarding the exercise text
    initTextVariables();

    //Displays a button which can mute or unmute the sound for the game
    addMuteButton();

    //Displays a button which when clicked on it will open a progress sheet PDF for students in a new tab
    var btnmat = game.add.button(790, 520, 'mat', function() { window.open("https://vefir.mms.is/fingrafimi2/fingrafimi2_matsbl.pdf", "_blank");}, this);    
    btnmat.scale.setTo(0.8);

    //Displays a small window in the canvas with information about the game and its creaters
    var btnabout = game.add.button(850, 520, 'aboutButton', function(){ loadAbout(); }, this);    
    btnabout.scale.setTo(1);
    
    //If this is the first time loadHomePage is loaded then do the following
    if(firstLoad)
    {
        //Start playing intro audio
        intro.play();
        //Make sure this will not be played again unless browser is refreshed
        firstLoad = false;
    }
}

//Resets all variables regarding the exercise text
function initTextVariables()
{
    text = "";
    corrCount = 0;
    incorrPos = -1;
    textPos = 0;

}

//Sets all of the warmUps array to false
function initWarmUps()
{
    for(i = 0; i < 12; i++)
    {
        warmUps[i] = false;
    }

}

//Remove all CallBack events, clears the canvas and stops all currently playing sounds in that order
function initGame()
{
    stopAllSounds();
    game.input.keyboard.onDownCallback = game.input.keyboard.onUpCallback = game.input.keyboard.onPressCallback = null;
    game.world.removeAll();
    game.sound.stopAll();
}

//The assignment function is where the exercises can be executed, all of its objects are initialized here and they are different
//depending on which assignment we are on
function Assignment(assignmentNr, exerciseNr) 
{
    //Sets all of the warmUps array to false
    initWarmUps();

    //Remove all CallBack events, clears the canvas and stops all currently playing sounds in that order
    initGame();
  
    //Turn on keyboard event listeners
    game.input.keyboard.start();
    //Empty the hidden text box in the HTML page
    $("#assignment").val("");    

   	// Load background depending on which assignment
    loadBackground(assignmentNr);

    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    // Add the correct instructor with a talking animation
    var instructor = addAssignmentInstructor(assignmentNr);
    
    // Load keyboard and animations which make the keys blink
    loadKeyboard(assignmentNr, exerciseNr);

    //If exercise number is greater or equal than 0 when the Assignment function is called then we are in an exercise, thus
    //we must display the exercise text, empty the hidden HTML input textbox and call keyPress which will turn on the
    //keyboard event listeners and process the input of keys  
    if(exerciseNr >= 0)
    {
        // Create the textArea
        text = exercisesArray[assignmentNr][exerciseNr];
        if(text.length > 45){
            style.font = '38px Calibri'
        }
        else{
            style.font = '42px Calibri'
        }
        textArea = game.add.text(game.world.centerX, game.world.centerY/2 + 40, text, style);
        textArea.anchor.set(0.5);

        // When key is pressed the function keyPress is called
        game.input.keyboard.addCallbacks(this, null, function(){
            char = document.getElementById('assignment').value;
            
            $("#assignment").val(""); 
            if(char !== '' && char !== "´" && char !== "´´")
            {
                keyPress(char, assignmentNr, exerciseNr);
            }
        },null);
    }

    //If exercise number is less than 0, then we are calling the Assignment function from the WarmUp function, thus
    //we must add the speech bubble for the instructor, play the correct audio and make the instructor talk
    else
    {
        balloon = game.add.sprite(440, 25, 'balloonSprite', 0);
        balloon.scale.setTo(0.6);
        if(assignmentNr === 8){
            balloon.scale.setTo(0.7);
            addBalloontext(addBalloon(assignmentNr),14,35,100,500);

        }
        else if(assignmentNr === 2){
            addBalloontext(addBalloon(assignmentNr),16,5,100,500);
        }else{
            addBalloontext(addBalloon(assignmentNr),18,25,100,500);

        }
        
        // instructionText.anchor.set(0.5);
        addFinalSound(assignmentNr);
        instructor.play('talk');
    }
    //Add button that displays more exercises
    addMoreExerButton(assignmentNr,exerciseNr);
    //Add the exit button to the canvas so we can return to the home page
    addExitButton();
    //Add the mute button to the canvas so we can mute the in-game sound if we want
    addMuteButton();
    //Add the exercise buttons which will activate 
    addLogo(20,0.4);

    addExercises(assignmentNr);

    //If user pressed more exercises button
    if(moreExerSoundPlay){
        var moreExerSound = addMoreExerSound(assignmentNr);
        moreExerSound.play();
        moreExerSoundPlay = false;
    }

    //Simple boolean variable comingFromExercise tells us if we are calling the Assignment function from another Assignment function, this
    //means that we have come from completing an exercise and so we must play the audio that compliments the user when he finishes an exercise
    if(comingFromExercise)
    {
        var complimentSound = addComplimentSound(assignmentNr, exerciseNr);
        instructor.play('talk');
        complimentSound.onStop.addOnce(function(){ stopInstructorTalk(); });
        complimentSound.play();
        comingFromExercise = false;
    }
    if(exerciseNr >= 15){
        if(nextPage[assignmentNr]){
        }else{
            nextPage[assignmentNr] = true;
            moreExerSoundPlay = true;
            Assignment(assignmentNr,exerciseNr);
        }
    }else{
        if(nextPage[assignmentNr]){
            nextPage[assignmentNr] = false;
            moreExerSoundPlay = false;
            Assignment(assignmentNr,exerciseNr);
        }else{
        }
    }
}

//Iterate through the map for keyboardKeysMap which contains the keyboard and all the blinking animations for the keys and 
//call an animation stop event on all keys
function stopKeyboardAnimations()
{
    keyboardKeysMap.forEach(function(key,value,map) 
    {
       if(keyboardKeysMap.get(value).animations)
       {  
            keyboardKeysMap.get(value).animations.stop(false,true);
       }
    });
}

//Add the logo from Menntamálastofnun on the bottom left of the screen, x is the x coordinate on where to put the logo and sc is the scale we want
function addLogo(x, sc)
{
    logo = game.add.image(x, 570, 'logoMennt');
    logo.scale.setTo(sc);
}

//This function resolves the key that is pressed, here we play the wrongSound soundclip if the key pressed is not the correct one, we update the text area
//and make the keys on the keyboard blink to show which key the game expects the user to press.
function keyPress(char, assignmentNr, exerciseNr) 
{
    //Iterate through the keyboardKeysMap and call animations.stop() on all keys
    stopKeyboardAnimations();
   
   //Add the wrongSound soundclip to play if incorrect key is pressed
    wrongSound = game.add.audio('wrongSound');

    //if incorrPos is -1 then no incorrect key has been pressed, if its not -1 the variable is an index to the location of the incorrect character in the exercise that was pressed
    if(incorrPos != -1)
    {
        //If the key pressed is the same as the one the game expects we continue having incorrPos as -1 to indicate that the key pressed was correct
        if(char === text.charAt(incorrPos))
        {
            incorrPos = -1;
        }
        //If the key press is not the same we want to make the key that is expected to be pressed by the user to blink
        else
        {
            //Á, É, Í and Ó are special cases to blink so we want to detect if the key we want to blink is one of them
            if(text.charAt(incorrPos).toLowerCase() === 'á')
            {
                //We check if the letter is in Uppercase to make the shift keys blink as well
                if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
                {                     
                    keyboardKeysMap.get('lshift').play('blink');
                    keyboardKeysMap.get('hshift').play('blink');
                }

                //We make both a and ´ keys blink to indicate that we want the letter Á
                keyboardKeysMap.get('a').play('blink');                
                keyboardKeysMap.get('´').play('blink');
            }
            //Á, É, Í and Ó are special cases to blink so we want to detect if the key we want to blink is one of them
            else if(text.charAt(incorrPos).toLowerCase() === 'é')
            {
                //We check if the letter is in Uppercase to make the shift keys blink as well
                if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
                {                      
                    keyboardKeysMap.get('lshift').play('blink');
                    keyboardKeysMap.get('hshift').play('blink');
                }
                
                //We make both e and ´ keys blink to indicate that we want the letter Á
                keyboardKeysMap.get('e').play('blink');
                keyboardKeysMap.get('´').play('blink');
            }
            //Á, É, Í and Ó are special cases to blink so we want to detect if the key we want to blink is one of them
            else if(text.charAt(incorrPos).toLowerCase() === 'í')
            {
                //We check if the letter is in Uppercase to make the shift keys blink as well
                if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
                {                      
                    keyboardKeysMap.get('lshift').play('blink');
                    keyboardKeysMap.get('hshift').play('blink');
                }

                //We make both i and ´ keys blink to indicate that we want the letter Á
                keyboardKeysMap.get('i').play('blink');
                keyboardKeysMap.get('´').play('blink');
            }
            //Á, É, Í and Ó are special cases to blink so we want to detect if the key we want to blink is one of them
            else if(text.charAt(incorrPos).toLowerCase() === 'ó')
            {
                //We check if the letter is in Uppercase to make the shift keys blink as well
                if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
                {                      
                    keyboardKeysMap.get('lshift').play('blink');
                    keyboardKeysMap.get('hshift').play('blink');
                }

                //We make both o and ´ keys blink to indicate that we want the letter Á
                keyboardKeysMap.get('o').play('blink');
                keyboardKeysMap.get('´').play('blink');
            }
            //Space is another special case to check
            else if(text.charAt(incorrPos) === ' ')
            {                    
                //We make the spacebar key blink
                keyboardKeysMap.get(' ').play('blink');
            }
            //We check to see if the next expected character is in Uppercase, if so we want to make the shift keys blink along with the key of the expected character
            else if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
            {
                //Make the shift keys blink                     
                keyboardKeysMap.get('lshift').play('blink');
                keyboardKeysMap.get('hshift').play('blink');
                //Since the map keys are all in lowercase, we turn the character to lowercase to get the sprite object and make it blink
                keyboardKeysMap.get(text.charAt(incorrPos).toLowerCase()).play('blink');
            }
            //If non of our special cases are caught, then we have an "ordinary" letter and we fetch it in our map tomake it blink
            else
            {
                keyboardKeysMap.get(text.charAt(incorrPos)).play('blink');
            }

            //Since the key pressed when we are in this else statement is wrong, we want to play the wrongSound soundclip we initialized
            wrongSound.play();
        }
    }
    else
    {
        if(char !== text.charAt(textPos))
        {
            incorrPos = textPos;

            if(text.charAt(incorrPos).toLowerCase() === 'á')
            {
                if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
                {                     
                    keyboardKeysMap.get('lshift').play('blink');
                    keyboardKeysMap.get('hshift').play('blink');
                }

                keyboardKeysMap.get('a').play('blink');                
                keyboardKeysMap.get('´').play('blink');
            }
            else if(text.charAt(incorrPos).toLowerCase() === 'é')
            {
                if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
                {                     
                    keyboardKeysMap.get('lshift').play('blink');
                    keyboardKeysMap.get('hshift').play('blink');
                }

                keyboardKeysMap.get('e').play('blink');
                keyboardKeysMap.get('´').play('blink');
            }
            else if(text.charAt(incorrPos).toLowerCase() === 'í')
            {
                if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
                { 
                    keyboardKeysMap.get('lshift').play('blink');
                    keyboardKeysMap.get('hshift').play('blink');
                }

                keyboardKeysMap.get('i').play('blink');
                keyboardKeysMap.get('´').play('blink');
            }
            else if(text.charAt(incorrPos).toLowerCase() === 'ó')
            {
                if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
                { 
                    keyboardKeysMap.get('lshift').play('blink');
                    keyboardKeysMap.get('hshift').play('blink');
                }

                keyboardKeysMap.get('o').play('blink');
                keyboardKeysMap.get('´').play('blink');
            }
            else if(text.charAt(incorrPos).toLowerCase() === ' ')
            {
                if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
                {                      
                    keyboardKeysMap.get(' ').play('blink');
                    keyboardKeysMap.get(' ').play('blink');
                }
            }
            else if(text.charAt(incorrPos) === text.charAt(incorrPos).toUpperCase())
            {
                keyboardKeysMap.get('lshift').play('blink');
                keyboardKeysMap.get('hshift').play('blink');
                keyboardKeysMap.get(text.charAt(incorrPos).toLowerCase()).play('blink');
            }
            else
            {
                keyboardKeysMap.get(text.charAt(incorrPos)).play('blink');
            }
            wrongSound.play();
        }
        textPos = textPos + 1;
    }

    // Clear the textArea
    textArea.destroy();
    //Display the part of the exercise text that we have completed in green
    textArea = game.add.text(game.world.centerX, game.world.centerY/2 + 40, text, style);
    textArea.anchor.set(0.5);
    textArea.addColor('#ff0000', 0);

    //If we pressed a wrong key, we want to color said key orange to identify that it was wrongly pressed
    if(incorrPos != -1)
    {
        textArea.addColor('#ffa500', incorrPos);
    }
    
    //Color rest of exercise text white
    textArea.addColor('#000000', textPos);

    //If we have reached the end of the exercise text and the previous key pressed was not incorrect
    if(textPos >= text.length && incorrPos === -1)
    {
        //Quitting an exercise requires that we turn off the keyboard event listener and reset the variables for the exercise text
        quitExercise();
        //The exercisesFinished array tells us which exercises are complete or not in all assignments, to get the current exercise we index it like below
        exercisesFinished[assignmentNr][exerciseNr] = true;
        
        //Check if all exercises are complete in the current assignment
        if(finishedAssignment(assignmentNr))
        {
            //Since this is the last exercise in the assignment, we will not be calling the Assignment function again so we need to manually color
            //the button of the current exercise to green
            exerciseBtnArray[assignmentNr][exerciseNr].frame = 1;

            //We load the correct sound to play where the instructor compliments the user on finishing all the exercises in the current assignment
            var finishSound = addFinishSound(assignmentNr);
            //Make the instructor stop talking when the soundclip was finished playing
            finishSound.onStop.addOnce(function(){ stopInstructorTalk(); }, this);
            //Make the instructor talk
            instructor.play('talk');
            //Play the soundclip that we loaded
            finishSound.play();
            //Return so we do not continue in the function
            return;
        }
        //We want to indicate that we are coming from another exercise so that Assignment plays the soundclip that compliments the user for finishing an exercise
        comingFromExercise = true;

        //We reach this point if all exercises have not been finished and we need to find the next exercise that is not finished
        exerciseNr = findNextExercise(assignmentNr, exerciseNr);
        
        //We call Assignment to go to the next exercise in line
        Assignment(assignmentNr, exerciseNr);
        return;
    }
}

//Check if all exercises are complete in a certain assignment
function finishedAssignment(assignmentNr)
{
    for(i = 0 ; i  < exercisesFinished[assignmentNr].length ; i++)
    {
        // If at least one exercise is not finished, return false.
        if(!exercisesFinished[assignmentNr][i])
        {
            return false;
        }
    }
    return true;
}

//Find the next exercise in the assignment which is not complete, returns the index for said exercise
function findNextExercise(assignmentNr, exerciseNr)
{
    //Iterate through exercisesFinished[assignmentNr] and return the first index which is not complete, said index is then used 
    //in exercisesArray to load the correct next unfinished exercise
    for(i = exerciseNr; i < exercisesFinished[assignmentNr].length; i++)
    {
        if(!exercisesFinished[assignmentNr][i])
        {
            return i;
        }
    }
    for(i = 0 ; i  < exerciseNr ; i++)
    {
        // If at least one exercise is not finished, return false.
        if(!exercisesFinished[assignmentNr][i])
        {
            return i;
        }
    }
    return 0;
}

// Add the mute button to the canvas, this is called upon on all functions, Home Page, Instructions, WarmUps and Assignment
function addMuteButton()
{
    muteBtn = game.add.button(800, 20, 'sound');
    // Add hover affect
    muteBtn.events.onInputOver.add(function()
    { 
        if(game.sound.mute === false)
        { 
            muteBtn.frame = 2; 
        } 
    });
    muteBtn.events.onInputOut.add(function()
    { 
        if(game.sound.mute === false)
        { 
            muteBtn.frame = 0; 
        } 
    });

    muteBtn.scale.setTo(0.35);
    muteBtn.events.onInputDown.add(muteSound);
    muteBtn.frame = 0;

    if(game.sound.mute)
    {
        muteBtn.frame = 1;
    }
    else
    {
        muteBtn.frame = 0;
    }
}

//Mutes or unmutes the sound for the game, it also changes the frame of the button to identify if it is muted or not
function muteSound()
{
    if(game.sound.mute)
    {
        game.sound.mute = false;
        muteBtn.frame = 0;
    }
    else
    {
        game.sound.mute = true;
        muteBtn.frame = 1;
    }
}

//Adds to the canvas an exit button in three places which will take the user back to the home page: Instructions, WarmUps and Assignment
function addExitButton()
{
    //Add the button
    exitBtn = game.add.button(850, 20, 'exit');
    //Add hover affect which changes the button if the mouse is hovering over the button or not
    exitBtn.events.onInputOver.add(function(){ exitBtn.frame = 1;});
    exitBtn.events.onInputOut.add(function(){ exitBtn.frame = 0;});

    //When the button is clicked, quitExercise() and loadHomePage() are called 
    exitBtn.events.onInputDown.add(quitExercise);
    exitBtn.events.onInputDown.add(loadHomePage);
}

//Saekir rettan takka fyrir aefinguna
function getSpriteName(assignmentNumb){
    var nafnSprite;
    switch(assignmentNumb) {
        case 0:
            nafnSprite = 'upprifjun';
            break;
        case 1:
            nafnSprite = 'togm';
            break;
        case 2:
            nafnSprite = 'dogv';
            break;  
        case 3:
            nafnSprite = 'pogu';
            break;
        case 4:
            nafnSprite = 'þogy';
            break;
        case 5:
            nafnSprite = 'oogc';
            break;
        case 6:
            nafnSprite = 'broddstafir';
            break;
        case 7:
            nafnSprite = 'bandogspurn';
            break;
        case 8:
            nafnSprite = 'texta';
            break;
            
        default:
            nafnSprite = '';
    }
    return nafnSprite;
}

//Add the Fingrafimi logo and the assignment for the current assignment, clicking on the assignment button calls the Assignment function and skips through both through
//the Instruction and WarmUp animations. Clicking on the Fingrafimi logo takes the user back to the home page.
function addLogoAndAssignmentID(assignmentNr, exerciseNr)
{
    //Add the Fingrafimi logo
    logoS = game.add.button(25, 25, 'logoS'); 
    addExitButton();
    //Displays the logo from Menntamálastofnun in the botton left corner
    addLogo(20, 0.4);
    //Add the click event that loads the home page
    //logoS.events.onInputDown.add(function(){quitExercise(); loadHomePage();});

    //Add the assignment button
    if(assignmentNr === 5){
        assignmentBtn = game.add.button(65, 75, getSpriteName(assignmentNr));
    }
    else if(assignmentNr === 6){
        assignmentBtn = game.add.button(45, 85, getSpriteName(assignmentNr));
    }
    else if(assignmentNr === 1){
        assignmentBtn = game.add.button(55, 85, getSpriteName(assignmentNr));
    }
    else if(assignmentNr === 7){
        assignmentBtn = game.add.button(70, 85, getSpriteName(assignmentNr));
    }
    else if(assignmentNr === 3){
        assignmentBtn = game.add.button(60, 35, getSpriteName(assignmentNr));
    }else{
        assignmentBtn = game.add.button(60, 90, getSpriteName(assignmentNr));
    }
    assignmentBtn.frame = 0;
    //If mouse hovers over the arrow it will turn red
    assignmentBtn.events.onInputOver.add(function(){ assignmentBtn.frame = 1; }, this);
    //If mouse hovers out of the arrow it will turn blue again
    assignmentBtn.events.onInputOut.add(function(){ assignmentBtn.frame = 0; }, this);
    //Add the click event that loads the home page
    assignmentBtn.events.onInputDown.add(function()
    {
            initWarmUps();
            quitExercise(); 
            Assignment(assignmentNr, exerciseNr);
            balloon.visible = false;
    });
}

//Adds a skip button in Instruction and WarmUps, where the user can skip the animations if he choses too, if the user skips in Instruction
//the warmUp function is called, if the user skips in warmUp the Assignment function is called
function addSkipButton(assignmentNr, exerciseNr, nextFunction)
{
    //Add the button
    var arrowBtn = game.add.button(800, 550, 'arrow');
    //Frame 0 is a blue arrow
    arrowBtn.frame = 0;
    //If mouse hovers over the arrow it will turn red
    arrowBtn.events.onInputOver.add(function(){ arrowBtn.frame = 1; }, this);
    //If mouse hovers out of the arrow it will turn blue again
    arrowBtn.events.onInputOut.add(function(){ arrowBtn.frame = 0; }, this);
    //If selected it will call nextFunction
    arrowBtn.events.onInputDown.add(function(){nextFunction(assignmentNr, exerciseNr); }, this);
}

//Returns the correct frame index needed for the speech bubble in the Assignment function
function addBalloon(assignmentNr)
{
    switch(assignmentNr)
    {
        case 0:
            return 'Uúúúú...flott! Nú skaltu velja verkefni. Það er svaka sniðugt að byrja þar sem þú hættir síðast';
        case 1:
            return 'Rabbití bomm! Veldu nú verkefni. Það er góð regla að byrja þar sem þú hættir síðast!';
        case 2:
            return 'Rabbití snilld! Veldu nú verkefni og mundu að það er góð regla að byrja þar sem þú hættir síðast! Viðbúinn, tilbúinn, byrja!!!';
        case 3:
            return 'Veldu nú verkefni. Jiii við verðum að muna að byrja þar sem við hættum síðast!';
        case 4:
            return 'Ji flott! Við skulum velja verkefni. Ji já og muna að byrja þar sem við hættum síðast!';
        case 5:
            return 'Töff! Prófaðu að velja verkefni. Ekki klikka á að byrja þar sem þú hættir síðast!';
        case 6:
             return 'Töff- Prófaðu að velja verkefni. Og muna, ekki klikka á því að byrja þar sem þú hættir síðast!';
        case 7:
            return 'Hahaha...Veldu nú verkefni. Byrjaðu þar sem þú hættir síðast. Ertu tilbúinn?';
        case 8:
            return 'Ji en flott! Nú skaltu velja þér verkefni og sýna mér hvað þú ert orðinn mikill snillingur í Fingrafimi 2. Muna að byrja alltaf þar sem við hættum síðast! Góða skemmtun!';
    }
}

//Quitting an exercise requires that we turn off the keyboard event listener and reset the variables for the exercise text
function quitExercise()
{
    game.input.keyboard.stop();
    initTextVariables();
}
//Load and display the exercise buttons in Assignment, they vary depending on the assignmentNr and addExerciseImage is called 
//and it loads the correct button for each exercise
function addExercises(assignmentNr)
{
    if(assignmentNr === 0 || assignmentNr === 7 || assignmentNr === 8)
    {
        if(nextPage[assignmentNr]){
            addExerciseImages('jellyfish', 'jellyfish', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 15);
            addExerciseImages('starfish', 'starfish', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 16);
            addExerciseImages('shrimp','shrimp', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 17);
            addExerciseImages('shell', 'shell', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 18);
            addExerciseImages('seahorse', 'seahorse', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 19);
            addExerciseImages('starfish', 'starfish', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 20);
            addExerciseImages('jellyfish', 'jellyfish', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 21);
            addExerciseImages('shrimp','shrimp', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 22);
            addExerciseImages('shell', 'shell', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 23);
            addExerciseImages('seahorse', 'seahorse', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 24);
            addExerciseImages('starfish', 'starfish', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 25);
            addExerciseImages('jellyfish', 'jellyfish', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 26);
            addExerciseImages('shrimp','shrimp', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 27);
            addExerciseImages('shell', 'shell', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 28);
            addExerciseImages('seahorse', 'seahorse', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 29);
        }
        else{
            addExerciseImages('starfish', 'starfish', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 0);
            addExerciseImages('jellyfish', 'jellyfish', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 3);
            addExerciseImages('shrimp','shrimp', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 6);
            addExerciseImages('shell', 'shell', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 9);
            addExerciseImages('seahorse', 'seahorse', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 12);
        }
    }
    else if(assignmentNr === 1 || assignmentNr === 2)
    {
        if(nextPage[assignmentNr]){
         addExerciseImages('brabra', 'brabra', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 15);
         addExerciseImages('sundbolti', 'sundbolti', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 16);
         addExerciseImages('sundhringur','sundhringur', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 17);
         addExerciseImages('solhlif', 'solhlif', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 18);
         addExerciseImages('glas', 'glas', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 19);
         addExerciseImages('brabra', 'brabra', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 20);
         addExerciseImages('sundbolti', 'sundbolti', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 21);
         addExerciseImages('sundhringur','sundhringur', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 22);
         addExerciseImages('solhlif', 'solhlif', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 23);
         addExerciseImages('glas', 'glas', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 24);
         addExerciseImages('brabra', 'brabra', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 25);
         addExerciseImages('sundbolti', 'sundbolti', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 26);
         addExerciseImages('sundhringur','sundhringur', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 27);
         addExerciseImages('solhlif', 'solhlif', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 28);
         addExerciseImages('glas', 'glas', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 29);
    }else{
        addExerciseImages('brabra', 'brabra', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 0);
         addExerciseImages('sundbolti', 'sundbolti', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 3);
         addExerciseImages('sundhringur','sundhringur', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 6);
         addExerciseImages('solhlif', 'solhlif', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 9);
         addExerciseImages('glas', 'glas', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 12);
    }
    }
    else if(assignmentNr === 3 || assignmentNr === 4)
    {
        if(nextPage[assignmentNr]){
        addExerciseImages('byflugaEx', 'byflugaEx', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 15);
         addExerciseImages('sol', 'sol', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 16);
         addExerciseImages('gras','gras', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 17);
         addExerciseImages('blomBlatt', 'blomBlatt', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 18);
         addExerciseImages('blomFjolu', 'blomFjolu', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 19);
         addExerciseImages('byflugaEx', 'byflugaEx', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 20);
         addExerciseImages('sol', 'sol', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 21);
         addExerciseImages('gras','gras', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 22);
         addExerciseImages('blomBlatt', 'blomBlatt', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 23);
         addExerciseImages('blomFjolu', 'blomFjolu', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 24);
         addExerciseImages('byflugaEx', 'byflugaEx', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 25);
         addExerciseImages('sol', 'sol', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 26);
         addExerciseImages('gras','gras', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 27);
         addExerciseImages('blomBlatt', 'blomBlatt', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 28);
         addExerciseImages('blomFjolu', 'blomFjolu', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 29);
        } else{ 
         addExerciseImages('byflugaEx', 'byflugaEx', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 0);
         addExerciseImages('sol', 'sol', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 3);
         addExerciseImages('gras','gras', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 6);
         addExerciseImages('blomBlatt', 'blomBlatt', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 9);
         addExerciseImages('blomFjolu', 'blomFjolu', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 12);
        }
            
        }
    else if(assignmentNr === 5 || assignmentNr === 6)
    {
        if(nextPage[assignmentNr]){
        addExerciseImages('kongulo','kongulo', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 15);
        addExerciseImages('stjarna','stjarna', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 16);
        addExerciseImages('tungl','tungl', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 17);
        addExerciseImages('ledurblakaEx', 'ledurblakaEx', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 18);
        addExerciseImages('stjarna', 'stjarna', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 19);
        addExerciseImages('kongulo','kongulo', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 20);
        addExerciseImages('stjarna','stjarna', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 21);
        addExerciseImages('tungl','tungl', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 22);
        addExerciseImages('ledurblakaEx', 'ledurblakaEx', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 23);
        addExerciseImages('stjarna', 'stjarna', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 24);
        addExerciseImages('kongulo','kongulo', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 25);
        addExerciseImages('stjarna','stjarna', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 26);
        addExerciseImages('tungl','tungl', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 27);
        addExerciseImages('ledurblakaEx', 'ledurblakaEx', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 28);
        addExerciseImages('stjarna', 'stjarna', exerciseBtnPosArray[assignmentNr], 1, assignmentNr, 29);
        }else{
        addExerciseImages('kongulo','kongulo', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 0);
        addExerciseImages('stjarna','stjarna', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 3);
        addExerciseImages('tungl','tungl', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 6);
        addExerciseImages('ledurblakaEx', 'ledurblakaEx', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 9);
        addExerciseImages('stjarna', 'stjarna', exerciseBtnPosArray[assignmentNr], 3, assignmentNr, 12);
        }
    }
}

//Load and display the correct background depending on what assignmentNr is
function loadBackground(assignmentNr)
{ 
    
    if(assignmentNr === 0 || assignmentNr === 7 || assignmentNr === 8)
    {
        //Add sea background
        background = game.add.image(game.world.centerX, game.world.centerY, 'marglyttaBakgrunnur');
    }
    else if(assignmentNr === 5 || assignmentNr === 6)
    {
        //Add farm background
        background = game.add.image(game.world.centerX, game.world.centerY, 'ledurblakaBakgrunnur');
        //Move spider
        spider = game.add.image(750, 300, 'spider');
    }
    else if(assignmentNr === 1 || assignmentNr === 2)
    {
        //Load ocean floor background
        background = game.add.image(game.world.centerX, game.world.centerY, 'sundlaugBakgrunnur');
        //Add clouds which will be constantly moving to the right
        clouds = game.add.image(-1000, -10,'clouds');

    }
    else if(assignmentNr === 3 || assignmentNr === 4)
    {
        //Add stage background
        background = game.add.image(game.world.centerX, game.world.centerY, 'byflugaBakgrunnur');
        solBak = game.add.sprite(240, 20, 'solBak',0);
        solBak.animations.add('shine', [0, 5, 0, 8, 0, 5, 0, 8, 0], true);
        solBak.play('shine');
        bee = game.add.image(900, 100, 'bee');
    }
    else if(assignmentNr === 10 || assignmentNr === 11)
    {
        //Add boxing ring background
        background = game.add.image(game.world.centerX, game.world.centerY, 'box');
    }
    //Set the width and height of the background to match the witdh and height of the canvas
    
    background.width = width;
    background.height = height;
    background.anchor.setTo(0.5, 0.5);
}

//Add the exercise images as buttons
function addExerciseImages(image, imageGlow, posArr, count, assignmentNr, exerciseNr)
{
    textPosArr = exerciseTextPosArray[assignmentNr];
    
    for(var i = 0; i < count; i++)
    {
        // Add the background image that makes the exercise buttons glow
        //exerciseBtnGlowArray[assignmentNr][exerciseNr+i] = game.add.image(posArr[i+exerciseNr][0]-10, posArr[i+exerciseNr][1]-10, imageGlow);
        // Make the background image hidden
        //exerciseBtnGlowArray[assignmentNr][exerciseNr+i].alpha = 0;

        //Add the exercise button for exercise in index exercisesArray[assignmentNr][exerciseNr]
        exerciseBtnArray[assignmentNr][exerciseNr+i] = game.add.button(posArr[i+exerciseNr][0], posArr[i+exerciseNr][1], image);
        exerciseBtnArray[assignmentNr][exerciseNr+i].frame = 0;
        exerciseBtnArray[assignmentNr][exerciseNr+i].scale.setTo(0.8);
        //Check if the exercise is finished, if it is we make the button green
        if(exercisesFinished[assignmentNr][exerciseNr+i] === true)
        {
            //Make the button green
            exerciseBtnArray[assignmentNr][exerciseNr+i].frame = 1;
        }

        (function() 
        {
            var exerciseNum = exerciseNr + i;
            var textNum = exerciseNum + 1;

            // Add number above every image
            game.add.text(textPosArr[i+exerciseNr][0], textPosArr[i+exerciseNr][1], textNum, { font: "bold 16px Arial"});
            // Add the event of calling the function Assignment to the exercise
            exerciseBtnArray[assignmentNr][exerciseNr+i].events.onInputDown.add(function(){ quitExercise(); Assignment(assignmentNr, exerciseNum); });
        }()); // immediate invocation
    }
}

//Load and display the Instruction for the Assignments, after Instructions the WarmUp is called
function Instructions(assignmentNr, exerciseNr)
{
    //Remove all CallBack events, clears the canvas and stops all currently playing sounds in that order
    initGame();

    //Load and display the correct background
    loadBackground(assignmentNr);
    //If the assignmentNr is between 0 and 4, a part is added to the background
    if(assignmentNr === 0 || assignmentNr === 1 || assignmentNr === 2 || assignmentNr === 3)
    {
        //background = game.add.image(0, 0, 'instructionBg');
    }

    //Add the Fingrafimi logo and Assignment buttons on the top left corner
    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    //Add the Exit button
    addExitButton();
    //Add the Mute button
    addMuteButton();
    
    
    //Add the skip button to skip the Instructions and go to the correct warmUp
    addSkipButton(assignmentNr, exerciseNr,  warmUpFunctions[assignmentNr]);
 
    var instructor = addInstructionAnimation(assignmentNr);
    var instructionSound = addInstructionSound(assignmentNr);
    instructionSound.onStop.addOnce(function()
    {  
        stopInstructorTalk();
            	
    }, this);

    instructionSound.play();
    instructor.play('talk');
}

//Load and display the correct instructor depending on which Instruction you are in
function addInstructionAnimation(assignmentNr)
{
    if(assignmentNr === 1 || assignmentNr === 2)
    {
         instructor = game.add.sprite(250, 300, 'instructorFroskur', 0);
         instructor.scale.setTo(1);
         instructor.animations.add('talk', [0, 1, 0, 1, 1, 0], 6, true);
         return instructor;
    }
    else if(assignmentNr === 5 || assignmentNr === 6)
    {
         instructor = game.add.sprite(250, 200, 'instructurLedurblaka', 0);
         instructor.scale.setTo(1);
         instructor.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
         return instructor;
    }
    else if(assignmentNr === 0 || assignmentNr === 7 || assignmentNr === 8)
    {
         instructor = game.add.sprite(250, 150, 'instructorMarglytta', 0);
         instructor.scale.setTo(1);
         instructor.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
         return instructor;
    }
    else if(assignmentNr === 3 || assignmentNr === 4)
    {
         instructor = game.add.sprite(300, 150, 'instructorByfluga', 0);
         instructor.scale.setTo(1);
         instructor.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
         return instructor;
    }
    else
    {
         instructor = game.add.sprite(500, 150, 'horse', 0);
         instructor.scale.setTo(0.8);
         instructor.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
         return instructor;
    }
}

//Load and display the correct instructor depending on which Assignment you are in
function addAssignmentInstructor(assignmentNr)
{
    //Maggi minnkur is the assignment instructor in the first 4 assignments
    if(assignmentNr === 0 || assignmentNr === 7 || assignmentNr === 8)
    {
        //Load the image of the instructor
        instructor = game.add.sprite(850, 210, 'instructorMarglytta', 0);
        //Add the animation that makes him talk
        instructor.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
        //Move the anchor point of the image
        instructor.anchor.setTo(0.5);

        instructor.scale.setTo(1);
        //Return the object
        return instructor;
    }
    //The pig is the assignment instructor for Allir heimalyklar 1 and 2
    else if(assignmentNr === 1 || assignmentNr === 2)
    {
         instructor = game.add.sprite(640, 0, 'instructorFroskurWarmup', 0);
         instructor.scale.setTo(1.2);
         instructor.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
         return instructor;
    }
    //The horse is the assignment instructor for the E og H and I og G assignments
    else if(assignmentNr === 3 || assignmentNr === 4)
    {
         instructor = game.add.sprite(650, 50, 'instructorByfluga', 0);
         instructor.scale.setTo(1);
         instructor.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
         return instructor;
    }
    //The horse is the assignment instructor for the Broddstafir and Hástafir assignments
    else
    {
        instructor = game.add.sprite(520, 50, 'instructurLedurblaka', 0);
        instructor.scale.setTo(1);
        instructor.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
        return instructor;
    }
}

function stopWarmupHeadTalk()
{
    warmupHead.animations.stop(); 
    warmupHead.frame = 0;
}

function stopInstructorTalk()
{
    instructor.animations.stop(); 
    instructor.frame = 0;
}


// Display the text in the letter variable in the textArea with the specified color centerd in the canvas, 
// but subtract the offset to the Y coordinates to move it slightly up on the canvas
function addWarmUpTextArea(letter, offset, color)
{
    offset = 115
    textArea = game.add.text(game.world.centerX, game.world.centerY - offset, letter, instructionStyle);
    textArea.anchor.set(0.5);
    textArea.addColor(color, 0);
}

function addBalloontext(text, fontSize,x,y,i){
    instrstyle.font = String(fontSize) + 'px Calibri';
    balloon = game.add.sprite(440, 25, 'balloonSprite', 0);
    balloon.scale.setTo(0.6);
    var instructionText = game.add.text(game.world.centerX+x, game.world.centerY/2 - y, text, instrstyle);
    if(i < 300){
        instructionText.addColor('#ff0000', i-1);
        instructionText.addColor('#000000', i);
    }
}

function addMoreExerButton(assignmentNr, exerciseNr){
    if(assignmentNr === 0 || assignmentNr === 7 || assignmentNr === 8){
        var btnMoreExer = game.add.button(770, 400, 'moreExFroskur');
    }
    if(assignmentNr === 1 || assignmentNr === 2){
        var btnMoreExer = game.add.button(770, 400, 'moreExByfluga');
    }
    if(assignmentNr === 3 || assignmentNr === 4){
        var btnMoreExer = game.add.button(770, 400, 'moreExLedur');
    }
    if(assignmentNr === 5 || assignmentNr === 6){
        var btnMoreExer = game.add.button(770, 400, 'moreExLedur');
    }

    btnMoreExer.events.onInputDown.add(function(){ 
        if(nextPage[assignmentNr]){
            var nextFirstPage = 0;
            nextPage[assignmentNr] = false;
            for(var i = 0; i < 15; i++){
                if(!exercisesFinished[assignmentNr][i]){
                    nextFirstPage = i;
                    break;
                }
            }
            
            Assignment(assignmentNr,i);
        } else {
            var nextSecondPage = 15;
            nextPage[assignmentNr] = true;
            moreExerSoundPlay = true;
            for(var i = 15; i < 30; i++){
                if(!exercisesFinished[assignmentNr][i]){
                    nextSecondPage = i;
                    break;
                }
            }
            Assignment(assignmentNr,i);
        }
     });

    //Frame 0 is a blue arrow
    btnMoreExer.frame = 0;
    //If mouse hovers over the arrow it will turn red
    btnMoreExer.events.onInputOver.add(function(){ btnMoreExer.frame = 1; }, this);
    //If mouse hovers out of the arrow it will turn blue again
    btnMoreExer.events.onInputOut.add(function(){ btnMoreExer.frame = 0; }, this);

    instrstyle.font = '16px Calibri';
    if(nextPage[assignmentNr]){
        game.add.text(game.world.centerX+350, game.world.centerY/2+265, 'Til baka', instrstyle);
    }else{
        game.add.text(game.world.centerX+335, game.world.centerY/2+265, 'Fleiri verkefni', instrstyle);
    }
}

//Load warmup for Upprifjun Assignment
function warmupUpprifjun(assignmentNr, exerciseNr)
{   
    //Set warmUps[0] to true so that all the callBacks here work while in the warmup
    warmUps[0] = true;
    initGame();
    
    loadBackground(assignmentNr);
    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    //Add keyboard
    loadKeyboard(assignmentNr);

    //Add the image and talking animation of the instructor
    warmupHead = game.add.sprite(900, 350, 'instructorMarglytta', 0);
    warmupHead.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
    warmupHead.scale.setTo(0.8);
    warmupHead.anchor.setTo(0.75, 1);

    //Bætum við tökkum
    addMuteButton();
    addExitButton();
    
//Warmup Upprifjun
    sounds['byrjunUpprifjun'].onStop.addOnce(function()
    {
            //Make Instructor stop moving his mouth in the 2 second pause between animations 
            stopWarmupHeadTalk();
            
            //Pause for 2 seconds between soundclips
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {   
                if(warmUps[0])
                {
                    warmupHead.play('talk');
                    sounds['leftFJ'].play();
                    //Add the speech bubble with the correct text
                    addBalloontext('Settu nú puttana á vinstri hendi á rétta lykla. Flott!',25,22,90,500);
                    //Add the left hand to the game so that it starts moving from below the visible canvas to the A, S, D and F keys.
                    leftHand = game.add.sprite(75, 700, 'lHand', 0);
                    leftHand.scale.setTo(1.1);  
                    //warmupKeys.play('jklæBlink');
                    keyboardKeysMap.get('a').play('blink');
                    keyboardKeysMap.get('s').play('blink');
                    keyboardKeysMap.get('d').play('blink');
                    keyboardKeysMap.get('f').play('blink');
                    
                }
                
                  
            }, this).autoDestroy = true;  
    }, this);

     //fogj2 is the soundclip where he says "Finndu stafina J, K, L og Æ"
     sounds['leftFJ'].onStop.addOnce(function()
     {
            //Make Maggi stop moving his mouth in the 2 second pause between animations 
            stopWarmupHeadTalk();
            //Pause for 2 seconds, then play the soundclip "Finndu stafina F og J" and make both F and J blink
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {          
                //Make Maggi talk, blink both F and J, set correct text in speech bubble and play soundclip
                if(warmUps[0])
                {
                sounds['rightFJ'].play();
                    warmupHead.play('talk');
                    addBalloontext('Settu nú puttana á hægri hendi á rétta lykla',25,22,90,500);
                    keyboardKeysMap.get('j').play('blink');
                    keyboardKeysMap.get('k').play('blink');
                    keyboardKeysMap.get('l').play('blink');
                    keyboardKeysMap.get('æ').play('blink');
                    rightHand = game.add.sprite(415, 700, 'rHand', 0);
                    rightHand.scale.setTo(1.1);
                }           
            }, this).autoDestroy = true;  
    }, this);   

    //fogj2 is the soundclip where he says "Finndu stafina J, K, L og Æ"
     sounds['rightFJ'].onStop.addOnce(function()
     {
            //Make Maggi stop moving his mouth in the 2 second pause between animations 
            stopWarmupHeadTalk();
            //Pause for 2 seconds, then play the soundclip "Finndu stafina F og J" and make both F and J blink
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {          
                //Make Maggi talk, blink both F and J, set correct text in speech bubble and play soundclip
                if(warmUps[0])
                {

                    warmupHead.play('talk');
                    Assignment(assignmentNr,exerciseNr);
                    sounds['endirUpprifjun'].play();
                }           
            }, this).autoDestroy = true;  
    }, this);



    //Play soundclip byrjunUpprifjun
    sounds['byrjunUpprifjun'].play();
    warmupHead.play('talk');
}

//Warmup T og M
function warmupTM(assignmentNr, exerciseNr)
{

    warmUps[1] = true;

    initGame();

    loadBackground(assignmentNr);

    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    loadKeyboard(0,0);

    warmupHead = game.add.sprite(850, 300, 'instructorFroskurWarmup', 0);
    warmupHead.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
    warmupHead.anchor.setTo(0.65, 1);
    warmupHead.scale.setTo(0.8);

    leftHand = game.add.sprite(75, 700, 'lHand', 0);
    leftHand.animations.add('t', [0, 4, 4, 4, 0, 0, 0], 4, true);
    leftHand.scale.setTo(1.1);  
    rightHand = game.add.sprite(410, 560, 'rHand', 0);
    rightHand.animations.add('m', [0, 7, 7, 7, 0, 0, 0], 4, true);
    rightHand.scale.setTo(1.1);

    addMuteButton();
    addExitButton();
    addBalloontext('Fingurna á heimalyklana já!',25,22,90,500);

    sounds['byrjunTM'].onStop.addOnce(function()
    {
            stopWarmupHeadTalk(); 
            
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {   
                if(warmUps[1])
                {
                    warmupHead.play('talk');
                    sounds['findTTM'].play();
                    addBalloontext('Hvar er stafurinn t á lyklaborðinu?',25,22,85,19);
                    keyboardKeysMap.get('t').play('blink');
                    //warmupKeys.play('jklæBlink');
                }
            }, this).autoDestroy = true;  
    }, this);

     sounds['findTTM'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 

        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {         
            if(warmUps[1])
            {
                warmupHead.play('talk');
                leftHand.play('t');
                addBalloontext('Þú notar vísifingur vinstri handar til að skrifa t.',25,22,90,50);
                //warmupKeys.play('bothBlink');
                //balloon.frame = 8;
                sounds['visV'].play();
            }              
        }, this).autoDestroy = true;  
    }, this);

    sounds['visV'].onStop.addOnce(function()
    {
        leftHand.frame = 0;
        leftHand.animations.stop();
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[1])
            {
                warmupHead.play('talk');
                addBalloontext('Skrifaðu stafinn t.',28,25,75,18);
                sounds['skrifT'].play();
                // Display the letter in the textArea
                addWarmUpTextArea('t', 100, '#000000');
            }
            
                            
        }, this).autoDestroy = true;
    });

    sounds['skrifT'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 't')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('t', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['findM'].play();
                    addBalloontext('Rabbit! Finndu nú stafinn m á lyklaborðinu.',25,22,90,17);
                    game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                            //balloon.frame = 10;
                            keyboardKeysMap.get('m').play('blink');
                            moveDownRight = true;
                            textArea.destroy();
                        }, this).autoDestroy = true;
                });
            }
        });
     });

     sounds['findM'].onStop.addOnce(function()
     { 
        //Make Maggi stop moving his mouth in the 2 second pause between animations 
        stopWarmupHeadTalk(); 

        moveDownRight = false;
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[1])
            {
                warmupHead.play('talk');
                rightHand.play('m');
                addBalloontext('Þú notar vísifingur hægri handar til að skrifa m',25,22,90,48);
                //warmupKeys.play('bothBlink');
                //balloon.frame = 8;
                sounds['visH'].play();
            }
            
                            
        }, this).autoDestroy = true;
     });

     sounds['visH'].onStop.addOnce(function()
     {
         rightHand.animations.stop();
         rightHand.frame = 0;
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[1])
             {
                 warmupHead.play('talk');
                 addBalloontext('Skrifaðu stafinn m.',28,25,75,18);
                 sounds['skrifM'].play();
                 // Display the letter in the textArea
                 addWarmUpTextArea('m', 100, '#000000');
             }
             
                             
         }, this).autoDestroy = true;
     });

     sounds['skrifM'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 'm')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('m', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['finalTM'].play();
                    warmUps[1] = false;
                    Assignment(assignmentNr, exerciseNr);
                    textArea.destroy();
                });
            }
        });
     });

    sounds['byrjunTM'].play();
    warmupHead.play('talk');
}

//Warmup Ð og V
function warmupDogV(assignmentNr, exerciseNr)
{
    warmUps[2] = true;

    initGame();

    loadBackground(assignmentNr);

    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    loadKeyboard(0,0);

    warmupHead = game.add.sprite(850, 300, 'instructorFroskurWarmup', 0);
    warmupHead.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
    warmupHead.anchor.setTo(0.65, 1);
    warmupHead.scale.setTo(0.8);

    leftHand = game.add.sprite(75, 715, 'lHand', 0);
    leftHand.animations.add('v', [0, 5, 5, 5, 0, 0, 0], 4, true);
    leftHand.scale.setTo(1.1);  
    rightHand = game.add.sprite(415, 550, 'rHand', 0);
    rightHand.animations.add('d', [0, 6, 6, 6, 0, 0, 0], 4, true);
    rightHand.scale.setTo(1.1);
    
    addMuteButton();
    addExitButton();
    addBalloontext('Fingurna á heimalyklana.',25,35,80,500);

    sounds['byrjunDV'].onStop.addOnce(function()
    {
            stopWarmupHeadTalk(); 
            
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {   
                if(warmUps[2])
                {
                    warmupHead.play('talk');
                    sounds['findD'].play();
                    addBalloontext('Hvar er stafurinn ð á lyklaborðinu?',25,22,80,19);
            
                    keyboardKeysMap.get('dd').play('blink');
                }
            }, this).autoDestroy = true;  
    }, this);

     sounds['findD'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 

        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {         
            if(warmUps[2])
            {
                warmupHead.play('talk');
                rightHand.x += 10;
                rightHand.play('d');
                addBalloontext('Þú notar litlaputta hægri handar til að skrifa ð',25,22,90,48);
                sounds['lilD'].play();
            }              
        }, this).autoDestroy = true;  
    }, this);

    sounds['lilD'].onStop.addOnce(function()
    {
        rightHand.x -= 20;
        rightHand.frame = 0;
        rightHand.animations.stop();
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[2])
            {
                warmupHead.play('talk');
                addBalloontext('Skrifaðu ð',35,30,80,9);
                sounds['skrifD'].play();
                // Display the letter in the textArea
                addWarmUpTextArea('ð', 100, '#000000');
            }
            
                            
        }, this).autoDestroy = true;
    });

    sounds['skrifD'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 'ð')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('ð', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['findV'].play();
                    addBalloontext('Rabbit! Finndu nú stafinn v á lyklaborðinu',25,22,90,27);
                    game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                            keyboardKeysMap.get('v').play('blink');
                            textArea.destroy();
                        }, this).autoDestroy = true;
                });
            }
        });
     });

     sounds['findV'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[2])
            {
                warmupHead.play('talk');
                leftHand.play('v');
                addBalloontext('Þú notar vísifingur vinstri handar til að skrifa v',25,22,90,50);
                sounds['visVV'].play();
            }
            
                            
        }, this).autoDestroy = true;
     });

     sounds['visVV'].onStop.addOnce(function()
     {
         leftHand.animations.stop();
         leftHand.frame = 0;
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[2])
             {
                 warmupHead.play('talk');
                 addBalloontext('Skrifaðu v',35,30,80,10);
                 sounds['skrifV'].play();

                 // Display the letter in the textArea
                 addWarmUpTextArea('v', 100, '#000000');
             }
             
                             
         }, this).autoDestroy = true;
     });

     sounds['skrifV'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 'v')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('v', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['finalDV'].play();
                    warmUps[2] = false;
                    Assignment(assignmentNr, exerciseNr);
                    textArea.destroy();
                });
            }
        });
     });

    sounds['byrjunDV'].play();
    warmupHead.play('talk');
}

//Warmup P og U
function warmupPogU(assignmentNr, exerciseNr){

    warmUps[3] = true;

    initGame();

    loadBackground(assignmentNr);

    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    loadKeyboard(0,0);

    warmupHead = game.add.sprite(850, 300, 'instructorByfluga', 0);
    warmupHead.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
    warmupHead.anchor.setTo(0.65, 1);
    warmupHead.scale.setTo(0.8);

    leftHand = game.add.sprite(75, 720, 'lHand', 0);
    leftHand.scale.setTo(1.1);  
    rightHand = game.add.sprite(410, 550, 'rHand', 0);
    rightHand.animations.add('p', [0, 2, 2, 2, 0, 0, 0], 4, true);
    rightHand.animations.add('u', [0, 8, 8, 8, 0, 0, 0], 4, true);
    rightHand.scale.setTo(1.1);
    
    addMuteButton();
    addExitButton();
    addBalloontext('Nú setjum við fingurna á heimalyklana.',25,38,90,500);

    sounds['byrjunPU'].onStop.addOnce(function()
    {
            stopWarmupHeadTalk(); 
            
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {   
                if(warmUps[3])
                {
                    warmupHead.play('talk');
                    sounds['findP'].play();
                    addBalloontext('Hvar er stafurinn p á lyklaborðinu?',25,22,85,19);
            
                    keyboardKeysMap.get('p').play('blink');
                }
            }, this).autoDestroy = true;  
    }, this);

     sounds['findP'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 

        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {         
            if(warmUps[3])
            {
                warmupHead.play('talk');
                rightHand.play('p');
                addBalloontext('Þú notar litlafingur hægri handar til að skrifa p.',25,22,90,49);
                sounds['lilP'].play();
            }              
        }, this).autoDestroy = true;  
    }, this);

    sounds['lilP'].onStop.addOnce(function()
    {
        rightHand.frame = 0;
        rightHand.animations.stop();
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[3])
            {
                warmupHead.play('talk');
                addBalloontext('Skrifaðu p.',35,30,75,10);
                sounds['skrifP'].play();
                // Display the letter in the textArea
                addWarmUpTextArea('p', 100, '#000000');
            }
            
                            
        }, this).autoDestroy = true;
    });

    sounds['skrifP'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 'p')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('p', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['findU'].play();
                    addBalloontext('Finndu nú stafinn u á lyklaborðinu.',25,22,85,19);
                    game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                            keyboardKeysMap.get('u').play('blink');
                            textArea.destroy();
                        }, this).autoDestroy = true;
                });
            }
        });
     });

     sounds['findU'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[3])
            {
                warmupHead.play('talk');
                rightHand.play('u');
                addBalloontext('Þú notar vísifingur hægri handar til að skrifa u.',25,22,90,48);
                sounds['visU'].play();
            }
            
                            
        }, this).autoDestroy = true;
     });

     sounds['visU'].onStop.addOnce(function()
     {
         rightHand.animations.stop();
         rightHand.frame = 0;
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[3])
             {
                 warmupHead.play('talk');
                 addBalloontext('Skrifaðu stafinn u.',35,35,90,18);
                 sounds['skrifU'].play();
                 // Display the letter in the textArea
                 addWarmUpTextArea('u', 100, '#000000');
             }
             
                             
         }, this).autoDestroy = true;
     });

     sounds['skrifU'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 'u')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('u', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['finalPU'].play();
                    warmUps[3] = false;
                    Assignment(assignmentNr, exerciseNr);
                    textArea.destroy();
                });
            }
        });
     });

    sounds['byrjunPU'].play();
    warmupHead.play('talk');
}


//Warmup Þ og Y
function warmupÞogY(assignmentNr, exerciseNr)
{
    warmUps[4] = true;

    initGame();

    loadBackground(assignmentNr);

    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    loadKeyboard(0,0);

    warmupHead = game.add.sprite(850, 300, 'instructorByfluga', 0);
    warmupHead.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
    warmupHead.anchor.setTo(0.65, 1);
    warmupHead.scale.setTo(0.8);

    leftHand = game.add.sprite(75, 720, 'lHand', 0);
    leftHand.scale.setTo(1.1);  
    rightHand = game.add.sprite(410, 300, 'rHand', 0);
    rightHand.animations.add('þ', [0, 11,11,11, 0, 0, 0], 4, true);
    rightHand.animations.add('y', [0, 10, 10, 10, 0, 0, 0], 4, true);
    rightHand.scale.setTo(1.1);
    
    addMuteButton();
    addExitButton();
    addBalloontext('Puttarnir á heimalyklana já!',25,30,90,500);

    sounds['byrjunÞY'].onStop.addOnce(function()
    {
            stopWarmupHeadTalk(); 
            
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {   
                if(warmUps[4])
                {
                    moveDownRight = true;
                    warmupHead.play('talk');
                    sounds['findÞ'].play();
                    addBalloontext('Hvar er stafurinn þ á lyklaborðinu?',25,22,90,19);
            
                    keyboardKeysMap.get('þ').play('blink');
                }
            }, this).autoDestroy = true;  
    }, this);

     sounds['findÞ'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 
        moveDownRight = false;
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {         
            if(warmUps[4])
            {
                warmupHead.play('talk');
                rightHand.play('þ');
                addBalloontext('Þú notar litlaputta hægri handar til að skrifa þ.',25,22,90,48);
                sounds['lilÞ'].play();
            }              
        }, this).autoDestroy = true;  
    }, this);

    sounds['lilÞ'].onStop.addOnce(function()
    {
        rightHand.frame = 0;
        rightHand.animations.stop();
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[4])
            {
                warmupHead.play('talk');
                addBalloontext('Skrifaðu stafinn þ.',35,35,90,18);
                sounds['skrifÞ'].play();
                // Display the letter in the textArea
                addWarmUpTextArea('þ', 100, '#000000');
            }
            
                            
        }, this).autoDestroy = true;
    });

    sounds['skrifÞ'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 'þ')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('þ', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['findY'].play();
                    addBalloontext('Ji en flott! Hvar er stafurinn y á lyklaborðinu?',25,22,90,32);
                    game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                            keyboardKeysMap.get('y').play('blink');
                            textArea.destroy();
                        }, this).autoDestroy = true;
                });
            }
        });
     });

     sounds['findY'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[4])
            {
                warmupHead.play('talk');
                rightHand.play('y');
                addBalloontext('Þú notar vísifingur hægri handar til að skrifa y.',25,22,90,47);
                sounds['visY'].play();
            }
            
                            
        }, this).autoDestroy = true;
     });

     sounds['visY'].onStop.addOnce(function()
     {
         rightHand.animations.stop();
         rightHand.frame = 0;
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[4])
             {
                 warmupHead.play('talk');
                 addBalloontext('Skrifaðu stafinn y.',35,35,90,18);
                 sounds['skrifY'].play();
                 // Display the letter in the textArea
                 addWarmUpTextArea('y', 100, '#000000');
             }
             
                             
         }, this).autoDestroy = true;
     });

     sounds['skrifY'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 'y')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('y', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['finalÞY'].play();
                    warmUps[4] = false;
                    Assignment(assignmentNr, exerciseNr);
                    textArea.destroy();
                });
            }
        });
     });

    sounds['byrjunÞY'].play();
    warmupHead.play('talk');
}
//herna
//Warmup Ö og C
function warmupOogC(assignmentNr, exerciseNr)
{
    warmUps[5] = true;

    initGame();

    loadBackground(assignmentNr);

    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    loadKeyboard(0,0);

    warmupHead = game.add.sprite(850, 300, 'instructurLedurblaka', 0);
    warmupHead.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
    warmupHead.anchor.setTo(0.65, 1);
    warmupHead.scale.setTo(0.8);

    leftHand = game.add.sprite(75, 720, 'lHand', 0);
    leftHand.scale.setTo(1.1);  
    rightHand = game.add.sprite(410, 300, 'rHand', 0);
    rightHand.animations.add('ö', [0, 9,9,9, 0, 0, 0], 4, true);
    leftHand.animations.add('c', [0, 2, 2, 2, 0, 0, 0], 4, true);
    rightHand.scale.setTo(1.1);
    addMuteButton();
    addExitButton();
    addBalloontext('Skelltu nú krumlunum á heimalyklana.',25,40,90,500);

    sounds['byrjunÖC'].onStop.addOnce(function()
    {

            stopWarmupHeadTalk(); 
            
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {   
                if(warmUps[5])
                {
                    warmupHead.play('talk');
                    sounds['findÖ'].play();
                    addBalloontext('Hvar er stafurinn ö á lyklaborðinu?',25,22,90,19);
            
                    keyboardKeysMap.get('ö').play('blink');
                }
            }, this).autoDestroy = true;  
    }, this);

     sounds['findÖ'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {         
            if(warmUps[5])
            {
                warmupHead.play('talk');
                rightHand.play('ö');
                addBalloontext('Þú notar litlaputta hægri handar til að skrifa ö.',25,22,90,47);
                sounds['lilÖ'].play();
            }              
        }, this).autoDestroy = true;  
    }, this);

    sounds['lilÖ'].onStop.addOnce(function()
    {
        rightHand.frame = 0;
        rightHand.animations.stop();
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[5])
            {
                warmupHead.play('talk');
                addBalloontext('Skrifaðu ö.',35,35,80,10);
                sounds['skrifÖ'].play();
                // Display the letter in the textArea
                addWarmUpTextArea('ö', 100, '#000000');
            }
            
                            
        }, this).autoDestroy = true;
    });

    sounds['skrifÖ'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 'ö')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('ö', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    moveDownLeft = true;
                    sounds['findC'].play();
                    addBalloontext('Svalt! Hvar er stafurinn c á lyklaborðinu?',25,45,90,26);
                    game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                            //balloon.frame = 10;
                            keyboardKeysMap.get('c').play('blink');
                            textArea.destroy();
                        }, this).autoDestroy = true;
                });
            }
        });
     });

     sounds['findC'].onStop.addOnce(function()
     {
        moveDownLeft = false;
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[5])
            {
                warmupHead.play('talk');
                leftHand.play('c');
                addBalloontext('Þú notar vísifingur vinstri handar til að skrifa c.',25,22,90,50);
                sounds['visC'].play();
            }
            
                            
        }, this).autoDestroy = true;
     });

     sounds['visC'].onStop.addOnce(function()
     {
         leftHand.animations.stop();
         leftHand.frame = 0;
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[5])
             {
                 warmupHead.play('talk');
                 addBalloontext('Skrifaðu c.',35,35,80,10);
                 sounds['skrifC'].play();
                 // Display the letter in the textArea
                 addWarmUpTextArea('c', 100, '#000000');
             }
             
                             
         }, this).autoDestroy = true;
     });

     sounds['skrifC'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === 'c')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('c', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['finalÖC'].play();
                    warmUps[5] = false;
                    Assignment(assignmentNr, exerciseNr);
                    textArea.destroy();
                });
            }
        });
     });

    sounds['byrjunÖC'].play();
    warmupHead.play('talk');
}

//warmup kommustafir
function warmupKommustafir(assignmentNr, exerciseNr)
{
    warmUps[6] = true;

    initGame();

    loadBackground(assignmentNr);

    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    loadKeyboard(0,0);

    warmupHead = game.add.sprite(850, 300, 'instructurLedurblaka', 0);
    warmupHead.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
    warmupHead.anchor.setTo(0.65, 1);
    warmupHead.scale.setTo(0.8);

    leftHand = game.add.sprite(75, 720, 'lHand', 0);
    leftHand.scale.setTo(1.1);  
    rightHand = game.add.sprite(410, 560, 'rHand', 0);
    rightHand.animations.add('´', [0, 13,13,13, 0, 0, 0], 4, true);
    rightHand.animations.add(',', [0, 12, 12, 12, 0, 0, 0], 4, true);
    leftHand.animations.add('e', [0, 7, 7, 7, 0, 0, 0], 4, true);
    rightHand.scale.setTo(1.1);
    addMuteButton();
    addExitButton();
    addBalloontext('Krumlurnar á heimalyklana! Jebb.',25,40,90,500);

    sounds['byrjunKomma'].onStop.addOnce(function()
    {

            stopWarmupHeadTalk(); 
            
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {   
                if(warmUps[6])
                {
                    warmupHead.play('talk');
                    sounds['findUppKomma'].play();
                    addBalloontext('Hvar er komman (´) til að setja yfir stafi á lyklaborðinu?',25,22,90,17);
            
                    keyboardKeysMap.get('´').play('blink');
                }
            }, this).autoDestroy = true;  
    }, this);

     sounds['findUppKomma'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {         
            if(warmUps[6])
            {
                warmupHead.play('talk');
                rightHand.play('´');
                addBalloontext('Þú notar litlaputta á hægri hendi til að setja kommu yfir staf.',25,22,100,500);
                sounds['lilUppKomma'].play();
            }              
        }, this).autoDestroy = true;  
    }, this);

    sounds['lilUppKomma'].onStop.addOnce(function()
    {
        rightHand.frame = 0;
        rightHand.animations.stop();
       stopWarmupHeadTalk(); 
       game.time.events.add(Phaser.Timer.SECOND * 2, function()
       {         
           if(warmUps[6])
           {
               warmupHead.play('talk');
               leftHand.play('e');
               addBalloontext('Síðan ýtir þú til dæmis á e til að skrifa é.',25,30,90,500);
               sounds['pressE'].play();
           }              
       }, this).autoDestroy = true;  
   }, this);

    sounds['pressE'].onStop.addOnce(function()
    {
        leftHand.frame = 0;
        leftHand.animations.stop();
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[6])
            {
                warmupHead.play('talk');
                addBalloontext('Skrifaðu stafinn á.',35,45,80,18);
                sounds['skrifÁ'].play();
                // Display the letter in the textArea
                addWarmUpTextArea('á', 100, '#000000');
            }
            
                            
        }, this).autoDestroy = true;
    });

    sounds['skrifÁ'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            console.log(char);
            
            if(char === 'a')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('á', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    moveDownRight = true;
                    sounds['findKomma'].play();
                    addBalloontext('Töff- finndu nú kommuna (,) á lyklaborðinu.',25,22,90,26);
                    game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                            //balloon.frame = 10;
                            keyboardKeysMap.get(',').play('blink');
                            textArea.destroy();
                        }, this).autoDestroy = true;
                });
            }
        });
     });

     sounds['findKomma'].onStop.addOnce(function()
     {
        moveDownRight = false;
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[6])
            {
                warmupHead.play('talk');
                rightHand.play(',');
                addBalloontext('Þú notar löngutöng á hægri hendi til að skrifa kommu (,).',25,22,90,55);
                sounds['langKomma'].play();
            }
            
                            
        }, this).autoDestroy = true;
     });

     sounds['langKomma'].onStop.addOnce(function()
     {
         rightHand.animations.stop();
         rightHand.frame = 0;
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[6])
             {
                 warmupHead.play('talk');
                 addBalloontext('Skrifaðu kommu (,)',35,35,80,17);
                 sounds['skrifKomma'].play();
                 // Display the letter in the textArea
                 addWarmUpTextArea(',', 100, '#000000');
             }
             
                             
         }, this).autoDestroy = true;
     });

     sounds['skrifKomma'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === ',')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea(',', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['finalKomma'].play();
                    warmUps[6] = false;
                    Assignment(assignmentNr, exerciseNr);
                    textArea.destroy();
                });
            }
        });
     });

    sounds['byrjunKomma'].play();
    warmupHead.play('talk');
}

// Warm up strik og Spurningamerki
function warmupStrikogSpurn(assignmentNr, exerciseNr)
{
    warmUps[7] = true;

    initGame();

    loadBackground(assignmentNr);

    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    loadKeyboard(0,0);

    warmupHead = game.add.sprite(850, 300, 'instructorMarglytta', 0);
    warmupHead.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
    warmupHead.anchor.setTo(0.65, 1);
    warmupHead.scale.setTo(0.8);

    leftHand = game.add.sprite(70, 720, 'lHand', 0);
    leftHand.scale.setTo(1.1);  
    rightHand = game.add.sprite(415, 560, 'rHand', 0);
    rightHand.animations.add('-', [0, 3, 3, 3, 0, 0, 0], 4, true);
    rightHand.animations.add('.', [0, 5, 5, 5, 0, 0, 0], 4, true);
    rightHand.animations.add('?', [0, 4, 4, 4, 0, 0, 0], 4, true);
    leftHand.animations.add('lshift', [0, 6, 6, 6, 0, 0, 0], 4, true);
    rightHand.scale.setTo(1.1);
    addMuteButton();
    addExitButton();
    addBalloontext('Settu nú puttalingana á heimalyklana.',25,40,90,500);

    sounds['upphafSpurn'].onStop.addOnce(function()
    {
            stopWarmupHeadTalk(); 
            
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {   
                if(warmUps[7])
                {
                    warmupHead.play('talk');
                    sounds['findStrik'].play();
                    addBalloontext('Hmmm...hvar er strikið (-) á lyklaborðinu?',25,30,90,25);
                    keyboardKeysMap.get('-').play('blink');
                }
            }, this).autoDestroy = true;  
    }, this);

     sounds['findStrik'].onStop.addOnce(function()
     {
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {         
            if(warmUps[7])
            {
                warmupHead.play('talk');
                rightHand.play('-');
                addBalloontext('Notaðu litla putta á hægri hendi til að skrifa strik (-)',25,22,90,55);
                sounds['lilStrik'].play();
            }              
        }, this).autoDestroy = true;  
    }, this);

    sounds['lilStrik'].onStop.addOnce(function()
    {
        rightHand.animations.stop();
        rightHand.frame = 0;
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[7])
            {
                warmupHead.play('talk');
                addBalloontext('Prófaðu nú að skrifa - (strik)',30,35,80,22);
                sounds['skrifStrik'].play();
                // Display the letter in the textArea
                addWarmUpTextArea('-', 100, '#000000');
            }
            
                            
        }, this).autoDestroy = true;
    });

    sounds['skrifStrik'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === '-')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('-', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['findPunktur'].play();
                    addBalloontext('Flott!…Hmm…Hvar skyldi punkturinn (.) vera á lyklaborðinu?',20,22,90,36);
                    game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                            //balloon.frame = 10;
                            moveDownRight = true;
                            keyboardKeysMap.get('.').play('blink');
                            textArea.destroy();
                        }, this).autoDestroy = true;
                });
            }
        });
     });

     sounds['findPunktur'].onStop.addOnce(function()
     {
        moveDownRight = false;
        stopWarmupHeadTalk(); 
        game.time.events.add(Phaser.Timer.SECOND * 2, function()
        {                  
            if(warmUps[7])
            {
                warmupHead.play('talk');
                rightHand.play('.');
                addBalloontext('jahaháá!!…Snilli!…Þú notar baugfingur á hægri hendi til þess að skrifa punkt.',20,22,90,500);
                sounds['baugPunktur'].play();
            }                    
        }, this).autoDestroy = true;
     });

     sounds['baugPunktur'].onStop.addOnce(function()
     {
        rightHand.animations.stop();
        rightHand.frame = 0;
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[7])
             {
                 warmupHead.play('talk');
                 addBalloontext('Skrifaðu .',35,35,80,10);
                 sounds['skrifPunktur'].play();
                 // Display the letter in the textArea
                 addWarmUpTextArea('.', 100, '#000000');
             }
             
                             
         }, this).autoDestroy = true;
     });

     sounds['skrifPunktur'].onStop.addOnce(function()
     { 
         stopWarmupHeadTalk(); 
 
         game.input.keyboard.start();
         game.input.keyboard.addCallbacks(this, null, null, function(char)
         {    
             if(char === '.')
             {
                 game.input.keyboard.stop();
                 textArea.destroy();
 
                 // Display the letter in the textArea
                 addWarmUpTextArea('.', 100, '#ff0000');
 
                 game.time.events.add(Phaser.Timer.SECOND * 2, function()
                 {
                     warmupHead.play('talk');
                     sounds['findSpurn'].play();
                     addBalloontext('Úúú vá!…En hvar ætli spurningamerkið sé?',22,22,90,500);
                     keyboardKeysMap.get('?').play('blink');
                     textArea.destroy();
                 });
             }
         });
      });

      sounds['findSpurn'].onStop.addOnce(function()
      {
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[7])
             {
                keyboardKeysMap.get('lshift').play('blink');
                leftHand.play('lshift');
                 warmupHead.play('talk');
                 addBalloontext('Ef þú ætlar að skrifa spurningamerki verður þú að ýta á shift lykilinn með litla fingri vinstri handar.',16,22,90,500);
                 sounds['shiftSpurn'].play();
             }
             
                             
         }, this).autoDestroy = true;
      });

      sounds['shiftSpurn'].onStop.addOnce(function()
      {
        leftHand.animations.stop();
        leftHand.frame = 0;
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[7])
             {
                 warmupHead.play('talk');
                 rightHand.play('?');
                 keyboardKeysMap.get('?').play('blink');
                 addBalloontext('Svo ýtiru á spurningamerkið.',25,35,80,500);
                 sounds['shiftSpurn2'].play();
             }
             
                             
         }, this).autoDestroy = true;
      });

      sounds['shiftSpurn2'].onStop.addOnce(function()
      {
        rightHand.animations.stop();
        rightHand.frame = 0;
         stopWarmupHeadTalk(); 
         game.time.events.add(Phaser.Timer.SECOND * 2, function()
         {                  
             if(warmUps[7])
             {
                 warmupHead.play('talk');
                 addBalloontext('Skrifaðu nú spurningamerki.',30,35,80,500);
                 sounds['skrifSpurn'].play();
                 addWarmUpTextArea('?', 100, '#000000');
             }
             
                             
         }, this).autoDestroy = true;
      });

     sounds['skrifSpurn'].onStop.addOnce(function()
    { 
        stopWarmupHeadTalk(); 

        game.input.keyboard.start();
        game.input.keyboard.addCallbacks(this, null, null, function(char)
        {    
            if(char === '?')
            {
                game.input.keyboard.stop();
                textArea.destroy();

                // Display the letter in the textArea
                addWarmUpTextArea('?', 100, '#ff0000');

                game.time.events.add(Phaser.Timer.SECOND * 2, function()
                {
                    warmupHead.play('talk');
                    sounds['finalSpurn'].play();
                    warmUps[7] = false;
                    Assignment(assignmentNr, exerciseNr);
                    textArea.destroy();
                });
            }
        });
     });

    sounds['upphafSpurn'].play();
    warmupHead.play('talk');
}

//Warmup texti
function warmupTexti(assignmentNr, exerciseNr){
    
    warmUps[8] = true;
    initGame();
    
    loadBackground(assignmentNr);
    addLogoAndAssignmentID(assignmentNr, exerciseNr);

    //Add keyboard
    loadKeyboard(assignmentNr);

    //Add the image and talking animation of the instructor
    warmupHead = game.add.sprite(900, 350, 'instructorMarglytta', 0);
    warmupHead.animations.add('talk', [0, 1, 0, 1, 1, 0], 4, true);
    warmupHead.scale.setTo(0.8);
    warmupHead.anchor.setTo(0.75, 1);

    //Bætum við tökkum
    addMuteButton();
    addExitButton();
    
    warmupHead.play('talk');
    sounds['findLTextar'].play();
    //Add the speech bubble with the correct text
    addBalloontext('Setjið puttana á vinstri hendi á heimalyklana.',25,32,90,500);
    //Add the left hand to the game so that it starts moving from below the visible canvas to the A, S, D and F keys.
    leftHand = game.add.sprite(75, 700, 'lHand', 0);
    leftHand.scale.setTo(1.1);  
    //warmupKeys.play('jklæBlink');
    keyboardKeysMap.get('a').play('blink');
    keyboardKeysMap.get('s').play('blink');
    keyboardKeysMap.get('d').play('blink');
    keyboardKeysMap.get('f').play('blink');

     //fogj2 is the soundclip where he says "Finndu stafina J, K, L og Æ"
     sounds['findLTextar'].onStop.addOnce(function()
     {
            //Make Maggi stop moving his mouth in the 2 second pause between animations 
            stopWarmupHeadTalk();
            //Pause for 2 seconds, then play the soundclip "Finndu stafina F og J" and make both F and J blink
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {          
                //Make Maggi talk, blink both F and J, set correct text in speech bubble and play soundclip
                if(warmUps[8])
                {
                sounds['findRTextar'].play();
                    warmupHead.play('talk');
                    addBalloontext('Svo puttana á hægri.',25,32,85,500);
                    keyboardKeysMap.get('j').play('blink');
                    keyboardKeysMap.get('k').play('blink');
                    keyboardKeysMap.get('l').play('blink');
                    keyboardKeysMap.get('æ').play('blink');
                    rightHand = game.add.sprite(405, 700, 'rHand', 0);
                    rightHand.scale.setTo(1.1);
                }           
            }, this).autoDestroy = true;  
    }, this);   

    //fogj2 is the soundclip where he says "Finndu stafina J, K, L og Æ"
     sounds['findRTextar'].onStop.addOnce(function()
     {
            //Make Maggi stop moving his mouth in the 2 second pause between animations 
            stopWarmupHeadTalk();
            //Pause for 2 seconds, then play the soundclip "Finndu stafina F og J" and make both F and J blink
            game.time.events.add(Phaser.Timer.SECOND * 2, function()
            {          
                //Make Maggi talk, blink both F and J, set correct text in speech bubble and play soundclip
                if(warmUps[8])
                {
                    warmupHead.play('talk');
                    Assignment(assignmentNr,exerciseNr);
                }           
            }, this).autoDestroy = true;  
    }, this);

    //Play soundclip byrjunUpprifjun
    sounds['findLTextar'].play();
    warmupHead.play('talk');
}

//Display the window with the game and its creators information
function loadAbout()
{
    var aboutWindow = game.add.image(200, 200, 'aboutInfo');

    exitBtn = game.add.button(483, 214, 'exit');
    exitBtn.scale.setTo(1.6);
    exitBtn.events.onInputOver.add(function(){ exitBtn.frame = 2;});
    exitBtn.events.onInputOut.add(function(){ exitBtn.frame = 0;});
    exitBtn.events.onInputDown.add(function(){ exitBtn.destroy(); aboutWindow.destroy(); });
}
//Array which stores all the warmUp functions and are called from the Instructions function with the assignmentNr variable
var warmUpFunctions =
[
    warmupUpprifjun,
    warmupTM,
    warmupDogV,
    warmupPogU,
    warmupÞogY,
    warmupOogC,
    warmupKommustafir,
    warmupStrikogSpurn,
    warmupTexti,
];
