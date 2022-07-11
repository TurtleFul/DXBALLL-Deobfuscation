var mbbkgrnd_img = new Image;
mbbkgrnd_img.src = "/game/images/mbbkgrnd.png";
var sphere_img = new Image;
sphere_img.src = "/game/images/sphere.png";
var Highscor_img = new Image;
Highscor_img.src = "/game/images/Highscor.png";
var Mainmenu_img = new Image;
Mainmenu_img.src = "/game/images/Mainmenu.png";
var Intro_img = new Image;
Intro_img.src = "/game/images/Intro.png";
var bigbolt_img = new Image;
for (bigbolt_img.src = "/game/images/bigbolt.png", audioName = ["Ethno_pa.mp3", "Acker-gs.mp3", "12flight.mp3", "Brain.mp3", "Freebee.mp3", "Gmfigaro.mp3", "Ao-laser", "Bang", "Bassdrum", "Boing", "Byeball", "Effect", "Effect2", "Fanfare", "Glass", "Gunfire", "Humm", "Orchblas", "Orchestr", "Padexplo", "Peow!", "Ricochet", "Saucer", "Sweepdow", "Swordswi", "Tank", "Thudclap", "Voltage", "Whine", "Wowpulse", "Xploshor", "Xplosht1"], audioFile = [], i = 0; i < audioName.length; i++) {
  audioFile[audioName[i]] = document.createElement("audio"), "3" == audioName[i][audioName[i].length - 1] ? (source = document.createElement("source"), source.setAttribute("src", "/game/audio/sound/" + audioName[i]), audioFile[audioName[i]].appendChild(source)) : (source = document.createElement("source"), source.setAttribute("src", "/game/audio/sfx/wav/" + audioName[i] + ".wav"), audioFile[audioName[i]].appendChild(source), source = document.createElement("source"), source.setAttribute("src", "/game/audio/sfx/mp3/" + audioName[i] + ".mp3"), audioFile[audioName[i]].appendChild(source), source = document.createElement("source"), source.setAttribute("src", "/game/audio/sfx/aac/" + audioName[i] + ".aac"), audioFile[audioName[i]].appendChild(source)), audioFile[audioName[i]].load();
}
function dx_ball(Shapefile, anigif_base_url) {
  window.soundon = Shapefile;
  window.saveron = anigif_base_url;
  myFonts = new function () {
    this.font = [];
    this.getFont = function (r, isSlidingUp, canCreateDiscussions, dontForceConstraints) {
      this.font[r] = {};
      this.font[r].space = dontForceConstraints;
      this.fontFile = isSlidingUp;
      this.sb = 16;
      this.font[r].chars = this.fontFile[0];
      this.font[r].char = new Array;
      c = 0;
      for (; c < this.font[r].chars; c++) {
        if (this.width = this.fontFile[this.sb - 12], this.height = this.fontFile[this.sb - 8], 1 == this.fontFile[this.sb - 11] && (this.width += 256), 0 == c && (this.maxHeight = this.height), this.sy = this.maxHeight - this.height, this.x = 0, this.y = this.height, 0 != this.fontFile[this.sb - 4]) {
          this.char = String.fromCharCode(this.fontFile[this.sb - 4]);
        } else {
          if (this.char = c, "Mball2.sbk" == r && 8 == c) {
            this.char = c + animframe;
            temp = color[224];
            _0x56c3xc = 224;
            for (; _0x56c3xc < 231; _0x56c3xc++) {
              color[_0x56c3xc] = color[_0x56c3xc + 1];
            }
            color[231] = temp;
            animframe = animframe + .1;
            if (animframe < .8) {
              c--;
            }
          }
        }
        if (this.fontFile[this.sb - 3] < 128) {
          descender = -this.fontFile[this.sb - 3];
        } else {
          descender = 256 - this.fontFile[this.sb - 3];
        }
        this.font[r].char[this.char] = new Object;
        this.font[r].char[this.char].width = this.width;
        this.font[r].char[this.char].height = this.height;
        this.font[r].char[this.char].y = this.sy + descender;
        ctx.clearRect(0, 0, 300, 300);
        canvas.height = this.height + 1;
        canvas.width = this.width + 1;
        _0x56c3xc = this.sb + 1;
        for (; _0x56c3xc <= this.width * this.height + this.sb; _0x56c3xc++) {
          ctx.fillStyle = color[this.fontFile[_0x56c3xc] + 256 * canCreateDiscussions];
          if (0 == this.fontFile[_0x56c3xc]) {
            ctx.fillStyle = "rgba(0,0,0,0)";
          }
          ctx.fillRect(this.x, this.y, 1, 1);
          this.x++;
          if (this.x >= this.width) {
            this.x = 0;
            this.y--;
          }
        }
        if (animframe < .1 || animframe > .8) {
          this.sb += this.width * this.height + 13;
        }
        this.font[r].char[this.char].img = new Image;
        this.font[r].char[this.char].img.src = canvas.toDataURL("image/png");
      }
      canvas.height = 1;
      canvas.width = this.font[r].space;
      this.font[r].char[" "] = new Object;
      this.font[r].char[" "].width = this.font[r].space;
      this.font[r].char[" "].height = 1;
      this.font[r].char[" "].img = new Image;
      this.font[r].char[" "].img.src = canvas.toDataURL("image/png");
    };
    this.strokeText = function (startI, ballNumber, i, isSlidingUp) {
      startI = startI + "";
      curX = i;
      _0x56c3xc = 0;
      for (; _0x56c3xc < startI.length; _0x56c3xc++) {
        ctx.drawImage(this.font[ballNumber].char[startI[_0x56c3xc]].img, curX, isSlidingUp + this.font[ballNumber].char[startI[_0x56c3xc]].y - 1);
        curX = curX + this.font[ballNumber].char[startI[_0x56c3xc]].width;
        curX = curX + 1;
      }
    };
    this.fillImg = function (ballNumber, scaleid, orig, canCreateDiscussions) {
      ctx.drawImage(this.font[scaleid].char[ballNumber].img, orig, canCreateDiscussions - 1);
    };
  };
  font = [];
  animframe = 0;
  color = ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#EBEBEB", "#DBDBDB", "#CBCBCB", "#BBBBBB", "#A7A7A7", "#979797", "#878787", "#777777", "#636363", "#535353", "#434343", "#333333", "#1F1F1F", "#0F0F0F", "#000000", "#DBDBDB", "#CFCFD3", "#C3C3CB", "#B7B7C3", "#AFAFBB", "#A3A3B7", "#9B9BAF", "#8F8FA7", "#87879F", "#7F7F97", "#777793", "#6B6B8B", "#636383", "#5B5B7B", "#535373", "#4F4F6F", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#001343", "#001B4F", "#0B235B", "#132F6B", "#1F3F77", "#2B4B87", "#3B5B93", "#4B6F9F", "#5B7FAF", "#6F8FBB", "#87A3C7", "#9FB7D7", "#B7CBE3", "#D3E3F3", "#1FCFFF", "#17AFF3", "#0F93EB", "#0B77E3", "#0057DB", "#003FD3", "#0B6BE7", "#1F9FFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FF0000", "#E30000", "#CB0000", "#B30000", "#9B0000", "#830000", "#B30000", "#E30000", "#FFFF00", "#F3E700", "#EBD700", "#DFC300", "#D7B300", "#CFA300", "#E7CF00", "#FFFF00", "#CFCFCF", "#B7B7B7", "#A3A3A3", "#8F8F8F", "#7B7B7B", "#676767", "#8F8F8F", "#B7B7B7", "#838383", "#6F6F6F", "#5F5F5F", "#4F4F4F", "#3F3F3F", "#2F2F2F", "#4F4F4F", "#6F6F6F", "#5F5F5F", "#4B4B4B", "#373737", "#232323", "#131313", "#000000", "#232323", "#4B4B4B", "#FF7F9B", "#E76B87", "#CF5773", "#B74763", "#9F3753", "#872B47", "#B74763", "#E76B87", "#0000FF", "#0000DF", "#0000C3", "#0000A3", "#000087", "#00006B", "#0000A3", "#0000DF", "#00FF00", "#00DF00", "#00BF00", "#00A300", "#008300", "#006700", "#00A300", "#00DF00", "#00B793", "#00A38B", "#00937F", "#008377", "#00736B", "#00635F", "#008377", "#00A38B", "#8300BB", "#6F00A7", "#5B0093", "#47007F", "#37006B", "#2B0057", "#47007F", "#6F00A7", "#FF8B00", "#EF7B00", "#E36B00", "#D35B00", "#C74F00", "#BB4300", "#D35B00", "#EF7B00", "#E7B300", "#D79F00", "#C78F00", "#B77F00", "#A76F00", "#976300", "#BF8700", "#E7B300", "#FF0057", "#EF0057", "#DF0057", "#CF0057", "#BF0053", "#AF0053", "#CF0057", "#EF0057", "#FF00FF", "#E300E3", "#CB00CB", "#AF00AF", "#970097", "#7F007F", "#AF00AF", "#E300E3", "#00FFFF", "#00E3E3", "#00CBCB", "#00AFAF", "#009797", "#007F7F", "#00AFAF", "#00E3E3", "#FF83DB", "#E773C3", "#D363AB", "#BB5797", "#A74B83", "#933F6F", "#BB5797", "#E773C3", "#EBD3BB", "#E7E7E7", "#F3B377", "#FF7F00", "#FF7F00", "#F7932F", "#F3AB5F", "#EFBF8F", "#008B00", "#007B00", "#006B00", "#005B00", "#004B00", "#003F00", "#006300", "#008B00", "#E3E300", "#A7CF00", "#73BF00", "#47AB00", "#239B00", "#008700", "#00770F", "#006723", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000", "#960000", "#008100", "#818100", "#000084", "#960084", "#008181", "#C1C1C1", "#B5DDC0", "#D7D1C9", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#BF00D8", "#AD00C8", "#9A00B8", "#8700A8", "#740097", "#610087", "#4D0076", "#390065", "#240054", "#0F0042", "#0F0031", "#00001E", "#CD00FF", "#001E30", "#000B0B", "#000000", "#FED407", "#FF9402", "#FF7411", "#DF5200", "#BC4104", "#AB3000", "#861E00", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#0000A5", "#0000A5", "#00007D", "#000075", "#00006C", "#000066", "#000062", "#00005B", "#000057", "#000053", "#00004E", "#00004C", "#000048", "#000044", "#000041", "#00003D", "#00003B", "#000036", "#000034", "#000032", "#00002D", "#00002B", "#000029", "#000024", "#000022", "#00001F", "#00001D", "#00001B", "#000016", "#000014", "#000011", "#00000F", "#00000D", "#00000A", "#000008", "#000006", "#000005", "#000003", "#000003", "#000002", "#000001", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#020000", "#070000", "#100000", "#200000", "#2B0000", "#3A0000", "#4E0000", "#620000", "#BC0000", "#BC0000", "#000000", "#00FFF3", "#00FFF3", "#00FFF7", "#00FFF7", "#00FFFB", "#00FFFB", "#00FFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#00DDF1", "#FFFFFF", "#000000", "#FFFFFF", "#F3F3F3", "#E4E4E4", "#D8D8D8", "#CCCCCC", "#C0C0C0", "#B4B4B4", "#A9A9A9", "#9C9C9C", "#909090", "#848484", "#787878", "#6B6B6B", "#5F5F5F", "#525252", "#454545", "#00227A", "#002B86", "#003497", "#003DA3", "#0045B3", "#0052BF", "#005FCF", "#00A0FF", "#00FF00", "#00EC00", "#00D800", "#00C800", "#00B400", "#00A500", "#000000", "#000000", "#D43400", "#E23D00", "#EF4500", "#FC4E00", "#FF5B00", "#FF6300", "#FF7000", "#FFA400", "#FFFF00", "#FFEC00", "#FFD800", "#FFC800", "#FFB400", "#FFA400", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFBF0", "#006EA8", "#818181", "#FF0000", "#00FF00", "#FFFF00", "#0000FF", "#FF00FF", "#00FFFF", "#FFFFFF"];
  FontList = [["Mball2.sbk", 0, 1], ["Mainmenu.sbk", 0, 1], ["Chisel2.sbk", 1, 1], ["Sysfont.sbk", 0, 5], ["Thefont.sbk", 0, 14], ["Candy.sbk", 1, 6], ["Sfont.sbk", 0, 1]];
  lFile = 0;
  window.canvas = document.getElementById("dx-ball");
  window.canvas.width = 2e3;
  window.canvas.height = 2e3;
  window.ctx = canvas.getContext("2d");
  (function purgeSync() {
    var xhrHandshake = new XMLHttpRequest;
    xhrHandshake.open("GET", "/game/" + FontList[lFile][0], true);
    xhrHandshake.responseType = "arraybuffer";
    xhrHandshake.onload = function (canCreateDiscussions) {
      var _0x56c3x9;
      file = new Uint8Array(this.response);
      myFonts.getFont(FontList[lFile][0], file, FontList[lFile][1], FontList[lFile][2]);
      lFile++;
      if (lFile < FontList.length) {
        purgeSync();
      } else {
        (_0x56c3x9 = document.getElementById("dx-ball")).width = 640;
        _0x56c3x9.height = 480;
        _0x56c3x9.getContext("2d");
        game();
      }
    };
    xhrHandshake.send();
  }());
}
game = function create() {
  function ajax(url) {
    var xhr = null;
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (_0x56c3xc) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (_0x56c3xc) {
        try {
          xhr = new XMLHttpRequest;
        } catch (_0x56c3xc) {}
      }
    }
    if (null == xhr) {
      throw new Error("XMLHttpRequest not supported");
    }
    return xhr.open("GET", url, false), xhr.send(null), xhr.responseText;
  }
  function filter(filterArgs) {
    if (soundon) {
      audio[naudio] = audioFile[filterArgs].cloneNode(true);
      audio[naudio].play();
      naudio++;
      if (64 <= naudio) {
        naudio = 0;
      }
    }
  }
  function update(withTracking) {
    myFonts.strokeText(withTracking, "Thefont.sbk", 30, 1);
    i = 1;
    for (; i < user.lives; i++) {
      myFonts.fillImg(30, "Mball2.sbk", 620 - 22 * i, 2);
    }
  }
  function Int() {
    this.x = 320;
    this.y = 440;
    this.is = true;
    this.anim = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.magnet = 0;
    this.draw = function () {
      if (!shadow.drawing) {
        if (bonus.fireball) {
          myFonts.fillImg(60, "Mball2.sbk", parseInt(this.x - 4), parseInt(this.y - 4));
        } else {
          if (bonus.shball) {
            myFonts.fillImg(54, "Mball2.sbk", parseInt(this.x - 2), parseInt(this.y - 2));
          } else {
            myFonts.fillImg(0, "Mball2.sbk", parseInt(this.x - 4), parseInt(this.y - 4));
          }
        }
      }
    };
    this.move = function () {
      if (Math.sqrt(Math.pow(this.xSpeed, 2) + Math.pow(this.xSpeed, 2)), this.x += 6 * this.xSpeed * touchesY, this.y += 6 * this.ySpeed * touchesY, this.y > 476 && (this.is = false, __init(false)), this.y < 4 && (this.y = 4, this.ySpeed *= -1, filter("Bassdrum")), this.x > 615 && (this.x = 615, this.xSpeed *= -1, filter("Bassdrum")), this.x < 23 && (this.x = 23, this.xSpeed *= -1, filter("Bassdrum")), bonus.fireball && 0 == parseInt(6 * Math.random()) && !this.magnet && (flash[nflash] = new remove(this.x, this.y, this.xSpeed / -12, this.ySpeed / -12, 24, 6, "255,0,0"), nflash++, nflash >= 128 && (nflash = 0)), this.y > 45 && this.y < 350 && this.x > 20 && this.x < 620) {
        y = parseInt((this.y - 45) / 15) - 1;
        for (; y < parseInt((this.y - 45) / 15) + 1; y++) {
          x = parseInt((this.x - 20) / 30) - 1;
          for (; x < parseInt((this.x - 20) / 30) + 1; x++) {
            if (0 != bricks[x][y].type && this.x > bricks[x][y].x - 5 && this.x < bricks[x][y].x + 35 && this.y > bricks[x][y].y - 5 && this.y < bricks[x][y].y + 20) {
              if (bonus.fireball) {
                bricks[x][y].type = 8;
                i = bang.length;
                bang[i] = new gvImage(this.x, this.y);
              }
              bricks[x][y].dell(x, y);
              if (this.x - (bricks[x][y].x - 5) < this.y - (bricks[x][y].y - 5) && this.x - (bricks[x][y].x - 5) < bricks[x][y].y + 20 - this.y || bricks[x][y].x + 35 - this.x < this.y - (bricks[x][y].y - 5) && bricks[x][y].x + 35 - this.x < bricks[x][y].y + 20 - this.y) {
                if (!(bonus.thru && 2 != bricks[x][y].type && 21 != bricks[x][y].type)) {
                  this.xSpeed *= -1;
                }
                if (this.x < bricks[x][y].x + 15) {
                  this.x = bricks[x][y].x - 5;
                } else {
                  this.x = bricks[x][y].x + 35;
                }
              } else {
                if (!(bonus.thru && 2 != bricks[x][y].type && 21 != bricks[x][y].type)) {
                  this.ySpeed *= -1;
                }
                if (this.y < bricks[x][y].y + 7) {
                  this.y = bricks[x][y].y - 5;
                } else {
                  this.y = bricks[x][y].y + 20;
                }
              }
            }
          }
        }
      }
      if (this.y >= 445 && this.x < paddle.x + paddle.width && this.x > paddle.x) {
        bonus.falling();
        if (1 == bonus.magnet) {
          this.magnet = this.x - paddle.x;
          filter("Humm");
        } else {
          filter("Boing");
        }
        this.ySpeed *= -1;
        this.xSpeed = (this.x - (paddle.x + parseInt(paddle.width / 2))) / 30;
        this.y = 445;
      }
      if (this.magnet) {
        this.ySpeed = -1;
        this.xSpeed = (this.x - (paddle.x + parseInt(paddle.width / 2))) / 30;
        this.x = paddle.x + this.magnet;
        this.y = 445;
      }
      if (this.anim < 3) {
        this.anim += .2;
      } else {
        this.anim = 0;
      }
      this.draw();
    };
  }
  function Node(expr, scope) {
    this.aframe = 0;
    this.x = 30 * expr + 20;
    this.y = 15 * scope + 50;
    this.type = 0;
    this.imgId = [1, 2, 3, 4, 5, 6, 7, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 55, 56, 57, 58, 59, 8, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 21, 22, 23, 24, 25, 26, 27, 28];
    this.draw = function () {
      if (this.aframe) {
        _0x56c3x8 = this.aframe;
      } else {
        _0x56c3x8 = this.type;
      }
      if (7 == this.type) {
        _0x56c3x8 = 0;
      }
      if (this.x > 19 && this.x < 620 && 1 != this.imgId[parseInt(_0x56c3x8)]) {
        myFonts.fillImg(this.imgId[parseInt(_0x56c3x8)], "Mball2.sbk", this.x, this.y);
      }
    };
    this.bang = function (row, col) {
      if (0 != this.type) {
        this.aframe = 30;
      }
      if (8 == this.type) {
        this.timeout = setTimeout(function () {
          if (0 == parseInt(1 * Math.random())) {
            filter("Xploshor");
          } else {
            filter("Xploshor1");
          }
          bricks[row - 1][col - 1].bang(row - 1, col - 1);
          bricks[row][col - 1].bang(row, col - 1);
          bricks[row + 1][col - 1].bang(row + 1, col - 1);
          bricks[row - 1][col].bang(row - 1, col);
          bricks[row + 1][col].bang(row + 1, col);
          bricks[row - 1][col + 1].bang(row - 1, col + 1);
          bricks[row][col + 1].bang(row, col + 1);
          bricks[row + 1][col + 1].bang(row + 1, col + 1);
        }, 80);
      }
      if (0 != this.type && 2 != this.type) {
        user.score += 10;
        _0x56c3xd--;
      }
      this.type = 0;
    };
    this.dell = function (mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
      switch (this.type) {
        case 2:
          filter("Ao-laser");
          this.type = 2;
          break;
        case 3:
          filter("Effect");
          this.type = 4;
          user.score += 10;
          break;
        case 4:
          filter("Effect");
          this.type = 5;
          user.score += 10;
          break;
        case 5:
          filter("Effect");
          this.type = 0;
          _0x56c3xd--;
          user.score += 10;
          break;
        case 6:
          filter("Glass");
          i = 0;
          for (; i < 6; i++) {
            flash[nflash] = new remove(this.x, this.y, 8 * Math.random() - 4, 6 * Math.random(), 24, 10, "255,255,255");
            nflash++;
            if (nflash >= 128) {
              nflash = 0;
            }
          }
          this.type = 0;
          _0x56c3xd--;
          user.score += 10;
          break;
        case 7:
          filter("Glass");
          i = 0;
          for (; i < 6; i++) {
            flash[nflash] = new remove(this.x, this.y, 8 * Math.random() - 4, 6 * Math.random(), 24, 10, "255,255,255");
            nflash++;
            if (nflash >= 128) {
              nflash = 0;
            }
          }
          this.type = 6;
          user.score += 10;
          break;
        case 8:
          this.bang(mmCoreSplitViewBlock, mmaPushNotificationsComponent);
          break;
        case 21:
          filter("Effect");
          this.type = 2;
          _0x56c3xd--;
          user.score += 10;
          break;
        default:
          filter("Wowpulse");
          this.type = 0;
          _0x56c3xd--;
          user.score += 10;
      }
      if (7 != this.type && 2 != this.type && 0 == parseInt(8 * Math.random())) {
        bonus.init(this.x, this.y);
      }
    };
    this.move = function () {
      this.draw();
      if (this.aframe) {
        if (this.aframe >= 30) {
          this.aframe++;
        }
        if (this.aframe > 36) {
          this.aframe = 0;
        }
        if (8 == this.type) {
          if (this.aframe >= 23 && this.aframe < 30) {
            this.aframe += .3;
          }
          if (this.aframe > 30) {
            this.aframe = 23;
            this.draw();
          }
        }
      }
    };
  }
  function vview() {
    this.x = 0;
    this.y = 435;
    this.is = true;
    this.ySpeed = -10;
    this.draw = function () {
      myFonts.fillImg(31, "Mball2.sbk", this.x, this.y);
    };
    this.move = function () {
      if (this.is) {
        if (this.y > 45 && this.y < 345 && this.x > 20 && this.x < 620) {
          y = parseInt((this.y - 45) / 15) - 1;
          for (; y < parseInt((this.y - 45) / 15) + 1; y++) {
            x = parseInt((this.x - 20) / 30) - 1;
            for (; x < parseInt((this.x - 20) / 30) + 1; x++) {
              if (0 != bricks[x][y].type && this.x > bricks[x][y].x - 5 && this.x < bricks[x][y].x + 35 && this.y > bricks[x][y].y - 5 && this.y < bricks[x][y].y + 20) {
                bricks[x][y].dell(x, y);
                this.is = false;
              }
            }
          }
        }
        this.y += this.ySpeed;
        if (this.is) {
          this.draw();
        }
      }
    };
  }
  function remove(trendId, callback, story, name, selector, options, groupId) {
    this.x = trendId + (-options / 2 + parseInt(Math.random() * options));
    this.y = callback + (-options / 2 + parseInt(Math.random() * options));
    this.xSpeed = story;
    this.ySpeed = name;
    this.live = selector;
    groupId = groupId;
    this.is = true;
    this.draw = function () {
      ctx.fillStyle = "rgba(" + groupId + "," + this.live / 24 + ")";
      ctx.fillRect(parseInt(this.x), parseInt(this.y), 2, 2);
    };
    this.move = function () {
      if (this.is) {
        this.live--;
        if (this.live <= 0) {
          this.is = false;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.draw();
      }
    };
  }
  function gvImage(img, notNew) {
    this.x = img;
    this.y = notNew;
    this.aframe = 0;
    this.is = true;
    i = 0;
    for (; i < 8; i++) {
      flash[nflash] = new remove(this.x, this.y, 8 * Math.random() - 4, 8 * Math.random() - 4, 24, 10, "255,255,255");
      nflash++;
      if (nflash >= 128) {
        nflash = 0;
      }
    }
    this.draw = function () {
      myFonts.fillImg(143 + this.aframe, "Mball2.sbk", this.x - 21, this.y - 21);
    };
    this.move = function () {
      if (this.is) {
        if (this.aframe < 22) {
          this.aframe++;
        } else {
          this.is = false;
        }
        this.draw();
      }
    };
  }
  function start() {
    user.score = 0;
    user.level = 1;
    user.lives = 3;
    user.timeGame = 0;
    callback(user.level);
    user.startTime = (new Date).getTime();
    setTimeout(function () {
      !function tryConnect() {
        touchesLength = 0;
        setTimeout(function () {
          if (shadow.drawing || highscore.drawing || saver.drawing || saver.drawing || paused) {
            setTimeout(function () {
              tryConnect();
            }, 2e3);
          } else {
            touchesY = 60 / touchesLength;
          }
        }, 1e3);
      }();
    }, 3e3);
  }
  function callback(destVal) {
    on();
    cl = false;
    shadow.aframe = 20;
    clearTimeout(lightning.timout);
    audioFile.Voltage.pause();
    shadow.drawing = true;
    _0x56c3xd = 0;
    y = 0;
    for (; y < 20; y++) {
      x = 0;
      for (; x < 20; x++) {
        clearTimeout(bricks[x][y].timeout);
        bricks[x][y].type = file.charCodeAt(20 * y + x + 400 * (destVal - 1));
        bricks[x][y].aframe = 0;
        if (0 != bricks[x][y].type && 2 != bricks[x][y].type) {
          _0x56c3xd++;
        }
        if (8 == bricks[x][y].type) {
          bricks[x][y].aframe = 23;
        }
      }
    }
  }
  function on() {
    bonus.thru = bonus.magnet = bonus.shooting = bonus.fireball = bonus.fall = bonus.shball = false;
    balls.length = 1;
    bullets.length = 0;
    balls[0].y = 460;
    balls[0].is = true;
    balls[0].magnet = 40;
    paddle.size = 1;
    bonus.type = -1;
  }
  function __init(origin) {
    nb = 0;
    i = 0;
    for (; i < balls.length; i++) {
      if (1 == balls[i].is) {
        nb++;
      }
    }
    if (nb <= 0 || origin) {
      filter("Padexplo");
      shadow.drawing = true;
      user.lives--;
      on();
    } else {
      filter("Xplosht1");
    }
    if (0 == user.lives) {
      user.timeGame = (new Date).getTime() - user.startTime;
    }
  }
  function uploadFile(metafile) {
    highscore.loading = true;
    if (metafile < 1) {
      metafile = 0;
    }
    url = "f" == metafile ? "//turtleful.github.io/DXBALLL-Deobfuscation/record.php?sign=" + calcMD5(user.name + user.score + user.timeGame + "17") + "&name=" + user.name + "&score=" + user.score + "&tg=" + user.timeGame : "//turtleful.github.io/DXBALLL-Deobfuscation/record.php?firstID=" + metafile;
    rec = ajax(url);
    rec = rec.split("\r");
    i = 0;
    for (; i < rec.length - 1; i++) {
      str = rec[i];
      str = str.split("&");
      if (0 == i) {
        if (highscore.upLim > parseInt(str[0]) || -1 == highscore.upLim) {
          highscore.upLim = parseInt(str[0]);
        }
        if (highscore.downLim < parseInt(str[0]) + rec.length || -1 == highscore.downLim) {
          highscore.downLim = parseInt(str[0]) + rec.length;
        }
        if ("f" == metafile) {
          i = parseInt(str[0]);
        }
      }
      records[parseInt(str[0])] = new Object;
      records[parseInt(str[0])].name = str[1];
      records[parseInt(str[0])].score = str[2];
    }
    if ("f" == metafile) {
      highscore.selection = parseInt(rec[rec.length - 1]);
    }
    highscore.drawing = 2;
    highscore.loading = false;
  }
  var _0x56c3xa;
  var _0x56c3xd = 1;
  var touchesY = 1;
  var i = 0;
  var touchesLength = 0;
  var indexLookupKey = 0;
  var _0x56c3x12 = audioFile[audioName[indexLookupKey]].cloneNode(true);
  window.cl = false;
  user = new Object;
  user.name = "";
  user.startTime = 0;
  paused = paus = false;
  if (window.soundon) {
    audioFile.Whine.loop = "loop";
    audioFile.Voltage.loop = "loop";
    audioFile.Whine.play();
  }
  naudio = 0;
  nflash = 0;
  audio = new Array;
  balls = new Array;
  bricks = new Array;
  bullets = new Array;
  bang = new Array;
  flash = new Array;
  records = new Array;
  file = ajax("//turtleful.github.io/DXBALLL-Deobfuscation/game/default.bds");
  lightning = new function () {
    this.drawing = false;
    this.x = this.y = 0;
    this.volume = 0;
    this.is = false;
    this.timout = false;
    this.set = function (canCreateDiscussions, isSlidingUp) {
      this.x = canCreateDiscussions;
      this.y = isSlidingUp;
      this.is = true;
      this.timout = setTimeout(function () {
        lightning.show();
      }, 3e4);
      this.volume = 0;
      audioFile.Voltage.play();
    };
    this.show = function () {
      bricks[this.x][this.y].type = 8;
      bricks[this.x][this.y].bang(this.x, this.y);
      filter("Thudclap");
      this.drawing = true;
      setTimeout(function () {
        lightning.drawing = false;
        lightning.is = false;
        audioFile.Voltage.pause();
      }, 40);
    };
    this.draw = function () {
      if (this.drawing) {
        ctx.drawImage(bigbolt_img, 30 * this.x + 20 - 65, 15 * this.y + 50 - 475);
      }
    };
  };
  shadow = new function () {
    this.drawing = false;
    this.aframe = 0;
    this.draw = function () {
      if (this.aframe < 20) {
        var all = ctx.getImageData(0, 0, 640, 480);
        var angles = all.data;
        i = 0;
        n = angles.length;
        for (; i < n; i = i + 4) {
          var diff = .3 * angles[i] + .59 * angles[i + 1] + .11 * angles[i + 2];
          angles[i] = (angles[i] + diff / 5) / 1.2;
          angles[i + 1] = (angles[i + 1] + diff / 5) / 1.2;
          angles[i + 2] = (angles[i + 2] + diff / 5) / 1.2;
        }
        ctx.putImageData(all, 0, 0);
      } else {
        if (this.aframe >= 20 && this.aframe < 70) {
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
          ctx.fillRect(0, 0, 640, 480);
        } else {
          if (this.aframe >= 70 && this.aframe < 100) {
            if (70 == this.aframe && (paused = paus), user.lives > 0) {
              ctx.drawImage(mbbkgrnd_img, 0, 0);
              y = 0;
              for (; y < 20; y++) {
                x = 0;
                for (; x < 20; x++) {
                  bricks[x][y].move();
                }
              }
              if (paused) {
                myFonts.strokeText("PAUSED", "Thefont.sbk", 237, 210);
              }
              update(user.score);
            } else {
              highscore.draw();
              highscore.drawing = 1;
            }
            ctx.fillStyle = "rgba(0, 0, 0, " + (1 - .033 * (this.aframe - 70)) + ")";
            ctx.fillRect(0, 0, 640, 480);
          } else {
            if (this.aframe >= 100) {
              this.drawing = false;
              this.aframe = 0;
            }
          }
        }
      }
      this.aframe++;
    };
  };
  chcur = "_";
  setInterval(function () {
    if ("_" == chcur) {
      chcur = " ";
    } else {
      chcur = "_";
    }
  }, 500);
  highscore = new function () {
    this.loading = false;
    this.upLim = this.downLim = -1;
    this.drawing = 0;
    this.aframe = 0;
    this.draw = function () {
      if (ctx.drawImage(Highscor_img, 0, 0), 1 == this.drawing) {
        myFonts.strokeText("Your score:", "Sysfont.sbk", 272, 160);
        sc = user.score + "";
        myFonts.strokeText(user.score, "Sysfont.sbk", 316 - 9 * (sc.length - 2), 191);
        myFonts.strokeText("Enter your name:", "Sysfont.sbk", 70, 220);
        myFonts.strokeText(user.name + chcur, "Sysfont.sbk", 70, 250);
      } else {
        if (2 == this.drawing) {
          j = 0;
          for (; j < 15; j++) {
            myFonts.strokeText(records[i + j].name, "Sysfont.sbk", 10, 160 + 20 * j);
            myFonts.strokeText(records[i + j].score, "Sysfont.sbk", 570, 160 + 20 * j);
            myFonts.strokeText(i + j, "Sysfont.sbk", 500, 160 + 20 * j);
            if (i + j == this.selection) {
              ctx.strokeStyle = "rgba(255,0,255," + (.7 + Math.sin(this.aframe / 8) / 4) + ")";
              ctx.strokeRect(5, 158 + 20 * j, 630, 20);
              this.aframe++;
            }
          }
        }
      }
    };
  };
  saver = new function () {
    this.aframe = 0;
    this.drawing = 1;
    this.sinString = "WELCOME TO DX-BALL.     GREETINGS GO OUT TO:  ED + AL MACKEY, SIMEON, LARRY, MIKE BOEH, DARK UNICORN PRODUCTIONS (SHANE, JOHN, SEUMAS, ERIC (SIDEWINDER), REMEMBER KIT...), AND THE 'MAD TESTER' CHAY-BOB.     LAST MINUTE SUPER THANKS GOES TO SHANE MONROE FOR THE DX-BALL WEB PAGE.    IT ROCKS!     THIS PROJECT WAS MANY LONG MONTHS IN THE MAKING.    LATE NIGHTS, LOTS OF MOUNTAIN DEW, AND MANY PROGRAMMING BOOKS GOT THIS, MY FIRST DIRECT X AND PC GAME, FINISHED FOR YOUR VIEWING PLEASURE.      ABOUT THE GAME: I KNOW 'BREAKOUT' GAMES HAVE BEEN DONE TO DEATH, BUT I HAVEN'T FOUND ONE YET THAT'S AS COMPELLING AS MEGABALL FOR THE AMIGA COMPUTER.    SINCE MEGABALL IS MY WIFE'S FAVORITE GAME, I THOUGHT I'D MAKE HER A VERSION THAT SHE CAN PLAY ON MY PENTIUM 60.  :)      BY THE WAY, DX-BALL IS MEANT TO BE AN AMIGA GAME TRAPPED IN A PC'S BODY.   (SMILE)    ALSO GOT SOME RETRO COMMODORE 64 MIXED IN HERE AND THERE...  IF ONLY I HAD A DIRECT SOUND 'MOD' PLAYER, THEN EVERYTHING WOULD BE PERFECT!      ABOUT THE AUTHOR: HI I'M MIKE, BUT SOME CALL ME 'SCORCH.'    I'M THAT KID WHO WROTE THE AMIGA GAME 'SCORCHED TANKS.'    I KNOW, I KNOW, ALL YOU PC PEOPLE ARE SAYING 'NO STUPID, THAT'S SCORCHED EARTH!'    WELL, 'S-TANKS' WAS THE AMIGA ANSWER TO 'EARTH.'    THE WHOLE SCORCH PROJECT WAS VERY EXCELLENT AND THE RESPONSE FROM MY FELLOW AMI FANS WAS INCREDIBLE.    CERTAINLY, '94 WAS THE BEGINNING OF THE REST OF MY LIFE, AND I MUST SAY THANKS TO MY FRIENDS ALL OVER THE WORLD.        HEY, IF YOU'RE STILL READING THIS SCROLLER, THEN MORE POWER TO YA!   LET'S TALK ABOUT CODE...   DX-BALL WAS WRITTEN TO BE COMPATIBLE WITH EVERY POSSIBLE PC THAT CAN INSTALL DIRECT X 2.    I BOUGHT 4 VIDEO CARDS ON MY OWN AND BORROWED 2 VIDEO CARDS FROM MY GOOD FRIEND MIKE BOEH.    I TOOK DX-BALL TO WORK, NEIGHBOR'S HOUSE, FATHER-IN-LAW'S HOUSE, BROTHER-IN-LAW'S HOUSE, AND EVEN HAD IT TESTED WITH WINDOWS NT AS SOON AS THE NEW RELEASE SUPPORTED DIRECT X.    I EVEN ASKED/FORCED MY FRIENDS TO TAKE IT HOME AND TRY IT ON THEIR PC'S.  :O  MAN I FOUND A LOT OF BUGS IN THE GAME, AND LOTS OF QUIRKS IN DIRECT X.    I HOPE I GOT THEM ALL, BUT IF I DIDN'T, I KNOW I CAN COUNT ON 'YOU' TO SEND ME AN E-MAIL.    SO I FOUND OUT TWO IMPORTANT THINGS FROM MY EXPERIMENTS.    FIRST OF ALL, DIRECT X'S HARDWARE ACCELERATION IS VERY COOL.    SECOND, I LEARNED THAT NOT EVERY VIDEO CARD SUPPORTS IT.    FOR INSTANCE, VIDEO CARDS WITH: S3, MACH32/64, MATROX, TSENG, AND OTHERS WITH HARDWARE SUPPORT CAN SPEED-UP GRAPHICS 'BLITTING' BY AT LEAST 3X IF DONE PROPERLY.    BUT THERE ARE VERY COMMON VIDEO CARDS WITH TRIDENT OR ARK CHIPSETS THAT HAVE NO SUPPORT.    THEY WILL RUN DIRECT X GAMES, BUT THE EMULATION MODE CAN SLOW IT WAY DOWN.    UNTIL THE DAY THAT EVERYONE GETS A NEW COMPUTER OR VIDEO CARD, DIRECT X WILL NOT REACH IT'S FULL POTENTIAL.    BUT FOR NOW, US PROGRAMMERS WILL WORK OUR BRAINS OUT TO GIVE EVERYONE A CHANCE TO PLAY OUR GAMES.    DX-BALL RUNS ON ALL VIDEO CARDS, EITHER IN THE BLAZING FAST MODE, OR IN THE 'COMPATIBILITY' MODE THAT KEEPS UP WITH THE 60 FPS STANDARD.    I ONLY ASK THAT IF YOUR SYSTEM HAS A VERY HIGH REFRESH RATE... THEN MAYBE YOU OUGHT TO LOWER IT FOR THE SAKE OF PLAYING DX-BALL AT A NORMAL SPEED.  :)    WELL, I'VE TALKED ABOUT EVERYTHING NOW AND IT'S TIME TO WRAP-UP THIS EXTRA LONG SCROLLER.    THANKS FOR READING, AND ENJOY THE GAME.                                                 MADE YOU LOOK!  HEHEHEHEHEHE                                                                  ";
    this.mballs = [".........................................", ".###...#...#.....####....#...#.....#.....", ".#..#...#.#......#...#..#.#..#.....#.....", ".#...#...#...###.#..#..#...#.#.....#.....", ".#..#...#.#......#...#.#####.#.....#.....", ".###...#...#.....####..#...#.#####.#####.", "........................................."];
    this.ss = 0;
    this.draw = function () {
      if (1 == this.drawing) {
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.fillRect(0, 277 + parseInt(118 * Math.sin(this.ss / 90)), 640, 10);
        ctx.fillStyle = "rgba(0, 0, 255, 1)";
        ctx.fillRect(0, 277 - parseInt(118 * Math.sin(this.ss / 90)), 640, 10);
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, 640, 480);
        ctx.drawImage(Intro_img, 0, 0, 640, 160, 0, 0, 640, 160);
        ctx.drawImage(Intro_img, 0, 337, 640, 14, 0, 6, 640, 14);
        ctx.drawImage(Intro_img, 0, 364, 640, 14, 0, 128, 640, 14);
        myFonts.strokeText("VIDEO CARD:", "Candy.sbk", 20, 174);
        myFonts.strokeText("REFRESH RATE ABOVE 60 MHZ", "Candy.sbk", 180, 174);
        myFonts.strokeText("DEFAULT TO >COMPATIBLE< MODE", "Candy.sbk", 210, 194);
        myFonts.strokeText("AUTHOR:", "Candy.sbk", 20, 229);
        myFonts.strokeText("MICHAEL P. WELCH", "Candy.sbk", 180, 229);
        myFonts.strokeText("3D GFX:", "Candy.sbk", 20, 249);
        myFonts.strokeText("SEUMAS McNALLY", "Candy.sbk", 180, 249);
        myFonts.strokeText("E-MAIL:", "Candy.sbk", 20, 284);
        myFonts.strokeText("MWELCH1@STNY.LRUN.COM", "Candy.sbk", 180, 284);
        myFonts.strokeText("VISIT   HTTP://HOME.STNY.LRUN.COM/SCORCHED/", "Candy.sbk", 42, 314);
        myFonts.strokeText("FOR FREE BOARD EDITOR PLUS HINTS AND TIPS", "Candy.sbk", 53, 334);
        this.sx = 640;
        this.sy = 422;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 401, 640, 79);
        i = 0;
        for (; i < this.sinString.length; i++) {
          j = 0;
          for (; j <= myFonts.font["Chisel2.sbk"].char[this.sinString[i]].width; j++) {
            if (this.sx - this.ss > 40 && this.sx - this.ss < 600) {
              height = myFonts.font["Chisel2.sbk"].char[this.sinString[i]].height;
              y = myFonts.font["Chisel2.sbk"].char[this.sinString[i]].y;
              ctx.drawImage(myFonts.font["Chisel2.sbk"].char[this.sinString[i]].img, j, 0, 1, height, this.sx - this.ss, this.sy + y, 1, height);
            }
            this.sx++;
            this.sy = 422 + parseInt(19 * Math.sin((this.sx - this.ss) / 55));
          }
        }
        this.ss += 6;
      } else {
        if (2 == this.drawing) {
          ctx.drawImage(Mainmenu_img, 0, 0, 640, 480);
          ctx.fillStyle = "#cb00cb";
          y = 0;
          for (; y < 7; y++) {
            x = 0;
            for (; x <= 40; x++) {
              xp = parseInt(115 + 10 * x + 2 * Math.sin(this.ss + x / 4 + y / 3));
              yp = parseInt(40 + 10 * y + 2 * Math.cos(this.ss + x / 4 + y / 3));
              if ("." == this.mballs[y][x]) {
                ctx.fillRect(xp, yp, 1, 1);
              } else {
                myFonts.fillImg(0, "Mball2.sbk", xp - 3, yp - 3);
              }
            }
          }
          myFonts.strokeText("BASED ON  ``MEGABALL``", "Thefont.sbk", 63, 180);
          myFonts.strokeText("BY ED AND AL MACKEY", "Thefont.sbk", 77, 220);
          myFonts.strokeText("By Michael P. Welch", "Sfont.sbk", 485, 124);
          myFonts.strokeText("V 1.09", "Sfont.sbk", 615, 4);
          myFonts.strokeText("Copyright  1996-98  by Michael P. Welch,  All Rights Reserved.", "Sfont.sbk", 3, 459);
          myFonts.strokeText("You may freely distribute this game so long as it's not sold for profit without the author's written consent.", "Sfont.sbk", 3, 469);
          this.ss += .1;
          ctx.drawImage(sphere_img, 135 * this.aframe, 0, 135, 135, 499, 319, 135, 135);
          this.aframe++;
          if (14 == this.aframe) {
            this.aframe = 0;
          }
        }
      }
    };
  };
  y = -1;
  for (; y < 21; y++) {
    bricks[y] = new Array;
    x = -1;
    for (; x < 21; x++) {
      bricks[y][x] = new Node(y, x);
    }
  }
  mouse = new Object;
  mouse.x = mouse.y = 320;
  canvas.onmousemove = function (val) {
    if (!val) {
      val = window.event;
    }
    mouse.x = val.pageX;
    mouse.y = val.pageY;
  };
  canvas.addEventListener("touchmove", function (canCreateDiscussions) {
    mouse.x = canCreateDiscussions.touches[0].pageX;
    mouse.y = canCreateDiscussions.touches[0].pageX;
  });
  canvas.onmousedown = function () {
    if (paus && (shadow.aframe = 20, shadow.drawing = true, paus = !paus), 1 == saver.drawing) {
      saver.drawing = 2;
      audioFile.Whine.pause();
      indexLookupKey = 0;
      if (window.soundon) {
        _0x56c3x12.play();
      }
    } else {
      if (2 == saver.drawing) {
        saver.drawing = 0;
        callback(user.level);
        start();
      } else {
        if (shadow.drawing || highscore.drawing || saver.drawing || paused) {
          if (2 == highscore.drawing) {
            highscore.drawing = false;
            saver.drawing = 2;
          }
        } else {
          i = 0;
          for (; i < balls.length; i++) {
            balls[i].magnet = false;
          }
          if (bonus.shooting) {
            filter("Gunfire");
            i = bullets.length;
            bullets[i] = new vview;
            bullets[i].x = paddle.x + 3;
            bullets[i + 1] = new vview;
            bullets[i + 1].x = paddle.x + paddle.width;
          }
        }
      }
    }
  };
  window.onblur = function () {
    if (!(0 != saver.drawing || highscore.drawing)) {
      shadow.aframe = 20;
      shadow.drawing = true;
      paus = true;
    }
  };
  document.onkeydown = function (canCreateDiscussions) {
    if (!highscore.loading) {
      if (38 == canCreateDiscussions.keyCode && (window.scroll(0, 0), 2 == highscore.drawing && (highscore.aframe = 0, highscore.selection - 1 >= highscore.upLim ? highscore.selection-- : highscore.selection < 15 ? uploadFile(1) : uploadFile(highscore.selection - 15))), 40 == canCreateDiscussions.keyCode && (window.scroll(0, 0), 2 == highscore.drawing && (highscore.aframe = 0, highscore.selection + 3 <= highscore.downLim ? highscore.selection++ : uploadFile(highscore.selection))), 80 != canCreateDiscussions.keyCode || 0 != saver.drawing || highscore.drawing || (shadow.aframe = 20, shadow.drawing = true, paus ? user.startTime += (new Date).getTime() - _0x56c3xa : _0x56c3xa = (new Date).getTime(), paus = !paus), 27 != canCreateDiscussions.keyCode || 0 != saver.drawing || highscore.drawing || (highscore.drawing = false, saver.drawing = 2), 83 == canCreateDiscussions.keyCode && 1 == !highscore.drawing) {
        if (soundon = !soundon, soundon) {
          _0x56c3x12.play();
        } else {
          _0x56c3x12.pause();
          i = 0;
          for (; i < 64; i++) {
            audio[i].pause();
          }
        }
      }
      if (highscore.selection < i) {
        i = highscore.selection;
      }
      if (highscore.selection >= i + 15) {
        i = highscore.selection - 14;
      }
    }
    if (1 == highscore.drawing) {
      if (ch = "", user.name.length < 30 && (canCreateDiscussions.keyCode >= 48 && canCreateDiscussions.keyCode <= 57 && (ch = canCreateDiscussions.keyCode - 48), canCreateDiscussions.keyCode >= 65 && canCreateDiscussions.keyCode <= 90 && (ch = String.fromCharCode(canCreateDiscussions.keyCode), canCreateDiscussions.shiftKey || (ch = ch.toLowerCase())), 32 == canCreateDiscussions.keyCode && (ch = " "), user.name += ch), 8 == canCreateDiscussions.keyCode) {
        return user.name = user.name.slice(0, -1), false;
      }
      if (13 == canCreateDiscussions.keyCode && user.name && " " != user.name[0]) {
        uploadFile("f");
      }
    }
  };
  setInterval(function () {
    if (_0x56c3x12.currentTime >= _0x56c3x12.duration - 1) {
      if (6 == ++indexLookupKey) {
        indexLookupKey = 0;
      }
      _0x56c3x12.pause();
      (_0x56c3x12 = audioFile[audioName[indexLookupKey]].cloneNode(true)).play();
    }
  }, 100);
  balls[balls.length] = new Int;
  paddle = new function () {
    this.x = 300;
    this.type = 0;
    this.anim = 0;
    this.sizes = [36, 73, 146, 218, 292];
    this.size = 1;
    this.draw = function () {
      vm = false;
      i = 0;
      for (; i < balls.length; i++) {
        if (balls[i].magnet) {
          vm = true;
        }
      }
      if (bonus.shooting) {
        if (vm) {
          myFonts.fillImg(123 + 4 * this.size + parseInt(this.anim), "Mball2.sbk", this.x, 435);
        }
        myFonts.fillImg(103 + 4 * this.size + parseInt(this.anim), "Mball2.sbk", this.x, 435);
      } else {
        if (vm) {
          myFonts.fillImg(123 + 4 * this.size + parseInt(this.anim), "Mball2.sbk", this.x, 440);
          myFonts.fillImg(83 + 4 * this.size + parseInt(this.anim), "Mball2.sbk", this.x, 440);
        } else {
          myFonts.fillImg(63 + 4 * this.size + parseInt(this.anim), "Mball2.sbk", this.x, 450);
        }
      }
    };
    this.move = function () {
      this.width = this.sizes[this.size];
      this.x = parseInt((mouse.x - getOffsetSum(canvas).left - this.width / 2) / (canvas.offsetWidth / 640));
      if (this.x < 20) {
        this.x = 20;
      }
      if (this.x > 620 - this.width) {
        this.x = 620 - this.width;
      }
      this.anim += .2;
      if (this.anim > 4) {
        this.anim = 0;
      }
      this.draw();
    };
  };
  bonus = new function (row, col) {
    this.thru = false;
    this.magnet = false;
    this.shooting = false;
    this.fireball = false;
    this.fall = false;
    this.shball = false;
    this.x = 0;
    this.y = 0;
    this.type = -1;
    this.xSpeed = 0;
    this.ySpeed = -2;
    this.weight = .1;
    this.falling = function () {
      if (this.fall) {
        col = 19;
        for (; col > 0; col--) {
          row = 0;
          for (; row < 20; row++) {
            if (0 == bricks[row][col].type) {
              bricks[row][col].type = bricks[row][col - 1].type;
              bricks[row][col].aframe = bricks[row][col - 1].aframe;
              bricks[row][col - 1].type = 0;
            }
          }
        }
        filter("Orchblas");
      }
    };
    this.init = function (canCreateDiscussions, isSlidingUp) {
      if (-1 == this.type) {
        filter("Bang");
        this.xSpeed = balls[0].xSpeed;
        this.ySpeed = -4;
        this.x = canCreateDiscussions;
        this.y = isSlidingUp;
        this.type = parseInt(18 * Math.random());
        if (!(14 != this.type && 19 != this.type)) {
          this.type = 13;
        }
        i = 0;
        for (; i < 8; i++) {
          flash[nflash] = new remove(this.x, this.y, 8 * Math.random() - 4, 8 * Math.random() - 4, 24, 10, "255,255,255");
          nflash++;
          if (nflash >= 128) {
            nflash = 0;
          }
        }
      }
    };
    this.draw = function () {
      myFonts.fillImg(this.type + 34, "Mball2.sbk", this.x, this.y);
    };
    this.move = function () {
      if (this.x += this.xSpeed * touchesY, this.y += this.ySpeed * touchesY, this.ySpeed += this.weight * touchesY, this.y > 480 && (this.type = -1), this.x >= 588 && (this.x = 588, this.xSpeed *= -1), this.x <= 20 && (this.x = 20, this.xSpeed *= -1), this.y >= 420 && this.x < paddle.x + paddle.width + 30 && this.x > paddle.x - 30 && this.type >= 0) {
        switch (user.score += 100, this.type) {
          case 0:
            filter("Fanfare");
            user.lives++;
            break;
          case 1:
            filter("Peow!");
            cl = true;
            setTimeout(function () {
              user.level++;
              callback(user.level);
            }, 200);
            break;
          case 2:
            filter("Peow!");
            col = 0;
            for (; col < 20; col++) {
              row = 0;
              for (; row < 20; row++) {
                if (2 == bricks[row][col].type) {
                  bricks[row][col].type = 20;
                  _0x56c3xd++;
                }
                if (7 == bricks[row][col].type) {
                  bricks[row][col].type = 6;
                }
              }
            }
            break;
          case 3:
            filter("Peow!");
            i = 0;
            for (; i < balls.length; i++) {
              balls[i].xSpeed /= 2;
              balls[i].ySpeed /= 2;
            }
            break;
          case 4:
            filter("Peow!");
            (function () {
              y = 0;
              for (; y < 20; y++) {
                x = 0;
                for (; x < 20; x++) {
                  if (8 == bricks[x][y].type) {
                    bricks[x - 1][y].type = bricks[x + 1][y].type = bricks[x][y - 1].type = bricks[x][y + 1].type = -1;
                    bricks[x - 1][y].aframe = bricks[x + 1][y].aframe = bricks[x][y - 1].aframe = bricks[x][y + 1].aframe = bricks[x][y].aframe;
                  }
                }
              }
              y = 0;
              for (; y < 20; y++) {
                x = 0;
                for (; x < 20; x++) {
                  if (-1 == bricks[x][y].type) {
                    bricks[x][y].type = 8;
                  }
                }
              }
            }());
            break;
          case 5:
            filter("Peow!");
            this.thru = true;
            break;
          case 6:
            filter("Peow!");
            col = 0;
            for (; col < 20; col++) {
              row = 0;
              for (; row < 20; row++) {
                if (8 == bricks[row][col].type) {
                  bricks[row][col].bang(row, col);
                }
              }
            }
            break;
          case 7:
            filter("Peow!");
            this.fireball = true;
            break;
          case 8:
            filter("Peow!");
            this.shooting = true;
            break;
          case 9:
            filter("Peow!");
            this.magnet = true;
            break;
          case 10:
            filter("Effect2");
            if (paddle.size < 4) {
              paddle.size++;
            }
            break;
          case 11:
            filter("Effect2");
            if (paddle.size > 0) {
              paddle.size--;
            }
            break;
          case 12:
            filter("Peow!");
            a = balls.length;
            i = 0;
            for (; i < a; i++) {
              t = balls.length;
              if (balls[i].is) {
                balls[t] = new Int;
                balls[t] = new Int;
                balls[t].x = balls[i].x;
                balls[t].y = balls[i].y;
                balls[t].xSpeed = balls[i].xSpeed;
                balls[t].ySpeed = balls[i].ySpeed + .2;
                balls[i].xSpeed -= .2;
                balls[t].ySpeed /= 1.2;
                balls[i].ySpeed /= 1.2;
              }
            }
            break;
          case 13:
            __init(true);
            break;
          case 14:
            break;
          case 15:
            filter("Peow!");
            i = 0;
            for (; i < balls.length; i++) {
              balls[i].xSpeed *= 2;
              balls[i].ySpeed *= 2;
            }
            break;
          case 16:
            filter("Sweepdow");
            paddle.size = 0;
            break;
          case 17:
            filter("Peow!");
            this.fall = true;
            break;
          case 18:
            filter("Peow!");
            this.shball = true;
            this.fireball = false;
        }
        this.type = -1;
      }
      this.draw();
    };
  };
  window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (axsPath, canCreateDiscussions) {
    window.setTimeout(axsPath, 100);
  };
  var nAttempts = 50;
  var settingsNAttempts = 0;
  setInterval(function () {
    nAttempts = parseInt(settingsNAttempts);
    settingsNAttempts = 0;
  }, 1e3);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, 640, 480);
  if (!window.saveron) {
    saver.drawing = false;
    audioFile.Whine.pause();
    if (window.soundon) {
      indexLookupKey = 0;
      _0x56c3x12.play();
    }
    start();
  }
  (function loop() {
    if (!(shadow.drawing || highscore.drawing || saver.drawing || saver.drawing || paused)) {
      ctx.drawImage(mbbkgrnd_img, 0, 0);
      paddle.move();
      y = 0;
      for (; y < 20; y++) {
        x = 0;
        for (; x < 20; x++) {
          bricks[x][y].move();
        }
      }
      i = 0;
      for (; i < bullets.length; i++) {
        bullets[i].move();
      }
      i = 0;
      for (; i < bang.length; i++) {
        bang[i].move();
      }
      i = 0;
      for (; i < flash.length; i++) {
        flash[i].move();
      }
      if (-1 != bonus.type) {
        bonus.move();
      }
      i = 0;
      for (; i < balls.length; i++) {
        if (balls[i].is) {
          balls[i].move();
        }
      }
      lightning.draw();
      update(user.score);
    }
    if (!shadow.drawing && paused) {
      ctx.drawImage(mbbkgrnd_img, 0, 0);
      y = 0;
      for (; y < 20; y++) {
        x = 0;
        for (; x < 20; x++) {
          bricks[x][y].move();
        }
      }
      update(user.score);
      myFonts.strokeText("PAUSED", "Thefont.sbk", 237, 210);
    }
    animframe = animframe + .1;
    if (animframe > .8) {
      animframe = 0;
    }
    if (saver.drawing) {
      saver.draw();
    }
    if (highscore.drawing) {
      highscore.draw();
    }
    if (shadow.drawing) {
      shadow.draw();
    }
    myFonts.strokeText("FPS: " + nAttempts, "Sfont.sbk", 585, 468);
    if (_0x56c3xd <= 0 && !cl) {
      cl = true;
      setTimeout(function () {
        user.level++;
        callback(user.level);
      }, 200);
    }
    settingsNAttempts++;
    touchesLength++;
    requestAnimFrame(loop);
  }());
};
var hex_chr = "0123456789abcdef";
function rhex(num) {
  str = "";
  j = 0;
  for (; j <= 3; j++) {
    str = str + (hex_chr.charAt(num >> 8 * j + 4 & 15) + hex_chr.charAt(num >> 8 * j & 15));
  }
  return str;
}
function str2blks_MD5(params) {
  nblk = 1 + (params.length + 8 >> 6);
  blks = new Array(16 * nblk);
  i = 0;
  for (; i < 16 * nblk; i++) {
    blks[i] = 0;
  }
  i = 0;
  for (; i < params.length; i++) {
    blks[i >> 2] |= params.charCodeAt(i) << i % 4 * 8;
  }
  return blks[i >> 2] |= 128 << i % 4 * 8, blks[16 * nblk - 2] = 8 * params.length, blks;
}
function add(x, y) {
  var _0x56c3x9 = (65535 & x) + (65535 & y);
  return (x >> 16) + (y >> 16) + (_0x56c3x9 >> 16) << 16 | 65535 & _0x56c3x9;
}
function calcMD5(str) {
  x = str2blks_MD5(str);
  a = 1732584193;
  b = -271733879;
  c = -1732584194;
  d = 271733878;
  i = 0;
  for (; i < x.length; i = i + 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = add(add(add(a, b & c | ~b & d), add(x[i + 0], -680876936)) << 7 | add(add(a, b & c | ~b & d), add(x[i + 0], -680876936)) >>> 25, b);
    d = add(add(add(d, a & b | ~a & c), add(x[i + 1], -389564586)) << 12 | add(add(d, a & b | ~a & c), add(x[i + 1], -389564586)) >>> 20, a);
    c = add(add(add(c, d & a | ~d & b), add(x[i + 2], 606105819)) << 17 | add(add(c, d & a | ~d & b), add(x[i + 2], 606105819)) >>> 15, d);
    b = add(add(add(b, c & d | ~c & a), add(x[i + 3], -1044525330)) << 22 | add(add(b, c & d | ~c & a), add(x[i + 3], -1044525330)) >>> 10, c);
    a = add(add(add(a, b & c | ~b & d), add(x[i + 4], -176418897)) << 7 | add(add(a, b & c | ~b & d), add(x[i + 4], -176418897)) >>> 25, b);
    d = add(add(add(d, a & b | ~a & c), add(x[i + 5], 1200080426)) << 12 | add(add(d, a & b | ~a & c), add(x[i + 5], 1200080426)) >>> 20, a);
    c = add(add(add(c, d & a | ~d & b), add(x[i + 6], -1473231341)) << 17 | add(add(c, d & a | ~d & b), add(x[i + 6], -1473231341)) >>> 15, d);
    b = add(add(add(b, c & d | ~c & a), add(x[i + 7], -45705983)) << 22 | add(add(b, c & d | ~c & a), add(x[i + 7], -45705983)) >>> 10, c);
    a = add(add(add(a, b & c | ~b & d), add(x[i + 8], 1770035416)) << 7 | add(add(a, b & c | ~b & d), add(x[i + 8], 1770035416)) >>> 25, b);
    d = add(add(add(d, a & b | ~a & c), add(x[i + 9], -1958414417)) << 12 | add(add(d, a & b | ~a & c), add(x[i + 9], -1958414417)) >>> 20, a);
    c = add(add(add(c, d & a | ~d & b), add(x[i + 10], -42063)) << 17 | add(add(c, d & a | ~d & b), add(x[i + 10], -42063)) >>> 15, d);
    b = add(add(add(b, c & d | ~c & a), add(x[i + 11], -1990404162)) << 22 | add(add(b, c & d | ~c & a), add(x[i + 11], -1990404162)) >>> 10, c);
    a = add(add(add(a, b & c | ~b & d), add(x[i + 12], 1804603682)) << 7 | add(add(a, b & c | ~b & d), add(x[i + 12], 1804603682)) >>> 25, b);
    d = add(add(add(d, a & b | ~a & c), add(x[i + 13], -40341101)) << 12 | add(add(d, a & b | ~a & c), add(x[i + 13], -40341101)) >>> 20, a);
    c = add(add(add(c, d & a | ~d & b), add(x[i + 14], -1502002290)) << 17 | add(add(c, d & a | ~d & b), add(x[i + 14], -1502002290)) >>> 15, d);
    b = add(add(add(b, c & d | ~c & a), add(x[i + 15], 1236535329)) << 22 | add(add(b, c & d | ~c & a), add(x[i + 15], 1236535329)) >>> 10, c);
    a = add(add(add(a, b & d | c & ~d), add(x[i + 1], -165796510)) << 5 | add(add(a, b & d | c & ~d), add(x[i + 1], -165796510)) >>> 27, b);
    d = add(add(add(d, a & c | b & ~c), add(x[i + 6], -1069501632)) << 9 | add(add(d, a & c | b & ~c), add(x[i + 6], -1069501632)) >>> 23, a);
    c = add(add(add(c, d & b | a & ~b), add(x[i + 11], 643717713)) << 14 | add(add(c, d & b | a & ~b), add(x[i + 11], 643717713)) >>> 18, d);
    b = add(add(add(b, c & a | d & ~a), add(x[i + 0], -373897302)) << 20 | add(add(b, c & a | d & ~a), add(x[i + 0], -373897302)) >>> 12, c);
    a = add(add(add(a, b & d | c & ~d), add(x[i + 5], -701558691)) << 5 | add(add(a, b & d | c & ~d), add(x[i + 5], -701558691)) >>> 27, b);
    d = add(add(add(d, a & c | b & ~c), add(x[i + 10], 38016083)) << 9 | add(add(d, a & c | b & ~c), add(x[i + 10], 38016083)) >>> 23, a);
    c = add(add(add(c, d & b | a & ~b), add(x[i + 15], -660478335)) << 14 | add(add(c, d & b | a & ~b), add(x[i + 15], -660478335)) >>> 18, d);
    b = add(add(add(b, c & a | d & ~a), add(x[i + 4], -405537848)) << 20 | add(add(b, c & a | d & ~a), add(x[i + 4], -405537848)) >>> 12, c);
    a = add(add(add(a, b & d | c & ~d), add(x[i + 9], 568446438)) << 5 | add(add(a, b & d | c & ~d), add(x[i + 9], 568446438)) >>> 27, b);
    d = add(add(add(d, a & c | b & ~c), add(x[i + 14], -1019803690)) << 9 | add(add(d, a & c | b & ~c), add(x[i + 14], -1019803690)) >>> 23, a);
    c = add(add(add(c, d & b | a & ~b), add(x[i + 3], -187363961)) << 14 | add(add(c, d & b | a & ~b), add(x[i + 3], -187363961)) >>> 18, d);
    b = add(add(add(b, c & a | d & ~a), add(x[i + 8], 1163531501)) << 20 | add(add(b, c & a | d & ~a), add(x[i + 8], 1163531501)) >>> 12, c);
    a = add(add(add(a, b & d | c & ~d), add(x[i + 13], -1444681467)) << 5 | add(add(a, b & d | c & ~d), add(x[i + 13], -1444681467)) >>> 27, b);
    d = add(add(add(d, a & c | b & ~c), add(x[i + 2], -51403784)) << 9 | add(add(d, a & c | b & ~c), add(x[i + 2], -51403784)) >>> 23, a);
    c = add(add(add(c, d & b | a & ~b), add(x[i + 7], 1735328473)) << 14 | add(add(c, d & b | a & ~b), add(x[i + 7], 1735328473)) >>> 18, d);
    b = add(add(add(b, c & a | d & ~a), add(x[i + 12], -1926607734)) << 20 | add(add(b, c & a | d & ~a), add(x[i + 12], -1926607734)) >>> 12, c);
    a = add(add(add(a, b ^ c ^ d), add(x[i + 5], -378558)) << 4 | add(add(a, b ^ c ^ d), add(x[i + 5], -378558)) >>> 28, b);
    d = add(add(add(d, a ^ b ^ c), add(x[i + 8], -2022574463)) << 11 | add(add(d, a ^ b ^ c), add(x[i + 8], -2022574463)) >>> 21, a);
    c = add(add(add(c, d ^ a ^ b), add(x[i + 11], 1839030562)) << 16 | add(add(c, d ^ a ^ b), add(x[i + 11], 1839030562)) >>> 16, d);
    b = add(add(add(b, c ^ d ^ a), add(x[i + 14], -35309556)) << 23 | add(add(b, c ^ d ^ a), add(x[i + 14], -35309556)) >>> 9, c);
    a = add(add(add(a, b ^ c ^ d), add(x[i + 1], -1530992060)) << 4 | add(add(a, b ^ c ^ d), add(x[i + 1], -1530992060)) >>> 28, b);
    d = add(add(add(d, a ^ b ^ c), add(x[i + 4], 1272893353)) << 11 | add(add(d, a ^ b ^ c), add(x[i + 4], 1272893353)) >>> 21, a);
    c = add(add(add(c, d ^ a ^ b), add(x[i + 7], -155497632)) << 16 | add(add(c, d ^ a ^ b), add(x[i + 7], -155497632)) >>> 16, d);
    b = add(add(add(b, c ^ d ^ a), add(x[i + 10], -1094730640)) << 23 | add(add(b, c ^ d ^ a), add(x[i + 10], -1094730640)) >>> 9, c);
    a = add(add(add(a, b ^ c ^ d), add(x[i + 13], 681279174)) << 4 | add(add(a, b ^ c ^ d), add(x[i + 13], 681279174)) >>> 28, b);
    d = add(add(add(d, a ^ b ^ c), add(x[i + 0], -358537222)) << 11 | add(add(d, a ^ b ^ c), add(x[i + 0], -358537222)) >>> 21, a);
    c = add(add(add(c, d ^ a ^ b), add(x[i + 3], -722521979)) << 16 | add(add(c, d ^ a ^ b), add(x[i + 3], -722521979)) >>> 16, d);
    b = add(add(add(b, c ^ d ^ a), add(x[i + 6], 76029189)) << 23 | add(add(b, c ^ d ^ a), add(x[i + 6], 76029189)) >>> 9, c);
    a = add(add(add(a, b ^ c ^ d), add(x[i + 9], -640364487)) << 4 | add(add(a, b ^ c ^ d), add(x[i + 9], -640364487)) >>> 28, b);
    d = add(add(add(d, a ^ b ^ c), add(x[i + 12], -421815835)) << 11 | add(add(d, a ^ b ^ c), add(x[i + 12], -421815835)) >>> 21, a);
    c = add(add(add(c, d ^ a ^ b), add(x[i + 15], 530742520)) << 16 | add(add(c, d ^ a ^ b), add(x[i + 15], 530742520)) >>> 16, d);
    b = add(add(add(b, c ^ d ^ a), add(x[i + 2], -995338651)) << 23 | add(add(b, c ^ d ^ a), add(x[i + 2], -995338651)) >>> 9, c);
    a = add(add(add(a, c ^ (b | ~d)), add(x[i + 0], -198630844)) << 6 | add(add(a, c ^ (b | ~d)), add(x[i + 0], -198630844)) >>> 26, b);
    d = add(add(add(d, b ^ (a | ~c)), add(x[i + 7], 1126891415)) << 10 | add(add(d, b ^ (a | ~c)), add(x[i + 7], 1126891415)) >>> 22, a);
    c = add(add(add(c, a ^ (d | ~b)), add(x[i + 14], -1416354905)) << 15 | add(add(c, a ^ (d | ~b)), add(x[i + 14], -1416354905)) >>> 17, d);
    b = add(add(add(b, d ^ (c | ~a)), add(x[i + 5], -57434055)) << 21 | add(add(b, d ^ (c | ~a)), add(x[i + 5], -57434055)) >>> 11, c);
    a = add(add(add(a, c ^ (b | ~d)), add(x[i + 12], 1700485571)) << 6 | add(add(a, c ^ (b | ~d)), add(x[i + 12], 1700485571)) >>> 26, b);
    d = add(add(add(d, b ^ (a | ~c)), add(x[i + 3], -1894986606)) << 10 | add(add(d, b ^ (a | ~c)), add(x[i + 3], -1894986606)) >>> 22, a);
    c = add(add(add(c, a ^ (d | ~b)), add(x[i + 10], -1051523)) << 15 | add(add(c, a ^ (d | ~b)), add(x[i + 10], -1051523)) >>> 17, d);
    b = add(add(add(b, d ^ (c | ~a)), add(x[i + 1], -2054922799)) << 21 | add(add(b, d ^ (c | ~a)), add(x[i + 1], -2054922799)) >>> 11, c);
    a = add(add(add(a, c ^ (b | ~d)), add(x[i + 8], 1873313359)) << 6 | add(add(a, c ^ (b | ~d)), add(x[i + 8], 1873313359)) >>> 26, b);
    d = add(add(add(d, b ^ (a | ~c)), add(x[i + 15], -30611744)) << 10 | add(add(d, b ^ (a | ~c)), add(x[i + 15], -30611744)) >>> 22, a);
    c = add(add(add(c, a ^ (d | ~b)), add(x[i + 6], -1560198380)) << 15 | add(add(c, a ^ (d | ~b)), add(x[i + 6], -1560198380)) >>> 17, d);
    b = add(add(add(b, d ^ (c | ~a)), add(x[i + 13], 1309151649)) << 21 | add(add(b, d ^ (c | ~a)), add(x[i + 13], 1309151649)) >>> 11, c);
    a = add(add(add(a, c ^ (b | ~d)), add(x[i + 4], -145523070)) << 6 | add(add(a, c ^ (b | ~d)), add(x[i + 4], -145523070)) >>> 26, b);
    d = add(add(add(d, b ^ (a | ~c)), add(x[i + 11], -1120210379)) << 10 | add(add(d, b ^ (a | ~c)), add(x[i + 11], -1120210379)) >>> 22, a);
    c = add(add(add(c, a ^ (d | ~b)), add(x[i + 2], 718787259)) << 15 | add(add(c, a ^ (d | ~b)), add(x[i + 2], 718787259)) >>> 17, d);
    b = add(add(add(b, d ^ (c | ~a)), add(x[i + 9], -343485551)) << 21 | add(add(b, d ^ (c | ~a)), add(x[i + 9], -343485551)) >>> 11, c);
    a = add(a, olda);
    b = add(b, oldb);
    c = add(c, oldc);
    d = add(d, oldd);
  }
  return rhex(a) + rhex(b) + rhex(c) + rhex(d);
}
function getOffsetSum(elem) {
  var x = 0;
  var value = 0;
  for (; elem;) {
    x = x + parseFloat(elem.offsetTop);
    value = value + parseFloat(elem.offsetLeft);
    elem = elem.offsetParent;
  }
  return {top: Math.round(x), left: Math.round(value)};
}
