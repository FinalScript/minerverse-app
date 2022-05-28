(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{91110:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(76687),o=t(59499),a=t(50029),c=t(87794),s=t.n(c),i=t(9008),l=t(67294),u=t(9473),d=t(76509),f=t(3283),m=t.n(f),v=t(44431),x=t.n(v),h=t(85893),p=function(e){var n=e.vaultContract,t=e.account,r=(0,l.useState)(),o=r[0],c=r[1],i=(0,l.useState)(),u=i[0],f=i[1],v=(0,l.useState)("0"),p=v[0],b=v[1];(0,l.useEffect)((function(){w(),g()}),[n,t]);var g=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=0,null===n||void 0===n||!n.methods||!t){e.next=5;break}return e.next=4,null===n||void 0===n?void 0:n.methods.diamondBalance().call();case 4:r=e.sent;case 5:c(new(x())(m().utils.fromWei(new(x())(r).toFixed(0))));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)(s().mark((function e(){var r,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=0,o=0,a=0,null===n||void 0===n||!n.methods||!t){e.next=11;break}return e.next=4,null===n||void 0===n?void 0:n.methods.balanceOf(t).call();case 4:return r=e.sent,e.next=7,null===n||void 0===n?void 0:n.methods.diamondBalance().call();case 7:return o=e.sent,e.next=10,null===n||void 0===n?void 0:n.methods.totalSupply().call();case 10:a=e.sent;case 11:f(new(x())(m().utils.fromWei(new(x())(r).times(o).div(a).toFixed(0))));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==n&&void 0!==n&&n.methods&&t&&(null===n||void 0===n||n.methods.stake(m().utils.toWei(p)).send({to:d.q7.vault,from:t,value:0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==n&&void 0!==n&&n.methods&&t&&(null===n||void 0===n||n.methods.quickUnstake(m().utils.toWei(p)).send({to:d.q7.vault,from:t,value:0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==n&&void 0!==n&&n.methods&&t&&(null===n||void 0===n||n.methods.claimDelayedUnstake(m().utils.toWei(p)).send({to:d.q7.vault,from:t,value:0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"text-center flex flex-col space-y-2 items-center justify-between bg-gray-700 text-white shadow-lg p-2 px-6 rounded-lg w-[500px]",children:[(0,h.jsx)("h3",{className:"text-2xl font-bold",children:"Vault"}),(0,h.jsxs)("div",{className:"w-full flex flex-col space-y-1 text-sm text-gray-200",children:[(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("p",{children:"Total Vault Balance"}),(0,h.jsx)("p",{children:null===o||void 0===o?void 0:o.toFormat(2)})]}),(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("p",{children:"Staked Balance"}),(0,h.jsx)("p",{children:null===u||void 0===u?void 0:u.toFormat(2)})]}),(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("p",{children:"% of Vault"}),(0,h.jsx)("p",{children:o&&u&&"".concat(null===u||void 0===u?void 0:u.dividedBy(o).times(100).toFormat(3),"%")})]}),(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("p",{children:"Pending Balance"}),(0,h.jsx)("p",{children:"0"})]})]}),(0,h.jsxs)("div",{className:"w-full flex flex-col space-y-3",children:[(0,h.jsx)("input",{value:p,onChange:function(e){b(e.target.value)},type:"number",max:2e4,placeholder:"0",className:"text-center border-none outline-none bg-gray-600 text-white rounded w-full"}),(0,h.jsxs)("div",{className:"flex space-x-2 w-full",children:[(0,h.jsx)("button",{onClick:y,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md flex-grow",children:"Stake"}),(0,h.jsxs)("div",{className:"flex space-x-1 flex-grow",children:[(0,h.jsx)("button",{onClick:j,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md w-1/2",children:"Fast Unstake"}),(0,h.jsx)("button",{onClick:k,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md w-1/2",children:"Slow Unstake"})]})]})]})]})},b=l.memo(p);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw a}}}}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}x().config({FORMAT:{decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0}});var k=function(){var e=(0,u.v9)((function(e){return e.blockchain})),n=(0,l.useState)([]),t=n[0],c=n[1],f=(0,l.useState)([]),v=f[0],p=f[1],g=(0,l.useState)([]),j=g[0],k=g[1],N=(0,l.useState)([]),C=N[0],O=N[1],S=(0,l.useState)([]),I=S[0],Z=S[1],D=(0,l.useState)({}),M=D[0],A=D[1],E=(0,l.useState)([]),F=E[0],_=E[1],q=(0,l.useState)([]),R=q[0],T=q[1],U=(0,l.useState)({}),P=U[0],W=U[1],B=(0,l.useRef)(),G=(0,l.useState)(),L=G[0],V=G[1],z=(0,l.useState)(),X=z[0],H=z[1],K=(0,l.useRef)(),Y=(0,l.useState)({level:0,quantity:0});Y[0],Y[1];(0,l.useEffect)((function(){p([]),e.minerContract&&e.account&&J()}),[e.minerContract,e.account]),(0,l.useEffect)((function(){O([]),e.mineContract&&e.account&&Q(),_([]),e.mineContract&&e.account&&ee()}),[e.mineContract,e.account]),(0,l.useEffect)((function(){$()}),[e.diamondContract,e.account]);var $=function(){var n=(0,a.Z)(s().mark((function n(){var t,r,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=0,null===(t=e.diamondContract)||void 0===t||!t.methods||!e.account){n.next=5;break}return n.next=4,null===(o=e.diamondContract)||void 0===o?void 0:o.methods.balanceOf(e.account).call();case 4:r=n.sent;case 5:V(new(x())(m().utils.fromWei(r.toString())));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=function(){var n=(0,a.Z)(s().mark((function n(){var t,r,a,i,l,u,d,f;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],null===(t=e.minerContract)||void 0===t||!t.methods||!e.account){n.next=10;break}return n.next=4,null===(a=e.minerContract)||void 0===a?void 0:a.methods.balanceOf(e.account).call();case 4:if(0===(i=n.sent)){n.next=10;break}return n.next=8,e.minerContract.methods.batchedMinerOfOwner(e.account,0,i).call();case 8:if(l=n.sent){u=y(l);try{for(f=function(){var e=d.value;r.push(parseInt(e.tokenId)),c((function(n){return w(w({},n),{},(0,o.Z)({},e.tokenId,w(w({},n[e.tokenId]),{},{level:parseInt(e.level)})))}))},u.s();!(d=u.n()).done;)f()}catch(s){u.e(s)}finally{u.f()}r.sort((function(e,n){return e-n}))}case 10:p(r);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Q=function(){var n=(0,a.Z)(s().mark((function n(){var t,r,a,i,l,u,d,f,v,h;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],clearTimeout(K.current),H(new(x())(0)),null===(t=e.mineContract)||void 0===t||!t.methods||!e.account){n.next=19;break}return n.next=6,null===(a=e.mineContract)||void 0===a?void 0:a.methods.ownedStakesBalance(e.account).call();case 6:if(0===(i=n.sent)){n.next=19;break}return n.next=10,e.mineContract.methods.batchedStakesOfOwner(e.account,0,i).call();case 10:if(!(l=n.sent)){n.next=19;break}d=y(l);try{for(v=function(){var e=f.value;r.push(parseInt(e.tokenId)),c((function(n){return w(w({},n),{},(0,o.Z)({},e.tokenId,w(w({},n[e.tokenId]),{},{level:parseInt(e.level)})))}))},d.s();!(f=d.n()).done;)v()}catch(s){d.e(s)}finally{d.f()}return n.next=16,null===(u=e.mineContract)||void 0===u?void 0:u.methods.YIELD_CPS().call();case 16:h=n.sent,K.current=setInterval((function(){var e,n=new(x())(0),t=y(l);try{var r=function(){var t=e.value,r=new(x())(m().utils.fromWei(new(x())(Math.round(Date.now()-Math.round(1e3*t.startTimestamp))*("0"===t.level?1:25)*parseFloat(h)/1e3).toFixed(0),"ether"));A((function(e){return w(w({},e),{},(0,o.Z)({},t.tokenId,w(w({},e[t.tokenId]),{},{earned:r})))})),n=n.plus(r)};for(t.s();!(e=t.n()).done;)r()}catch(s){t.e(s)}finally{t.f()}H(n)}),l.length>15?80:150),r.sort((function(e,n){return e-n}));case 19:O(r);case 20:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ee=function(){var n=(0,a.Z)(s().mark((function n(){var t,r,a,i,l,u,d,f,m,v;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],clearTimeout(B.current),null===(t=e.mineContract)||void 0===t||!t.methods||!e.account){n.next=14;break}return n.next=5,null===(a=e.mineContract)||void 0===a?void 0:a.methods.ownedCooldownsBalance(e.account).call();case 5:if(0===(i=n.sent)){n.next=14;break}return n.next=9,e.mineContract.methods.batchedCooldownsOfOwner(e.account,0,i).call();case 9:return u=n.sent,n.next=12,null===(l=e.mineContract)||void 0===l?void 0:l.methods.UNSTAKE_COOLDOWN_DURATION().call();case 12:if(d=n.sent,u){f=y(u);try{for(v=function(){var e=m.value;r.push(parseInt(e.tokenId)),c((function(n){return w(w({},n),{},(0,o.Z)({},e.tokenId,w(w({},n[e.tokenId]),{},{level:parseInt(e.level)})))}))},f.s();!(m=f.n()).done;)v()}catch(s){f.e(s)}finally{f.f()}ne(u,d),B.current=setInterval((function(){ne(u,d)}),u.length<15?1e3:6e4)}case 14:_(r);case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ne=function(e,n){var t,r=y(e);try{var a=function(){var r=t.value,a=new Date(1e3*(parseInt(r.startTimestamp)+parseInt(n))).getTime()-(new Date).getTime(),c={h:Math.floor(a/1e3/60/60),m:Math.floor(a%36e5/6e4),s:e.length<15?Math.floor(a%6e4/1e3):null};W((function(e){return w(w({},e),{},(0,o.Z)({},r.tokenId,w(w({},e[r.tokenId]),{},{timeDiff:a,timeRemaining:c,withdraw:!(a>0)})))}))};for(r.s();!(t=r.n()).done;)a()}catch(c){r.e(c)}finally{r.f()}},te=function(){var n=(0,a.Z)(s().mark((function n(){var t,r,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!==(t=e.diamondContract)&&void 0!==t&&t.methods&&null!==(r=e.mineContract)&&void 0!==r&&r.methods&&e.account&&(null===(o=e.mineContract)||void 0===o||o.methods.claimDiamondsAndMaybeUnstake(C,!1).send({to:d.q7.mine,from:e.account,value:0}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(e){console.log(e)})).once("receipt",(function(e){Q(),$()})).on("error",(function(e){console.log(e)})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),re=function(){var n=(0,a.Z)(s().mark((function n(){var t,r,o,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(t=e.mineContract)||void 0===t||!t.methods||!e.account){n.next=5;break}return n.next=3,null===(r=e.minerContract)||void 0===r?void 0:r.methods.isApprovedForAll(e.account,d.q7.mine).call();case 3:n.sent?null===(o=e.mineContract)||void 0===o||o.methods.stakeMany(j).send({to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){Q(),J()})).catch((function(e){console.log(e)})):null===(a=e.minerContract)||void 0===a||a.methods.setApprovalForAll(d.q7.mine,!0).send({to:d.q7.mine,from:e.account,value:0}).then((function(){var n;null===(n=e.mineContract)||void 0===n||n.methods.stakeMany(j).send({to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){Q(),J()})).catch((function(e){console.log(e)}))}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),oe=function(){var n=(0,a.Z)(s().mark((function n(){var t,r,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!==(t=e.diamondContract)&&void 0!==t&&t.methods&&null!==(r=e.mineContract)&&void 0!==r&&r.methods&&e.account&&(null===(o=e.mineContract)||void 0===o||o.methods.claimDiamondsAndMaybeUnstake(I,!0).send({to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){Q(),$(),ee()})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ae=function(){var n=(0,a.Z)(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!==(t=e.mineContract)&&void 0!==t&&t.methods&&e.account&&(null===(r=e.mineContract)||void 0===r||r.methods.withdrawMiner(R).send({to:d.q7.mine,from:e.account,value:0}).once("receipt",(function(e){J(),ee()})).catch((function(e){console.log(e)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return d.e1.whitelistOnly&&!d.e1.whitelistedWallets.find((function(n){var t;return n.toLowerCase()===(null===(t=e.account)||void 0===t?void 0:t.toLowerCase())||""}))?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.default,{children:(0,h.jsx)("title",{children:"Game | MinerVerse"})}),(0,h.jsx)("section",{className:"text-gray-900 bg-gray-900 body-font h-full",children:(0,h.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-5 overflow-auto pt-44 pb-11",children:[(0,h.jsxs)("div",{className:"flex space-x-5",children:[(0,h.jsxs)("div",{className:"text-xl text-center flex flex-col items-center bg-gray-700 text-white shadow-lg p-6 px-11 w-[400px] rounded-lg",children:[(0,h.jsxs)("div",{className:"flex",children:[(0,h.jsxs)("h5",{className:"flex flex-col items-start w-[100px]",children:[(0,h.jsx)("span",{children:"Balance: "}),(0,h.jsx)("span",{children:"Earned: "})]}),(0,h.jsx)("div",{className:"relative w-[100px]",children:(0,h.jsxs)("h5",{className:"flex flex-col items-start absolute top-0 left-0 whitespace-nowrap",children:[(0,h.jsx)("span",{children:null===L||void 0===L?void 0:L.toFormat(5)}),(0,h.jsx)("span",{children:null===X||void 0===X?void 0:X.toFormat(5)})]})})]}),(0,h.jsx)("button",{disabled:null===X||void 0===X?void 0:X.eq(0),onClick:te,className:"mt-4 py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Claim"})]}),(0,h.jsx)(b,{vaultContract:e.vaultContract,account:e.account})]}),(0,h.jsxs)("div",{className:"px-11 text-center w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between w-full mb-4 p-2 px-3 bg-gray-700 text-white rounded-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"font-bold text-xl",children:"Staked"}),(0,h.jsxs)("div",{className:"flex space-x-3",children:[(0,h.jsx)("button",{onClick:function(){Z([])},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Unselect"}),(0,h.jsx)("button",{onClick:function(){Z((0,r.Z)(C))},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Select All"}),(0,h.jsx)("button",{disabled:0===I.length,onClick:oe,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Unstake"})]})]}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center",onContextMenu:function(e){e.preventDefault()},children:C.map((function(e){var n,o;return(0,h.jsx)("div",{onMouseDown:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=I.indexOf(e);Z(t>-1?I.filter((function(n){return n!==e})):[].concat((0,r.Z)(I),[e]))}},onMouseEnter:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=I.indexOf(e);Z(t>-1?I.filter((function(n){return n!==e})):[].concat((0,r.Z)(I),[e]))}},className:"relative shadow-lg p-4 mr-1 mb-1 w-[100px] cursor-pointer select-none "+(1===(null===(n=t[e])||void 0===n?void 0:n.level)?" text-red-500 ":"text-white ")+(-1!==I.indexOf(e)?" bg-gray-500":"bg-gray-700"),children:(0,h.jsxs)("div",{className:"flex flex-col items-center",children:[(0,h.jsx)("p",{className:"text-lg",children:e}),(null===(o=M[e])||void 0===o?void 0:o.earned)&&(0,h.jsx)("p",{className:"text-sm text-gray-300",children:M[e].earned.toFixed(3)})]})},e)}))})]}),(0,h.jsxs)("div",{className:"px-11 text-center w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between w-full mb-4 p-2 px-3 bg-gray-700 text-white rounded-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"font-bold text-xl",children:"Not Staked"}),(0,h.jsxs)("div",{className:"flex space-x-3",children:[(0,h.jsx)("button",{onClick:function(){k([])},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Unselect"}),(0,h.jsx)("button",{onClick:function(){k((0,r.Z)(v))},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Select All"}),(0,h.jsx)("button",{disabled:0===j.length,onClick:re,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Stake"})]})]}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center",onContextMenu:function(e){e.preventDefault()},children:v.map((function(e){var n;return(0,h.jsx)("div",{onMouseDown:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=j.indexOf(e);k(t>-1?j.filter((function(n){return n!==e})):[].concat((0,r.Z)(j),[e]))}},onMouseEnter:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=j.indexOf(e);k(t>-1?j.filter((function(n){return n!==e})):[].concat((0,r.Z)(j),[e]))}},className:"relative shadow-lg p-4 mr-1 mb-1 w-[100px] cursor-pointer select-none "+(1===(null===(n=t[e])||void 0===n?void 0:n.level)?" text-red-500 ":"text-white ")+(-1!==j.indexOf(e)?" bg-gray-500":"bg-gray-700"),children:(0,h.jsx)("p",{className:"",children:e})},e)}))})]})," ",(0,h.jsxs)("div",{className:"px-11 text-center w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between w-full mb-4 p-2 px-3 bg-gray-700 text-white rounded-lg shadow-lg",children:[(0,h.jsx)("h3",{className:"font-bold text-xl",children:"Cooldown"}),(0,h.jsxs)("div",{className:"flex space-x-3",children:[(0,h.jsx)("button",{onClick:function(){T([])},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Unselect"}),(0,h.jsx)("button",{onClick:function(){T((0,r.Z)(F))},className:"py-1 px-3 bg-gray-400 hover:bg-gray-500 rounded-md",children:"Select All"}),(0,h.jsx)("button",{disabled:0===R.length,onClick:ae,className:"py-1 px-3 bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 rounded-md",children:"Withdraw"})]})]}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center",children:F.map((function(e){var n,o,a;return(0,h.jsxs)("div",{onMouseDown:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=R.indexOf(e);T(t>-1?R.filter((function(n){return n!==e})):[].concat((0,r.Z)(R),[e]))}},onMouseEnter:function(n){if(n.preventDefault(),1==n.buttons||3==n.buttons){var t=R.indexOf(e);T(t>-1?R.filter((function(n){return n!==e})):[].concat((0,r.Z)(R),[e]))}},className:"relative shadow-lg p-4 mr-1 mb-1 w-[120px] cursor-pointer select-none "+(1===(null===(n=t[e])||void 0===n?void 0:n.level)?" text-red-500 ":"text-white ")+(-1!==R.indexOf(e)?" bg-gray-500":"bg-gray-700"),children:[(0,h.jsx)("p",{className:"text-lg",children:e}),null===(o=P[e])||void 0===o||!o.timeRemaining||null!==(a=P[e])&&void 0!==a&&a.withdraw?(0,h.jsx)("p",{className:"text-sm text-green-500 flex space-x-1 justify-center",children:"Ready!"}):(0,h.jsxs)("p",{className:"text-sm text-gray-300 flex space-x-1 justify-center",children:[P[e].timeRemaining.h&&(0,h.jsxs)("span",{children:[P[e].timeRemaining.h,"h"]}),P[e].timeRemaining.m&&(0,h.jsxs)("span",{children:[P[e].timeRemaining.m,"m"]}),P[e].timeRemaining.s&&(0,h.jsxs)("span",{children:[P[e].timeRemaining.s,"s"]})]})]},e)}))})]})]})})]})}},43790:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return t(91110)}])}},function(e){e.O(0,[431,774,888,179],(function(){return n=43790,e(e.s=n);var n}));var n=e.O();_N_E=n}]);