import React from 'react';
import ReactDOM from 'react-dom';

class Demo {
  methodOne() {
    var a = 55;
    var b = 10;
    var c = a + b;
    document.getElementById('root').innerHTML = c;
  }
}

var myDemo = new Demo();
myDemo.methodOne();
