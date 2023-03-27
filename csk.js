const players = document.querySelector(".car1");

function creatCard([img,Name,id,price,description]){
    let code=`
    <div class="card1">
        <a href="#"><img src="${img}" alt="Avatar" style="width: 365px;"></a>
        <div class="container">
          <h4><center><b>Name : ${Name}</b></center></h4> 
          <h4><center><b>id : ${id}</b></center></h4> 
          <h4><center><b>price : ${price}</b></center></h4> 
          <h4><center><b>description : ${description}</b></center></h4> 
        </div>
    `
    players.innerHTML+= code;
}

let player1=["raina.png",
"raina",
"11",
"1.8cr",
"batsman"]

let player2=["moeen.png",
"moeen",
"7",
"1.8cr",
"baller"]


creatCard(palyer1)
creatCard(player2)