"use strict";(self.webpackChunkseaskyCMS=self.webpackChunkseaskyCMS||[]).push([[56],{1056:(D,m,o)=>{o.r(m),o.d(m,{EditRequirementsModule:()=>M});var z=o(4755),p=o(1195),c=o(5861),n=o(2223),E=o(131),Z=o(3272),d=o(5030),g=o(4259),_=o(2242),J=o(4247),f=o(4839),h=o(6681),C=o(1929),l=o(4701),u=o(8942),T=o(3355);function S(a,s){if(1&a){const t=n.EpF();n.TgZ(0,"button",24),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.edit())}),n._uU(1,"\u7de8\u96c6"),n.qZA()}}function q(a,s){if(1&a){const t=n.EpF();n.TgZ(0,"button",24),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.cancel())}),n._uU(1,"\u30ad\u30e3\u30f3\u30bb\u30eb"),n.qZA()}}const R=[{path:"",component:(()=>{class a{constructor(t,e,i){this.supabase=t,this.message=e,this.fb=i,this.id="",this.isLoading=!1,this.isEdit=!1,this.data={}}ngOnInit(){this.id="1",this.id&&this.getDetails(+this.id)}getDetails(t){var e=this;return(0,c.Z)(function*(){e.isLoading=!0;const{data:i,error:r}=yield e.supabase.get("requirements",t,!0);r&&e.message.error(r.message),console.log(i),e.data=i,e.isLoading=!1})()}onChange(t){console.log("onChange: ",t)}submitForm(){var t=this;return(0,c.Z)(function*(){t.isLoading=!0;const{error:e}=yield t.supabase.upsert("requirements",t.data);e?t.message.error(e.message):t.message.success("Success"),t.isLoading=!1})()}edit(){this.isEdit=!0}cancel(){this.isEdit=!1}}return a.\u0275fac=function(t){return new(t||a)(n.Y36(E.T),n.Y36(Z.dD),n.Y36(d.QS))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-edit-requirements"]],decls:79,vars:61,consts:[["nzHeader","\u4f8b","nzActive","false"],["src","assets/img/requirements.png",2,"width","100%","height","auto"],["nzHeader","\u30c7\u30fc\u30bf","nzActive","true"],[3,"nzSpinning"],[1,"header-wrap"],[1,"header-title"],["class","header-button","nz-button","","nzType","primary",3,"click",4,"ngIf"],[1,"content-wrap"],["nz-form",""],["nzRequired","","nzFor","kinds",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nzHeader","\u5c55\u958b\u3057\u307e\u3059","nzActive","false"],[2,"line-height","1.5 !important",3,"content","readonlyflag","contentChange"],["nzRequired","","nzFor","address",3,"nzSm","nzXs"],["nzRequired","","nzFor","hire",3,"nzSm","nzXs"],["nzRequired","","nzFor","payMethod",3,"nzSm","nzXs"],["nzRequired","","nzFor","workTime",3,"nzSm","nzXs"],["nzRequired","","nzFor","salary",3,"nzSm","nzXs"],["nzRequired","","nzFor","cert",3,"nzSm","nzXs"],["nzRequired","","nzFor","method",3,"nzSm","nzXs"],["nzRequired","","nzFor","recruitMethod",3,"nzSm","nzXs"],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary",3,"disabled","nzLoading","click"],["nz-button","","nzType","primary",1,"header-button",3,"click"]],template:function(t,e){1&t&&(n.TgZ(0,"nz-collapse")(1,"nz-collapse-panel",0),n._UZ(2,"img",1),n.qZA(),n.TgZ(3,"nz-collapse-panel",2)(4,"nz-spin",3)(5,"div",4),n._UZ(6,"div",5),n.YNc(7,S,2,0,"button",6),n.YNc(8,q,2,0,"button",6),n.qZA(),n._UZ(9,"nz-divider"),n.TgZ(10,"div",7)(11,"form",8)(12,"nz-form-item")(13,"nz-form-label",9),n._uU(14,"\u52df\u96c6\u8077\u7a2e"),n.qZA(),n.TgZ(15,"nz-form-control",10)(16,"nz-collapse")(17,"nz-collapse-panel",11)(18,"app-content-editor",12),n.NdJ("contentChange",function(r){return e.data.kinds=r}),n.qZA()()()()(),n.TgZ(19,"nz-form-item")(20,"nz-form-label",13),n._uU(21,"\u52e4\u52d9\u5730"),n.qZA(),n.TgZ(22,"nz-form-control",10)(23,"nz-collapse")(24,"nz-collapse-panel",11)(25,"app-content-editor",12),n.NdJ("contentChange",function(r){return e.data.address=r}),n.qZA()()()()(),n.TgZ(26,"nz-form-item")(27,"nz-form-label",14),n._uU(28,"\u96c7\u7528\u5f62\u614b"),n.qZA(),n.TgZ(29,"nz-form-control",10)(30,"nz-collapse")(31,"nz-collapse-panel",11)(32,"app-content-editor",12),n.NdJ("contentChange",function(r){return e.data.hire=r}),n.qZA()()()()(),n.TgZ(33,"nz-form-item")(34,"nz-form-label",15),n._uU(35,"\u7d66\u4e0e"),n.qZA(),n.TgZ(36,"nz-form-control",10)(37,"nz-collapse")(38,"nz-collapse-panel",11)(39,"app-content-editor",12),n.NdJ("contentChange",function(r){return e.data.payMethod=r}),n.qZA()()()()(),n.TgZ(40,"nz-form-item")(41,"nz-form-label",16),n._uU(42,"\u52e4\u52d9\u6642\u9593"),n.qZA(),n.TgZ(43,"nz-form-control",10)(44,"nz-collapse")(45,"nz-collapse-panel",11)(46,"app-content-editor",12),n.NdJ("contentChange",function(r){return e.data.workTime=r}),n.qZA()()()()(),n.TgZ(47,"nz-form-item")(48,"nz-form-label",17),n._uU(49,"\u5f85\u9047"),n.qZA(),n.TgZ(50,"nz-form-control",10)(51,"nz-collapse")(52,"nz-collapse-panel",11)(53,"app-content-editor",12),n.NdJ("contentChange",function(r){return e.data.salary=r}),n.qZA()()()()(),n.TgZ(54,"nz-form-item")(55,"nz-form-label",18),n._uU(56,"\u5fdc\u52df\u8cc7\u683c"),n.qZA(),n.TgZ(57,"nz-form-control",10)(58,"nz-collapse")(59,"nz-collapse-panel",11)(60,"app-content-editor",12),n.NdJ("contentChange",function(r){return e.data.cert=r}),n.qZA()()()()(),n.TgZ(61,"nz-form-item")(62,"nz-form-label",19),n._uU(63,"\u9078\u8003\u65b9\u6cd5"),n.qZA(),n.TgZ(64,"nz-form-control",10)(65,"nz-collapse")(66,"nz-collapse-panel",11)(67,"app-content-editor",12),n.NdJ("contentChange",function(r){return e.data.method=r}),n.qZA()()()()(),n.TgZ(68,"nz-form-item")(69,"nz-form-label",20),n._uU(70,"\u5fdc\u52df\u65b9\u6cd5"),n.qZA(),n.TgZ(71,"nz-form-control",10)(72,"nz-collapse")(73,"nz-collapse-panel",11)(74,"app-content-editor",12),n.NdJ("contentChange",function(r){return e.data.recruitMethod=r}),n.qZA()()()()(),n.TgZ(75,"nz-form-item",21)(76,"nz-form-control",22)(77,"button",23),n.NdJ("click",function(){return e.submitForm()}),n._uU(78,"\u4fdd\u5b58"),n.qZA()()()()()()()()),2&t&&(n.xp6(4),n.Q6J("nzSpinning",e.isLoading),n.xp6(3),n.Q6J("ngIf",!e.isEdit),n.xp6(1),n.Q6J("ngIf",e.isEdit),n.xp6(5),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("content",e.data.kinds)("readonlyflag",!e.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("content",e.data.address)("readonlyflag",!e.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("content",e.data.hire)("readonlyflag",!e.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("content",e.data.payMethod)("readonlyflag",!e.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("content",e.data.workTime)("readonlyflag",!e.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("content",e.data.salary)("readonlyflag",!e.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("content",e.data.cert)("readonlyflag",!e.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("content",e.data.method)("readonlyflag",!e.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("content",e.data.recruitMethod)("readonlyflag",!e.isEdit),n.xp6(2),n.Q6J("nzSpan",6)("nzOffset",6),n.xp6(1),n.Q6J("disabled",!(e.data.kinds&&e.data.address&&e.data.hire&&e.data.payMethod&&e.data.workTime&&e.data.salary&&e.data.cert&&e.data.method&&e.data.recruitMethod&&e.isEdit))("nzLoading",e.isLoading))},dependencies:[z.O5,d._Y,d.JL,g.ix,_.w,J.dQ,f.g,h.W,C.t3,C.SK,l.Lr,l.Nx,l.iK,l.Fd,u.Zv,u.yH,d.F,T.F]}),a})()}];let y=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[p.Bz.forChild(R),p.Bz]}),a})();var v=o(8397),Q=o(3247),F=o(2701),A=o(3068),X=o(4233);let M=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[z.ez,y,d.UX,v.o7,g.sL,f.S,Q.HQ,h.j,l.U5,F.PV,A.cS,u.cD,X.m]}),a})()}}]);