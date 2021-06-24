function getFormattedDate(dateObject){
    let options = {
      weekday: 'long'//задаем как будет выбиваться день недели полностью или короткий вариант
  }
     let data = {
       date: dateObject.getDate(),
       month: dateObject.getMonth() + 1,
       year: dateObject.getFullYear(),
       hour: dateObject.getHours(),
       min: dateObject.getMinutes(),
       weekday: dateObject.toLocaleString("en", options),
       
     }
     function hour(a) {
      return String(a).length === 1 ? '0' + a : a    //делаем чтобы выводилось 00:00
  }
     let d = data  
     
     return  `${hour(data.date)}.${hour(data.month)}.${data.year}  ${hour(data.hour)}:${hour(data.min)} ${data.weekday} `
  }
  
  const date0 = new Date(1993, 11, 1);
  const date1 = new Date(1998, 0, -33);
  const date2 = new Date('42 03:24:00');
  
  
  console.log(getFormattedDate(date0));  // 01.12.1993 00:00 Wednesday
  console.log(getFormattedDate(date1));  // 28.11.1997 00:00 Friday
  console.log(getFormattedDate(date2));  // 01.01.2042 03:24 Wednesday