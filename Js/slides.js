$(function(){


 // SLIDE MOSAIC   
$(".mosaic .container .mosaic-wraper").slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        infinite: false,
        swipe: false,         // Desativa toque (mobile)
        draggable: false,     // Desativa mouse (desktop)
        touchMove: false,     // Desativa gesto de arrastar
        pauseOnFocus: false,  // Evita pausas por foco
        pauseOnHover: false,  // Evita pausas por hover
    
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow: 3,
                    centerMode:true,
                    arrows: false,
                    swipe: true,         // ativa toque (mobile)
                    draggable: true,     // ativa mouse (desktop)
                    touchMove: true,     // ativa gesto de arrastar
                    infinite: true
                },
                
            },
            {
                breakpoint:580,
                settings:{
                    slidesToShow: 2,
                    arrows: false,
                    centerMode:true,
                    swipe: true,         // ativa toque (mobile)
                    draggable: true,     // ativa mouse (desktop)
                    touchMove: true,     // ativa gesto de arrastar
                    infinite: true
                }
            },
            {
                breakpoint:380,
                settings:{
                    slidesToShow: 1,
                    arrows: false,
                    swipe: true,         // ativa toque (mobile)
                    draggable: true,     // ativa mouse (desktop)
                    touchMove: true,     // ativa gesto de arrastar
                    infinite: true,
                    centerMode:true,
                }
            }
        ]
    })

    

    // SLIDE TREATMENTS
    $(".treatments .container").slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        swipe: false,         // Desativa toque (mobile)
        draggable: false,     // Desativa mouse (desktop)
        touchMove: false,     // Desativa gesto de arrastar
        pauseOnFocus: false,  // Evita pausas por foco
        pauseOnHover: false,  // Evita pausas por hover
        
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow: 2,
                    centerMode:false,
                    arrows: false,
                    dots: true,
                    swipe: false,         // ativa toque (mobile)
                    draggable: false,     // ativa mouse (desktop)
                    touchMove: false,     // ativa gesto de arrastar
                    infinite: false
                },
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow: 1,
                    centerMode:false,
                    arrows: false,
                    dots: true,
                    swipe: false,         // ativa toque (mobile)
                    draggable: false,     // ativa mouse (desktop)
                    touchMove: false,     // ativa gesto de arrastar
                    infinite: false
                }
            }

        ]
    
    
    })



    //SLIDE DEPOIMENTOS 
    $(".testimonials .container").slick({
        centerMode: false,
        slidesToShow:1 ,
        dots: true,
        arrows: false,
        infinite: false,
        swipe: false,         // Desativa toque (mobile)
        draggable: false,     // Desativa mouse (desktop)
        touchMove: false,     // Desativa gesto de arrastar
        pauseOnFocus: false,  // Evita pausas por foco
        pauseOnHover: false,  // Evita pausas por hover         
    
})




//SLIDE MOSAIC-SOCIAL
$(".social .container .mosaic-social").slick({
        centerMode: false,
        slidesToShow:9 ,
        arrows: false,
        infinite: true,
        swipe: true,         // Desativa toque (mobile)
        draggable:true,     // Desativa mouse (desktop)
        touchMove: true,     // Desativa gesto de arrastar
        pauseOnFocus: true,  // Evita pausas por foco
        pauseOnHover: true,  // Evita pausas por hover   
        responsive:[
            {
                breakpoint:1046,
                settings:{
                    slidesToShow: 6,
                    centerMode:false,
                    swipe: true,         // ativa toque (mobile)
                    draggable: true,     // ativa mouse (desktop)
                    touchMove: true,     // ativa gesto de arrastar
                    infinite: true
                }
            },
            {
                breakpoint:819,
                settings:{
                    slidesToShow: 5,
                    centerMode:false,
                    swipe: true,         // ativa toque (mobile)
                    draggable: true,     // ativa mouse (desktop)
                    touchMove: true,     // ativa gesto de arrastar
                    infinite: true
                }
            },
            {
                breakpoint:780,
                settings:{
                    slidesToShow: 4,
                    centerMode:false,
                    swipe: true,         // ativa toque (mobile)
                    draggable: true,     // ativa mouse (desktop)
                    touchMove: true,     // ativa gesto de arrastar
                    infinite: true
                }
            },
           {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    centerMode:false,
                    swipe: true,         // ativa toque (mobile)
                    draggable: true,     // ativa mouse (desktop)
                    touchMove: true,     // ativa gesto de arrastar
                    infinite: true
                }
           }
        ]

    })

})