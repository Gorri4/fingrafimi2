function preloadImages()
{    
    preloadBar = game.add.graphics(0, 50); 
    preloadBar.lineStyle(3, 0xffffff, 1);  
    preloadBar.moveTo(0, 0);  
    preloadBar.lineTo(game.width, 0);      
    preloadBar.scale.x = 0;
    
    // =================================== Images ===================================
    //Background images
    game.load.image('homePage',                 'Assets/myndir/Backgrounds/bakgrunnur_forsida.png');
    game.load.image('homeKeysBackground',       'Assets/Images/Backgrounds/homeKeysBackground.png');
    //Fingrafimi2 bakgrunnir
    game.load.image('marglyttaBakgrunnur',                'Assets/myndir/Backgrounds/marglytta.png');
    game.load.image('sundlaugBakgrunnur',                 'Assets/myndir/Backgrounds/sundlaug.png');
    game.load.image('byflugaBakgrunnur',                  'Assets/myndir/Backgrounds/byfluga.png');
    game.load.image('ledurblakaBakgrunnur',               'Assets/myndir/Backgrounds/ledurblaka.png');
    
    game.load.image('instructionBg',            'Assets/Images/Backgrounds/instructionBackground.png');
    game.load.image('farm',                     'Assets/Images/Backgrounds/farm.png');
    game.load.image('clouds',                   'Assets/Images/Backgrounds/clouds.png');
    game.load.image('box',                      'Assets/Images/Backgrounds/box.png');
    game.load.image('stage',                    'Assets/Images/Backgrounds/svid.png');
    game.load.image('ocean',                    'Assets/Images/Backgrounds/sandur.png');
    game.load.spritesheet('fishes',             'Assets/Images/Backgrounds/fishes.png', 149, 94);

    //Keyboard related images and sprites
    game.load.image('keyboard',                 'Assets/myndir/Keyboard/lyklabord.png');
    game.load.spritesheet('keys',               'Assets/Images/Keyboard/keySprite.png', 49, 45);
    game.load.spritesheet('a',                  'Assets/myndir/Keyboard/a.png', 37, 37);
    game.load.spritesheet('s',                  'Assets/myndir/Keyboard/s.png', 38, 38);
    game.load.spritesheet('d',                  'Assets/myndir/Keyboard/d.png', 37, 37);
    game.load.spritesheet('f',                  'Assets/myndir/Keyboard/f.png', 38, 38);
    game.load.spritesheet('j',                  'Assets/myndir/Keyboard/j.png', 37, 37);
    game.load.spritesheet('k',                  'Assets/myndir/Keyboard/k.png', 34, 35);
    game.load.spritesheet('l',                  'Assets/myndir/Keyboard/l.png', 40, 37);
    game.load.spritesheet('æ',                  'Assets/myndir/Keyboard/æ.png', 38, 38);

    game.load.spritesheet('spacebar',           'Assets/Images/Keyboard/spacebarSprite.png', 259, 44);
    game.load.spritesheet('lShift',             'Assets/Images/Keyboard/leftShiftSprite.png', 56, 43);
    game.load.spritesheet('rShift',             'Assets/Images/Keyboard/rightShiftSprite.png', 125, 45);
    game.load.spritesheet('warmupKeys',         'Assets/Images/Keyboard/asdfgh.png', 699, 77);
    //Images of hands used in game
    game.load.image('lHand',                    'Assets/myndir/Hands/vinstri0001.png');
    game.load.image('rHand',                    'Assets/myndir/Hands/haegri0001.png');
    game.load.spritesheet('handsSprite',        'Assets/Images/Hands/handSprite.png', 276, 450);
    game.load.spritesheet('hands',              'Assets/Images/Hands/handSpriteBigger1.png', 240, 450);

    // Various images
    game.load.image('logo',                     'Assets/Images/logo.png');
    game.load.image('logoS',                    'Assets/myndir/titillS.png');
    game.load.image('logoL',                    'Assets/myndir/titill.png');
    game.load.image('teacher',                  'Assets/Images/Buttons/Global/teacher.png');
    game.load.image('mat',                      'Assets/Images/Buttons/Global/mat.png');
    game.load.image('about',                    'Assets/Images/Buttons/Global/about.png');
    game.load.image('aboutInfo',                'Assets/Images/Buttons/Global/aboutInfo.png');
    game.load.spritesheet('exit',               'Assets/Images/Buttons/Global/xSprite.png', 32, 32);
    game.load.spritesheet('sound',              'Assets/Images/Buttons/Global/soundSprite.png', 100, 96);
    game.load.spritesheet('arrow',              'Assets/Images/Buttons/Global/arrowSprite.png', 93, 48);

    // Images for assignment buttons
    game.load.spritesheet('upprifjun',          'Assets/myndir/Buttons/Assignments/upprifjun_forsida.png',137 ,55);
    game.load.spritesheet('togm',               'Assets/myndir/Buttons/Assignments/togm_forsida.png',132,55 );
    game.load.spritesheet('dogv',               'Assets/myndir/Buttons/Assignments/dogv_forsida.png',124,60);
    game.load.spritesheet('pogu',               'Assets/myndir/Buttons/Assignments/pogu_forsida.png',125,100);
    game.load.spritesheet('þogy',               'Assets/myndir/Buttons/Assignments/þogy_forsida.png',145,55);
    game.load.spritesheet('oogc',               'Assets/myndir/Buttons/Assignments/ogoc_forsida.png',127,80);
    game.load.image('eh',                       'Assets/Images/Buttons/Assignments/eogh.png');
    game.load.image('ig',                       'Assets/Images/Buttons/Assignments/iogg.png');
    game.load.spritesheet('texta',              'Assets/myndir/Buttons/Assignments/texta_forsida.png',130,80);
    game.load.image('ro',                       'Assets/Images/Buttons/Assignments/rogo.png');
    game.load.spritesheet('broddstafir',        'Assets/myndir/Buttons/Assignments/broddstafir_forsida.png',163,60);
    game.load.spritesheet('bandogspurn',        'Assets/myndir/Buttons/Assignments/bandogspurn_forsida.png',120,65);
    game.load.spritesheet('btnSprite',          'Assets/Images/Buttons/Assignments/buttons.png', 124, 81);

    // Images for exercise buttons
    game.load.spritesheet('mus',                'Assets/Images/Buttons/Exercises/mus.png', 110, 70);
    game.load.spritesheet('robot',              'Assets/Images/Buttons/Exercises/robot.png', 105, 127);
    game.load.spritesheet('heyBaggi',           'Assets/Images/Buttons/Exercises/hey.png', 80, 62);
    game.load.spritesheet('blom',               'Assets/Images/Buttons/Exercises/blom.png', 73, 95);
    game.load.spritesheet('mus2',               'Assets/Images/Buttons/Exercises/mus2.png', 91, 84);
    game.load.spritesheet('blakbolti',          'Assets/Images/Buttons/Exercises/blakbolti.png', 48, 52);
    game.load.spritesheet('fotbolti',           'Assets/Images/Buttons/Exercises/fotbolti.png', 45, 45);
    game.load.spritesheet('korfubolti',         'Assets/Images/Buttons/Exercises/korfubolti.png', 50, 52);
    game.load.spritesheet('rubbybolti',         'Assets/Images/Buttons/Exercises/rubbybolti.png', 62, 42);
    game.load.spritesheet('tennisbolti',        'Assets/Images/Buttons/Exercises/tennisbolti.png', 26, 26);
    game.load.spritesheet('gitar',              'Assets/Images/Buttons/Exercises/gitar.png', 51, 73);
    game.load.spritesheet('tromma',             'Assets/Images/Buttons/Exercises/trommur.png', 37, 35);
    game.load.spritesheet('nota',               'Assets/Images/Buttons/Exercises/nota.png', 50, 40);
    game.load.spritesheet('piano',              'Assets/Images/Buttons/Exercises/piano.png', 81, 38);
    game.load.spritesheet('saxafonn',           'Assets/Images/Buttons/Exercises/saxafonn.png', 57, 96);
    game.load.spritesheet('jellyfish',          'Assets/myndir/Buttons/Exercises/jellyfish.png', 83, 68);
    game.load.spritesheet('starfish',           'Assets/myndir/Buttons/Exercises/krossfiskur.png', 61, 76);
    game.load.spritesheet('shrimp',             'Assets/myndir/Buttons/Exercises/shrimp.png', 77, 50);
    game.load.spritesheet('seahorse',           'Assets/myndir/Buttons/Exercises/seahorse.png', 35, 72);
    game.load.spritesheet('shell',              'Assets/myndir/Buttons/Exercises/shell.png', 42, 43);
    game.load.spritesheet('brabra',             'Assets/myndir/Buttons/Exercises/brabra.png', 59, 50);
    game.load.spritesheet('sundbolti',          'Assets/myndir/Buttons/Exercises/sundbolti.png', 61, 50);
    game.load.spritesheet('sundhringur',        'Assets/myndir/Buttons/Exercises/sundhringur.png', 85, 50);
    game.load.spritesheet('solhlif',            'Assets/myndir/Buttons/Exercises/solhlif.png', 81, 80);
    game.load.spritesheet('glas',               'Assets/myndir/Buttons/Exercises/glass.png', 61, 80);
    game.load.spritesheet('byflugaEx',          'Assets/myndir/Buttons/Exercises/byfluga.png', 52, 80);
    game.load.spritesheet('sol',                'Assets/myndir/Buttons/Exercises/sol.png', 81, 80);
    game.load.spritesheet('gras',               'Assets/myndir/Buttons/Exercises/gras.png', 75, 80);
    game.load.spritesheet('blomBlatt',          'Assets/myndir/Buttons/Exercises/blomBlatt.png', 70, 80);
    game.load.spritesheet('blomFjolu',          'Assets/myndir/Buttons/Exercises/blomFjolu.png', 61, 80);
    game.load.spritesheet('kongulo',            'Assets/myndir/Buttons/Exercises/kongulo.png', 91, 80);
    game.load.spritesheet('stjarna',            'Assets/myndir/Buttons/Exercises/stjarna.png', 64, 80);
    game.load.spritesheet('tungl',              'Assets/myndir/Buttons/Exercises/tungl.png', 48, 80);
    game.load.spritesheet('ledurblakaEx',       'Assets/myndir/Buttons/Exercises/ledurblaka.png', 112, 80);
    
    //Images for glow around exercise buttons for the exercise you are currently in
    game.load.image('musGlow',                  'Assets/Images/Buttons/Exercises/mus-glow.png');
    game.load.image('robotGlow',                'Assets/Images/Buttons/Exercises/robot-glow.png');
    game.load.image('heyBaggiGlow',             'Assets/Images/Buttons/Exercises/hey-glow.png');
    game.load.image('blomGlow',                 'Assets/Images/Buttons/Exercises/blom-glow.png');
    game.load.image('mus2Glow',                 'Assets/Images/Buttons/Exercises/mus2-glow.png');
    game.load.image('blakboltiGlow',            'Assets/Images/Buttons/Exercises/blakbolti-glow.png');
    game.load.image('tennisboltiGlow',          'Assets/Images/Buttons/Exercises/tennisbolti-glow.png');
    game.load.image('fotboltiGlow',             'Assets/Images/Buttons/Exercises/fotbolti-glow.png');
    game.load.image('korfuboltiGlow',           'Assets/Images/Buttons/Exercises/korfubolti-glow.png');
    game.load.image('rubbyboltiGlow',           'Assets/Images/Buttons/Exercises/rubbybolti-glow.png');
    game.load.image('gitarGlow',                'Assets/Images/Buttons/Exercises/gitar-glow.png');
    game.load.image('trommurGlow',              'Assets/Images/Buttons/Exercises/trommur-glow.png');
    game.load.image('notaGlow',                 'Assets/Images/Buttons/Exercises/nota-glow.png');
    game.load.image('pianoGlow',                'Assets/Images/Buttons/Exercises/piano-glow.png');
    game.load.image('saxafonnGlow',             'Assets/Images/Buttons/Exercises/saxafonn-glow.png');
    game.load.image('jellyfishGlow',            'Assets/Images/Buttons/Exercises/jellyfish-glow.png');
    game.load.image('starfishGlow',             'Assets/Images/Buttons/Exercises/starfish-glow.png');
    game.load.image('shrimpGlow',               'Assets/Images/Buttons/Exercises/shrimp-glow.png');
    game.load.image('seahorseGlow',             'Assets/Images/Buttons/Exercises/seahorse-glow.png');
    game.load.image('shellGlow',                'Assets/Images/Buttons/Exercises/shell-glow.png');

    // Images related to WarmUp animations
    game.load.spritesheet('balloonSprite',      'Assets/Images/Instructors/bubbleSprite.png', 345.2, 191);
    game.load.spritesheet('warmupHead',         'Assets/Images/Instructors/warmupHead2.png', 159, 155);
    game.load.spritesheet('instructorMaggi',    'Assets/Images/Instructors/instructionMaggi.png', 524, 572);
    game.load.spritesheet('pig',                'Assets/Images/Instructors/svin.png', 522, 756);
    game.load.spritesheet('fish',               'Assets/Images/Instructors/fish.png', 414, 503);
    game.load.spritesheet('horse',              'Assets/Images/Instructors/horse.png', 371, 672);
    game.load.spritesheet('whale',              'Assets/Images/Instructors/whale.png', 372, 711);

    game.load.spritesheet('instructorMarglytta',    'Assets/myndir/Instructors/instructorMarglytta.png', 386, 400);
    game.load.spritesheet('instructorFroskur',      'Assets/myndir/Instructors/instructorFroskur.png', 373, 360);
    game.load.spritesheet('instructorByfluga',      'Assets/myndir/Instructors/instructorByfluga.png', 380, 420);
    game.load.spritesheet('instructurLedurblaka',   'Assets/myndir/Instructors/instructorLedurblaka.png', 543, 360);
    game.load.spritesheet('instructorMarglytta',    'Assets/myndir/Instructors/instructorMarglytta.png', 372, 711);
    

    preloadSounds();

    //Displays how much of the game has been loaded on the canvas
    var loadingText = game.add.text(game.world.centerX, game.world.centerY, 'Hleð inn 0%', { fill: '#00000' });
    loadingText.anchor.setTo(0.5);
    var progressDisplay = 0;

    var timerEvt = game.time.events.loop(10, function ()
    {
        if(game.load.progress < 100)
        {
            if(progressDisplay < game.load.progress)
            {
                loadingText.text = 'Hleð inn '+(++progressDisplay)+'%';
            }
        }
        else
        {
            loadingText.text = 'Hlaðið 100%';
            game.time.events.remove(timerEvt);
        }
    }, this);
}