Ember.TEMPLATES.application=Ember.Handlebars.template(function(e,t,n,r,i){function o(e,t){t.buffer.push("Home")}function s(e,t){var r,i,o="";return t.buffer.push("\n				"),i={},r=n["if"].call(e,"Auth.currentUser.admin",{hash:{},inverse:E.noop,fn:E.program(4,a,t),contexts:[e],types:["ID"],hashTypes:i,data:t}),(r||0===r)&&t.buffer.push(r),t.buffer.push("\n			"),o}function a(e,t){var r,i,o,s,a="";return t.buffer.push("\n					<li "),o={"class":"STRING"},t.buffer.push(y(n.bindAttr.call(e,{hash:{"class":"activeUsers:active"},contexts:[],types:[],hashTypes:o,data:t}))),t.buffer.push(">"),o={},s={hash:{},inverse:E.noop,fn:E.program(5,u,t),contexts:[e],types:["STRING"],hashTypes:o,data:t},r=n.linkTo,i=r?r.call(e,"users.index",s):w.call(e,"linkTo","users.index",s),(i||0===i)&&t.buffer.push(i),t.buffer.push('</li>\n					<li class="divider-vertical"></li>\n				'),a}function u(e,t){t.buffer.push("Users")}function c(e,t){var r,i,o,s,a="";return t.buffer.push('\n				<li class="disabled">'),o={},s={hash:{},inverse:E.noop,fn:E.program(8,l,t),contexts:[e,e],types:["STRING","ID"],hashTypes:o,data:t},r=n.linkTo,i=r?r.call(e,"users.show","Auth.currentUser",s):w.call(e,"linkTo","users.show","Auth.currentUser",s),(i||0===i)&&t.buffer.push(i),t.buffer.push('</li>\n				<li class="divider-vertical"></li>\n		  	<li '),o={"class":"STRING"},t.buffer.push(y(n.bindAttr.call(e,{hash:{"class":"activeSignOut:active"},contexts:[],types:[],hashTypes:o,data:t}))),t.buffer.push('><a  href="#" '),o={},t.buffer.push(y(n.action.call(e,"signOut",{hash:{},contexts:[e],types:["STRING"],hashTypes:o,data:t}))),t.buffer.push(">Sign Out</a></li>\n			"),a}function l(e,t){var r;r={},t.buffer.push(y(n._triageMustache.call(e,"Auth.currentUser.name",{hash:{},contexts:[e],types:["ID"],hashTypes:r,data:t})))}function h(e,t){var r,i,o,s,a="";return t.buffer.push('\n				<li class="divider-vertical"></li>\n		  	<li '),o={"class":"STRING"},t.buffer.push(y(n.bindAttr.call(e,{hash:{"class":"activeSignIn:active"},contexts:[],types:[],hashTypes:o,data:t}))),t.buffer.push(">"),o={},s={hash:{},inverse:E.noop,fn:E.program(11,d,t),contexts:[e],types:["STRING"],hashTypes:o,data:t},r=n.linkTo,i=r?r.call(e,"sign_in",s):w.call(e,"linkTo","sign_in",s),(i||0===i)&&t.buffer.push(i),t.buffer.push('</li>\n				<li class="divider-vertical"></li>\n		  	<li '),o={"class":"STRING"},t.buffer.push(y(n.bindAttr.call(e,{hash:{"class":"activeSignUp:active"},contexts:[],types:[],hashTypes:o,data:t}))),t.buffer.push(">"),o={},s={hash:{},inverse:E.noop,fn:E.program(13,p,t),contexts:[e],types:["STRING"],hashTypes:o,data:t},r=n.linkTo,i=r?r.call(e,"users.new",s):w.call(e,"linkTo","users.new",s),(i||0===i)&&t.buffer.push(i),t.buffer.push("</li>\n			"),a}function d(e,t){t.buffer.push("Sign In")}function p(e,t){t.buffer.push("Sign Up")}this.compilerInfo=[2,">= 1.0.0-rc.3"],n=n||Ember.Handlebars.helpers,i=i||{};var f,m,g,b,v="",y=this.escapeExpression,E=this,w=n.helperMissing;return i.buffer.push('<div class="navbar navbar-static-top">\n	<div class="navbar-inner">\n		<ul class=\'nav pull-left\'>\n			<li '),g={"class":"STRING"},i.buffer.push(y(n.bindAttr.call(t,{hash:{"class":"activeHome:active"},contexts:[],types:[],hashTypes:g,data:i}))),i.buffer.push(">"),g={},b={hash:{},inverse:E.noop,fn:E.program(1,o,i),contexts:[t],types:["STRING"],hashTypes:g,data:i},f=n.linkTo,m=f?f.call(t,"home",b):w.call(t,"linkTo","home",b),(m||0===m)&&i.buffer.push(m),i.buffer.push('</li>\n			<li class="divider-vertical"></li>\n			'),g={},m=n["if"].call(t,"Auth.authToken",{hash:{},inverse:E.noop,fn:E.program(3,s,i),contexts:[t],types:["ID"],hashTypes:g,data:i}),(m||0===m)&&i.buffer.push(m),i.buffer.push("\n		</ul>\n		<ul class='nav pull-right'>\n			"),g={},m=n["if"].call(t,"Auth.authToken",{hash:{},inverse:E.program(10,h,i),fn:E.program(7,c,i),contexts:[t],types:["ID"],hashTypes:g,data:i}),(m||0===m)&&i.buffer.push(m),i.buffer.push("\n		</ul>\n	</div>\n</div>\n\n"),g={},i.buffer.push(y(n._triageMustache.call(t,"outlet",{hash:{},contexts:[t],types:["ID"],hashTypes:g,data:i}))),i.buffer.push("\n"),v});