 let cookieComponent = {
     setCookie(data) {//增、删（设置日期为之前）、改
         let option = {
             'name': '',
             'path': '/',
             'domain': '',
             'time': '',
             'value': '',
             'type': 'd',
         };
         let date = new Date();

         option = Object.assign(option, data);
         switch (option.type) {
             case 's':
                 date.setMilliseconds(date.getMilliseconds() + Number(option.time));
                 break;
             case 'h':
                 date.setHours(date.getHours() + Number(option.time));
                 break;
             case 'd':
                 date.setDate(date.getDate() + Number(option.time));
                 break;
         }
         document.cookie = `${option.name}=${option.value};path=${option.path};domain=${option.domain};expires=${date}`;
     },
     getCookie(name) {
         var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
         if (arr = document.cookie.match(reg))
             return unescape(arr[2]);
         else
             return null;
     }
 }

 let test = {
     'name': 'hello-path-1',
     'value': `23333`,
     'path': 'task/',
     'type': 'd',
     'time': '1'
 }
 document.write(`all cookie: ${document.cookie}\n`);
 document.write(`hello-path-1:${cookieComponent.getCookie("hello-path-1")}`)
 cookieComponent.setCookie(test);
