export function getCount(count){
  
   if(count<10000) return count;
  
   if(Math.floor(count/10000<10000)){
     return  Math.floor(count/1000)/10  +  "万" 
   }else{
       return Math.floor(count/1000000)/10 + "亿"
   }
   



}

export function getSizeImg(url,size){
 

    return `${url}?param=${size}×${size}`

}