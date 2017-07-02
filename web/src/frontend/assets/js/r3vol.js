class R3vol {

  static load_xml(position, language, xml_location, params, succeed, failed){
    $.ajax({
        url : position+"assets/content/"+language+"/"+xml_location,
        type: 'GET',
        success: function(result,status,xhr) {
            succeed(xhr, params);
        },
        error: function(xhr,status,error) {
            failed();
        }
    });
  }
}