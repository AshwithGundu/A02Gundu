$(document).ready(function(){

    $("#clickhere").click(function(){
        var n1=$("#num1").val();
        var n2=$("#num2").val();
        var t;
        t=n1+n2;
        if(t != 53)
            {
                document.getElementById("num").innerHTML ="you missed it. Try again.";
            }
       else
        {
            document.getElementById("num").innerHTML = "Congrats, you ";
        }
    })

    
})
