class Home {
  constructor(lang) {
    this.lang = lang;
  }

  header(){
    function succeed(xhttp){
        var menu_area = document.getElementById("header");
        menu_area.innerHTML = xhttp.responseText;

        toast('<span>Menu loaded.</span>', 1500);
        console.log("Menu loaded!");
    }
    function failed(){
        toast('<span>Error loading menu content!</span>', 1500);
        console.log("Error loading menu content!");
    }
    R3vol.load_xml("", this.lang, 'menu.xml', [], succeed, failed);

  }

  language(lang){
    this.lang = lang;
  }

  goto(path){
    window.location.replace(path+"?lang="+this.lang)
  }
}


