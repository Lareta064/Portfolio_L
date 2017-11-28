$(document).ready(function() {


    //плавная прокрутка
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
      highlightSelector:"nav a"
  });

    //подключение фильтра работ
    $('#testfilter').mixItUp();

   

    // FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
	// End of FancyBox - galery

 //мой первый скрипт по перелючению класса
   // $('.filter-block_button').on('click' function () {
	//	$(this).toggleClass('.filter-block_button--active');
	//});
    //конец мой первый скрипт по перелючению класса

});