$(".mail").hide()
$(".pass").hide()


var x = document.getElementById("#mail")
$(".log2").click(function(){
    window.location.assign("file:///C:/Users/INFOKOM/OneDrive/Desktop/NewFilms/Log%20In/index1.html?")

})
$("#sing").click(function(){
    $("#mail").hide()
    $("#Log").hide()

    $("#sing").hide()
    $(".log").show()
    $(".log2").show()
    $(".mail").show()
    $(".pass").show()
})

$(".log").hide()
function log(){
    $(".mail").show()
    $(".pass").show()
    $("#sing").hide()
    $("#mail").hide()
    $(".log").show()
    $(".log2").show(
    $("#Log").hide()
    )
}

