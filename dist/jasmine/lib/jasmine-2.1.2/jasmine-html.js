jasmineRequire.html=function(e){e.ResultsNode=jasmineRequire.ResultsNode(),e.HtmlReporter=jasmineRequire.HtmlReporter(e),e.QueryString=jasmineRequire.QueryString(),e.HtmlSpecFilter=jasmineRequire.HtmlSpecFilter()},jasmineRequire.HtmlReporter=function(e){function s(s){function i(e){return f().querySelector(".jasmine_html-reporter "+e)}function a(){var e=i("");e&&f().removeChild(e)}function n(e,s,t){for(var i=m(e),a=2;a<arguments.length;a++){var n=arguments[a];"string"==typeof n?i.appendChild(h(n)):n&&i.appendChild(n)}for(var r in s)"className"==r?i[r]=s[r]:i.setAttribute(r,s[r]);return i}function r(e,s){return s+" "+(1==s?e:e+"s")}function l(e){return"?spec="+encodeURIComponent(e.fullName)}function c(e){o.setAttribute("class","jasmine_html-reporter "+e)}function u(e){return e.failedExpectations.length+e.passedExpectations.length===0&&"passed"===e.status}var o,p,d=s.env||{},f=s.getContainer,m=s.createElement,h=s.createTextNode,N=s.onRaiseExceptionsClick||function(){},v=s.timer||t,g=0,C=0,R=0,S=[];this.initialize=function(){a(),o=n("div",{className:"jasmine_html-reporter"},n("div",{className:"banner"},n("a",{className:"title",href:"http://jasmine.github.io/",target:"_blank"}),n("span",{className:"version"},e.version)),n("ul",{className:"symbol-summary"}),n("div",{className:"alert"}),n("div",{className:"results"},n("div",{className:"failures"}))),f().appendChild(o),p=i(".symbol-summary")};var b;this.jasmineStarted=function(e){b=e.totalSpecsDefined||0,v.start()};var x=n("div",{className:"summary"}),j=new e.ResultsNode({},"",null),y=j;this.suiteStarted=function(e){y.addChild(e,"suite"),y=y.last()},this.suiteDone=function(e){"failed"==e.status&&S.push(e),y!=j&&(y=y.parent)},this.specStarted=function(e){y.addChild(e,"spec")};var E=[];return this.specDone=function(e){if(u(e)&&"undefined"!=typeof console&&void 0!==console.error&&console.error("Spec '"+e.fullName+"' has no expectations."),"disabled"!=e.status&&g++,p.appendChild(n("li",{className:u(e)?"empty":e.status,id:"spec_"+e.id,title:e.fullName})),"failed"==e.status){C++;for(var s=n("div",{className:"spec-detail failed"},n("div",{className:"description"},n("a",{title:e.fullName,href:l(e)},e.fullName)),n("div",{className:"messages"})),t=s.childNodes[1],i=0;i<e.failedExpectations.length;i++){var a=e.failedExpectations[i];t.appendChild(n("div",{className:"result-message"},a.message)),t.appendChild(n("div",{className:"stack-trace"},a.stack))}E.push(s)}"pending"==e.status&&R++},this.jasmineDone=function(){function e(s,t){for(var i,a=0;a<s.children.length;a++){var r=s.children[a];if("suite"==r.type){var c=n("ul",{className:"suite",id:"suite-"+r.result.id},n("li",{className:"suite-detail"},n("a",{href:l(r.result)},r.result.description)));e(r,c),t.appendChild(c)}if("spec"==r.type){"specs"!=t.getAttribute("class")&&(i=n("ul",{className:"specs"}),t.appendChild(i));var o=r.result.description;u(r.result)&&(o="SPEC HAS NO EXPECTATIONS "+o),i.appendChild(n("li",{className:r.result.status,id:"spec-"+r.result.id},n("a",{href:l(r.result)},o)))}}}i(".banner").appendChild(n("span",{className:"duration"},"finished in "+v.elapsed()/1e3+"s"));var s=i(".alert");s.appendChild(n("span",{className:"exceptions"},n("label",{className:"label",for:"raise-exceptions"},"raise exceptions"),n("input",{className:"raise",id:"raise-exceptions",type:"checkbox"})));var t=i("#raise-exceptions");if(t.checked=!d.catchingExceptions(),t.onclick=N,g<b){var a="Ran "+g+" of "+b+" specs - run all";s.appendChild(n("span",{className:"bar skipped"},n("a",{href:"?",title:"Run all specs"},a)))}var o="",p="bar ";for(b>0?(o+=r("spec",g)+", "+r("failure",C),R&&(o+=", "+r("pending spec",R)),p+=C>0?"failed":"passed"):(p+="skipped",o+="No specs found"),s.appendChild(n("span",{className:p},o)),k=0;k<S.length;k++)for(var f=S[k],m=0;m<f.failedExpectations.length;m++){var h="AfterAll "+f.failedExpectations[m].message;s.appendChild(n("span",{className:"bar errored"},h))}if(i(".results").appendChild(x),e(j,x),E.length){s.appendChild(n("span",{className:"menu bar spec-list"},n("span",{},"Spec List | "),n("a",{className:"failures-menu",href:"#"},"Failures"))),s.appendChild(n("span",{className:"menu bar failure-list"},n("a",{className:"spec-list-menu",href:"#"},"Spec List"),n("span",{}," | Failures "))),i(".failures-menu").onclick=function(){c("failure-list")},i(".spec-list-menu").onclick=function(){c("spec-list")},c("failure-list");for(var y=i(".failures"),k=0;k<E.length;k++)y.appendChild(E[k])}},this}var t={start:function(){},elapsed:function(){return 0}};return s},jasmineRequire.HtmlSpecFilter=function(){function e(e){var s=e&&e.filterString()&&e.filterString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),t=new RegExp(s);this.matches=function(e){return t.test(e)}}return e},jasmineRequire.ResultsNode=function(){function e(s,t,i){this.result=s,this.type=t,this.parent=i,this.children=[],this.addChild=function(s,t){this.children.push(new e(s,t,this))},this.last=function(){return this.children[this.children.length-1]}}return e},jasmineRequire.QueryString=function(){function e(e){function s(e){var s=[];for(var t in e)s.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return"?"+s.join("&")}function t(){var s=e.getWindowLocation().search.substring(1),t=[],i={};if(s.length>0){t=s.split("&");for(var a=0;a<t.length;a++){var n=t[a].split("="),r=decodeURIComponent(n[1]);"true"!==r&&"false"!==r||(r=JSON.parse(r)),i[decodeURIComponent(n[0])]=r}}return i}return this.setParam=function(i,a){var n=t();n[i]=a,e.getWindowLocation().search=s(n)},this.getParam=function(e){return t()[e]},this}return e};