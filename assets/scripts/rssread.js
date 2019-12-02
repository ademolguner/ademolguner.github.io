$(function () {
    var $content = $('#mediumArticledArea');
    var data = {
        rss_url: 'https://medium.com/feed/@ademolguner'
    };
    $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
        if (response.status == 'ok') {
            var output = '';
            var number = parseInt(0);
            $.each(response.items, function (k, item) {
                number += parseInt(1);
                if (parseInt(number) % 2 != 0) {
                    output += "<div class='timeline-box timeline-box-left'>" +
                        "<span class='dot'></span>" +
                        "<div class='timeline-box-inner animate-right'>" +
                        "<span class='arrow'></span>" +
                        "<div class='date'>" + $.format.date(item.pubDate, "dd.MM.yyyy") + "</div>" +
                        "<h3> <a href='" + item.guid + "'\' target='_blank' class=''>" + item.title + "</a> </h3>" +
                        "<h4></h4>" +
                        "<p style='text-align: center; width: 100%;'>" +
                        "<a href='" + item.guid + "'\' target='_blank' class='btn btn-sm btn-success text-color-white'>Makaleye Git</a>" +
                        "</p>" +
                        "</div>" +
                        "</div>";
                } else {
                    output += "<div class='timeline-box timeline-box-right'>" +
                        "<span class='dot'></span>" +
                        "<div class='timeline-box-inner animate-left'>" +
                        "<span class='arrow'></span>" +
                        "<div class='date'>" + $.format.date(item.pubDate, "dd.MM.yyyy") + "</div>" +
                        "<h3> <a href='" + item.guid + "'\' target='_blank' class=''>" + item.title + "</a> </h3>" +
                        "<h4></h4>" +
                        "<p style='text-align: center; width: 100%;'>" +
                        "<a href='" + item.guid + "'\' target='_blank' class='btn btn-sm btn-success text-color-white'>Makaleye Git</a>" +
                        "</p>" +
                        "</div>" +
                        "</div>";
                }


                return k < 10;
            });
            $content.html(output).hide();
            $content.fadeIn('slow');
        }
    });
});