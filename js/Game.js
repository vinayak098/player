class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play() {
    form.hide(); 
    var display_y = 130; 
    Player.getPlayerInfo();

    if (allPlayers !== undefined){
      
      for(var plr in allPlayers){
        display_y = display_y+20;
        text("Name : "+allPlayers[plr].name, 120, display_y);
      

   
    }
   
  }
}
}
