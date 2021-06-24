(() => {
    const checkBrackets = str => {
      const regex = /[(|)]+/g;
  
      if (str.match(regex)) {
        const toArr = str.split('');
        let stack = [];
  
        for (let i = 0; i < toArr.length; i++) {
          if (toArr[i] === '(') {
            stack.push(toArr[i]);
          } else if (toArr[i] === ')') {
            if (stack.length === 0) {
              stack.pop();
            } else {
              return toArr[i].length;
            }
          }
        }
      
        return stack.length === 0;
  
      } else {
        return -1;
      }
    }
  
    console.log(checkBrackets('1)()(())2(()'));
  })();