var gameState = "storyTelling";
var score = 0;
var collections = 0;

function preload(){
  //Loading Image For The Game
  StoryBG = loadImage("hujk.png");
  GameLogo = loadImage("logo.png");

  //Images of StoryLine
  S1 = loadImage("story1.jpg");
  S2 = loadImage("story2.png");
  S3 = loadImage("story3.png");
  S4 = loadImage("story4.png");
  S5 = loadImage("story5.png");
  S6 = loadImage("story6.png");
  S7 = loadImage("story7.png");
  S8 = loadImage("story8.png");
  S9 = loadImage("story9.png");
  S10 = loadImage("story10.png");
  S11 = loadImage("story11.png");
  S12 = loadImage("story12.png");
  S13 = loadImage("story13.png");
  S14 = loadImage("story14.png");
  S15 = loadImage("story15.png");
  S16 = loadImage("story16.png");
  S17 = loadImage("story17.png");

  //Loading Images For Animation
  S91 = loadAnimation("story91.jpg","story92.jpg","story93.jpg","story94.jpg");
  S95 = loadImage("story95.png");
  GWolf2 = loadImage("motion4.png");
  GWolf3 = loadImage("motion1.png");

  //Loading Images For Wolf Running Animation
  GWolf = loadAnimation("motion1.png","motion2.png","motion3.png","motion4.png","motion5.png","motion6.png","motion7.png","motion8.png","motion9.png","motion10.png","motion11.png","motion12.png");

  //Loading Images For Coin Turning Animation
  COIN = loadAnimation("coin.png","coin copy.png","coin copy 4.png","coin copy 3.png","coin copy 2i.png","coin copy 2.png");

  //Loading Images For The Three Mysterious Magical Objects
  GodZomi2 = loadImage("God Zomi2.png"); 
  TheSword2 = loadImage("The Sword2.png");
  RedDiamond2 = loadImage("Red Diamond2.png");

  //Loading Images For Text which appears in game to inform us for every target
  MainText = loadImage("text1.png");
  MainText3 = loadImage("text3.png");
  MainText4 = loadImage("text4.png");
  MainTexti = loadImage("text.png");

  //Loading Images For Lives
  //Live = Green,Excellent
  REFILE1 = loadImage("liveG.png");
  //Live = Yellow,Good
  REFILE3 = loadImage("liveY.png");
  //Live = Orange,fine
  REFILE5 = loadImage("liveO.png");
  //Live = Red.critical
  REFILE8 = loadImage("liveR.png");

  //Loading Images For Stones Text
  Gh = loadImage("GH.png");
  Fh = loadImage("fh.png");
  Eh = loadImage("t.png");
  Hh = loadImage("hh.png");
  Ii = loadImage("ii2.png");
  Ii2 = loadImage("ii.png");
  TEXTNO = loadImage("textno.1.png");

  //Loading Images For Mystery Boxes
  CoinBox = loadImage("Untitled99.png");

  //Loading Images For StoryLine Subtitles(English)
  Line1 = loadImage("line1.png");
  Line2 = loadImage("line2.png");
  Line3 = loadImage("line3.png");
  Line4 = loadImage("line4.png");
  Line5 = loadImage("line5.png");
  Line6 = loadImage("line6.png");
  Line7 = loadImage("line7.png");
  Line8 = loadImage("line8.png");
  Line9 = loadImage("line9.png");
  Line10 = loadImage("line10.png");
  Line11 = loadImage("line11.png");
  Line12 = loadImage("line12.png");
  Line13 = loadImage("line13.png");
  Line14 = loadImage("line14.png");
  Line15 = loadImage("line15.png");
  Line16 = loadImage("line16.png");
  Skip = loadImage("line18.png");

  //Loading Images For Zomi Land Portal
  ZomiPORTAL = loadImage("ZomiPortal4.png");
  ZomiPORTAL2 = loadImage("ZomiPortal.png");
  ZomiPORTAL3 = loadImage("ZomiPortali.png");

  //Loading Sounds For Effects and Background Music
  BGSound = loadSound("bg.mp3");
  BG2 = loadSound("bg.mp3");

  //Loading Sounds For StoryLine Voice(English)
  Sound1 = loadSound("so2.mp3");
  Sound2 = loadSound("so3.mp3");
  Sound3 = loadSound("so4.mp3");
  Sound4 = loadSound("so7.mp3");
  Sound5 = loadSound("so5.mp3");
  Sound6 = loadSound("so6.mp3");
  Sound7 = loadSound("so8.mp3");
  Sound8 = loadSound("so14.mp3");
  Sound9 = loadSound("so9.mp3");
  Sound10 = loadSound("so11.mp3");
  Sound11 = loadSound("so10.mp3");
  Sound12 = loadSound("so12.mp3");
  Sound13 = loadSound("so13.mp3");
  Sound14 = loadSound("so15.mp3");
  Sound15 = loadSound("so16.mp3");
  Sound16 = loadSound("so17.mp3");

  //Loading Images for Background
  BG3 = loadImage("e.jpg");
  BG4 = loadImage("303.jpg");
  BG5 = loadImage("3182.jpg");

  //Loading Images For Text which appears in game to inform us for every target
  Text6 = loadImage("Text6.png");
  Text7 = loadImage("Text7.png");
  TEXT5 = loadImage("text5.png");
  textz = loadImage("textz.png");

  //Loading Images For Destinations
  DESTINATION = loadImage("San.png");

  //Loading Images For Blast Animation
  Blast1 = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png");

  //Loading Images For Meteor Falls
  meteor = loadImage("meteor.png");

  //Loading Images For Surprising Three Boxes
  SURPRISE = loadImage("SURPRISE.png");
  surprise1 = loadImage("surprise1.png");
  surprise2 = loadImage("surprise2.png");
  surprise3 = loadImage("surprise3.png");

  //Loading Sounds For Blast Effect
  WY = loadSound("jklk.mpeg");
  WY2 = loadSound("audio1.mpeg");

  //Loading Images for Thunder Lightning Animation
  Thunder1 = loadAnimation("ghj.png","ghj2.png","ghj.png","ghj2.png");

  //Loading Images for God Of Thunder
  GOT = loadImage("ghjkl.png");

  //Loading Images for opening Animation of messages
  message = loadAnimation("ty2.png","ty2.png","ty2.png","ty2.png","ty2.png");
  message6 = loadAnimation("ty.png","ty.png","ty.png","ty.png","ty.png");
  message3 = loadImage("ty3.png");
  message5 = loadImage("ty2.png");

  //Loading Image For Hot Air Balloon
  HAB = loadImage("HAB.png");

  //Loading Images For Ending Part
  EndingHELL = loadImage("Hujk2.png");
  EndingText = loadImage("Ttext.png");
  EndingText2 = loadImage("Rtext.png");
  EndingText3 = loadImage("stext.png");
  Retry = loadImage("RETRY.png");
  Retry2 = loadImage("RETRY copy.png");

  //Loading Images for Zomil Land Army 
  Sainik = loadImage("30819 copy.png");
  ARROW =  loadImage("n6.png");

  //Loading Images For bloody screen effect
  BloodEffect = loadAnimation("blood1.png","blood2.png","blood3.png","blood4.png","blood5.png","blood6.png","blood7.png",);

  //Loading Images For Energy Booster
  RefileDiamond = loadImage("RefileDiamond.png");

  //Loading Images For Zomi Land Communication
  zcom = loadImage("k1.png");
  zcom2 = loadImage("k2.png");
  zcom3 = loadImage("k3.png");
  zcom4 = loadImage("k4.png");
  zcom5 = loadImage("k5.png");
  zcom6 = loadImage("text29.png");

  //Loading Images For Zomi Land StoryLine
  story21 = loadImage("story21.jpg");
  story22 = loadImage("story22.jpg");
  story23 = loadImage("story23.png");
  story24 = loadImage("story24.png");
  story25 = loadImage("story25.png");
  story26 = loadImage("story26.png");
  story27 = loadImage("story27.png");
  story28 = loadImage("story28.jpg");
  story29 = loadImage("story29.jpeg");
  story30 = loadImage("story29.png");
  story31 = loadImage("story30.png");
  story32 = loadImage("story31.jpg");
  story33 = loadImage("story32.png");

  //Loading Images For spinning weapon Animation
  SpinningWeapon = loadAnimation("1ii.png","2ii.png","3ii.png","4ii.png");

  //Loadimg Images For Thunder Power Animation
  TP = loadAnimation("m1.png","m2.png","m3.png");

  //Loadimg Image For Mysterious Princess
  Mystery = loadImage("Mystery.png");

  //Loadimg Images For Shree Ram ji and his weapons
  RamJi = loadImage("JaiShreeRamJi.png");
  RamJiWeapons = loadImage("n4.png");
  RamJiWeapons = loadImage("n5.png");

  //Loadimg Images For Lightning Animation
  Lightning = loadAnimation("l1.png","l2.png","l3.png","l4.png","l5.png","l6.png","l7.png");

  //Loadimg Images For Lightning Effect Animation
  Lightning2 = loadAnimation("White.png","White2.png","White2.png","White2.png","White2.png","White2.png","White2.png","White2.png","White2.png","White2.png","White.png","White.png","White2.png","White.png");

  //Loading Sounds For Lightning Effect
  Soundi = loadSound("mix.mp3");

  //Loading Images for Defence shield Animation
  Shield = loadAnimation("S1.png","S2.png","S3.png","S4.png");

  //Loading Images for Empire's Shield
  Eshield = loadImage("Untitled copy3.png");

  //Loading Image For Collecting shield 
  CSHIELD = loadImage("shield.png");

  //Loading Images Fot Levels text
  Level1 = loadImage("level1.png");
  Level1i = loadImage("level1 copy.png");
  Level2i = loadImage("level2 copy.png");
  Level3i = loadImage("level3 copy.png");

  //Loading Image For 2500 coins collection
  C2500 = loadImage("c2500.png");

  //Loading Image For Sun
  SUN = loadImage("sun.png");

  //Loading Image For the Big surprise
  GOD = loadImage("truth.png");

  //Loading Sound For Sound effect of lightning and thunder
  Storm = loadSound("storm-thunder.mp3"); 

  //Loading Images For Lines used in the conversation of wolf with god
  Cera = loadImage("Line34.png");
  Cerb = loadImage("Line35.png");
  Cerc = loadImage("Line36.png");
  Cerd = loadImage("Line37.png");
  Cere = loadImage("Line38.png");
  Cerf = loadImage("Line39.png");
  Cerg = loadImage("Line40.png");
  Cerh = loadImage("Line41.png");
  Ceri = loadImage("Line41i.png");
  Cerj = loadImage("Line41ii.png");
  Cerk = loadImage("Line43.png");
  Cerl = loadImage("Line44.png");
  Cerm = loadImage("Line45.png");
  Cern = loadImage("Line46.png");

  //Loading Image For kingdom sky background
  KBG = loadImage("1861.jpg");

  //Loading Images For Portal Animation
  Portal = loadAnimation("portal1.png","portal2.png","portal3.png","portal4.png");

  //Loading Images For Gods Power
  Power = loadAnimation("m1 copy.png","m2 copy.png","m3 copy 2.png");

  //Loading Images For the storyline2
  story40 = loadImage("3019.jpg");
  story41 = loadImage("story18.png");
  story42 = loadImage("story19.png");

  //Loading Images For the line sounds in the conversations with god
  SOUND1 = loadSound("Sound7.mpeg");
  SOUND2 = loadSound("Sound8.mpeg");
  SOUND3 = loadSound("Sound9.mpeg");
  SOUND4 = loadSound("Sound10.mpeg");
  SOUND4i = loadSound("Sound10i.mpeg");
  SOUND5 = loadSound("Sound11.mpeg");
  SOUND6 = loadSound("Sound12.mpeg");

  //Loading Images For the Line sounds in the storyline
  SOUND7 = loadSound("Sound1.mpeg");
  SOUND8 = loadSound("Sound2.mpeg");
  SOUND9 = loadSound("Sound3.mpeg");
  SOUND10 = loadSound("Sound4.mpeg");
  SOUND11 = loadSound("Sound5.mpeg");
  SOUND12 = loadSound("Sound6.mpeg");

  //Loading Images For the lines in the storyline2
  SLine1 = loadImage("Line38 copy.png");
  SLine2 = loadImage("Line39 copy.png");
  SLine3 = loadImage("Line50.png");
  SLine4 = loadImage("Line51.png");
  SLine5 = loadImage("Line52.png");
  SLine6 = loadImage("Line53.png");
  SLine7 = loadImage("Line54.png");

  //Loading Images For the images of storyline 2
  story44 = loadImage("story21.jpg");
  story45 = loadImage("story22.jpg");
  story46 = loadImage("story23.png");
  story47 = loadImage("story24.png");
  story48 = loadImage("story25.png");
  story49 = loadImage("story26.png");
  story50 = loadImage("story27.png");
  story51 = loadImage("story28.jpg");
  story52 = loadImage("story29.jpeg");
  story52i = loadImage("story29.png");
  story53 = loadImage("story30.png");
  story54 = loadImage("story31.jpg");
  story55 = loadImage("story32.png");

  //Loading Images For informing the saving part
  SAVE = loadImage("save.png");

  //Loading Images For texts
  ZKingdom = loadImage("text29ii.png");

  //Loading Images for the text used in the storyline2
  zext1 = loadImage("zext1.png");
  zext2 = loadImage("zext2.png");
  zext3 = loadImage("zext3.png");
  zext4 = loadImage("zext4.png");
  zext5 = loadImage("zext5.png");
  zext6 = loadImage("zext6.png");
  zext7 = loadImage("zext7.png");
  zext8 = loadImage("zext8.png");
  zext9 = loadImage("zext9.png");
  zext10 = loadImage("zext10.png");
  zext11 = loadImage("zext11.png");
  zext12 = loadImage("zext12.png");

  //Loading Images For texts
  ZKingdom2 = loadImage("text29i.png");
  Finish = loadImage("end.png");

} 

function setup() {
  //creating Canvas according to the Monitor Canvas
  createCanvas(windowWidth,windowHeight);

  //Music For Background
  BGSound.loop();
  
  //Creating Sprite For Background(Black)
  BG = createSprite(windowWidth,windowHeight);
  BG.addImage(StoryBG);
  BG.scale = 1000;

  //Creating Sprite For Game Main Logo
  gameLogo = createSprite(displayHeight/2+290,displayWidth/2-320,width,50);
  gameLogo.addImage(GameLogo);
  gameLogo.scale = 0.8;

  //Creating Sprite For Gaming Background
  Bg = createSprite(width/2,height-660);
  Bg.addImage(BG3);
  Bg.scale = 1;
  Bg.visible = false; 
  Bg.velocityX = -20;

  Bg3 = createSprite(width/2,height-1105);
  Bg3.addImage(BG5);
  Bg3.scale = 1;
  Bg3.visible = false; 
  //Bg3.velocityX = 0;

  //Creating Sprite For Zomi Land Background
  Bg2 = createSprite(width/1,height-500);
  Bg2.addImage(BG4);
  Bg2.scale = 0.500;
  Bg2.visible = false; 

  //Creating Sprites For StoryLine Appearings 
  line2 = createSprite(height/2+1300,width/2-280,10,90000);
  line2.velocityX = -22;
  line2.visible = false;

  l2 = createSprite(height/2-400,width/2-280,10,90000);
  l2.visible = false;

  line3 = createSprite(height/2+1300,width/2-280,10,90000);
  line3.velocityX = 0;
  line3.visible = false;

  l3 = createSprite(height/2-400,width/2-280,10,90000);
  l3.visible = false;

  line4 = createSprite(height/2+1300,width/2-280,10,90000);
  line4.velocityX = 0;
  line4.visible = false;

  l4 = createSprite(height/2-400,width/2-280,10,90000);
  l4.visible = false;

  line5 = createSprite(height/2+1300,width/2-280,10,90000);
  line5.velocityX = 0;
  line5.visible = false;

  l5 = createSprite(height/2-400,width/2-280,10,90000);
  l5.visible = false;

  line6 = createSprite(height/2+1300,width/2-280,10,90000);
  line6.velocityX = 0;
  line6.visible = false;

  l6 = createSprite(height/2-400,width/2-280,10,90000);
  l6.visible = false;

  line7 = createSprite(height/2+1300,width/2-280,10,90000);
  line7.velocityX = 0;
  line7.visible = false;

  l7 = createSprite(height/2-400,width/2-280,10,90000);
  l7.visible = false;

  line8 = createSprite(height/2+1300,width/2-280,10,90000);
  line8.velocityX = 0;
  line8.visible = false;

  l8 = createSprite(height/2-400,width/2-280,10,90000);
  l8.visible = false;

  line9 = createSprite(height/2+1300,width/2-280,10,90000);
  line9.velocityX = 0;
  line9.visible = false;

  l9 = createSprite(height/2-400,width/2-280,10,90000);
  l9.visible = false;

  line10 = createSprite(height/2+1300,width/2-280,10,90000);
  line10.velocityX = 0;
  line10.visible = false;

  l10 = createSprite(height/2-400,width/2-280,10,90000);
  l10.visible = false;
   
  line11 = createSprite(height/2+1300,width/2-280,10,90000);
  line11.velocityX = 0;
  line11.visible = false;

  l11 = createSprite(height/2-400,width/2-280,10,90000);
  l11.visible = false;

  line12 = createSprite(height/2+1300,width/2-280,10,90000);
  line12.velocityX = 0;
  line12.visible = false;

  l12 = createSprite(height/2-400,width/2-280,10,90000);
  l12.visible = false;

  line13 = createSprite(height/2+1300,width/2-280,10,90000);
  line13.velocityX = 0;
  line13.visible = false;

  l13 = createSprite(height/2-400,width/2-280,10,90000);
  l13.visible = false;

  line14 = createSprite(height/2+1300,width/2-280,10,90000);
  line14.velocityX = 0;
  line14.visible = false;

  l14 = createSprite(height/2-400,width/2-280,10,90000);
  l14.visible = false;

  line15 = createSprite(height/2+1300,width/2-280,10,90000);
  line15.velocityX = 0;
  line15.visible = false;

  l15 = createSprite(height/2-400,width/2-280,10,90000);
  l15.visible = false;

  line16 = createSprite(height/2+1300,width/2-280,10,90000);
  line16.velocityX = 0;
  line16.visible = false;

  l16 = createSprite(height/2-400,width/2-280,10,90000);
  l16.visible = false;

  line17 = createSprite(height/2+1300,width/2-280,10,90000);
  line17.velocityX = 0;
  line17.visible = false;

  l17 = createSprite(height/2-400,width/2-280,10,90000);
  l17.visible = false;

  line18 = createSprite(height/2+1300,width/2-280,10,90000);
  line18.velocityX = 0;
  line18.visible = false;

  l18 = createSprite(height/2-400,width/2-280,10,90000);
  l18.visible = false;

  line19 = createSprite(height/2+1300,width/2-280,10,90000);
  line19.velocityX = 0;
  line19.visible = false;

  l19 = createSprite(height/2-400,width/2-280,10,90000);
  l19.visible = false;

  line20 = createSprite(height/2+1300,width/2-280,10,90000);
  line20.velocityX = 0;
  line20.visible = false;

  l20 = createSprite(height/2-400,width/2-280,10,90000);
  l20.visible = false;

  line21 = createSprite(height/2+1300,width/2-280,10,90000);
  line21.velocityX = 0;
  line21.visible = false;

  l21 = createSprite(height/2-400,width/2-280,10,90000);
  l21.visible = false;

  line22 = createSprite(height/2+1300,width/2-280,10,90000);
  line22.velocityX = 0;
  line22.visible = false;

  l22 = createSprite(height/2-400,width/2-280,10,90000);
  l22.visible = false;

  line23 = createSprite(height/2+1300,width/2-280,10,90000);
  line23.velocityX = 0;
  line23.visible = false;

  l23 = createSprite(height/2-400,width/2-280,10,90000);
  l23.visible = false;

  line24 = createSprite(height/2+1300,width/2-280,10,90000);
  line24.velocityX = 0;
  line24.visible = false;

  l24 = createSprite(height/2-400,width/2-280,10,90000);
  l24.visible = false;

  line25 = createSprite(height/2+1300,width/2-280,10,90000);
  line25.velocityX = 0;
  line25.visible = false;

  l25 = createSprite(height/2-400,width/2-280,10,90000);
  l25.visible = false;

  line33 = createSprite(height/2+1300,width/2-280,10,90000);
  line33.velocityX = 0;
  line33.visible = false;

  l33 = createSprite(height/2-400,width/2-280,10,90000);
  l33.visible = false;



  //Creating Sprite For StoryLine Subtitles(English)
  LINE1 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE1.addImage(Line1);
  LINE1.scale = 0.5;
  LINE1.visible = false;

  LINE2 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE2.addImage(Line2);
  LINE2.scale = 0.5;
  LINE2.visible = false;

  LINE3 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE3.addImage(Line3);
  LINE3.scale = 0.5;
  LINE3.visible = false;

  LINE4 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE4.addImage(Line4);
  LINE4.scale = 0.5;
  LINE4.visible = false;

  LINE5 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE5.addImage(Line5);
  LINE5.scale = 0.5;
  LINE5.visible = false;

  LINE6 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE6.addImage(Line6);
  LINE6.scale = 0.5;
  LINE6.visible = false;

  LINE7 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE7.addImage(Line7);
  LINE7.scale = 0.5;
  LINE7.visible = false;

  LINE9 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE9.addImage(Line9);
  LINE9.scale = 0.5;
  LINE9.visible = false;

  LINE10 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE10.addImage(Line10);
  LINE10.scale = 0.5;
  LINE10.visible = false;

  LINE11 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE11.addImage(Line11);
  LINE11.scale = 0.5;
  LINE11.visible = false;

  LINE12 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE12.addImage(Line12);
  LINE12.scale = 0.5;
  LINE12.visible = false;

  LINE13 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE13.addImage(Line13);
  LINE13.scale = 0.5;
  LINE13.visible = false;

  LINE14 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE14.addImage(Line14);
  LINE14.scale = 0.5;
  LINE14.visible = false;
  
  LINE15 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE15.addImage(Line15);
  LINE15.scale = 0.5;
  LINE15.visible = false;

  LINE16 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE16.addImage(Line16);
  LINE16.scale = 0.5;
  LINE16.visible = false;



  
  //Creating Sprite For StoryLine Images
  ST1 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST1.addImage(S1);
  ST1.scale = 0.33;
  ST1.visible = false;

  ST2 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST2.addImage(S2);
  ST2.scale = 1.1;
  ST2.visible = false;

  ST3 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST3.addImage(S3);
  ST3.scale = 1.1;
  ST3.visible = false;

  ST4 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST4.addImage(S4);
  ST4.scale = 1.1;
  ST4.visible = false;

  ST5 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST5.addImage(S5);
  ST5.scale = 1.1;
  ST5.visible = false;

  ST6 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST6.addImage(S6);
  ST6.scale = 1.1;
  ST6.visible = false;

  LINE8 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE8.addImage(Line8);
  LINE8.scale = 0.5;
  LINE8.visible = false;

  ST7 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST7.addImage(S7);
  ST7.scale = 1.1;
  ST7.visible = false;

  ST8 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST8.addImage(S8);
  ST8.scale = 1.1;
  ST8.visible = false;

  ST9 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST9.addImage(S9);
  ST9.scale = 1.1;
  ST9.visible = false;

  ST10 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST10.addImage(S95);
  ST10.scale = 1.1;
  ST10.visible = false;

  ST11 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST11.addAnimation("Wolf Jumping",S91);
  ST11.scale = 0.2;
  ST11.visible = false;
  
  ST12 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST12.addImage(S10);
  ST12.scale = 1.1;
  ST12.visible = false;

  ST13 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST13.addImage(S11);
  ST13.scale = 1.1;
  ST13.visible = false;
 
  ST14 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST14.addImage(S12);
  ST14.scale = 1.1;
  ST14.visible = false;

  ST15 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST15.addImage(S13);
  ST15.scale = 1.1;
  ST15.visible = false;

  ST16 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST16.addImage(S14);
  ST16.scale = 1.1;
  ST16.visible = false;

  ST17 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST17.addImage(S15);
  ST17.scale = 1.1;
  ST17.visible = false;

  ST18 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST18.addImage(S16);
  ST18.scale = 1.1;
  ST18.visible = false;

  ST19 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST19.addImage(S17);
  ST19.scale = 1.1;
  ST19.visible = false;

  SKIP = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  SKIP.addImage(Skip);
  SKIP.scale = 0.7;

  //Creating Sprite For Wolf Animation
  GoodWolf = createSprite(displayHeight/2-180,displayWidth/2+20,width,50);
  GoodWolf.addAnimation("Running Good Wolf",GWolf);
  GoodWolf.addAnimation("Jumping Good Wolf",GWolf2);
  GoodWolf.addAnimation("Stopped Good Wolf",GWolf3);
  GoodWolf.scale = 1.4;
  GoodWolf.visible = false;

  //Creating Sprite For Ground with which Wolf collides and can't be able to go down
  invisibleGround = createSprite(displayWidth/2,displayHeight-40,width,125);
  invisibleGround.visible = false;

  MT = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT.addImage(MainText);
  MT.scale = 0.7;
  MT.visible = false;

  GZ = createSprite(displayWidth/2-590,displayHeight-800,width,125);
  GZ.addImage(MainText3);
  GZ.scale = 0.5;
  GZ.visible = false;

  TS = createSprite(displayWidth/2-603,displayHeight-730,width,125);
  TS.addImage(MainText4);
  TS.scale = 0.4;
  TS.visible = false;

  RD = createSprite(displayWidth/2-603,displayHeight-655,width,125);
  RD.addImage(MainTexti);
  RD.scale = 0.4;
  RD.visible = false;

  GZi = createSprite(displayWidth/2-590,displayHeight-800,width,125);
  GZi.addImage(MainText3);
  GZi.scale = 0.5;
  GZi.visible = false;

  TSi = createSprite(displayWidth/2-603,displayHeight-730,width,125);
  TSi.addImage(MainText4);
  TSi.scale = 0.4;
  TSi.visible = false;

  RDi = createSprite(displayWidth/2-603,displayHeight-655,width,125);
  RDi.addImage(MainTexti);
  RDi.scale = 0.4;
  RDi.visible = false;


  //Creating Sprite For Wolf Lives 
  //Creating Sprite For Green Lives
  Refile = createSprite(displayHeight/2+930,displayWidth/2-680,width,50);
  Refile.addImage(REFILE1);
  Refile.scale = 0.5;
  Refile.visible = false;

  Refile2 = createSprite(displayHeight/2+880,displayWidth/2-680,width,50);
  Refile2.addImage(REFILE1);
  Refile2.scale = 0.5;
  Refile2.visible = false;


  //Creating Sprite For Yellow Lives
  Refile3 = createSprite(displayHeight/2+830,displayWidth/2-680,width,50);
  Refile3.addImage(REFILE3);
  Refile3.scale = 0.5;
  Refile3.visible = false;

  Refile4 = createSprite(displayHeight/2+780,displayWidth/2-680,width,50);
  Refile4.addImage(REFILE3);
  Refile4.scale = 0.5;
  Refile4.visible = false;


  //Creating Sprite For Orange Lives
  Refile5 = createSprite(displayHeight/2+730,displayWidth/2-680,width,50);
  Refile5.addImage(REFILE5);
  Refile5.scale = 0.5;
  Refile5.visible = false;

  Refile6 = createSprite(displayHeight/2+680,displayWidth/2-680,width,50);
  Refile6.addImage(REFILE5);
  Refile6.scale = 0.5;
  Refile6.visible = false;


  //Creating Sprite For Red Lives
  Refile7 = createSprite(displayHeight/2+630,displayWidth/2-680,width,50);
  Refile7.addImage(REFILE8);
  Refile7.scale = 0.5;
  Refile7.visible = false;

  Refile8 = createSprite(displayHeight/2+580,displayWidth/2-680,width,50);
  Refile8.addImage(REFILE8);
  Refile8.scale = 0.5;
  Refile8.visible = false;


  //Creating Sprite For Wolf Lives For Zomi Land
  //Creating Sprite For Green Lives
  Refilei = createSprite(displayHeight/2+930,displayWidth/2-680,width,50);
  Refilei.addImage(REFILE1);
  Refilei.scale = 0.5;
  Refilei.visible = false;

  Refile2i = createSprite(displayHeight/2+880,displayWidth/2-680,width,50);
  Refile2i.addImage(REFILE1);
  Refile2i.scale = 0.5;
  Refile2i.visible = false;


  //Creating Sprite For Yellow Lives
  Refile3i = createSprite(displayHeight/2+830,displayWidth/2-680,width,50);
  Refile3i.addImage(REFILE3);
  Refile3i.scale = 0.5;
  Refile3i.visible = false;

  Refile4i = createSprite(displayHeight/2+780,displayWidth/2-680,width,50);
  Refile4i.addImage(REFILE3);
  Refile4i.scale = 0.5;
  Refile4i.visible = false;


  //Creating Sprite For Orange Lives
  Refile5i = createSprite(displayHeight/2+730,displayWidth/2-680,width,50);
  Refile5i.addImage(REFILE5);
  Refile5i.scale = 0.5;
  Refile5i.visible = false;

  Refile6i = createSprite(displayHeight/2+680,displayWidth/2-680,width,50);
  Refile6i.addImage(REFILE5);
  Refile6i.scale = 0.5;
  Refile6i.visible = false;


  //Creating Sprite For Red Lives
  Refile7i = createSprite(displayHeight/2+630,displayWidth/2-680,width,50);
  Refile7i.addImage(REFILE8);
  Refile7i.scale = 0.5;
  Refile7i.visible = false;

  Refile8i = createSprite(displayHeight/2+580,displayWidth/2-680,width,50);
  Refile8i.addImage(REFILE8);
  Refile8i.scale = 0.5;
  Refile8i.visible = false;


  GZ2 = createSprite(displayWidth/2-455,displayHeight-800,width,125);
  GZ2.addImage(GodZomi2);
  GZ2.scale = 0.3;
  GZ2.visible = false;

  TS2 = createSprite(displayWidth/2-485,displayHeight-730,width,125);
  TS2.addImage(TheSword2);
  TS2.scale = -0.27;
  TS2.visible = false;

  RD2 = createSprite(displayWidth/2-470,displayHeight-655,width,125);
  RD2.addImage(RedDiamond2);
  RD2.scale = 0.2;
  RD2.visible = false;

  GZ2i = createSprite(displayWidth/2-455,displayHeight-800,width,125);
  GZ2i.addImage(GodZomi2);
  GZ2i.scale = 0.3;
  GZ2i.visible = false;

  TS2i = createSprite(displayWidth/2-485,displayHeight-730,width,125);
  TS2i.addImage(TheSword2);
  TS2i.scale = -0.27;
  TS2i.visible = false;

  RD2i = createSprite(displayWidth/2-470,displayHeight-655,width,125);
  RD2i.addImage(RedDiamond2);
  RD2i.scale = 0.2;
  RD2i.visible = false;

  line26 = createSprite(height/2+1300,width/2-280,10,90000);
  line26.velocityX = 0;
  line26.visible = false;

  l26 = createSprite(height/2-400,width/2-280,10,90000);
  l26.visible = false;

  line27 = createSprite(height/2+1300,width/2-280,10,90000);
  line27.velocityX = 0;
  line27.visible = false;

  l27 = createSprite(height/2-400,width/2-280,10,90000);
  l27.visible = false;

  line28 = createSprite(height/2+1300,width/2-280,10,90000);
  line28.velocityX = 0;
  line28.visible = false;

  l28 = createSprite(height/2-400,width/2-280,10,90000);
  l28.visible = false;

  line29 = createSprite(height/2+1300,width/2-280,10,90000);
  line29.velocityX = 0;
  line29.visible = false;

  l29 = createSprite(height/2-400,width/2-280,10,90000);
  l29.visible = false;

  line31 = createSprite(height/2+1300,width/2-280,10,90000);
  line31.velocityX = 0;
  line31.visible = false;

  l31 = createSprite(height/2-400,width/2-280,10,90000);
  l31.visible = false;

  line34 = createSprite(height/2+1300,width/2-280,10,90000);
  line34.velocityX = 0;
  line34.visible = false;

  l34 = createSprite(height/2-400,width/2-280,10,90000);
  l34.visible = false;

  CoinsGroup = new Group();
  CoinBOXGroup = new Group();
  CoinBOX2Group = new Group();
  AlertGroup = new Group();
  Alert2Group = new Group();
  EnergyGroup = new Group();
  Energy2Group = new Group();
  Lightning3Group = new Group();

  GH = createSprite(displayHeight/2+733,displayWidth/2-590,10,width);
  GH.addImage(Gh);
  GH.scale = 0.4;
  GH.visible = false;

  FH = createSprite(displayHeight/2+738,displayWidth/2-465,10,width);
  FH.addImage(Fh);
  FH.scale = 0.4;
  FH.visible = false;

  FH2 = createSprite(displayHeight/2+738,displayWidth/2-465,10,width);
  FH2.addImage(Eh);
  FH2.scale = 0.4;
  FH2.visible = false;

  EH = createSprite(displayHeight/2+733,displayWidth/2-590,10,width);
  EH.addImage(Eh);
  EH.scale = 0.4;
  EH.visible = false;

  HH = createSprite(displayHeight/2+738,displayWidth/2-465,10,width);
  HH.addImage(Hh);
  HH.scale = 0.4;
  HH.visible = false;

  line30 = createSprite(displayHeight/2+49330,displayWidth/2-280,10,90000);
  line30.velocityX = 0;
  line30.visible = false;

  line30i = createSprite(displayHeight/2+47000,displayWidth/2-280,10,90000);
  line30i.velocityX = 0;
  line30i.visible = false;

  ZP = createSprite(displayHeight/2+50000,displayWidth/2-280,width,50);
  ZP.addImage(ZomiPORTAL);   
  ZP.velocityX = 0;
  ZP.scale = 0.78;

  GZ3 = createSprite(displayWidth/2+50100,displayHeight-250,width,125);
  GZ3.addImage(GodZomi2);
  GZ3.velocityX = 0;
  GZ3.scale = 0.3;
  GZ3.visible = false;

  II = createSprite(displayHeight/2+733,displayWidth/2-590,10,width);
  II.addImage(Ii);
  II.scale = 0.4;
  II.visible = false;

  MT2 = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT2.addImage(Text6);
  MT2.scale = 0.5;
  MT2.visible = false;

  MT3 = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT3.addImage(Text7);
  MT3.scale = 0.5;
  MT3.visible = false;

  DEST = createSprite(displayWidth/2-530,displayHeight-765,width,125);
  DEST.addImage(DESTINATION);
  DEST.scale = 0.4;
  DEST.visible = false;

  //push();
  Meteor = createSprite(displayHeight/2+1000,displayWidth/2-1000,width,50);
  Meteor.addImage(meteor);
  Meteor.visible = false;
  Meteor.scale = 0.2;
  Meteor.velocityX = 0;
  Meteor.velocityY = 0;
  Meteor.depth = Refile.depth+1;
  Meteor.depth = Refile2.depth+1;
  Meteor.depth = Refile3.depth+1;
  Meteor.depth = Refile4.depth+1;
  Meteor.depth = Refile5.depth+1;
  Meteor.depth = Refile6.depth+1;
  Meteor.depth = Refile7.depth+1;
  Meteor.depth = Refile8.depth+1;
  Meteor.depth = GH.depth + 1;
  Meteor.depth = FH.depth + 1;
  Meteor.depth = EH.depth + 1;
  Meteor.depth = HH.depth + 1;
  Meteor.depth = GZ.depth + 1;
  Meteor.depth = TS.depth + 1;
  Meteor.depth = RD.depth + 1;
  Meteor.depth = GZ2.depth + 1;
  Meteor.depth = TS2.depth + 1;
  Meteor.depth = RD2.depth + 1;
  Meteor.depth = FH2.depth + 1;
  Meteor.depth = II.depth + 1;
  Meteor.depth = ZP.depth + 1;
  //pop();

  //push();
  BLAST2 = createSprite(displayHeight/2+400,displayWidth/2-30,width,50);
  BLAST2.addAnimation("blast",Blast1);
  BLAST2.scale = 10;
  BLAST2.visible = false;
  BLAST2.depth = Meteor.depth+1;
  BLAST2.depth = GH.depth + 1;
  BLAST2.depth = FH.depth + 1;
  BLAST2.depth = EH.depth + 1;
  BLAST2.depth = HH.depth + 1;
  BLAST2.depth = GZ.depth + 1;
  BLAST2.depth = TS.depth + 1;
  BLAST2.depth = RD.depth + 1;
  BLAST2.depth = GZ2.depth + 1;
  BLAST2.depth = TS2.depth + 1;
  BLAST2.depth = RD2.depth + 1;
  BLAST2.depth = FH2.depth + 1;
  BLAST2.depth = II.depth + 1;
  BLAST2.depth = ZP.depth + 1;
  //pop();
  
  Thunder = createSprite(displayWidth/2-130,displayHeight/2-10,width,50);
  Thunder.addAnimation("Thunder Lightning",Thunder1);
  Thunder.velocityX = 0;
  Thunder.scale = 0.2;
  Thunder.visible = false;

  Thunder2 = createSprite(displayWidth/2+50,displayHeight/2-10,width,50);
  Thunder2.addAnimation("Thunder Lightning",Thunder1);
  Thunder2.velocityX = 0;
  Thunder2.scale = 0.2;
  Thunder2.visible = false;

  Thunder3 = createSprite(displayWidth/2-350,displayHeight/2-10,width,50);
  Thunder3.addAnimation("Thunder Lightning",Thunder1);
  Thunder3.velocityX = 0;
  Thunder3.scale = 1.5;
  Thunder3.visible = false;

  Thunder4 = createSprite(displayWidth/2+450,displayHeight/2-10,width,50);
  Thunder4.addAnimation("Thunder Lightning",Thunder1);
  Thunder4.velocityX = 0;
  Thunder4.scale = 1.5;
  Thunder4.visible = false;

  line302 = createSprite(displayHeight/2+650,displayWidth/2-280,10,90000);
  line302.velocityX = 0;
  line302.visible = false;

  line302i = createSprite(displayHeight/2+400,displayWidth/2-280,10,90000);
  line302i.velocityX = 0;
  line302i.visible = false;

  line303 = createSprite(displayHeight/2+4000,displayWidth/2-280,10,90000);
  line303.velocityX = 0;
  line303.visible = false;

  line3p = createSprite(displayHeight/2-1300,displayWidth/2-500,width,50);
  line3p.addImage(GOT);
  line3p.scale = 0.55;
  line3p.velocityX = 0;
  line3p.visible = true;

  Message = createSprite(displayHeight/2+200,displayWidth/2-550,width,50);
  Message.addAnimation("Message",message);
  Message.scale = 0.4;
  Message.visible = false;

  Meteor2 = createSprite(displayHeight/2+1000,displayWidth/2-1000,width,50);
  Meteor2.addImage(meteor);
  Meteor2.scale = 0.2;
  Meteor2.velocityX = 0;
  Meteor2.velocityY = 0;
  Meteor2.visible = false;

  Meteor3 = createSprite(displayHeight/2+700,displayWidth/2-1000,width,50);
  Meteor3.addImage(meteor);
  Meteor3.scale = 0.2;
  Meteor3.velocityX = 0;
  Meteor3.velocityY = 0;
  Meteor3.visible = false;

  Meteor4 = createSprite(displayHeight/2+400,displayWidth/2-1000,width,50);
  Meteor4.addImage(meteor);
  Meteor4.scale = 0.2;
  Meteor4.velocityX = 0;
  Meteor4.velocityY = 0;
  Meteor4.visible = false;

  BLAST3 = createSprite(displayHeight/2+500,displayWidth/2-30,width,50);
  BLAST3.addAnimation("blast",Blast1);
  BLAST3.scale = 60;
  BLAST3.visible = false;BLAST2.depth = Meteor.depth+1;
  BLAST3.depth = GH.depth + 1;
  BLAST3.depth = FH.depth + 1;
  BLAST3.depth = EH.depth + 1;
  BLAST3.depth = HH.depth + 1;
  BLAST3.depth = GZ.depth + 1;
  BLAST3.depth = TS.depth + 1;
  BLAST3.depth = RD.depth + 1;
  BLAST3.depth = GZ2.depth + 1;
  BLAST3.depth = TS2.depth + 1;
  BLAST3.depth = RD2.depth + 1;
  BLAST3.depth = FH2.depth + 1;
  BLAST3.depth = II.depth + 1;
  BLAST3.depth = ZP.depth + 1;

  HotAirBalloons = createSprite(displayWidth/2+20500,displayHeight/2-300,width,50);
  HotAirBalloons.addImage(HAB);
  HotAirBalloons.scale = 0.15;
  HotAirBalloons.visible = true;

  Message4 = createSprite(displayHeight/2+20800,displayWidth/2-400,width,50);
  Message4.addImage(message3);
  Message4.scale = 0.1;
  Message4.visible = true;

  line305 = createSprite(displayHeight/2+400,displayWidth/2-600,90000,10);
  line305.velocityX = 0;
  line305.visible = false;

  line100 = createSprite(height/2+1300,width/2-280,10,90000);
  line100.velocityX = 0;
  line100.visible = false;

  l100 = createSprite(height/2-400,width/2-280,10,90000);
  l100.visible = false;

  line101 = createSprite(height/2+1300,width/2-280,10,90000);
  line101.velocityX = 0;
  line101.visible = false;

  l101 = createSprite(height/2-400,width/2-280,10,90000);
  l101.visible = false;

  surprisebox = createSprite(displayHeight/2-10000,displayWidth/2-500,width,50);
  surprisebox.addImage(SURPRISE);
  surprisebox.scale = 0.15;
  surprisebox.visible = false;

  surprisebox2 = createSprite(displayHeight/2-10000,displayWidth/2-500,width,50);
  surprisebox2.addImage(SURPRISE);
  surprisebox2.scale = 0.15;
  surprisebox2.visible = false;

  surprisebox3 = createSprite(displayHeight/2-10000,displayWidth/2-500,width,50);
  surprisebox3.addImage(SURPRISE);
  surprisebox3.scale = 0.15;
  surprisebox3.visible = false;

  Message7 = createSprite(displayHeight/2+200,displayWidth/2-550,width,50);
  Message7.addAnimation("Message",message6);
  Message7.scale = 0.4;
  Message7.visible = false;

  line306 = createSprite(displayHeight/2+400,displayWidth/2-350,90000,10);
  line306.velocityX = 0;
  line306.visible = false;

  line102 = createSprite(height/2+1300,width/2-280,10,90000);
  line102.velocityX = 0;
  line102.visible = false;

  l102 = createSprite(height/2-400,width/2-280,10,90000);
  l102.visible = false;

  line103 = createSprite(height/2+1300,width/2-280,10,90000);
  line103.velocityX = 0;
  line103.visible = false;

  l103 = createSprite(height/2-400,width/2-280,10,90000);
  l103.visible = false;

  Text1 = createSprite(displayHeight/2+195,displayWidth/2-650,width,50);
  Text1.addImage(TEXTNO);
  Text1.scale = 0.6;
  Text1.visible = false;

  sno1 = createSprite(displayHeight/2+195,displayWidth/2-550,width,50);
  sno1.addImage(surprise1);
  sno1.scale = 0.6;
  sno1.visible = false;

  sno2 = createSprite(displayHeight/2+195,displayWidth/2-550,width,50);
  sno2.addImage(surprise2);
  sno2.scale = 0.6;
  sno2.visible = false;

  sno3 = createSprite(displayHeight/2+195,displayWidth/2-550,width,50);
  sno3.addImage(surprise3);
  sno3.scale = 0.6;
  sno3.visible = false;

  line104 = createSprite(height/2+1300,width/2-280,10,90000);
  line104.velocityX = 0;
  line104.visible = false;

  l104 = createSprite(height/2-400,width/2-280,10,90000);
  l104.visible = false;

  HELL = createSprite(displayWidth/2-10,displayHeight/2-70,width,125);
  HELL.addImage(EndingHELL);
  HELL.scale = 1.19;
  HELL.visible = false;

  THE = createSprite(displayHeight/2-153,displayWidth/2-520,width,50);
  THE.addImage(EndingText);
  THE.scale = 0.100;
  THE.visible = false;

  RISING = createSprite(displayHeight/2+100,displayWidth/2-400,width,50);
  RISING.addImage(EndingText2);
  RISING.scale = 0.5;
  RISING.visible = false;

  RISING2 = createSprite(displayHeight/2-30,displayWidth/2-270,width,50);
  RISING2.addImage(EndingText3);
  RISING2.scale = 0.4;
  RISING2.visible = false;

  RETRY = createSprite(displayHeight/2-10000,displayWidth/2-152,width,50);
  RETRY.addImage(Retry);
  RETRY.scale = 0.5;
  RETRY.visible = false;

  Sainik1 = createSprite(displayHeight/2+5000,displayWidth/2-100,width,50);
  Sainik1.addImage(Sainik);
  Sainik1.scale = 0.38;
  Sainik1.visible = true; 

  Arrow1 = createSprite(displayHeight/2+4955,displayWidth/2-130,width,50);
  Arrow1.addImage(ARROW);
  Arrow1.scale = 0.13;
  Arrow1.visible = true;

  li1 = createSprite(displayHeight/2+4000,displayWidth/2-280,10,90000);
  li1.visible = false;

  Sainik2 = createSprite(displayHeight/2+7000,displayWidth/2-100,width,50);
  Sainik2.addImage(Sainik);
  Sainik2.scale = 0.38;
  Sainik2.visible = true; 

  Arrow2 = createSprite(displayHeight/2+6955,displayWidth/2-130,width,50);
  Arrow2.addImage(ARROW);
  Arrow2.scale = 0.13;
  Arrow2.visible = true;

  li2 = createSprite(displayHeight/2+6000,displayWidth/2-280,10,90000);
  li2.visible = false;

  Sainik3 = createSprite(displayHeight/2+9000,displayWidth/2-100,width,50);
  Sainik3.addImage(Sainik);
  Sainik3.scale = 0.38;
  Sainik3.visible = false; 

  Arrow3 = createSprite(displayHeight/2+8955,displayWidth/2-130,width,50);
  Arrow3.addImage(ARROW);
  Arrow3.scale = 0.13;
  Arrow3.visible = true;

  li3 = createSprite(displayHeight/2+8000,displayWidth/2-280,10,90000);
  li3.visible = false;

  Sainik4 = createSprite(displayHeight/2+11000,displayWidth/2-100,width,50);
  Sainik4.addImage(Sainik);
  Sainik4.scale = 0.38;
  Sainik4.visible = true; 

  Arrow4 = createSprite(displayHeight/2+10955,displayWidth/2-130,width,50);
  Arrow4.addImage(ARROW);
  Arrow4.scale = 0.13;
  Arrow4.visible = true;

  li4 = createSprite(displayHeight/2+10000,displayWidth/2-280,10,90000);
  li4.visible = false;

  Sainik5 = createSprite(displayHeight/2+13000,displayWidth/2-100,width,50);
  Sainik5.addImage(Sainik);
  Sainik5.scale = 0.38;
  Sainik5.visible = false; 

  Arrow5 = createSprite(displayHeight/2+12955,displayWidth/2-150,width,50);
  Arrow5.addImage(ARROW);
  Arrow5.scale = 0.13;
  Arrow5.visible = false;

  li5 = createSprite(displayHeight/2+12000,displayWidth/2-280,10,90000);
  li5.visible = true;

  bloodEffect = createSprite(width/2,height-400,width,900000);
  bloodEffect.addAnimation("Blood Effect",BloodEffect);
  bloodEffect.scale = 2;
  bloodEffect.visible = false;

  K1 = createSprite(displayHeight/2+725,displayWidth/2-590,10,width);
  K1.addImage(zcom);
  K1.scale = 0.7;
  K1.visible = false;

  K2 = createSprite(displayHeight/2+725,displayWidth/2-450,10,width);
  K2.addImage(zcom2);
  K2.scale = 0.57;
  K2.visible = false;

  K3 = createSprite(displayHeight/2+725,displayWidth/2-450,10,width);
  K3.addImage(zcom3);
  K3.scale = 0.48;
  K3.visible = false;

  K4 = createSprite(displayHeight/2+725,displayWidth/2-450,10,width);
  K4.addImage(zcom4);
  K4.scale = 0.39;
  K4.visible = false;

  K5 = createSprite(displayHeight/2+725,displayWidth/2-450,10,width);
  K5.addImage(zcom5);
  K5.scale = 0.55;
  K5.visible = false;

  line34i = createSprite(height/2+1300,width/2-280,10,90000);
  line34i.velocityX = 0;
  line34i.visible = false;

  l34i = createSprite(height/2-400,width/2-280,10,90000);
  l34i.visible = false;

  line35i = createSprite(height/2+1300,width/2-280,10,90000);
  line35i.velocityX = 0;
  line35i.visible = false;

  l35i = createSprite(height/2-400,width/2-280,10,90000);
  l35i.visible = false;

  line36i = createSprite(height/2+1300,width/2-280,10,90000);
  line36i.velocityX = 0;
  line36i.visible = false;

  l36i = createSprite(height/2-400,width/2-280,10,90000);
  l36i.visible = false;

  line37i = createSprite(height/2+1300,width/2-280,10,90000);
  line37i.velocityX = 0;
  line37i.visible = false;

  l37i = createSprite(height/2-400,width/2-280,10,90000);
  l37i.visible = false;

  line37i = createSprite(height/2+1300,width/2-280,10,90000);
  line37i.velocityX = 0;
  line37i.visible = false;

  l37i = createSprite(height/2-400,width/2-280,10,90000);
  l37i.visible = false;

  line38i = createSprite(height/2+1300,width/2-280,10,90000);
  line38i.velocityX = 0;
  line38i.visible = false;

  l38i = createSprite(height/2-400,width/2-280,10,90000);
  l38i.visible = false;

  line39i = createSprite(height/2+1300,width/2-280,10,90000);
  line39i.velocityX = 0;
  line39i.visible = false;

  l39i = createSprite(height/2-400,width/2-280,10,90000);
  l39i.visible = false;

  K6 = createSprite(displayHeight/2+755,displayWidth/2-590,10,width);
  K6.addImage(zcom6);
  K6.scale = 0.60;
  K6.visible = false;

  line40i = createSprite(height/2+5000,width/2-280,10,90000);
  line40i.velocityX = 0;
  line40i.visible = false;

  line41i = createSprite(height/2+7000,width/2-280,10,90000);
  line41i.velocityX = 0;
  line41i.visible = false;

  line42i = createSprite(height/2+9000,width/2-280,10,90000);
  line42i.velocityX = 0;
  line42i.visible = false;

  line43i = createSprite(height/2+11000,width/2-280,10,90000);
  line43i.velocityX = 0;
  line43i.visible = false;

  line44i = createSprite(height/2+13000,width/2-280,10,90000);
  line44i.velocityX = 0;
  line44i.visible = false;
  
  line49i = createSprite(height/2+1300,width/2-280,10,90000);
  line49i.velocityX = 0;
  line49i.visible = false;

  l49i = createSprite(height/2-400,width/2-280,10,90000);
  l49i.visible = false;

  SW = createSprite(displayHeight/2+980,displayWidth/2-900,width,50);
  SW.addAnimation("Spinning Weapon",SpinningWeapon);
  SW.scale = 0.10;
  SW.visible = false;
 
  Mprincess = createSprite(displayHeight/2+700,displayWidth/2-150,width,50);
  Mprincess.addImage(Mystery);
  Mprincess.scale = 0.26;
  Mprincess.visible = false;

  TP2 = createSprite(displayHeight/2+415,displayWidth/2-285,width,50);
  TP2.addAnimation("Thunder Power",TP);
  TP2.scale = -1.7;
  TP2.visible = false;

  JaiRamJi = createSprite(displayHeight/2-150,displayWidth/2-285,width,50);
  JaiRamJi.addImage(RamJi);
  JaiRamJi.scale = 0.3;
  JaiRamJi.visible = false;

  JaiRamJiW = createSprite(displayHeight/2-100,displayWidth/2-335,width,50);
  JaiRamJiW.addImage(RamJiWeapons);
  JaiRamJiW.scale = 0.13;
  JaiRamJiW.visible = false;
  
  TP4 = createSprite(displayHeight/2+415,displayWidth/2-390,width,50);
  TP4.addAnimation("Thunder Power3",Lightning2);
  TP4.scale = 1000;
  TP4.visible = false;

  push();
  GoodWolf.depth = Thunder.depth + 1;
  GoodWolf.depth = Thunder2.depth + 1;
  GoodWolf.depth = Thunder3.depth + 1;
  GoodWolf.depth = Thunder4.depth + 1;
  pop();

  SHIELD = createSprite(displayHeight/2-1000,displayWidth/2-150,width,50);
  SHIELD.addAnimation("Saving shield",Shield);
  SHIELD.scale = 0.5;
  SHIELD.visible = false;

  ESHIELD1 = createSprite(displayHeight/2+100,displayWidth/2-1000,width,50);
  ESHIELD1.addImage(Eshield);
  ESHIELD1.scale = 0.10;
  ESHIELD1.visible = true;

  ESHIELD2 = createSprite(displayHeight/2-380,displayWidth/2-1000,width,50);
  ESHIELD2.addImage(Eshield);
  ESHIELD2.scale = 0.10;
  ESHIELD2.visible = true;
  
  cSHIELD = createSprite(displayHeight/2+3000,displayWidth/2-500,width,50);
  cSHIELD.addImage(CSHIELD);
  cSHIELD.scale = 0.10;
  cSHIELD.visible = true;

  LEVEL1 = createSprite(displayHeight/2-328,displayWidth/2-678,width,50);
  LEVEL1.addImage(Level1);
  LEVEL1.scale = 0.15;
  LEVEL1.visible = false;

  LEVEL1i = createSprite(displayHeight/2-225,displayWidth/2-668,width,50);
  LEVEL1i.addImage(Level1i);
  LEVEL1i.scale = 0.35;
  LEVEL1i.visible = false;

  LEVEL2i = createSprite(displayHeight/2-225,displayWidth/2-668,width,50);
  LEVEL2i.addImage(Level2i);
  LEVEL2i.scale = 0.35;
  LEVEL2i.visible = false;

  line21z = createSprite(height/2+1300,width/2-280,10,90000);
  line21z.velocityX = 0;
  line21z.visible = false;

  l21z = createSprite(height/2-400,width/2-280,10,90000);
  l21z.visible = false;

  line21z = createSprite(height/2+1300,width/2-280,10,90000);
  line21z.velocityX = 0;
  line21z.visible = false;

  l21z = createSprite(height/2-400,width/2-280,10,90000);
  l21z.visible = false;

  line22z = createSprite(height/2+1300,width/2-280,10,90000);
  line22z.velocityX = 0;
  line22z.visible = false;

  l22z = createSprite(height/2-400,width/2-280,10,90000);
  l22z.visible = false;

  line23z = createSprite(height/2+1300,width/2-280,10,90000);
  line23z.velocityX = 0;
  line23z.visible = false;

  l23z = createSprite(height/2-400,width/2-280,10,90000);
  l23z.visible = false;

  line24z = createSprite(height/2+1300,width/2-280,10,90000);
  line24z.velocityX = 0;
  line24z.visible = false;

  l24z = createSprite(height/2-400,width/2-280,10,90000);
  l24z.visible = false;

  line25z = createSprite(height/2+1300,width/2-280,10,90000);
  line25z.velocityX = 0;
  line25z.visible = false;

  l25z = createSprite(height/2-400,width/2-280,10,90000);
  l25z.visible = false;

  line26z = createSprite(height/2+1300,width/2-280,10,90000);
  line26z.velocityX = 0;
  line26z.visible = false;

  l26z = createSprite(height/2-400,width/2-280,10,90000);
  l26z.visible = false;

  line27z = createSprite(height/2+1300,width/2-280,10,90000);
  line27z.velocityX = 0;
  line27z.visible = false;

  l27z = createSprite(height/2-400,width/2-280,10,90000);
  l27z.visible = false;

  line28z = createSprite(height/2+1300,width/2-280,10,90000);
  line28z.velocityX = 0;
  line28z.visible = false;

  l28z = createSprite(height/2-400,width/2-280,10,90000);
  l28z.visible = false;

  line29z = createSprite(height/2+1300,width/2-280,10,90000);
  line29z.velocityX = 0;
  line29z.visible = false;

  oins = createSprite(displayHeight/2+250,displayWidth/2-370,width,50);
  oins.addImage(C2500);
  oins.scale = 0.8;
  oins.visible = false;
  
  line30z = createSprite(height/2+1300,width/2-280,10,90000);
  line30z.velocityX = 0;
  line30z.visible = false;

  l30z = createSprite(height/2-400,width/2-280,10,90000);
  l30z.visible = false;
  
  line33z = createSprite(height/2+1300,width/2-280,10,90000);
  line33z.velocityX = 0;
  line33z.visible = false;

  l33z = createSprite(height/2-400,width/2-280,10,90000);
  l33z.visible = false;

  MT6 = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT6.addImage(textz);
  MT6.scale = 0.7;
  MT6.visible = false;

  Sun = createSprite(displayHeight/2+40000,displayWidth/2-350,width,50);
  Sun.addImage(SUN);
  Sun.scale = 10;
  Sun.velocityX = 0;
  Sun.visible = false;
  Sun.depth = GoodWolf.depth+1;
  Sun.depth = GZi.depth+1;
  Sun.depth = GZ2i.depth+1;
  Sun.depth = RDi.depth+1;
  Sun.depth = RD2i.depth+1;
  Sun.depth = TSi.depth+1;
  Sun.depth = TS2i.depth+1;

  line43z = createSprite(height/2+39000,width/2-280,10,90000);
  line43z.velocityX = 0;
  line43z.visible = false;

  God = createSprite(displayHeight/2+29000,displayWidth/2-500,width,125);
  God.addImage(GOD);
  God.scale = 0.9;
  God.visible = false;

  line307 = createSprite(displayHeight/2+400,displayWidth/2-10000,90000,10);
  line307.velocityX = 0;
  line307.visible = false;

  line44z = createSprite(height/2+28399,width/2-280,10,90000);
  line44z.velocityX = 0;
  line44z.visible = false;

  converstaion1 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion1.addImage(Cera);
  converstaion1.scale = 0.9;
  converstaion1.visible = false;

  converstaion2 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion2.addImage(Cerb);
  converstaion2.scale = 0.9;
  converstaion2.visible = false;

  converstaion3 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion3.addImage(Cerc);
  converstaion3.scale = 0.9;
  converstaion3.visible = false;

  converstaion4 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion4.addImage(Cerd);
  converstaion4.scale = 0.9;
  converstaion4.visible = false;

  converstaion5 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion5.addImage(Cere);
  converstaion5.scale = 0.9;
  converstaion5.visible = false;

  converstaion6 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion6.addImage(Cerf);
  converstaion6.scale = 1;
  converstaion6.visible = false;

  converstaion7 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion7.addImage(Cerg);
  converstaion7.scale = 0.9;
  converstaion7.visible = false;

  converstaion8 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion8.addImage(Cerh);
  converstaion8.scale = 0.9;
  converstaion8.visible = false;

  converstaion9 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion9.addImage(Ceri);
  converstaion9.scale = 0.6;
  converstaion9.visible = false;

  converstaion10 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion10.addImage(Cerj);
  converstaion10.scale = 0.9;
  converstaion10.visible = false;

  converstaion11 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion11.addImage(Cerk);
  converstaion11.scale = 0.9;
  converstaion11.visible = false;

  converstaion12 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion12.addImage(Cerl);
  converstaion12.scale = 1;
  converstaion12.visible = false;

  converstaion13 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion13.addImage(Cerm);
  converstaion13.scale = 0.9;
  converstaion13.visible = false;

  converstaion14 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion14.addImage(Cern);
  converstaion14.scale = 0.9;
  converstaion14.visible = false;
  
  la = createSprite(height/2+1300,width/2-280,10,90000);
  la.velocityX = 0;
  la.visible = false;

  la2 = createSprite(height/2-400,width/2-280,10,90000);
  la2.visible = false;


  lb = createSprite(height/2+1300,width/2-280,10,90000);
  lb.velocityX = 0;
  lb.visible = false;

  lb2 = createSprite(height/2-400,width/2-280,10,90000);
  lb2.visible = false;


  lc = createSprite(height/2+1300,width/2-280,10,90000);
  lc.velocityX = 0;
  lc.visible = false;

  lc2 = createSprite(height/2-400,width/2-280,10,90000);
  lc2.visible = false;


  ld = createSprite(height/2+1300,width/2-280,10,90000);
  ld.velocityX = 0;
  ld.visible = false;

  ld2 = createSprite(height/2-400,width/2-280,10,90000);
  ld2.visible = false;


  le = createSprite(height/2+1300,width/2-280,10,90000);
  le.velocityX = 0;
  le.visible = false;

  le2 = createSprite(height/2-400,width/2-280,10,90000);
  le2.visible = false;


  lf = createSprite(height/2+1300,width/2-280,10,90000);
  lf.velocityX = 0;
  lf.visible = false;

  lf2 = createSprite(height/2-400,width/2-280,10,90000);
  lf2.visible = false;


  lg = createSprite(height/2+1300,width/2-280,10,90000);
  lg.velocityX = 0;
  lg.visible = false;

  lg2 = createSprite(height/2-400,width/2-280,10,90000);
  lg2.visible = false;


  lh = createSprite(height/2+1300,width/2-280,10,90000);
  lh.velocityX = 0;
  lh.visible = false;

  lh2 = createSprite(height/2-400,width/2-280,10,90000);
  lh2.visible = false;


  lj = createSprite(height/2+1300,width/2-280,10,90000);
  lj.velocityX = 0;
  lj.visible = false;

  lj2 = createSprite(height/2-400,width/2-280,10,90000);
  lj2.visible = false;


  lk = createSprite(height/2+1300,width/2-280,10,90000);
  lk.velocityX = 0;
  lk.visible = false;

  lk2 = createSprite(height/2-400,width/2-280,10,90000);
  lk2.visible = false;


  ll = createSprite(height/2+1300,width/2-280,10,90000);
  ll.velocityX = 0;
  ll.visible = false;

  ll2 = createSprite(height/2-400,width/2-280,10,90000);
  ll2.visible = false;


  lm = createSprite(height/2+1300,width/2-280,10,90000);
  lm.velocityX = 0;
  lm.visible = false;

  lm2 = createSprite(height/2-400,width/2-280,10,90000);
  lm2.visible = false;


  ln = createSprite(height/2+1300,width/2-280,10,90000);
  ln.velocityX = 0;
  ln.visible = false;

  ln2 = createSprite(height/2-400,width/2-280,10,90000);
  ln2.visible = false;
  
  BGI = createSprite(displayHeight/2,displayWidth/2);
  BGI.addImage(KBG);
  BGI.scale = 1;
  BGI.visible = false;

  ZP2 = createSprite(displayHeight/2+600,displayWidth/2-250,width,50);
  ZP2.addImage(ZomiPORTAL2);   
  ZP2.velocityX = 0;
  ZP2.visible = false;
  ZP2.scale = 0.22;

  ZP3 = createSprite(displayHeight/2+200,displayWidth/2-48,width,50);
  ZP3.addImage(ZomiPORTAL3);   
  ZP3.velocityX = 0;
  ZP3.visible = false;
  ZP3.scale = 0.35;

  ZP4 = createSprite(displayHeight/2-200,displayWidth/2-48,width,50);
  ZP4.addImage(ZomiPORTAL3);   
  ZP4.velocityX = 0;
  ZP4.visible = false;
  ZP4.scale = 0.35;

  ZP5 = createSprite(displayHeight/2-290,displayWidth/2-48,width,50);
  ZP5.addImage(ZomiPORTAL3);   
  ZP5.velocityX = 0;
  ZP5.visible = false;
  ZP5.scale = 0.35;

  ZP6 = createSprite(displayHeight/2-490,displayWidth/2-48,width,50);
  ZP6.addImage(ZomiPORTAL3);   
  ZP6.velocityX = 0;
  ZP6.visible = false;
  ZP6.scale = 0.35;

  PORTAL = createSprite(displayHeight/2+28980,displayWidth/2-100,width,50);
  PORTAL.addAnimation("Portal Animation",Portal);
  PORTAL.velocityX = 0;
  PORTAL.scale = 2;
  PORTAL.visible = false;

  P = createSprite(displayHeight/2+28980,displayWidth/2-350,width,50);
  P.addAnimation("Power",Power);
  P.velocityX = 0;
  P.scale = 1.5;
  P.visible = false;

  lz = createSprite(height/2+1300,width/2-280,10,90000);
  lz.velocityX = 0;
  lz.visible = false;

  lz2 = createSprite(height/2+500,width/2-280,10,90000);
  lz2.velocityX = 0;
  lz2.visible = false;

  ly = createSprite(height/2+1300,width/2-280,10,90000);
  ly.velocityX = 0;
  ly.visible = false;

  ly2 = createSprite(height/2-400,width/2-280,10,90000);
  ly2.velocityX = 0;
  ly2.visible = false;

  ls = createSprite(height/2+1300,width/2-280,10,90000);
  ls.velocityX = 0;
  ls.visible = false;

  ls2 = createSprite(height/2-400,width/2-280,10,90000);
  ls2.velocityX = 0;
  ls2.visible = false;

  lt = createSprite(height/2+1300,width/2-280,10,90000);
  lt.velocityX = 0;
  lt.visible = false;

  lt2 = createSprite(height/2-400,width/2-280,10,90000);
  lt2.velocityX = 0;
  lt2.visible = false;

  lq2 = createSprite(height/2+500,width/2-280,10,90000);
  lq2.velocityX = 0;
  lq2.visible = false;

  lac = createSprite(height/2+1300,width/2-280,10,90000);
  lac.velocityX = 0;
  lac.visible = false;

  lac2 = createSprite(height/2-400,width/2-280,10,90000);
  lac2.visible = false;

  lac3 = createSprite(height/2+30,width/2-280,10,90000);
  lac3.visible = false;

  ST60 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST60.addImage(story40);
  ST60.scale = 0.20;
  ST60.visible = false;

  Sline1 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline1.addImage(SLine1);
  Sline1.scale = 0.6;
  Sline1.visible = false;

  Sline2 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline2.addImage(SLine2);
  Sline2.scale = 0.7;
  Sline2.visible = false;

  Sline3 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline3.addImage(SLine3);
  Sline3.scale = 0.7;
  Sline3.visible = false;

  Sline4 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline4.addImage(SLine4);
  Sline4.scale = 0.7;
  Sline4.visible = false;

  Sline5 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline5.addImage(SLine5);
  Sline5.scale = 0.7;
  Sline5.visible = false;

  Sline6 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline6.addImage(SLine6);
  Sline6.scale = 0.7;
  Sline6.visible = false;

  Sline7 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline7.addImage(SLine7);
  Sline7.scale = 0.7;
  Sline7.visible = false;

  ST61 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST61.addImage(story41);
  ST61.scale = 1.1;
  ST61.visible = false;

  ST62 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST62.addImage(story42);
  ST62.scale = 1.1;
  ST62.visible = false;

  line59 = createSprite(height/2+1300,width/2-280,10,90000);
  line59.velocityX = 0;
  line59.visible = false;

  line59i = createSprite(height/2-400,width/2-280,10,90000);
  line59i.velocityX = 0;
  line59i.visible = false;

  line50 = createSprite(height/2+1300,width/2-280,10,90000);
  line50.velocityX = 0;
  line50.visible = false;

  line50i = createSprite(height/2-400,width/2-280,10,90000);
  line50i.velocityX = 0;
  line50i.visible = false;

  line52 = createSprite(height/2+1300,width/2-280,10,90000);
  line52.velocityX = 0;
  line52.visible = false;

  line52i = createSprite(height/2-400,width/2-280,10,90000);
  line52i.velocityX = 0;
  line52i.visible = false;

  line53 = createSprite(height/2+1300,width/2-280,10,90000);
  line53.velocityX = 0;
  line53.visible = false;

  line53i = createSprite(height/2-400,width/2-280,10,90000);
  line53i.velocityX = 0;
  line53i.visible = false;

  line54 = createSprite(height/2+1300,width/2-280,10,90000);
  line54.velocityX = 0;
  line54.visible = false;

  line54i = createSprite(height/2-400,width/2-280,10,90000);
  line54i.velocityX = 0;
  line54i.visible = false;

  line55 = createSprite(height/2+1300,width/2-280,10,90000);
  line55.velocityX = 0;
  line55.visible = false;

  line55i = createSprite(height/2-400,width/2-280,10,90000);
  line55i.velocityX = 0;
  line55i.visible = false;

  line56 = createSprite(height/2+1300,width/2-280,10,90000);
  line56.velocityX = 0;
  line56.visible = false;

  line56i = createSprite(height/2-400,width/2-280,10,90000);
  line56i.velocityX = 0;
  line56i.visible = false;

  line57 = createSprite(height/2+1300,width/2-280,10,90000);
  line57.velocityX = 0;
  line57.visible = false;

  line57i = createSprite(height/2-400,width/2-280,10,90000);
  line57i.velocityX = 0;
  line57i.visible = false;

  line60 = createSprite(height/2+1300,width/2-280,10,90000);
  line60.velocityX = 0;
  line60.visible = false;

  line60i = createSprite(height/2-400,width/2-280,10,90000);
  line60i.velocityX = 0;
  line60i.visible = false;

  Save = createSprite(displayWidth/2,displayHeight-600,width,125);
  Save.addImage(SAVE);
  Save.scale = 0.9;
  Save.visible = false;

  line61 = createSprite(height/2+1300,width/2-280,10,90000);
  line61.velocityX = 0;
  line61.visible = false;

  line61i = createSprite(height/2-400,width/2-280,10,90000);
  line61i.velocityX = 0;
  line61i.visible = false;
  
  Save.depth = Thunder2.depth+1;
  Save.depth = Thunder3.depth+1;
  Save.depth = Thunder4.depth+1;
  Save.depth = line3p.depth+1;

  line62 = createSprite(height/2+1300,width/2-280,10,90000);
  line62.velocityX = 0;
  line62.visible = false;

  line62i = createSprite(height/2-400,width/2-280,10,90000);
  line62i.velocityX = 0;
  line62i.visible = false;

  ZKINGDOM = createSprite(displayWidth/2,displayHeight-500,width,125);
  ZKINGDOM.addImage(ZKingdom);
  ZKINGDOM.scale = 0.7;
  ZKINGDOM.visible = false;

  ST63 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST63.addImage(story44);
  ST63.scale = 0.20;
  ST63.visible = false;

  ST64 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST64.addImage(story45);
  ST64.scale = 0.23;
  ST64.visible = false;

  ST65 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST65.addImage(story46);
  ST65.scale = 1.1;
  ST65.visible = false;

  ST66 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST66.addImage(story47);
  ST66.scale = 1.1;
  ST66.visible = false;

  ST67 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST67.addImage(story48);
  ST67.scale = 1.1;
  ST67.visible = false;

  ST68 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST68.addImage(story49);
  ST68.scale = 1.1;
  ST68.visible = false;

  ST69 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST69.addImage(story50);
  ST69.scale = 1.1;
  ST69.visible = false;

  ST70 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST70.addImage(story51);
  ST70.scale = 0.28;
  ST70.visible = false;

  ST71 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST71.addImage(story52);
  ST71.scale = 0.23;
  ST71.visible = false;

  ST72 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST72.addImage(story52i);
  ST72.scale = 1.1;
  ST72.visible = false;

  ST73 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST73.addImage(story53);
  ST73.scale = 1.1;
  ST73.visible = false;

  ST74 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST74.addImage(story54);
  ST74.scale = 0.23;
  ST74.visible = false;

  ST75 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST75.addImage(story55);
  ST75.scale = 1,1;
  ST75.visible = false;

  Save.depth = Thunder2.depth+1;
  Save.depth = Thunder3.depth+1;
  Save.depth = Thunder4.depth+1;
  Save.depth = line3p.depth+1;

  a = createSprite(height/2+1300,width/2-280,10,90000);
  a.velocityX = 0;
  a.visible = false;

  ai = createSprite(height/2-400,width/2-280,10,90000);
  ai.velocityX = 0;
  ai.visible = false;


  b = createSprite(height/2+1300,width/2-280,10,90000);
  b.velocityX = 0;
  b.visible = false;

  bi = createSprite(height/2-400,width/2-280,10,90000);
  bi.velocityX = 0;
  bi.visible = false;


  c = createSprite(height/2+1300,width/2-280,10,90000);
  c.velocityX = 0;
  c.visible = false;

  ci = createSprite(height/2-400,width/2-280,10,90000);
  ci.velocityX = 0;
  ci.visible = false;


  d = createSprite(height/2+1300,width/2-280,10,90000);
  d.velocityX = 0;
  d.visible = false;

  di = createSprite(height/2-400,width/2-280,10,90000);
  di.velocityX = 0;
  di.visible = false;


  e = createSprite(height/2+1300,width/2-280,10,90000);
  e.velocityX = 0;
  e.visible = false;

  ei = createSprite(height/2-400,width/2-280,10,90000);
  ei.velocityX = 0;
  ei.visible = false;


  f = createSprite(height/2+1300,width/2-280,10,90000);
  f.velocityX = 0;
  f.visible = false;

  fi = createSprite(height/2-400,width/2-280,10,90000);
  fi.velocityX = 0;
  fi.visible = false;


  g = createSprite(height/2+1300,width/2-280,10,90000);
  g.velocityX = 0;
  g.visible = false;

  gi = createSprite(height/2-400,width/2-280,10,90000);
  gi.velocityX = 0;
  gi.visible = false;


  h = createSprite(height/2+1300,width/2-280,10,90000);
  h.velocityX = 0;
  h.visible = false;

  hi = createSprite(height/2-400,width/2-280,10,90000);
  hi.velocityX = 0;
  hi.visible = false;


  i = createSprite(height/2+1300,width/2-280,10,90000);
  i.velocityX = 0;
  i.visible = false;

  ii = createSprite(height/2-400,width/2-280,10,90000);
  ii.velocityX = 0;
  ii.visible = false;


  j = createSprite(height/2+1300,width/2-280,10,90000);
  j.velocityX = 0;
  j.visible = false;

  ji = createSprite(height/2-400,width/2-280,10,90000);
  ji.velocityX = 0;
  ji.visible = false;


  k = createSprite(height/2+1300,width/2-280,10,90000);
  k.velocityX = 0;
  k.visible = false;

  ki = createSprite(height/2-400,width/2-280,10,90000);
  ki.velocityX = 0;
  ki.visible = false;


  l = createSprite(height/2+1300,width/2-280,10,90000);
  l.velocityX = 0;
  l.visible = false;

  li = createSprite(height/2-400,width/2-280,10,90000);
  li.velocityX = 0;
  li.visible = false;


  m = createSprite(height/2+1300,width/2-280,10,90000);
  m.velocityX = 0;
  m.visible = false;

  mi = createSprite(height/2-400,width/2-280,10,90000);
  mi.velocityX = 0;
  mi.visible = false;

  ZEXT1 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT1.addImage(zext1);
  ZEXT1.scale = 0.7;
  ZEXT1.visible = false;

  ZEXT2 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT2.addImage(zext2);
  ZEXT2.scale = 0.7;
  ZEXT2.visible = false;

  ZEXT3 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT3.addImage(zext3);
  ZEXT3.scale = 0.7;
  ZEXT3.visible = false;

  ZEXT4 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT4.addImage(zext4);
  ZEXT4.scale = 0.7;
  ZEXT4.visible = false;

  ZEXT5 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT5.addImage(zext5);
  ZEXT5.scale = 0.7;
  ZEXT5.visible = false;

  ZEXT6 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT6.addImage(zext6);
  ZEXT6.scale = 0.7;
  ZEXT6.visible = false;

  ZEXT7 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT7.addImage(zext7);
  ZEXT7.scale = 0.7;
  ZEXT7.visible = false;

  ZEXT8 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT8.addImage(zext8);
  ZEXT8.scale = 0.7;
  ZEXT8.visible = false;

  ZEXT9 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT9.addImage(zext9);
  ZEXT9.scale = 0.7;
  ZEXT9.visible = false;

  ZEXT10 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT10.addImage(zext10);
  ZEXT10.scale = 0.7;
  ZEXT10.visible = false;

  ZEXT11 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT11.addImage(zext11);
  ZEXT11.scale = 0.7;
  ZEXT11.visible = false;

  ZEXT12 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT12.addImage(zext12);
  ZEXT12.scale = 0.7;
  ZEXT12.visible = false;

  ZKINGDOM2 = createSprite(displayWidth/2,displayHeight-505,width,125);
  ZKINGDOM2.addImage(ZKingdom2);
  ZKINGDOM2.scale = 0.7;
  ZKINGDOM2.visible = false;

  FINISH = createSprite(displayWidth/2,displayHeight-500,width,125);
  FINISH.addImage(Finish);
  FINISH.scale = 0.9;
  FINISH.visible = false;

  m2 = createSprite(height/2+1300,width/2-280,10,90000);
  m2.velocityX = 0;
  m2.visible = false;

  m2i = createSprite(height/2-400,width/2-280,10,90000);
  m2i.velocityX = 0;
  m2i.visible = false;

  score = 0;
}

function draw() {  
  background(0);

if(gameState === "storyTelling"){
  if(line2.isTouching(l2)){
    gameLogo.destroy();
    LINE1.visible = true;
    SKIP.velocityX = -50000;
    Sound1.play();
    line3.velocityX = -6;
    line2.destroy();
    l2.destroy();
 }

 if(line3.isTouching(l3)){
    Sound1.stop();
    LINE2.visible = true;
    LINE1.destroy();
    Sound2.play();
    line4.velocityX = -10;
    line3.destroy();
    l3.destroy();
 }

 if(line4.isTouching(l4)){
    LINE3.visible = true;
    Sound2.stop();
    ST1.visible = true;
    LINE2.destroy();
    Sound3.play();
    line5.velocityX = -9;
    line4.destroy();
    l4.destroy();
 }

 if(line5.isTouching(l5)){
    ST1.destroy();
    LINE3.destroy();
    ST2.visible = true;
    LINE4.visible = true;
    line6.velocityX = -9;
    Sound4.play();
    line5.destroy();
    l5.destroy();
 }

 if(line6.isTouching(l6)){
    ST2.destroy();
    Sound4.stop();
    LINE4.destroy();
    LINE5.visible = true;
    ST3.visible = true;
    line6.destroy();
    line7.velocityX = -5;
    l6.destroy();
    Sound5.play();
 }

 if(line7.isTouching(l7)){
    LINE5.destroy();
    ST3.destroy();
    LINE6.visible = true;
    ST4.visible = true;
    line7.destroy();
    l7.destroy();
    line8.velocityX = -6;
    Sound5.stop();
    Sound6.play();
 }

 if(line8.isTouching(l8)){
   line8.destroy();
   l8.destroy();
   Sound6.stop();
   LINE6.destroy();
   ST4.destroy();
   LINE7.visible = true;
   ST5.visible = true;
   BGSound.stop();
   line9.velocityX = -10;
   BG2.loop();
   Sound7.play();
 }

 if(line9.isTouching(l9)){
   line9.destroy();
   l9.destroy();
   LINE7.destroy();
   ST5.destroy();
   LINE8.visible = true;
   ST6.visible = true;
   line10.velocityX = -10;
   Sound7.stop();
   Sound8.play();
 }

 if(line10.isTouching(l10)){
   line10.destroy();
   l10.destroy();
   LINE9.visible = true;
   ST7.visible = true;
   LINE8.destroy();
   ST6.destroy();
   line11.velocityX = -9;
   Sound8.stop();
   Sound9.play();
 }
    
 if(line11.isTouching(l11)){
   line11.destroy();
   l11.destroy();
   LINE9.destroy();
   Sound9.stop();
   line12.velocityX = -9;
   Sound10.play();
   LINE10.visible = true;
 }

 if(line12.isTouching(l12)){
   line12.destroy();
   l12.destroy();
   ST7.destroy();
   LINE10.destroy();
   ST8.visible = true;
   line13.velocityX = -9;
   LINE11.visible = true;
   Sound11.play();
   Sound10.stop();
 }
   
 if(line13.isTouching(l13)){
   line13.destroy();
   l13.destroy();
   ST8.destroy();
   LINE11.destroy();
   LINE12.visible = true;
   line14.velocityX = -16;
   ST9.visible = true;
   Sound11.stop();
   Sound12.play();
 }

 if(line14.isTouching(l14)){
   line14.destroy();
   l14.destroy();
   ST9.destroy();
   LINE12.destroy();
   ST10.visible = true;
   LINE13.visible = true;
   line15.velocityX = -12;
   Sound12.stop();
   Sound13.play();
 }

 if(line15.isTouching(l15)){
   line15.destroy();
   l15.destroy();
   ST10.destroy();
   LINE13.destroy();
   line16.velocityX = -12;
   ST11.visible = true;
 }
 
 if(line16.isTouching(l16)){
   line16.destroy();
   l16.destroy();
   ST11.destroy();
   ST12.visible = true;
   line17.velocityX = -13;
   LINE14.visible = true;
   Sound14.play();
 }

 if(line17.isTouching(l17)){
   line17.destroy();
   l17.destroy();
   LINE14.destroy();
   LINE15.visible = true;
   line18.velocityX = -13;
   Sound14.stop();
   Sound15.play();
 }

 if(line18.isTouching(l18)){
    line18.destroy();
    l18.destroy();
    LINE15.destroy();
    ST12.destroy();
    LINE16.visible = true;
    line19.velocityX = -13;
    ST13.visible = true;
    Sound15.stop();
    Sound16.play();
 }
   
 if(line19.isTouching(l19)){
   line19.destroy();
   l19.destroy();
   ST14.visible = true;
   ST13.destroy();
   line20.velocityX = -30;
   LINE16.destroy();
 }

 if(line20.isTouching(l20)){
    line20.destroy();
    l20.destroy();
    ST14.destroy();
    line21.velocityX = -30;
    ST15.visible = true;
 }

 if(line21.isTouching(l21)){
   line21.destroy();
   l21.destroy();
   ST15.destroy();
   line22.velocityX = -30;
   ST16.visible = true;
 }

 if(line22.isTouching(l22)){
   line22.destroy();
   l22.destroy();
   ST16.destroy();
   line23.velocityX = -30;
   ST17.visible = true;
 }

 if(line23.isTouching(l23)){
   line23.destroy();
   l23.destroy();
   ST17.destroy();
   line24.velocityX = -30;
   ST18.visible = true;
 }

 if(line24.isTouching(l24)){
   line24.destroy();
   l24.destroy();
   ST18.destroy();
   line25.velocityX = -30;
   ST19.visible = true;
 }

 if(line25.isTouching(l25)){
  line25.destroy();
  l25.destroy();
  line26.velocityX = -15;
  ST19.destroy();
  Message4.velocityX = -20;
  HotAirBalloons.velocityX = -20;
  GZ3.velocityX = -20;
  ZP.velocityX = -20;
  MT.visible = true;
  line303.velocityX = -20;
  line30.velocityX = -20;
  line30i.velocityX = -20;
  gameState = "level1";
}

if(mousePressedOver(SKIP)){
  //JaiRamJiW.velocityX = 40;
  //JaiRamJiW.velocityY = -20;
  gameState = "level1";
  line303.velocityX = -20;
  Message4.velocityX = -20;
  HotAirBalloons.velocityX = -20;
  line26.velocityX = -15;
  line30.velocityX = -20;
  GZ3.velocityX = -20;
  line30i.velocityX = -20;
  ZP.velocityX = -20;
  MT.visible = true;
  gameLogo.destroy();
  SKIP.destroy();
  LINE1.destroy();
  LINE2.destroy();
  LINE3.destroy();
  LINE4.destroy();
  LINE5.destroy();
  LINE6.destroy();
  LINE7.destroy();
  LINE8.destroy();
  LINE9.destroy();
  LINE10.destroy();
  LINE11.destroy();
  LINE12.destroy();
  LINE13.destroy();
  LINE14.destroy();
  LINE15.destroy();
  LINE16.destroy();

  ST1.destroy();
  ST2.destroy();
  ST3.destroy();
  ST4.destroy();
  ST5.destroy();
  ST6.destroy();
  ST7.destroy();
  ST8.destroy();
  ST9.destroy();
  ST10.destroy();
  ST11.destroy();
  ST12.destroy();
  ST13.destroy();
  ST14.destroy();
  ST15.destroy();
  ST16.destroy();
  ST17.destroy();
  ST18.destroy();
  ST19.destroy();

}



}
  

if(gameState === "level1"){
   LEVEL1.visible = true;
   LEVEL1i.visible = true;
   GoodWolf.visible = true;
   //Coin.velocityX = -20;
   Bg.visible = true; 
   Refile.visible = true;
   Refile2.visible = true;
   Refile3.visible = true;
   Refile4.visible = true;
   Refile5.visible = true;
   Refile6.visible = true;
   Refile7.visible = true;
   Refile8.visible = true;
   GZ2.visible = true;
   GZ.visible = true;
   TS2.visible = true;
   TS.visible = true;
   RD2.visible = true;
   RD.visible = true;
   if(Bg.x<0){
      Bg.x = width/2+300;
   }

   if(keyWentDown("space")&& GoodWolf.y >= 100) {
    GoodWolf.changeAnimation("Jumping Good Wolf",GWolf2);
    GoodWolf.velocityY = -12;  
  } 

  if(keyWentUp("space")){
     GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  }
 
  GoodWolf.velocityY = GoodWolf.velocityY + 0.8;

  spawnCoins();
  spawnCoinBox();
  spawnCoinBox2();
  spawnAlert();
  spawnAlert2();
  spawnEnergy();
}

if(Meteor2.isTouching(invisibleGround)){
  bloodEffect.visible = true;
  gameState = "END";
  Meteor2.destroy();
  Meteor3.destroy();
  Meteor4.destroy();
  BLAST3.visible = true;
  BLAST3.velocityX = -20;
  Refile.x = displayWidth/2-1000000;
  Refile2.x = displayWidth/2-1000000;
  Refile3.x = displayWidth/2-1000000;
  Refile4.x = displayWidth/2-1000000;
  Refile5.x = displayWidth/2-1000000;
  Refile6.x = displayWidth/2-1000000;
  Refile7.x = displayWidth/2-1000000;
  Refile8.x = displayWidth/2-1000000;
  WY.play();
  WY2.play();
} 
else if(gameState === "END"){
  HELL.visible = true;
  THE.visible = true;
  RISING.visible = true;
  RISING2.visible = true;
  RETRY.x = displayHeight/2-70;
  RETRY.visible = true;
  Bg.velocityX = 0;
  GoodWolf.visible = false;
  ZP.destroy();
  ZP4.destroy();
  DEST.destroy();
  GZ.destroy();
  GZ2.destroy();
  GZ3.destroy();
  TS.destroy();
  TS2.destroy();
  RD.destroy();
  RD2.destroy();
  Refile.destroy();
  Refile2.destroy();
  Refile3.destroy();
  Refile4.destroy();
  Refile5.destroy();
  Refile6.destroy();
  Refile7.destroy();
  Refile8.destroy();
  GH.destroy();
  FH.destroy();
  EH.destroy();
  HH.destroy();
  II.destroy();
  FH2.destroy();
  GZi.destroy();
  GZ2i.destroy();
  TSi.destroy();
  TS2i.destroy();
  RDi.destroy();
  RD2i.destroy();
  LEVEL1.destroy();
  LEVEL2i.destroy();
  Refilei.destroy();
  Refile2i.destroy();
  Refile3i.destroy();
  Refile4i.destroy();
  Refile5i.destroy();
  Refile6i.destroy();
  Refile7i.destroy();
  Refile8i.destroy();
  Thunder.destroy();
  Thunder2.destroy();
  Thunder3.destroy();
  Thunder4.destroy();
  line3p.destroy();
  SHIELD.destroy();
  ESHIELD1.destroy();
  ESHIELD2.destroy();
  cSHIELD.destroy();
  K6.destroy();
  CoinBOXGroup.destroyEach();
  CoinsGroup.destroyEach();
  CoinBOX2Group.destroyEach();
  AlertGroup.destroyEach();
  Alert2Group.destroyEach();
  EnergyGroup.destroyEach();
  Energy2Group.destroyEach();
  line34.velocityX = 0;
  Sun.x = displayHeight/2+40000;

  line30i.velocityX = 0;
  line30.velocityX = 0;
  line33.velocityX = 0;
}

if(mousePressedOver(RETRY)){
  retry();
}

GoodWolf.collide(invisibleGround);
GoodWolf.collide(SHIELD);
drawSprites();
  

  if(CoinsGroup.isTouching(GoodWolf)){
     CoinsGroup.destroyEach();
     score = score+5;
  }

  if(CoinBOXGroup.isTouching(GoodWolf)){
    CoinBOXGroup.destroyEach();
    score = score+500;
 }

 if(CoinBOX2Group.isTouching(GoodWolf)){
  CoinBOX2Group.destroyEach();
  score = score+500;
}

if(line26.isTouching(l26)){
  line26.destroy();
  l26.destroy();
  MT.destroy();
  line27.velocityX = -20;
}

if(line27.isTouching(l27)){
  line27.destroy();
  l27.destroy();
  GH.visible = true;
  line28.velocityX = -20;
}

if(line28.isTouching(l28)){
  line28.destroy();
  line29.velocityX = -9;
  l28.destroy();
  FH.visible = true;
}

if(line29.isTouching(l29)){
  line29.destroy();
  l29.destroy();
  GH.destroy();
  line31.velocityX = -5;
  FH2.visible = true;
  FH.destroy();
  II.visible = true;
}

if(line31.isTouching(l31)){
  line31.destroy();
  l31.destroy();
  FH2.destroy();
  II.destroy();
  EH.visible = true;
  HH.visible = true;
}

if(score>2500){
   oins.visible = true;
   line30z.velocityX = -20;
}

if(line30z.isTouching(l30z)){
   line30z.destroy();
   l30z.destroy();
   oins.destroy();
}

if(GoodWolf.isTouching(AlertGroup)){
   AlertGroup.destroyEach();
   Meteor.visible = true;
   Meteor.velocityX = -85;
   Meteor.velocityY = 85;
}

if(Meteor.isTouching(invisibleGround)){
   WY.play();
   Meteor.destroy();
   BLAST2.visible = true;
   BLAST2.velocityX = -20;
   Refile.x = displayWidth/2-1000000;
   Refile2.x = displayWidth/2-1000000;
   Refile3.x = displayWidth/2-1000000;
   Refile4.x = displayWidth/2-1000000;
   bloodEffect.visible = true;
   line49i.velocityX = -20;
}

if(line49i.isTouching(l49i)){
  line49i.destroy();
  l49i.destroy();
  bloodEffect.visible = false;
}

if(GoodWolf.isTouching(line30i)){
  DEST.visible = true;
  Text1.destroy();
  surprisebox.x = displayWidth/2-10000;
  surprisebox2.x = displayWidth/2-10000;
  surprisebox3.x = displayWidth/2-10000;
  sno1.destroy();
  sno2.destroy();
  sno3.destroy();
  GZ.destroy();
  GZ2.destroy();
  TS.destroy();
  TS2.destroy();
  RD.destroy();
  RD2.destroy();
  Refile.destroy();
  Refile2.destroy();
  Refile3.destroy();
  Refile4.destroy();
  Refile5.destroy();
  Refile6.destroy();
  Refile7.destroy();
  Refile8.destroy();
  GH.destroy();
  FH.destroy();
  EH.destroy();
  HH.destroy();
  II.destroy();
  FH2.destroy();
  CoinBOXGroup.destroyEach();
  CoinsGroup.destroyEach();
  CoinBOX2Group.destroyEach();
  AlertGroup.destroyEach();
  Alert2Group.destroyEach();
  EnergyGroup.destroyEach();
}


if(GoodWolf.isTouching(line30)){
   gameState = "Portal1";
   Bg.velocityX = 0;
   ZP.velocityX = 0;
   GZ3.velocityX = 0;
   GoodWolf.changeAnimation("Stopped Good Wolf",GWolf3);
   GoodWolf.velocityX = 0;
   GoodWolf.velocityY = 0;
   sno1.destroy();
   sno2.destroy();
   sno3.destroy();
   surprisebox.destroy();
   surprisebox2.destroy();
   surprisebox3.destroy();
   MT2.depth = ZP.depth + 1;
   GZ.destroy();
   GZ2.destroy();
   TS.destroy();
   TS2.destroy();
   RD.destroy();
   RD2.destroy();
   Refile.destroy();
   Refile2.destroy();
   Refile3.destroy();
   Refile4.destroy();
   Refile5.destroy();
   Refile6.destroy();
   Refile7.destroy();
   Refile8.destroy();
   GH.destroy();
   FH.destroy();
   EH.destroy();
   HH.destroy();
   II.destroy();
   FH2.destroy();
   CoinBOXGroup.destroyEach();
   CoinsGroup.destroyEach();
   CoinBOX2Group.destroyEach();
   AlertGroup.destroyEach();
   Alert2Group.destroyEach();
   EnergyGroup.destroyEach();
   line33z.velocityX = -20;
}

if(line33z.isTouching(l33z)){
   line33z.destroy();
   l33z.destroy();
   if(score>2500){
      MT2.visible = true;
      line33.velocityX = -10;
   }else if(score<2500){
    MT6.visible = true;
    MT6.depth = HELL.depth + 1;
    MT2.destroy();
    MT3.destroy();
    gameState = "END";
 }
}

if(line33.isTouching(l33)){
   line33.destroy();
   l33.destroy();
   MT2.destroy();
   line34.velocityX = -12;
   MT3.visible = true;
   MT3.depth = ZP.depth + 1;
}

if(line34.isTouching(l34)){
  line34.destroy();
  l34.destroy();
  MT3.destroy();
  GoodWolf.velocityX = 20;
  GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  GoodWolf.depth = ZP.depth+1;   
}

if(GoodWolf.isTouching(Alert2Group)){
   Alert2Group.destroyEach();
   Refile.x = displayWidth/2-1000000;
}


if(HotAirBalloons.isTouching(line302i)){
   line302i.destroy();
   Message4.scale = 0.2;
   Message4.velocityX = 0;
   Message4.velocityY = 8;
}

if(Message4.isTouching(invisibleGround)){
   Message4.velocityX = -20;
   Message4.velocityY = 0;
}

if(Message4.isTouching(GoodWolf)){
   Message4.scale = -0.2;
   Message4.velocityX = 5.1;
   Message4.velocityY = -15;
}

if(Message4.isTouching(line305)){
   line305.destroy();
   Message4.destroy();
   Message.visible = true;
   line100.velocityX = -80;
}

if(line100.isTouching(l100)){
   line100.destroy();
   l100.destroy();
   Message.visible = false;
   line101.velocityX = -4;
   Message7.visible = true;
   surprisebox.x = displayHeight/2+10;
   surprisebox2.x = displayHeight/2+195;
   surprisebox3.x = displayHeight/2+380;
}

if(line101.isTouching(l101)){
  line101.destroy();
  l101.destroy();
  surprisebox.visible = true;
  surprisebox2.visible = true;
  surprisebox3.visible = true;
  surprisebox.velocityY = 80;
  surprisebox2.velocityY = 80;
  surprisebox3.velocityY = 80;
}

if(surprisebox.isTouching(line306)){
  line306.destroy();
  surprisebox.velocityX = 0;
  surprisebox2.velocityX = 0;
  surprisebox3.velocityX = 0;
  surprisebox.velocityY = 0;
  surprisebox2.velocityY = 0;
  surprisebox3.velocityY = 0;
  line102.velocityX = -12;
}

if(line102.isTouching(l102)){
  line102.destroy();
  l102.destroy();
  Message7.destroy();
  Message.visible = true;
  line103.velocityX = -80;
}

if(line103.isTouching(l103)){
  line103.destroy();
  l103.destroy();
  Message.destroy();
  surprisebox.y = displayHeight/2-300;
  surprisebox2.y = displayHeight/2-300;
  surprisebox3.y = displayHeight/2-300;
  Text1.visible = true;
}

if(mousePressedOver(surprisebox)){
   sno1.visible = true;
   Message.destroy();
   Message7.destroy();
   sno2.destroy();
   sno3.destroy();
   surprisebox.velocityX = 1000000;
   surprisebox2.velocityX = 1000000;
   surprisebox3.velocityX = 1000000;
   line104.velocityX = -12;
   Text1.destroy();
   Meteor2.visible = true;
   Meteor2.velocityX = -85;
   Meteor2.velocityY = 85;

   Meteor3.visible = true;
   Meteor3.velocityX = -85;
   Meteor3.velocityY = 85;

   Meteor4.visible = true;
   Meteor4.velocityX = -85;
   Meteor4.velocityY = 85;
}

if(mousePressedOver(surprisebox2)){
  sno1.destroy();
  sno2.visible = true;
  sno3.destroy();
  Message.destroy();
  Message7.destroy();
  line104.velocityX = -12;
  surprisebox.velocityX = 1000000;
  surprisebox2.velocityX = 1000000;
  surprisebox3.velocityX = 1000000;
  Text1.destroy();
}

if(mousePressedOver(surprisebox3)){
  sno1.destroy();
  sno2.destroy();
  sno3.visible = true;
  Message.destroy();
  Message7.destroy();
  line104.velocityX = -12;
  score = score+2500;
  surprisebox.velocityX = 1000000;
  surprisebox2.velocityX = 1000000;
  surprisebox3.velocityX = 1000000;
  Text1.destroy();
}

if(line104.isTouching(l104)){
   line104.destroy();
   l104.destroy();
   sno1.destroy();
   sno2.destroy();
   sno3.destroy();
}

if(GoodWolf.isTouching(EnergyGroup)){
   EnergyGroup.destroyEach();
   Refile.x = displayHeight/2+930;
   Refile2.x = displayHeight/2+880;
   Refile3.x = displayHeight/2+830;
   Refile4.x = displayHeight/2+780;
   Refile5.x = displayHeight/2+730;
   Refile6.x = displayHeight/2+680;
   Refile7.x = displayHeight/2+630;
   Refile8.x = displayHeight/2+580;
}

if(gameState === "Portal1"){
   Bg2.velocityX = -20;
   GoodWolf.y = displayWidth/2+20;
   if(Bg2.x<0){
    Bg2.x = width/2+300;
 }
   Bg3.velocityX = -20;
   if(Bg3.x<0){
   Bg3.x = width/2+300;
  }
   if(keyWentDown("space")){
      GoodWolf.changeAnimation("Stopped Good Wolf",GWolf3);
      GoodWolf.velocityY = 0;
   }

   if(keyWentUp("space")){
      GoodWolf.changeAnimation("Stopped Good Wolf",GWolf3);
  }
}
  
if(GoodWolf.isTouching(GZ3)){
  gameState = "ZomiLand";
  GoodWolf.x = displayHeight/2-180;
  GoodWolf.velocityX = 0;
  //GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  Bg2.visible = true;
  Bg.destroy();
  ZP.destroy();
  GZ3.destroy();
  DEST.destroy();
}

if(gameState === "ZomiLand"){
  Save.depth = Thunder2.depth+1;
  Save.depth = Thunder3.depth+1;
  Save.depth = Thunder4.depth+1;
  Save.depth = line3p.depth+1;
  line43z.velocityX = -17;
  Sun.depth = GoodWolf.depth+1;
  Sun.velocityX = -17;
  Sun.visible = true;
  LEVEL1i.destroy();
  LEVEL2i.visible = true;
  if(line3p.isTouching(line302)){
    CoinBOXGroup.destroyEach();
    CoinsGroup.destroyEach();
    CoinBOX2Group.destroyEach();
    AlertGroup.destroyEach();
    Alert2Group.destroyEach();
    EnergyGroup.destroyEach();
    Energy2Group.destroyEach();
    line3p.velocityX = 0;
    //line302.destroy();
    bloodEffect.visible = true;
    Thunder.visible = true;
    Thunder2.visible = true;
    Thunder2.visible = true;
    Thunder3.visible = true;
    Thunder4.visible = true;
    TP4.visible = true;
    line21z.velocityX = -20;
    if(keyDown("S")){
      GoodWolf.y = displayWidth/2+20;
      ESHIELD1.visible = true;
      ESHIELD2.visible = true;
      ESHIELD1.velocityY = 80;
      ESHIELD2.velocityY = 80;
    }
 }
 if(line21z.isTouching(l21z)){
    line21z.destroy();
    l21z.destroy();
    Refilei.x = displayWidth/2-10000;
    line22z.velocityX = -20;
 }
 if(line22z.isTouching(l22z)){
  line22z.destroy();
  l22z.destroy();
  Refile2i.x = displayWidth/2-10000;
  line23z.velocityX = -20;
}
if(line23z.isTouching(l23z)){
  line23z.destroy();
  l23z.destroy();
  Refile3i.x = displayWidth/2-10000;
  line24z.velocityX = -20;
}
if(line24z.isTouching(l24z)){
  line24z.destroy();
  l24z.destroy();
  Refile4i.x = displayWidth/2-10000;
  line25z.velocityX = -20;
}
if(line25z.isTouching(l25z)){
  line25z.destroy();
  l25z.destroy();
  Refile5i.x = displayWidth/2-10000;
  line26z.velocityX = -20;
}
if(line26z.isTouching(l26z)){
  line26z.destroy();
  l26z.destroy();
  Refile6i.x = displayWidth/2-10000;
  line27z.velocityX = -20;
}
if(line27z.isTouching(l27z)){
  line27z.destroy();
  l27z.destroy();
  Refile7i.x = displayWidth/2-10000;
  line28z.velocityX = -20;
}
if(line28z.isTouching(l28z)){
  line28z.destroy();
  l28z.destroy();
  Refile8i.x = displayWidth/2-10000;
  gameState = "END";
}

  line34i.velocityX = -20;
  if(line34i.isTouching(l34i)){
     line34i.destroy();
     l34i.destroy();
     K1.visible = true;
     line35i.velocityX= -10;
  }
  if(line35i.isTouching(l35i)){
    line35i.destroy();
    l35i.destroy();
    K2.visible = true;
    line36i.velocityX= -10;
 }
 if(line36i.isTouching(l36i)){
  line36i.destroy();
  l36i.destroy();
  K1.destroy();
  K2.y = displayWidth/2-590;
  K3.visible = true;
  line37i.velocityX = -10;
}
if(line37i.isTouching(l37i)){
  line37i.destroy();
  l37i.destroy();
  K2.destroy();
  K3.y = displayWidth/2-590;
  K4.visible = true;
  line38i.velocityX = -10;
}
if(line38i.isTouching(l38i)){
  line38i.destroy();
  l38i.destroy();
  K3.destroy();
  K4.y = displayWidth/2-590;
  line39i.velocityX = -10;
  K5.visible = true;
}
if(line39i.isTouching(l39i)){
  line39i.destroy();
  l39i.destroy();
  K1.destroy();
  K2.destroy();
  K3.destroy();
  K4.destroy();
  K5.destroy();
  K6.visible = true;
}
  Bg2.velocityX = -20;
  if(Bg2.x<0){
   Bg2.x = width/2+300;
}
Bg3.velocityX = -20;
  if(Bg3.x<0){
   Bg3.x = width/2+300;
}
   Refilei.visible = true;
   Refile2i.visible = true;
   Refile3i.visible = true;
   Refile4i.visible = true;
   Refile5i.visible = true;
   Refile6i.visible = true;
   Refile7i.visible = true;
   Refile8i.visible = true;
   GZ2i.visible = true;
   GZi.visible = true;
   TS2i.visible = true;
   TSi.visible = true;
   RD2i.visible = true;
   RDi.visible = true;

   Sainik1.visible = true; 
   Sainik1.velocityX = -16;

   Arrow1.visible = true; 
   Arrow1.velocityX = -16;

   line40i.velocityX = -16;

   li1.velocityX = -16;
   li1.visible = false;
 
   Sainik2.visible = true; 
   Sainik2.velocityX = -16;

   Arrow2.visible = true; 
   Arrow2.velocityX = -16;

   line41i.velocityX = -16;

   li2.velocityX = -16;
   li2.visible = false;
 
   Sainik3.visible = true; 
   Sainik3.velocityX = -16;

   Arrow3.visible = true; 
   Arrow3.velocityX = -16;

   line42i.velocityX = -16;

   li3.velocityX = -16;
   li3.visible = false;
 
   Sainik4.visible = true; 
   Sainik4.velocityX = -16;

   Arrow4.visible = true; 
   Arrow4.velocityX = -16;

   line43i.velocityX = -16;

   li4.velocityX = -16;
   li4.visible = false;

   Sainik5.visible = true; 
   Sainik5.velocityX = -16;

   Arrow5.visible = true; 
   Arrow5.velocityX = -16;

   line44i.velocityX = -16;

   li5.velocityX = -16;
   li5.visible = false;

   if(li1.isTouching(GoodWolf)){
      Arrow1.velocityX = -80;
   }
   if(li2.isTouching(GoodWolf)){
      Arrow2.velocityX = -80;
   }
   if(li3.isTouching(GoodWolf)){
      Arrow3.velocityX = -80;
   }
   if(li4.isTouching(GoodWolf)){
      Arrow4.velocityX = -80;
   }
   if(li5.isTouching(GoodWolf)){
    Arrow5.velocityX = -80;
 }

   if(Arrow1.isTouching(GoodWolf)){
    bloodEffect.visible = true;
    Refilei.x = displayWidth/2-1000000;
 }
 
 if(GoodWolf.isTouching(line40i)){
    line40i.destroy();
    bloodEffect.visible = false;
 }
 
 if(Arrow2.isTouching(GoodWolf)){
   bloodEffect.visible = true;
   Refilei.x = displayWidth/2-1000000;
   Refile2i.x = displayWidth/2-1000000;
 }
 
 if(GoodWolf.isTouching(line41i)){
   line41i.destroy();
   bloodEffect.visible = false;
 }
 
 if(Arrow3.isTouching(GoodWolf)){
   bloodEffect.visible = true;
   Refilei.x = displayWidth/2-1000000;
   Refile2i.x = displayWidth/2-1000000;
   Refile3i.x = displayWidth/2-1000000;
 }
 
 if(GoodWolf.isTouching(line42i)){
   line42i.destroy();
   bloodEffect.visible = false;
 }
 
 if(Arrow4.isTouching(GoodWolf)){
   bloodEffect.visible = true;
   Refilei.x = displayWidth/2-1000000;
   Refile2i.x = displayWidth/2-1000000;
   Refile3i.x = displayWidth/2-1000000;
   Refile4i.x = displayWidth/2-1000000;
 }
 
 if(GoodWolf.isTouching(line43i)){
    line43i.destroy();
    bloodEffect.visible = false;
 }

 if(Arrow5.isTouching(GoodWolf)){
    bloodEffect.visible = true;
    Refilei.x = displayWidth/2-1000000;
    Refile2i.x = displayWidth/2-1000000;
    Refile3i.x = displayWidth/2-1000000;
    Refile4i.x = displayWidth/2-1000000;
    Refile5i.x = displayWidth/2-1000000;
}

if(GoodWolf.isTouching(line44i)){
  cSHIELD.velocityX = -12;
  line44i.destroy();
  bloodEffect.visible = false;
  line3p.velocityX = 12;
}

if(GoodWolf.isTouching(cSHIELD)){
   Save.visible = true;
   line61.velocityX = -13;
   cSHIELD.destroy();
}

if(line61.isTouching(line61i)){
   line61.destroy();
   line61i.destroy();
   Save.destroy();
}

if(ESHIELD1.isTouching(invisibleGround)){
  bloodEffect.visible = false;
  ESHIELD1.velocityY = 0;
  ESHIELD2.velocityY = 0;
  SHIELD.visible = true;
  SHIELD.x = displayHeight/2-140;
  SHIELD.y = displayWidth/2-150;
  line21z.velocityX = 0;
  l21z.destroy();
  line22z.velocityX = 0;
  l22z.destroy();
  line23z.velocityX = 0;
  l23z.destroy();
  line24z.velocityX = 0;
  l24z.destroy();
  line25z.velocityX = 0;
  l25z.destroy();
  line26z.velocityX = 0;
  l26z.destroy();
  line27z.velocityX = 0;
  l27z.destroy();
  line28z.velocityX = 0;
  l28z.destroy();
  line29z.velocityX = -2;
}

if(line29z.isTouching(line302)){
   bloodEffect.visible = false;
   line302.destroy();
   line3p.velocityX = 12;
   line29z.velocityX = -80;
   Thunder.x = displayWidth/2-10000;
   Thunder2.x = displayWidth/2-10000;
   Thunder3.x = displayWidth/2-10000;
   Thunder4.x = displayWidth/2-10000;
   LEVEL1.destroy();
   LEVEL2i.destroy();
   TP4.destroy();
   GZi.destroy();
   GZ2i.destroy();
   TSi.destroy();
   TS2i.destroy();
   RDi.destroy();
   RD2i.destroy();
   K6.destroy();
   Refilei.destroy();
   Refile2i.destroy();
   Refile3i.destroy();
   Refile4i.destroy();
   Refile5i.destroy();
   Refile6i.destroy();
   Refile7i.destroy();
   Refile8i.destroy();
}

if(line29z.isTouching(GoodWolf)){
   SHIELD.x = displayWidth/2-10000;
   ESHIELD1.velocityY = -80;
   ESHIELD2.velocityY = -80;
}
if(ESHIELD1.isTouching(line307)&&ESHIELD2.isTouching(line307)){
   ESHIELD1.destroy();
   ESHIELD2.destroy();
   SHIELD.destroy();
}

if(GoodWolf.isTouching(line43z)){
   Bg2.destroy();
   Bg3.visible = true;
   gameState = "Hell";
}

 if(GoodWolf.isTouching(Energy2Group)){
    Energy2Group.destroyEach();
    Refilei.x = displayHeight/2+930;
    Refile2i.x = displayHeight/2+880;
    Refile3i.x = displayHeight/2+830;
    Refile4i.x = displayHeight/2+780;
    Refile5i.x = displayHeight/2+730;
    Refile6i.x = displayHeight/2+680;
    Refile7i.x = displayHeight/2+630;
    Refile8i.x = displayHeight/2+580;
 }

  if(keyWentDown("space")&& GoodWolf.y >= 100) {
    GoodWolf.changeAnimation("Jumping Good Wolf",GWolf2);
    GoodWolf.velocityY = -12; 
  } 

  if(keyWentUp("space")){
     GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  }

  GoodWolf.velocityY = GoodWolf.velocityY + 0.8;

}

if(gameState === "Hell"){
   //spawnLightning3();
   God.visible = true;
   God.velocityX = -16;
   P.velocityX = -16;
   PORTAL.velocityX = -16;
   Bg3.visible = true;
   Bg3.velocityX = -20;
   line44z.velocityX = -16;
   if(Bg3.x<0){
      Bg3.x = width/2+300;
   }
   if(keyWentDown("space")&& GoodWolf.y >= 100) {
    GoodWolf.changeAnimation("Jumping Good Wolf",GWolf2);
    GoodWolf.velocityY = -12;  
  } 

  if(keyWentUp("space")){
     GoodWolf.changeAnimation("Running Good Wolf",GWolf);
  }
 
  GoodWolf.velocityY = GoodWolf.velocityY + 0.8;
}

if(lac3.isTouching(line44z)){
  GoodWolf.x = displayHeight/2-180;
  line44z.velocityX = 0;
  P.velocityX = 0;
  PORTAL.velocityX = 0;
  converstaion1.visible = true;
  la.velocityX = -15;
  Bg3.velocityX = 0;
  God.velocityX = 0;
  GoodWolf.changeAnimation("Stopped Good Wolf",GWolf3);
  if(keyWentDown("space")){
   GoodWolf.changeAnimation("Stopped Good Wolf",GWolf3);
   GoodWolf.velocityY = 0;
}

if(keyWentUp("space")){
   GoodWolf.changeAnimation("Stopped Good Wolf",GWolf3);
}
if(la.isTouching(la2)){
  la.destroy();
  la2.destroy();
  converstaion1.destroy();
  SOUND1.play();
  converstaion2.visible = true;
  lb.velocityX = -8;
}

if(lb.isTouching(lb2)){
 lb.destroy();
 lb2.destroy();
 SOUND1.stop();
 SOUND2.play();
 converstaion2.destroy();
 converstaion3.visible = true;
 lc.velocityX = -8;
}

if(lc.isTouching(lc2)){
lc.destroy();
lc2.destroy();
SOUND2.stop();
converstaion3.destroy();
converstaion4.visible = true;
ld.velocityX = -13;
}

if(ld.isTouching(ld2)){
ld.destroy();
ld2.destroy();
SOUND3.play();
converstaion4.destroy();
converstaion5.visible = true;
le.velocityX = -8;
}

if(le.isTouching(le2)){
le.destroy();
le2.destroy();
SOUND3.stop();
converstaion5.destroy();
converstaion6.visible = true;
lf.velocityX = -25;
}

if(lf.isTouching(lf2)){
lf.destroy();
lf2.destroy();
SOUND4.play();
converstaion6.destroy();
converstaion7.visible = true;
lg.velocityX = -8;
}

if(lg.isTouching(lg2)){
lg.destroy();
lg2.destroy();
SOUND4.stop();
converstaion7.destroy();
converstaion8.visible = true;
lh.velocityX = -19;
}

if(lh.isTouching(lh2)){
lh.destroy();
lh2.destroy();
SOUND4i.play();
converstaion8.destroy();
converstaion9.visible = true;
lj.velocityX = -8;
}

if(lj.isTouching(lj2)){
  lj.destroy();
  lj2.destroy();
  SOUND4i.stop();
  converstaion9.destroy();
  converstaion10.visible = true;
  lk.velocityX = -19;
}

if(lk.isTouching(lk2)){
  lk.destroy();
  lk2.destroy();
  SOUND5.play();
  converstaion10.destroy();
  converstaion11.visible = true;
  ll.velocityX = -8;
}

if(ll.isTouching(ll2)){
  ll.destroy();
  ll2.destroy();
  SOUND5.stop();
  converstaion11.destroy();
  converstaion12.visible = true;
  lm.velocityX = -15;
}

if(lm.isTouching(lm2)){
  lm.destroy();
  lm2.destroy();
  SOUND6.play();
  converstaion12.destroy();
  converstaion13.visible = true;
  ln.velocityX = -8;
}

if(ln.isTouching(ln2)){
   ln.destroy();
   ln2.destroy();
   converstaion13.destroy();
   lz.velocityX = -5;
}

if(lz.isTouching(lz2)){
   lz.destroy();
   lz2.destroy();
   converstaion14.destroy();
   P.visible = true;
   ly.velocityX = -15;
}

if(ly.isTouching(ly2)){
   ly.destroy();
   ly2.destroy();
   PORTAL.visible = true;
   PORTAL.changeAnimation("Portal Animation",Portal);
   ls.velocityX = -15;
}

if(ls.isTouching(ls2)){
   ls.destroy();
   ls2.destroy();
   converstaion14.visible = true;
   lt.velocityX = -60;
}

if(lt.isTouching(lt2)){
   lt.destroy();
   lt2.destroy();
   Bg3.velocityX = 0;
   God.velocityX = 0;
   P.velocityX = 0;
   PORTAL.velocityX = 0;
   converstaion14.destroy();
   GoodWolf.velocityX = 90;
   GoodWolf.changeAnimation("Running Good Wolf",GWolf);
   gameState = "storytelling2";
}

converstaion1.depth = GoodWolf.depth+1;
converstaion2.depth = GoodWolf.depth+1;
converstaion3.depth = GoodWolf.depth+1;
converstaion4.depth = GoodWolf.depth+1;
converstaion5.depth = GoodWolf.depth+1;
converstaion6.depth = GoodWolf.depth+1;
converstaion7.depth = GoodWolf.depth+1;
converstaion8.depth = GoodWolf.depth+1;
converstaion9.depth = GoodWolf.depth+1;
converstaion10.depth = GoodWolf.depth+1;
converstaion11.depth = GoodWolf.depth+1;
converstaion12.depth = GoodWolf.depth+1;
converstaion13.depth = GoodWolf.depth+1;
converstaion14.depth = GoodWolf.depth+1;   
}

if(gameState === "storytelling2"){
   BGSound.stop();
   GoodWolf.visible = false;
   lq2.destroy();
   Bg3.destroy();
   God.destroy();
   P.destroy();
   PORTAL.destroy();
   BGI.visible = true;
   ZP2.visible = true;
   ZP3.visible = true;
   ZP4.visible = true;
   ZP5.visible = true;
   ZP6.visible = true;
   line59.velocityX = -12;
   line62.velocityX = -25;

   if(line62.isTouching(line62i)){
      line62.destroy();
      line62i.destroy();
      ZKINGDOM.visible = true;
   }8

   if(line59.isTouching(line59i)){
      BGI.destroy();
      ZP2.destroy();
      ZP3.destroy();
      ZP4.destroy();
      ZP5.destroy();
      ZP6.destroy();
      ZKINGDOM.destroy();
      line59.destroy();
      line59i.destroy();
      SOUND7.play();
      ST60.visible = true;
      Sline1.visible = true;
      line50.velocityX = -15;
   }

   if(line50.isTouching(line50i)){
    line50.destroy();
    line50i.destroy();
    SOUND7.stop();
    Sline1.destroy();
    Sline2.visible = true;
    line52.velocityX = -16;
 }

 if(line52.isTouching(line52i)){
    line52.destroy();
    line52i.destroy();
    Sline2.destroy();
    Sline3.visible = true;
    line53.velocityX = -13;
}

if(line53.isTouching(line53i)){
   line53.destroy();
   line53i.destroy();
   Sline3.destroy();
   SOUND8.play();
   Sline4.visible = true;
   line54.velocityX = -13;
}

if(line54.isTouching(line54i)){
   line54.destroy();
   line54i.destroy();
   Sline4.destroy();
   SOUND8.stop();
   Sline5.visible = true;
   line55.velocityX = -20;
}

if(line55.isTouching(line55i)){
   line55.destroy();
   line55i.destroy();
   Sline5.destroy();
   SOUND9.play();
   Sline6.visible = true;
   line56.velocityX = -12;
}

if(line56.isTouching(line56i)){
   line56.destroy();
   line56i.destroy();
   SOUND9.stop();
   SOUND10.play();
   ST60.destroy();
   ST61.visible = true;
   Sline6.destroy();
   Sline7.visible = true;
   line57.velocityX = -12;
}

if(line57.isTouching(line57i)){
   line57.destroy();
   line57i.destroy();
   SOUND11.play();
   ST61.destroy();
   ST62.visible = true;
   line60.velocityX = -11;
}

if(line60.isTouching(line60i)){
   line60.destroy();
   line60i.destroy();
   ST62.destroy();
   SOUND11.stop();
   SOUND12.play();
   a.velocityX = -12;
   ST63.visible = true;
   Sline7.destroy();
}

if(a.isTouching(ai)){
   a.destroy();
   ai.destroy();
   ZKINGDOM2.visible = true;
   ZEXT1.visible = true;
   b.velocityX = -20;
}

if(b.isTouching(bi)){
  b.destroy();
  bi.destroy();
  ZKINGDOM2.destroy();
  ST63.destroy();
  ST64.visible = true;
  ZEXT1.destroy();
  ZEXT2.visible = true;
  c.velocityX = -13;
}

if(c.isTouching(ci)){
   c.destroy();
   ci.destroy();
   ST64.destroy();
   ST65.visible = true;
   ZEXT2.destroy();
   ZEXT3.visible = true;
   d.velocityX = -13;
}

if(d.isTouching(di)){
   d.destroy();
   di.destroy();
   ST65.destroy();
   ST66.visible = true;
   ZEXT3.destroy();
   ZEXT4.visible = true;
   e.velocityX = -13;
}

if(e.isTouching(ei)){
   e.destroy();
   ei.destroy();
   ST66.destroy();
   ST67.visible = true;
   ZEXT4.destroy();
   ZEXT5.visible = true;
   f.velocityX = -13;
}

if(f.isTouching(fi)){
   f.destroy();
   fi.destroy();
   ST67.destroy();
   ST68.visible = true;
   ZEXT5.destroy();
   ZEXT6.visible = true;
   g.velocityX = -13;
}

if(g.isTouching(gi)){
   g.destroy();
   gi.destroy();
   ST68.destroy();
   ST69.visible = true;
   ZEXT6.destroy();
   ZEXT7.visible = true;
   h.velocityX = -13;
}

if(h.isTouching(hi)){
   h.destroy();
   hi.destroy();
   ST69.destroy();
   ST70.visible = true;
   ZEXT7.destroy();
   ZEXT8.visible = true;
   i.velocityX = -13;
}

if(i.isTouching(ii)){
   i.destroy();
   ii.destroy();
   ST70.destroy();
   ST71.visible = true;
   ZEXT8.destroy();
   ZEXT9.visible = true;
   j.velocityX = -13;
}

if(j.isTouching(ji)){
   j.destroy();
   ji.destroy();
   ST71.destroy();
   ST72.visible = true;
   ZEXT9.destroy();
   ZEXT10.visible = true;
   k.velocityX = -13;
}

if(k.isTouching(ki)){
   k.destroy();
   ki.destroy();
   ST72.destroy();
   ST73.visible = true;
   ZEXT10.destroy();
   ZEXT11.visible = true;
   l.velocityX = -13;
}

if(l.isTouching(li)){
   l.destroy();
   li.destroy();
   ST73.destroy();
   ST74.visible = true;
   ZEXT11.destroy();
   ZEXT12.visible = true;
   m.velocityX = -13;
}

if(m.isTouching(mi)){
   m.destroy();
   mi.destroy();
   ST74.destroy();
   ST75.visible = true;
   ZEXT12.destroy();
   m2.velocityX = -12;
}

if(m2.isTouching(m2i)){
   m2.destroy();
   m2i.destroy();
   ST75.destroy();
   FINISH.visible = true;
}

}

}












function spawnLightning3(){
  if(frameCount%120 === 0){
   var Lightning3 = createSprite(width,height/2);
   Lightning3.addAnimation("Thunder2",Lightning);
   Lightning3.scale = 1;
   Lightning3.visible = true;
   Lightning3.velocityX = -12;
   Lightning3.y = Math.round(random(height/2-600,height-200));
   Lightning3.lifetime = width/9;
   Lightning3Group.add(Lightning3);
   Save.depth = Thunder2.depth+1;
   Save.depth = Thunder3.depth+1;
   Save.depth = Thunder4.depth+1;
   Save.depth = line3p.depth+1;
  }

}

function spawnCoins(){
   if(frameCount%170 === 0){
    var Coin = createSprite(width,height/2);
    Coin.addAnimation("coins",COIN);
    Coin.scale = 0.7;
    Coin.visible = true;
    Sun.depth = GoodWolf.depth+1;
    GH.depth = Coin.depth + 1;
    FH.depth = Coin.depth + 1;
    EH.depth = Coin.depth + 1;
    HH.depth = Coin.depth + 1;
    GZ.depth = Coin.depth + 1;
    TS.depth = Coin.depth + 1;
    RD.depth = Coin.depth + 1;
    GZ2.depth = Coin.depth + 1;
    TS2.depth = Coin.depth + 1;
    RD2.depth = Coin.depth + 1;
    GZi.depth = Coin.depth + 1;
    TSi.depth = Coin.depth + 1;
    RDi.depth = Coin.depth + 1;
    GZ2i.depth = Coin.depth + 1;
    TS2i.depth = Coin.depth + 1;
    RD2i.depth = Coin.depth + 1;
    FH2.depth = Coin.depth + 1;
    II.depth = Coin.depth + 1;
    ZP.depth = Coin.depth + 1;
    line3p.depth = Meteor.depth+1;
    line3p.depth = GH.depth + 1;
    line3p.depth = FH.depth + 1;
    line3p.depth = EH.depth + 1;
    line3p.depth = HH.depth + 1;
    line3p.depth = GZ.depth + 1;
    line3p.depth = TS.depth + 1;
    line3p.depth = RD.depth + 1;
    line3p.depth = GZ2.depth + 1;
    line3p.depth = TS2.depth + 1;
    line3p.depth = RD2.depth + 1;
    line3p.depth = FH2.depth + 1;
    line3p.depth = II.depth + 1;
    line3p.depth = ZP.depth + 1;
    Meteor.depth = Coin.depth + 1;
    BLAST2.depth = Coin.depth + 1;
    BLAST3.depth = Coin.depth + 1;
    Message.depth = Coin.depth + 1;
    Message7.depth = Coin.depth + 1;
    surprisebox.depth = Coin.depth + 1;
    surprisebox2.depth = Coin.depth + 1;
    surprisebox3.depth = Coin.depth + 1;
    HotAirBalloons.depth = Coin.depth + 1;
    HELL.depth = Coin.depth + 1;
    THE.depth = Coin.depth + 1;
    RISING.depth = Coin.depth + 1;
    RISING2.depth = Coin.depth + 1;
    RETRY.depth = Coin.depth + 1;
    K1.depth = Coin.depth + 1;
    K2.depth = Coin.depth + 1;
    K3.depth = Coin.depth + 1;
    K4.depth = Coin.depth + 1;
    K5.depth = Coin.depth + 1;
    K6.depth = Coin.depth + 1;
    Thunder.depth = Coin.depth + 1;
    Thunder2.depth = Coin.depth + 1;
    Thunder3.depth = Coin.depth + 1;
    Thunder4.depth = Coin.depth + 1;
    Thunder.depth = K1.depth + 1;
    Thunder2.depth = K1.depth + 1;
    Thunder3.depth = K1.depth + 1;
    Thunder4.depth = K1.depth + 1;

    Thunder.depth = K2.depth + 1;
    Thunder2.depth = K2.depth + 1;
    Thunder3.depth = K2.depth + 1;
    Thunder4.depth = K2.depth + 1;

    Thunder.depth = K3.depth + 1;
    Thunder2.depth = K3.depth + 1;
    Thunder3.depth = K3.depth + 1;
    Thunder4.depth = K3.depth + 1;

    Thunder.depth = K4.depth + 1;
    Thunder2.depth = K4.depth + 1;
    Thunder3.depth = K4.depth + 1;
    Thunder4.depth = K4.depth + 1;

    Thunder.depth = K5.depth + 1;
    Thunder2.depth = K5.depth + 1;
    Thunder3.depth = K5.depth + 1;
    Thunder4.depth = K5.depth + 1;

    Thunder.depth = K6.depth + 1;
    Thunder2.depth = K6.depth + 1;
    Thunder3.depth = K6.depth + 1;
    Thunder4.depth = K6.depth + 1;

    line3p.depth = Thunder.depth + 1;
    line3p.depth = Thunder2.depth + 1;
    line3p.depth = Thunder3.depth + 1;
    line3p.depth = Thunder4.depth + 1;

    Thunder.depth = GZi.depth + 1;
    Thunder2.depth = GZi.depth + 1;
    Thunder3.depth = GZi.depth + 1;
    Thunder4.depth = GZi.depth + 1;

    Thunder.depth = GZ2i.depth + 1;
    Thunder2.depth = GZ2i.depth + 1;
    Thunder3.depth = GZ2i.depth + 1;
    Thunder4.depth = GZ2i.depth + 1;

    Thunder.depth = TSi.depth + 1;
    Thunder2.depth = TSi.depth + 1;
    Thunder3.depth = TSi.depth + 1;
    Thunder4.depth = TSi.depth + 1;

    Thunder.depth = TS2i.depth + 1;
    Thunder2.depth = TS2i.depth + 1;
    Thunder3.depth = TS2i.depth + 1;
    Thunder4.depth = TS2i.depth + 1;

    Thunder.depth = RDi.depth + 1;
    Thunder2.depth = RDi.depth + 1;
    Thunder3.depth = RDi.depth + 1;
    Thunder4.depth = RDi.depth + 1;

    Thunder.depth = RD2i.depth + 1;
    Thunder2.depth = RD2i.depth + 1;
    Thunder3.depth = RD2i.depth + 1;
    Thunder4.depth = RD2i.depth + 1;

    Sun.depth = GZi.depth+1;
    Sun.depth = GZ2i.depth+1;
    Sun.depth = RDi.depth+1;
    Sun.depth = RD2i.depth+1;
    Sun.depth = TSi.depth+1;
    Sun.depth = TS2i.depth+1;
    Sun.depth = Refilei.depth+1;
    Sun.depth = Refile2i.depth+1;
    Sun.depth = Refile3i.depth+1;
    Sun.depth = Refile4i.depth+1;
    Sun.depth = Refile5i.depth+1;
    Sun.depth = Refile6i.depth+1;
    Sun.depth = Refile7i.depth+1;
    Sun.depth = Refile8i.depth+1;
    Sun.depth = GoodWolf.depth+1;
    Sun.depth = LEVEL1.depth+1;
    Sun.depth = LEVEL1i.depth+1;
    Sun.depth = LEVEL2i.depth+1;
    Save.depth = Thunder2.depth+1;
    Save.depth = Thunder3.depth+1;
    Save.depth = Thunder4.depth+1;
    Save.depth = line3p.depth+1;
    Coin.velocityX = -12;
    Coin.y = Math.round(random(height/2-200,height-150));

    Coin.lifetime = width/9;

    CoinsGroup.add(Coin);
   }

}

function spawnCoinBox(){
  if(frameCount%500 === 0){
     var CoinBOX = createSprite(width,height/2);
     CoinBOX.addImage(CoinBox);
     CoinBOX.scale = 0.27;
     CoinBOX.visible = true;
     Sun.depth = GoodWolf.depth+1;
     GH.depth = CoinBOX.depth + 1;
     FH.depth = CoinBOX.depth + 1;
     EH.depth = CoinBOX.depth + 1;
     HH.depth = CoinBOX.depth + 1;
     GZ.depth = CoinBOX.depth + 1;
     TS.depth = CoinBOX.depth + 1;
     RD.depth = CoinBOX.depth + 1;
     GZ2.depth = CoinBOX.depth + 1;
     TS2.depth = CoinBOX.depth + 1;
     RD2.depth = CoinBOX.depth + 1;
     GZi.depth = CoinBOX.depth + 1;
     TSi.depth = CoinBOX.depth + 1;
     RDi.depth = CoinBOX.depth + 1;
     GZ2i.depth = CoinBOX.depth + 1;
     TS2i.depth = CoinBOX.depth + 1;
     RD2i.depth = CoinBOX.depth + 1;
     FH2.depth = CoinBOX.depth + 1;
     II.depth = CoinBOX.depth + 1;
     ZP.depth = CoinBOX.depth + 1;
     line3p.depth = Meteor.depth+1;
     line3p.depth = GH.depth + 1;
     line3p.depth = FH.depth + 1;
     line3p.depth = EH.depth + 1;
     line3p.depth = HH.depth + 1;
     line3p.depth = GZ.depth + 1;
     line3p.depth = TS.depth + 1;
     line3p.depth = RD.depth + 1;
     line3p.depth = GZ2.depth + 1;
     line3p.depth = TS2.depth + 1;
     line3p.depth = RD2.depth + 1;
     line3p.depth = FH2.depth + 1;
     line3p.depth = II.depth + 1;
     line3p.depth = ZP.depth + 1;
     Meteor.depth = CoinBOX.depth + 1;
     BLAST2.depth = CoinBOX.depth + 1;
     BLAST3.depth = CoinBOX.depth + 1;
     Message.depth = CoinBOX.depth + 1;
     Message7.depth = CoinBOX.depth + 1;
     surprisebox.depth = CoinBOX.depth + 1;
     surprisebox2.depth = CoinBOX.depth + 1;
     surprisebox3.depth = CoinBOX.depth + 1;
     HotAirBalloons.depth = CoinBOX.depth + 1;
     HELL.depth = CoinBOX.depth + 1;
     THE.depth = CoinBOX.depth + 1;
     RISING.depth = CoinBOX.depth + 1;
     RISING2.depth = CoinBOX.depth + 1;
     RETRY.depth = CoinBOX.depth + 1;
     K1.depth = CoinBOX.depth + 1;
     K2.depth = CoinBOX.depth + 1;
     K3.depth = CoinBOX.depth + 1;
     K4.depth = CoinBOX.depth + 1;
     K5.depth = CoinBOX.depth + 1;
     K6.depth = CoinBOX.depth + 1;
     Thunder.depth = CoinBOX.depth + 1;
     Thunder2.depth = CoinBOX.depth + 1;
     Thunder3.depth = CoinBOX.depth + 1;
     Thunder4.depth = CoinBOX.depth + 1;
     Thunder.depth = K1.depth + 1;
     Thunder2.depth = K1.depth + 1;
     Thunder3.depth = K1.depth + 1;
     Thunder4.depth = K1.depth + 1;

     Thunder.depth = K2.depth + 1;
     Thunder2.depth = K2.depth + 1;
     Thunder3.depth = K2.depth + 1;
     Thunder4.depth = K2.depth + 1;

     Thunder.depth = K3.depth + 1;
     Thunder2.depth = K3.depth + 1;
     Thunder3.depth = K3.depth + 1;
     Thunder4.depth = K3.depth + 1;

     Thunder.depth = K4.depth + 1;
     Thunder2.depth = K4.depth + 1;
     Thunder3.depth = K4.depth + 1;
     Thunder4.depth = K4.depth + 1;

     Thunder.depth = K5.depth + 1;
     Thunder2.depth = K5.depth + 1;
     Thunder3.depth = K5.depth + 1;
     Thunder4.depth = K5.depth + 1;

     Thunder.depth = K6.depth + 1;
     Thunder2.depth = K6.depth + 1;
     Thunder3.depth = K6.depth + 1;
     Thunder4.depth = K6.depth + 1;

     line3p.depth = Thunder.depth + 1;
     line3p.depth = Thunder2.depth + 1;
     line3p.depth = Thunder3.depth + 1;
     line3p.depth = Thunder4.depth + 1;

     Thunder.depth = GZi.depth + 1;
     Thunder2.depth = GZi.depth + 1;
     Thunder3.depth = GZi.depth + 1;
     Thunder4.depth = GZi.depth + 1;

     Thunder.depth = GZ2i.depth + 1;
     Thunder2.depth = GZ2i.depth + 1;
     Thunder3.depth = GZ2i.depth + 1;
     Thunder4.depth = GZ2i.depth + 1;

     Thunder.depth = TSi.depth + 1;
     Thunder2.depth = TSi.depth + 1;
     Thunder3.depth = TSi.depth + 1;
     Thunder4.depth = TSi.depth + 1;

     Thunder.depth = TS2i.depth + 1;
     Thunder2.depth = TS2i.depth + 1;
     Thunder3.depth = TS2i.depth + 1;
     Thunder4.depth = TS2i.depth + 1;

     Thunder.depth = RDi.depth + 1;
     Thunder2.depth = RDi.depth + 1;
     Thunder3.depth = RDi.depth + 1;
     Thunder4.depth = RDi.depth + 1;

     Thunder.depth = RD2i.depth + 1;
     Thunder2.depth = RD2i.depth + 1;
     Thunder3.depth = RD2i.depth + 1;
     Thunder4.depth = RD2i.depth + 1;

     Sun.depth = GZi.depth+1;
    Sun.depth = GZ2i.depth+1;
    Sun.depth = RDi.depth+1;
    Sun.depth = RD2i.depth+1;
    Sun.depth = TSi.depth+1;
    Sun.depth = TS2i.depth+1;
    Sun.depth = Refilei.depth+1;
    Sun.depth = Refile2i.depth+1;
    Sun.depth = Refile3i.depth+1;
    Sun.depth = Refile4i.depth+1;
    Sun.depth = Refile5i.depth+1;
    Sun.depth = Refile6i.depth+1;
    Sun.depth = Refile7i.depth+1;
    Sun.depth = Refile8i.depth+1;
    Sun.depth = GoodWolf.depth+1;
    Sun.depth = LEVEL1.depth+1;
    Sun.depth = LEVEL1i.depth+1;
    Sun.depth = LEVEL2i.depth+1;
    Save.depth = Thunder2.depth+1;
    Save.depth = Thunder3.depth+1;
    Save.depth = Thunder4.depth+1;
    Save.depth = line3p.depth+1;
     CoinBOX.velocityX = -12;
     CoinBOX.y = Math.round(random(height/2-300,height-180));

     CoinBOX.lifetime = width/9;

     CoinBOXGroup.add(CoinBOX);
  }

}

function spawnCoinBox2(){
  if(frameCount%600 === 0){
   var CoinBOX2 = createSprite(width,height/2);
   CoinBOX2.addImage(CoinBox);
   CoinBOX2.scale = 0.27;
   CoinBOX2.visible = true;
   Sun.depth = GoodWolf.depth+1;
   GH.depth = CoinBOX2.depth + 1;
   FH.depth = CoinBOX2.depth + 1;
   EH.depth = CoinBOX2.depth + 1;
   HH.depth = CoinBOX2.depth + 1;
   GZ.depth = CoinBOX2.depth + 1;
   TS.depth = CoinBOX2.depth + 1;
   RD.depth = CoinBOX2.depth + 1;
   GZ2.depth = CoinBOX2.depth + 1;
   TS2.depth = CoinBOX2.depth + 1;
   RD2.depth = CoinBOX2.depth + 1;
   GZi.depth = CoinBOX2.depth + 1;
   TSi.depth = CoinBOX2.depth + 1;
   RDi.depth = CoinBOX2.depth + 1;
   GZ2i.depth = CoinBOX2.depth + 1;
   TS2i.depth = CoinBOX2.depth + 1;
   RD2i.depth = CoinBOX2.depth + 1;
   FH2.depth = CoinBOX2.depth + 1;
   II.depth = CoinBOX2.depth + 1;
   ZP.depth = CoinBOX2.depth + 1;
   line3p.depth = Meteor.depth+1;
   line3p.depth = GH.depth + 1;
   line3p.depth = FH.depth + 1;
   line3p.depth = EH.depth + 1;
   line3p.depth = HH.depth + 1;
   line3p.depth = GZ.depth + 1;
   line3p.depth = TS.depth + 1;
   line3p.depth = RD.depth + 1;
   line3p.depth = GZ2.depth + 1;
   line3p.depth = TS2.depth + 1;
   line3p.depth = RD2.depth + 1;
   line3p.depth = FH2.depth + 1;
   line3p.depth = II.depth + 1;
   line3p.depth = ZP.depth + 1;
   Meteor.depth = CoinBOX2.depth + 1;
   BLAST2.depth = CoinBOX2.depth + 1;
   BLAST3.depth = CoinBOX2.depth + 1;
   Message.depth = CoinBOX2.depth + 1;
   Message7.depth = CoinBOX2.depth + 1;
   surprisebox.depth = CoinBOX2.depth + 1;
   surprisebox2.depth = CoinBOX2.depth + 1;
   surprisebox3.depth = CoinBOX2.depth + 1;
   HotAirBalloons.depth = CoinBOX2.depth + 1;
   HELL.depth = CoinBOX2.depth + 1;
   THE.depth = CoinBOX2.depth + 1;
   RISING.depth = CoinBOX2.depth + 1;
   RISING2.depth = CoinBOX2.depth + 1;
   RETRY.depth = CoinBOX2.depth + 1;
   K1.depth = CoinBOX2.depth + 1;
   K2.depth = CoinBOX2.depth + 1;
   K3.depth = CoinBOX2.depth + 1;
   K4.depth = CoinBOX2.depth + 1;
   K5.depth = CoinBOX2.depth + 1;
   K6.depth = CoinBOX2.depth + 1;
   Thunder.depth = K1.depth + 1;
   Thunder2.depth = K1.depth + 1;
   Thunder3.depth = K1.depth + 1;
   Thunder4.depth = K1.depth + 1;

   Thunder.depth = K2.depth + 1;
   Thunder2.depth = K2.depth + 1;
   Thunder3.depth = K2.depth + 1;
   Thunder4.depth = K2.depth + 1;

   Thunder.depth = K3.depth + 1;
   Thunder2.depth = K3.depth + 1;
   Thunder3.depth = K3.depth + 1;
   Thunder4.depth = K3.depth + 1;

   Thunder.depth = K4.depth + 1;
   Thunder2.depth = K4.depth + 1;
   Thunder3.depth = K4.depth + 1;
   Thunder4.depth = K4.depth + 1;

   Thunder.depth = K5.depth + 1;
   Thunder2.depth = K5.depth + 1;
   Thunder3.depth = K5.depth + 1;
   Thunder4.depth = K5.depth + 1;

   Thunder.depth = K6.depth + 1;
   Thunder2.depth = K6.depth + 1;
   Thunder3.depth = K6.depth + 1;
   Thunder4.depth = K6.depth + 1;

   line3p.depth = Thunder.depth + 1;
   line3p.depth = Thunder2.depth + 1;
   line3p.depth = Thunder3.depth + 1;
   line3p.depth = Thunder4.depth + 1;

   Thunder.depth = GZi.depth + 1;
   Thunder2.depth = GZi.depth + 1;
   Thunder3.depth = GZi.depth + 1;
   Thunder4.depth = GZi.depth + 1;

   Thunder.depth = GZ2i.depth + 1;
   Thunder2.depth = GZ2i.depth + 1;
   Thunder3.depth = GZ2i.depth + 1;
   Thunder4.depth = GZ2i.depth + 1;

   Thunder.depth = TSi.depth + 1;
   Thunder2.depth = TSi.depth + 1;
   Thunder3.depth = TSi.depth + 1;
   Thunder4.depth = TSi.depth + 1;

   Thunder.depth = TS2i.depth + 1;
   Thunder2.depth = TS2i.depth + 1;
   Thunder3.depth = TS2i.depth + 1;
   Thunder4.depth = TS2i.depth + 1;

   Thunder.depth = RDi.depth + 1;
   Thunder2.depth = RDi.depth + 1;
   Thunder3.depth = RDi.depth + 1;
   Thunder4.depth = RDi.depth + 1;

   Thunder.depth = RD2i.depth + 1;
   Thunder2.depth = RD2i.depth + 1;
   Thunder3.depth = RD2i.depth + 1;
   Thunder4.depth = RD2i.depth + 1;

   Thunder.depth = CoinBOX2.depth + 1;
   Thunder2.depth = CoinBOX2.depth + 1;
   Thunder3.depth = CoinBOX2.depth + 1;
   Thunder4.depth = CoinBOX2.depth + 1;
   Thunder.depth = GoodWolf.depth + 1;
   Thunder2.depth = GoodWolf.depth + 1;
   Thunder3.depth = GoodWolf.depth + 1;
   Thunder4.depth = GoodWolf.depth + 1;

   Sun.depth = GZi.depth+1;
    Sun.depth = GZ2i.depth+1;
    Sun.depth = RDi.depth+1;
    Sun.depth = RD2i.depth+1;
    Sun.depth = TSi.depth+1;
    Sun.depth = TS2i.depth+1;
    Sun.depth = Refilei.depth+1;
    Sun.depth = Refile2i.depth+1;
    Sun.depth = Refile3i.depth+1;
    Sun.depth = Refile4i.depth+1;
    Sun.depth = Refile5i.depth+1;
    Sun.depth = Refile6i.depth+1;
    Sun.depth = Refile7i.depth+1;
    Sun.depth = Refile8i.depth+1;
    Sun.depth = GoodWolf.depth+1;
    Sun.depth = LEVEL1.depth+1;
    Sun.depth = LEVEL1i.depth+1;
    Sun.depth = LEVEL2i.depth+1;
    Save.depth = Thunder2.depth+1;
    Save.depth = Thunder3.depth+1;
    Save.depth = Thunder4.depth+1;
    Save.depth = line3p.depth+1;
   CoinBOX2.velocityX = -12;
   CoinBOX2.y = Math.round(random(height/2-300,height-180));

   CoinBOX2.lifetime = width/9;

   CoinBOX2Group.add(CoinBOX2);
  }

}

function spawnAlert(){
  if(frameCount%850 === 0){
   var Alert = createSprite(width,height/2);
   Alert.addImage(Ii2);
   Alert.scale = 0.09;
   Alert.visible = true;
   GH.depth = Alert.depth + 1;
   FH.depth = Alert.depth + 1;
   EH.depth = Alert.depth + 1;
   HH.depth = Alert.depth + 1;
   GZ.depth = Alert.depth + 1;
   TS.depth = Alert.depth + 1;
   RD.depth = Alert.depth + 1;
   GZ2.depth = Alert.depth + 1;
   TS2.depth = Alert.depth + 1;
   RD2.depth = Alert.depth + 1;
   GZi.depth = Alert.depth + 1;
   TSi.depth = Alert.depth + 1;
   RDi.depth = Alert.depth + 1;
   GZ2i.depth = Alert.depth + 1;
   TS2i.depth = Alert.depth + 1;
   RD2i.depth = Alert.depth + 1;
   FH2.depth = Alert.depth + 1;
   II.depth = Alert.depth + 1;
   ZP.depth = Alert.depth + 1;
   Meteor.depth = Alert.depth + 1;
   BLAST2.depth = Alert.depth + 1;
   BLAST3.depth = Alert.depth + 1;
   Message.depth = Alert.depth + 1;
   surprisebox.depth = Alert.depth + 1;
   surprisebox2.depth = Alert.depth + 1;
   surprisebox3.depth = Alert.depth + 1;
   Message7.depth = Alert.depth + 1;
   HotAirBalloons.depth = Alert.depth + 1;
   HELL.depth = Alert.depth + 1;
   THE.depth = Alert.depth + 1;
   RISING.depth = Alert.depth + 1;
   RISING2.depth = Alert.depth + 1;
   RETRY.depth = Alert.depth + 1;
   K1.depth = Alert.depth + 1;
   K2.depth = Alert.depth + 1;
   K3.depth = Alert.depth + 1;
   K4.depth = Alert.depth + 1;
   K5.depth = Alert.depth + 1;
   K6.depth = Alert.depth + 1;
   Thunder.depth = Alert.depth + 1;
   Thunder2.depth = Alert.depth + 1;
   Thunder3.depth = Alert.depth + 1;
   Thunder4.depth = Alert.depth + 1;
   Thunder.depth = K1.depth + 1;
   Thunder2.depth = K1.depth + 1;
   Thunder3.depth = K1.depth + 1;
   Thunder4.depth = K1.depth + 1;

   Thunder.depth = K2.depth + 1;
   Thunder2.depth = K2.depth + 1;
   Thunder3.depth = K2.depth + 1;
   Thunder4.depth = K2.depth + 1;

   Thunder.depth = K3.depth + 1;
   Thunder2.depth = K3.depth + 1;
   Thunder3.depth = K3.depth + 1;
   Thunder4.depth = K3.depth + 1;

   Thunder.depth = K4.depth + 1;
   Thunder2.depth = K4.depth + 1;
   Thunder3.depth = K4.depth + 1;
   Thunder4.depth = K4.depth + 1;

   Thunder.depth = K5.depth + 1;
   Thunder2.depth = K5.depth + 1;
   Thunder3.depth = K5.depth + 1;
   Thunder4.depth = K5.depth + 1;

   Thunder.depth = K6.depth + 1;
   Thunder2.depth = K6.depth + 1;
   Thunder3.depth = K6.depth + 1;
   Thunder4.depth = K6.depth + 1;

   line3p.depth = Thunder.depth + 1;
   line3p.depth = Thunder2.depth + 1;
   line3p.depth = Thunder3.depth + 1;
   line3p.depth = Thunder4.depth + 1;

   Thunder.depth = GZi.depth + 1;
   Thunder2.depth = GZi.depth + 1;
   Thunder3.depth = GZi.depth + 1;
   Thunder4.depth = GZi.depth + 1;

   Thunder.depth = GZ2i.depth + 1;
   Thunder2.depth = GZ2i.depth + 1;
   Thunder3.depth = GZ2i.depth + 1;
   Thunder4.depth = GZ2i.depth + 1;

   Thunder.depth = TSi.depth + 1;
   Thunder2.depth = TSi.depth + 1;
   Thunder3.depth = TSi.depth + 1;
   Thunder4.depth = TSi.depth + 1;

   Thunder.depth = TS2i.depth + 1;
   Thunder2.depth = TS2i.depth + 1;
   Thunder3.depth = TS2i.depth + 1;
   Thunder4.depth = TS2i.depth + 1;

   Thunder.depth = RDi.depth + 1;
   Thunder2.depth = RDi.depth + 1;
   Thunder3.depth = RDi.depth + 1;
   Thunder4.depth = RDi.depth + 1;

   Thunder.depth = RD2i.depth + 1;
   Thunder2.depth = RD2i.depth + 1;
   Thunder3.depth = RD2i.depth + 1;
   Thunder4.depth = RD2i.depth + 1;

   Sun.depth = GZi.depth+1;
    Sun.depth = GZ2i.depth+1;
    Sun.depth = RDi.depth+1;
    Sun.depth = RD2i.depth+1;
    Sun.depth = TSi.depth+1;
    Sun.depth = TS2i.depth+1;
    Sun.depth = Refilei.depth+1;
    Sun.depth = Refile2i.depth+1;
    Sun.depth = Refile3i.depth+1;
    Sun.depth = Refile4i.depth+1;
    Sun.depth = Refile5i.depth+1;
    Sun.depth = Refile6i.depth+1;
    Sun.depth = Refile7i.depth+1;
    Sun.depth = Refile8i.depth+1;
    Sun.depth = GoodWolf.depth+1;
    Sun.depth = LEVEL1.depth+1;
    Sun.depth = LEVEL1i.depth+1;
    Sun.depth = LEVEL2i.depth+1;
    Save.depth = Thunder2.depth+1;
    Save.depth = Thunder3.depth+1;
    Save.depth = Thunder4.depth+1;
    Save.depth = line3p.depth+1;
   Alert.velocityX = -12;
   Alert.y = Math.round(random(height/2-300,height-180));

   Alert.lifetime = width/9;

   AlertGroup.add(Alert);
  }

}

function spawnAlert2(){
  if(frameCount%1000 === 0){
   var Alert2 = createSprite(width,height/2);
   Alert2.addImage(Ii2);
   Alert2.scale = 0.09;
   Alert2.visible = true;
   GH.depth = Alert2.depth + 1;
   FH.depth = Alert2.depth + 1;
   EH.depth = Alert2.depth + 1;
   HH.depth = Alert2.depth + 1;
   GZ.depth = Alert2.depth + 1;
   TS.depth = Alert2.depth + 1;
   RD.depth = Alert2.depth + 1;
   GZ2.depth = Alert2.depth + 1;
   TS2.depth = Alert2.depth + 1;
   RD2.depth = Alert2.depth + 1;
   GZi.depth = Alert2.depth + 1;
   TSi.depth = Alert2.depth + 1;
   RDi.depth = Alert2.depth + 1;
   GZ2i.depth = Alert2.depth + 1;
   TS2i.depth = Alert2.depth + 1;
   RD2.depth = Alert2.depth + 1;
   FH2.depth = Alert2.depth + 1;
   II.depth = Alert2.depth + 1;
   ZP.depth = Alert2.depth + 1;
   Meteor.depth = Alert2.depth + 1;
   BLAST2.depth = Alert2.depth + 1;
   BLAST3.depth = Alert2.depth + 1;
   Message.depth = Alert2.depth + 1;
   Message7.depth = Alert2.depth + 1;
   surprisebox.depth = Alert2.depth + 1;
   surprisebox2.depth = Alert2.depth + 1;
   surprisebox3.depth = Alert2.depth + 1;
   HotAirBalloons.depth = Alert2.depth + 1;
   HELL.depth = Alert2.depth + 1;
   THE.depth = Alert2.depth + 1;
   RISING.depth = Alert2.depth + 1;
   RISING2.depth = Alert2.depth + 1;
   RETRY.depth = Alert2.depth + 1;
   K1.depth = Alert2.depth + 1;
   K2.depth = Alert2.depth + 1;
   K3.depth = Alert2.depth + 1;
   K4.depth = Alert2.depth + 1;
   K5.depth = Alert2.depth + 1;
   K6.depth = Alert2.depth + 1;
   Thunder.depth = Alert2.depth + 1;
   Thunder2.depth = Alert2.depth + 1;
   Thunder3.depth = Alert2.depth + 1;
   Thunder4.depth = Alert2.depth + 1;
   Thunder.depth = K1.depth + 1;
   Thunder2.depth = K1.depth + 1;
   Thunder3.depth = K1.depth + 1;
   Thunder4.depth = K1.depth + 1;

   Thunder.depth = K2.depth + 1;
   Thunder2.depth = K2.depth + 1;
   Thunder3.depth = K2.depth + 1;
   Thunder4.depth = K2.depth + 1;

   Thunder.depth = K3.depth + 1;
   Thunder2.depth = K3.depth + 1;
   Thunder3.depth = K3.depth + 1;
   Thunder4.depth = K3.depth + 1;

   Thunder.depth = K4.depth + 1;
   Thunder2.depth = K4.depth + 1;
   Thunder3.depth = K4.depth + 1;
   Thunder4.depth = K4.depth + 1;

   Thunder.depth = K5.depth + 1;
   Thunder2.depth = K5.depth + 1;
   Thunder3.depth = K5.depth + 1;
   Thunder4.depth = K5.depth + 1;

   Thunder.depth = K6.depth + 1;
   Thunder2.depth = K6.depth + 1;
   Thunder3.depth = K6.depth + 1;
   Thunder4.depth = K6.depth + 1;

   line3p.depth = Thunder.depth + 1;
   line3p.depth = Thunder2.depth + 1;
   line3p.depth = Thunder3.depth + 1;
   line3p.depth = Thunder4.depth + 1;

   Thunder.depth = GZi.depth + 1;
   Thunder2.depth = GZi.depth + 1;
   Thunder3.depth = GZi.depth + 1;
   Thunder4.depth = GZi.depth + 1;

   Thunder.depth = GZ2i.depth + 1;
   Thunder2.depth = GZ2i.depth + 1;
   Thunder3.depth = GZ2i.depth + 1;
   Thunder4.depth = GZ2i.depth + 1;

   Thunder.depth = TSi.depth + 1;
   Thunder2.depth = TSi.depth + 1;
   Thunder3.depth = TSi.depth + 1;
   Thunder4.depth = TSi.depth + 1;

   Thunder.depth = TS2i.depth + 1;
   Thunder2.depth = TS2i.depth + 1;
   Thunder3.depth = TS2i.depth + 1;
   Thunder4.depth = TS2i.depth + 1;

   Thunder.depth = RDi.depth + 1;
   Thunder2.depth = RDi.depth + 1;
   Thunder3.depth = RDi.depth + 1;
   Thunder4.depth = RDi.depth + 1;

   Thunder.depth = RD2i.depth + 1;
   Thunder2.depth = RD2i.depth + 1;
   Thunder3.depth = RD2i.depth + 1;
   Thunder4.depth = RD2i.depth + 1;

   Sun.depth = GZi.depth+1;
    Sun.depth = GZ2i.depth+1;
    Sun.depth = RDi.depth+1;
    Sun.depth = RD2i.depth+1;
    Sun.depth = TSi.depth+1;
    Sun.depth = TS2i.depth+1;
    Sun.depth = Refilei.depth+1;
    Sun.depth = Refile2i.depth+1;
    Sun.depth = Refile3i.depth+1;
    Sun.depth = Refile4i.depth+1;
    Sun.depth = Refile5i.depth+1;
    Sun.depth = Refile6i.depth+1;
    Sun.depth = Refile7i.depth+1;
    Sun.depth = Refile8i.depth+1;
    Sun.depth = GoodWolf.depth+1;
    Sun.depth = LEVEL1.depth+1;
    Sun.depth = LEVEL1i.depth+1;
    Sun.depth = LEVEL2i.depth+1;
    Save.depth = Thunder2.depth+1;
    Save.depth = Thunder3.depth+1;
    Save.depth = Thunder4.depth+1;
    Save.depth = line3p.depth+1;
   Alert2.velocityX = -12;
   Alert2.y = Math.round(random(height/2-300,height-180));
  
   Alert2.lifetime = width/9;

   Alert2Group.add(Alert2);
  }

}


function spawnEnergy(){
  if(frameCount%550 === 0){
   var Energy = createSprite(width,height/2);
   Energy.addImage(RefileDiamond);
   Energy.scale = 0.09;
   Energy.visible = true;
   GH.depth = Energy.depth + 1;
   FH.depth = Energy.depth + 1;
   EH.depth = Energy.depth + 1;
   HH.depth = Energy.depth + 1;
   GZ.depth = Energy.depth + 1;
   TS.depth = Energy.depth + 1;
   RD.depth = Energy.depth + 1;
   GZ2.depth = Energy.depth + 1;
   TS2.depth = Energy.depth + 1;
   RD2.depth = Energy.depth + 1;
   GZi.depth = Energy.depth + 1;
   TSi.depth = Energy.depth + 1;
   RDi.depth = Energy.depth + 1;
   GZ2i.depth = Energy.depth + 1;
   TS2i.depth = Energy.depth + 1;
   RD2i.depth = Energy.depth + 1;
   FH2.depth = Energy.depth + 1;
   II.depth = Energy.depth + 1;
   ZP.depth = Energy.depth + 1;
   Meteor.depth = Energy.depth + 1;
   BLAST2.depth = Energy.depth + 1;
   BLAST3.depth = Energy.depth + 1;
   Message.depth = Energy.depth + 1;
   surprisebox.depth = Energy.depth + 1;
   surprisebox2.depth = Energy.depth + 1;
   surprisebox3.depth = Energy.depth + 1;
   Message7.depth = Energy.depth + 1;
   HotAirBalloons.depth = Energy.depth + 1;
   HELL.depth = Energy.depth + 1;
   THE.depth = Energy.depth + 1;
   RISING.depth = Energy.depth + 1;
   RISING2.depth = Energy.depth + 1;
   RETRY.depth = Energy.depth + 1;
   K1.depth = Energy.depth + 1;
   K2.depth = Energy.depth + 1;
   K3.depth = Energy.depth + 1;
   K4.depth = Energy.depth + 1;
   K5.depth = Energy.depth + 1;
   K6.depth = Energy.depth + 1;
   Thunder.depth = Energy.depth + 1;
   Thunder2.depth = Energy.depth + 1;
   Thunder3.depth = Energy.depth + 1;
   Thunder4.depth = Energy.depth + 1;
   Thunder.depth = K1.depth + 1;
   Thunder2.depth = K1.depth + 1;
   Thunder3.depth = K1.depth + 1;
   Thunder4.depth = K1.depth + 1;

   Thunder.depth = K2.depth + 1;
   Thunder2.depth = K2.depth + 1;
   Thunder3.depth = K2.depth + 1;
   Thunder4.depth = K2.depth + 1;

   Thunder.depth = K3.depth + 1;
   Thunder2.depth = K3.depth + 1;
   Thunder3.depth = K3.depth + 1;
   Thunder4.depth = K3.depth + 1;

   Thunder.depth = K4.depth + 1;
   Thunder2.depth = K4.depth + 1;
   Thunder3.depth = K4.depth + 1;
   Thunder4.depth = K4.depth + 1;

   Thunder.depth = K5.depth + 1;
   Thunder2.depth = K5.depth + 1;
   Thunder3.depth = K5.depth + 1;
   Thunder4.depth = K5.depth + 1;

   Thunder.depth = K6.depth + 1;
   Thunder2.depth = K6.depth + 1;
   Thunder3.depth = K6.depth + 1;
   Thunder4.depth = K6.depth + 1;

   line3p.depth = Thunder.depth + 1;
   line3p.depth = Thunder2.depth + 1;
   line3p.depth = Thunder3.depth + 1;
   line3p.depth = Thunder4.depth + 1;

   Thunder.depth = GZi.depth + 1;
   Thunder2.depth = GZi.depth + 1;
   Thunder3.depth = GZi.depth + 1;
   Thunder4.depth = GZi.depth + 1;

   Thunder.depth = GZ2i.depth + 1;
   Thunder2.depth = GZ2i.depth + 1;
   Thunder3.depth = GZ2i.depth + 1;
   Thunder4.depth = GZ2i.depth + 1;

   Thunder.depth = TSi.depth + 1;
   Thunder2.depth = TSi.depth + 1;
   Thunder3.depth = TSi.depth + 1;
   Thunder4.depth = TSi.depth + 1;

   Thunder.depth = TS2i.depth + 1;
   Thunder2.depth = TS2i.depth + 1;
   Thunder3.depth = TS2i.depth + 1;
   Thunder4.depth = TS2i.depth + 1;

   Thunder.depth = RDi.depth + 1;
   Thunder2.depth = RDi.depth + 1;
   Thunder3.depth = RDi.depth + 1;
   Thunder4.depth = RDi.depth + 1;

   Thunder.depth = RD2i.depth + 1;
   Thunder2.depth = RD2i.depth + 1;
   Thunder3.depth = RD2i.depth + 1;
   Thunder4.depth = RD2i.depth + 1;

   Sun.depth = GZi.depth+1;
    Sun.depth = GZ2i.depth+1;
    Sun.depth = RDi.depth+1;
    Sun.depth = RD2i.depth+1;
    Sun.depth = TSi.depth+1;
    Sun.depth = TS2i.depth+1;
    Sun.depth = Refilei.depth+1;
    Sun.depth = Refile2i.depth+1;
    Sun.depth = Refile3i.depth+1;
    Sun.depth = Refile4i.depth+1;
    Sun.depth = Refile5i.depth+1;
    Sun.depth = Refile6i.depth+1;
    Sun.depth = Refile7i.depth+1;
    Sun.depth = Refile8i.depth+1;
    Sun.depth = GoodWolf.depth+1;
    Sun.depth = LEVEL1.depth+1;
    Sun.depth = LEVEL1i.depth+1;
    Sun.depth = LEVEL2i.depth+1;
    Save.depth = Thunder2.depth+1;
    Save.depth = Thunder3.depth+1;
    Save.depth = Thunder4.depth+1;
    Save.depth = line3p.depth+1;
   Energy.velocityX = -12;
   Energy.y = Math.round(random(height/2-300,height-180));

   Energy.lifetime = width/9;

   EnergyGroup.add(Energy);
  }

}

function spawnEnergy2(){
  if(frameCount%850 === 0){
   var Energy2 = createSprite(width,height/2);
   Energy2.addImage(RefileDiamond);
   Energy2.scale = 0.09;
   Energy2.visible = true;
   Sun.depth = GoodWolf.depth+1;
   GH.depth = Energy2.depth + 1;
   FH.depth = Energy2.depth + 1;
   EH.depth = Energy2.depth + 1;
   HH.depth = Energy2.depth + 1;
   GZ.depth = Energy2.depth + 1;
   TS.depth = Energy2.depth + 1;
   RD.depth = Energy2.depth + 1;
   GZ2.depth = Energy2.depth + 1;
   TS2.depth = Energy2.depth + 1;
   RD2.depth = Energy2.depth + 1;
   GZi.depth = Energy2.depth + 1;
   TSi.depth = Energy2.depth + 1;
   RDi.depth = Energy2.depth + 1;
   GZ2i.depth = Energy2.depth + 1;
   TS2i.depth = Energy2.depth + 1;
   RD2i.depth = Energy2.depth + 1;
   FH2.depth = Energy2.depth + 1;
   II.depth = Energy2.depth + 1;
   ZP.depth = Energy2.depth + 1;
   Meteor.depth = Energy2.depth + 1;
   BLAST2.depth = Energy2.depth + 1;
   BLAST3.depth = Energy2.depth + 1;
   Message.depth = Energy2.depth + 1;
   surprisebox.depth = Energy2.depth + 1;
   surprisebox2.depth = Energy2.depth + 1;
   surprisebox3.depth = Energy2.depth + 1;
   Message7.depth = Energy2.depth + 1;
   HotAirBalloons.depth = Energy2.depth + 1;
   HELL.depth = Energy2.depth + 1;
   THE.depth = Energy2.depth + 1;
   RISING.depth = Energy2.depth + 1;
   RISING2.depth = Energy2.depth + 1;
   RETRY.depth = Energy2.depth + 1;
   K1.depth = Energy2.depth + 1;
   K2.depth = Energy2.depth + 1;
   K3.depth = Energy2.depth + 1;
   K4.depth = Energy2.depth + 1;
   K5.depth = Energy2.depth + 1;
   K6.depth = Energy2.depth + 1;
   Thunder.depth = Energy2.depth + 1;
   Thunder2.depth = Energy2.depth + 1;
   Thunder3.depth = Energy2.depth + 1;
   Thunder4.depth = Energy2.depth + 1;
   Thunder.depth = K1.depth + 1;
   Thunder2.depth = K1.depth + 1;
   Thunder3.depth = K1.depth + 1;
   Thunder4.depth = K1.depth + 1;

   Thunder.depth = K2.depth + 1;
   Thunder2.depth = K2.depth + 1;
   Thunder3.depth = K2.depth + 1;
   Thunder4.depth = K2.depth + 1;

   Thunder.depth = K3.depth + 1;
   Thunder2.depth = K3.depth + 1;
   Thunder3.depth = K3.depth + 1;
   Thunder4.depth = K3.depth + 1;

   Thunder.depth = K4.depth + 1;
   Thunder2.depth = K4.depth + 1;
   Thunder3.depth = K4.depth + 1;
   Thunder4.depth = K4.depth + 1;

   Thunder.depth = K5.depth + 1;
   Thunder2.depth = K5.depth + 1;
   Thunder3.depth = K5.depth + 1;
   Thunder4.depth = K5.depth + 1;

   Thunder.depth = K6.depth + 1;
   Thunder2.depth = K6.depth + 1;
   Thunder3.depth = K6.depth + 1;
   Thunder4.depth = K6.depth + 1;

   line3p.depth = Thunder.depth + 1;
   line3p.depth = Thunder2.depth + 1;
   line3p.depth = Thunder3.depth + 1;
   line3p.depth = Thunder4.depth + 1;

   Thunder.depth = GZi.depth + 1;
   Thunder2.depth = GZi.depth + 1;
   Thunder3.depth = GZi.depth + 1;
   Thunder4.depth = GZi.depth + 1;

   Thunder.depth = GZ2i.depth + 1;
   Thunder2.depth = GZ2i.depth + 1;
   Thunder3.depth = GZ2i.depth + 1;
   Thunder4.depth = GZ2i.depth + 1;

   Thunder.depth = TSi.depth + 1;
   Thunder2.depth = TSi.depth + 1;
   Thunder3.depth = TSi.depth + 1;
   Thunder4.depth = TSi.depth + 1;

   Thunder.depth = TS2i.depth + 1;
   Thunder2.depth = TS2i.depth + 1;
   Thunder3.depth = TS2i.depth + 1;
   Thunder4.depth = TS2i.depth + 1;

   Thunder.depth = RDi.depth + 1;
   Thunder2.depth = RDi.depth + 1;
   Thunder3.depth = RDi.depth + 1;
   Thunder4.depth = RDi.depth + 1;

   Thunder.depth = RD2i.depth + 1;
   Thunder2.depth = RD2i.depth + 1;
   Thunder3.depth = RD2i.depth + 1;
   Thunder4.depth = RD2i.depth + 1;

   Sun.depth = GZi.depth+1;
    Sun.depth = GZ2i.depth+1;
    Sun.depth = RDi.depth+1;
    Sun.depth = RD2i.depth+1;
    Sun.depth = TSi.depth+1;
    Sun.depth = TS2i.depth+1;
    Sun.depth = Refilei.depth+1;
    Sun.depth = Refile2i.depth+1;
    Sun.depth = Refile3i.depth+1;
    Sun.depth = Refile4i.depth+1;
    Sun.depth = Refile5i.depth+1;
    Sun.depth = Refile6i.depth+1;
    Sun.depth = Refile7i.depth+1;
    Sun.depth = Refile8i.depth+1;
    Sun.depth = GoodWolf.depth+1;
    Sun.depth = LEVEL1.depth+1;
    Sun.depth = LEVEL1i.depth+1;
    Sun.depth = LEVEL2i.depth+1;
    Save.depth = Thunder2.depth+1;
    Save.depth = Thunder3.depth+1;
    Save.depth = Thunder4.depth+1;
    Save.depth = line3p.depth+1;
   Energy2.velocityX = -12;
   Energy2.y = Math.round(random(height/2-300,height-180));

   Energy2.lifetime = width/9;

   Energy2Group.add(Energy2);
  }

}



function retry(){
  score = 0;
  gameState = "storyTelling";
  HELL.destroy();
  THE.destroy();
  RISING.destroy();
  RISING2.destroy();
  RETRY.destroy();
  RETRY.destroy();

  //Music For Background
  BGSound.loop();
  
  //Creating Sprite For Background(Black)
  BG = createSprite(windowWidth,windowHeight);
  BG.addImage(StoryBG);
  BG.scale = 1000;

  //Creating Sprite For Game Main Logo
  gameLogo = createSprite(displayHeight/2+290,displayWidth/2-320,width,50);
  gameLogo.addImage(GameLogo);
  gameLogo.scale = 0.8;

  //Creating Sprite For Gaming Background
  Bg = createSprite(width/2,height-660);
  Bg.addImage(BG3);
  Bg.scale = 1;
  Bg.visible = false; 
  Bg.velocityX = -20;

  Bg3 = createSprite(width/2,height-1105);
  Bg3.addImage(BG5);
  Bg3.scale = 1;
  Bg3.visible = false; 
  //Bg3.velocityX = 0;

  //Creating Sprite For Zomi Land Background
  Bg2 = createSprite(width/1,height-500);
  Bg2.addImage(BG4);
  Bg2.scale = 0.500;
  Bg2.visible = false; 

  //Creating Sprites For StoryLine Appearings 
  line2 = createSprite(height/2+1300,width/2-280,10,90000);
  line2.velocityX = -22;
  line2.visible = false;

  l2 = createSprite(height/2-400,width/2-280,10,90000);
  l2.visible = false;

  line3 = createSprite(height/2+1300,width/2-280,10,90000);
  line3.velocityX = 0;
  line3.visible = false;

  l3 = createSprite(height/2-400,width/2-280,10,90000);
  l3.visible = false;

  line4 = createSprite(height/2+1300,width/2-280,10,90000);
  line4.velocityX = 0;
  line4.visible = false;

  l4 = createSprite(height/2-400,width/2-280,10,90000);
  l4.visible = false;

  line5 = createSprite(height/2+1300,width/2-280,10,90000);
  line5.velocityX = 0;
  line5.visible = false;

  l5 = createSprite(height/2-400,width/2-280,10,90000);
  l5.visible = false;

  line6 = createSprite(height/2+1300,width/2-280,10,90000);
  line6.velocityX = 0;
  line6.visible = false;

  l6 = createSprite(height/2-400,width/2-280,10,90000);
  l6.visible = false;

  line7 = createSprite(height/2+1300,width/2-280,10,90000);
  line7.velocityX = 0;
  line7.visible = false;

  l7 = createSprite(height/2-400,width/2-280,10,90000);
  l7.visible = false;

  line8 = createSprite(height/2+1300,width/2-280,10,90000);
  line8.velocityX = 0;
  line8.visible = false;

  l8 = createSprite(height/2-400,width/2-280,10,90000);
  l8.visible = false;

  line9 = createSprite(height/2+1300,width/2-280,10,90000);
  line9.velocityX = 0;
  line9.visible = false;

  l9 = createSprite(height/2-400,width/2-280,10,90000);
  l9.visible = false;

  line10 = createSprite(height/2+1300,width/2-280,10,90000);
  line10.velocityX = 0;
  line10.visible = false;

  l10 = createSprite(height/2-400,width/2-280,10,90000);
  l10.visible = false;
   
  line11 = createSprite(height/2+1300,width/2-280,10,90000);
  line11.velocityX = 0;
  line11.visible = false;

  l11 = createSprite(height/2-400,width/2-280,10,90000);
  l11.visible = false;

  line12 = createSprite(height/2+1300,width/2-280,10,90000);
  line12.velocityX = 0;
  line12.visible = false;

  l12 = createSprite(height/2-400,width/2-280,10,90000);
  l12.visible = false;

  line13 = createSprite(height/2+1300,width/2-280,10,90000);
  line13.velocityX = 0;
  line13.visible = false;

  l13 = createSprite(height/2-400,width/2-280,10,90000);
  l13.visible = false;

  line14 = createSprite(height/2+1300,width/2-280,10,90000);
  line14.velocityX = 0;
  line14.visible = false;

  l14 = createSprite(height/2-400,width/2-280,10,90000);
  l14.visible = false;

  line15 = createSprite(height/2+1300,width/2-280,10,90000);
  line15.velocityX = 0;
  line15.visible = false;

  l15 = createSprite(height/2-400,width/2-280,10,90000);
  l15.visible = false;

  line16 = createSprite(height/2+1300,width/2-280,10,90000);
  line16.velocityX = 0;
  line16.visible = false;

  l16 = createSprite(height/2-400,width/2-280,10,90000);
  l16.visible = false;

  line17 = createSprite(height/2+1300,width/2-280,10,90000);
  line17.velocityX = 0;
  line17.visible = false;

  l17 = createSprite(height/2-400,width/2-280,10,90000);
  l17.visible = false;

  line18 = createSprite(height/2+1300,width/2-280,10,90000);
  line18.velocityX = 0;
  line18.visible = false;

  l18 = createSprite(height/2-400,width/2-280,10,90000);
  l18.visible = false;

  line19 = createSprite(height/2+1300,width/2-280,10,90000);
  line19.velocityX = 0;
  line19.visible = false;

  l19 = createSprite(height/2-400,width/2-280,10,90000);
  l19.visible = false;

  line20 = createSprite(height/2+1300,width/2-280,10,90000);
  line20.velocityX = 0;
  line20.visible = false;

  l20 = createSprite(height/2-400,width/2-280,10,90000);
  l20.visible = false;

  line21 = createSprite(height/2+1300,width/2-280,10,90000);
  line21.velocityX = 0;
  line21.visible = false;

  l21 = createSprite(height/2-400,width/2-280,10,90000);
  l21.visible = false;

  line22 = createSprite(height/2+1300,width/2-280,10,90000);
  line22.velocityX = 0;
  line22.visible = false;

  l22 = createSprite(height/2-400,width/2-280,10,90000);
  l22.visible = false;

  line23 = createSprite(height/2+1300,width/2-280,10,90000);
  line23.velocityX = 0;
  line23.visible = false;

  l23 = createSprite(height/2-400,width/2-280,10,90000);
  l23.visible = false;

  line24 = createSprite(height/2+1300,width/2-280,10,90000);
  line24.velocityX = 0;
  line24.visible = false;

  l24 = createSprite(height/2-400,width/2-280,10,90000);
  l24.visible = false;

  line25 = createSprite(height/2+1300,width/2-280,10,90000);
  line25.velocityX = 0;
  line25.visible = false;

  l25 = createSprite(height/2-400,width/2-280,10,90000);
  l25.visible = false;

  line33 = createSprite(height/2+1300,width/2-280,10,90000);
  line33.velocityX = 0;
  line33.visible = false;

  l33 = createSprite(height/2-400,width/2-280,10,90000);
  l33.visible = false;



  //Creating Sprite For StoryLine Subtitles(English)
  LINE1 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE1.addImage(Line1);
  LINE1.scale = 0.5;
  LINE1.visible = false;

  LINE2 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE2.addImage(Line2);
  LINE2.scale = 0.5;
  LINE2.visible = false;

  LINE3 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE3.addImage(Line3);
  LINE3.scale = 0.5;
  LINE3.visible = false;

  LINE4 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE4.addImage(Line4);
  LINE4.scale = 0.5;
  LINE4.visible = false;

  LINE5 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE5.addImage(Line5);
  LINE5.scale = 0.5;
  LINE5.visible = false;

  LINE6 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE6.addImage(Line6);
  LINE6.scale = 0.5;
  LINE6.visible = false;

  LINE7 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE7.addImage(Line7);
  LINE7.scale = 0.5;
  LINE7.visible = false;

  LINE9 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE9.addImage(Line9);
  LINE9.scale = 0.5;
  LINE9.visible = false;

  LINE10 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE10.addImage(Line10);
  LINE10.scale = 0.5;
  LINE10.visible = false;

  LINE11 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE11.addImage(Line11);
  LINE11.scale = 0.5;
  LINE11.visible = false;

  LINE12 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE12.addImage(Line12);
  LINE12.scale = 0.5;
  LINE12.visible = false;

  LINE13 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE13.addImage(Line13);
  LINE13.scale = 0.5;
  LINE13.visible = false;

  LINE14 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE14.addImage(Line14);
  LINE14.scale = 0.5;
  LINE14.visible = false;
  
  LINE15 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE15.addImage(Line15);
  LINE15.scale = 0.5;
  LINE15.visible = false;

  LINE16 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE16.addImage(Line16);
  LINE16.scale = 0.5;
  LINE16.visible = false;



  
  //Creating Sprite For StoryLine Images
  ST1 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST1.addImage(S1);
  ST1.scale = 0.33;
  ST1.visible = false;

  ST2 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST2.addImage(S2);
  ST2.scale = 1.1;
  ST2.visible = false;

  ST3 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST3.addImage(S3);
  ST3.scale = 1.1;
  ST3.visible = false;

  ST4 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST4.addImage(S4);
  ST4.scale = 1.1;
  ST4.visible = false;

  ST5 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST5.addImage(S5);
  ST5.scale = 1.1;
  ST5.visible = false;

  ST6 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST6.addImage(S6);
  ST6.scale = 1.1;
  ST6.visible = false;

  LINE8 = createSprite(displayHeight/2+290,displayWidth/2-13,width,50);
  LINE8.addImage(Line8);
  LINE8.scale = 0.5;
  LINE8.visible = false;

  ST7 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST7.addImage(S7);
  ST7.scale = 1.1;
  ST7.visible = false;

  ST8 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST8.addImage(S8);
  ST8.scale = 1.1;
  ST8.visible = false;

  ST9 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST9.addImage(S9);
  ST9.scale = 1.1;
  ST9.visible = false;

  ST10 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST10.addImage(S95);
  ST10.scale = 1.1;
  ST10.visible = false;

  ST11 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST11.addAnimation("Wolf Jumping",S91);
  ST11.scale = 0.2;
  ST11.visible = false;
  
  ST12 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST12.addImage(S10);
  ST12.scale = 1.1;
  ST12.visible = false;

  ST13 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST13.addImage(S11);
  ST13.scale = 1.1;
  ST13.visible = false;
 
  ST14 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST14.addImage(S12);
  ST14.scale = 1.1;
  ST14.visible = false;

  ST15 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST15.addImage(S13);
  ST15.scale = 1.1;
  ST15.visible = false;

  ST16 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST16.addImage(S14);
  ST16.scale = 1.1;
  ST16.visible = false;

  ST17 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST17.addImage(S15);
  ST17.scale = 1.1;
  ST17.visible = false;

  ST18 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST18.addImage(S16);
  ST18.scale = 1.1;
  ST18.visible = false;

  ST19 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST19.addImage(S17);
  ST19.scale = 1.1;
  ST19.visible = false;

  SKIP = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  SKIP.addImage(Skip);
  SKIP.scale = 0.7;

  //Creating Sprite For Wolf Animation
  GoodWolf = createSprite(displayHeight/2-180,displayWidth/2+20,width,50);
  GoodWolf.addAnimation("Running Good Wolf",GWolf);
  GoodWolf.addAnimation("Jumping Good Wolf",GWolf2);
  GoodWolf.addAnimation("Stopped Good Wolf",GWolf3);
  GoodWolf.scale = 1.4;
  GoodWolf.visible = false;

  //Creating Sprite For Ground with which Wolf collides and can't be able to go down
  invisibleGround = createSprite(displayWidth/2,displayHeight-40,width,125);
  invisibleGround.visible = false;

  MT = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT.addImage(MainText);
  MT.scale = 0.7;
  MT.visible = false;

  GZ = createSprite(displayWidth/2-590,displayHeight-800,width,125);
  GZ.addImage(MainText3);
  GZ.scale = 0.5;
  GZ.visible = false;

  TS = createSprite(displayWidth/2-603,displayHeight-730,width,125);
  TS.addImage(MainText4);
  TS.scale = 0.4;
  TS.visible = false;

  RD = createSprite(displayWidth/2-603,displayHeight-655,width,125);
  RD.addImage(MainTexti);
  RD.scale = 0.4;
  RD.visible = false;

  GZi = createSprite(displayWidth/2-590,displayHeight-800,width,125);
  GZi.addImage(MainText3);
  GZi.scale = 0.5;
  GZi.visible = false;

  TSi = createSprite(displayWidth/2-603,displayHeight-730,width,125);
  TSi.addImage(MainText4);
  TSi.scale = 0.4;
  TSi.visible = false;

  RDi = createSprite(displayWidth/2-603,displayHeight-655,width,125);
  RDi.addImage(MainTexti);
  RDi.scale = 0.4;
  RDi.visible = false;


  //Creating Sprite For Wolf Lives 
  //Creating Sprite For Green Lives
  Refile = createSprite(displayHeight/2+930,displayWidth/2-680,width,50);
  Refile.addImage(REFILE1);
  Refile.scale = 0.5;
  Refile.visible = false;

  Refile2 = createSprite(displayHeight/2+880,displayWidth/2-680,width,50);
  Refile2.addImage(REFILE1);
  Refile2.scale = 0.5;
  Refile2.visible = false;


  //Creating Sprite For Yellow Lives
  Refile3 = createSprite(displayHeight/2+830,displayWidth/2-680,width,50);
  Refile3.addImage(REFILE3);
  Refile3.scale = 0.5;
  Refile3.visible = false;

  Refile4 = createSprite(displayHeight/2+780,displayWidth/2-680,width,50);
  Refile4.addImage(REFILE3);
  Refile4.scale = 0.5;
  Refile4.visible = false;


  //Creating Sprite For Orange Lives
  Refile5 = createSprite(displayHeight/2+730,displayWidth/2-680,width,50);
  Refile5.addImage(REFILE5);
  Refile5.scale = 0.5;
  Refile5.visible = false;

  Refile6 = createSprite(displayHeight/2+680,displayWidth/2-680,width,50);
  Refile6.addImage(REFILE5);
  Refile6.scale = 0.5;
  Refile6.visible = false;


  //Creating Sprite For Red Lives
  Refile7 = createSprite(displayHeight/2+630,displayWidth/2-680,width,50);
  Refile7.addImage(REFILE8);
  Refile7.scale = 0.5;
  Refile7.visible = false;

  Refile8 = createSprite(displayHeight/2+580,displayWidth/2-680,width,50);
  Refile8.addImage(REFILE8);
  Refile8.scale = 0.5;
  Refile8.visible = false;


  //Creating Sprite For Wolf Lives For Zomi Land
  //Creating Sprite For Green Lives
  Refilei = createSprite(displayHeight/2+930,displayWidth/2-680,width,50);
  Refilei.addImage(REFILE1);
  Refilei.scale = 0.5;
  Refilei.visible = false;

  Refile2i = createSprite(displayHeight/2+880,displayWidth/2-680,width,50);
  Refile2i.addImage(REFILE1);
  Refile2i.scale = 0.5;
  Refile2i.visible = false;


  //Creating Sprite For Yellow Lives
  Refile3i = createSprite(displayHeight/2+830,displayWidth/2-680,width,50);
  Refile3i.addImage(REFILE3);
  Refile3i.scale = 0.5;
  Refile3i.visible = false;

  Refile4i = createSprite(displayHeight/2+780,displayWidth/2-680,width,50);
  Refile4i.addImage(REFILE3);
  Refile4i.scale = 0.5;
  Refile4i.visible = false;


  //Creating Sprite For Orange Lives
  Refile5i = createSprite(displayHeight/2+730,displayWidth/2-680,width,50);
  Refile5i.addImage(REFILE5);
  Refile5i.scale = 0.5;
  Refile5i.visible = false;

  Refile6i = createSprite(displayHeight/2+680,displayWidth/2-680,width,50);
  Refile6i.addImage(REFILE5);
  Refile6i.scale = 0.5;
  Refile6i.visible = false;


  //Creating Sprite For Red Lives
  Refile7i = createSprite(displayHeight/2+630,displayWidth/2-680,width,50);
  Refile7i.addImage(REFILE8);
  Refile7i.scale = 0.5;
  Refile7i.visible = false;

  Refile8i = createSprite(displayHeight/2+580,displayWidth/2-680,width,50);
  Refile8i.addImage(REFILE8);
  Refile8i.scale = 0.5;
  Refile8i.visible = false;


  GZ2 = createSprite(displayWidth/2-455,displayHeight-800,width,125);
  GZ2.addImage(GodZomi2);
  GZ2.scale = 0.3;
  GZ2.visible = false;

  TS2 = createSprite(displayWidth/2-485,displayHeight-730,width,125);
  TS2.addImage(TheSword2);
  TS2.scale = -0.27;
  TS2.visible = false;

  RD2 = createSprite(displayWidth/2-470,displayHeight-655,width,125);
  RD2.addImage(RedDiamond2);
  RD2.scale = 0.2;
  RD2.visible = false;

  GZ2i = createSprite(displayWidth/2-455,displayHeight-800,width,125);
  GZ2i.addImage(GodZomi2);
  GZ2i.scale = 0.3;
  GZ2i.visible = false;

  TS2i = createSprite(displayWidth/2-485,displayHeight-730,width,125);
  TS2i.addImage(TheSword2);
  TS2i.scale = -0.27;
  TS2i.visible = false;

  RD2i = createSprite(displayWidth/2-470,displayHeight-655,width,125);
  RD2i.addImage(RedDiamond2);
  RD2i.scale = 0.2;
  RD2i.visible = false;

  line26 = createSprite(height/2+1300,width/2-280,10,90000);
  line26.velocityX = 0;
  line26.visible = false;

  l26 = createSprite(height/2-400,width/2-280,10,90000);
  l26.visible = false;

  line27 = createSprite(height/2+1300,width/2-280,10,90000);
  line27.velocityX = 0;
  line27.visible = false;

  l27 = createSprite(height/2-400,width/2-280,10,90000);
  l27.visible = false;

  line28 = createSprite(height/2+1300,width/2-280,10,90000);
  line28.velocityX = 0;
  line28.visible = false;

  l28 = createSprite(height/2-400,width/2-280,10,90000);
  l28.visible = false;

  line29 = createSprite(height/2+1300,width/2-280,10,90000);
  line29.velocityX = 0;
  line29.visible = false;

  l29 = createSprite(height/2-400,width/2-280,10,90000);
  l29.visible = false;

  line31 = createSprite(height/2+1300,width/2-280,10,90000);
  line31.velocityX = 0;
  line31.visible = false;

  l31 = createSprite(height/2-400,width/2-280,10,90000);
  l31.visible = false;

  line34 = createSprite(height/2+1300,width/2-280,10,90000);
  line34.velocityX = 0;
  line34.visible = false;

  l34 = createSprite(height/2-400,width/2-280,10,90000);
  l34.visible = false;

  CoinsGroup = new Group();
  CoinBOXGroup = new Group();
  CoinBOX2Group = new Group();
  AlertGroup = new Group();
  Alert2Group = new Group();
  EnergyGroup = new Group();
  Energy2Group = new Group();
  Lightning3Group = new Group();

  GH = createSprite(displayHeight/2+733,displayWidth/2-590,10,width);
  GH.addImage(Gh);
  GH.scale = 0.4;
  GH.visible = false;

  FH = createSprite(displayHeight/2+738,displayWidth/2-465,10,width);
  FH.addImage(Fh);
  FH.scale = 0.4;
  FH.visible = false;

  FH2 = createSprite(displayHeight/2+738,displayWidth/2-465,10,width);
  FH2.addImage(Eh);
  FH2.scale = 0.4;
  FH2.visible = false;

  EH = createSprite(displayHeight/2+733,displayWidth/2-590,10,width);
  EH.addImage(Eh);
  EH.scale = 0.4;
  EH.visible = false;

  HH = createSprite(displayHeight/2+738,displayWidth/2-465,10,width);
  HH.addImage(Hh);
  HH.scale = 0.4;
  HH.visible = false;

  line30 = createSprite(displayHeight/2+49330,displayWidth/2-280,10,90000);
  line30.velocityX = 0;
  line30.visible = false;

  line30i = createSprite(displayHeight/2+47000,displayWidth/2-280,10,90000);
  line30i.velocityX = 0;
  line30i.visible = false;

  ZP = createSprite(displayHeight/2+50000,displayWidth/2-280,width,50);
  ZP.addImage(ZomiPORTAL);   
  ZP.velocityX = 0;
  ZP.scale = 0.78;

  GZ3 = createSprite(displayWidth/2+50100,displayHeight-250,width,125);
  GZ3.addImage(GodZomi2);
  GZ3.velocityX = 0;
  GZ3.scale = 0.3;
  GZ3.visible = false;

  II = createSprite(displayHeight/2+733,displayWidth/2-590,10,width);
  II.addImage(Ii);
  II.scale = 0.4;
  II.visible = false;

  MT2 = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT2.addImage(Text6);
  MT2.scale = 0.5;
  MT2.visible = false;

  MT3 = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT3.addImage(Text7);
  MT3.scale = 0.5;
  MT3.visible = false;

  DEST = createSprite(displayWidth/2-530,displayHeight-765,width,125);
  DEST.addImage(DESTINATION);
  DEST.scale = 0.4;
  DEST.visible = false;

  //push();
  Meteor = createSprite(displayHeight/2+1000,displayWidth/2-1000,width,50);
  Meteor.addImage(meteor);
  Meteor.visible = false;
  Meteor.scale = 0.2;
  Meteor.velocityX = 0;
  Meteor.velocityY = 0;
  Meteor.depth = Refile.depth+1;
  Meteor.depth = Refile2.depth+1;
  Meteor.depth = Refile3.depth+1;
  Meteor.depth = Refile4.depth+1;
  Meteor.depth = Refile5.depth+1;
  Meteor.depth = Refile6.depth+1;
  Meteor.depth = Refile7.depth+1;
  Meteor.depth = Refile8.depth+1;
  Meteor.depth = GH.depth + 1;
  Meteor.depth = FH.depth + 1;
  Meteor.depth = EH.depth + 1;
  Meteor.depth = HH.depth + 1;
  Meteor.depth = GZ.depth + 1;
  Meteor.depth = TS.depth + 1;
  Meteor.depth = RD.depth + 1;
  Meteor.depth = GZ2.depth + 1;
  Meteor.depth = TS2.depth + 1;
  Meteor.depth = RD2.depth + 1;
  Meteor.depth = FH2.depth + 1;
  Meteor.depth = II.depth + 1;
  Meteor.depth = ZP.depth + 1;
  //pop();

  //push();
  BLAST2 = createSprite(displayHeight/2+400,displayWidth/2-30,width,50);
  BLAST2.addAnimation("blast",Blast1);
  BLAST2.scale = 10;
  BLAST2.visible = false;
  BLAST2.depth = Meteor.depth+1;
  BLAST2.depth = GH.depth + 1;
  BLAST2.depth = FH.depth + 1;
  BLAST2.depth = EH.depth + 1;
  BLAST2.depth = HH.depth + 1;
  BLAST2.depth = GZ.depth + 1;
  BLAST2.depth = TS.depth + 1;
  BLAST2.depth = RD.depth + 1;
  BLAST2.depth = GZ2.depth + 1;
  BLAST2.depth = TS2.depth + 1;
  BLAST2.depth = RD2.depth + 1;
  BLAST2.depth = FH2.depth + 1;
  BLAST2.depth = II.depth + 1;
  BLAST2.depth = ZP.depth + 1;
  //pop();
  
  Thunder = createSprite(displayWidth/2-130,displayHeight/2-10,width,50);
  Thunder.addAnimation("Thunder Lightning",Thunder1);
  Thunder.velocityX = 0;
  Thunder.scale = 0.2;
  Thunder.visible = false;

  Thunder2 = createSprite(displayWidth/2+50,displayHeight/2-10,width,50);
  Thunder2.addAnimation("Thunder Lightning",Thunder1);
  Thunder2.velocityX = 0;
  Thunder2.scale = 0.2;
  Thunder2.visible = false;

  Thunder3 = createSprite(displayWidth/2-350,displayHeight/2-10,width,50);
  Thunder3.addAnimation("Thunder Lightning",Thunder1);
  Thunder3.velocityX = 0;
  Thunder3.scale = 1.5;
  Thunder3.visible = false;

  Thunder4 = createSprite(displayWidth/2+450,displayHeight/2-10,width,50);
  Thunder4.addAnimation("Thunder Lightning",Thunder1);
  Thunder4.velocityX = 0;
  Thunder4.scale = 1.5;
  Thunder4.visible = false;

  line302 = createSprite(displayHeight/2+650,displayWidth/2-280,10,90000);
  line302.velocityX = 0;
  line302.visible = false;

  line302i = createSprite(displayHeight/2+400,displayWidth/2-280,10,90000);
  line302i.velocityX = 0;
  line302i.visible = false;

  line303 = createSprite(displayHeight/2+4000,displayWidth/2-280,10,90000);
  line303.velocityX = 0;
  line303.visible = false;

  line3p = createSprite(displayHeight/2-1300,displayWidth/2-500,width,50);
  line3p.addImage(GOT);
  line3p.scale = 0.55;
  line3p.velocityX = 0;
  line3p.visible = true;

  Message = createSprite(displayHeight/2+200,displayWidth/2-550,width,50);
  Message.addAnimation("Message",message);
  Message.scale = 0.4;
  Message.visible = false;

  Meteor2 = createSprite(displayHeight/2+1000,displayWidth/2-1000,width,50);
  Meteor2.addImage(meteor);
  Meteor2.scale = 0.2;
  Meteor2.velocityX = 0;
  Meteor2.velocityY = 0;
  Meteor2.visible = false;

  Meteor3 = createSprite(displayHeight/2+700,displayWidth/2-1000,width,50);
  Meteor3.addImage(meteor);
  Meteor3.scale = 0.2;
  Meteor3.velocityX = 0;
  Meteor3.velocityY = 0;
  Meteor3.visible = false;

  Meteor4 = createSprite(displayHeight/2+400,displayWidth/2-1000,width,50);
  Meteor4.addImage(meteor);
  Meteor4.scale = 0.2;
  Meteor4.velocityX = 0;
  Meteor4.velocityY = 0;
  Meteor4.visible = false;

  BLAST3 = createSprite(displayHeight/2+500,displayWidth/2-30,width,50);
  BLAST3.addAnimation("blast",Blast1);
  BLAST3.scale = 60;
  BLAST3.visible = false;BLAST2.depth = Meteor.depth+1;
  BLAST3.depth = GH.depth + 1;
  BLAST3.depth = FH.depth + 1;
  BLAST3.depth = EH.depth + 1;
  BLAST3.depth = HH.depth + 1;
  BLAST3.depth = GZ.depth + 1;
  BLAST3.depth = TS.depth + 1;
  BLAST3.depth = RD.depth + 1;
  BLAST3.depth = GZ2.depth + 1;
  BLAST3.depth = TS2.depth + 1;
  BLAST3.depth = RD2.depth + 1;
  BLAST3.depth = FH2.depth + 1;
  BLAST3.depth = II.depth + 1;
  BLAST3.depth = ZP.depth + 1;

  HotAirBalloons = createSprite(displayWidth/2+20500,displayHeight/2-300,width,50);
  HotAirBalloons.addImage(HAB);
  HotAirBalloons.scale = 0.15;
  HotAirBalloons.visible = true;

  Message4 = createSprite(displayHeight/2+20800,displayWidth/2-400,width,50);
  Message4.addImage(message3);
  Message4.scale = 0.1;
  Message4.visible = true;

  line305 = createSprite(displayHeight/2+400,displayWidth/2-600,90000,10);
  line305.velocityX = 0;
  line305.visible = false;

  line100 = createSprite(height/2+1300,width/2-280,10,90000);
  line100.velocityX = 0;
  line100.visible = false;

  l100 = createSprite(height/2-400,width/2-280,10,90000);
  l100.visible = false;

  line101 = createSprite(height/2+1300,width/2-280,10,90000);
  line101.velocityX = 0;
  line101.visible = false;

  l101 = createSprite(height/2-400,width/2-280,10,90000);
  l101.visible = false;

  surprisebox = createSprite(displayHeight/2-10000,displayWidth/2-500,width,50);
  surprisebox.addImage(SURPRISE);
  surprisebox.scale = 0.15;
  surprisebox.visible = false;

  surprisebox2 = createSprite(displayHeight/2-10000,displayWidth/2-500,width,50);
  surprisebox2.addImage(SURPRISE);
  surprisebox2.scale = 0.15;
  surprisebox2.visible = false;

  surprisebox3 = createSprite(displayHeight/2-10000,displayWidth/2-500,width,50);
  surprisebox3.addImage(SURPRISE);
  surprisebox3.scale = 0.15;
  surprisebox3.visible = false;

  Message7 = createSprite(displayHeight/2+200,displayWidth/2-550,width,50);
  Message7.addAnimation("Message",message6);
  Message7.scale = 0.4;
  Message7.visible = false;

  line306 = createSprite(displayHeight/2+400,displayWidth/2-350,90000,10);
  line306.velocityX = 0;
  line306.visible = false;

  line102 = createSprite(height/2+1300,width/2-280,10,90000);
  line102.velocityX = 0;
  line102.visible = false;

  l102 = createSprite(height/2-400,width/2-280,10,90000);
  l102.visible = false;

  line103 = createSprite(height/2+1300,width/2-280,10,90000);
  line103.velocityX = 0;
  line103.visible = false;

  l103 = createSprite(height/2-400,width/2-280,10,90000);
  l103.visible = false;

  Text1 = createSprite(displayHeight/2+195,displayWidth/2-650,width,50);
  Text1.addImage(TEXTNO);
  Text1.scale = 0.6;
  Text1.visible = false;

  sno1 = createSprite(displayHeight/2+195,displayWidth/2-550,width,50);
  sno1.addImage(surprise1);
  sno1.scale = 0.6;
  sno1.visible = false;

  sno2 = createSprite(displayHeight/2+195,displayWidth/2-550,width,50);
  sno2.addImage(surprise2);
  sno2.scale = 0.6;
  sno2.visible = false;

  sno3 = createSprite(displayHeight/2+195,displayWidth/2-550,width,50);
  sno3.addImage(surprise3);
  sno3.scale = 0.6;
  sno3.visible = false;

  line104 = createSprite(height/2+1300,width/2-280,10,90000);
  line104.velocityX = 0;
  line104.visible = false;

  l104 = createSprite(height/2-400,width/2-280,10,90000);
  l104.visible = false;

  HELL = createSprite(displayWidth/2-10,displayHeight/2-70,width,125);
  HELL.addImage(EndingHELL);
  HELL.scale = 1.19;
  HELL.visible = false;

  THE = createSprite(displayHeight/2-153,displayWidth/2-520,width,50);
  THE.addImage(EndingText);
  THE.scale = 0.100;
  THE.visible = false;

  RISING = createSprite(displayHeight/2+100,displayWidth/2-400,width,50);
  RISING.addImage(EndingText2);
  RISING.scale = 0.5;
  RISING.visible = false;

  RISING2 = createSprite(displayHeight/2-30,displayWidth/2-270,width,50);
  RISING2.addImage(EndingText3);
  RISING2.scale = 0.4;
  RISING2.visible = false;

  RETRY = createSprite(displayHeight/2-10000,displayWidth/2-152,width,50);
  RETRY.addImage(Retry);
  RETRY.scale = 0.5;
  RETRY.visible = false;

  Sainik1 = createSprite(displayHeight/2+5000,displayWidth/2-100,width,50);
  Sainik1.addImage(Sainik);
  Sainik1.scale = 0.38;
  Sainik1.visible = true; 

  Arrow1 = createSprite(displayHeight/2+4955,displayWidth/2-130,width,50);
  Arrow1.addImage(ARROW);
  Arrow1.scale = 0.13;
  Arrow1.visible = true;

  li1 = createSprite(displayHeight/2+4000,displayWidth/2-280,10,90000);
  li1.visible = false;

  Sainik2 = createSprite(displayHeight/2+7000,displayWidth/2-100,width,50);
  Sainik2.addImage(Sainik);
  Sainik2.scale = 0.38;
  Sainik2.visible = true; 

  Arrow2 = createSprite(displayHeight/2+6955,displayWidth/2-130,width,50);
  Arrow2.addImage(ARROW);
  Arrow2.scale = 0.13;
  Arrow2.visible = true;

  li2 = createSprite(displayHeight/2+6000,displayWidth/2-280,10,90000);
  li2.visible = false;

  Sainik3 = createSprite(displayHeight/2+9000,displayWidth/2-100,width,50);
  Sainik3.addImage(Sainik);
  Sainik3.scale = 0.38;
  Sainik3.visible = false; 

  Arrow3 = createSprite(displayHeight/2+8955,displayWidth/2-130,width,50);
  Arrow3.addImage(ARROW);
  Arrow3.scale = 0.13;
  Arrow3.visible = true;

  li3 = createSprite(displayHeight/2+8000,displayWidth/2-280,10,90000);
  li3.visible = false;

  Sainik4 = createSprite(displayHeight/2+11000,displayWidth/2-100,width,50);
  Sainik4.addImage(Sainik);
  Sainik4.scale = 0.38;
  Sainik4.visible = true; 

  Arrow4 = createSprite(displayHeight/2+10955,displayWidth/2-130,width,50);
  Arrow4.addImage(ARROW);
  Arrow4.scale = 0.13;
  Arrow4.visible = true;

  li4 = createSprite(displayHeight/2+10000,displayWidth/2-280,10,90000);
  li4.visible = false;

  Sainik5 = createSprite(displayHeight/2+13000,displayWidth/2-100,width,50);
  Sainik5.addImage(Sainik);
  Sainik5.scale = 0.38;
  Sainik5.visible = false; 

  Arrow5 = createSprite(displayHeight/2+12955,displayWidth/2-150,width,50);
  Arrow5.addImage(ARROW);
  Arrow5.scale = 0.13;
  Arrow5.visible = false;

  li5 = createSprite(displayHeight/2+12000,displayWidth/2-280,10,90000);
  li5.visible = true;

  bloodEffect = createSprite(width/2,height-400,width,900000);
  bloodEffect.addAnimation("Blood Effect",BloodEffect);
  bloodEffect.scale = 2;
  bloodEffect.visible = false;

  K1 = createSprite(displayHeight/2+725,displayWidth/2-590,10,width);
  K1.addImage(zcom);
  K1.scale = 0.7;
  K1.visible = false;

  K2 = createSprite(displayHeight/2+725,displayWidth/2-450,10,width);
  K2.addImage(zcom2);
  K2.scale = 0.57;
  K2.visible = false;

  K3 = createSprite(displayHeight/2+725,displayWidth/2-450,10,width);
  K3.addImage(zcom3);
  K3.scale = 0.48;
  K3.visible = false;

  K4 = createSprite(displayHeight/2+725,displayWidth/2-450,10,width);
  K4.addImage(zcom4);
  K4.scale = 0.39;
  K4.visible = false;

  K5 = createSprite(displayHeight/2+725,displayWidth/2-450,10,width);
  K5.addImage(zcom5);
  K5.scale = 0.55;
  K5.visible = false;

  line34i = createSprite(height/2+1300,width/2-280,10,90000);
  line34i.velocityX = 0;
  line34i.visible = false;

  l34i = createSprite(height/2-400,width/2-280,10,90000);
  l34i.visible = false;

  line35i = createSprite(height/2+1300,width/2-280,10,90000);
  line35i.velocityX = 0;
  line35i.visible = false;

  l35i = createSprite(height/2-400,width/2-280,10,90000);
  l35i.visible = false;

  line36i = createSprite(height/2+1300,width/2-280,10,90000);
  line36i.velocityX = 0;
  line36i.visible = false;

  l36i = createSprite(height/2-400,width/2-280,10,90000);
  l36i.visible = false;

  line37i = createSprite(height/2+1300,width/2-280,10,90000);
  line37i.velocityX = 0;
  line37i.visible = false;

  l37i = createSprite(height/2-400,width/2-280,10,90000);
  l37i.visible = false;

  line37i = createSprite(height/2+1300,width/2-280,10,90000);
  line37i.velocityX = 0;
  line37i.visible = false;

  l37i = createSprite(height/2-400,width/2-280,10,90000);
  l37i.visible = false;

  line38i = createSprite(height/2+1300,width/2-280,10,90000);
  line38i.velocityX = 0;
  line38i.visible = false;

  l38i = createSprite(height/2-400,width/2-280,10,90000);
  l38i.visible = false;

  line39i = createSprite(height/2+1300,width/2-280,10,90000);
  line39i.velocityX = 0;
  line39i.visible = false;

  l39i = createSprite(height/2-400,width/2-280,10,90000);
  l39i.visible = false;

  K6 = createSprite(displayHeight/2+755,displayWidth/2-590,10,width);
  K6.addImage(zcom6);
  K6.scale = 0.60;
  K6.visible = false;

  line40i = createSprite(height/2+5000,width/2-280,10,90000);
  line40i.velocityX = 0;
  line40i.visible = false;

  line41i = createSprite(height/2+7000,width/2-280,10,90000);
  line41i.velocityX = 0;
  line41i.visible = false;

  line42i = createSprite(height/2+9000,width/2-280,10,90000);
  line42i.velocityX = 0;
  line42i.visible = false;

  line43i = createSprite(height/2+11000,width/2-280,10,90000);
  line43i.velocityX = 0;
  line43i.visible = false;

  line44i = createSprite(height/2+13000,width/2-280,10,90000);
  line44i.velocityX = 0;
  line44i.visible = false;
  
  line49i = createSprite(height/2+1300,width/2-280,10,90000);
  line49i.velocityX = 0;
  line49i.visible = false;

  l49i = createSprite(height/2-400,width/2-280,10,90000);
  l49i.visible = false;

  SW = createSprite(displayHeight/2+980,displayWidth/2-900,width,50);
  SW.addAnimation("Spinning Weapon",SpinningWeapon);
  SW.scale = 0.10;
  SW.visible = true;
 
  Mprincess = createSprite(displayHeight/2+700,displayWidth/2-150,width,50);
  Mprincess.addImage(Mystery);
  Mprincess.scale = 0.26;
  Mprincess.visible = false;

  TP2 = createSprite(displayHeight/2+415,displayWidth/2-285,width,50);
  TP2.addAnimation("Thunder Power",TP);
  TP2.scale = -1.7;
  TP2.visible = false;

  JaiRamJi = createSprite(displayHeight/2-150,displayWidth/2-285,width,50);
  JaiRamJi.addImage(RamJi);
  JaiRamJi.scale = 0.3;
  JaiRamJi.visible = false;

  JaiRamJiW = createSprite(displayHeight/2-100,displayWidth/2-335,width,50);
  JaiRamJiW.addImage(RamJiWeapons);
  JaiRamJiW.scale = 0.13;
  JaiRamJiW.visible = false;
  
  TP4 = createSprite(displayHeight/2+415,displayWidth/2-390,width,50);
  TP4.addAnimation("Thunder Power3",Lightning2);
  TP4.scale = 1000;
  TP4.visible = false;

  push();
  GoodWolf.depth = Thunder.depth + 1;
  GoodWolf.depth = Thunder2.depth + 1;
  GoodWolf.depth = Thunder3.depth + 1;
  GoodWolf.depth = Thunder4.depth + 1;
  pop();

  SHIELD = createSprite(displayHeight/2-1000,displayWidth/2-150,width,50);
  SHIELD.addAnimation("Saving shield",Shield);
  SHIELD.scale = 0.5;
  SHIELD.visible = false;

  ESHIELD1 = createSprite(displayHeight/2+100,displayWidth/2-1000,width,50);
  ESHIELD1.addImage(Eshield);
  ESHIELD1.scale = 0.10;
  ESHIELD1.visible = true;

  ESHIELD2 = createSprite(displayHeight/2-380,displayWidth/2-1000,width,50);
  ESHIELD2.addImage(Eshield);
  ESHIELD2.scale = 0.10;
  ESHIELD2.visible = true;
  
  cSHIELD = createSprite(displayHeight/2+3000,displayWidth/2-500,width,50);
  cSHIELD.addImage(CSHIELD);
  cSHIELD.scale = 0.10;
  cSHIELD.visible = true;

  LEVEL1 = createSprite(displayHeight/2-328,displayWidth/2-678,width,50);
  LEVEL1.addImage(Level1);
  LEVEL1.scale = 0.15;
  LEVEL1.visible = false;

  LEVEL1i = createSprite(displayHeight/2-225,displayWidth/2-668,width,50);
  LEVEL1i.addImage(Level1i);
  LEVEL1i.scale = 0.35;
  LEVEL1i.visible = false;

  LEVEL2i = createSprite(displayHeight/2-225,displayWidth/2-668,width,50);
  LEVEL2i.addImage(Level2i);
  LEVEL2i.scale = 0.35;
  LEVEL2i.visible = false;

  line21z = createSprite(height/2+1300,width/2-280,10,90000);
  line21z.velocityX = 0;
  line21z.visible = false;

  l21z = createSprite(height/2-400,width/2-280,10,90000);
  l21z.visible = false;

  line21z = createSprite(height/2+1300,width/2-280,10,90000);
  line21z.velocityX = 0;
  line21z.visible = false;

  l21z = createSprite(height/2-400,width/2-280,10,90000);
  l21z.visible = false;

  line22z = createSprite(height/2+1300,width/2-280,10,90000);
  line22z.velocityX = 0;
  line22z.visible = false;

  l22z = createSprite(height/2-400,width/2-280,10,90000);
  l22z.visible = false;

  line23z = createSprite(height/2+1300,width/2-280,10,90000);
  line23z.velocityX = 0;
  line23z.visible = false;

  l23z = createSprite(height/2-400,width/2-280,10,90000);
  l23z.visible = false;

  line24z = createSprite(height/2+1300,width/2-280,10,90000);
  line24z.velocityX = 0;
  line24z.visible = false;

  l24z = createSprite(height/2-400,width/2-280,10,90000);
  l24z.visible = false;

  line25z = createSprite(height/2+1300,width/2-280,10,90000);
  line25z.velocityX = 0;
  line25z.visible = false;

  l25z = createSprite(height/2-400,width/2-280,10,90000);
  l25z.visible = false;

  line26z = createSprite(height/2+1300,width/2-280,10,90000);
  line26z.velocityX = 0;
  line26z.visible = false;

  l26z = createSprite(height/2-400,width/2-280,10,90000);
  l26z.visible = false;

  line27z = createSprite(height/2+1300,width/2-280,10,90000);
  line27z.velocityX = 0;
  line27z.visible = false;

  l27z = createSprite(height/2-400,width/2-280,10,90000);
  l27z.visible = false;

  line28z = createSprite(height/2+1300,width/2-280,10,90000);
  line28z.velocityX = 0;
  line28z.visible = false;

  l28z = createSprite(height/2-400,width/2-280,10,90000);
  l28z.visible = false;

  line29z = createSprite(height/2+1300,width/2-280,10,90000);
  line29z.velocityX = 0;
  line29z.visible = false;

  oins = createSprite(displayHeight/2+250,displayWidth/2-370,width,50);
  oins.addImage(C2500);
  oins.scale = 0.8;
  oins.visible = false;
  
  line30z = createSprite(height/2+1300,width/2-280,10,90000);
  line30z.velocityX = 0;
  line30z.visible = false;

  l30z = createSprite(height/2-400,width/2-280,10,90000);
  l30z.visible = false;
  
  line33z = createSprite(height/2+1300,width/2-280,10,90000);
  line33z.velocityX = 0;
  line33z.visible = false;

  l33z = createSprite(height/2-400,width/2-280,10,90000);
  l33z.visible = false;

  MT6 = createSprite(displayWidth/2,displayHeight-150,width,125);
  MT6.addImage(textz);
  MT6.scale = 0.7;
  MT6.visible = false;

  Sun = createSprite(displayHeight/2+40000,displayWidth/2-350,width,50);
  Sun.addImage(SUN);
  Sun.scale = 10;
  Sun.velocityX = 0;
  Sun.visible = false;
  Sun.depth = GoodWolf.depth+1;
  Sun.depth = GZi.depth+1;
  Sun.depth = GZ2i.depth+1;
  Sun.depth = RDi.depth+1;
  Sun.depth = RD2i.depth+1;
  Sun.depth = TSi.depth+1;
  Sun.depth = TS2i.depth+1;

  line43z = createSprite(height/2+39000,width/2-280,10,90000);
  line43z.velocityX = 0;
  line43z.visible = false;

  God = createSprite(displayHeight/2+29000,displayWidth/2-500,width,125);
  God.addImage(GOD);
  God.scale = 0.9;
  God.visible = false;

  line307 = createSprite(displayHeight/2+400,displayWidth/2-10000,90000,10);
  line307.velocityX = 0;
  line307.visible = false;

  line44z = createSprite(height/2+28399,width/2-280,10,90000);
  line44z.velocityX = 0;
  line44z.visible = false;

  converstaion1 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion1.addImage(Cera);
  converstaion1.scale = 0.9;
  converstaion1.visible = false;

  converstaion2 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion2.addImage(Cerb);
  converstaion2.scale = 0.9;
  converstaion2.visible = false;

  converstaion3 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion3.addImage(Cerc);
  converstaion3.scale = 0.9;
  converstaion3.visible = false;

  converstaion4 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion4.addImage(Cerd);
  converstaion4.scale = 0.9;
  converstaion4.visible = false;

  converstaion5 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion5.addImage(Cere);
  converstaion5.scale = 0.9;
  converstaion5.visible = false;

  converstaion6 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion6.addImage(Cerf);
  converstaion6.scale = 1;
  converstaion6.visible = false;

  converstaion7 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion7.addImage(Cerg);
  converstaion7.scale = 0.9;
  converstaion7.visible = false;

  converstaion8 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion8.addImage(Cerh);
  converstaion8.scale = 0.9;
  converstaion8.visible = false;

  converstaion9 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion9.addImage(Ceri);
  converstaion9.scale = 0.6;
  converstaion9.visible = false;

  converstaion10 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion10.addImage(Cerj);
  converstaion10.scale = 0.9;
  converstaion10.visible = false;

  converstaion11 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion11.addImage(Cerk);
  converstaion11.scale = 0.9;
  converstaion11.visible = false;

  converstaion12 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion12.addImage(Cerl);
  converstaion12.scale = 1;
  converstaion12.visible = false;

  converstaion13 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion13.addImage(Cerm);
  converstaion13.scale = 0.9;
  converstaion13.visible = false;

  converstaion14 = createSprite(displayWidth/2,displayHeight-150,width,125);
  converstaion14.addImage(Cern);
  converstaion14.scale = 0.9;
  converstaion14.visible = false;
  
  la = createSprite(height/2+1300,width/2-280,10,90000);
  la.velocityX = 0;
  la.visible = false;

  la2 = createSprite(height/2-400,width/2-280,10,90000);
  la2.visible = false;


  lb = createSprite(height/2+1300,width/2-280,10,90000);
  lb.velocityX = 0;
  lb.visible = false;

  lb2 = createSprite(height/2-400,width/2-280,10,90000);
  lb2.visible = false;


  lc = createSprite(height/2+1300,width/2-280,10,90000);
  lc.velocityX = 0;
  lc.visible = false;

  lc2 = createSprite(height/2-400,width/2-280,10,90000);
  lc2.visible = false;


  ld = createSprite(height/2+1300,width/2-280,10,90000);
  ld.velocityX = 0;
  ld.visible = false;

  ld2 = createSprite(height/2-400,width/2-280,10,90000);
  ld2.visible = false;


  le = createSprite(height/2+1300,width/2-280,10,90000);
  le.velocityX = 0;
  le.visible = false;

  le2 = createSprite(height/2-400,width/2-280,10,90000);
  le2.visible = false;


  lf = createSprite(height/2+1300,width/2-280,10,90000);
  lf.velocityX = 0;
  lf.visible = false;

  lf2 = createSprite(height/2-400,width/2-280,10,90000);
  lf2.visible = false;


  lg = createSprite(height/2+1300,width/2-280,10,90000);
  lg.velocityX = 0;
  lg.visible = false;

  lg2 = createSprite(height/2-400,width/2-280,10,90000);
  lg2.visible = false;


  lh = createSprite(height/2+1300,width/2-280,10,90000);
  lh.velocityX = 0;
  lh.visible = false;

  lh2 = createSprite(height/2-400,width/2-280,10,90000);
  lh2.visible = false;


  lj = createSprite(height/2+1300,width/2-280,10,90000);
  lj.velocityX = 0;
  lj.visible = false;

  lj2 = createSprite(height/2-400,width/2-280,10,90000);
  lj2.visible = false;


  lk = createSprite(height/2+1300,width/2-280,10,90000);
  lk.velocityX = 0;
  lk.visible = false;

  lk2 = createSprite(height/2-400,width/2-280,10,90000);
  lk2.visible = false;


  ll = createSprite(height/2+1300,width/2-280,10,90000);
  ll.velocityX = 0;
  ll.visible = false;

  ll2 = createSprite(height/2-400,width/2-280,10,90000);
  ll2.visible = false;


  lm = createSprite(height/2+1300,width/2-280,10,90000);
  lm.velocityX = 0;
  lm.visible = false;

  lm2 = createSprite(height/2-400,width/2-280,10,90000);
  lm2.visible = false;


  ln = createSprite(height/2+1300,width/2-280,10,90000);
  ln.velocityX = 0;
  ln.visible = false;

  ln2 = createSprite(height/2-400,width/2-280,10,90000);
  ln2.visible = false;
  
  BGI = createSprite(displayHeight/2,displayWidth/2);
  BGI.addImage(KBG);
  BGI.scale = 1;
  BGI.visible = false;

  ZP2 = createSprite(displayHeight/2+600,displayWidth/2-250,width,50);
  ZP2.addImage(ZomiPORTAL2);   
  ZP2.velocityX = 0;
  ZP2.visible = false;
  ZP2.scale = 0.22;

  ZP3 = createSprite(displayHeight/2+200,displayWidth/2-48,width,50);
  ZP3.addImage(ZomiPORTAL3);   
  ZP3.velocityX = 0;
  ZP3.visible = false;
  ZP3.scale = 0.35;

  ZP4 = createSprite(displayHeight/2-200,displayWidth/2-48,width,50);
  ZP4.addImage(ZomiPORTAL3);   
  ZP4.velocityX = 0;
  ZP4.visible = false;
  ZP4.scale = 0.35;

  ZP5 = createSprite(displayHeight/2-290,displayWidth/2-48,width,50);
  ZP5.addImage(ZomiPORTAL3);   
  ZP5.velocityX = 0;
  ZP5.visible = false;
  ZP5.scale = 0.35;

  ZP6 = createSprite(displayHeight/2-490,displayWidth/2-48,width,50);
  ZP6.addImage(ZomiPORTAL3);   
  ZP6.velocityX = 0;
  ZP6.visible = false;
  ZP6.scale = 0.35;

  PORTAL = createSprite(displayHeight/2+28980,displayWidth/2-100,width,50);
  PORTAL.addAnimation("Portal Animation",Portal);
  PORTAL.velocityX = 0;
  PORTAL.scale = 2;
  PORTAL.visible = false;

  P = createSprite(displayHeight/2+28980,displayWidth/2-350,width,50);
  P.addAnimation("Power",Power);
  P.velocityX = 0;
  P.scale = 1.5;
  P.visible = false;

  lz = createSprite(height/2+1300,width/2-280,10,90000);
  lz.velocityX = 0;
  lz.visible = false;

  lz2 = createSprite(height/2+500,width/2-280,10,90000);
  lz2.velocityX = 0;
  lz2.visible = false;

  ly = createSprite(height/2+1300,width/2-280,10,90000);
  ly.velocityX = 0;
  ly.visible = false;

  ly2 = createSprite(height/2-400,width/2-280,10,90000);
  ly2.velocityX = 0;
  ly2.visible = false;

  ls = createSprite(height/2+1300,width/2-280,10,90000);
  ls.velocityX = 0;
  ls.visible = false;

  ls2 = createSprite(height/2-400,width/2-280,10,90000);
  ls2.velocityX = 0;
  ls2.visible = false;

  lt = createSprite(height/2+1300,width/2-280,10,90000);
  lt.velocityX = 0;
  lt.visible = false;

  lt2 = createSprite(height/2-400,width/2-280,10,90000);
  lt2.velocityX = 0;
  lt2.visible = false;

  lq2 = createSprite(height/2+500,width/2-280,10,90000);
  lq2.velocityX = 0;
  lq2.visible = false;

  lac = createSprite(height/2+1300,width/2-280,10,90000);
  lac.velocityX = 0;
  lac.visible = false;

  lac2 = createSprite(height/2-400,width/2-280,10,90000);
  lac2.visible = false;

  lac3 = createSprite(height/2+30,width/2-280,10,90000);
  lac3.visible = false;

  ST60 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST60.addImage(story40);
  ST60.scale = 0.20;
  ST60.visible = false;

  Sline1 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline1.addImage(SLine1);
  Sline1.scale = 0.6;
  Sline1.visible = false;

  Sline2 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline2.addImage(SLine2);
  Sline2.scale = 0.7;
  Sline2.visible = false;

  Sline3 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline3.addImage(SLine3);
  Sline3.scale = 0.7;
  Sline3.visible = false;

  Sline4 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline4.addImage(SLine4);
  Sline4.scale = 0.7;
  Sline4.visible = false;

  Sline5 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline5.addImage(SLine5);
  Sline5.scale = 0.7;
  Sline5.visible = false;

  Sline6 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline6.addImage(SLine6);
  Sline6.scale = 0.7;
  Sline6.visible = false;

  Sline7 = createSprite(displayHeight/2+290,displayWidth/2-20,width,50);
  Sline7.addImage(SLine7);
  Sline7.scale = 0.7;
  Sline7.visible = false;

  ST61 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST61.addImage(story41);
  ST61.scale = 1.1;
  ST61.visible = false;

  ST62 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST62.addImage(story42);
  ST62.scale = 1.1;
  ST62.visible = false;

  line59 = createSprite(height/2+1300,width/2-280,10,90000);
  line59.velocityX = 0;
  line59.visible = false;

  line59i = createSprite(height/2-400,width/2-280,10,90000);
  line59i.velocityX = 0;
  line59i.visible = false;

  line50 = createSprite(height/2+1300,width/2-280,10,90000);
  line50.velocityX = 0;
  line50.visible = false;

  line50i = createSprite(height/2-400,width/2-280,10,90000);
  line50i.velocityX = 0;
  line50i.visible = false;

  line52 = createSprite(height/2+1300,width/2-280,10,90000);
  line52.velocityX = 0;
  line52.visible = false;

  line52i = createSprite(height/2-400,width/2-280,10,90000);
  line52i.velocityX = 0;
  line52i.visible = false;

  line53 = createSprite(height/2+1300,width/2-280,10,90000);
  line53.velocityX = 0;
  line53.visible = false;

  line53i = createSprite(height/2-400,width/2-280,10,90000);
  line53i.velocityX = 0;
  line53i.visible = false;

  line54 = createSprite(height/2+1300,width/2-280,10,90000);
  line54.velocityX = 0;
  line54.visible = false;

  line54i = createSprite(height/2-400,width/2-280,10,90000);
  line54i.velocityX = 0;
  line54i.visible = false;

  line55 = createSprite(height/2+1300,width/2-280,10,90000);
  line55.velocityX = 0;
  line55.visible = false;

  line55i = createSprite(height/2-400,width/2-280,10,90000);
  line55i.velocityX = 0;
  line55i.visible = false;

  line56 = createSprite(height/2+1300,width/2-280,10,90000);
  line56.velocityX = 0;
  line56.visible = false;

  line56i = createSprite(height/2-400,width/2-280,10,90000);
  line56i.velocityX = 0;
  line56i.visible = false;

  line57 = createSprite(height/2+1300,width/2-280,10,90000);
  line57.velocityX = 0;
  line57.visible = false;

  line57i = createSprite(height/2-400,width/2-280,10,90000);
  line57i.velocityX = 0;
  line57i.visible = false;

  line60 = createSprite(height/2+1300,width/2-280,10,90000);
  line60.velocityX = 0;
  line60.visible = false;

  line60i = createSprite(height/2-400,width/2-280,10,90000);
  line60i.velocityX = 0;
  line60i.visible = false;

  Save = createSprite(displayWidth/2,displayHeight-600,width,125);
  Save.addImage(SAVE);
  Save.scale = 0.9;
  Save.visible = false;

  line61 = createSprite(height/2+1300,width/2-280,10,90000);
  line61.velocityX = 0;
  line61.visible = false;

  line61i = createSprite(height/2-400,width/2-280,10,90000);
  line61i.velocityX = 0;
  line61i.visible = false;
  
  Save.depth = Thunder2.depth+1;
  Save.depth = Thunder3.depth+1;
  Save.depth = Thunder4.depth+1;
  Save.depth = line3p.depth+1;

  line62 = createSprite(height/2+1300,width/2-280,10,90000);
  line62.velocityX = 0;
  line62.visible = false;

  line62i = createSprite(height/2-400,width/2-280,10,90000);
  line62i.velocityX = 0;
  line62i.visible = false;

  ZKINGDOM = createSprite(displayWidth/2,displayHeight-500,width,125);
  ZKINGDOM.addImage(ZKingdom);
  ZKINGDOM.scale = 0.7;
  ZKINGDOM.visible = false;

  ST63 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST63.addImage(story44);
  ST63.scale = 0.20;
  ST63.visible = false;

  ST64 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST64.addImage(story45);
  ST64.scale = 0.23;
  ST64.visible = false;

  ST65 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST65.addImage(story46);
  ST65.scale = 1.1;
  ST65.visible = false;

  ST66 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST66.addImage(story47);
  ST66.scale = 1.1;
  ST66.visible = false;

  ST67 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST67.addImage(story48);
  ST67.scale = 1.1;
  ST67.visible = false;

  ST68 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST68.addImage(story49);
  ST68.scale = 1.1;
  ST68.visible = false;

  ST69 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST69.addImage(story50);
  ST69.scale = 1.1;
  ST69.visible = false;

  ST70 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST70.addImage(story51);
  ST70.scale = 0.28;
  ST70.visible = false;

  ST71 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST71.addImage(story52);
  ST71.scale = 0.23;
  ST71.visible = false;

  ST72 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST72.addImage(story52i);
  ST72.scale = 1.1;
  ST72.visible = false;

  ST73 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST73.addImage(story53);
  ST73.scale = 1.1;
  ST73.visible = false;

  ST74 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST74.addImage(story54);
  ST74.scale = 0.23;
  ST74.visible = false;

  ST75 = createSprite(displayHeight/2+280,displayWidth/2-330,width,50);
  ST75.addImage(story55);
  ST75.scale = 1,1;
  ST75.visible = false;

  Save.depth = Thunder2.depth+1;
  Save.depth = Thunder3.depth+1;
  Save.depth = Thunder4.depth+1;
  Save.depth = line3p.depth+1;

  a = createSprite(height/2+1300,width/2-280,10,90000);
  a.velocityX = 0;
  a.visible = false;

  ai = createSprite(height/2-400,width/2-280,10,90000);
  ai.velocityX = 0;
  ai.visible = false;


  b = createSprite(height/2+1300,width/2-280,10,90000);
  b.velocityX = 0;
  b.visible = false;

  bi = createSprite(height/2-400,width/2-280,10,90000);
  bi.velocityX = 0;
  bi.visible = false;


  c = createSprite(height/2+1300,width/2-280,10,90000);
  c.velocityX = 0;
  c.visible = false;

  ci = createSprite(height/2-400,width/2-280,10,90000);
  ci.velocityX = 0;
  ci.visible = false;


  d = createSprite(height/2+1300,width/2-280,10,90000);
  d.velocityX = 0;
  d.visible = false;

  di = createSprite(height/2-400,width/2-280,10,90000);
  di.velocityX = 0;
  di.visible = false;


  e = createSprite(height/2+1300,width/2-280,10,90000);
  e.velocityX = 0;
  e.visible = false;

  ei = createSprite(height/2-400,width/2-280,10,90000);
  ei.velocityX = 0;
  ei.visible = false;


  f = createSprite(height/2+1300,width/2-280,10,90000);
  f.velocityX = 0;
  f.visible = false;

  fi = createSprite(height/2-400,width/2-280,10,90000);
  fi.velocityX = 0;
  fi.visible = false;


  g = createSprite(height/2+1300,width/2-280,10,90000);
  g.velocityX = 0;
  g.visible = false;

  gi = createSprite(height/2-400,width/2-280,10,90000);
  gi.velocityX = 0;
  gi.visible = false;


  h = createSprite(height/2+1300,width/2-280,10,90000);
  h.velocityX = 0;
  h.visible = false;

  hi = createSprite(height/2-400,width/2-280,10,90000);
  hi.velocityX = 0;
  hi.visible = false;


  i = createSprite(height/2+1300,width/2-280,10,90000);
  i.velocityX = 0;
  i.visible = false;

  ii = createSprite(height/2-400,width/2-280,10,90000);
  ii.velocityX = 0;
  ii.visible = false;


  j = createSprite(height/2+1300,width/2-280,10,90000);
  j.velocityX = 0;
  j.visible = false;

  ji = createSprite(height/2-400,width/2-280,10,90000);
  ji.velocityX = 0;
  ji.visible = false;


  k = createSprite(height/2+1300,width/2-280,10,90000);
  k.velocityX = 0;
  k.visible = false;

  ki = createSprite(height/2-400,width/2-280,10,90000);
  ki.velocityX = 0;
  ki.visible = false;


  l = createSprite(height/2+1300,width/2-280,10,90000);
  l.velocityX = 0;
  l.visible = false;

  li = createSprite(height/2-400,width/2-280,10,90000);
  li.velocityX = 0;
  li.visible = false;


  m = createSprite(height/2+1300,width/2-280,10,90000);
  m.velocityX = 0;
  m.visible = false;

  mi = createSprite(height/2-400,width/2-280,10,90000);
  mi.velocityX = 0;
  mi.visible = false;

  ZEXT1 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT1.addImage(zext1);
  ZEXT1.scale = 0.7;
  ZEXT1.visible = false;

  ZEXT2 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT2.addImage(zext2);
  ZEXT2.scale = 0.7;
  ZEXT2.visible = false;

  ZEXT3 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT3.addImage(zext3);
  ZEXT3.scale = 0.7;
  ZEXT3.visible = false;

  ZEXT4 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT4.addImage(zext4);
  ZEXT4.scale = 0.7;
  ZEXT4.visible = false;

  ZEXT5 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT5.addImage(zext5);
  ZEXT5.scale = 0.7;
  ZEXT5.visible = false;

  ZEXT6 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT6.addImage(zext6);
  ZEXT6.scale = 0.7;
  ZEXT6.visible = false;

  ZEXT7 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT7.addImage(zext7);
  ZEXT7.scale = 0.7;
  ZEXT7.visible = false;

  ZEXT8 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT8.addImage(zext8);
  ZEXT8.scale = 0.7;
  ZEXT8.visible = false;

  ZEXT9 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT9.addImage(zext9);
  ZEXT9.scale = 0.7;
  ZEXT9.visible = false;

  ZEXT10 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT10.addImage(zext10);
  ZEXT10.scale = 0.7;
  ZEXT10.visible = false;

  ZEXT11 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT11.addImage(zext11);
  ZEXT11.scale = 0.7;
  ZEXT11.visible = false;

  ZEXT12 = createSprite(displayHeight/2+290,displayWidth/2-40,width,50);
  ZEXT12.addImage(zext12);
  ZEXT12.scale = 0.7;
  ZEXT12.visible = false;

  ZKINGDOM2 = createSprite(displayWidth/2,displayHeight-505,width,125);
  ZKINGDOM2.addImage(ZKingdom2);
  ZKINGDOM2.scale = 0.7;
  ZKINGDOM2.visible = false;

  FINISH = createSprite(displayWidth/2,displayHeight-500,width,125);
  FINISH.addImage(Finish);
  FINISH.scale = 0.9;
  FINISH.visible = false;

  m2 = createSprite(height/2+1300,width/2-280,10,90000);
  m2.velocityX = 0;
  m2.visible = false;

  m2i = createSprite(height/2-400,width/2-280,10,90000);
  m2i.velocityX = 0;
  m2i.visible = false;

  score = 0;
}