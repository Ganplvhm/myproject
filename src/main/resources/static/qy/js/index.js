/**
 * Created by ASUS on 2018/10/18.
 */

$(".btn_send").on('click',function(){
    var now = time()
    //��ȡ������Ϣ
    var text_send = $("#text_send").val();
    if(text_send == ""){
        return false;
    }
    var html;
    html = '<div class="col-md-12 col-sm-12 col-xl-12 one cont">'+
        '<div class="col-md-2 col-sm-2 col-xl-12 one img">'+
        '<img src="../images/logo.png">'+
        '</div>'+
        '<div class="col-md-10 col-sm-10 col-xl-12 one content">'+
        '<div class="comment-right">'+
        '<h4>����</h4>'+
        '<div class="comment-content-header three">'+
        '<span><i class="glyphicon glyphicon-time two"></i>'+now+'</span>&nbsp;&nbsp;&nbsp;&nbsp;'+
        '<span><i class="glyphicon glyphicon-map-marker two"></i>����</span>'+
        '</div>'+
        '<p class="tent">'+text_send+'</p>'+
        '<div class="comment-content-footer">'+
        '<div class="row">'+
        '<div class="col-md-12 col-sm-12 col-xl-12 three">'+
        '<span><i class="glyphicon glyphicon-globe two"></i> �ȸ�</span>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="reply-list three">'+

        '</div>'+
        '<div class="col-md-12 col-sm-12 col-xl-12 content_text one three">'+
        '<textarea class="col-md-10 col-sm-10 col-xl-10 con_back" id="con_back"></textarea>'+
        '<div class="col-md-2 col-sm-2 col-xl-2 btn btn_back">�ύ</div>'+
        '</div>'+
        '</div>'+
        '</div>';
    $(".tent_info").append(html);
    $(".text_send").val("");
});

$(".content_text").show();
$(".tent_info").on('click','.btn_back',function(){

    var back_time = time();


    //��ȡ������Ϣ
    var con_back = $(this).parent().parent().parent().find("#con_back").val();
    if(con_back == ""){
        return false;
    }
    var html_back;
    html_back = '<div class="reply">'+
        '<div class="three">'+
        '<a class="replyname">����</a>:<span >@brother</span><span>'+back_time+'</span>'+
        '</div>'+
        '</div>'+
        '<p><span>'+con_back+'</span></p>';
    $(this).parent().parent().parent().find(".reply-list").append(html_back);
    $(this).parent().parent().parent().find("#con_back").val("");
})

//�����ύ
function time(){
    function time(s) {
        return s < 10 ? '0' + s: s;
    }
    var myDate = new Date();
    //��ȡ��ǰ��
    var year=myDate.getFullYear();
    //��ȡ��ǰ��
    var month=myDate.getMonth()+1;
    //��ȡ��ǰ��
    var date=myDate.getDate();
    var h=myDate.getHours();       //��ȡ��ǰСʱ��(0-23)
    var m=myDate.getMinutes();     //��ȡ��ǰ������(0-59)
    var s=myDate.getSeconds();
    return year+'-'+time(month)+"-"+time(date)+" "+time(h)+':'+time(m)+":"+time(s);
}
