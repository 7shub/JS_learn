"use strict";
let message;
let login = prompt('enter your post',);
(login == 'Employee')? message = 'Hello' : 
(login == 'Director') ? message = 'Greetings': 
(login == '')?  message = 'No login':  message = '';

alert(message);