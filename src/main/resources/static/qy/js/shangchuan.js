$(function(){
    $("#btn7").click(function(){
        var txt=  '<form action="/check1/updateUserLogo" enctype="multipart/form-data" method="post"><div><input id="file" name="file" type="file" multiple=true></div></form>'+
        '<script>' +
           '$("#file").change(function () {' +
            '        var str=document.getElementById("file").files[0];' +

            '        var imgUlr=window.URL.createObjectURL(str);' +
            '        $("#btn7").attr("src",imgUlr);' +
            '    });'+
            '</script>';
        var option = {
            title: "更换头像",
            btn: parseInt("0011",2),
            onOk: function(){
                console.log("确认啦");
    }
        }
        window.wxc.xcConfirm(txt, "custom", option);
    });




});

