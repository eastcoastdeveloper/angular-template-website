"use strict";(self.webpackChunkFrontendDev=self.webpackChunkFrontendDev||[]).push([["main"],{5140:(u,l,e)=>{e.d(l,{d:()=>a});var d=e(7579),t=e(1135),o=e(4004),m=e(8256),r=e(529);class a{constructor(c){this._http=c,this.chosenDate="",this.result={},this.history=[],this.datePickerStatus=!1,this.searchSubject=new d.x,this.dateSource=new t.X(this.chosenDate),this.mediaSource=new t.X(this.result),this.historySource=new t.X(this.history),this.datePickerSource=new t.X(this.datePickerStatus),this.chosenDateValue$=this.dateSource.asObservable(),this.chosenMedia$=this.mediaSource.asObservable(),this.history$=this.historySource.asObservable(),this.dataPickerCurrentVal=this.datePickerSource.asObservable(),this.url="https://api.nasa.gov/planetary/apod",this.key="lNDAlgsfTbQIuCybMOJaKKKdz5tEg1XYem5fydJm",this.count="15",this.explanation="",this.title="",this.model={explanation:this.explanation,hdurl:this.url,title:this.title}}changeDatePickerVal(c){return this.datePickerSource.next(c),c}sendSearchQuery(c){this.searchSubject.next({text:c})}currentDate(c,p,v){return this.fetchData(`${c}-${p+1}-${v}`),this.dateSource.next({year:c,month:p,day:v}),{year:c,month:p,day:v}}getSearchQuery(){return this.searchSubject.asObservable()}fetchData(c){this._http.get("https://api.nasa.gov/planetary/apod?api_key="+this.key+"&date="+c).pipe((0,o.U)(p=>{this.result=p})).subscribe(p=>{this.mediaSource.next(this.result),0!=Object.keys(this.result).length&&this.history.push(this.result)})}static#t=this.\u0275fac=function(p){return new(p||a)(m.LFG(r.eN))};static#e=this.\u0275prov=m.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}},4891:(u,l,e)=>{e.d(l,{A:()=>o});var d=e(6895),t=e(8256);class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[d.ez]})}},2271:(u,l,e)=>{e.d(l,{m:()=>m});var d=e(6895),t=e(9965),o=e(8256);class m{static#t=this.\u0275fac=function(x){return new(x||m)};static#e=this.\u0275mod=o.oAB({type:m});static#n=this.\u0275inj=o.cJS({imports:[d.ez,t.Bz]})}},981:(u,l,e)=>{e.d(l,{h:()=>a});var d=e(7579),t=e(1135),o=e(4004),m=e(8256),r=e(529);class a{constructor(c){this._http=c,this.routeData=new d.x,this.projectList=[],this.pageDataSubject=new t.X(this.pageDataSource),this.pageData$=this.pageDataSubject.asObservable()}getDataFromAPI(){this._http.get("/app").pipe((0,o.U)(c=>{const p=[];for(const v in c)c.hasOwnProperty(v)&&p.push({...c[v]});this.projectList=p}))}changeProjectData(c){this.pageDataSubject.next(c)}static#t=this.\u0275fac=function(p){return new(p||a)(m.LFG(r.eN))};static#e=this.\u0275prov=m.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}},5885:(u,l,e)=>{e.d(l,{p:()=>o});var d=e(1135),t=e(8256);class o{constructor(){this.devMenu=!1,this.devMenuSource=new d.X(this.devMenu),this.devMenuState$=this.devMenuSource.asObservable()}changeValue(r){this.devMenu=!this.devMenu,this.devMenuSource.next(r)}closeMenu(){this.devMenuSource.next(!1),this.devMenu=!1}static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}},8290:(u,l,e)=>{e.d(l,{r:()=>o});var d=e(8256),t=e(3322);class o{constructor(r){this._windowRef=r}scrollToTop(){this._windowRef.nativeWindow.scrollTo({top:0,left:0,behavior:"smooth"})}static#t=this.\u0275fac=function(a){return new(a||o)(d.LFG(t.X))};static#e=this.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}},4591:(u,l,e)=>{e.d(l,{R:()=>o});var d=e(1135),t=e(8256);class o{constructor(){this.someWidth=window.innerWidth,this.winWidthSource=new d.X(this.someWidth),this.currentWidth$=this.winWidthSource.asObservable()}changeValue(r){return this.winWidthSource.next(r),r}static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}},3322:(u,l,e)=>{e.d(l,{X:()=>o});var d=e(8256);class o{get nativeWindow(){return function t(){return window}()}static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac})}},5924:(u,l,e)=>{var d=e(1481),t=e(8256),o=e(6895),m=e(433),r=e(9965);class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["weather"]],decls:0,vars:0,template:function(i,h){},styles:["main[_ngcontent-%COMP%]{min-height:200px;font: 14px sans-serif;text-align:center;background-color:#313b3f;overflow:hidden;line-height:25px;border-radius:4px;color:#d9a74a;height:400px;margin:37px auto 20px;max-width:500px;position:relative}main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(error-message){padding-top:30px}main[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{margin-bottom:15px}  .leaflet-control-attribution{display:none}.centered-search[_ngcontent-%COMP%]{position:absolute;left:50%;width:100%;top:50%;transform:translate(-50%,-50%);padding:0}.heading[_ngcontent-%COMP%]{margin-bottom:10px;font: 15px sans-serif;padding-bottom:10px}#map[_ngcontent-%COMP%]{position:relative;height:calc(100% - 201px);margin-top:20px;margin-left:5px;margin-right:5px;border-bottom-left-radius:4px;border-bottom-right-radius:4px}input[_ngcontent-%COMP%]{font: 14px sans-serif;padding:4px 0 4px 10px;border-radius:3px;outline:none;border:none}button[_ngcontent-%COMP%]{color:#2b3d52;outline:none;border:none;cursor:pointer;font-size:14px;padding:3px 10px 4px;margin-left:15px;border-radius:4px;background-color:#fff}.error-message[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:-40px;transition:bottom .5s;z-index:999;background-color:#313b3f;padding:5px 0!important}.show-error[_ngcontent-%COMP%]{bottom:0!important}@media screen and (max-width: 545px){main[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px}main[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:calc(100% - 50px);text-align:center;margin-bottom:20px}main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-left:0}main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:120px}}"]})}class x{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(i){return new(i||x)};static#e=this.\u0275cmp=t.Xpm({type:x,selectors:[["app-form-confirmation"]],decls:6,vars:0,consts:[[1,"form-confirmation"]],template:function(i,h){1&i&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2," Thank you for your interest in recieving infrequent updates related to projects and posts."),t._UZ(3,"br")(4,"br"),t._uU(5,"Have a wonderful day! "),t.qZA()())},styles:[".form-confirmation[_ngcontent-%COMP%]{display:flex;height:100%}.form-confirmation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#313b3f;margin:auto;color:#fff;font: 14px sans-serif;text-align:center;max-width:600px;padding:10px;border-radius:4px;line-height:22px}@media screen and (max-width: 640px){.form-confirmation[_ngcontent-%COMP%]{margin:auto 20px}}"]})}const c=[{path:"",redirectTo:"web-development",pathMatch:"full"},{path:"projects",loadChildren:()=>Promise.all([e.e("default-src_app_development_components_dev-menu_dev-menu_component_ts-src_app_structural_acco-39f40a"),e.e("src_app_modules_apps_apps_module_ts")]).then(e.bind(e,9717)).then(s=>s.AppsModule)},{path:"components",loadChildren:()=>Promise.all([e.e("default-src_app_development_components_dev-menu_dev-menu_component_ts-src_app_structural_acco-39f40a"),e.e("src_app_modules_components_components_module_ts")]).then(e.bind(e,3966)).then(s=>s.ComponentsModule)},{path:"development",loadChildren:()=>Promise.all([e.e("default-src_app_development_components_dev-menu_dev-menu_component_ts-src_app_structural_acco-39f40a"),e.e("src_app_modules_development_development_module_ts")]).then(e.bind(e,7511)).then(s=>s.DevelopmentModule)},{path:"front-end-dev-resume",loadChildren:()=>e.e("src_app_modules_experience_experience_module_ts").then(e.bind(e,3218)).then(s=>s.ExperiencePageModule)},{path:"front-end-developer",loadChildren:()=>e.e("src_app_modules_about_about_module_ts").then(e.bind(e,5847)).then(s=>s.AboutPageModule)},{path:"web-development",loadChildren:()=>Promise.all([e.e("common"),e.e("src_app_modules_projects-list_projects-list_module_ts")]).then(e.bind(e,1484)).then(s=>s.ProjectListModule)},{path:"**",redirectTo:"web-development"}];class p{static#t=this.\u0275fac=function(i){return new(i||p)};static#e=this.\u0275mod=t.oAB({type:p});static#n=this.\u0275inj=t.cJS({imports:[r.Bz.forRoot(c,{preloadingStrategy:r.wm}),r.Bz]})}var w=e(529),W=e(2271),A=e(7579),_=e(2722),U=e(4591),L=e(1135);class M{constructor(){this.initVal=!1,this.currentUrl="",this.url="",this.sideBarSource=new L.X(this.initVal),this.currentUrlSource=new L.X(this.currentUrl),this.currentVal$=this.sideBarSource.asObservable(),this.urlVal$=this.currentUrlSource.asObservable()}changeValue(n){return this.sideBarSource.next(n),n}changeRoute(n){return this.currentUrlSource.next(n),this.currentUrl=n,n}static#t=this.\u0275fac=function(i){return new(i||M)};static#e=this.\u0275prov=t.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"})}var Z=e(5885),I=e(8290),R=e(981),y=e(727),j=e(5140);function B(s,n){1&s&&(t.TgZ(0,"div",6)(1,"h2"),t._uU(2,"Front End Development"),t.qZA(),t.TgZ(3,"span"),t._uU(4,".tech"),t.qZA()())}function F(s,n){1&s&&(t.TgZ(0,"div",7),t._UZ(1,"img",8),t.qZA())}function K(s,n){if(1&s){const i=t.EpF();t.TgZ(0,"nav",9),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.externalClick())}),t.TgZ(1,"div",10)(2,"span",11),t._uU(3,"Folio"),t.qZA()(),t.TgZ(4,"div",12)(5,"span",11),t._uU(6,"Experience"),t.qZA()(),t.TgZ(7,"div",13)(8,"span",11),t._uU(9,"About"),t.qZA()(),t.TgZ(10,"div",14)(11,"a",15),t._uU(12,"Contact"),t.qZA()()()}}function k(s,n){1&s&&(t.TgZ(0,"span"),t._uU(1,"\u2630"),t.qZA())}const Y=function(s){return{"close-mobile-menu":s}};function $(s,n){if(1&s){const i=t.EpF();t.TgZ(0,"div",16),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.toggleMobileNav())}),t.YNc(1,k,2,0,"span",17),t.TgZ(2,"span",18),t._uU(3,"\u2715"),t.qZA()()}if(2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",!i.sidebarStatus),t.xp6(1),t.Q6J("ngClass",t.VKq(2,Y,!i.sidebarStatus))}}class C{constructor(n,i,h,g,b,D,S,E){this._scrollToTopService=n,this.nasaSearchService=i,this.windowWidth=h,this.sideBarService=g,this.devMenu=b,this._router=D,this._renderer=S,this.document=E,this.sidebarSubscription=new y.w0,this.routerSubscription=new y.w0,this.windowSubscrption=new y.w0,this.menuOpen=!1,this.destroy$=new A.x}ngOnInit(){this.sideBarService.urlVal$.pipe((0,_.R)(this.destroy$)).subscribe(n=>{this.currentUrl=n}),this.windowWidth.currentWidth$.pipe((0,_.R)(this.destroy$)).subscribe(n=>this.screenSize=n),this.sideBarService.currentVal$.pipe((0,_.R)(this.destroy$)).subscribe(n=>{this.sidebarStatus=n})}externalClick(){this.devMenu.closeMenu(),this._router.url.includes("nasa")&&this.nasaSearchService.changeDatePickerVal(!1)}toggleMobileNav(){this.sidebarStatus=!this.sidebarStatus,this.sidebarStatus&&(this._renderer.addClass(this.document.body,"overflow-hidden"),this._scrollToTopService.scrollToTop()),this.sidebarStatus||this._renderer.removeAttribute(this.document.body,"class"),this.sideBarService.changeValue(this.sidebarStatus)}navigateToContact(){window.location.href="https://frontenddevelopment.tech/inquire.html"}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(i){return new(i||C)(t.Y36(I.r),t.Y36(j.d),t.Y36(U.R),t.Y36(M),t.Y36(Z.p),t.Y36(r.F0),t.Y36(t.Qsj),t.Y36(o.K0))};static#e=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-header"]],decls:7,vars:4,consts:[[1,"app-header",3,"click"],["class","url","routerLink","/",4,"ngIf"],["class","logo","routerLink","/",4,"ngIf"],[3,"click",4,"ngIf"],[1,"mobile-title"],["class","mobile-menu",3,"click",4,"ngIf"],["routerLink","/",1,"url"],["routerLink","/",1,"logo"],["src","../../../assets/img/logo.png"],[3,"click"],["routerLink","web-development",1,"mock-link"],["routerLinkActive","is-active"],["routerLink","front-end-dev-resume",1,"mock-link"],["routerLink","front-end-developer",1,"mock-link"],[1,"mock-link"],["href","https://www.frontenddevelopment.tech/contact/inquire.html"],[1,"mobile-menu",3,"click"],[4,"ngIf"],[3,"ngClass"]],template:function(i,h){1&i&&(t.TgZ(0,"header",0),t.NdJ("click",function(){return h.externalClick()}),t.YNc(1,B,5,0,"div",1),t.YNc(2,F,2,0,"div",2),t.YNc(3,K,13,0,"nav",3),t.TgZ(4,"div",4),t._uU(5," FrontendDev "),t.qZA(),t.YNc(6,$,4,4,"div",5),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngIf",h.screenSize>1150),t.xp6(1),t.Q6J("ngIf",h.screenSize<1151),t.xp6(1),t.Q6J("ngIf",h.screenSize>605),t.xp6(3),t.Q6J("ngIf",h.screenSize<606))},dependencies:[o.mk,o.O5,r.rH,r.Od],encapsulation:2})}class O{static#t=this.\u0275fac=function(i){return new(i||O)};static#e=this.\u0275cmp=t.Xpm({type:O,selectors:[["app-footer"]],decls:3,vars:0,consts:[["id","app-footer"],[1,"copyright"]],template:function(i,h){1&i&&(t.TgZ(0,"footer",0)(1,"div",1),t._uU(2,"\xa9 2022 frontenddevelopment.tech"),t.qZA()())},encapsulation:2,changeDetection:0})}const z=function(s){return{"show-mobile-nav":s}};function J(s,n){if(1&s){const i=t.EpF();t.TgZ(0,"div",6)(1,"nav",7),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.closeMobileNav())}),t.TgZ(2,"div",8),t._uU(3,"Home"),t.qZA(),t.TgZ(4,"div",9),t._uU(5,"Projects"),t.qZA(),t.TgZ(6,"div",10),t._uU(7,"Components"),t.qZA(),t.TgZ(8,"div",11),t._uU(9,"Development"),t.qZA(),t.TgZ(10,"div",12),t._uU(11,"Experience"),t.qZA(),t.TgZ(12,"div",13),t._uU(13,"About"),t.qZA(),t.TgZ(14,"div",7),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.navigateToContact())}),t._uU(15,"Contact"),t.qZA()()()}if(2&s){const i=t.oxw();t.Q6J("ngClass",t.VKq(1,z,i.sidebarStatus))}}class P{constructor(n,i,h,g,b,D,S,E){this._windowService=n,this._sidebarService=i,this._devMenu=h,this._scrollToTop=g,this._projectListService=b,this._router=D,this._renderer=S,this.document=E,this.status="DOWN",this.isMobile=!1,this.width=window.innerWidth,this.height=window.innerWidth,this.mobileWidth=760,this.projectList=[],this.destroy$=new A.x,this.pageDetails={title:"",threeColumnLayout:!1,imgUrl:"",description:"",path:"",altText:"",stackblitz:!1,internal:!1,views:0,forks:0,publishedOn:"",updatedOn:"",repoLink:"",repoTitle:"",showInPage:!1,category:""},this._router.events.subscribe(N=>{N instanceof r.m2&&this._projectListService.projectList.map(f=>{this._router.url===f.path&&(this.pageDetails.title=f.title,this.pageDetails.threeColumnLayout=f.threeColumnLayout,this.pageDetails.publishedOn=f.publishedOn,this.pageDetails.updatedOn=f.updatedOn,this.pageDetails.repoTitle=f.repoTitle,this.pageDetails.repoLink=f.repoLink,this.pageDetails.showInPage=f.showInPage,this.pageDetails.category=f.category,this.pageDetails.views=f.views,this.pageDetails.forks=f.forks,this._projectListService.changeProjectData(this.pageDetails))})})}ngOnInit(){this.isMobile=this.width<this.mobileWidth,this.getPageData(),this._windowService.currentWidth$.pipe((0,_.R)(this.destroy$)).subscribe(n=>{this.width=n}),this._sidebarService.currentVal$.pipe((0,_.R)(this.destroy$)).subscribe(n=>this.sidebarStatus=n),this._sidebarService.urlVal$.pipe((0,_.R)(this.destroy$)).subscribe(n=>this.currentRoute=n),this._router.events.pipe((0,_.R)(this.destroy$)).subscribe(n=>{n instanceof r.m2&&(this._renderer.removeAttribute(this.document.body,"class"),this.currentRoute=n.url,this._sidebarService.changeRoute(this.currentRoute),this._scrollToTop.scrollToTop())})}ngAfterViewInit(){this._windowService.changeValue(window.innerWidth)}getPageData(){this._projectListService.getDataFromAPI()}closeMobileNav(){this._sidebarService.changeValue(!1)}navigateToContact(){window.location.href="https://frontenddevelopment.tech/contact/inquire.html"}onWindowResize(n){this.width=n.target.innerWidth,this.height=n.target.innerHeight,this.isMobile=this.width<this.mobileWidth,this._windowService.changeValue(this.width),this._sidebarService.changeValue(!1),this._devMenu.closeMenu()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(i){return new(i||P)(t.Y36(U.R),t.Y36(M),t.Y36(Z.p),t.Y36(I.r),t.Y36(R.h),t.Y36(r.F0),t.Y36(t.Qsj),t.Y36(o.K0))};static#e=this.\u0275cmp=t.Xpm({type:P,selectors:[["my-app"]],hostBindings:function(i,h){1&i&&t.NdJ("resize",function(b){return h.onWindowResize(b)},!1,t.Jf7)},decls:9,vars:1,consts:[["id","angular-spa"],["id","header"],["headerComponent",""],["id","content"],[1,"router-wrapper"],["id","mobile-menu",3,"ngClass",4,"ngIf"],["id","mobile-menu",3,"ngClass"],[3,"click"],["routerLink","/"],["routerLink","projects/javascript-projects"],["routerLink","components/angular-components"],["routerLink","development/development"],["routerLink","front-end-dev-resume"],["routerLink","front-end-developer"]],template:function(i,h){1&i&&(t.TgZ(0,"div",0)(1,"div",1,2),t._UZ(3,"app-header"),t.qZA(),t.TgZ(4,"div",3)(5,"div",4),t._UZ(6,"router-outlet")(7,"app-footer"),t.qZA()(),t.YNc(8,J,16,3,"div",5),t.qZA()),2&i&&(t.xp6(8),t.Q6J("ngIf",600>h.width))},dependencies:[o.mk,o.O5,r.lC,r.rH,C,O],styles:["#footer[_ngcontent-%COMP%]{background-color:#313b3f;height:25px;position:fixed;bottom:0;width:100%;z-index:1}"]})}var H=e(4891),V=e(3322);class T{static#t=this.\u0275fac=function(i){return new(i||T)};static#e=this.\u0275mod=t.oAB({type:T,bootstrap:[P]});static#n=this.\u0275inj=t.cJS({providers:[w.JF,V.X],imports:[d.b2,o.ez,w.JF,m.u5,p,W.m,m.UX,H.A]})}(0,t.G48)(),d.q6().bootstrapModule(T).catch(s=>console.error(s))}},u=>{u.O(0,["vendor"],()=>u(u.s=5924)),u.O()}]);