(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{35430:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(67294),i=n(9473),s=n(3283),r=n.n(s),o=n(76509),l=n(53525),c=n(25675),d=n.n(c),u=n(50029),h=n(87794),m=n.n(h),x=n(32975),p=function(e){return{type:"FETCH_DATA_FAILED",payload:e}},f=n(57592),v=n(33065),g=n(69415),b=n(9008),y=n(41664),w=n.n(y),j=n(21190),N=n(85893),S=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.general})),n=(0,a.useState)(!1),s=n[0],r=n[1];(0,a.useEffect)((function(){var e="true"===sessionStorage.getItem("markAlreadyClicked");r(e)}),[]);return(0,N.jsx)("div",{className:"absolute flex justify-center z-20 transition-all duration-300 select-none p-inherit "+(t.botCurrentSpeech||t.botToggled?"-bottom-[14vh]":"-bottom-[18vh] animate-bounce"),children:(0,N.jsxs)(j.M,{children:[(0,N.jsx)(f.E.div,{className:"z-30 drop-shadow-mark h-[30vh] w-[13.5vh] transition-all duration-500 select-none p-inherit ",children:(0,N.jsx)(d(),{title:"Mark Bot",src:"/images/mark.png",layout:"fill",objectFit:"contain",className:"cursor-pointer",onClick:function(){t.botCurrentSpeech?e((0,v.$i)()):(s||(r(!0),sessionStorage.setItem("markAlreadyClicked","true")),e((0,v.t9)()))}})},"mark-image"),t.botCurrentSpeech&&!t.botToggled&&(0,N.jsxs)(f.E.div,{exit:{scale:0},initial:{scale:0},animate:{scale:1,transformOrigin:"bottom left",transition:{duration:.3,delay:.5,ease:"easeInOut"}},className:"left-5 md:left-10 z-10 w-max max-w-[16rem] md:max-w-[20rem] lg:max-w-[24rem] flex flex-col justify-center items-center absolute bottom-[33vh] text-gray-900",children:[(0,N.jsx)("div",{className:"mt-[3vh] md:mt-[5vh] -z-10 absolute w-full h-full overflow-hidden select-none text-bubble",children:(0,N.jsx)(d(),{src:"/images/text-bubble.png",layout:"fill",objectFit:"fill"})}),(0,N.jsx)("p",{className:"z-10 p-[5vh] md:p-[5vh] text-center w-full text-xs md:text-sm "+(t.botCurrentSpeech.isError?" text-red-500":" text-black"),children:t.botCurrentSpeech.message})]},"text-bubble"),!s&&!t.botCurrentSpeech&&(0,N.jsx)(f.E.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1,scale:[0,2,1],transition:{duration:.5}},className:"z-10 p-[2vh] flex items-center justify-center text-center absolute bottom-[32vh]",children:(0,N.jsx)("div",{className:"h-[5vh] w-[1vh] lg:h-[10vh] lg:w-[6vh]  flex items-center exclamation-mark cursor-pointer",children:(0,N.jsx)(d(),{src:"/images/exclamation-mark.png",layout:"fill",objectFit:"contain"})})},"exclamation-mark"),(0,N.jsx)(f.E.div,{className:"z-20 p-5 left-0 md:left-auto w-auto flex flex-col space-y-[2vh] justify-center absolute bottom-[31vh] text-gray-900",children:(0,N.jsx)(j.M,{children:t.botToggled&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(f.E.div,{className:"flex md:justify-center space-x-[2vh] z-10",children:[(0,N.jsx)(f.E.a,{href:"https://twitter.com/MinerVerseNFT",target:"_blank",rel:"noopener noreferrer",variants:{hidden:{opacity:0,translateY:100,zIndex:-7,transition:{delay:.2,duration:.1}},show:{opacity:1,translateY:0,zIndex:-6,transition:{delay:.4,duration:.4}}},exit:"hidden",initial:"hidden",animate:"show",whileHover:{scale:1.1},className:"relative w-[50px] h-[50px] cursor-pointer twitter-button",children:(0,N.jsx)(d(),{src:"/images/twitter-icon.png",layout:"fill",objectFit:"contain"})},"twitter-button"),(0,N.jsx)(f.E.a,{href:"https://discord.gg/2hVNsWRaJV",target:"_blank",rel:"noopener noreferrer",variants:{hidden:{opacity:0,translateY:100,zIndex:-8,transition:{delay:.1,duration:.1}},show:{opacity:1,translateY:0,zIndex:-7,transition:{delay:.6,duration:.4}}},exit:"hidden",initial:"hidden",animate:"show",whileHover:{scale:1.1},className:"relative w-[50px] h-[50px] cursor-pointer discord-button",children:(0,N.jsx)(d(),{src:"/images/discord-icon.png",layout:"fill",objectFit:"contain"})},"discord-button")]}),(0,N.jsx)(f.E.div,{variants:{hidden:{opacity:0,translateY:100,zIndex:10,transition:{delay:.3,duration:.1}},show:{opacity:1,translateY:0,zIndex:11,transition:{delay:.2,duration:.4}}},onClick:function(){e((0,v.t9)())},exit:"hidden",initial:"hidden",animate:"show",whileHover:{scale:1.1},className:"h-[50px] flex items-center whitelist-button cursor-pointer",children:(0,N.jsx)(w(),{href:"/whitepaper",children:(0,N.jsx)("div",{className:"h-[50px] w-[180px] flex items-center whitelist-button cursor-pointer",children:(0,N.jsx)(d(),{src:"/images/whitepaper-button.png",layout:"fill",objectFit:"contain"})})})},"whitepaper-button")]})})})]})})},k=n(11163),E=function(){var e=(0,i.I0)(),t=(0,k.useRouter)(),n=(0,i.v9)((function(e){return e.blockchain})),s=(0,i.v9)((function(e){return e.contractData})),c=(0,i.v9)((function(e){return e.general})),h=(0,a.useState)(""),y=h[0],w=h[1],j=(0,a.useState)(0),E=j[0],C=j[1],_=["Price: ".concat(r().utils.fromWei(s.price)," ").concat(o.$.nativeCurrency.symbol),"Total Supply: ".concat(1e4," Miners"),"Presale Supply: ".concat(500," Miners"),"".concat(s.superPercentage,"% chance to mint a Super Miner")];(0,a.useEffect)((function(){}),[]);(0,a.useEffect)((function(){e(function(){var e=(0,u.Z)(m().mark((function e(t){var n,a,i,s,r,o,l,c,d,u,h,f,v;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.h.getState().blockchain.minerContract;case 3:if(!(n=e.sent)){e.next=51;break}return e.next=7,null===n||void 0===n?void 0:n.methods.BASE_SUPER_PERCENTAGE().call();case 7:return a=e.sent,e.next=10,null===n||void 0===n?void 0:n.methods.MAX_PER_MINT().call();case 10:return i=e.sent,e.next=13,null===n||void 0===n?void 0:n.methods.NFT_TAX().call();case 13:return s=e.sent,e.next=16,null===n||void 0===n?void 0:n.methods.baseSupply().call();case 16:return r=e.sent,e.next=19,null===n||void 0===n?void 0:n.methods.presaleSupply().call();case 19:return o=e.sent,e.next=22,null===n||void 0===n?void 0:n.methods.MAX_BASE_SUPPLY().call();case 22:return l=e.sent,e.next=25,null===n||void 0===n?void 0:n.methods.MAX_PRESALE_SUPPLY().call();case 25:return c=e.sent,e.next=28,null===n||void 0===n?void 0:n.methods.totalSupply().call();case 28:return d=e.sent,e.next=31,null===n||void 0===n?void 0:n.methods.presaleOpen().call();case 31:return u=e.sent,e.next=34,null===n||void 0===n?void 0:n.methods.baseSalesOpen().call();case 34:return h=e.sent,e.next=37,null===n||void 0===n?void 0:n.methods.gameStarted().call();case 37:if(f=e.sent,v=0,!h){e.next=45;break}return e.next=42,null===n||void 0===n?void 0:n.methods.BASE_MINT_PRICE().call();case 42:v=e.sent,e.next=48;break;case 45:return e.next=47,null===n||void 0===n?void 0:n.methods.PRESALE_MINT_PRICE().call();case 47:v=e.sent;case 48:t({type:"FETCH_DATA_SUCCESS",payload:{superPercentage:parseFloat(a),maxPerMint:parseInt(i),nftTax:s,baseSupply:parseInt(r),presaleSupply:parseInt(o),maxBaseSupply:parseInt(l),maxPresaleSupply:parseInt(c),maxTotalSupply:parseInt(l)+parseInt(c),totalSupply:d,presaleOpen:u,baseSalesOpen:h,gameStarted:f,price:v}}),e.next=52;break;case 51:t(p({errorMsg:"Smart contract doesn't exist"}));case 52:e.next=58;break;case 54:e.prev=54,e.t0=e.catch(0),console.log(e.t0),t(p({errorMsg:e.t0}));case 58:case"end":return e.stop()}}),e,null,[[0,54]])})));return function(t){return e.apply(this,arguments)}}())}),[n.minerContract]),(0,a.useEffect)((function(){var t;w(""),n.account&&e((t=n.account,function(){var e=(0,u.Z)(m().mark((function e(n){var a,i;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.h.getState().blockchain.minerContract;case 3:if(!(a=e.sent)){e.next=11;break}return e.next=7,null===a||void 0===a?void 0:a.methods.isWhiteListed(t).call();case 7:i=e.sent,n({type:"UPDATE_IS_WHITELISTED",payload:{isWhiteListed:i}}),e.next=12;break;case 11:n(p({errorMsg:"Smart contract doesn't exist"}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),n(p({errorMsg:e.t0}));case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()))}),[n.account,n.network]),(0,a.useEffect)((function(){C(""!==y?parseFloat(s.price)*parseFloat(y)+parseFloat(s.nftTax):0)}),[y]);var M=function(){return!s.gameStarted&&(!!s.baseSalesOpen||!(!s.presaleOpen||!s.isWhiteListed))};return(0,N.jsxs)("div",{className:"relative overflow-hidden h-screen w-screen max-w-[100vw] px-0 md:px-10 lg:px-16 xl:px-24",children:[(0,N.jsx)(b.default,{children:(0,N.jsx)("title",{children:"Home | MinerVerse"})}),!c.isLoading&&(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(f.E.section,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1,transition:{duration:.6,delay:.1}},className:"mint-section text-gray-400 body-font relative bottom-0",children:[!c.isLoading&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"parchment-frame absolute z-10 overflow-hidden select-none drop-shadow-parchment-stand",children:(0,N.jsx)(d(),{src:"/images/parchment-frame.png",layout:"fill",objectFit:"fill"})}),(0,N.jsxs)("div",{className:"parchment-content relative text-gray-900 rounded-xl flex justify-center z-10",children:[(0,N.jsx)("div",{className:"parchment-image-container absolute -z-10 w-full h-full overflow-hidden select-none drop-shadow-parchment",children:(0,N.jsx)(d(),{src:"/images/parchment.png",layout:"fill",objectFit:"fill"})}),(0,N.jsxs)("div",{className:"flex flex-col h-full mint-container",children:[(0,N.jsx)("h2",{className:"text-center font-bold rounded-t-xl",children:(0,N.jsx)("span",{children:"Mint Miners"})}),(0,N.jsx)("div",{className:"relative text-md flex items-center justify-center section",children:(0,N.jsx)("div",{className:"relative image",children:(0,N.jsx)(d(),{src:"/images/MinerTrio.png",objectFit:"contain",layout:"fill"})})}),(0,N.jsxs)("div",{className:"relative section",children:[(0,N.jsx)("div",{className:"flex justify-end",children:(0,N.jsx)("p",{className:"font-medium text-gray-900",children:"- / -"})}),(0,N.jsx)("div",{className:"w-full bg-yellow-900 rounded-full progress",children:(0,N.jsx)("div",{className:"bg-green-500 h-full rounded-full",style:{width:"0%"}})})]}),(0,N.jsxs)("div",{className:"relative flex flex-col section",children:[(0,N.jsxs)("label",{htmlFor:"quantity",className:"text-gray-900 flex justify-between",children:[(0,N.jsx)("span",{className:"font-bold",children:"Quantity"}),(0,N.jsxs)("span",{className:"tracking-widest",children:["MAX ( ",s.maxPerMint," )"]})]}),(0,N.jsx)("input",{disabled:!M(),title:s.isWhiteListed||!s.baseSalesOpen?"":"You're not whitelisted",type:"text",id:"quantity",name:"quantity",min:0,max:s.maxPerMint,onSelect:function(e){"0"===y&&w("")},value:y,onChange:function(e){var t=e.target,n=t.value,a=t.min,i=t.max;isNaN(n)?w(""):(n=Math.max(Number(a),Math.min(Number(i),Number(n))).toString(),w("0"===n?"":n))},placeholder:"Max ".concat(s.maxPerMint," at a time"),className:"w-full text-center disabled:cursor-not-allowed placeholder:text-gray-700 bg-zinc-400 bg-opacity-20 focus:bg-transparent focus:ring-2 rounded border-gray-600 outline-none transition-colors duration-200 ease-in-out"})]}),(0,N.jsxs)("div",{className:"section font-bold",children:[(0,N.jsxs)("div",{className:"relative tracking-widest flex justify-between",children:[(0,N.jsx)("h5",{children:"NFT Tax"}),(0,N.jsx)("h5",{children:0===E?"--":r().utils.fromWei(s.nftTax)+" AVAX"})]}),(0,N.jsxs)("div",{className:"relative tracking-widest flex justify-between",children:[(0,N.jsx)("h4",{children:"Total"}),(0,N.jsxs)("h4",{children:[0===E?"--":r().utils.fromWei(E.toString())+" AVAX"," "]})]})]}),(0,N.jsx)("div",{className:"relative flex flex-col section",children:n.hasMetaMask?n.account?(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("button",{disabled:!!n.isRightNetwork&&!M(),onClick:function(){n.isRightNetwork?setTimeout((function(){var t;if(o.e1.whitelistOnly&&!o.e1.whitelistedWallets.find((function(e){var t;return e.toLowerCase()===(null===(t=n.account)||void 0===t?void 0:t.toLowerCase())||""})))e((0,v.hc)("Woah there, game is still in development, you're not allowed to enter yet!"));else if(""===y&&e((0,v.hc)("Please enter a quantity (0-".concat(s.maxPerMint,")"))),n.minerContract&&n.account&&""!==y)if(s.baseSalesOpen)null===(t=n.minerContract)||void 0===t||t.methods.mintBase(parseInt(y)).send({gasLimit:String(7e6),to:o.q7.miner,from:n.account,value:E}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(t){e((0,v.zn)("Requesting ".concat(y," ").concat("1"===y?"miner":"miners","... Please wait"))),console.log(t)})).once("receipt",(function(t){e((0,v.zn)("Your ".concat("1"===y?"miner has":"miners have"," arrived!"))),console.log(t)})).on("error",(function(t){e((0,v.hc)("Oh no! Your ".concat("1"===y?"miner":"miners"," couldn't make it!"))),console.log(t)})).then((function(t){n.account&&e((0,l.cr)(n.account)),e((0,v.V_)({isError:!1,key:"Transaction-"+t.transactionHash,hash:t.transactionHash,link:"https://testnet.snowtrace.io/tx/".concat(t.transactionHash)})),console.log(t)}));else if(s.presaleOpen&&s.isWhiteListed){var a;null===(a=n.minerContract)||void 0===a||a.methods.presaleMintBase(parseInt(y)).send({gasLimit:String(7e6),to:o.q7.miner,from:n.account,value:E}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(t){e((0,v.zn)("Requesting ".concat(y," ").concat("1"===y?"miner":"miners","... Please wait"))),console.log(t)})).once("receipt",(function(t){e((0,v.zn)("Your ".concat("1"===y?"miner has":"miners have"," arrived!"))),console.log(t)})).on("error",(function(t){e((0,v.hc)("Oh no! Your ".concat("1"===y?"miner":"miners"," couldn't make it!"))),console.log(t)})).then((function(t){n.account&&e((0,l.cr)(n.account)),e((0,v.V_)({isError:!1,key:"Transaction-"+t.transactionHash,hash:t.transactionHash,link:"https://testnet.snowtrace.io/tx/".concat(t.transactionHash)})),console.log(t.transactionHash)})).catch((function(e){console.log(e)}))}}),100):(0,l.If)()},title:!s.isWhiteListed&&s.baseSalesOpen&&n.isRightNetwork?"You're not whitelisted":"",className:"w-full text-white text-shadow-white font-bold border-0 disabled:cursor-not-allowed focus:outline-none rounded shadow-center-lg "+(n.isRightNetwork?"bg-cyan-400  hover:bg-cyan-500 disabled:hover:bg-cyan-400 shadow-cyan-400":" bg-red-600 cursor-pointer shadow-red-700"),children:n.isRightNetwork?"Mint":"Switch Network \ud83d\udd3a"})}):(0,N.jsx)("button",{onClick:function(){e((0,l.$j)())},className:"w-full bg-cyan-400 hover:bg-cyan-500 shadow-center-lg shadow-cyan-500 font-semibold text-gray-900 rounded-lg",children:"Connect Wallet"}):(0,N.jsx)(g.G,{})}),(0,N.jsxs)("div",{className:"relative flex flex-col section",children:[(0,N.jsx)("h3",{className:"font-bold text-center",children:"Sale Details"}),_.map((function(e,t){return(0,N.jsxs)("p",{className:"flex justify-between text-center",children:[(0,N.jsx)("span",{children:"\ud83d\udc8e"}),(0,N.jsx)("span",{children:e}),(0,N.jsx)("span",{children:"\ud83d\udc8e"})]},t)}))]})]})]})]}),(0,N.jsxs)(f.E.div,{initial:{opacity:0,translateY:400},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5}},className:"flex justify-between w-full absolute bottom-10 z-20",children:[(0,N.jsx)("div",{className:"relative",children:(0,N.jsx)(S,{})}),(0,N.jsxs)(f.E.button,{initial:{opacity:0},animate:{opacity:1},whileHover:{scale:1.1},className:"play-button z-30 transition-all drop-shadow-arrow",onClick:function(){o.e1.whitelistOnly&&!o.e1.whitelistedWallets.find((function(e){var t;return e.toLowerCase()===(null===(t=n.account)||void 0===t?void 0:t.toLowerCase())||""}))?e((0,v.hc)("Woah there, game is still in development, you're not allowed to enter yet!")):t.push("/game")},children:[(0,N.jsx)(d(),{src:"/images/arrow-sign.png",layout:"fill",objectFit:"fill"}),(0,N.jsx)("h2",{className:"text-white font-bold play-button",children:"PLAY"})]})]})]},"minting-container")})]})}},45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(35430)}])}},function(e){e.O(0,[774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);