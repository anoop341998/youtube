(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/like.871b4e9c.svg"},44:function(e,t,a){e.exports=a.p+"static/media/liked.a8162b9b.svg"},45:function(e,t,a){e.exports=a.p+"static/media/disliked.079e8801.svg"},46:function(e,t,a){e.exports=a.p+"static/media/dislike.9281537d.svg"},49:function(e,t){},51:function(e,t,a){e.exports=a(85)},56:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),s=a.n(l),c=(a(56),a(5)),i=a(1),o=a.n(i);function m(e){return{type:"login_user",payload:o.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}function u(e){return{type:"register_user",payload:o.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}function d(){return{type:"auth_user",payload:o.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}var p=a(8),v=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function l(l){var s=Object(p.d)((function(e){return e.user})),c=Object(p.c)();return Object(n.useEffect)((function(){c(d()).then((function(e){e.payload.isAuth?(a&&!e.payload.isAdmin||!1===t)&&l.history.push("/"):t&&l.history.push("/login")}))}),[]),r.a.createElement(e,Object.assign({},l,{user:s}))}return l},E=a(2),h=a(20),f=a.n(h);var b=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){o.a.get("/api/video/getvideos").then((function(e){e.data.success?l(e.data.videos):alert("Unable to get videos to display on home")}))}),[]);var s=a.map((function(e,t){var a=Math.floor(e.duration/60),n=Math.floor(e.duration-60*a);return r.a.createElement("div",{className:"row",key:t},r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"card"},r.a.createElement("a",{href:"/video/"+e._id},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{alt:"thumbnail",src:e.thumbnail}),r.a.createElement("span",{className:"card-title"},e.title)),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,"Duration: ",a,":",n),r.a.createElement("p",null,e.views," views \xa0 \xa0 ",f()(e.createdAt).format("MMM Do YY")))),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:"#"},e.writer.name," ",e.writer.lastname)))))}));return r.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},r.a.createElement("h2",null,"Recommended"),r.a.createElement("hr",null),s)},g=a(15),w=a(21),N=a(22),y=a(24),O=a(23),S=a(14),j=function(e){Object(y.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",errors:[]},e.handleChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.submitForm=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.isFormValid(e.state)?(e.setState({errors:[]}),e.props.dispatch(m(a)).then((function(t){console.log(t),t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),e.props.history.push("/")):e.setState({errors:e.state.errors.concat("Failed to Login Check Username and Password")})})).catch((function(e){return console.log(e)}))):(e.setState({errors:[]}),e.setState({errors:["Form is not Valid"]}))},e.isFormValid=function(e){var t=e.email,a=e.password;return t&&a},e.displayErrors=function(e){return e.map((function(e,t){return r.a.createElement("p",{key:t},e)}))},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Login"),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)},id:"email",type:"email",className:"validate"}),r.a.createElement("label",{className:"active",htmlFor:"email"},"Email"),r.a.createElement("span",{className:"helper-text","data-error":"Type a right email","data-success":"Right email"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},id:"password",type:"password",className:"validate"}),r.a.createElement("label",{className:"active",htmlFor:"password"},"Password"),r.a.createElement("span",{className:"helper-text","data-error":"Success","data-success":"Wrong"}))),this.state.errors.length>0&&r.a.createElement("div",null,this.displayErrors(this.state.errors)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s2 ",style:{marginRight:20}},r.a.createElement("button",{className:"btn waves-effect red lighten-2",type:"submit",name:"action",onClick:this.submitForm},"Login")),r.a.createElement("div",{className:"col s2"},r.a.createElement(S.b,{to:"/register"},r.a.createElement("button",{className:"btn waves-effect red lighten-2",type:"submit",name:"action"},"Sign Up")))))))}}]),a}(n.Component);var C=Object(p.b)((function(e){return{state:e.user}}))(j),k=function(e){Object(y.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={lastname:"",name:"",email:"",password:"",passwordConfirmation:"",errors:[]},e.handleChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.displayErrors=function(e){return e.map((function(e,t){return r.a.createElement("p",{key:t},e)}))},e.isFormValid=function(){var t;if(e.isFormEmpty(e.state))t={message:"Fill out all fields"},e.setState({errors:e.errors.concat(t)});else{if(e.isPasswordValid(e.state))return!0;t={message:"Password is invalid"},e.setState({errors:e.state.errors.concat(t)})}},e.isPasswordValid=function(e){var t=e.password,a=e.passwordConfirmation;return!(t.length<6||a.length<6)&&t===a},e.isFormEmpty=function(e){var t=e.lastname,a=e.name,n=e.email,r=e.password,l=e.passwordConfirmation;return!a.length||!t.length||!n.length||!r.length||!l.length},e.submitForm=function(t){t.preventDefault();var a={email:e.state.email,lastname:e.state.lastname,name:e.state.name,password:e.state.password,passwordConfirmation:e.state.passwordConfirmation};console.log(a),e.isFormValid()&&(e.setState({errors:[]}),e.props.dispatch(u(a)).then((function(t){t.payload.success?e.props.history.push("/login"):e.setState({errors:e.state.errors.concat("Failed to Send Data")})})))},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"lastname",value:this.state.lastname,onChange:function(t){return e.handleChange(t)},id:"lastname",type:"text",className:"validate"}),r.a.createElement("label",{className:"active",htmlFor:"lastname"},"Last name"),r.a.createElement("span",{className:"helper-text","data-error":"Type a right last name","data-success":"Right last name"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)},id:"name",type:"text",className:"validate"}),r.a.createElement("label",{className:"active",htmlFor:"name"},"Name"),r.a.createElement("span",{className:"helper-text","data-error":"Success","data-success":"Wrong"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)},id:"email",type:"email",className:"validate"}),r.a.createElement("label",{className:"active",htmlFor:"email"},"Email"),r.a.createElement("span",{className:"helper-text","data-error":"Type a right email","data-success":"Right last email"}))),r.a.createElement("h2",null,"Password Verification"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},id:"password",type:"password",className:"validate"}),r.a.createElement("label",{className:"active",htmlFor:"password"},"Password"),r.a.createElement("span",{className:"helper-text","data-error":"Success","data-success":"Wrong"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"passwordConfirmation",value:this.state.passwordConfirmation,onChange:function(t){return e.handleChange(t)},id:"passwordConfirmation",type:"password",className:"validate"}),r.a.createElement("label",{className:"active",htmlFor:"passwordConfirmation"},"Retype Password"),r.a.createElement("span",{className:"helper-text","data-error":"Success","data-success":"Wrong"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("button",{className:"btn waves-effect red lighten-2",type:"submit",name:"action",onClick:this.submitForm},"Create an account")))),this.state.errors.length>0&&r.a.createElement("div",null,this.displayErrors(this.state.errors))))}}]),a}(n.Component);var I=Object(p.b)((function(e){return{state:e.user}}))(k);var F=Object(c.f)((function(e){var t=Object(p.d)((function(e){return e.user}));return t.userData&&!t.userData.isAuth?r.a.createElement("span",{style:{margin:"0rem 5rem 0rem 1rem"}},r.a.createElement("a",{href:"/login"},"Signin")):r.a.createElement("span",{key:"logout",style:{margin:"0rem 5rem 0rem 1rem"}},r.a.createElement("a",{onClick:function(){o.a.get("".concat("/api/users","/logout")).then((function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")}))},href:"#"},"Logout"))}));var x=function(){return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("span",{className:"grid-item",style:{margin:"0rem 5rem 0rem 1rem"}},r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("span",{className:"grid-item",style:{marginRight:"73%"}},r.a.createElement("a",{href:"/subscriptions"},"Subscriptions")),r.a.createElement("span",{className:"grid-item",style:{margin:"0rem 1rem 0rem 1rem"}},r.a.createElement("a",{href:"/video/upload"},"Upload")),r.a.createElement(F,null)))},_=a(50),T=a(42),D=a.n(T);function P(e){var t=Object(p.d)((function(e){return e.user})),a=Object(n.useState)(""),l=Object(E.a)(a,2),s=l[0],c=l[1],i=Object(n.useState)(""),m=Object(E.a)(i,2),u=m[0],d=m[1],v=Object(n.useState)(0),h=Object(E.a)(v,2),f=h[0],b=h[1],g=Object(n.useState)("Movies"),w=Object(E.a)(g,2),N=w[0],y=w[1],O=Object(n.useState)(""),S=Object(E.a)(O,2),j=S[0],C=S[1],k=Object(n.useState)(""),I=Object(E.a)(k,2),F=I[0],x=I[1],T=Object(n.useState)(""),P=Object(E.a)(T,2),L=P[0],R=P[1];Object(n.useLayoutEffect)((function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("select");D.a.FormSelect.init(e)}))}),[]);var M=function(a){if(a.preventDefault(),t.userData&&!t.userData.isAuth)return alert("Please login");var n={writer:t.userData._id,title:s,description:u,privacy:f,filePath:j,categories:N,duration:F,thumbnail:L};n.title&&n.description&&n.privacy&&n.filePath&&n.categories||alert("Please fill all fields"),console.log(n.writer,"here"),o.a.post("/api/video/uploadvideo",n).then((function(t){t.data.success?(alert("Video uploaded successfully"),e.history.push("/")):alert("Unable to save video in Server")}))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4 push-s3"},r.a.createElement("h3",null,"Upload Video"))),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12",onSubmit:M},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s6 "},r.a.createElement("input",{id:"title",type:"text",className:"validate",name:"title",value:s,onChange:function(e){c(e.currentTarget.value)}}),r.a.createElement("label",{htmlFor:"title",className:"active"},"Title"))),r.a.createElement("div",{className:"row"},r.a.createElement(_.a,{onDrop:function(e){var t=new FormData;t.append("file",e[0]),o.a.post("/api/video/uploadfiles",t,{header:{"content-type":"multipart/form-data"}}).then((function(e){if(e.data.success){var t={filePath:e.data.filePath,fileName:e.data.fileName};C(e.data.filePath),o.a.post("/api/video/thumbnail",t).then((function(e){e.data.success?(R(e.data.thumbsFilePath),x(e.data.fileDuration)):alert("Failed to make thumbnail")}))}else alert("Failed to save video")}))}},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",t(),r.a.createElement("input",a()),r.a.createElement("img",{src:"https://miro.medium.com/max/1316/1*URHYGBQMuu9UWc4zEVFGPw.gif",height:"150px",width:"300px"})))})),""!==L&&r.a.createElement("div",null,r.a.createElement("img",{src:"/".concat(L),alt:"thumb"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"description",type:"text",className:"validate",name:"description",value:u,onChange:function(e){d(e.currentTarget.value)}}),r.a.createElement("label",{htmlFor:"description",className:"active"},"Description"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s2"},r.a.createElement("select",{onChange:function(e){b(e.currentTarget.value)}},[{value:0,label:"Private"},{value:1,label:"Public"}].map((function(e,t){return r.a.createElement("option",{key:t,value:e.label},e.label)}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s2"},r.a.createElement("select",{onChange:function(e){y(e.currentTarget.value)}},[{value:0,label:"Movies"},{value:1,label:"Music"},{value:2,label:"Sports"},{value:3,label:"Animals"},{value:4,label:"Auto-mobiles"}].map((function(e,t){return r.a.createElement("option",{key:t,value:e.label},e.label)}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s2"},r.a.createElement("button",{onClick:M},"Submit"))))))}var L=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){o.a.get("/api/video/getvideos").then((function(e){e.data.success?l(e.data.videos):alert("Unable to get videos to display on SidePanel")}))}),[]);var s=a.map((function(e,t){var a,n=Math.floor(e.duration/60),l=Math.floor(e.duration-60*n);return r.a.createElement("div",{style:{display:"flex",marginTop:"1rem",padding:"0 2rem"}},r.a.createElement("div",{style:{width:"40%",marginRight:"1rem"}},r.a.createElement("a",{href:"/video/"+e._id},r.a.createElement("img",{style:{width:"100%",height:"100%"},src:"".concat(e.thumbnail),alt:"thumbnail"}))),console.log("/".concat(e.thumbnail)),r.a.createElement("div",{style:{width:"50%"}},r.a.createElement("a",{href:"/video/"+e._id},r.a.createElement("div",null,r.a.createElement("a",{href:"#"},null===e||void 0===e||null===(a=e.writer)||void 0===a?void 0:a.name),e.title," ",r.a.createElement("br",null),e.views," views ",r.a.createElement("br",null),n,":",l," ",r.a.createElement("br",null)))))}));return r.a.createElement(r.a.Fragment,null,s)};var R=function(e){var t=Object(n.useState)(0),a=Object(E.a)(t,2),l=a[0],s=a[1],c=Object(n.useState)(!1),i=Object(E.a)(c,2),m=i[0],u=i[1],d={userTo:e.userTo,userFrom:e.userFrom};return Object(n.useEffect)((function(){o.a.post("/api/subscribe/subscribeNumber",d).then((function(e){e.data.success?s(e.data.subscribeNumber):alert("Failed to get number of subscribers for this user")})),o.a.post("/api/subscribe/subscribed",d).then((function(e){e.data.success?u(e.data.subscribed):alert("Failed to get if you are subscribed to this user or not")}))}),[]),r.a.createElement("div",{className:"col s3 m3 l3 xl3",style:{marginTop:"20px"}},r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(t){var a={userTo:e.userTo,userFrom:e.userFrom};m?o.a.post("/api/subscribe/unsubscribe",a).then((function(e){e.data.success?(s(l-1),u(!m)):alert("Failed to unsubscribe, please try again later")})):o.a.post("/api/subscribe/subscribe",a).then((function(e){e.data.success?(s(l+1),u(!m)):alert("Failed to Subscribe, please try again later")}))}},l," ",!0===m?"SUBSCRIBED":"SUBSCRIBE"))},M=a(43),U=a.n(M),V=a(44),A=a.n(V),W=a(45),z=a.n(W),B=a(46),H=a.n(B);var Y=function(e){var t,a=Object(n.useState)(0),l=Object(E.a)(a,2),s=l[0],c=l[1],i=Object(n.useState)(0),m=Object(E.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(null),v=Object(E.a)(p,2),h=v[0],f=v[1],b=Object(n.useState)(null),g=Object(E.a)(b,2),w=g[0],N=g[1];return t=e.video?{videoId:e.video.videoId,userId:e.userId}:{commentId:e.commentId,userId:e.userId},Object(n.useEffect)((function(){o.a.post("/api/like/getlikes",t).then((function(t){t.data.success?(console.log(t.data.likes),c(t.data.likes.length),t.data.likes.map((function(t){t.userId===e.userId&&f("liked")}))):alert("Failed to get likes count")})).catch((function(e){return console.log(e)})),o.a.post("/api/like/getdislikes",t).then((function(t){t.data.success?(console.log(t.data.dislikes),c(t.data.dislikes.length),t.data.dislikes.map((function(t){t.userId===e.userId&&N("disliked")}))):alert("Failed to get dislikes count")})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"col s3 m3 l3 xl3",style:{marginTop:"25px"}},r.a.createElement("span",{style:{fontSize:"1rem"}},s," "),r.a.createElement("img",{src:"liked"===h?A.a:U.a,style:{width:"1rem",height:"1rem"},alt:"like",title:"like",onClick:function(e){null===h?o.a.post("/api/like/pluslike",t).then((function(e){e.data.success?(c(s+1),f("liked"),"disliked"===w&&(N(null),d(u-1))):alert("Failed to like")})).catch((function(e){return console.log(e)})):o.a.post("/api/like/unlike",t).then((function(e){e.data.success?(c(s-1),f(null)):alert("Failed to unlike")})).catch((function(e){return console.log(e)}))}}),"\xa0\xa0",r.a.createElement("img",{src:"disliked"===w?z.a:H.a,style:{width:"1rem",height:"1rem"},alt:"dislike",title:"dislike",onClick:function(e){null!==w?o.a.post("/api/like/undislike",t).then((function(e){e.data.success?(d(u-1),N(null)):alert("Failed to remove dislike")})).catch((function(e){return console.log(e)})):o.a.post("/api/like/updislike",t).then((function(e){e.data.success?(d(u+1),N("disliked"),"liked"===h&&(f(null),c(s-1))):alert("Failed to dislike")})).catch((function(e){return console.log(e)}))}}),r.a.createElement("span",{style:{fontSize:"1rem"}}," ",u))};var X=function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),l=a[0],s=a[1],c=Object(n.useState)(!1),i=Object(E.a)(c,2),m=i[0],u=i[1],d=function(t){t.preventDefault();var a={writer:localStorage.getItem("userId"),postId:e.videoId,responseTo:e.comment._id,content:l};console.log(a),o.a.post("/api/comment/savecomment",a).then((function(t){t.data.success?(console.log("res",t.data.comment),s(""),u(!m),e.updateComment(t.data.comment)):alert("Failed to save comment reply")}))};return r.a.createElement("div",null,r.a.createElement("div",{style:{color:"grey"}},r.a.createElement("b",null,e.comment.writer.name)),r.a.createElement("div",null,e.comment.content),r.a.createElement(Y,{comment:!0,commentId:e.comment._id,userId:localStorage.getItem("userId")}),r.a.createElement("span",{onClick:function(){u(!m)},key:"comment-basic-reply-to",style:{color:"grey",textTransform:"capitalize"}},r.a.createElement("br",null),r.a.createElement("b",{style:{fontSize:"1rem"}},"Reply to")),r.a.createElement("div",null,r.a.createElement("br",null),m&&r.a.createElement("form",{style:{display:"flex"},onSubmit:d},r.a.createElement("textarea",{style:{width:"100%",borderRadius:"5px",height:"3rem"},onChange:function(e){s(e.currentTarget.value)},value:l,placeholder:"write some comments"}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn",style:{width:"20%",height:"3rem"},onClick:d},"Submit"))))};var K=function e(t){var a,l=Object(n.useState)(0),s=Object(E.a)(l,2),c=s[0],i=s[1],o=Object(n.useState)(!1),m=Object(E.a)(o,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){var e=0;t.commentList.map((function(a){a.responseTo===t.parentCommentId&&e++})),i(e)}),[t.commentList,t.parentCommentId]),r.a.createElement("div",null,c>0&&r.a.createElement("p",{style:{fontSize:"14px",margin:0,color:"gray"},onClick:function(){d(!u)}},r.a.createElement("br",null),"View ",c," more comment(s)"),u&&(a=t.parentCommentId,t.commentList.map((function(n,l){return r.a.createElement(r.a.Fragment,null,n.responseTo===a&&r.a.createElement("div",{style:{width:"80%",marginLeft:"40px"}},r.a.createElement(X,{comment:n,videoId:t.videoId,updateComment:t.updateComment}),r.a.createElement(e,{commentList:t.commentList,parentCommentId:n._id,videoId:t.videoId,updateComment:t.updateComment})))}))))};var G=function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),l=a[0],s=a[1],c=function(t){t.preventDefault();var a={content:l,writer:localStorage.getItem("userId"),postId:e.videoId};o.a.post("/api/comment/savecomment",a).then((function(t){t.data.success&&(s(""),e.updateComment(t.data.comment))})).catch((function(e){alert("Failed to save comment")}))};return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("p",null,"Replies"),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12",onSubmit:c},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s10"},r.a.createElement("textarea",{id:"textarea1",className:"materialize-textarea",onChange:function(e){s(e.currentTarget.value)},value:l}),r.a.createElement("label",{for:"textarea1"},"Write a comment")),r.a.createElement("div",{className:"col s2"},r.a.createElement("button",{className:"btn",onSubmit:c},"Submit"))))),e.commentList&&e.commentList.map((function(t,a){return!t.responseTo&&r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{comment:t,videoId:e.videoId,updateComment:e.updateComment}),r.a.createElement(K,{commentList:e.commentList,videoId:e.videoId,updateComment:e.updateComment,parentCommentId:t._id}))})))};a(78).config(),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT;var J=function(e){var t=Object(n.useState)({}),a=Object(E.a)(t,2),l=a[0],s=a[1],c=Object(n.useState)([]),i=Object(E.a)(c,2),m=i[0],u=i[1],d={videoId:e.match.params.videoid};return Object(n.useEffect)((function(){o.a.post("/api/video/getVideo",d).then((function(e){e.data.success?s(e.data.video):alert("Failed to get video Info")})),o.a.post("/api/comment/getComments",d).then((function(e){e.data.success?(console.log(e.data.comments),u(e.data.comments)):alert("Failed to get video Info")}))}),[]),l.writer?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m9 l9 xl9"},r.a.createElement("video",{src:"/".concat(l.filePath),controls:!0,style:{width:"100%"}}),r.a.createElement("div",{className:"row",style:{gridTemplateColumns:"70% 30%"}},r.a.createElement("ul",{className:"col s6 m6 l6 x6"},r.a.createElement("li",null,r.a.createElement("b",{style:{fontSize:"2rem"}},l.title)),r.a.createElement("li",null,l.description),r.a.createElement("li",null,r.a.createElement("b",null,l.writer.name))),r.a.createElement(Y,{video:!0,videoId:l._id,userId:localStorage.getItem("userId")}),r.a.createElement(R,{userTo:l.writer._id,userFrom:localStorage.getItem("userId")}))),r.a.createElement("div",{className:"col s12 m3 l3 x3"},r.a.createElement(L,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m9 l9 xl9"},r.a.createElement(G,{commentList:m,videoId:l._id,updateComment:function(e){u(m.concat(e))}})))):r.a.createElement("div",null,"...Loading")};var q=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1],s={userFrom:localStorage.getItem("userId")};Object(n.useEffect)((function(){o.a.post("/api/video/getsubscriptionvideos",s).then((function(e){e.data.success?l(e.data.videos):alert("Unable to get subscribed users videos")}))}),[]);var c=a.map((function(e,t){var a=Math.floor(e.duration/60),n=Math.floor(e.duration-60*a);return r.a.createElement("div",{className:"row",key:t},r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"card"},r.a.createElement("a",{href:"/video/"+e._id},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{alt:"thumbnail",src:e.thumbnail}),r.a.createElement("span",{className:"card-title"},e.title)),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,"Duration: ",a,":",n),r.a.createElement("p",null,e.views," views \xa0 \xa0 ",f()(e.createdAt).format("MMM Do YY")))),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:"#"},e.writer.name," ",e.writer.lastname)))))}));return r.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},r.a.createElement("h2",null,"Subcribed Videos"),r.a.createElement("hr",null),c)};var Q=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(x,null),r.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:v(b,null)}),r.a.createElement(c.a,{exact:!0,path:"/login",component:v(C,!1)}),r.a.createElement(c.a,{exact:!0,path:"/register",component:v(I,!1)}),r.a.createElement(c.a,{exact:!0,path:"/video/upload",component:v(P,!0)}),r.a.createElement(c.a,{path:"/video/:videoid",component:v(J,null)}),r.a.createElement(c.a,{path:"/subscriptions",component:v(q,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(81);var $=a(13),Z=a(47),ee=a.n(Z),te=a(48),ae=a(12),ne=a(49),re=a.n(ne),le=Object($.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login_user":case"register_user":return Object(ae.a)(Object(ae.a)({},e),{},{loginSuccess:t.payload});case"auth_user":return Object(ae.a)(Object(ae.a)({},e),{},{userData:t.payload});case"logout_user":return Object(ae.a)({},e);default:return e}},chats:re.a}),se=Object($.a)(ee.a,te.a)($.d);s.a.render(r.a.createElement(p.a,{store:se(le,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(S.a,null,r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.a95469d6.chunk.js.map