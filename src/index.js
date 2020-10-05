module.exports = function check(str, bracketsConfig) {
  let arrOfStr=str.split('');
  let bracketsScript=[];
  for(let symbol of arrOfStr){
    let pushed=false;
    if(symbol==bracketsScript[bracketsScript.length-1]){
      bracketsScript.pop();
      continue
    }else{
      for(let i=0 ;i<bracketsConfig.length;i++){
        if(symbol==bracketsConfig[i][0]){
          bracketsScript.push(bracketsConfig[i][1]);
          pushed=true;
        }
      }
    }
    if(pushed) continue;
    return false
    
  }
  if (bracketsScript==0) return true
  return false
}
