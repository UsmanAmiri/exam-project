const search = () => {
    const searchbox= document.getElementById("seach-box ").value.toUpperCase();
    const storeitems = document.getElementById("team1")
    const team=document.querySelectorAll("#team")
    const pname = storeitems.getElementsByTagName("h4")

    for(var i = 0; i<pname.length;i++){
        let match =team[i].getElementsByTagName("h4")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox)> -1){
                team[i].getElementById("h4").style.display= " ";
            } else{
                team[i].getElementById("h4").style.display= "none ";
            }
        }
    }
}

 
