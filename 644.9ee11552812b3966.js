"use strict";(self.webpackChunkseaskyCMS=self.webpackChunkseaskyCMS||[]).push([[644],{644:(F,v,a)=>{a.r(v),a.d(v,{BasicModule:()=>S});var d=a(4755),o=a(1195),A=a(5861),l=a(5030),n=a(2223),P=a(131),z=a(3272),u=a(8397),p=a(1401),E=a(2242),B=a(4247),f=a(4839),g=a(6681),h=a(1929),m=a(4701),C=a(8942);function Z(r,e){if(1&r){const s=n.EpF();n.TgZ(0,"button",23),n.NdJ("click",function(){n.CHM(s);const i=n.oxw();return n.KtG(i.edit())}),n._uU(1,"\u7de8\u96c6"),n.qZA()}}function M(r,e){if(1&r){const s=n.EpF();n.TgZ(0,"button",23),n.NdJ("click",function(){n.CHM(s);const i=n.oxw();return n.KtG(i.cancel())}),n._uU(1,"\u30ad\u30e3\u30f3\u30bb\u30eb"),n.qZA()}}const O=[{path:"",component:(()=>{class r{constructor(s,t,i,c,_){this.router=s,this.route=t,this.supabase=i,this.message=c,this.fb=_,this.id="",this.isLoading=!1,this.isImgLoading=!1,this.isEdit=!1}ngOnInit(){this.id="1",this.form=this.fb.group({id:[null],created_at:[null],updated_at:[null],mail:[null,[l.kI.required]],phone:[null,[l.kI.required]],fax:[null,[l.kI.required]],zip:[null,[l.kI.required]],address:[null,[l.kI.required]]}),this.cancel(),this.id&&this.getDetails(+this.id)}getDetails(s){var t=this;return(0,A.Z)(function*(){t.isLoading=!0;const{data:i,error:c}=yield t.supabase.get("basic",s,!0);c&&t.message.error(c.message),console.log(i),t.form.setValue({...i}),t.isLoading=!1})()}onChange(s){console.log("onChange: ",s)}submitForm(){var s=this;return(0,A.Z)(function*(){if(s.form.valid){console.log(s.form.value);const{error:t}=yield s.supabase.upsert("basic",s.form.value);t?s.message.error(t.message):(s.message.success("Success"),s.cancel())}else Object.values(s.form.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})})()}edit(){this.isEdit=!0,this.form.controls.mail.enable(),this.form.controls.phone.enable(),this.form.controls.fax.enable(),this.form.controls.zip.enable(),this.form.controls.address.enable()}cancel(){this.isEdit=!1,this.form.controls.mail.disable(),this.form.controls.phone.disable(),this.form.controls.fax.disable(),this.form.controls.zip.disable(),this.form.controls.address.disable()}}return r.\u0275fac=function(s){return new(s||r)(n.Y36(o.F0),n.Y36(o.gz),n.Y36(P.T),n.Y36(z.dD),n.Y36(l.QS))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-basic"]],decls:41,vars:28,consts:[["nzHeader","\u4f8b","nzActive","false"],["src","assets/img/basic.png",2,"width","100%","height","auto"],["nzHeader","\u30c7\u30fc\u30bf","nzActive","true"],[3,"nzSpinning"],[1,"header-wrap"],[1,"header-title"],["class","header-button","nz-button","","nzType","primary",3,"click",4,"ngIf"],[1,"content-wrap"],["nz-form","",3,"formGroup","ngSubmit"],["nzRequired","","nzFor","mail",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","formControlName","mail","id","mail"],["nzRequired","","nzFor","phone",3,"nzSm","nzXs"],["nz-input","","formControlName","phone","id","phone"],["nzRequired","","nzFor","fax",3,"nzSm","nzXs"],["nz-input","","formControlName","fax","id","fax"],["nzRequired","","nzFor","zip",3,"nzSm","nzXs"],["nz-input","","formControlName","zip","id","zip"],["nzRequired","","nzFor","address",3,"nzSm","nzXs"],["nz-input","","formControlName","address","id","address"],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary",3,"disabled","nzLoading"],["nz-button","","nzType","primary",1,"header-button",3,"click"]],template:function(s,t){1&s&&(n.TgZ(0,"nz-collapse")(1,"nz-collapse-panel",0),n._UZ(2,"img",1),n.qZA(),n.TgZ(3,"nz-collapse-panel",2)(4,"nz-spin",3)(5,"div",4),n._UZ(6,"div",5),n.YNc(7,Z,2,0,"button",6),n.YNc(8,M,2,0,"button",6),n.qZA(),n._UZ(9,"nz-divider"),n.TgZ(10,"div",7)(11,"form",8),n.NdJ("ngSubmit",function(){return t.submitForm()}),n.TgZ(12,"nz-form-item")(13,"nz-form-label",9),n._uU(14,"\u30e1\u30fc\u30eb"),n.qZA(),n.TgZ(15,"nz-form-control",10),n._UZ(16,"input",11),n.qZA()(),n.TgZ(17,"nz-form-item")(18,"nz-form-label",12),n._uU(19,"\u96fb\u8a71"),n.qZA(),n.TgZ(20,"nz-form-control",10),n._UZ(21,"input",13),n.qZA()(),n.TgZ(22,"nz-form-item")(23,"nz-form-label",14),n._uU(24,"FAX"),n.qZA(),n.TgZ(25,"nz-form-control",10),n._UZ(26,"input",15),n.qZA()(),n.TgZ(27,"nz-form-item")(28,"nz-form-label",16),n._uU(29,"\u90f5\u4fbf\u756a\u53f7"),n.qZA(),n.TgZ(30,"nz-form-control",10),n._UZ(31,"input",17),n.qZA()(),n.TgZ(32,"nz-form-item")(33,"nz-form-label",18),n._uU(34,"\u30a2\u30c9\u30ec\u30b9"),n.qZA(),n.TgZ(35,"nz-form-control",10),n._UZ(36,"input",19),n.qZA()(),n.TgZ(37,"nz-form-item",20)(38,"nz-form-control",21)(39,"button",22),n._uU(40,"\u4fdd\u5b58"),n.qZA()()()()()()()()),2&s&&(n.xp6(4),n.Q6J("nzSpinning",t.isLoading),n.xp6(3),n.Q6J("ngIf",!t.isEdit),n.xp6(1),n.Q6J("ngIf",t.isEdit),n.xp6(3),n.Q6J("formGroup",t.form),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSpan",6)("nzOffset",6),n.xp6(1),n.Q6J("disabled",!t.isEdit)("nzLoading",t.isLoading||t.isImgLoading))},dependencies:[d.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,u.Zp,p.ix,E.w,B.dQ,f.g,g.W,h.t3,h.SK,m.Lr,m.Nx,m.iK,m.Fd,C.Zv,C.yH]}),r})()}];let D=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[o.Bz.forChild(O),o.Bz]}),r})();var x=a(3174),y=a(2701),T=a(3068);let S=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[d.ez,D,l.UX,u.o7,p.sL,f.S,x.HQ,g.j,m.U5,y.PV,T.cS,C.cD]}),r})()},8942:(F,v,a)=>{a.d(v,{Zv:()=>S,cD:()=>r,yH:()=>y});var d=a(7582),o=a(2223),A=a(4968),l=a(2722),n=a(9300),P=a(7169),z=a(9436),u=a(8982),p=a(4780),E=a(8930),B=a(6760),f=a(4755),g=a(2701),h=a(2643);const m=["*"],C=["collapseHeader"];function Z(e,s){if(1&e&&(o.ynx(0),o._UZ(1,"span",7),o.BQk()),2&e){const t=s.$implicit,i=o.oxw(2);o.xp6(1),o.Q6J("nzType",t||"right")("nzRotate",i.nzActive?90:0)}}function M(e,s){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,Z,2,2,"ng-container",3),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",t.nzExpandedIcon)}}function N(e,s){if(1&e&&(o.ynx(0),o._uU(1),o.BQk()),2&e){const t=o.oxw();o.xp6(1),o.Oqu(t.nzHeader)}}function O(e,s){if(1&e&&(o.ynx(0),o._uU(1),o.BQk()),2&e){const t=o.oxw(2);o.xp6(1),o.Oqu(t.nzExtra)}}function D(e,s){if(1&e&&(o.TgZ(0,"div",8),o.YNc(1,O,2,1,"ng-container",3),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",t.nzExtra)}}const x="collapse";let y=(()=>{class e{constructor(t,i,c,_){this.nzConfigService=t,this.cdr=i,this.directionality=c,this.destroy$=_,this._nzModuleName=x,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(x).pipe((0,l.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe((0,l.R)(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(t){this.listOfNzCollapsePanelComponent.push(t)}removePanel(t){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(t),1)}click(t){this.nzAccordion&&!t.nzActive&&this.listOfNzCollapsePanelComponent.filter(i=>i!==t).forEach(i=>{i.nzActive&&(i.nzActive=!1,i.nzActiveChange.emit(i.nzActive),i.markForCheck())}),t.nzActive=!t.nzActive,t.nzActiveChange.emit(t.nzActive)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(z.jY),o.Y36(o.sBO),o.Y36(E.Is,8),o.Y36(u.kn))},e.\u0275cmp=o.Xpm({type:e,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(t,i){2&t&&o.ekj("ant-collapse-icon-position-left","left"===i.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===i.nzExpandIconPosition)("ant-collapse-ghost",i.nzGhost)("ant-collapse-borderless",!i.nzBordered)("ant-collapse-rtl","rtl"===i.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[o._Bn([u.kn])],ngContentSelectors:m,decls:1,vars:0,template:function(t,i){1&t&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),(0,d.gn)([(0,z.oS)(),(0,p.yF)()],e.prototype,"nzAccordion",void 0),(0,d.gn)([(0,z.oS)(),(0,p.yF)()],e.prototype,"nzBordered",void 0),(0,d.gn)([(0,z.oS)(),(0,p.yF)()],e.prototype,"nzGhost",void 0),e})();const T="collapsePanel";let S=(()=>{class e{markForCheck(){this.cdr.markForCheck()}constructor(t,i,c,_,I,b){this.nzConfigService=t,this.ngZone=i,this.cdr=c,this.destroy$=_,this.nzCollapseComponent=I,this.noAnimation=b,this._nzModuleName=T,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new o.vpe,this.nzConfigService.getConfigChangeEventForComponent(T).pipe((0,l.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,A.R)(this.collapseHeader.nativeElement,"click").pipe((0,n.h)(()=>!this.nzDisabled),(0,l.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(z.jY),o.Y36(o.R0b),o.Y36(o.sBO),o.Y36(u.kn),o.Y36(y,1),o.Y36(B.P,8))},e.\u0275cmp=o.Xpm({type:e,selectors:[["nz-collapse-panel"]],viewQuery:function(t,i){if(1&t&&o.Gf(C,7),2&t){let c;o.iGM(c=o.CRH())&&(i.collapseHeader=c.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(t,i){2&t&&o.ekj("ant-collapse-no-arrow",!i.nzShowArrow)("ant-collapse-item-active",i.nzActive)("ant-collapse-item-disabled",i.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[o._Bn([u.kn])],ngContentSelectors:m,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(t,i){1&t&&(o.F$t(),o.TgZ(0,"div",0,1),o.YNc(2,M,2,1,"div",2),o.YNc(3,N,2,1,"ng-container",3),o.YNc(4,D,2,1,"div",4),o.qZA(),o.TgZ(5,"div",5)(6,"div",6),o.Hsn(7),o.qZA()()),2&t&&(o.uIk("aria-expanded",i.nzActive),o.xp6(2),o.Q6J("ngIf",i.nzShowArrow),o.xp6(1),o.Q6J("nzStringTemplateOutlet",i.nzHeader),o.xp6(1),o.Q6J("ngIf",i.nzExtra),o.xp6(1),o.ekj("ant-collapse-content-active",i.nzActive),o.Q6J("@.disabled",!(null==i.noAnimation||!i.noAnimation.nzNoAnimation))("@collapseMotion",i.nzActive?"expanded":"hidden"))},dependencies:[f.O5,g.Ls,h.f],encapsulation:2,data:{animation:[P.J_]},changeDetection:0}),(0,d.gn)([(0,p.yF)()],e.prototype,"nzActive",void 0),(0,d.gn)([(0,p.yF)()],e.prototype,"nzDisabled",void 0),(0,d.gn)([(0,z.oS)(),(0,p.yF)()],e.prototype,"nzShowArrow",void 0),e})(),r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[E.vT,f.ez,g.PV,h.T,B.g]}),e})()}}]);