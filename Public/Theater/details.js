var theaterid = getRequestParams("theaterid");
var movieid = getRequestParams("movieid");
$(function () {
    initPage();
    initEvent();
})
function initEvent() {
    $("body").on("click",".buy-btn",function () {
        var bookinfoid = $(this).attr("bookinfoid");
        $("#mainIframe",parent.document).attr("src","http://www.hgp.com/huigoupiao/Theater/Index/buyBook.html?boookInfoid="+bookinfoid+"&movieid="+movieid+"&theaterid="+theaterid);
    })
    $(".show-date").on("click",".date-item",function () {
        $(this).addClass("active").siblings().removeClass("active");
        var data = $(this).attr("value");
        $.ajax({
            url:"/huigoupiao/Theater/Index/selectTime",
            data:{movieid:movieid,theaterid:theaterid,time:data},
            type:"post",
            success:function (rep) {
                rep = JSON.parse(rep);
                setMovieInfo(rep.bookInfo,rep.movieInfo,false);
            },
            error:function (rep) {
                alert("页面出错！")
            }
        });
    })
    $(".movie-list-container").on("click",".movie-list",function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("[value='-1']").addClass("active").siblings().removeClass("active");
        var movieid = $(this).attr("movieid");
        var theaterid = $(this).attr("theaterid");
        $.ajax({
            url:"/huigoupiao/Theater/Index/selectTime",
            data:{movieid:movieid,theaterid:theaterid,time:"-1"},
            type:"post",
            success:function (rep) {
                rep = JSON.parse(rep);
                setTheaterInfo(rep.theaterinfo[0]);
                setAllTheater(rep.allMovieInfo,rep.movieInfo);
                setMovieInfo(rep.bookInfo,rep.movieInfo,true);
            },
            error:function (rep) {
                alert("页面出错！")
            }
        });
    })
}
function initPage() {
    $.ajax({
        url:"/huigoupiao/Theater/Index/selectTime",
        data:{movieid:movieid,theaterid:theaterid,time:"-1"},
        type:"post",
        success:function (rep) {
            rep = JSON.parse(rep);
            setTheaterInfo(rep.theaterinfo[0]);
            setAllTheater(rep.allMovieInfo,rep.movieInfo);
            setMovieInfo(rep.bookInfo,rep.movieInfo,true);
        },
        error:function (rep) {
            alert("页面出错！")
        }
    });
}

function setTheaterInfo(theaterinfo) {
    $("h3.name").html(theaterinfo.name);
    $(".address").html(theaterinfo.place);
    $(".avatar").attr("src",theaterinfo.img);
    if(theaterinfo.tel){
        $(".telphone").html("电话："+theaterinfo.tel);
    }else{
        $(".telphone").html("电话：暂无");
    }

}

function setAllTheater(allTheaterInfo,movieInfo) {
    var movie = "";
    var movieList = {};
    var length = 1;
    for(var i =0;i<allTheaterInfo.length;i++){
        if(!movieList[allTheaterInfo[i].mid]){
            movie += '<div class="movie-list" movieid="'+allTheaterInfo[i].mid +'"  theaterid="'+theaterid +'">\n' +
                '            <div class="movie">\n' +
                '                <img src="'+allTheaterInfo[i].mpic+'" alt="">\n' +
                '            </div>\n' +
                '\n' +
                '            <span class="pointer hidden" style="left: 71px;"></span>\n' +
                '        </div>';
            movieList[allTheaterInfo[i].mid] = 1;
            length++;
        }
    }
    $(".movie-box").width(length*162+"px");
    $(".movie-box").html(movie);
    $(".movie-list[movieid='"+movieInfo.mid+"']").find(".movie").addClass("active");
    $(".movie-list[movieid='"+movieInfo.mid+"']").find(".pointer").removeClass("hidden");
}

function setMovieInfo(bookInfo,movieInfo,setDate) {
    $(".movie-name").html(movieInfo.mcname);
    $(".score").html(movieInfo.mgrade);
    $(".time").html(movieInfo.mtime);
    $(".type").html(movieInfo.mtype);
    $(".actior").html(movieInfo.maction.split("\\")[0]);
   /* $(".movie img").attr("src",movieInfo.mpic)*/
    var dayArr = {};
    var time = '<span>观影时间 :</span>';
    time += '\'<span class="date-item active" value="-1">全部</span>';
    var book = '';
    for(var i =0;i<bookInfo.length;i++){
        if(setDate) {
            if (!dayArr[bookInfo[i].playdate]) {
                var day = bookInfo[i].playdate.split("/");
                time += '<span class="date-item" value="' + bookInfo[i].playdate + '">' + day[1] + '月' + day[2] + '日' + '</span>'
                dayArr[bookInfo[i].playdate] = 1;
            }
            $(".show-date").html(time);
        }
        book += '<tr class="">\n' +
            '                    <td>\n' +
            '                        <span class="begin-time">'+bookInfo[i].playtime+'</span>\n' +
            '                        <br>\n' +
            '                    </td>\n' +
            '                    <td>\n' +
            '                        <span class="lang">'+bookInfo[i].playtime+'</span>\n' +
            '                    </td>\n' +
            '                    <td>\n' +
            '                        <span class="hall">'+bookInfo[i].house+'号厅</span>\n' +
            '                    </td>\n' +
            '                    <td>\n' +
            '                        <span class="sell-price"><span class="stonefont">'+bookInfo[i].price+'</span></span>\n' +
            '                    </td>\n' +
            '                    <td>\n' +
            '                        <a class="buy-btn normal" bookinfoid="'+bookInfo[i].id+'"  movieid="'+movieid+'">选座购票</a>\n' +
            '                    </td>\n' +
            '                </tr>';
        $(".plist-container tbody").html(book);

    }
    initParaentIframe();
}


