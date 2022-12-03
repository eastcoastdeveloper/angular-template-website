"use strict";(self.webpackChunkFrontendDev=self.webpackChunkFrontendDev||[]).push([["src_app_modules_development_development_module_ts"],{7511:(R,v,r)=>{r.r(v),r.d(v,{DevelopmentModule:()=>h});var c=r(6895),_=r(433),u=r(9965),e=r(8256);const b=["btnGroup"],y=["bar"],x=["sections"];function C(i,t){1&i&&(e.TgZ(0,"div",16)(1,"div",17)(2,"label",18),e._uU(3,"First Name:"),e.qZA(),e._UZ(4,"input",19),e.qZA(),e.TgZ(5,"div",17)(6,"label",20),e._uU(7,"Occupation:"),e.qZA(),e._UZ(8,"input",21),e.qZA(),e.TgZ(9,"div",17)(10,"label",22),e._uU(11,"Title:"),e.qZA(),e._UZ(12,"input",23),e.qZA()())}function Z(i,t){1&i&&(e.TgZ(0,"div",16)(1,"div",17)(2,"label",24),e._uU(3,"City:"),e.qZA(),e._UZ(4,"input",25),e.qZA(),e.TgZ(5,"div",17)(6,"label",26),e._uU(7,"State:"),e.qZA(),e._UZ(8,"input",27),e.qZA(),e.TgZ(9,"div",17)(10,"label",28),e._uU(11,"Zip Code:"),e.qZA(),e._UZ(12,"input",29),e.qZA()())}function T(i,t){1&i&&(e.TgZ(0,"div",16),e._uU(1," Results... "),e.qZA())}const w=function(i){return{"display-none":i}};function M(i,t){if(1&i&&(e.TgZ(0,"section",13)(1,"div",null,14),e._uU(3),e.YNc(4,C,13,0,"div",15),e.YNc(5,Z,13,0,"div",15),e.YNc(6,T,2,0,"div",15),e.qZA()()),2&i){const o=t.index,n=e.oxw();e.Q6J("ngClass",e.VKq(5,w,n.currentSection!=o)),e.xp6(3),e.hij(" ","Section "+(o+1)," "),e.xp6(1),e.Q6J("ngIf",0===n.currentSection),e.xp6(1),e.Q6J("ngIf",1===n.currentSection),e.xp6(1),e.Q6J("ngIf",2===n.currentSection)}}function A(i,t){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&i){const o=t.index,n=e.oxw();e.xp6(1),e.hij(" ",n.Math.round(100/n.sectionLength*(o+1))+"%"," ")}}function U(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){const a=e.CHM(o).index,H=e.oxw();return e.KtG(H.navigate(a))}),e._uU(1),e.qZA()}if(2&i){const o=t.index;e.xp6(1),e.hij(" ","Section "+(o+1)," ")}}const m=function(){return[]};class l{constructor(t){this._cd=t,this.sectionLength=3,this.barLinkWidth=0,this.currentSection=0,this.progress=[],this.Math=Math}ngOnInit(){this.renderCode()}ngAfterViewInit(){this._cd.detectChanges(),this.progress=Array.prototype.slice.call(document.querySelectorAll("#percent > div")),this.barLinkWidth=100/this.sections.length,this.bar.nativeElement.setAttribute("style","width:"+this.barLinkWidth+"%"),this.btnGroup.nativeElement.style.gridTemplateColumns="repeat("+this.sectionLength+", auto)"}navigate(t){this.currentSection=t,this.bar.nativeElement.style.width=this.barLinkWidth*(t+1)+"%"}showProgressBar(){this.bar.nativeElement.style.height="22px";for(var t=0;t<this.progress.length;t++)this.progress[t].style.opacity=1}hideProgressBar(){this.bar.nativeElement.style.height="3px";for(var t=0;t<this.progress.length;t++)this.progress[t].style.opacity=0}renderCode(){this.markup='\n    <div id="module-name">\n    <section *ngFor="let item of [].constructor(sectionLength); let i = index" [ngClass]="{ \'display-none\': currentSection != i }">\n        <div #sections>{{\'Section \' + (i + 1)}}</div>\n\n        (Injectable Content)\n        // Section 1 Content\n        <div *ngIf="currentSection === 0" class="section-content">\n            <div class="group">\n                <label for="name">First Name:</label>\n                <input type="text" placeholder="Enter a name" id="name" />\n            </div>\n            <div class="group">\n                <label for="occupation">Occupation:</label>\n                <input type="text" placeholder="Your occupation" id="occupation" />\n            </div>\n            <div class="group">\n                <label for="title">Title:</label>\n                <input type="text" placeholder="Your title" id="title" />\n            </div>\n        </div>\n\n        // Section 2 Content\n        <div *ngIf="currentSection === 1" class="section-content">\n            <div class="group">\n                <label for="city">City:</label>\n                <input type="text" placeholder="Your city" id="city" />\n            </div>\n            <div class="group">\n                <label for="state">State:</label>\n                <input type="text" placeholder="Your state" id="state" />\n            </div>\n            <div class="group">\n                <label for="zip">Zip Code:</label>\n                <input type="text" placeholder="Your zip code" id="zip" />\n            </div>\n        </div>\n\n        // Section 3 Content\n        <div *ngIf="currentSection === 2" class="section-content">\n            Results...\n        </div>\n\n    </section>\n    <div id="indicator" #bar></div>\n    <div id="percent">\n        <div *ngFor="let percent of [].constructor(sectionLength); let i = index">\n            {{ Math.round((100 / sectionLength) * (i + 1)) + \'%\' }}\n        </div>\n    </div>\n    <div class="btn-group" #btnGroup (mouseover)="showProgressBar()" (mouseout)="hideProgressBar()">\n        <button *ngFor="let btn of [].constructor(sectionLength); let i = index" (click)="navigate(i)">\n            {{ \'Section \' + (i + 1) }}\n        </button>\n    </div>\n</div>',this.style="\n    #module-name {\n      height: 300px;\n      border-radius: 6px;\n      margin-top: 25px;\n      position: relative;\n      font-family: sans-serif;\n      overflow: hidden;\n  \n      #indicator {\n          background-color: grey-black;\n          height: 3px;\n          position: absolute;\n          bottom: 0;\n          transition: all 0.5s;\n      }\n  \n      section {\n          height: 100%;\n          background-color: #ffffff;\n          border: 1px solid grey-black;\n          border-radius: 6px;\n  \n          >div {\n              font-size: 1.5em;\n              width: 100%;\n              height: 100%;\n              text-transform: uppercase;\n              color: grey-black;\n              padding: 20px;\n              box-sizing: border-box;\n  \n              .section-content {\n                  font: normal 14px sans-serif;\n                  text-transform: none;\n                  display: grid;\n                  grid-template-columns: repeat(3, auto);\n                  max-width: 500px;\n                  justify-content: center;\n                  grid-column-gap: 10px;\n                  margin: 40px auto 0 auto;\n  \n                  label {\n                      display: block;\n                      margin-bottom: 5px;\n                  }\n  \n                  input {\n                      padding: 3px;\n                      color: grey-black;\n                      box-sizing: border-box;\n                      outline: none;\n                  }\n  \n                  input::placeholder {\n                      font: normal 12px sans-serif;\n                  }\n              }\n          }\n      }\n  }\n  \n  .display-none {\n      display: none;\n  }\n  \n  .btn-group {\n      position: absolute;\n      bottom: 35px;\n      left: 0;\n      right: 0;\n      text-align: center;\n      display: grid;\n      grid-column-gap: 5px;\n      width: calc(100% - 30px);\n      margin: 0 auto;\n  \n      button {\n          padding: 10px 5px;\n          background-color: $oceanBlue;\n          color: #ffffff;\n          border: none;\n          border-radius: 6px;\n          outline: none;\n          cursor: pointer;\n      }\n  }\n  \n  #percent {\n      display: flex;\n      position: absolute;\n      width: 100%;\n      bottom: 3px;\n      font: normal 13px sans-serif;\n  \n      >div {\n          width: 33.3%;\n          text-align: center;\n          color: yellow-gold;\n          opacity: 0;\n          transition: opacity 0.5s;\n      }\n  }",this.typescript="\n    import { ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren, } from '@angular/core';\n    \n    @Component({\n      selector: 'my-app',\n      templateUrl: './app.component.html',\n      styleUrls: ['./app.component.scss'],\n    })\n    export class AppComponent {\n\n      @ViewChildren('sections') sections: QueryList<ElementRef>;\n      @ViewChild('btnGroup', { static: false }) btnGroup: ElementRef;\n      @ViewChild('bar', { static: false }) bar: ElementRef;\n    \n      // SET TO ANY AMOUNT!\n      sectionLength = 3;\n    \n      barLinkWidth = 0;\n      currentSection = 0;\n      progress: any = [];\n      Math: any;\n    \n      constructor(private _cd: ChangeDetectorRef) {\n        this.Math = Math;\n      }\n    \n      ngAfterViewInit() {\n        this._cd.detectChanges();\n        this.progress = Array.prototype.slice.call(document.querySelectorAll('#percent > div'));\n        this.barLinkWidth = 100 / this.sections.length;\n        this.bar.nativeElement.setAttribute('style', 'width:' + this.barLinkWidth + '%');\n        this.btnGroup.nativeElement.style.gridTemplateColumns = 'repeat(' + this.sectionLength + ', auto)';\n      }\n    \n      navigate(sectionIndex: number) {\n        this.currentSection = sectionIndex;\n        this.bar.nativeElement.style.width = this.barLinkWidth * (sectionIndex + 1) + '%';\n      }\n    \n      showProgressBar() {\n        this.bar.nativeElement.style.height = '22px';\n        for (var i = 0; i < this.progress.length; i++) {\n          this.progress[i].style.opacity = 1;\n        }\n      }\n    \n      hideProgressBar() {\n        this.bar.nativeElement.style.height = '3px';\n        for (var i = 0; i < this.progress.length; i++) {\n          this.progress[i].style.opacity = 0;\n        }\n      }\n    }"}static#e=this.\u0275fac=function(o){return new(o||l)(e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-in-page-navigation"]],viewQuery:function(o,n){if(1&o&&(e.Gf(b,5),e.Gf(y,5),e.Gf(x,5)),2&o){let s;e.iGM(s=e.CRH())&&(n.btnGroup=s.first),e.iGM(s=e.CRH())&&(n.bar=s.first),e.iGM(s=e.CRH())&&(n.sections=s)}},decls:45,vars:9,consts:[[1,"rest-intro"],[1,"snippet-description"],["id","module-name",1,"element-shadow"],[3,"ngClass",4,"ngFor","ngForOf"],["id","indicator"],["bar",""],["id","percent"],[4,"ngFor","ngForOf"],[1,"btn-group",3,"mouseover","mouseout"],["btnGroup",""],[3,"click",4,"ngFor","ngForOf"],[1,"snippet-description","item-margin"],[1,"code-preview"],[3,"ngClass"],["sections",""],["class","section-content",4,"ngIf"],[1,"section-content"],[1,"group"],["for","name"],["type","text","placeholder","Enter a name","id","name"],["for","occupation"],["type","text","placeholder","Your occupation","id","occupation"],["for","title"],["type","text","placeholder","Your title","id","title"],["for","city"],["type","text","placeholder","Your city","id","city"],["for","state"],["type","text","placeholder","Your state","id","state"],["for","zip"],["type","text","placeholder","Your zip code","id","zip"],[3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," I used in page navigation frequently while working at a former company. The owners often didn't want new pages for different sections. They didn't even want parameters appended to the url. Such as ?section=2. The result was to create unique methods of showing/ hiding content. This project is one such concept. Yes, it may be more cumbersome than the aforementioned, but development sometimes calls for creative solutions. "),e.qZA()(),e.TgZ(3,"div",2),e.YNc(4,M,7,7,"section",3),e._UZ(5,"div",4,5),e.TgZ(7,"div",6),e.YNc(8,A,2,1,"div",7),e.qZA(),e.TgZ(9,"div",8,9),e.NdJ("mouseover",function(){return n.showProgressBar()})("mouseout",function(){return n.hideProgressBar()}),e.YNc(11,U,2,1,"button",10),e.qZA()(),e.TgZ(12,"div",11),e._uU(13,' In the TypeScript file below, we retrieve a group of elements. @ViewChildren is akin to document.getElementsByClassName. Though it no doubt has many other uses. We retrieve the third line of the HTML, denoted by the "#sections" reference. Necessary to show & hide them. Next, btnGroup references the group of buttons.'),e._UZ(14,"br")(15,"br"),e._uU(16," This is a very dynamic component. Component in that we could simply pass the section count and inject HTML for the content. bar references the progress bar. currentSection for the only visible section. The progress array holds the percentage divs."),e._UZ(17,"br")(18,"br"),e._uU(19," Math is used to round the percentages. In turn a Math object is needed. Created in the constructor. Notice the first line of the ngAfterViewInit block. ChangeDetection is used because the values are changed during runtime compilation. The length of the bar is set here too. Also in the ngAfterViewInit hook grid columns are set, indicative of how many sections there are. Set by the sectionLength variable. Yes, set any number of sections, and an equal amount of buttons and sections render."),e._UZ(20,"br")(21,"br"),e._uU(22," The navigate fn sets the currentSection and the progress bar width. show & hideProgressBar functions adjust the bar opacity and height.\n"),e.qZA(),e.TgZ(23,"div",12)(24,"pre"),e._uU(25,"        "),e.TgZ(26,"code"),e._uU(27),e.qZA(),e._uU(28,"\n    "),e.qZA()(),e.TgZ(29,"div",11),e._uU(30," The markup below loops over an empty array. We use the constructor keyword to initialize the object and pass it the amount of sections. Hiding all but the current section via display none. ngIf unfortunately cannot be used on the same line as Angular restricts one template binding per element. Add the section headline. The progress bar equation is a clever way of accommodating any number. I'd imagine 2, 3, 4, or 5 is ideal. All of which work beautfully with this line. Divide 100 by the amount of sections. Round that number. Then multiple it by the section indice.\n"),e.qZA(),e.TgZ(31,"div",12)(32,"pre"),e._uU(33,"        "),e.TgZ(34,"code"),e._uU(35),e.qZA(),e._uU(36,"\n    "),e.qZA()(),e.TgZ(37,"div",12)(38,"pre"),e._uU(39,"        "),e.TgZ(40,"code"),e._uU(41),e.qZA(),e._uU(42,"\n    "),e.qZA()(),e.TgZ(43,"div",11),e._uU(44," I initially thought section content could be housed in a JSON file, but that's far too messy. We always want to create sustainable systems. Using a separate file for the content would definitely work. We could even remove the 'Section 1' and include that in that section content. Form groups would work here. Images, endpoints, etc. Whatever you decide to do, go for it. Angular is an immensely powerful framework with the ability to do nearly anything imaginable in the UI. Fork and customize. Make this in page navigation component your own!\n"),e.qZA()),2&o&&(e.xp6(4),e.Q6J("ngForOf",e.DdM(6,m).constructor(n.sectionLength)),e.xp6(4),e.Q6J("ngForOf",e.DdM(7,m).constructor(n.sectionLength)),e.xp6(3),e.Q6J("ngForOf",e.DdM(8,m).constructor(n.sectionLength)),e.xp6(16),e.Oqu(n.typescript),e.xp6(8),e.Oqu(n.markup),e.xp6(6),e.Oqu(n.style))},dependencies:[c.mk,c.sg,c.O5],styles:["#module-name[_ngcontent-%COMP%]{height:300px;border-radius:6px;margin-top:25px;position:relative;font-family:sans-serif;overflow:hidden}#module-name[_ngcontent-%COMP%]   #indicator[_ngcontent-%COMP%]{background-color:#313b3f;height:3px;position:absolute;bottom:0;transition:all .5s}#module-name[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:100%;background-color:#fff;border:1px solid #313b3f;border-radius:6px}#module-name[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{font-size:1.5em;width:100%;height:100%;text-transform:uppercase;color:#313b3f;padding:20px;box-sizing:border-box}#module-name[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]{font: 14px sans-serif;text-transform:none;display:grid;grid-template-columns:repeat(3,auto);max-width:500px;justify-content:center;grid-column-gap:10px;margin:40px auto 0}#module-name[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}#module-name[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:3px;color:#313b3f;box-sizing:border-box;outline:none}#module-name[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font: 12px sans-serif}.display-none[_ngcontent-%COMP%]{display:none}.btn-group[_ngcontent-%COMP%]{position:absolute;bottom:35px;left:0;right:0;text-align:center;display:grid;grid-column-gap:5px;width:calc(100% - 30px);margin:0 auto}.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 5px;background-color:#03658c;color:#fff;border:none;border-radius:6px;outline:none;cursor:pointer}#percent[_ngcontent-%COMP%]{display:flex;position:absolute;width:100%;bottom:3px;font: 13px sans-serif}#percent[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:33.3%;text-align:center;color:#d9a74a;opacity:0;transition:opacity .5s}@media screen and (max-width: 750px){#module-name[_ngcontent-%COMP%]{margin:10px}}@media screen and (max-width: 600px){#module-name[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]{grid-template-columns:none;font-size:12px;margin-top:5px;grid-template-rows:repeat(3,55px)}}"]})}class d{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-services"]],decls:2,vars:0,template:function(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"services works!"),e.qZA())}})}var O=r(7579),f=r(2722),P=r(4591),I=r(5885),k=r(981),S=r(9138),N=r(8828),W=r(3366);const q=["development"],L=["menuIcon"];function D(i,t){1&i&&(e.TgZ(0,"span",15),e._uU(1,"Home"),e.qZA())}function Y(i,t){1&i&&(e.TgZ(0,"span",16),e._uU(1,"\u276f"),e.qZA())}function F(i,t){1&i&&e._UZ(0,"app-dev-menu")}function J(i,t){1&i&&e._UZ(0,"app-right-column")}function E(i,t){1&i&&(e.TgZ(0,"div"),e._uU(1," As a frontend developer, I'm often called upon to work directly with designers, create my own designs, and/or refine UI designs. These pieces are several, rather old, designs/videos I created with Photoshop, Sketch, and After Effects."),e._UZ(2,"br")(3,"br"),e._uU(4," Today, I enjoy creating my own complex, data driven UIs. I enjoy adding unique details to each screen size, paying special attention to speed and performance."),e._UZ(5,"br")(6,"br"),e._uU(7," These days most anyone can create a backend solution. But good, responsive UI design is both hard to come by, and sometimes more challenging than coding. "),e.qZA())}function G(i,t){1&i&&(e.TgZ(0,"div"),e._UZ(1,"app-right-column"),e.qZA())}function Q(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"div",17),e.NdJ("click",function(s){e.CHM(o);const a=e.oxw();return e.KtG(a.pageClickHandler(s))}),e.YNc(1,E,8,0,"div",10),e.YNc(2,G,2,0,"div",10),e.qZA()}if(2&i){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.windowWidth>1100),e.xp6(1),e.Q6J("ngIf",o.windowWidth<1101)}}class p{constructor(t,o,n){this._windowWidth=t,this._devMenu=o,this._projectListService=n,this.destroy$=new O.x,this.threeColumnLayout=!1}ngOnInit(){this._windowWidth.currentWidth$.pipe((0,f.R)(this.destroy$)).subscribe(t=>{this.windowWidth=t}),this._projectListService.pageData$.pipe((0,f.R)(this.destroy$)).subscribe(t=>{this.pageTitle=t?.title,this.threeColumnLayout=t?.threeColumnLayout})}toggleDevMenu(){this.devMenuStatus=!this.devMenuStatus,this._devMenu.changeValue(this.devMenuStatus)}pageClickHandler(t){this._devMenu.devMenu&&t.target!=this.development.nativeElement&&this._devMenu.devMenu&&t.target!=this.menuIcon.nativeElement&&t.target.parentElement!=this.menuIcon.nativeElement&&this._devMenu.closeMenu()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#e=this.\u0275fac=function(o){return new(o||p)(e.Y36(P.R),e.Y36(I.p),e.Y36(k.h))};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["app-development"]],viewQuery:function(o,n){if(1&o&&(e.Gf(q,5),e.Gf(L,5)),2&o){let s;e.iGM(s=e.CRH())&&(n.development=s.first),e.iGM(s=e.CRH())&&(n.menuIcon=s.first)}},decls:27,vars:7,consts:[[1,"page-content"],[1,"details",3,"click"],[1,"page-title"],[1,"breadcrumbs"],["class","base-category",4,"ngIf"],["class","carrot",4,"ngIf"],[1,"active-crumb",3,"click"],["development",""],[1,"menu-icon"],["menuIcon",""],[4,"ngIf"],[3,"ngClass"],[1,"left-column",3,"click"],["class","middle-column",3,"click",4,"ngIf"],[1,"right-column",3,"click"],[1,"base-category"],[1,"carrot"],[1,"middle-column",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(a){return n.pageClickHandler(a)}),e.TgZ(2,"h1",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,D,2,0,"span",4),e.YNc(6,Y,2,0,"span",5),e.TgZ(7,"div",6),e.NdJ("click",function(){return n.toggleDevMenu()}),e.TgZ(8,"span",null,7),e._uU(10,"Development"),e.qZA(),e.TgZ(11,"span",8,9),e._UZ(13,"div")(14,"div")(15,"div"),e.qZA()()(),e.YNc(16,F,1,0,"app-dev-menu",10),e.qZA(),e.TgZ(17,"main",11)(18,"div",12),e.NdJ("click",function(a){return n.pageClickHandler(a)}),e._UZ(19,"app-post-details")(20,"router-outlet"),e.YNc(21,J,1,0,"app-right-column",10),e.qZA(),e.YNc(22,Q,3,2,"div",13),e.qZA(),e.TgZ(23,"div",14),e.NdJ("click",function(a){return n.pageClickHandler(a)}),e._UZ(24,"app-right-column"),e.qZA(),e.TgZ(25,"div",14),e.NdJ("click",function(a){return n.pageClickHandler(a)}),e._UZ(26,"app-right-column"),e.qZA()()),2&o&&(e.xp6(3),e.Oqu(n.pageTitle),e.xp6(2),e.Q6J("ngIf",n.windowWidth>768),e.xp6(1),e.Q6J("ngIf",n.windowWidth>768),e.xp6(10),e.Q6J("ngIf",n.devMenuStatus),e.xp6(1),e.Q6J("ngClass",n.threeColumnLayout?"three-column-layout":"two-column-layout"),e.xp6(4),e.Q6J("ngIf",n.windowWidth<769),e.xp6(1),e.Q6J("ngIf",n.threeColumnLayout))},dependencies:[c.mk,c.O5,u.lC,S.o,N.k,W.Z],encapsulation:2})}const z=[{path:"",component:p,children:[{path:"",redirectTo:"development",pathMatch:"full"},{path:"development",loadChildren:()=>Promise.all([r.e("common"),r.e("src_app_modules_cornerstone-development_cornerstone-development_module_ts")]).then(r.bind(r,2126)).then(i=>i.CornerstoneDevelopmentModule)},{path:"modules-in-angular",loadChildren:()=>r.e("src_app_modules_modules-in-angular_modules-in-angular_module_ts").then(r.bind(r,1716)).then(i=>i.ModulesInAngularModule)},{path:"in-page-navigation",component:l},{path:"services-in-angular",component:d},{path:"**",redirectTo:"development"}]}];class g{static#e=this.\u0275fac=function(o){return new(o||g)};static#t=this.\u0275mod=e.oAB({type:g});static#n=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(z),u.Bz]})}var j=r(4891),B=r(2271);class h{static#e=this.\u0275fac=function(o){return new(o||h)};static#t=this.\u0275mod=e.oAB({type:h});static#n=this.\u0275inj=e.cJS({imports:[c.ez,u.Bz,_.u5,B.m,g,j.A]})}}}]);