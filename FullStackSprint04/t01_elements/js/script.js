let li = document.getElementsByTagName('li')
  for(let i = 0; i < li.length; i++){
    classAttr = li[i].getAttribute('class');
    if (classAttr === 0 || classAttr !== 'good'
      && classAttr !== 'evil'
      && classAttr !== 'unknown') {
      li[i].setAttribute('class', 'unknown');
    }
  
    dataAttr = li[i].getAttribute('data-element');
    if (!dataAttr) {
    li[i].setAttribute('data-element', 'none');
    }
    dataAttr = li[i].getAttribute('data-element').split(' ')//снова с помощью цикла пробигаемся по всем дата-элементам и с помощью split() преобразовуем в массив ,чтобы все дата элементы были отдельные 
    li[i].append(document.createElement('br'))//создаем элемент <br> для перехода строки, чтобы шарики были под надписью 
for(let k = 0; k < dataAttr.length;k++){//делаем цикл в цикле, чтобы пересчитывались дата-элементы в новвосозданном массиве и подставлялось столько шариков сколько сущетсвует дата-элементов
    let createVar = document.createElement('div');//новый див для шариков
    li[i].append(createVar)//создаем в дата-элементах div
    createVar.className = `elem ${dataAttr[k]}`//прикрепляем к дивам стиль шариков 
   

    if(dataAttr[k] == 'none'){//последнее условие для дата-элементов 'none'
      let line = document.createElement('div')//тогда создаем новый див в котором будут стили line
      line.className = 'line'//вызиваем переменной line  стиль css
      createVar.append(line)//вставляем в старый див который имеет значени 'none' новый див со стилем CSS
    }
}
}

