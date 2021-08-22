var obj;
var screen_list;

window.onload = function(){
    obj = document.getElementsByTagName('div');

    screen_list = [];
    
    for(var i = 0; i < obj.length; i++){
        try{    
            screen_id = obj[i].getAttribute('data-screen');
            screen_btn_id = obj[i].getAttribute('data-screen-btn');

            if(screen_btn_id){
                obj[i].addEventListener("click", function(){
                    id = this.getAttribute('data-screen-btn');
                    
                    change_screen(id);
                });
            }

            if(screen_id){
                screen_list[screen_id] = obj[i];

                if(screen_id != "bottom"){
                    obj[i].style.overflow = "auto";
                    obj[i].style.display = 'none';
                }
            }
        }catch(e){

        }
    }

    bottom_obj = screen_list["bottom"];
    bottom_obj.style.bottom = 0;
    bottom_obj.style.position = "fixed";
    
    home_obj = screen_list["home"];
    home_obj.style.display = "inline";
}

function change_screen(id){
    Object.keys(screen_list).forEach(key => {
        if(key != "bottom"){
            screen_list[key].style.display = "none";
        }
    });
    $('[data-screen="' + id + '"]').fadeIn(500);
}