// code idea from : https://stackoverflow.com/questions/2086744/javascript-function-to-convert-date-yyyy-mm-dd-to-dd-mm-yy


export const reformatDate = (dateStr)=> {
 let dArr = dateStr.split("-"); 
  return dArr[1]+ "/" +dArr[2]+ "/" +dArr[0].substring(2); 
}

