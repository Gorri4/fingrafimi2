function preload()
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
    game.load.image('marglyttaBakgrunnur',      'Assets/myndir/Backgrounds/marglytta.png');
    game.load.image('sundlaugBakgrunnur',       'Assets/myndir/Backgrounds/sundlaug.png');
    game.load.image('byflugaBakgrunnur',        'Assets/myndir/Backgrounds/byfluga.png');
    game.load.image('ledurblakaBakgrunnur',     'Assets/myndir/Backgrounds/ledurblaka.png');
    
    game.load.image('clouds',                   'Assets/Images/Backgrounds/clouds.png');
    game.load.image('spider',                   'Assets/myndir/Backgrounds/spider.png');
    game.load.image('bee',                      'Assets/myndir/Backgrounds/bee.png');
    game.load.spritesheet('solBak',             'Assets/myndir/Backgrounds/solBak.png',130,120);

    //Keyboard related images and sprites
    game.load.image('keyboard',                 'Assets/myndir/Keyboard/lyklabord.png');
    game.load.spritesheet('keys',               'Assets/Images/Keyboard/keySprite.png', 49, 45);
    game.load.spritesheet('a',                  'Assets/myndir/Keyboard/a.png', 37, 37);
    game.load.spritesheet('s',                  'Assets/myndir/Keyboard/s.png', 38, 38);
    game.load.spritesheet('e',                  'Assets/myndir/Keyboard/e.png', 37, 36);
    game.load.spritesheet('d',                  'Assets/myndir/Keyboard/d.png', 37, 37);
    game.load.spritesheet('f',                  'Assets/myndir/Keyboard/f.png', 38, 38);
    game.load.spritesheet('j',                  'Assets/myndir/Keyboard/j.png', 37, 37);
    game.load.spritesheet('k',                  'Assets/myndir/Keyboard/k.png', 34, 35);
    game.load.spritesheet('g',                  'Assets/myndir/Keyboard/g.png', 35, 37);
    game.load.spritesheet('l',                  'Assets/myndir/Keyboard/l.png', 40, 37);
    game.load.spritesheet('i',                  'Assets/myndir/Keyboard/i.png', 36, 37);
    game.load.spritesheet('o',                  'Assets/myndir/Keyboard/o.png', 35, 35);
    game.load.spritesheet('æ',                  'Assets/myndir/Keyboard/æ.png', 38, 38);
    game.load.spritesheet('t',                  'Assets/myndir/Keyboard/t.png', 37, 37);
    game.load.spritesheet('b',                  'Assets/myndir/Keyboard/b.png', 35, 35);
    game.load.spritesheet('n',                  'Assets/myndir/Keyboard/n.png', 35, 35);
    game.load.spritesheet('m',                  'Assets/myndir/Keyboard/m.png', 36, 37);
    game.load.spritesheet('dd',                 'Assets/myndir/Keyboard/dd.png', 38.5, 36);
    game.load.spritesheet('v',                  'Assets/myndir/Keyboard/v.png', 36, 37);
    game.load.spritesheet('h',                  'Assets/myndir/Keyboard/h.png', 38, 37);
    game.load.spritesheet('p',                  'Assets/myndir/Keyboard/p.png', 35, 36);
    game.load.spritesheet('u',                  'Assets/myndir/Keyboard/u.png', 37, 36);
    game.load.spritesheet('þ',                  'Assets/myndir/Keyboard/þ.png', 35, 36);
    game.load.spritesheet('y',                  'Assets/myndir/Keyboard/y.png', 37, 36);
    game.load.spritesheet('c',                  'Assets/myndir/Keyboard/c.png', 37, 36);
    game.load.spritesheet('ö',                  'Assets/myndir/Keyboard/ö.png', 37, 36);
    game.load.spritesheet('´',                  'Assets/myndir/Keyboard/komma.png', 37, 37);
    game.load.spritesheet('?',                  'Assets/myndir/Keyboard/spurningamerki.png', 35, 36);
    game.load.spritesheet('-',                  'Assets/myndir/Keyboard/bandstrik.png', 35, 36);
    game.load.spritesheet('.',                  'Assets/myndir/Keyboard/punktur.png', 38, 38);
    game.load.spritesheet('lshift',             'Assets/myndir/Keyboard/lshift.png', 45, 36);
    game.load.spritesheet('hshift',             'Assets/myndir/Keyboard/hshift.png', 97, 36);
    game.load.spritesheet(' ',                  'Assets/myndir/Keyboard/space.png', 210, 36);

    // //Images of hands used in game
    game.load.spritesheet('lHand',                    'Assets/myndir/Hands/lhand.png',393,380);
    game.load.spritesheet('rHand',                    'Assets/myndir/Hands/hhand.png',291,400);

    // Various images
    game.load.image('logoS',                    'Assets/myndir/titillS.png');
    game.load.image('logoL',                    'Assets/myndir/titill.png');
    game.load.image('teacher',                  'Assets/Images/Buttons/Global/teacher.png');
    game.load.image('mat',                      'Assets/Images/Buttons/Global/mat.png');
    game.load.image('aboutButton',              'Assets/myndir/Buttons/aboutButton.png');
    game.load.image('aboutInfo',                'Assets/myndir/Buttons/Global/about.png');
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
    game.load.spritesheet('moreExMarg',         'Assets/myndir/Buttons/moreExMarg.png',116,80);
    game.load.spritesheet('moreExLedur',        'Assets/myndir/Buttons/moreExLedur.png',116,80);
    game.load.spritesheet('moreExFroskur',      'Assets/myndir/Buttons/moreExFroskur.png',116,80);
    game.load.spritesheet('moreExByfluga',      'Assets/myndir/Buttons/moreExByfluga.png',116,80);
    game.load.spritesheet('texta',              'Assets/myndir/Buttons/Assignments/texta_forsida.png',130,65);
    game.load.spritesheet('broddstafir',        'Assets/myndir/Buttons/Assignments/broddstafir_forsida.png',163,60);
    game.load.spritesheet('bandogspurn',        'Assets/myndir/Buttons/Assignments/bandogspurn_forsida.png',120,65);

    //Exercises Buttons
    game.load.spritesheet('jellyfish',          'Assets/myndir/Buttons/Exercises/jellyfish.png', 63, 68);
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

    game.load.spritesheet('balloonSprite',      'Assets/myndir/bladra.png', 512, 512);

    //Instructors
    game.load.spritesheet('instructorMarglytta',    'Assets/myndir/Instructors/instructorMarglytta.png', 386, 400);
    game.load.spritesheet('instructorFroskur',      'Assets/myndir/Instructors/instructorFroskur.png', 373, 360);
    game.load.spritesheet('instructorFroskurWarmup',      'Assets/myndir/Instructors/instructorFroskurWarmup.png', 248, 360);
    game.load.spritesheet('instructorByfluga',      'Assets/myndir/Instructors/instructorByfluga.png', 380, 420);
    game.load.spritesheet('instructurLedurblaka',   'Assets/myndir/Instructors/instructorLedurblaka.png', 543, 360);
    game.load.spritesheet('instructorMarglytta',    'Assets/myndir/Instructors/instructorMarglytta.png', 372, 711);
    

    // =================================== Audio ===================================
    //Audio for when entering game
    game.load.audio('intro',            'Assets/hljod/audio/Alfur_01.mp3');

    //Audio for when a wrong key is pressed in an exercise
    game.load.audio('wrongSound',      'Assets/Sounds/wrongSound.mp3');

    //Audio files related to WarmUp animation for "F og J"
    game.load.audio('byrjunUpprifjun',         'Assets/hljod/audio/Marglytta_02.mp3');
    game.load.audio('endirUpprifjun',          'Assets/hljod/audio/Marglytta_07.mp3');
    game.load.audio('leftFJ',                  'Assets/hljod/audio/Marglytta_04.mp3');
    game.load.audio('rightFJ',                 'Assets/hljod/audio/Marglytta_05.mp3');
    game.load.audio('uuuFlott',                'Assets/hljod/audio/Marglytta_06.mp3');
    
    //Audio files related to WarmUp animation for "D og K"
    game.load.audio('byrjunTM',         'Assets/hljod/audio/Fusi_Froskur_02.mp3');
    game.load.audio('findTTM',          'Assets/hljod/audio/Fusi_Froskur_03.mp3');
    game.load.audio('visV',             'Assets/hljod/audio/Fusi_Froskur_04.mp3');
    game.load.audio('visH',             'Assets/hljod/audio/Fusi_Froskur_07.mp3');
    game.load.audio('skrifT',           'Assets/hljod/audio/Fusi_Froskur_05.mp3');
    game.load.audio('findM',            'Assets/hljod/audio/Fusi_Froskur_06.mp3');
    game.load.audio('finalTM',          'Assets/hljod/audio/Fusi_Froskur_09.mp3');
    game.load.audio('skrifM',             'Assets/hljod/audio/Fusi_Froskur_08.mp3');
    
    //Audio files related to WarmUp animation for "S og L"
    game.load.audio('byrjunDV',         'Assets/hljod/audio/Fusi_Froskur_21.mp3');
    game.load.audio('findV',          'Assets/hljod/audio/Fusi_Froskur_25.mp3');
    game.load.audio('lilD',             'Assets/hljod/audio/Fusi_Froskur_23.mp3');
    game.load.audio('visVV',             'Assets/hljod/audio/Fusi_Froskur_26.mp3');
    game.load.audio('skrifD',             'Assets/hljod/audio/Fusi_Froskur_24.mp3');
    game.load.audio('findD',          'Assets/hljod/audio/Fusi_Froskur_22.mp3');
    game.load.audio('finalDV',          'Assets/hljod/audio/Fusi_Froskur_28.mp3');
    game.load.audio('skrifV',             'Assets/hljod/audio/Fusi_Froskur_27.mp3');
    
    //P og U
    game.load.audio('byrjunPU',         'Assets/hljod/audio/Byfluga_02.mp3');
    game.load.audio('findP',          'Assets/hljod/audio/Byfluga_03.mp3');
    game.load.audio('lilP',             'Assets/hljod/audio/Byfluga_04.mp3');
    game.load.audio('visU',             'Assets/hljod/audio/Byfluga_07.mp3');
    game.load.audio('skrifP',             'Assets/hljod/audio/Byfluga_05.mp3');
    game.load.audio('findU',          'Assets/hljod/audio/Byfluga_06.mp3');
    game.load.audio('finalPU',          'Assets/hljod/audio/Byfluga_09.mp3');
    game.load.audio('skrifU',             'Assets/hljod/audio/Byfluga_08.mp3');

    //Þ og Y
    game.load.audio('byrjunÞY',         'Assets/hljod/audio/Byfluga_22.mp3');
    game.load.audio('findÞ',          'Assets/hljod/audio/Byfluga_23.mp3');
    game.load.audio('lilÞ',             'Assets/hljod/audio/Byfluga_24.mp3');
    game.load.audio('visY',             'Assets/hljod/audio/Byfluga_27.mp3');
    game.load.audio('skrifÞ',             'Assets/hljod/audio/Byfluga_25.mp3');
    game.load.audio('findY',          'Assets/hljod/audio/Byfluga_26.mp3');
    game.load.audio('finalÞY',          'Assets/hljod/audio/Byfluga_29.mp3');
    game.load.audio('skrifY',             'Assets/hljod/audio/Byfluga_28.mp3');

    //Ö og C
    game.load.audio('byrjunÖC',         'Assets/hljod/audio/Ledurblaka_03.mp3');
    game.load.audio('findÖ',          'Assets/hljod/audio/Ledurblaka_04.mp3');
    game.load.audio('lilÖ',             'Assets/hljod/audio/Ledurblaka_05.mp3');
    game.load.audio('visC',             'Assets/hljod/audio/Ledurblaka_08.mp3');
    game.load.audio('skrifÖ',             'Assets/hljod/audio/Ledurblaka_06.mp3');
    game.load.audio('findC',          'Assets/hljod/audio/Ledurblaka_07.mp3');
    game.load.audio('finalÖC',          'Assets/hljod/audio/Ledurblaka_10.mp3');
    game.load.audio('skrifC',             'Assets/hljod/audio/Ledurblaka_09.mp3');

    //Komma
    game.load.audio('byrjunKomma',         'Assets/hljod/audio/Ledurblaka_25.mp3');
    game.load.audio('findUppKomma',          'Assets/hljod/audio/Ledurblaka_26.mp3');
    game.load.audio('lilUppKomma',             'Assets/hljod/audio/Ledurblaka_27.mp3');
    game.load.audio('pressE',             'Assets/hljod/audio/Ledurblaka_28.mp3');
    game.load.audio('langKomma',             'Assets/hljod/audio/Ledurblaka_30a.mp3');
    game.load.audio('skrifÁ',             'Assets/hljod/audio/Ledurblaka_29.mp3');
    game.load.audio('findKomma',          'Assets/hljod/audio/Ledurblaka_30.mp3');
    game.load.audio('finalKomma',          'Assets/hljod/audio/Ledurblaka_32.mp3');
    game.load.audio('skrifKomma',             'Assets/hljod/audio/Ledurblaka_31.mp3');

    game.load.audio('byrjunTextar',         'Assets/hljod/audio/Marglytta_31.mp3');
    game.load.audio('findLTextar',          'Assets/hljod/audio/Marglytta_32.mp3');
    game.load.audio('findRTextar',             'Assets/hljod/audio/Marglytta_32a.mp3');
    game.load.audio('finalTextar',          'Assets/hljod/audio/Marglytta_35.mp3');

     //Audio files related to WarmUp animation for spurningarmerki
     game.load.audio('upphafSpurn',       'Assets/hljod/audio/Marglytta_18.mp3');
     game.load.audio('findStrik',        'Assets/hljod/audio/Marglytta_19.mp3');
     game.load.audio('lilStrik',      'Assets/hljod/audio/Marglytta_20.mp3');
     game.load.audio('skrifStrik',     'Assets/hljod/audio/Marglytta_21.mp3');
     game.load.audio('findPunktur',     'Assets/hljod/audio/Marglytta_22.mp3');
     game.load.audio('baugPunktur',       'Assets/hljod/audio/Marglytta_23.mp3');
     game.load.audio('skrifPunktur',       'Assets/hljod/audio/Marglytta_24.mp3');
     game.load.audio('findSpurn',       'Assets/hljod/audio/Marglytta_25.mp3');
     game.load.audio('shiftSpurn',       'Assets/hljod/audio/Marglytta_26.mp3');
     game.load.audio('shiftSpurn2',       'Assets/hljod/audio/Marglytta_26a.mp3');
     game.load.audio('skrifSpurn',       'Assets/hljod/audio/Marglytta_27.mp3');
     game.load.audio('finalSpurn',       'Assets/hljod/audio/Marglytta_28.mp3');

    //Audio files related to WarmUp animation for "A og Æ"
    game.load.audio('findAAE',          'Assets/Sounds/A_og_AE_3.mp3');
    game.load.audio('findA',            'Assets/Sounds/A_og_AE_4.mp3');
    game.load.audio('findAE',           'Assets/Sounds/A_og_AE_5.mp3');
    game.load.audio('finalAAE',         'Assets/Sounds/A_og_AE_6.mp3');
    
    //Audio files related to WarmUp animation for "Allir heimalyklar 1"
    game.load.audio('leftAll1',         'Assets/Sounds/Heimalyklar_1_2.mp3');
    game.load.audio('rightAll1',        'Assets/Sounds/Heimalyklar_1_3.mp3');
    game.load.audio('finalAll1',        'Assets/Sounds/Heimalyklar_1_4.mp3');
    
    //Audio files related to WarmUp animation for "Allir heimalyklar 2"
    game.load.audio('leftAll2',         'Assets/Sounds/Heimalyklar_2_2.mp3');
    game.load.audio('rightAll2',        'Assets/Sounds/Heimalyklar_2_3.mp3');
    game.load.audio('finalAll2',        'Assets/Sounds/Heimalyklar_2_4.mp3');
    
    //Audio files related to WarmUp animation for "E og H"
    game.load.audio('handsEH',          'Assets/Sounds/E_og_H_2.mp3');
    game.load.audio('findE',            'Assets/Sounds/E_og_H_3.mp3');
    game.load.audio('typingE',          'Assets/Sounds/E_og_H_4.mp3');
    game.load.audio('typeE',            'Assets/Sounds/E_og_H_5.mp3');
    game.load.audio('findH',            'Assets/Sounds/E_og_H_6.mp3');
    game.load.audio('typingH',          'Assets/Sounds/E_og_H_7.mp3');
    game.load.audio('typeH',            'Assets/Sounds/E_og_H_8.mp3');
    game.load.audio('finalEH',          'Assets/Sounds/E_og_H_9.mp3');
    
    //Audio files related to WarmUp animation for "I og G"
    game.load.audio('handsIG',          'Assets/Sounds/I_og_G_2.mp3');    
    game.load.audio('findI',            'Assets/Sounds/I_og_G_3.mp3');
    game.load.audio('typingI',          'Assets/Sounds/I_og_G_4.mp3');
    game.load.audio('typeI',            'Assets/Sounds/I_og_G_5_1.mp3');
    game.load.audio('gjIG',             'Assets/Sounds/I_og_G_5_2.mp3');
    game.load.audio('findG',            'Assets/Sounds/I_og_G_6.mp3');
    game.load.audio('typingG',          'Assets/Sounds/I_og_G_7.mp3');
    game.load.audio('typeG',            'Assets/Sounds/I_og_G_8.mp3');
    game.load.audio('finalIG',          'Assets/Sounds/I_og_G_9.mp3');
    
    //Audio files related to WarmUp animation for "B og N"
    game.load.audio('handsBN',          'Assets/Sounds/B_og_N_1.mp3');
    game.load.audio('findB',            'Assets/Sounds/B_og_N_2.mp3');
    game.load.audio('typingB',          'Assets/Sounds/B_og_N_3.mp3');
    game.load.audio('typeB',            'Assets/Sounds/B_og_N_4.mp3');
    game.load.audio('gjBN',             'Assets/Sounds/B_og_N_7_2.mp3');
    game.load.audio('findN',            'Assets/Sounds/B_og_N_5.mp3');
    game.load.audio('typingN',          'Assets/Sounds/B_og_N_6.mp3');
    game.load.audio('typeN',            'Assets/Sounds/B_og_N_7_1.mp3');
    game.load.audio('finalBN',          'Assets/Sounds/B_og_N_8.mp3');    
    
    //Audio files related to WarmUp animation for "R og O"
    game.load.audio('handsRO',          'Assets/Sounds/R_og_O_1.mp3');
    game.load.audio('findR',            'Assets/Sounds/R_og_O_2.mp3');
    game.load.audio('typingR',          'Assets/Sounds/R_og_O_3.mp3');
    game.load.audio('typeR',            'Assets/Sounds/R_og_O_4.mp3');
    game.load.audio('findO',            'Assets/Sounds/R_og_O_5.mp3');
    game.load.audio('typingO',          'Assets/Sounds/R_og_O_6.mp3');
    game.load.audio('typeO',            'Assets/Sounds/R_og_O_7.mp3');
    game.load.audio('finalRO',          'Assets/Sounds/R_og_O_8.mp3');

    //Audio files related to WarmUp animation for Broddstafir
    game.load.audio('handsBRODD',       'Assets/Sounds/Broddstafir_1.mp3');
    game.load.audio('findComma',        'Assets/Sounds/Broddstafir_2.mp3');
    game.load.audio('typingComma',      'Assets/Sounds/Broddstafir_3.mp3');
    game.load.audio('typingComma2',     'Assets/Sounds/Broddstafir_4.mp3');
    game.load.audio('typingComma3',     'Assets/Sounds/Broddstafir_5.mp3');
    game.load.audio('typeCommaE',       'Assets/Sounds/Broddstafir_6.mp3');
    game.load.audio('finalBRODD',       'Assets/Sounds/Broddstafir_7.mp3');

    //Audio files related to WarmUp animation for Hástafir
    game.load.audio('handsHA',          'Assets/Sounds/Hastafir_2.mp3');
    game.load.audio('findLShift',       'Assets/Sounds/Hastafir_3.mp3');
    game.load.audio('typingLShift',     'Assets/Sounds/Hastafir_4.mp3');
    game.load.audio('findRShift',       'Assets/Sounds/Hastafir_5.mp3');
    game.load.audio('typingRShift',     'Assets/Sounds/Hastafir_6.mp3');
    game.load.audio('typingOHA',        'Assets/Sounds/Hastafir_7.mp3');
    game.load.audio('typingOHA2',       'Assets/Sounds/Hastafir_8.mp3');
    game.load.audio('typeOHA',          'Assets/Sounds/Hastafir_9.mp3');
    game.load.audio('finalHA',          'Assets/Sounds/Hastafir_10.mp3');

     //Audio files for the Instructions
     game.load.audio('instructionUpprifjun',      'Assets/hljod/audio/Marglytta_01.mp3');
     game.load.audio('instructionSpurn',          'Assets/hljod/audio/Marglytta_17.mp3');
     game.load.audio('instructionTM',             'Assets/hljod/audio/Fusi_Froskur_01.mp3');
     game.load.audio('instructionDV',             'Assets/hljod/audio/Fusi_Froskur_20_togmAllir.mp3');
     game.load.audio('instructionPU',             'Assets/hljod/audio/Byfluga_01.mp3');
     game.load.audio('instructionÞY',             'Assets/hljod/audio/Byfluga_21_poguAllir.mp3');
     game.load.audio('instructionOC',             'Assets/hljod/audio/Ledurblaka_01.mp3');
     game.load.audio('instructionBrodd',          'Assets/hljod/audio/Ledurblaka_24_oogcAllir2.mp3');
     game.load.audio('instructionTexti',          'Assets/hljod/audio/Marglytta_30.mp3');

    //Hrós Marglytta
    game.load.audio('hros1Margl',         'Assets/hljod/audio/Marglytta_09_hros1.mp3');
    game.load.audio('hros2Margl',         'Assets/hljod/audio/Marglytta_10_hros2.mp3');
    game.load.audio('hros3Margl',         'Assets/hljod/audio/Marglytta_11_hros3.mp3');
    game.load.audio('hros4Margl',         'Assets/hljod/audio/Marglytta_12_hros4.mp3');
    game.load.audio('hros5Margl',         'Assets/hljod/audio/Marglytta_13_hros5.mp3');
    game.load.audio('hros6Margl',         'Assets/hljod/audio/Marglytta_14_hros6.mp3');
    game.load.audio('hros7Margl',         'Assets/hljod/audio/Marglytta_15_hros7.mp3');

    //Hrós Froskur
    game.load.audio('hros1Froskur',         'Assets/hljod/audio/Fusi_Froskur_11_hros1.mp3');
    game.load.audio('hros2Froskur',         'Assets/hljod/audio/Fusi_Froskur_12_hros2.mp3');
    game.load.audio('hros3Froskur',         'Assets/hljod/audio/Fusi_Froskur_13_hros3.mp3');
    game.load.audio('hros4Froskur',         'Assets/hljod/audio/Fusi_Froskur_14_hros4.mp3');
    game.load.audio('hros5Froskur',         'Assets/hljod/audio/Fusi_Froskur_15_hros5.mp3');
    game.load.audio('hros6Froskur',         'Assets/hljod/audio/Fusi_Froskur_16_hros6.mp3');
    game.load.audio('hros7Froskur',         'Assets/hljod/audio/Fusi_Froskur_17_hros7.mp3');
    game.load.audio('hros8Froskur',         'Assets/hljod/audio/Fusi_Froskur_18_hros8.mp3');
    game.load.audio('hros9Froskur',         'Assets/hljod/audio/Fusi_Froskur_19_hros10.mp3');

    //Hrós Byfluga
    game.load.audio('hros1Byfluga',         'Assets/hljod/audio/Byfluga_11_hros1.mp3');
    game.load.audio('hros2Byfluga',         'Assets/hljod/audio/Byfluga_12_hros2.mp3');
    game.load.audio('hros3Byfluga',         'Assets/hljod/audio/Byfluga_13_hros3.mp3');
    game.load.audio('hros4Byfluga',         'Assets/hljod/audio/Byfluga_14_hros4.mp3');
    game.load.audio('hros5Byfluga',         'Assets/hljod/audio/Byfluga_15_hros5.mp3');
    game.load.audio('hros6Byfluga',         'Assets/hljod/audio/Byfluga_16_hros6.mp3');
    game.load.audio('hros7Byfluga',         'Assets/hljod/audio/Byfluga_17_hros7.mp3');
    game.load.audio('hros8Byfluga',         'Assets/hljod/audio/Byfluga_18_hros8.mp3');
    game.load.audio('hros9Byfluga',         'Assets/hljod/audio/Byfluga_19_hros9.mp3');
    game.load.audio('hros10Byfluga',        'Assets/hljod/audio/Byfluga_20_hros10.mp3');

    //Hrós Ledurblaka
    game.load.audio('hros1Ledur',         'Assets/hljod/audio/Ledurblaka_11_hros1.mp3');
    game.load.audio('hros2Ledur',         'Assets/hljod/audio/Ledurblaka_12_hros2.mp3');
    game.load.audio('hros3Ledur',         'Assets/hljod/audio/Ledurblaka_13_hros3.mp3');
    game.load.audio('hros4Ledur',         'Assets/hljod/audio/Ledurblaka_14_hros4.mp3');
    game.load.audio('hros5Ledur',         'Assets/hljod/audio/Ledurblaka_15_hros5.mp3');
    game.load.audio('hros6Ledur',         'Assets/hljod/audio/Ledurblaka_16_hros6.mp3');
    game.load.audio('hros7Ledur',         'Assets/hljod/audio/Ledurblaka_17_hros7.mp3');
    game.load.audio('hros8Ledur',         'Assets/hljod/audio/Ledurblaka_18_hros8.mp3');
    game.load.audio('hros9Ledur',         'Assets/hljod/audio/Ledurblaka_20_hros9.mp3');
    game.load.audio('hros10Ledur',        'Assets/hljod/audio/Ledurblaka_21_hros10.mp3');
    
    //Fleiri aefingar
    game.load.audio('UpprifjunFleiri',    'Assets/hljod/audio/Marglytta_08_fleiri.mp3');
    game.load.audio('TogMFleiri',         'Assets/hljod/audio/Fusi_Froskur_10_fleiri1.mp3');
    game.load.audio('DogVFleiri',         'Assets/hljod/audio/Fusi_Froskur_29_fleiri.mp3');
    game.load.audio('SpurnFleiri',        'Assets/hljod/audio/Marglytta_29_fleiri2.mp3');
    game.load.audio('PogUFleiri',         'Assets/hljod/audio/Byfluga_10_fleiri.mp3');
    game.load.audio('ÞogYFleiri',         'Assets/hljod/audio/Byfluga_30_fleiri.mp3');
    game.load.audio('OogCFleiri',         'Assets/hljod/audio/Ledurblaka_21_hros10.mp3');
    game.load.audio('BroddFleiri',        'Assets/hljod/audio/Ledurblaka_21_hros10.mp3');
    game.load.audio('TextiFleiri',        'Assets/hljod/audio/Marglytta_33_fleiri3.mp3');

    //Audio files that are played when the user has finished all the exercises in an assignment
    game.load.audio('finishUpprifjun',     'Assets/hljod/audio/Marglytta_16_UpprifjunAllar.mp3');
    game.load.audio('finishSpurn',         'Assets/hljod/audio/Marglytta_34_textiAllir.mp3');
    game.load.audio('finishTogM',          'Assets/hljod/audio/Fusi_Froskur_20_togmAllir.mp3');
    game.load.audio('finishDogV',          'Assets/hljod/audio/Fusi_Froskur_30_dogvAllir.mp3');
    game.load.audio('finishPogU',          'Assets/hljod/audio/Byfluga_21_poguAllir.mp3');
    game.load.audio('finishÞogY',          'Assets/hljod/audio/Byfluga_31_þogyAllir.mp3');
    game.load.audio('finishOogC',          'Assets/hljod/audio/Ledurblaka_24_oogcAllir2.mp3');
    game.load.audio('finishBrodd',         'Assets/hljod/audio/Ledurblaka_34_BroddAllir.mp3');
    game.load.audio('finishTexti',         'Assets/hljod/audio/Marglytta_34_textiAllir.mp3');
    
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