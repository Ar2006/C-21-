function isTouching(item1, item2) {
    if (item1.x - item2.x < item1.width/2 + item2.width/2 && 
      item2.x - item1.x < item1.width/2 + item2.width/2 &&
      item1.y - item2.y < item1.height/2 + item2.height/2 &&
      item2.y - item1.y < item1.height/2 + item2.height/2) {
        return true;
      }
      else {
        return false;
      }
  }
  
  function bounceOff(item1, item2) {
    if(item1.x - item2.x < item1.width/2 + item2.width/2 && 
      item2.x - item1.x < item1.width/2 + item2.width/2) {
        item1.velocityX = item1.velocityX*-1;
        item2.velocityX = item2.velocityX*-1;
      }
    if( item1.y - item2.y < item1.height/2 + item2.height/2 &&
      item2.y - item1.y < item1.height/2 + item2.height/2) {
        item1.velocityY = item1.velocityY*-1;
        item2.velocityY = item2.velocityY*-1;
      }
  } 