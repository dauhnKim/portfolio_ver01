<?php 
  include "config.php";
?>


<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dauhn KIM - Front End Developer</title>
  <link rel="shortcut icon" href="img/favicon.ico">
  <link rel="stylesheet" href="css/main.css?<?php echo date('is'); ?>">
  <!--[if lt IE 9]>
  <script src="js/ie9.min.js"></script>
  <script src="js/respond.min.js"></script>
  <![endif]-->
  <script src="js/jquery-1.12.4.min.js"></script>
  <script src="js/jquery-ui.min.js"></script>
  <script src="js/fixedHeader.js"></script>
  <script src="js/lang.js"></script>
  <script src="js/aside.js"></script>
  <script src="js/topBtn.js"></script>
</head>

<body>
  
  <header>   
    <div class="header-con">          
      <nav class="lang">
        <a href="index.php?lang=en" class="lang_a <?php echo $_SESSION['lang']==='en' ? 'on' : ''; ?>">en</a>
        <a href="index.php?lang=ko" class="lang_a <?php echo $_SESSION['lang']==='ko' ? 'on' : ''; ?>">ko</a>
      </nav>
      <span class="comm"><a href="#">comment</a></span>
      <h1 class="logo">
        <a href="index.html">Dauhn KIM</a>
      </h1>
      <nav class="gnb">
        <a href="#" class="gnb-about">about</a>
      </nav>
    </div>
  </header>

  <aside class="right-aside">
    <div class="about-con">
      <section class="blur"></section>
      <section class="about">
        <button class="close-btn"></button>
        <p><img src="img/dk01.png" alt=""></p>
        <div class="about-desc">
          <h3>Hello, I am <b>Dauhn</b>.</h3>
          <span>People usually say <br>
            work smart, <br>
            not work hard. <br></span>
          But in my case, <br>
          I need to <b>work hard <br>
            to work smart.</b>
        </div>
        <ul>
          <li>dauhn357@gmail.com</li>
          <li>+82 10 7620 5173</li>
        </ul>
        <span class="bg-txt">I believe <br> in the magic of <b>dedication</b></span>
      </section>
    </div>
  </aside>

  <aside class="left-aside">
    <div class="comm-con">
      <section class="comment">
        <button class="close-btn comm-btn"></button>
        <ul>
          <li class="list title">
            <h3>What other people say about me</h3>
          </li>
          <li class="list title teacher">
            <p class="drawing t"><span><?php echo $lang['teacher'] ?></span></p>
            <span class="hgt"><b>“<?php echo $lang['teacher_title'] ?>”</b><br>
              <?php echo $lang['teacher_con'] ?></span>
          </li>
          <li class="list">
            <p class="drawing hsw even"><span><?php echo $lang['sin'] ?></span></p>
            <span class="hgt even-desc"><b>“<?php echo $lang['sin_title'] ?>”</b><br>
              <?php echo $lang['sin_con'] ?></span>
          </li>
          <li class="list">
            <p class="drawing ymy"><span><?php echo $lang['yang'] ?></span></p>
            <span class="hgt"><b>“<?php echo $lang['yang_title'] ?>”</b><br>
              <?php echo $lang['yang_con'] ?></span>
          </li>
          <li class="list">
            <p class="drawing kjh even"><span><?php echo $lang['jeong'] ?></span></p>
            <span class="even-desc"><b>“<?php echo $lang['jeong_title'] ?>”</b><br>
              <?php echo $lang['jeong_con'] ?></span>
          </li>
          <li class="list">
            <p class="drawing lhy"><span><?php echo $lang['hee'] ?></span></p>
            <span class=""><b>“<?php echo $lang['hee_title'] ?>”</b><br>
              <?php echo $lang['hee_con'] ?></span>
          </li>
          <li class="list">
            <p class="drawing khj even"><span><?php echo $lang['hyeon'] ?></span></p>
            <span class="even-desc"><b>“<?php echo $lang['hyeon_title'] ?>”</b><br>
              <?php echo $lang['hyeon_con'] ?></span>
          </li>
          <li class="list">
            <p class="drawing mgh"><span><?php echo $lang['moon'] ?></span></p>
            <span class=""><b>“<?php echo $lang['moon_title'] ?>”</b><br>
              <?php echo $lang['moon_con'] ?></span>
          </li>
        </ul>
      </section>
      <section class="blur comm-blur"></section>
    </div>
  </aside>

  <main class="clearfix">
    <h2 class="wlc">
      Entry Level Front End Developer <br>
    </h2>
    <ul>
      <li class="list">
        <a href="works/soo/index.html" target="_blank">
          <span class="pic first">
            <span class="pf-intro">
              <span class="num-odd">01</span>
            </span>
          </span>
        </a>
        <div class="pf-info">
          <span class="sm-title">Responsive Web <br>Index Page <br>Sub Page: News</span>
          <p class="desc ko">
            <?php echo $lang['one'] ?>
            <i><?php echo $lang['one_con'] ?></i>
          </p>
          <a href="works/soo/index.html" class="visit" target="_blank">Visit website</a>
        </div>
      </li>
      <li class="list show">
        <a href="works/fm/index.html" class="even" target="_blank">
          <span class="pic second">
            <span class="pf-intro">
              <span class="num-even">02</span>
            </span>
          </span>
        </a>
        <div class="pf-info even2">
          <span class="sm-title">Responsive Web <br>Index Page <br>Sub Page: GEAR</span>
          <p class="desc ko">
            <?php echo $lang['two'] ?>
            <i><?php echo $lang['two_con'] ?></i>
          </p>
          <a href="works/fm/index.html" class="visit" target="_blank"> Visit website</a>
        </div>
      </li>
      <li class="list">
        <a href="works/spacex/index.html" target="_blank">
          <span class="pic third">
            <span class="pf-intro">
              <span class="num-odd">03</span>
            </span>
          </span>
        </a>
        <div class="pf-info">
          <span class="sm-title">PC Web <br>One Page</span>
          <p class="desc ko">
            <?php echo $lang['three'] ?>
            <i><?php echo $lang['three_con'] ?></i>
          </p>
          <a href="works/spacex/index.html" class="visit" target="_blank">Visit website</a>
        </div>
      </li>
      <li class="list">
        <a href="works/pawinhand/index.html" class="even" target="_blank">
          <span class="pic fourth">
            <span class="pf-intro">
              <span class="num-even">04</span>
            </span>
          </span>
        </a>
        <div class="pf-info even2">
          <span class="sm-title">PC Web <br>Landing Page <br>Sub Page: All</span>
          <p class="desc ko">
            <?php echo $lang['four'] ?>
            <i><?php echo $lang['four_con'] ?></i>
          </p>
          <a href="works/pawinhand/index.html" class="visit" target="_blank"> Visit website</a>
        </div>
      </li>
      <li class="list">
        <a href="works/dji/index.html" target="_blank">
          <span class="pic fifth">
            <span class="pf-intro">
              <span class="num-odd">05</span>
            </span>
          </span>
        </a>
        <div class="pf-info">
          <span class="sm-title">PC Web <br>One Page</span>
          <p class="desc ko">
            <?php echo $lang['five'] ?>
            <i><?php echo $lang['five_con'] ?></i>
          </p>
          <a href="works/dji/index.html" class="visit" target="_blank">Visit website</a>
        </div>
      </li>
      <li class="list">
        <a href="works/deeglazer/index.html" class="even" target="_blank">
          <span class="pic sixth">
            <span class="pf-intro">
              <span class="num-even">06</span>
            </span>
          </span>
        </a>
        <div class="pf-info even2">
          <span class="sm-title">PC Web <br>One Page</span>
          <p class="desc ko">
            <?php echo $lang['six'] ?>
            <i><?php echo $lang['six_con'] ?></i>
          </p>
          <a href="works/deeglazer/index.html" class="visit" target="_blank"> Visit website</a>
        </div>
      </li>
      <li class="list">
        <a href="works/wonderland/index.html" target="_blank">
          <span class="pic seventh">
            <span class="pf-intro">
              <span class="num-odd">07</span>
            </span>
          </span>
        </a>
        <div class="pf-info">
          <span class="sm-title">PC Web <br>One Page</span>
          <p class="desc ko">
            <?php echo $lang['seven'] ?>
            <i><?php echo $lang['seven_con'] ?></i>
          </p>
          <a href="works/wonderland/index.html" class="visit" target="_blank">Visit website</a>
        </div>
      </li>
    </ul>


    <button class="top-btn">top</button>
  </main>
  <footer>
    <address>&copy; All Rights Reserved | 2020</address>
  </footer>

</body></html>
