(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{KLU3:function(n,t,e){"use strict";e.d(t,"a",function(){return s}),e.d(t,"b",function(){return c});var i=e("8Y7J"),o=e("4th0"),a=e("lJxs"),r=e("ybRC");const s=new i.InjectionToken("Image loader handler",{factory:()=>n=>{const t=new FileReader,e=Object(o.q)(t).pipe(Object(a.a)(()=>String(t.result)));return t.readAsDataURL(n),e}}),c=new i.InjectionToken("Styles for WYSIWYG",{providedIn:"root",factory:()=>r.a})},"p/wY":function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(n){return n.UNDO="undo",n.SIZE="fontSize",n.BOLD="bold",n.ITALIC="italict",n.UNDERLINE="underline",n.STRIKETHROUGH="strikeThrough",n.ALIGN="justify",n.LIST="list",n.QUOTE="quote",n.COLOR="foreColor",n.HILITE="hiliteColor",n.CLEAR="clear",n.LINK="link",n.ATTACH="attach",n.TEX="tex",n.CODE="code",n.IMG="image",n.HR="insertHorizontalRule",n.SUP="superscript",n.SUB="subscript",n}({})},v6Tw:function(n,t,e){"use strict";e.r(t),e.d(t,"HowToPassExamModule",function(){return R});var i=e("SVse"),o=e("iInd"),a=e("8Y7J");let r=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=a["\u0275\u0275defineInjector"]({}),n})();var s=e("saFV"),c=e("XjSJ"),l=e("PggT"),p=e("VgWg"),u=e("2Vo4"),d=e("eIep");let m=(()=>{class n{constructor(n,t,e,i,o){this.passingExamService=n,this.examApiService=t,this.errorPage=e,this.router=i,this.postLoadProcessingService=o,this.examInfo$$=new u.a(null),this.examInfo$=this.examInfo$$.pipe(),this.showLoader$=this.passingExamService.showLoader$}initExamInfo(n){this.examInfo$$.next(n),this.courseId=null==n?void 0:n.courseId,this.examCourseId=null==n?void 0:n.id,n&&this.postLoadProcessingService.postInitHowToPassExamProcessing(n)}startExam(){this.examCourseId&&this.examApiService.startExam(this.examCourseId).pipe(Object(d.a)(()=>this.passingExamService.reloadExam(this.examCourseId))).subscribe({next:n=>{this.router.navigate(["/selection",this.courseId,"exam",this.examCourseId])},error:n=>this.errorPage.navigateToNotFoundPage()})}resetData(){this.examInfo$$.next(null),this.courseId=void 0,this.examCourseId=void 0}}return n.\u0275fac=function(t){return new(t||n)(a["\u0275\u0275inject"](s.a),a["\u0275\u0275inject"](p.a),a["\u0275\u0275inject"](l.a),a["\u0275\u0275inject"](o.g),a["\u0275\u0275inject"](c.a))},n.\u0275prov=a["\u0275\u0275defineInjectable"]({token:n,factory:n.\u0275fac,providedIn:r}),n})();var g=e("/JL3"),x=e("mdOT"),f=e("1G5W"),w=e("6VAR"),h=e("Kpi1"),y=e("MUNj"),b=e("9PZX"),I=e("WmoD");function v(n,t){if(1&n&&(a["\u0275\u0275elementStart"](0,"a",15),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&n){const n=t.ngIf;a["\u0275\u0275property"]("routerLink","/selection/"+(null==n?null:n.id)),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",null==n?null:n.title," ")}}function k(n,t){if(1&n&&(a["\u0275\u0275template"](0,v,2,2,"a",13),a["\u0275\u0275pipe"](1,"async"),a["\u0275\u0275elementStart"](2,"div",14),a["\u0275\u0275text"](3),a["\u0275\u0275elementEnd"]()),2&n){const n=a["\u0275\u0275nextContext"]().ngIf,t=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("ngIf",a["\u0275\u0275pipeBind1"](1,2,t.selectionService.selection$)),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](null==n||null==n.exam?null:n.exam.title)}}function C(n,t){}function E(n,t){if(1&n&&(a["\u0275\u0275elementStart"](0,"div",14),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&n){const n=a["\u0275\u0275nextContext"]().ngIf;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](null==n||null==n.exam?null:n.exam.title)}}function S(n,t){}function O(n,t){1&n&&(a["\u0275\u0275elementStart"](0,"div",16),a["\u0275\u0275elementStart"](1,"a",17),a["\u0275\u0275text"](2,"\u041a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u044b \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]())}function _(n,t){if(1&n){const n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"button",18),a["\u0275\u0275listener"]("click",function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"](2).onStartExam()}),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()}if(2&n){const n=a["\u0275\u0275nextContext"]().ngIf;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ","in_progress"===(null==n||null==n.meta?null:n.meta.status)?"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c":"\u041d\u0430\u0447\u0430\u0442\u044c \u044d\u043a\u0437\u0430\u043c\u0435\u043d"," ")}}function L(n,t){if(1&n&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275element"](1,"tui-mobile-menu",1),a["\u0275\u0275element"](2,"tui-navigation",2),a["\u0275\u0275template"](3,k,4,4,"ng-template",null,3,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275template"](5,C,0,0,"ng-template",null,4,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275template"](7,E,2,1,"ng-template",null,5,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275template"](9,S,0,0,"ng-template",null,6,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementStart"](11,"div",7),a["\u0275\u0275elementStart"](12,"div",8),a["\u0275\u0275element"](13,"tui-wysiwyg-socket",9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](14,O,3,0,"div",10),a["\u0275\u0275elementStart"](15,"div",11),a["\u0275\u0275template"](16,_,2,1,"button",12),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementContainerEnd"]()),2&n){const n=t.ngIf,e=a["\u0275\u0275reference"](4),i=a["\u0275\u0275reference"](6),o=a["\u0275\u0275reference"](8),r=a["\u0275\u0275reference"](10),s=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("leftContent",o)("rightContent",r),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("tertiary",!0)("leftContent",e)("rightContent",i),a["\u0275\u0275advance"](11),a["\u0275\u0275property"]("content",null==n||null==n.exam?null:n.exam.subDescription),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n||null==n.exam?null:n.exam.hasProgramTasks),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",s.showButton(null==n||null==n.meta?null:n.meta.status))}}const P=[{path:"",component:(()=>{class n{constructor(n,t,e,i){this.service=n,this.selectionService=t,this.passingExamService=e,this.destroy$=i}showButton(n){return"done"!==n}ngOnInit(){this.passingExamService.exam$.pipe(Object(f.a)(this.destroy$)).subscribe(n=>this.service.initExamInfo(n))}onStartExam(){this.service.startExam()}ngOnDestroy(){this.service.resetData()}}return n.\u0275fac=function(t){return new(t||n)(a["\u0275\u0275directiveInject"](m),a["\u0275\u0275directiveInject"](g.a),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](x.b))},n.\u0275cmp=a["\u0275\u0275defineComponent"]({type:n,selectors:[["app-how-to-pass-exam"]],features:[a["\u0275\u0275ProvidersFeature"]([x.b])],decls:2,vars:3,consts:[[4,"ngIf"],[1,"navigation",3,"leftContent","rightContent"],[1,"navigation",3,"tertiary","leftContent","rightContent"],["leftContent",""],["rightContent",""],["leftMobileContent",""],["rightMobileContent",""],[1,"tui-row","tui-row_adaptive"],[1,"tui-col_xs-12","tui-col_s-12","tui-col_sm-12","tui-col_md-7","tui-col_lg-8","info"],[3,"content"],["class","tui-col_xs-12 tui-col_s-12 tui-col_sm-12 tui-col_md-7 tui-col_lg-8 additional-info-link",4,"ngIf"],[1,"tui-col_xs-12","tui-col_s-12","tui-col_sm-12","tui-col_md-7","tui-col_lg-8","start-btn-wrapper"],["tuiButton","","type","button","class","start-btn","appearance","primary",3,"click",4,"ngIf"],["tuiBack","","class","back-link",3,"routerLink",4,"ngIf"],[1,"navigation-header"],["tuiBack","",1,"back-link",3,"routerLink"],[1,"tui-col_xs-12","tui-col_s-12","tui-col_sm-12","tui-col_md-7","tui-col_lg-8","additional-info-link"],["tuiLink","","routerLink","../../../../../programming-settings"],["tuiButton","","type","button","appearance","primary",1,"start-btn",3,"click"]],template:function(n,t){1&n&&(a["\u0275\u0275template"](0,L,17,8,"ng-container",0),a["\u0275\u0275pipe"](1,"async")),2&n&&a["\u0275\u0275property"]("ngIf",a["\u0275\u0275pipeBind1"](1,1,t.service.examInfo$))},directives:[i.o,w.a,w.b,h.a,y.a,o.j,b.a,I.b],pipes:[i.b],styles:["[_nghost-%COMP%]{display:block}@media screen and (max-width:599px){[_nghost-%COMP%]{margin-bottom:64px}}@media screen and (min-width:600px){[_nghost-%COMP%]{margin-bottom:128px}}@media screen and (max-width:599px){.navigation[_ngcontent-%COMP%]{padding:0 16px;margin:0 -16px;box-shadow:0 1px var(--tui-color-border);border:none;background-color:transparent}}@media screen and (min-width:600px){.navigation[_ngcontent-%COMP%]{margin:32px 0}}.back-link[_ngcontent-%COMP%]{display:block}@media screen and (max-width:599px){.navigation-header[_ngcontent-%COMP%]{font-weight:400;font-size:13px;font-family:var(--tui-text-font);line-height:20px}}@media screen and (min-width:600px){.navigation-header[_ngcontent-%COMP%]{font-weight:700;font-size:20px;font-family:var(--tui-heading-font);line-height:24px;letter-spacing:-.3px}}.navigation-button[_ngcontent-%COMP%]{color:var(--tui-base-06)}@media screen and (max-width:599px){.info[_ngcontent-%COMP%]{margin-top:24px}}.additional-info-link[_ngcontent-%COMP%]{margin-top:24px}.start-btn-wrapper[_ngcontent-%COMP%]{margin-top:32px}@media screen and (max-width:599px){.start-btn[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[o.k.forChild(P)],o.k]}),n})();var j=e("Qn1r");let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[i.c,T,w.c,y.b,I.a,h.b,b.b,r,j.b]]}),n})()},ybRC:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a});var i=e("p/wY");const o="/*TODO: Open source fonts*/\n/*@import 'https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=cyrillic';*/\n\nbody.tui-wysiwyg-socket {\n    margin: 0;\n    overflow: hidden;\n    padding: 0 16px 27px;\n}\n\n.tui-wysiwyg-socket {\n    display: block;\n    color: #333;\n    font-size: 15px;\n    font-family: tuiText, 'Roboto', sans-serif;\n    line-height: 24px;\n}\n\n.tui-wysiwyg-socket ul,\n.tui-wysiwyg-socket ol {\n    list-style-type: none;\n    margin: 16px 16px 16px 24px;\n    padding: 0;\n}\n\n.tui-wysiwyg-socket li {\n    margin: 16px 0;\n}\n\n.tui-wysiwyg-socket ul li:before {\n    content: '';\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    border-radius: 100%;\n    margin: 0 14px 1px -22px;\n    background-color: #ffdd2d;\n}\n\n.tui-wysiwyg-socket ol {\n    counter-reset: counter;\n}\n\n.tui-wysiwyg-socket ol li:before {\n    content: counter(counter) '.';\n    width: 24px;\n    margin: 0 12px 0 -24px;\n    counter-increment: counter;\n    color: #909090;\n}\n\n.tui-wysiwyg-socket pre {\n    white-space: pre-wrap;\n    border-radius: 4px;\n    margin: 16px 0;\n    padding: 12px 16px;\n    font-family: 'Courier', monospace;\n    color: #666666;\n    background-color: #f5f5f6;\n}\n\n.tui-wysiwyg-socket pre + pre {\n    margin-top: -29px;\n    padding-top: 0;\n}\n\n.tui-wysiwyg-socket blockquote {\n    margin: 20px 0 20px 24px !important;\n    padding-left: 17px !important;\n    border-left: 1px solid #cbcfd3 !important;\n}\n\n.tui-wysiwyg-socket p {\n    margin: 16px 0;\n}\n\n.tui-wysiwyg-socket a {\n    color: #3d7ab6;\n    text-decoration: none;\n    outline: none;\n}\n\n.tui-wysiwyg-socket a:hover {\n    color: #369;\n}\n\n.tui-wysiwyg-socket a:active {\n    color: #29527c;\n}\n\n.tui-wysiwyg-socket hr {\n    border: none;\n    border-top: 1px solid #e7e8ea;\n    margin: 16px 0;\n}\n\n.tui-wysiwyg-socket font[face='Courier New'] {\n    padding: 4px 8px;\n    border-radius: 4px;\n    background-color: #ecf1f7;\n    display: inline-block;\n    word-break: break-word;\n}\n\n.tui-wysiwyg-socket font[size='1'] {\n    font-size: 11px;\n    line-height: 16px;\n}\n\n.tui-wysiwyg-socket font[size='2'] {\n    font-size: 13px;\n    line-height: 20px;\n}\n\n.tui-wysiwyg-socket font[size='3'] {\n    font-size: 15px;\n    line-height: 24px;\n}\n\n.tui-wysiwyg-socket font[size='4'] {\n    font-size: 17px;\n    line-height: 24px;\n}\n\n.tui-wysiwyg-socket font[size='5'],\n.tui-wysiwyg-socket font[size='6'],\n.tui-wysiwyg-socket font[size='7'] {\n    display: block;\n    margin: 32px 0 16px;\n    font-family: tuiHeading, 'Roboto', sans-serif;\n}\n\n.tui-wysiwyg-socket font[size='5'] {\n    font-size: 24px;\n    line-height: 28px;\n}\n\n.tui-wysiwyg-socket font[size='6'] {\n    font-size: 30px;\n    line-height: 36px;\n}\n\n.tui-wysiwyg-socket font[size='7'] {\n    font-size: 40px;\n    line-height: 44px;\n}\n",a=[i.a.UNDO,i.a.SIZE,i.a.BOLD,i.a.ITALIC,i.a.UNDERLINE,i.a.ALIGN,i.a.LIST,i.a.QUOTE,i.a.LINK,i.a.COLOR,i.a.HILITE,i.a.CLEAR,i.a.STRIKETHROUGH,i.a.CODE,i.a.IMG,i.a.HR,i.a.SUP,i.a.SUB]}}]);