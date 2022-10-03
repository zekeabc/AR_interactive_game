let solid = '0px solid black';
first_open = 0
fadeBoolin = 0
fadeoutBoolin = 0
downBoolin = 0
delay_time = 0
let fadepage
function setup() {
  createCanvas(windowWidth, windowHeight)
    //----------------------Music----------------------
    start_sound = loadSound('static/music/start.mp3');
    home_sound = loadSound('static/music/home.mp3');
    shutter_sound = loadSound('static/music/home.mp3');
    check_sound = loadSound('static/music/check.mp3');
    notice_sound = loadSound('static/music/notice.mp3');
    ship_sound = loadSound('static/music/ship.mp3');
    select_sound = loadSound('static/music/select.mp3');
    shutter_sound = loadSound('static/music/shutter.mp3');
    boing_sound = loadSound('static/music/boing.mp3');
    bgm = loadSound('static/music/男人與他的海.MP3');
    home_voice = loadSound('static/music/賞鯨攜帶物品.m4a');
    ship_voice = loadSound('static/music/賞鯨注意事項.m4a');
    game_voice = loadSound('static/music/前言.m4a');

  //--------------------Page_Home--------------------
  // WorkSpace
  workspace = createImg('static/picture/page_home/home_workspace.png')
  workspace.position(0, 0)
  workspace.size(windowWidth, windowHeight)
  workspace.hide()
  
  //--------------------Page_Ship--------------------
  // Alert
  alert = createImg('static/picture/page_ship/alert/ship_alert.png')
  alert.position(0, -1080)
  alert.size(windowWidth, windowHeight)
  alert.hide()
  
  camera_frame = []
  //--------------------Page_Game--------------------
  // Camera Frame 1x
  camera_frame_1 = createImg('static/picture/page_game/1x.png')
  camera_frame_1.position(0, 0)
  camera_frame_1.size(1920 * 0.8, 1080 * 0.8)
  camera_frame_1.hide()
  camera_frame[0] = camera_frame_1
  // Camera Frame 5x
  camera_frame_5 = createImg('static/picture/page_game/5x.png')
  camera_frame_5.position(0, 0)
  camera_frame_5.size(1920 * 0.8, 1080 * 0.8)
  camera_frame_5.hide()
  camera_frame[1] = camera_frame_5
  // Camera Frame 7x
  camera_frame_7 = createImg('static/picture/page_game/7x.png')
  camera_frame_7.position(0, 0)
  camera_frame_7.size(1920 * 0.8, 1080 * 0.8)
  camera_frame_7.hide()
  camera_frame[2] = camera_frame_7
  // Camera Frame 9x
  camera_frame_9 = createImg('static/picture/page_game/9x.png')
  camera_frame_9.position(0, 0)
  camera_frame_9.size(1920 * 0.8, 1080 * 0.8)
  camera_frame_9.hide()
  camera_frame[3] = camera_frame_9

  //--------------------All_Page---------------------
  // Enlarge Button And Image
  enlarge = createImg('static/picture/maximize.png')
  enlarge.position(windowWidth - 140, windowHeight - 140)
  // enlarge.size(64, 64)
  enlarge.mousePressed(FullScreen)
  
  // Tosmall Button And Image
  tosmall = createImg('static/picture/minimize.png')
  tosmall.position(windowWidth - 140, windowHeight - 140)
  tosmall.mousePressed(QuitScreen)
  // tosmall.size(64, 64)
  tosmall.hide()
  
  // Back Button And Image
  back = createImg('static/picture/back.png')
  back.position(windowWidth - 100, 30)
  back.mousePressed(Back_Item)
  // back.size(64, 64)
  back.hide()
  
  // bg_change = false
  Back_Status = 0
  Page_Status = 0
  Page_Start()
  // Page_reShip()
}

function Back_Item(){
  // if(Back_Status == 1){
  //   Page_Home_Close()
  //   Page_Start()
  // }
  if(Back_Status == 4){
    Page_Book_Close()
    Page_reShip()
  }
  else if (Back_Status == 5){
    pic_show_Booli = 0
    Page_Book()
    Page_reBook_Close()
  }
  else if (Back_Status == 7){
    back.hide()
    Page_reBook_Close()
    Page_Game()
    camera_frame[scale_i].show()
    scaleBoolin = 1
    pic_show_Booli = 0
    // parabolaBoolin = 1
  }
  else if (Back_Status == 8){
    parabolaBoolin = 0
    scaleBoolin = 0
    Page_reShip()
    Page_Game_Close()
  }
  // else if(Back_Status == 3){
  //   Page_reShip_Close()
  //   Page_Ship()
  // }
}

function Page_Start(){
  back.hide()
  // Page_Status = 1
  
  //--------------------Page_Start--------------------
  // Start Button
  start = createButton('')
  start.position(150, 580)
  start.mousePressed(Start_Item)
  start.size(500, 150)
  let col = color(200,255,255,0)
  start.style('background-color', col)
  start.style('border', solid)
  start.style('transform', 'rotate(-8.616deg)')
  // start.remove()
  
  // Background Image
  bg = loadImage('static/picture/background/bg_start.jpg')
}

function Start_Item() {
  timer_set(0, 130)
  fadeout_page = createImg('static/picture/background/bg_home.jpg')
  fadeout_page.position(0,0)
  fadeout_page.size(1920*0.8,1080*0.8)
  fade_set(fadeout_page, 30)
  start_sound.play();
  bgm.setVolume(0.3)
  bgm.setLoop(true)
  bgm.play();
  // Page_Home()
  // Page_Start_Close()
}

function Page_Start_Close(){
  start.remove()
}

anime = -1
let icon = []
function Page_Home(){
  // Back_Status = 1
  back.hide()
  Page_Status = 2
  check_cout = 0
  //--------------------Page_Home--------------------
  // check Image And Button
  let col = color(200,255,255,0)
  
  check1 = createImg('static/picture/page_home/home_check.png')
  check1.position(815, 172)
  check1.hide()
  
  bt1 = createButton('')
  bt1.position(815, 167)
  bt1.mousePressed(check_Bt1)
  bt1.size(45, 45)
  bt1.style('background-color', col)
  bt1.style('border', solid)
  
  check2 = createImg('static/picture/page_home/home_check.png')
  check2.position(815, 320)
  check2.hide()
  
  bt2 = createButton('')
  bt2.position(815, 318)
  bt2.mousePressed(check_Bt2)
  bt2.size(45, 45)
  bt2.style('background-color', col)
  bt2.style('border', solid)
  
  check3 = createImg('static/picture/page_home/home_check.png')
  check3.position(815, 432)
  check3.hide()
  
  bt3 = createButton('')
  bt3.position(815, 427)
  bt3.mousePressed(check_Bt3)
  bt3.size(45, 45)
  bt3.style('background-color', col)
  bt3.style('border', solid)
  
  check4 = createImg('static/picture/page_home/home_check.png')
  check4.position(815, 580)
  check4.hide()
  
  bt4 = createButton('')
  bt4.position(815, 577)
  bt4.mousePressed(check_Bt4)
  bt4.size(45, 45)
  bt4.style('background-color', col)
  bt4.style('border', solid)
  
  check5 = createImg('static/picture/page_home/home_check.png')
  check5.position(815, 690)
  check5.hide()
  
  bt5 = createButton('')
  bt5.position(815, 685)
  bt5.mousePressed(check_Bt5)
  bt5.size(45, 45)
  bt5.style('background-color', col)
  bt5.style('border', solid)
  // icon1（望遠鏡）
  icon1 = createImg('static/picture/page_home/home5.png')
  icon1.position(245, 30)
  icon1.hide()
  icon[0] = icon1
  // icon2（太陽眼鏡）
  icon2 = createImg('static/picture/page_home/home4.png')
  icon2.position(245, 30)
  icon2.hide()
  icon[1] = icon2
  // icon3（防曬油）
  icon3 = createImg('static/picture/page_home/home3.png')
  icon3.position(245, 30)
  icon3.hide()
  icon[2] = icon3
  // icon4（衣褲）
  icon4 = createImg('static/picture/page_home/home2.png')
  icon4.position(245, 30)
  icon4.hide()
  icon[3] = icon4
  // icon5（身分證件）
  icon5 = createImg('static/picture/page_home/home1.png')
  icon5.position(245, 30)
  icon5.hide()
  icon[4] = icon5  
  // Background Image
  bg = loadImage('static/picture/background/bg_home.jpg')
  workspace.show()
  fade_set(workspace, 30)
  home_sound.play()
  home_voice.play()
}

function check_Bt1(){
  moveanime_close()
  check1.show()
  icon1.show()
  check_cout += 1
  bt1.remove()
  moveX = 245
  moveY = 30
  anime = 0
  check_sound.setVolume(0.5)
  check_sound.play()
}
function check_Bt2(){
  moveanime_close()
  check2.show()
  icon2.show()
  check_cout += 1
  bt2.remove()
  moveX = 245
  moveY = 30
  anime = 1
  check_sound.setVolume(0.5)
  check_sound.play()
}
function check_Bt3(){
  moveanime_close()
  check3.show()
  icon3.show()
  check_cout += 1
  bt3.remove()
  moveX = 330
  moveY = 0
  anime = 2
  check_sound.setVolume(0.5)
  check_sound.play()
}
function check_Bt4(){
  moveanime_close()
  check4.show()
  icon4.show()
  check_cout += 1
  bt4.remove()
  moveX = 245
  moveY = 0
  anime = 3
  check_sound.setVolume(0.5)
  check_sound.play()
}
function check_Bt5(){
  moveanime_close()
  check5.show()
  icon5.show()
  check_cout += 1
  bt5.remove()
  moveX = 245
  moveY = 30
  anime = 4
  check_sound.setVolume(0.5)
  check_sound.play()
}
function check_sum(x){
  if (x == 5&anime==-1){
    if (first_open == 0){
      timer_set(1, 120)
      fadeout_page = createImg('static/picture/background/bg_ship.jpg')
      fadeout_page.position(0,0)
      fadeout_page.size(1920*0.8,1080*0.8)
      fade_set(fadeout_page, 30)
      home_voice.stop()
      // Page_Home_Close()
      // Page_Ship()
    }
    else if(first_open == 1){
      timer_set(2, 120)
      fadeout_page = createImg('static/picture/background/bg_reship.jpg')
      fadeout_page.position(0,0)
      fadeout_page.size(1920*0.8,1080*0.8)
      fade_set(fadeout_page, 30)
      home_voice.stop()
      // Page_Home_Close()
      // Page_reShip()
    }
  }
}
function moveanime(){
  if(anime != -1){
    icon[anime].position(moveX, moveY)
    icon[anime].style("transform", "scale("+scale_size+")")
    moveX-=1.5
    moveY+=3
    scale_size-=0.015
    if(scale_size<=0){
      moveanime_close()
      check_sum(check_cout)
    }
  }
}
function moveanime_close(){
  anime = -1
  scale_size = 1
  icon1.hide()
  icon2.hide()
  icon3.hide()
  icon4.hide()
  icon5.hide()
}

function Page_Home_Close(){
  workspace.hide()
  check1.remove()
  check2.remove()
  check3.remove()
  check4.remove()
  check5.remove()
  icon1.remove()
  icon2.remove()
  icon3.remove()
  icon4.remove()
  icon5.remove()
  bt1.remove()
  bt2.remove()
  bt3.remove()
  bt4.remove()
  bt5.remove()
}

function Page_Ship(){
  // Back_Status = 2
  back.hide()
  Page_Status = 3
  notice_cout = 0
  
  notice1 = createImg('static/picture/page_ship/alert/ship_check.png')
  notice1.position(270, 230)
  notice1.mousePressed(notice_Bt1)
  notice1.style('opacity','0')
  
  notice2 = createImg('static/picture/page_ship/alert/ship_check.png')
  notice2.position(270, 308)
  notice2.mousePressed(notice_Bt2)
  notice2.style('opacity','0')
  
  notice3 = createImg('static/picture/page_ship/alert/ship_check.png')
  notice3.position(270, 380)
  notice3.mousePressed(notice_Bt3)
  notice3.style('opacity','0')
  
  notice4 = createImg('static/picture/page_ship/alert/ship_check.png')
  notice4.position(270, 455)
  notice4.mousePressed(notice_Bt4)
  notice4.style('opacity','0')
  
  notice5 = createImg('static/picture/page_ship/alert/ship_check.png')
  notice5.position(270, 535)
  notice5.mousePressed(notice_Bt5)
  notice5.style('opacity','0')
  
  notice6 = createImg('static/picture/page_ship/alert/ship_check.png')
  notice6.position(270, 610)
  notice6.mousePressed(notice_Bt6)
  notice6.style('opacity','0')
  
  notice7 = createImg('static/picture/page_ship/alert/ship_check.png')
  notice7.position(270, 680)
  notice7.mousePressed(notice_Bt7)
  notice7.style('opacity','0')
  
  // Background Image
  bg = loadImage('static/picture/background/bg_ship.jpg')
  if (first_open == 0){
    alert.show()
    first_open = 1
    downanime_set(alert, 30)
  }
  else if(first_open == 1){
    Page_Game()
    Page_Ship_Close()
  }
  ship_voice.play()
}

function notice_Bt1(){
  notice1.style('opacity','1')
  notice_sum(1)
  notice_sound.setVolume(0.5)
  notice_sound.play()
}
function notice_Bt2(){
  notice2.style('opacity','1')
  notice_sum(2)
  notice_sound.setVolume(0.5)
  notice_sound.play()
}
function notice_Bt3(){
  notice3.style('opacity','1')
  notice_sum(3)
  notice_sound.setVolume(0.5)
  notice_sound.play()
}
function notice_Bt4(){
  notice4.style('opacity','1')
  notice_sum(4)
  notice_sound.setVolume(0.5)
  notice_sound.play()
}
function notice_Bt5(){
  notice5.style('opacity','1')
  // notice_cout += 1
  notice_sum(5)
  notice_sound.setVolume(0.5)
  notice_sound.play()
}
function notice_Bt6(){
  notice6.style('opacity','1')
  notice_sum(6)
  notice_sound.setVolume(0.5)
  notice_sound.play()
}
function notice_Bt7(){
  notice7.style('opacity','1')
  notice_sum(7)
  notice_sound.setVolume(0.5)
  notice_sound.play()
}
let notice_tag = [0, 0, 0, 0, 0, 0, 0]
function notice_sum(x){
  if (notice_tag[x-1] == 0){
    notice_cout += 1
    notice_tag[x-1] = 1
  }
  if (notice_cout == 7){
    ship_voice.stop()
    timer_set(2, 120)
    fadeout_page = createImg('static/picture/background/bg_reship.jpg')
    fadeout_page.position(0,0)
    fadeout_page.size(1920*0.8,1080*0.8)
    fade_set(fadeout_page, 30)
  }
}

function Page_Ship_Close(){
  alert.hide()
  notice1.remove()
  notice2.remove()
  notice3.remove()
  notice4.remove()
  notice5.remove()
  notice6.remove()
  notice7.remove()
}

function Page_reShip(){
  // Back_Status = 3
  back.hide()
  Page_Status = 4
  let col = color(200,255,255,0)
  
  icon_backpack = createButton('')
  icon_backpack.position(95, 500)
  icon_backpack.mousePressed(backpack_chose)
  icon_backpack.size(340, 340)
  icon_backpack.style('background-color', col)
  icon_backpack.style('border', solid)
  
  icon_notice = createButton('')
  icon_notice.position(460, 600)
  icon_notice.mousePressed(notice_chose)
  icon_notice.size(285, 180)
  icon_notice.style('background-color', col)
  icon_notice.style('border', solid)
  
  icon_illustrate = createButton('')
  icon_illustrate.position(795, 600)
  icon_illustrate.mousePressed(illustrate_chose)
  icon_illustrate.size(300, 230)
  icon_illustrate.style('background-color', col)
  icon_illustrate.style('border', solid)
  
  icon_camera = createButton('')
  icon_camera.position(1130, 620)
  icon_camera.mousePressed(camera_chose)
  icon_camera.size(290, 200)
  icon_camera.style('background-color', col)
  icon_camera.style('border', solid)
  
  // Background Image
  bg = loadImage('static/picture/background/bg_reship.jpg')
}

function backpack_chose(){
  Page_Home()
  Page_reShip_Close()
  select_sound.play()
}
function notice_chose(){
  first_open = 0
  Page_Ship()
  Page_reShip_Close()
  
  // alert.show()
}
function illustrate_chose(){
  Page_Book()
  Page_reShip_Close();
  select_sound.play()
}
function camera_chose(){
  fadeout_page = []
  fadeout_page[0] = createImg('static/picture/background/bg_reship.jpg')
  fadeout_page[0].position(0,0)
  fadeout_page[0].size(1920*0.8,1080*0.8)
  fadeout_page[1] = createImg('static/picture/background/bg_ship.jpg')
  fadeout_page[1].position(0,0)
  fadeout_page[1].size(1920*0.8,1080*0.8)
  fadeout_page[2] = createImg('static/picture/background/bg_game.jpg')
  fadeout_page[2].position(0,0)
  fadeout_page[2].size(1920*0.8,1080*0.8)
  skip = createImg('static/picture/page_game/SKIP.png')
  skip.position(1240, 700)
  skip.hide()
  fade_set(fadeout_page[1], 0)
  fadeout_set(fadeout_page[2], 60)
  Page_Game()
  Page_reShip_Close()
  select_sound.play()
  game_voice.play()
  // Page_Ship()
}

function Page_reShip_Close(){
  icon_backpack.remove()
  icon_notice.remove()
  icon_illustrate.remove()
  icon_camera.remove()
}

let book_all = []
let book_status = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
let book_pos = []
function Page_Book(){
  Back_Status = 4
  back.show()
  Page_Status = 5
  step_cout = 0
  stepX = 0
  stepY = 0
  for (var i=0;i<15;i++){
    if (book_status[i][0] == 0){
      book_all[i] = createImg('static/whale/black/book資產 ' + str(i+84) + '.png');
    }
    else if(book_status[i][0] == 1){
      book_all[i] = createImg('static/whale/white/book資產 ' + str(i+69) + '.png');
      book_all[i].mousePressed(book_chose)
      book_all[i].mouseOver(move_sound)
    }
    book_all[i].size(268 * 0.8, 276 * 0.8)
    book_all[i].position(stepX + 180, stepY + 128)
    book_pos[i] = [stepX + 180, stepY + 135]
    step_cout += 1
    stepX += (300 * 0.8)
    if (step_cout == 5){
      stepX = 0
      stepY += 233
      step_cout = 0
    }
    
  }
  
  // Background Image
  bg = loadImage('static/picture/background/bg_book.jpg')
}
function move_sound(){
  boing_sound.play()
}

function book_chose(){
  for (var i=0;i<15;i++){
    if ((mouseX >= book_pos[i][0] && mouseX <= book_pos[i][0] + (268*0.8)) && (mouseY >= book_pos[i][1] && mouseY <= book_pos[i][1] + (276*0.8))){
      Page_reBook(i)
      Page_Book_Close()
    }
  }
  
}
function Page_Book_Close(){
  for (let i=0;i<15;i++){
    book_all[i].remove()
  }
}

function Page_reBook(x){
  // print(x)
  if (Page_Status == 5){
    Back_Status = 5
  }
  else if (Page_Status == 7){
    Back_Status = 7
  }
  back.show()
  Page_Status = 6

  re_book_picshow_set(x)
  
  whale_type = createImg('static/whale/inside/book資產 ' + str(x+114) + '.png')
  whale_type.size(493 * 0.8, 624 * 0.8)
  whale_type.position(100,100)

  score_sum = book_status[x][1] + book_status[x][2] + book_status[x][3]
  star_type = 1
  if (score_sum > 0 && score_sum < 11){
    star_type = 1
  }
  else if (score_sum > 10 && score_sum < 21){
    star_type = 2
  }
  else if (score_sum > 20 && score_sum < 31){
    star_type = 3
  }

  star = createImg('static/picture/page_rebook/star' + str(star_type) + '.png')
  star.size(475 * 0.8, 195 * 0.8)
  star.position(100,640)
  
  score_size = createP(str(book_status[x][1]))
  score_size.style('font-family', 'ZauriSansH')
  score_size.size(120, 70)
  score_size.style('text-align', 'center')
  score_size.style('border', solid)
  score_size.style('font-size', '98.7px')
  score_size.style('color', '#3d3d3d')
  score_size.position(645, 515)

  score_rotate = createP(str(book_status[x][2]))
  score_rotate.style('font-family', 'ZauriSansH')
  score_rotate.size(120, 70)
  score_rotate.style('text-align', 'center')
  score_rotate.style('border', solid)
  score_rotate.style('font-size', '98.7px')
  score_rotate.style('color', '#3d3d3d')
  score_rotate.position(832, 515)

  score_time = createP(str(book_status[x][3]))
  score_time.style('font-family', 'ZauriSansH')
  score_time.size(120, 70)
  score_time.style('text-align', 'center')
  score_time.style('border', solid)
  score_time.style('font-size', '98.7px')
  score_time.style('color', '#3d3d3d')
  score_time.position(1019, 515)

  score_all = createP(str(score_sum))
  score_all.style('font-family', 'ZauriSansH')
  score_all.size(155, 120)
  score_all.style('text-align', 'center')
  score_all.style('border', solid)
  score_all.style('font-size', '132.3px')
  score_all.style('color', '#3d3d3d')
  score_all.position(1215, 420)
  

  // Background Image
  bg = loadImage('static/picture/background/bg_rebook.jpg')
}

let pic_show_Booli = 0
function re_book_picshow_set(typei){
  pic_show_Booli = 1
  idx = book_status[typei][4]
}

function re_book_picshow(){
  if (pic_show_Booli == 1){
    push()
    rotate(-1.95 / 180 * PI)
    image(idx, 617, 160, 897.169 * 0.85, 539.540 * 0.85);
    pop()
  }
}

function Page_reBook_Close(){
  whale_type.remove()
  star.remove()
  score_size.remove()
  score_rotate.remove()
  score_time.remove()
  score_all.remove()
}

let fish = []
let save_detect = 0
function Page_Game(){
  Back_Status = 8
  back.show()

  Page_Status = 7
  // Background Image
  bg = loadImage('static/picture/background/bg_game.jpg')
  back_page = loadImage('static/picture/page_game/game資產 3.png')
  fish[0] = loadImage("static/whale/game/69-熱帶斑海豚.png")
  fish[1] = loadImage("static/whale/game/70-瑞氏海豚(花紋海豚).png")
  fish[2] = loadImage("static/whale/game/71-短肢領航鯨.png")
  fish[3] = loadImage("static/whale/game/72-小抹香鯨.png")
  fish[4] = loadImage("static/whale/game/73-短吻飛旋海豚.png")
  fish[5] = loadImage("static/whale/game/74-瓶鼻海豚.png")
  fish[6] = loadImage("static/whale/game/75-偽虎鯨.png")
  fish[7] = loadImage("static/whale/game/76-真海豚.png")
  fish[8] = loadImage("static/whale/game/77-長吻真海豚.png")
  fish[9] = loadImage("static/whale/game/78-長吻飛旋海豚.png")
  fish[10] = loadImage("static/whale/game/79-虎鯨.png")
  fish[11] = loadImage("static/whale/game/80-抹香鯨.png")
  fish[12] = loadImage("static/whale/game/81-弗氏海豚.png")
  fish[13] = loadImage("static/whale/game/82-小虎鯨.png")

  // image(bg, 0, 0)
  // mouseWheel()
}

function Page_Game_Close(){
  image(bg, 0, 0)
  for (let i=0;i<camera_frame.length;i++){
    camera_frame[i].hide()
  }
}

// anifish -> 那隻蠢鯨魚的照片，可以找 x y width height
// Topx，Topy -> 頂點座標
// fishi -> 鯨魚種類
// fscale_i -> 魚的放大倍率、scale_i -> 滑鼠的放大倍率
function mousePressed(){
  if (parabolaBoolin == 1 && Page_Status == 7){
    save_tmp = get(290 * 0.8, 195 * 0.8, 1341 * 0.8, 689 * 0.8)
    for (let i=0;i<camera_frame.length;i++){
      camera_frame[i].hide()
    }
    save_detect = 1
    scaleBoolin = 0
    parabolaBoolin = 0
    // 計算分數
    if (book_status[14][0] == 0 && scale_i == 3 && mouseX >= 0 && mouseX <= 20 && mouseY >= 265 && mouseY <= 400){
      book_status[14][0] = 1
      book_status[14][1] = 10
      target_cout = (pow((pow(20, 2) + pow(90, 2)), 0.5))
      real_cout = (pow((pow(mouseX - 0, 2) + pow(mouseY - 355, 2)), 0.5))
      book_status[14][2] = 10 - int(10 * (real_cout / target_cout))
      book_status[14][3] = 10
      fishi = 14
    }
    else{
      book_status[fishi][0] = 1
      if ((scale_i - 1) == fscale_i){
        book_status[fishi][1] = 10
      }
      else{
        book_status[fishi][1] = 3
      }
      tmpx = bgX + parabolaX * bgscale[scale_i]
      tmpy = bgY + parabolaY * bgscale[scale_i]
      center_dotx = (1341 * 0.8) / 2
      center_doty = (689 * 0.8) / 2
      book_status[fishi][2] = 10 - int(10 * (pow((pow(tmpx - center_dotx, 2) + pow(tmpy - center_doty, 2)), 0.5)) / (pow((pow(center_dotx, 2) + pow(center_doty, 2)), 0.5)))
      if (book_status[fishi][2] < 0){
        book_status[fishi][2] = 0
      }
      // book_status[fishi][2] = 5
      book_status[fishi][3] = int(10 * ((bgY + Topy * bgscale[scale_i]) / tmpy))
      // print('Topy:' + Topy)
      // print('tmpy:' + tmpy)
      // -----------------
      
    }

    // 容器裝圖片
    book_status[fishi][4] = save_tmp
    // Page_reBook(fishi)
    // Page_Game_Close()
    // -----------------
    shutter_sound.play()
    timer_set(3, 120)
  }
}

function show_save(){
  if (save_detect == 1){
    // rotate(-0.1);
    image(back_page, 0, 0, windowWidth, windowHeight)
    push()
    rotate(-1.9 / 180 * PI)
    image(save_tmp, (windowWidth - save_tmp.width) / 2 + 31, (windowHeight - save_tmp.height) / 2 + 5, 1199.131 * 0.8, 721.134 * 0.8);
    pop()
    // save_tmp.position(0, 0)
    // save_detect = 0
  }
}

function downanime_set(x, delay){
  moveY = -1080
  downpage = x
  down_i=0
  downBoolin = 1
  delay_show = delay
}
function downanime(){
  if(downBoolin == 1){
    if(delay_show > 1){
      downpage.style('opacity',0)
      down_i += 1
      if(down_i>=delay_show){
        down_i = 0
        delay_show = 0
      }
    }
    else{
      downpage.style('opacity',1)
      downpage.position(0, moveY)
      if(moveY>=0){
        downBoolin = 0
        ship_sound.play()
      }
      moveY+=20
    }
  }
}
function fade_set(x, delay){
  fadepage = x
  fade_i=0
  fadeBoolin = 1
  delay_show = delay
}
function fade(){
  if(fadeBoolin == 1){
    if(delay_show > 1){
      fadepage.style('opacity',0)
      fade_i += 1
      if(fade_i>=delay_show){
        fade_i = 0
        delay_show = 0
      }
    }
    else{
      fadepage.style('opacity',fade_i)
      if(fade_i>=1){
        fadeBoolin = 0
      }
      fade_i+=0.02
    }
  }
}
function fadeout_set(x, delay){
  fadeoutpage = x
  fadeout_i=0
  fadeoutBoolin = 1
  delay_show1 = delay
}
function fadeout(){
  if(fadeoutBoolin == 1){
    if(delay_show1 > 1){
      fadeoutpage.style('opacity',0)
      fadeout_i += 1
      if(fadeout_i>=delay_show1){
        fadeout_i = 0
        delay_show1 = 0
      }
    }
    else{
      if (game_voice.isPlaying() == false){
        fadeoutpage.style('opacity',fadeout_i)
        if(fadeout_i>=1){
          fadeoutBoolin = 0
          // bg_reship.remove()
          // bg_ship.remove()
          // bg_game.remove()
          for(let i=0; i<fadeout_page.length; i++){
            fadeout_page[i].remove()
          }
          scaleBoolin = 1
          camera_frame[0].show()
          scale_i = 0
          skip.remove()
        }
        fadeout_i+=0.02
      }
      else{
        skip.show()
        skip.mousePressed(skip_voi)
      }
    }
  }
}
function skip_voi(){
  game_voice.stop()
}
function timer_set(x, time){
  delay_i=0
  delay_time = time
  timer_page = x
}
function timer(){
  if(delay_time > 0){
    if(delay_i>=delay_time){
      // delay_i = 0
      delay_time = 1
      if(timer_page == 0){
        Page_Home()
        Page_Start_Close()
        timer_page = -1
      }
      if(timer_page == 1){
        Page_Ship()
        Page_Home_Close()
        timer_page = -1
      }
      if(timer_page == 2){
        notice_tag = [0, 0, 0, 0, 0, 0, 0]
        Page_reShip()
        Page_Ship_Close()
        Page_Home_Close()
        timer_page = -1
      }
      if(timer_page == 3){
        delay_i -= 40
        if(delay_i <= 0){
          delay_time = 0
          save_detect = 0
          Page_reBook(fishi)
          Page_Game_Close()
        }
      }
      if(timer_page == -1){
        delay_i -= 40
        if(delay_i <= 0){
          delay_time = 0
          fadeout_page.remove()
        }
      }
      
    }
    else
      delay_i += 1
  }
}
bgscale = [1, 1.5, 2, 2.5]
fishscale = [0.4167, 0.3125, 0.25]
scale_i = 0
scaleBoolin = 0
parabolaBoolin = 0
function parabola_set(i, si, x, y, w){
  parabolaBoolin = 1
  fscale = fishscale[si]
  fishX = x
  fishY = y
  r = PI/2;
  parabolaX = x+w
  endX = x-w
  anifish = fish[i]
}
function parabola() {
  if(parabolaBoolin == 1){
    push()
    // imageMode(CENTER);
    // y = a(x-b)^2
    parabolaY = 0.01*pow((parabolaX-fishX), 2)+fishY
    translate (bgX+parabolaX*bgscale[scale_i], bgY+parabolaY*bgscale[scale_i]);
    rotate(r)
    image(anifish, 0, 0, anifish.width*fscale*bgscale[scale_i], anifish.height*fscale*bgscale[scale_i])
    parabolaX-=2
    r -= 0.01
    if(parabolaX <= endX){
      parabolaBoolin = 0
    }
    pop()
    // sea_tmp = get(0, Topy+300, windowWidth, windowHeight)
    image(sea_tmp, 0, Topy+300)
    // rect(0, Topy+300, windowWidth, windowHeight)
  }
}
function gameanime(){
  if(scaleBoolin == 1){
    bgX = -1*(mouseX*(bgscale[scale_i]-1))
    bgY = -1*(mouseY*(bgscale[scale_i]-1))
    // imageMode(CORNER);
    image(bg, bgX, bgY, windowWidth*bgscale[scale_i], windowHeight*bgscale[scale_i]);
    if(parabolaBoolin == 0){
      fishi = int(random(0, 13.9))
      Topx = random(600, 1320)
      Topy = random(200, windowHeight - 300)
      fscale_i = int(random(0, 2.9))
      parabola_set(fishi, fscale_i, Topx, Topy, 300)
    }
    sea_tmp = get(0, Topy+300, windowWidth, windowHeight)
    // textSize(32)
    // text('fscale_i：' + fscale_i, 50, 130)
    // fill(0, 102, 153)
    // rx = random(0, windowWidth)
    // ry = random(0, windowHeight)
    // image(fish[0], bgX+200*bgscale[scale_i], bgY+200*bgscale[scale_i], fish[0].width/4*bgscale[scale_i], fish[0].height/4*bgscale[scale_i])
  }
}
function mouseWheel(event) {
  if(scaleBoolin == 1){
    if(event.delta>0){
      scale_i = (scale_i+1)
      if(scale_i>3) scale_i = 3
    }
    else{
      scale_i = (scale_i-1)
      if(scale_i<0) scale_i = 0
  }
  for(let i=0; i<camera_frame.length; i++){
    camera_frame[i].hide()
  }
  camera_frame[scale_i].show()
  }
}
function draw() {
  // if(bg_change){
  background(bg)
  // }
  // else{
  //   background(255)
  // }
  
  moveanime()
  fade()
  fadeout()
  downanime()
  timer()
  gameanime()
  parabola()
  show_save()
  re_book_picshow()

  // textSize(32)
  // text('mouseX：' + mouseX, 50, 50)
  // fill(0, 102, 153)
  
  // textSize(32)
  // text('mouseY：' + mouseY, 50, 90)
  // fill(0, 102, 153)
}

function FullScreen(){
  let fs = fullscreen()
  fullscreen(!fs)
  // if(Page_Status == 1){
  //   Page_Start()
  // }
  // else if(Page_Status == 2){
  //   Page_Home()
  // }
  // else if(Page_Status == 3){
  //   Page_Ship()
  // }
  tosmall.show()
  enlarge.hide()
}

function QuitScreen(){
  let fs = fullscreen()
  fullscreen(!fs)
  // if (Page_Status == 1){
  //   Page_Start_Close()
  // }
  // else if (Page_Status == 2){
  //   Page_Home_Close()
  // }
  // else if (Page_Status == 3){
  //   Page_Ship_Close()
  // }
  tosmall.hide()
  enlarge.show()
  // back.hide()

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  // bg_change = !bg_change
  enlarge.position(windowWidth - 140, windowHeight - 140)
  tosmall.position(windowWidth - 140, windowHeight - 140)
  back.position(windowWidth - 150, 30)
  workspace.size(windowWidth, windowHeight)
  alert.size(windowWidth, windowHeight)
}