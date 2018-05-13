<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="/huigoupiao/Public/bootstrap-3.3.7/dist/css/bootstrap.css">
    <link rel="stylesheet" href="/huigoupiao/Public/common.css">
    <link rel="stylesheet" href="/huigoupiao/Public/Theater/details.css">
</head>
<body>
<div class="banner cinema-banner">
    <div class="wrapper clearfix">
        <div class="cinema-left">
            <div class="avatar-shadow">
                <img class="avatar" src="">
            </div>
        </div>

        <div class="cinema-main clearfix">
            <div class="cinema-brief-container">
                <h3 class="name text-ellipsis"></h3>
                <div class="address text-ellipsis"></div>
                <div class="telphone"></div>

                <div class="features-group">
                    <div class="group-title">影院服务</div>

                    <div class="feature">
                        <span class="tag ">3D眼镜收费</span>
                        <p class="desc text-ellipsis" title="自费购买, 5.0元每副">自费购买, 5.0元每副</p>
                    </div>
                    <div class="feature">
                        <span class="tag ">儿童优惠</span>
                        <p class="desc text-ellipsis" title="1.3m以下儿童观看普通电影免票，每个成年人仅限带一名儿童">1.3m以下儿童观看普通电影免票，每个成年人仅限带一名儿童</p>
                    </div>
                    <div class="feature">
                        <span class="tag park-tag">可停车</span>
                        <p class="desc text-ellipsis" title="影城有免费停车位提供">影城有免费停车位提供</p>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>

<div class="container" id="app">
    <div class="movie-list-container">
        <div class="clearfix movie-box">
        <div class="movie-list">
            <div class="movie active">
                <img src="" alt="">
            </div>

            <span class="pointer" style="left: 71px;"></span>
        </div>
    </div>
       <!-- <span class="scroll-prev scroll-btn"></span>
        <span class="scroll-next scroll-btn"></span>-->
    </div>

    <div class="show-list active" data-index="0">
        <div class="movie-info">
            <div>
                <h3 class="movie-name"></h3>

                <span class="score sc"></span>

            </div>

            <div class="movie-desc">
                <div>
                    <span class="key">时长 :</span>
                    <span class="value  time"></span>
                </div>
                <div>
                    <span class="key">类型 :</span>
                    <span class="value type">  </span>
                </div>
                <div>
                    <span class="key">主演 :</span>
                    <span class="value actior"> </span>
                </div>
            </div>
        </div>

        <div class="show-date">

        </div>

        <div class="plist-container active">

            <table class="plist">
                <thead>
                <tr>
                    <th>放映时间</th>
                    <th>语言版本</th>
                    <th>放映厅</th>
                    <th>售价（元）</th>
                    <th>选座购票</th>
                </tr>
                </thead>

                <tbody>

                </tbody>
            </table>

        </div>


    </div>

</div>
</body>
<script src="/huigoupiao/Public/jquery-3.3.1.js"></script>
<script src="/huigoupiao/Public/bootstrap-3.3.7/dist/js/bootstrap.js"></script>
<script src="/huigoupiao/Public/common.js"></script>
<script src="/huigoupiao/Public/Theater/details.js"></script>
</html>