function includeContactBtn(){
    $.ajax({
        url: "./includeContactBtn.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
