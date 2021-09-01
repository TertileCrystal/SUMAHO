class sumaho{
    constructor(settings){
        this.menu = document.getElementById(settings.menu);

        this.screen_list = {};

        settings.screen.forEach(screen =>{
            this.screen_list[screen[0]] = [document.getElementById(screen[0]), screen[1] || "none"];
            this.screen_list[screen[0]][0].style.display = 'none';
        });   

        this.screen_list["home"] = [document.getElementById(settings.home[0]), settings.home[1] || "none"];
    }

    transition(screen_name){
        for(let key in this.screen_list){
            this.screen_list[key][0].style.display = "none";
        }

        this.screen_list[screen_name][0].style.display = "block";
        this.screen_list[screen_name][0].classList.add(this.screen_list[screen_name][1]);        
    }
}