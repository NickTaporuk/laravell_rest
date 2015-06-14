<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>jQuery UI Slider</title>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=cyrillic,latin' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/header/fonts.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/header/main-header.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/header/glory-style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/header/section2.css') }}" />

</head>
<body>
<!-- Header -->
<div class="controllers" ng-app="headApp" ng-controller="headerController">

    <div class="header-container" >
        <header class="header">
            <div class="left-panel">
                <div class="logo">
                    <a href="#"><img src="images/icons/logo.png" alt=""></a>
                </div>
                <div class="header-btns clearfix">
                    <div class="header-nav-main">
                        <button class="open-nav">
                            <span></span>
                        </button>
                        <nav class="nav-dropdawn">
                            <ul>
                                <li class="sp-video">
                                    <a href="#">
                                        <div class="img"><img src="images/icons/sp-video-icon.png" alt=""></div>
                                        <p><span>sp</span>video</p>
                                    </a>
                                </li>
                                <li class="sp-news">
                                    <a href="#">
                                        <div class="img"><img src="images/icons/sp-news-icon.png" alt=""></div>
                                        <p><span>sp</span>news</p>
                                    </a>
                                </li>
                                <li class="sp-catalog">
                                    <a href="#">
                                        <div class="img"><img src="images/icons/sp-catalog-icon.png" alt=""></div>
                                        <p><span>sp</span>catalogue</p>
                                    </a>
                                </li>
                                <li class="sp-music">
                                    <a href="#">
                                        <div class="img"><img src="images/icons/sp-music-icon.png" alt=""></div>
                                        <p><span>sp</span>music</p>
                                    </a>
                                </li>
                                <li class="sp-afisha">
                                    <a href="#">
                                        <div class="img"><img src="images/icons/sp-afisha-icon.png" alt=""></div>
                                        <p><span>sp</span>afisha</p>
                                    </a>
                                </li>
                                <li class="sp-book">
                                    <a href="#">
                                        <div class="img"><img src="images/icons/sp-book-icon.png" alt=""></div>
                                        <p><span>sp</span>books</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-nav-name">
                        <button class="open-nav">
                            <span class="first"></span>
                            <span class="hidden"></span>
                            <span class="last"></span>
                        </button>
                        <nav class="nav-dropdawn">
                            <ul>
                                <li class="item">
                                    <a href="#">
                                        <div class="icon-wrap"><img src="images/icons/nav-icon_1.png" alt=""></div>
                                        <div class="name">О компании</div>
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#">
                                        <div class="icon-wrap"><img src="images/icons/nav-icon_2.png" alt=""></div>
                                        <div class="name">Партнерам</div>
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#">
                                        <div class="icon-wrap"><img src="images/icons/nav-icon_3.png" alt=""></div>
                                        <div class="name">Рекламодателям</div>
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#">
                                        <div class="icon-wrap"><img src="images/icons/nav-icon_4.png" alt=""></div>
                                        <div class="name">Контакты</div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="right-panel">
                <div class="user">
                    <button class="open-nav">Igor<span class="number-info number-sum">5</span></button>
                    <nav class="nav-dropdawn">
                        <ul class="nav-list">
                            <li><a href="#"><span class="points">sp</span>вопросы<span class="number-info">2</span></a></li>
                            <li><a href="#" data-target="sidebar-personal-info" class="sidebar-open-link">Личные данные<span class="number-info">2</span></a></li>
                        </ul>
                        <div class="nav-bot">
                            <a href="#" data-target="sidebar-callback" class="callback sidebar-open-link">Обратная связь</a>
                            <a href="#" class="come-out">Выйти</a>
                        </div>
                    </nav>
                </div>

                <div class="my-glory"><span>Мои славы</span> <span class="number-glory">525</span><a href="javascript:showSection()" class="add-glory">+</a></div>
                <div class="language">
                    <a href="#" class="current open-nav">ua</a>
                    <div class="language-dropdawn nav-dropdawn" style="display: none;">
                        <a href="/page/lang/en/1/d">Eng</a>
                        <a href="/page/lang/ru/1/d">Рус</a>
                    </div>
                </div>
            </div>
        </header>
    </div>
</div>
<!-- Header end -->
<div class="sidebar-wrapper">
    <aside class="home-sidebar sidebar-callback">
        <a href="#" class="sidebar-close"></a>
        <div class="sidebar-scroll scroll-pane">
            <div class="sidebar-container">
                <div class="sidebar-inner">
                    <form action="" class="callback-form">
                        <div class="sidebar-title">Обратная связь</div>
                        <div class="under-title">Если вы хотите задать нам вопрос, стать нашим партнером, разместить рекламу, поддержать нас или предложить что-то необыкновенное – пишите.
                        </div>
                        <input type="text" placeholder="Имя" class="name">
                        <input type="text" placeholder="E-mail" class="email">
                        <textarea name=""></textarea>
                        <button class="btn-send">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </aside>
    <aside class="home-sidebar sidebar-personal-info">
        <a href="#" class="sidebar-close"></a>
        <div class="sidebar-scroll scroll-pane">
            <div class="sidebar-container">
                <div class="sidebar-inner">
                    <form action="" class="personal-info">
                        <div class="sidebar-title">Личные данные</div>
                        <div class="under-title">Заполните информацию о себе – получите баллы!
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <span class="question_title">Интеграция с другими сервисами</span>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group__setUp">
                                    <a href="#" class="social-icon__link">Facebook</a><span class="social-icon__text">– закреплен.</span><a class="social-icon__setUp">настроить</a>
                                </div>
                                <div class="btn-group__setUp">
                                    <a href="#" class="social-icon__link">Вконтакте</a><span class="social-icon__text">– закреплен.</span><a class="social-icon__setUp">настроить</a>
                                </div>
                            </div>
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <label for="">Как вас зовут?</label>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group">
                                    <a href="#" class="cancel"></a>
                                    <a href="#" class="accept"></a>
                                </div>
                                <a href="#" class="edit"></a>
                            </div>
                            <input type="text" placeholder="Igor">
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <label for="">Ваш пол</label>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group">
                                    <a href="#" class="cancel"></a>
                                    <a href="#" class="accept"></a>
                                </div>
                                <a href="#" class="edit"></a>
                            </div>
                            <div class="sex-choice">
                                <div class="male"><div class="icon"></div><label class="radio-label checked"><input type="radio" name="sex-choice" id="male"></label></div>
                                <div class="female"><div class="icon"></div><label class="radio-label"><input type="radio" name="sex-choice" id="female"></label></div>
                            </div>
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <label for="">Ваша дата рождения</label>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group">
                                    <a href="#" class="cancel"></a>
                                    <a href="#" class="accept"></a>
                                </div>
                                <a href="#" class="edit"></a>
                            </div>
                            <div class="date-items">
                                <div class="day"><input type="text" placeholder="04"></div>
                                <div class="month"><input type="text" placeholder="11"></div>
                                <div class="year"><input type="text" placeholder="1991"></div>
                            </div>
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <label for="">Откуда вы?</label>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group">
                                    <a href="#" class="cancel"></a>
                                    <a href="#" class="accept"></a>
                                </div>
                                <a href="#" class="edit"></a>
                            </div>
                            <input type="text" placeholder="Украина, Киевская облать, Киев">
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <label for="">Ваш e-mail </label>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group">
                                    <a href="#" class="cancel"></a>
                                    <a href="#" class="accept"></a>
                                </div>
                                <a href="#" class="edit"></a>
                            </div>
                            <input type="text" placeholder="ponomarenko912@gmail.com">
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <label for="">Знак зодиака</label>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group">
                                    <a href="#" class="cancel"></a>
                                    <a href="#" class="accept"></a>
                                </div>
                                <a href="#" class="edit"></a>
                            </div>
                            <input type="text" placeholder="">
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <label for="">Любиый цвет</label>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group">
                                    <a href="#" class="cancel"></a>
                                    <a href="#" class="accept"></a>
                                </div>
                                <a href="#" class="edit"></a>
                            </div>
                            <input type="text" placeholder="">
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <label for="">Любимое блюдо</label>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group">
                                    <a href="#" class="cancel"></a>
                                    <a href="#" class="accept"></a>
                                </div>
                                <a href="#" class="edit"></a>
                            </div>
                            <input type="text" placeholder="">
                        </div>
                        <div class="question">
                            <div class="clearfix">
                                <label for="">Любиый цвет</label>
                                <span class="glory">(+5 славов)</span>
                                <div class="btn-group">
                                    <a href="#" class="cancel"></a>
                                    <a href="#" class="accept"></a>
                                </div>
                                <a href="#" class="edit"></a>
                            </div>
                            <input type="text" placeholder="">
                        </div>
                    </form>
                </div>
            </div>
    </aside>
</div>
<div class="section3_popup">
    <div class="b-container__section slide" id="nav3">
        <section  class="b-section3">
            <div class="slider-circle wowBounce animated">
                <ul class="slider-circle-list">
                    <li class="slider-circle-item slider-circle-item_main">
                        <div class="icon"></div>
                    </li>
                    <li class="slider-circle-item slider-circle-item1 wowFadeLeft animated">
                        <div class="list-text">Как<br>заработать</div>
                    </li>
                    <li class="slider-circle-item slider-circle-item2 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">Пройти<br>регистрацию</div>
                    </li>
                    <li class="slider-circle-item b-slider-border b-slider__border2">
                        <div class="b-border"></div>
                    </li>
                    <li class="slider-circle-item slider-circle-item3 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">Отвечать на <br>вопросы</div>
                    </li>
                    <li class="slider-circle-item b-slider-border b-slider__border3">
                        <div class="b-border"></div>
                    </li>
                    <li class="slider-circle-item slider-circle-item4 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">Участвовать<br>в акциях</div>
                    </li>
                    <li class="slider-circle-item b-slider-border b-slider__border4">
                        <div class="b-border"></div>
                    </li>
                    <li class="slider-circle-item slider-circle-item5 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">Пользоваться<br>контентом<br>(смотреть, читать,<br>узнавать)</div>
                    </li>
                    <li class="slider-circle-item b-slider-border b-slider__border5">
                        <div class="b-border"></div>
                    </li>
                    <li class="slider-circle-item slider-circle-item6 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">Оценивать<br>контент</div>
                    </li>
                    <li class="slider-circle-item b-slider-border b-slider__border6">
                        <div class="b-border"></div>
                    </li>
                    <li class="slider-circle-item slider-circle-item7 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">Комментировать<br>контент</div>
                    </li>
                    <li class="slider-circle-item b-slider-border b-slider__border7">
                        <div class="b-border"></div>
                    </li>
                    <li class="slider-circle-item slider-circle-item8 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">и многое другое</div>
                    </li>
                    <li class="slider-circle-item slider-circle-item9 wowFadeLeft animated">
                        <div class="list-text">куда<br>потратить</div>
                    </li>
                    <li class="slider-circle-item slider-circle-item10 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">Расплачиваться в<br>партнерских <br>программах за товар<br>и сервисы</div>
                    </li>
                    <li class="slider-circle-item b-slider-border b-slider__border8">
                        <div class="b-border"></div>
                    </li>
                    <li class="slider-circle-item slider-circle-item11 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">Получать подарки</div>
                    </li>
                    <li class="slider-circle-item b-slider-border b-slider__border9">
                        <div class="b-border"></div>
                    </li>
                    <li class="slider-circle-item slider-circle-item12 wowFadeLeft animated">
                        <div class="icon"></div>
                        <div class="list-text">Пользоваться<br>платным<br>контентом</div>
                    </li>
                </ul>
                <h2 class="b-container__headline b-login-black wowFadeUp animated">Система накопления spбаллов</h2>
            </div>
        </section>
    </div>
</div>

<div class="b-container__section b-section2_container" id="nav2">
    <section  class="b-section2">
        <div class="b-container__fixed b-container__center">
            <div class="b-section__icons">
                <div class="b-icon b-icon__image1">
                    <a href="#"><img alt="" class="b-icon__image" src="images/icon_spshop.png"></a>
                    <div class="tooltip top">
                        <div class="tooltip-inner">
                            <div class="title">Я хочу смотреть лучшее...</div>
                        </div>
                    </div>
                </div>
                <div class="b-icon b-icon__image2">
                    <a href="#"><img alt="" class="b-icon__image" src="images/icon_spcatalogue.png"></a>
                    <div class="tooltip top">
                        <div class="tooltip-inner">
                            <div class="title">Я хочу покупать лучшее...</div>
                        </div>
                    </div>
                </div>
                <div class="b-icon b-icon__image3">
                    <a href="#"><img alt="" class="b-icon__image" src="images/icon_spbooks.png"></a>
                    <div class="tooltip left">
                        <div class="tooltip-inner">
                            <div class="title">Я хочу читать лучшее...</div>
                        </div>
                    </div>
                </div>
                <div class="b-icon b-icon__image4">
                    <a href="#"><img alt="" class="b-icon__image" src="images/icon_spmusic.png"></a>
                    <div class="tooltip left">
                        <div class="tooltip-inner">
                            <div class="title">Я хочу слушать лучшее…</div>
                        </div>
                    </div>
                </div>
                <div class="b-icon b-icon__image5">
                    <a href="#"><img alt="" class="b-icon__image" src="images/icon_spnews.png"></a>
                    <div class="tooltip bottom">
                        <div class="tooltip-inner">
                            <div class="title">Я хочу владеть последней информацией...</div>
                        </div>
                    </div>
                </div>
                <div class="b-icon b-icon__image6">
                    <a href="#"><img alt="" class="b-icon__image" src="images/icon_spafisha.png"></a>
                    <div class="tooltip bottom">
                        <div class="tooltip-inner">
                            <div class="title">Я хочу посещать лучшие мероприятия...</div>
                        </div>
                    </div>
                </div>
                <div class="b-icon b-icon__image7">
                    <a href="#"><img alt="" class="b-icon__image" src="images/icon_spvideo.png"></a>
                    <div class="tooltip right">
                        <div class="tooltip-inner">
                            <div class="title">Я хочу смотреть лучшее...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-section__main">
                <h2 class="b-container__headline b-login-black">
                    ПРЕИМУЩЕСТВА СЕРВИСА</h2>

                <p class="b-container__text">Только участникам проекта <b><a href="#">slavpeople.com</a></b> откроется удивительный мир легального контента, предоставленного правообладателями, официальными дистрибьютерами и авторами, совершенно <b>БЕСПЛАТНО</b> (при использовании программы лояльности). А также, дополнительные выгоды, индивидуальная настройка, уникальные предложения и&nbsp;многое&nbsp;другое...</p>
            </div>
        </div>
    </section>
</div>

<!--Angular-->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular.min.js"></script>
<script src="js/header/controllers/header.controller.js"></script>
{{--<script src="js/app.js"></script>--}}

{{--<script src="js/header/jquery.min.js"></script>--}}

{{--<script type="text/javascript" src="js/header/jquery.mousewheel.js"></script>--}}
<!-- the jScrollPane script -->
{{--<script type="text/javascript" src="js/header/jquery.jscrollpane.min.js"></script>--}}
{{--<script type="text/javascript" src="js/header/header.js"></script>--}}
{{--<script type="text/javascript">
    $(document).ready(function(){
        $('.sidebar-open-link,.password, .header-nav-name .nav-dropdawn a').click(function(){
            $('.scroll-pane').jScrollPane();
        });
        // Scroll Pane
        $(function(){
            $('.scroll-pane').jScrollPane();
        });

        $(window).resize(function(){
            $(function() {
                $('.scroll-pane').jScrollPane();
            });
        });
    });
</script>--}}
</body>
</html>