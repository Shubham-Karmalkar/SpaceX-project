(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{11:function(e,t,a){e.exports={shareContainer:"Share_shareContainer__1t7H-",sharebtn:"Share_sharebtn__OCyf1",socialMedia:"Share_socialMedia__35e3I",whats:"Share_whats__32gYY",facebook:"Share_facebook__1OT2M",pinterest:"Share_pinterest__bWxl8",twitter:"Share_twitter__iX3l7"}},12:function(e,t,a){e.exports={container:"NextMission_container__sHXBR",loading:"NextMission_loading__2_BG8",icons:"NextMission_icons__2IUtG",heart:"NextMission_heart__1KBqW",star:"NextMission_star__29VGk"}},13:function(e,t,a){e.exports={footerContainer:"Footer_footerContainer__3ZrQa",imgContainer:"Footer_imgContainer__3QMqJ",img:"Footer_img__21rE0",socialMedia:"Footer_socialMedia__1o9t2",socialLogo:"Footer_socialLogo__3Q0n5"}},17:function(e,t,a){e.exports={container:"BookMark_container__32ZjK",loading:"BookMark_loading__2W1Gy"}},18:function(e,t,a){e.exports={container:"Favourites_container__2rwms",loading:"Favourites_loading__3_m2q"}},33:function(e,t,a){},34:function(e,t,a){},4:function(e,t,a){e.exports={homeContainer:"Home_homeContainer__2ReGi",tdata:"Home_tdata__18_FS",loading:"Home_loading__31Kqm",counter:"Home_counter__2zPUd",time:"Home_time__1g_6x"}},42:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(26),i=a.n(n),r=(a(33),a(10)),o=a(3),l=(a(34),a(6)),j=a.n(l),d=a.p+"static/media/spacex_logo_white.11cb9dd5.png",h=a(0),b=function(){return console.log(d),Object(h.jsxs)("div",{className:j.a.navBarContainer,children:[Object(h.jsx)("div",{className:j.a.imgContainer,children:Object(h.jsx)("img",{className:j.a.img,src:d,alt:"logo"})}),Object(h.jsxs)("div",{className:j.a.containerForLinks,children:[Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:j.a.links,to:"/",children:"Home"})}),Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:j.a.links,to:"/mission",children:"Missions"})}),Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:j.a.links,to:"/bookmarks",children:"Bookmarks"})}),Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:j.a.links,to:"/favourites",children:"Favourites"})})]}),Object(h.jsx)("div",{className:j.a.menu,children:Object(h.jsxs)("div",{className:j.a.dropdown,children:[Object(h.jsx)("i",{className:"fas fa-bars"}),Object(h.jsxs)("div",{className:j.a.menuLinks,children:[Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:j.a.links,to:"/",children:"Home"})}),Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:j.a.links,to:"/mission",children:"Missions"})}),Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:j.a.links,to:"/bookmarks",children:"Bookmarks"})}),Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:j.a.links,to:"/favourites",children:"Favourites"})})]})]})})]})},m=a(2),O=a(4),u=a.n(O),x=function(){var e=Object(s.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(null),i=Object(m.a)(n,2),r=i[0],o=i[1],l=Object(s.useState)(!0),j=Object(m.a)(l,2),d=j[0],b=j[1],O=Object(s.useState)(new Date),x=Object(m.a)(O,2),_=x[0],f=x[1];return setInterval((function(){f(new Date)}),1e3),Object(s.useEffect)((function(){fetch("https://api.spacexdata.com/v3/launches/next").then((function(e){if(!e.ok)throw Error("Unexpected Error Occured");return e.json()})).then((function(e){b(!1),function(e){var t=e.mission_name,s=e.launch_site.site_name,n=Date.parse(e.launch_date_local);n+=31536e6,n=new Date(n),console.log("currentdate",new Date(a.mission_date).getTime()),console.log("modulo",Math.floor(4440.166666666666-24*Math.floor(266410/86400)*60)%60),c({mission_Name:t,siteName:s,mission_date:n.toUTCString()}),console.log("daate",Date.parse(a.mission_date))}(e)})).catch((function(e){o(e.message),b(!1)}))}),[]),Object(h.jsx)("div",{className:u.a.homeContainer,children:d?Object(h.jsx)("div",{className:u.a.loading,children:"Loading...."}):r?Object(h.jsx)("div",{className:u.a.loading,children:r}):Object(h.jsxs)("div",{className:u.a.dataContainer,children:[Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:u.a.tdata,children:"Mission Name"}),Object(h.jsx)("th",{className:u.a.tdata,children:"Date"}),Object(h.jsx)("th",{className:u.a.tdata,children:"Launch Pad"})]})}),Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:u.a.tdata,children:a.mission_Name}),Object(h.jsx)("td",{className:u.a.tdata,children:a.mission_date}),Object(h.jsx)("td",{className:u.a.tdata,children:a.siteName})]})})]}),Object(h.jsxs)("div",{className:u.a.counter,children:[Object(h.jsxs)("div",{className:u.a.days+" "+u.a.time,children:[Object(h.jsx)("span",{children:"Days"}),Object(h.jsx)("div",{children:Math.floor(Date.parse(a.mission_date)/864e5-Date.parse(_)/864e5)})]}),Object(h.jsxs)("div",{className:u.a.hours+" "+u.a.time,children:[Object(h.jsx)("span",{children:"Hours"}),Object(h.jsx)("div",{children:Math.floor(24*(Date.parse(a.mission_date)/864e5-Date.parse(_)/864e5)-24*Math.floor(Date.parse(a.mission_date)/864e5-Date.parse(_)/864e5))})]}),Object(h.jsxs)("div",{className:u.a.minutes+" "+u.a.time,children:[Object(h.jsx)("span",{children:"Minutes"}),Object(h.jsx)("div",{children:Math.floor(24*(Date.parse(a.mission_date)/864e5-Date.parse(_)/864e5)*60-24*Math.floor(Date.parse(a.mission_date)/864e5-Date.parse(_)/864e5)*60)%60})]}),Object(h.jsxs)("div",{className:u.a.seconds+" "+u.a.time,children:[Object(h.jsx)("span",{children:"Seconds"}),Object(h.jsx)("div",{children:Math.floor(24*(Date.parse(a.mission_date)/864e5-Date.parse(_)/864e5)*60*60-24*Math.floor(Date.parse(a.mission_date)/864e5-Date.parse(_)/864e5)*60*60)%60})]})]})]})})},_=a(17),f=a.n(_),g=function(){var e=Object(s.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(null),i=Object(m.a)(n,2),r=i[0],o=i[1],l=Object(s.useState)(!0),j=Object(m.a)(l,2),d=j[0],b=j[1],O=Object(s.useState)(null),u=Object(m.a)(O,2),x=u[0],_=u[1];return Object(s.useEffect)((function(){_(JSON.parse(localStorage.getItem(["userInfo"]))),console.log("localdata",x)}),[]),Object(s.useEffect)((function(){fetch("https://api.spacexdata.com/v3/launches/upcoming").then((function(e){if(!e.ok)throw Error("Unexpected Error Occured");return e.json()})).then((function(e){b(!1),c(e)})).catch((function(e){o(e.message),b(!1)}))}),[]),Object(h.jsx)("div",{className:f.a.container,children:d?Object(h.jsx)("div",{className:f.a.loading,children:"Loading...."}):r?Object(h.jsx)("div",{className:f.a.loading,children:r}):Object(h.jsx)("div",{className:f.a.missionData,children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{children:["Mission Name",console.log(a)]}),Object(h.jsx)("th",{children:"Date"}),Object(h.jsx)("th",{children:"LaunchPad"})]})}),Object(h.jsx)("tbody",{children:a&&x?a.filter((function(e,t){return x.star[t]})).map((function(e,t){return Object(h.jsxs)("tr",{className:t,children:[Object(h.jsx)("td",{children:e.mission_name}),Object(h.jsx)("td",{children:e.launch_date_local}),Object(h.jsx)("td",{children:e.launch_site.site_name})]},t)})):Object(h.jsx)("tr",{})})]})})})},p=a(20),N=a(19),v=(a(41),a(12)),k=a.n(v),S=function(){var e=Object(s.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(null),i=Object(m.a)(n,2),r=i[0],o=i[1],l=Object(s.useState)(!0),j=Object(m.a)(l,2),d=j[0],b=j[1],O=Object(s.useState)(null),u=Object(m.a)(O,2),x=u[0],_=u[1],f=Object(s.useState)(null),g=Object(m.a)(f,2),v=g[0],S=g[1],w=function(e,t,a){if("fas fa-star"==e.target.className){if(0==a[t]){var s=Object(N.a)(a);s[t]=!0,S(s),a=s}else{var c=Object(N.a)(a);c[t]=!1,S(c),a=c}var n=JSON.parse(localStorage.getItem(["userInfo"]));localStorage.setItem(["userInfo"],JSON.stringify(Object(p.a)(Object(p.a)({},n),{},{star:a})))}else if("fas fa-heart"==e.target.className){if(0==a[t]){var i=Object(N.a)(a);i[t]=!0,_(i),a=i}else{var r=Object(N.a)(a);r[t]=!1,_(r),a=r}console.log(x);var o=JSON.parse(localStorage.getItem(["userInfo"]));localStorage.setItem(["userInfo"],JSON.stringify(Object(p.a)(Object(p.a)({},o),{},{heart:a})))}};return Object(s.useEffect)((function(){fetch("https://api.spacexdata.com/v3/launches/upcoming").then((function(e){if(!e.ok)throw Error("Unexpected Error Occured");return e.json()})).then((function(e){b(!1),c(e),function(e){if(localStorage.getItem("userInfo")){var t=JSON.parse(localStorage.getItem(["userInfo"]));S(t.star),_(t.heart)}else{for(var a=[],s=0;s<e.length;s++)a.push(!1);S(a),_(a);var c={star:a,heart:a};localStorage.setItem("userInfo",JSON.stringify(c)),console.log(localStorage.getItem(["userInfo"]))}}(e)})).catch((function(e){o(e.message),b(!1)}))}),[]),Object(h.jsx)("div",{className:k.a.container,children:d?Object(h.jsx)("div",{className:k.a.loading,children:"Loading...."}):r?Object(h.jsx)("div",{className:k.a.loading,children:r}):Object(h.jsx)("div",{className:k.a.missionData,children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{children:["Mission Name",console.log(a)]}),Object(h.jsx)("th",{children:"Date"}),Object(h.jsx)("th",{children:"LaunchPad"})]})}),Object(h.jsx)("tbody",{children:null!=a?a.map((function(e,t){return Object(h.jsxs)("tr",{className:t,children:[Object(h.jsx)("td",{children:e.mission_name}),Object(h.jsx)("td",{children:e.launch_date_local}),Object(h.jsx)("td",{children:e.launch_site.site_name}),Object(h.jsxs)("td",{className:k.a.icons,children:[Object(h.jsx)("i",{id:v&&v[t]?k.a.star:"",onClick:function(e){return w(e,t,v)},className:"fas fa-star"}),Object(h.jsx)("i",{id:x&&x[t]?k.a.heart:"",onClick:function(e){return w(e,t,x)},className:"fas fa-heart"})]})]},t)})):Object(h.jsx)("tr",{})})]})})})},w=a(18),M=a.n(w),C=function(){var e=Object(s.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(null),i=Object(m.a)(n,2),r=i[0],o=i[1],l=Object(s.useState)(!0),j=Object(m.a)(l,2),d=j[0],b=j[1],O=Object(s.useState)(null),u=Object(m.a)(O,2),x=u[0],_=u[1];return Object(s.useEffect)((function(){_(JSON.parse(localStorage.getItem(["userInfo"]))),console.log("localdata",x)}),[]),Object(s.useEffect)((function(){fetch("https://api.spacexdata.com/v3/launches/upcoming").then((function(e){if(!e.ok)throw Error("Unexpected Error Occured");return e.json()})).then((function(e){b(!1),c(e)})).catch((function(e){o(e.message),b(!1)}))}),[]),Object(h.jsx)("div",{className:M.a.container,children:d?Object(h.jsx)("div",{className:M.a.loading,children:"Loading...."}):r?Object(h.jsx)("div",{className:M.a.loading,children:r}):Object(h.jsx)("div",{className:M.a.missionData,children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{children:["Mission Name",console.log(a)]}),Object(h.jsx)("th",{children:"Date"}),Object(h.jsx)("th",{children:"LaunchPad"})]})}),Object(h.jsx)("tbody",{children:a&&x?a.filter((function(e,t){return x.heart[t]})).map((function(e,t){return Object(h.jsxs)("tr",{className:t,children:[Object(h.jsx)("td",{children:e.mission_name}),Object(h.jsx)("td",{children:e.launch_date_local}),Object(h.jsx)("td",{children:e.launch_site.site_name})]},t)})):Object(h.jsx)("tr",{})})]})})})},D=a(13),I=a.n(D),L=a.p+"static/media/github.705e116f.png",y=a.p+"static/media/linkedin.1f14a8f9.png",E=a.p+"static/media/twitter.f6ee06a8.png",F=function(){return Object(h.jsxs)("div",{className:I.a.footerContainer,children:[Object(h.jsxs)("div",{className:I.a.imgContainer,children:[Object(h.jsx)("img",{className:I.a.img,src:d,alt:"logo"}),"@2021 all rights reserved"]}),Object(h.jsxs)("div",{className:I.a.socialMedia,children:[Object(h.jsx)("a",{href:"https://github.com/Shubham-Karmalkar",target:"_blank",children:Object(h.jsx)("img",{className:I.a.socialLogo,src:L,alt:"github"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/shubham-karmalkar-20245218b/",target:"_blank",children:Object(h.jsx)("img",{className:I.a.socialLogo,src:y,alt:"linkedin"})}),Object(h.jsx)("a",{href:"https://github.com/Shubham-Karmalkar",target:"_blank",children:Object(h.jsx)("img",{className:I.a.socialLogo,src:E,alt:"twitter"})})]})]})},B=a(11),H=a.n(B),J=function(){var e=Object(s.useState)({display:"none"}),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(s.useRef)({url:encodeURI(document.location.href),content:encodeURI("Check out timer for current Mission Launch")});return Object(h.jsxs)("div",{className:H.a.shareContainer,children:[Object(h.jsx)("div",{onClick:function(){"none"==a.display?c({display:"block"}):c({display:"none"})},className:H.a.sharebtn,children:Object(h.jsx)("i",{className:"fas fa-share"})}),Object(h.jsxs)("div",{style:a,className:H.a.socialMedia,children:[Object(h.jsx)("div",{className:H.a.whatsapp,children:Object(h.jsx)("a",{href:"https://api.whatsapp.com/send?text=".concat(n.current.content," ").concat(n.current.url),target:"_blank",children:Object(h.jsx)("i",{id:H.a.whats,className:"fab fa-whatsapp"})})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"https://www.facebook.com/sharer.php?u=".concat(n.current.url),target:"_blank",children:Object(h.jsx)("i",{id:H.a.facebook,className:"fab fa-facebook"})})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=".concat(n.current.url,"&is_video=[is_video]&description=").concat(n.current.content,"\n"),target:"_blank",children:Object(h.jsx)("i",{id:H.a.pinterest,className:"fab fa-pinterest"})})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"https://twitter.com/share?url=".concat(n.current.url,"&text=").concat(n.current.content,"\n"),target:"_blank",children:Object(h.jsx)("i",{id:H.a.twitter,className:"fab fa-twitter"})})})]})]})};var U=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(r.a,{children:[Object(h.jsx)(b,{}),Object(h.jsx)("div",{className:"data",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:x}),Object(h.jsx)(o.a,{path:"/mission",exact:!0,component:S}),Object(h.jsx)(o.a,{path:"/bookmarks",exact:!0,component:g}),Object(h.jsx)(o.a,{path:"/favourites",exact:!0,component:C})]})})]}),Object(h.jsx)(J,{}),Object(h.jsx)(F,{})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root")),P()},6:function(e,t,a){e.exports={navBarContainer:"Navbar_navBarContainer__5n3z1",imgContainer:"Navbar_imgContainer__2QbLQ",img:"Navbar_img__2MtEf",containerForLinks:"Navbar_containerForLinks__20rSy",links:"Navbar_links__10t5H",menu:"Navbar_menu__35cTu",dropdown:"Navbar_dropdown__32mTx",fas:"Navbar_fas__3CfeN",menuLinks:"Navbar_menuLinks__2gQ5K"}}},[[42,1,2]]]);
//# sourceMappingURL=main.fc648291.chunk.js.map