function bounceoff(daksh,java){
    if (daksh.x - java.x < java.width/2 + daksh.width/2
      && java.x - daksh.x < java.width/2 + daksh.width/2) {
    daksh.velocityX = daksh.velocityX * (-1);
    java.velocityX = java.velocityX * (-1);
  }
  if (daksh.y - java.y < java.height/2 + daksh.height/2
    && java.y - daksh.y < java.height/2 + daksh.height/2){
    daksh.velocityY = daksh.velocityY * (-1);
    java.velocityY = java.velocityY * (-1);
  }
  
  }