"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[478],{8478:(i,t,p)=>{p.r(t),p.d(t,{salla_product_availability:()=>g});var _=p(6528),o=p(3863);const g=class{constructor(i){(0,_.r)(this,i),this.isUser=o.H.isUser(),this.productId=salla.config.get("page.id"),this.isSubscribed=!1,this.submit=async()=>{if(this.isUser)return salla.api.product.availabilitySubscribe(this.productId).then((()=>this.isSubscribed=!0));let{mobile:i,countryCode:t}=await this.mobileInput.getValues(),p={id:this.productId,country_code:t};return""!==i&&(p.mobile=i),""!==this.email.value&&(p.email=this.email.value),await this.validateform(),this.btn.load().then((()=>this.btn.disable())).then((()=>salla.api.product.availabilitySubscribe(p))).then((()=>{this.isSubscribed=!0,salla.storage.set(`product-${this.productId}-subscribed`,!0)})).then((()=>this.btn.stop())).then((()=>this.modal.hide())).catch((()=>this.btn.stop()&&this.btn.enable()))},this.typing=(i,t)=>{const p=i.target.nextElementSibling;i.target.classList.remove("s-has-error"),(null==p?void 0:p.classList.contains("s-product-availability-error-msg"))&&(p.innerText=""),"Enter"==i.key&&t()},salla.event.on("languages::translations.loaded",(()=>{var i,t,p,_;this.subscribedMessage=salla.lang.get("pages.products.notify_availability_success"),this.title_=this.host.title||salla.lang.get("pages.products.notify_availability_title"),this.subTitle=salla.lang.get("pages.products.notify_availability_subtitle"),this.mobileLabel=salla.lang.get("common.elements.mobile"),this.emailLabel=salla.lang.get("common.elements.email"),this.emailPlaceholder=salla.lang.get("common.elements.email_placeholder"),this.emailErrorMsg=salla.lang.get("common.elements.email_is_valid"),null===(i=this.modal)||void 0===i||i.setTitle(this.title_),null===(t=this.btn)||void 0===t||t.setText(salla.lang.get("common.elements.submit")),null===(p=this.cancelBtn)||void 0===p||p.setText(salla.lang.get("common.elements.cancel")),null===(_=this.inlineBtn)||void 0===_||_.setText(salla.lang.get("pages.products.notify_availability"))})),this.isUser||(this.channelsWatcher(this.channels),this.title_=this.host.title||salla.lang.get("pages.products.notify_availability_title"),this.host.removeAttribute("title"),this.isVisitorSubscribed=salla.storage.get(`product-${this.productId}-subscribed`))}channelsWatcher(i){this.channels_=i.split(",")}async validateform(){if(this.channels_.includes("email")){const i=o.H.isValidEmail(this.email.value);if(i)return;!i&&this.validateField(this.email,this.emailErrorMsg)}if(!this.channels_.includes("sms")||!await this.mobileInput.isValid())throw"Please insert required fields"}validateField(i,t){i.classList.add("s-has-error"),i.nextElementSibling.innerText="* "+t}render(){return(0,_.h)(_.H,{id:"s-product-availability"},this.isSubscribed||this.isVisitorSubscribed?(0,_.h)("div",{class:"s-product-availability-subscribed"},(0,_.h)("i",{class:"sicon-bell-ring s-product-availability-subs-icon"})," ",this.subscribedMessage):(0,_.h)("slot",null,(0,_.h)("salla-button",{onClick:()=>this.isUser?this.submit():this.modal.show(),wide:!0,ref:i=>this.inlineBtn=i},salla.lang.get("pages.products.notify_availability"))),this.isUser||this.isSubscribed||this.isVisitorSubscribed?"":this.renderModal())}renderModal(){return(0,_.h)("salla-modal",{ref:i=>this.modal=i,title:this.title_,subTitle:this.subTitle,icon:"sicon-bell-ring",width:"sm"},(0,_.h)("div",{class:"s-product-availability-body"},this.channels_.includes("email")?[(0,_.h)("label",{class:"s-product-availability-label"},this.emailLabel),(0,_.h)("input",{class:"s-product-availability-input",onKeyDown:i=>this.typing(i,this.submit),placeholder:this.emailPlaceholder,ref:i=>this.email=i,type:"email"}),(0,_.h)("span",{class:"s-product-availability-error-msg"})]:"",this.channels_.includes("sms")?[(0,_.h)("label",{class:"s-product-availability-label"},this.mobileLabel),(0,_.h)("salla-tel-input",{ref:i=>this.mobileInput=i,onKeyDown:i=>this.typing(i,this.submit)})]:""),(0,_.h)("div",{slot:"footer",class:"s-product-availability-footer"},(0,_.h)("salla-button",{wide:!0,"btn-style":"outline",onClick:()=>this.modal.hide(),ref:i=>this.cancelBtn=i},salla.lang.get("common.elements.cancel")),(0,_.h)("salla-button",{"loader-position":"center",wide:!0,ref:i=>this.btn=i,onClick:()=>this.submit()},salla.lang.get("common.elements.submit"))))}get host(){return(0,_.g)(this)}static get watchers(){return{channels:["channelsWatcher"]}}};g.style='.iti__flag{width:20px}.iti__flag.iti__be{width:18px}.iti__flag.iti__ch{width:15px}.iti__flag.iti__mc{width:19px}.iti__flag.iti__ne{width:18px}.iti__flag.iti__np{width:13px}.iti__flag.iti__va{width:15px}@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){.iti__flag{background-size:5652px 15px}}.iti__flag.iti__ac{height:10px;background-position:0px 0px}.iti__flag.iti__ad{height:14px;background-position:-22px 0px}.iti__flag.iti__ae{height:10px;background-position:-44px 0px}.iti__flag.iti__af{height:14px;background-position:-66px 0px}.iti__flag.iti__ag{height:14px;background-position:-88px 0px}.iti__flag.iti__ai{height:10px;background-position:-110px 0px}.iti__flag.iti__al{height:15px;background-position:-132px 0px}.iti__flag.iti__am{height:10px;background-position:-154px 0px}.iti__flag.iti__ao{height:14px;background-position:-176px 0px}.iti__flag.iti__aq{height:14px;background-position:-198px 0px}.iti__flag.iti__ar{height:13px;background-position:-220px 0px}.iti__flag.iti__as{height:10px;background-position:-242px 0px}.iti__flag.iti__at{height:14px;background-position:-264px 0px}.iti__flag.iti__au{height:10px;background-position:-286px 0px}.iti__flag.iti__aw{height:14px;background-position:-308px 0px}.iti__flag.iti__ax{height:13px;background-position:-330px 0px}.iti__flag.iti__az{height:10px;background-position:-352px 0px}.iti__flag.iti__ba{height:10px;background-position:-374px 0px}.iti__flag.iti__bb{height:14px;background-position:-396px 0px}.iti__flag.iti__bd{height:12px;background-position:-418px 0px}.iti__flag.iti__be{height:15px;background-position:-440px 0px}.iti__flag.iti__bf{height:14px;background-position:-460px 0px}.iti__flag.iti__bg{height:12px;background-position:-482px 0px}.iti__flag.iti__bh{height:12px;background-position:-504px 0px}.iti__flag.iti__bi{height:12px;background-position:-526px 0px}.iti__flag.iti__bj{height:14px;background-position:-548px 0px}.iti__flag.iti__bl{height:14px;background-position:-570px 0px}.iti__flag.iti__bm{height:10px;background-position:-592px 0px}.iti__flag.iti__bn{height:10px;background-position:-614px 0px}.iti__flag.iti__bo{height:14px;background-position:-636px 0px}.iti__flag.iti__bq{height:14px;background-position:-658px 0px}.iti__flag.iti__br{height:14px;background-position:-680px 0px}.iti__flag.iti__bs{height:10px;background-position:-702px 0px}.iti__flag.iti__bt{height:14px;background-position:-724px 0px}.iti__flag.iti__bv{height:15px;background-position:-746px 0px}.iti__flag.iti__bw{height:14px;background-position:-768px 0px}.iti__flag.iti__by{height:10px;background-position:-790px 0px}.iti__flag.iti__bz{height:14px;background-position:-812px 0px}.iti__flag.iti__ca{height:10px;background-position:-834px 0px}.iti__flag.iti__cc{height:10px;background-position:-856px 0px}.iti__flag.iti__cd{height:15px;background-position:-878px 0px}.iti__flag.iti__cf{height:14px;background-position:-900px 0px}.iti__flag.iti__cg{height:14px;background-position:-922px 0px}.iti__flag.iti__ch{height:15px;background-position:-944px 0px}.iti__flag.iti__ci{height:14px;background-position:-961px 0px}.iti__flag.iti__ck{height:10px;background-position:-983px 0px}.iti__flag.iti__cl{height:14px;background-position:-1005px 0px}.iti__flag.iti__cm{height:14px;background-position:-1027px 0px}.iti__flag.iti__cn{height:14px;background-position:-1049px 0px}.iti__flag.iti__co{height:14px;background-position:-1071px 0px}.iti__flag.iti__cp{height:14px;background-position:-1093px 0px}.iti__flag.iti__cr{height:12px;background-position:-1115px 0px}.iti__flag.iti__cu{height:10px;background-position:-1137px 0px}.iti__flag.iti__cv{height:12px;background-position:-1159px 0px}.iti__flag.iti__cw{height:14px;background-position:-1181px 0px}.iti__flag.iti__cx{height:10px;background-position:-1203px 0px}.iti__flag.iti__cy{height:14px;background-position:-1225px 0px}.iti__flag.iti__cz{height:14px;background-position:-1247px 0px}.iti__flag.iti__de{height:12px;background-position:-1269px 0px}.iti__flag.iti__dg{height:10px;background-position:-1291px 0px}.iti__flag.iti__dj{height:14px;background-position:-1313px 0px}.iti__flag.iti__dk{height:15px;background-position:-1335px 0px}.iti__flag.iti__dm{height:10px;background-position:-1357px 0px}.iti__flag.iti__do{height:14px;background-position:-1379px 0px}.iti__flag.iti__dz{height:14px;background-position:-1401px 0px}.iti__flag.iti__ea{height:14px;background-position:-1423px 0px}.iti__flag.iti__ec{height:14px;background-position:-1445px 0px}.iti__flag.iti__ee{height:13px;background-position:-1467px 0px}.iti__flag.iti__eg{height:14px;background-position:-1489px 0px}.iti__flag.iti__eh{height:10px;background-position:-1511px 0px}.iti__flag.iti__er{height:10px;background-position:-1533px 0px}.iti__flag.iti__es{height:14px;background-position:-1555px 0px}.iti__flag.iti__et{height:10px;background-position:-1577px 0px}.iti__flag.iti__eu{height:14px;background-position:-1599px 0px}.iti__flag.iti__fi{height:12px;background-position:-1621px 0px}.iti__flag.iti__fj{height:10px;background-position:-1643px 0px}.iti__flag.iti__fk{height:10px;background-position:-1665px 0px}.iti__flag.iti__fm{height:11px;background-position:-1687px 0px}.iti__flag.iti__fo{height:15px;background-position:-1709px 0px}.iti__flag.iti__fr{height:14px;background-position:-1731px 0px}.iti__flag.iti__ga{height:15px;background-position:-1753px 0px}.iti__flag.iti__gb{height:10px;background-position:-1775px 0px}.iti__flag.iti__gd{height:12px;background-position:-1797px 0px}.iti__flag.iti__ge{height:14px;background-position:-1819px 0px}.iti__flag.iti__gf{height:14px;background-position:-1841px 0px}.iti__flag.iti__gg{height:14px;background-position:-1863px 0px}.iti__flag.iti__gh{height:14px;background-position:-1885px 0px}.iti__flag.iti__gi{height:10px;background-position:-1907px 0px}.iti__flag.iti__gl{height:14px;background-position:-1929px 0px}.iti__flag.iti__gm{height:14px;background-position:-1951px 0px}.iti__flag.iti__gn{height:14px;background-position:-1973px 0px}.iti__flag.iti__gp{height:14px;background-position:-1995px 0px}.iti__flag.iti__gq{height:14px;background-position:-2017px 0px}.iti__flag.iti__gr{height:14px;background-position:-2039px 0px}.iti__flag.iti__gs{height:10px;background-position:-2061px 0px}.iti__flag.iti__gt{height:13px;background-position:-2083px 0px}.iti__flag.iti__gu{height:11px;background-position:-2105px 0px}.iti__flag.iti__gw{height:10px;background-position:-2127px 0px}.iti__flag.iti__gy{height:12px;background-position:-2149px 0px}.iti__flag.iti__hk{height:14px;background-position:-2171px 0px}.iti__flag.iti__hm{height:10px;background-position:-2193px 0px}.iti__flag.iti__hn{height:10px;background-position:-2215px 0px}.iti__flag.iti__hr{height:10px;background-position:-2237px 0px}.iti__flag.iti__ht{height:12px;background-position:-2259px 0px}.iti__flag.iti__hu{height:10px;background-position:-2281px 0px}.iti__flag.iti__ic{height:14px;background-position:-2303px 0px}.iti__flag.iti__id{height:14px;background-position:-2325px 0px}.iti__flag.iti__ie{height:10px;background-position:-2347px 0px}.iti__flag.iti__il{height:15px;background-position:-2369px 0px}.iti__flag.iti__im{height:10px;background-position:-2391px 0px}.iti__flag.iti__in{height:14px;background-position:-2413px 0px}.iti__flag.iti__io{height:10px;background-position:-2435px 0px}.iti__flag.iti__iq{height:14px;background-position:-2457px 0px}.iti__flag.iti__ir{height:12px;background-position:-2479px 0px}.iti__flag.iti__is{height:15px;background-position:-2501px 0px}.iti__flag.iti__it{height:14px;background-position:-2523px 0px}.iti__flag.iti__je{height:12px;background-position:-2545px 0px}.iti__flag.iti__jm{height:10px;background-position:-2567px 0px}.iti__flag.iti__jo{height:10px;background-position:-2589px 0px}.iti__flag.iti__jp{height:14px;background-position:-2611px 0px}.iti__flag.iti__ke{height:14px;background-position:-2633px 0px}.iti__flag.iti__kg{height:12px;background-position:-2655px 0px}.iti__flag.iti__kh{height:13px;background-position:-2677px 0px}.iti__flag.iti__ki{height:10px;background-position:-2699px 0px}.iti__flag.iti__km{height:12px;background-position:-2721px 0px}.iti__flag.iti__kn{height:14px;background-position:-2743px 0px}.iti__flag.iti__kp{height:10px;background-position:-2765px 0px}.iti__flag.iti__kr{height:14px;background-position:-2787px 0px}.iti__flag.iti__kw{height:10px;background-position:-2809px 0px}.iti__flag.iti__ky{height:10px;background-position:-2831px 0px}.iti__flag.iti__kz{height:10px;background-position:-2853px 0px}.iti__flag.iti__la{height:14px;background-position:-2875px 0px}.iti__flag.iti__lb{height:14px;background-position:-2897px 0px}.iti__flag.iti__lc{height:10px;background-position:-2919px 0px}.iti__flag.iti__li{height:12px;background-position:-2941px 0px}.iti__flag.iti__lk{height:10px;background-position:-2963px 0px}.iti__flag.iti__lr{height:11px;background-position:-2985px 0px}.iti__flag.iti__ls{height:14px;background-position:-3007px 0px}.iti__flag.iti__lt{height:12px;background-position:-3029px 0px}.iti__flag.iti__lu{height:12px;background-position:-3051px 0px}.iti__flag.iti__lv{height:10px;background-position:-3073px 0px}.iti__flag.iti__ly{height:10px;background-position:-3095px 0px}.iti__flag.iti__ma{height:14px;background-position:-3117px 0px}.iti__flag.iti__mc{height:15px;background-position:-3139px 0px}.iti__flag.iti__md{height:10px;background-position:-3160px 0px}.iti__flag.iti__me{height:10px;background-position:-3182px 0px}.iti__flag.iti__mf{height:14px;background-position:-3204px 0px}.iti__flag.iti__mg{height:14px;background-position:-3226px 0px}.iti__flag.iti__mh{height:11px;background-position:-3248px 0px}.iti__flag.iti__mk{height:10px;background-position:-3270px 0px}.iti__flag.iti__ml{height:14px;background-position:-3292px 0px}.iti__flag.iti__mm{height:14px;background-position:-3314px 0px}.iti__flag.iti__mn{height:10px;background-position:-3336px 0px}.iti__flag.iti__mo{height:14px;background-position:-3358px 0px}.iti__flag.iti__mp{height:10px;background-position:-3380px 0px}.iti__flag.iti__mq{height:14px;background-position:-3402px 0px}.iti__flag.iti__mr{height:14px;background-position:-3424px 0px}.iti__flag.iti__ms{height:10px;background-position:-3446px 0px}.iti__flag.iti__mt{height:14px;background-position:-3468px 0px}.iti__flag.iti__mu{height:14px;background-position:-3490px 0px}.iti__flag.iti__mv{height:14px;background-position:-3512px 0px}.iti__flag.iti__mw{height:14px;background-position:-3534px 0px}.iti__flag.iti__mx{height:12px;background-position:-3556px 0px}.iti__flag.iti__my{height:10px;background-position:-3578px 0px}.iti__flag.iti__mz{height:14px;background-position:-3600px 0px}.iti__flag.iti__na{height:14px;background-position:-3622px 0px}.iti__flag.iti__nc{height:10px;background-position:-3644px 0px}.iti__flag.iti__ne{height:15px;background-position:-3666px 0px}.iti__flag.iti__nf{height:10px;background-position:-3686px 0px}.iti__flag.iti__ng{height:10px;background-position:-3708px 0px}.iti__flag.iti__ni{height:12px;background-position:-3730px 0px}.iti__flag.iti__nl{height:14px;background-position:-3752px 0px}.iti__flag.iti__no{height:15px;background-position:-3774px 0px}.iti__flag.iti__np{height:15px;background-position:-3796px 0px}.iti__flag.iti__nr{height:10px;background-position:-3811px 0px}.iti__flag.iti__nu{height:10px;background-position:-3833px 0px}.iti__flag.iti__nz{height:10px;background-position:-3855px 0px}.iti__flag.iti__om{height:10px;background-position:-3877px 0px}.iti__flag.iti__pa{height:14px;background-position:-3899px 0px}.iti__flag.iti__pe{height:14px;background-position:-3921px 0px}.iti__flag.iti__pf{height:14px;background-position:-3943px 0px}.iti__flag.iti__pg{height:15px;background-position:-3965px 0px}.iti__flag.iti__ph{height:10px;background-position:-3987px 0px}.iti__flag.iti__pk{height:14px;background-position:-4009px 0px}.iti__flag.iti__pl{height:13px;background-position:-4031px 0px}.iti__flag.iti__pm{height:14px;background-position:-4053px 0px}.iti__flag.iti__pn{height:10px;background-position:-4075px 0px}.iti__flag.iti__pr{height:14px;background-position:-4097px 0px}.iti__flag.iti__ps{height:10px;background-position:-4119px 0px}.iti__flag.iti__pt{height:14px;background-position:-4141px 0px}.iti__flag.iti__pw{height:13px;background-position:-4163px 0px}.iti__flag.iti__py{height:11px;background-position:-4185px 0px}.iti__flag.iti__qa{height:8px;background-position:-4207px 0px}.iti__flag.iti__re{height:14px;background-position:-4229px 0px}.iti__flag.iti__ro{height:14px;background-position:-4251px 0px}.iti__flag.iti__rs{height:14px;background-position:-4273px 0px}.iti__flag.iti__ru{height:14px;background-position:-4295px 0px}.iti__flag.iti__rw{height:14px;background-position:-4317px 0px}.iti__flag.iti__sa{height:14px;background-position:-4339px 0px}.iti__flag.iti__sb{height:10px;background-position:-4361px 0px}.iti__flag.iti__sc{height:10px;background-position:-4383px 0px}.iti__flag.iti__sd{height:10px;background-position:-4405px 0px}.iti__flag.iti__se{height:13px;background-position:-4427px 0px}.iti__flag.iti__sg{height:14px;background-position:-4449px 0px}.iti__flag.iti__sh{height:10px;background-position:-4471px 0px}.iti__flag.iti__si{height:10px;background-position:-4493px 0px}.iti__flag.iti__sj{height:15px;background-position:-4515px 0px}.iti__flag.iti__sk{height:14px;background-position:-4537px 0px}.iti__flag.iti__sl{height:14px;background-position:-4559px 0px}.iti__flag.iti__sm{height:15px;background-position:-4581px 0px}.iti__flag.iti__sn{height:14px;background-position:-4603px 0px}.iti__flag.iti__so{height:14px;background-position:-4625px 0px}.iti__flag.iti__sr{height:14px;background-position:-4647px 0px}.iti__flag.iti__ss{height:10px;background-position:-4669px 0px}.iti__flag.iti__st{height:10px;background-position:-4691px 0px}.iti__flag.iti__sv{height:12px;background-position:-4713px 0px}.iti__flag.iti__sx{height:14px;background-position:-4735px 0px}.iti__flag.iti__sy{height:14px;background-position:-4757px 0px}.iti__flag.iti__sz{height:14px;background-position:-4779px 0px}.iti__flag.iti__ta{height:10px;background-position:-4801px 0px}.iti__flag.iti__tc{height:10px;background-position:-4823px 0px}.iti__flag.iti__td{height:14px;background-position:-4845px 0px}.iti__flag.iti__tf{height:14px;background-position:-4867px 0px}.iti__flag.iti__tg{height:13px;background-position:-4889px 0px}.iti__flag.iti__th{height:14px;background-position:-4911px 0px}.iti__flag.iti__tj{height:10px;background-position:-4933px 0px}.iti__flag.iti__tk{height:10px;background-position:-4955px 0px}.iti__flag.iti__tl{height:10px;background-position:-4977px 0px}.iti__flag.iti__tm{height:14px;background-position:-4999px 0px}.iti__flag.iti__tn{height:14px;background-position:-5021px 0px}.iti__flag.iti__to{height:10px;background-position:-5043px 0px}.iti__flag.iti__tr{height:14px;background-position:-5065px 0px}.iti__flag.iti__tt{height:12px;background-position:-5087px 0px}.iti__flag.iti__tv{height:10px;background-position:-5109px 0px}.iti__flag.iti__tw{height:14px;background-position:-5131px 0px}.iti__flag.iti__tz{height:14px;background-position:-5153px 0px}.iti__flag.iti__ua{height:14px;background-position:-5175px 0px}.iti__flag.iti__ug{height:14px;background-position:-5197px 0px}.iti__flag.iti__um{height:11px;background-position:-5219px 0px}.iti__flag.iti__un{height:14px;background-position:-5241px 0px}.iti__flag.iti__us{height:11px;background-position:-5263px 0px}.iti__flag.iti__uy{height:14px;background-position:-5285px 0px}.iti__flag.iti__uz{height:10px;background-position:-5307px 0px}.iti__flag.iti__va{height:15px;background-position:-5329px 0px}.iti__flag.iti__vc{height:14px;background-position:-5346px 0px}.iti__flag.iti__ve{height:14px;background-position:-5368px 0px}.iti__flag.iti__vg{height:10px;background-position:-5390px 0px}.iti__flag.iti__vi{height:14px;background-position:-5412px 0px}.iti__flag.iti__vn{height:14px;background-position:-5434px 0px}.iti__flag.iti__vu{height:12px;background-position:-5456px 0px}.iti__flag.iti__wf{height:14px;background-position:-5478px 0px}.iti__flag.iti__ws{height:10px;background-position:-5500px 0px}.iti__flag.iti__xk{height:15px;background-position:-5522px 0px}.iti__flag.iti__ye{height:14px;background-position:-5544px 0px}.iti__flag.iti__yt{height:14px;background-position:-5566px 0px}.iti__flag.iti__za{height:14px;background-position:-5588px 0px}.iti__flag.iti__zm{height:14px;background-position:-5610px 0px}.iti__flag.iti__zw{height:10px;background-position:-5632px 0px}.iti__flag{height:15px;box-shadow:0px 0px 1px 0px #888;background-image:url("https://intl-tel-input.com/node_modules/intl-tel-input/build/img/flags.png");background-repeat:no-repeat;background-color:#f5f7f9;background-position:20px 0}@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){.iti__flag{background-image:url("https://intl-tel-input.com/node_modules/intl-tel-input/build/img/flags@2x.png")}}.iti__flag.iti__np{background-color:transparent}'},3863:(i,t,p)=>{p.d(t,{H:()=>o}),salla.event.setMaxListeners(20);class _ extends salla.AppHelpers{setHost(i){this.host=i}getElement(i){return this.host.querySelector(i)}getAttribute(i,t){var p;return null===(p=this.getElement(i))||void 0===p?void 0:p.getAttribute(t)}val(i){return this.getAttribute(i,"value")}isUser(){return"user"===salla.config.get("user.type")}}const o=new _}}]);