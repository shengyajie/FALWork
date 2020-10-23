$(function() {
    $.ajax({
        method: 'get',
        datatype: "json", //数据类型
        url: '../../../api_server/db/data.json',
        success: function(res) {
            console.log(res.result.data)
            var htmlStr = template('tinyA', res.result);
            $('.TiB').html(htmlStr)
        }
    })
})