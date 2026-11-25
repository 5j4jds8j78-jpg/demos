var Sa="188dev";var Yu=0,fc=1,Ku=2;var Kr=1,Zu=2,Xs=3,sn=0,Ht=1,rn=2,ns=0,qs=1,Zr=2,pc=3,mc=4,Ju=5;var is=100,$u=101,ju=102,Qu=103,ed=104,td=200,nd=201,id=202,sd=203,gc=204,_c=205,rd=206,od=207,ad=208,ld=209,cd=210,hd=211,ud=212,dd=213,fd=214,Xo=0,qo=1,Yo=2,Es=3,Ko=4,Zo=5,Jo=6,$o=7,xc=0,pd=1,md=2,zn=0,yc=1,vc=2,Mc=3,Ys=4,Sc=5,ss=6,Ks=7,Jl="attached",gd="detached",bc=300,rs=301,Zs=302,Js=303,ba=304,bi=1e3,Qt=1001,Rs=1002,Rt=1003,Ta=1004;var os=1005;var St=1006,$s=1007;var pn=1008;var on=1009,Tc=1010,Ac=1011,js=1012,Aa=1013,En=1014,Kt=1015,jt=1016,wa=1017,Ea=1018,as=1020,wc=35902,Ec=35899,Rc=1021,Cc=1022,_n=1023,jn=1026,hi=1027,Ra=1028,Ca=1029,Ui=1030,Ia=1031;var Pa=1033,Jr=33776,$r=33777,jr=33778,Qr=33779,La=35840,Na=35841,Da=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,eo=37490,Ga=37491,Ha=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Ka=37814,Za=37815,Ja=37816,$a=37817,ja=37818,Qa=37819,el=37820,tl=37821,nl=36492,il=36494,sl=36495,rl=36283,ol=36284,to=36285,al=36286;var Ki=2300,Zi=2301,Vo=2302,$l=2303,jl=2400,Ql=2401,ec=2402,_d=2500;var Ic=0,no=1,Qs=2,xd=3200;var ll=0,yd=1,ui="",pt="srgb",Gt="srgb-linear",xr="linear",ut="srgb";var Wo=7680;var vd=519,Md=512,Sd=513,bd=514,Pc=515,Td=516,Ad=517,Lc=518,Nc=519,Dc=35044;var Uc="300 es",gn=2e3,Cs=2001;function Jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}var $f={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&($f.Float16Array=Float16Array);function jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wd(){let i=Is("canvas");return i.style.display="block",i}var Qh={},Ps=null;function yr(...i){let e="THREE."+i.shift();Ps?Ps("log",e,...i):console.log(e,...i)}function Ed(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Fe(...i){i=Ed(i);let e="THREE."+i.shift();if(Ps)Ps("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Ed(i);let e="THREE."+i.shift();if(Ps)Ps("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Yi(...i){let e=i.join(" ");e in Qh||(Qh[e]=!0,Fe(...i))}function Rd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Cd={[Xo]:Xo,[Yo]:Jo,[Ko]:Ko,[Es]:Zo,[qo]:qo,[Jo]:Yo,[$o]:$o,[Zo]:Es},Fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,pr=Math.PI/180,Ji=180/Math.PI;function Rn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Fc(i,e){return(i%e+e)%e}function Qf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ep(i,e,t){return i!==e?(t-i)/(e-i):0}function mr(i,e,t){return(1-t)*i+t*e}function tp(i,e,t,n){return mr(i,e,1-Math.exp(-t*n))}function np(i,e=1){return e-Math.abs(Fc(i,e*2)-e)}function ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function op(i,e){return i+Math.random()*(e-i)}function ap(i){return i*(.5-Math.random())}function lp(i){i!==void 0&&(eu=i);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cp(i){return i*pr}function hp(i){return i*Ji}function up(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bc(i,e){if(e.constructor===Float32Array)return i;let t=cl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function zc(i,e){if(e.constructor===Float32Array)return i;let t=cl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var di={DEG2RAD:pr,RAD2DEG:Ji,generateUUID:Rn,clamp:et,euclideanModulo:Fc,mapLinear:Qf,inverseLerp:ep,lerp:mr,damp:tp,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:rp,randFloat:op,randFloatSpread:ap,seededRandom:lp,degToRad:cp,radToDeg:hp,isPowerOfTwo:up,ceilPowerOfTwo:dp,floorPowerOfTwo:Oc,setQuaternionFromProperEuler:fp,normalize:zc,denormalize:Bc},Xc=class Xc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xc.prototype.isVector2=!0;var he=Xc,cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*x;p<0&&(f=-f,d=-d,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let b=Math.acos(p),T=Math.sin(b);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T,l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+x*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+x*a;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qc=class qc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qc.prototype.isVector3=!0;var F=qc,bl=new F,tu=new cn,Yc=class Yc{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],p=s[3],m=s[6],b=s[1],T=s[4],y=s[7],w=s[2],A=s[5],_=s[8];return r[0]=o*x+a*b+l*w,r[3]=o*p+a*T+l*A,r[6]=o*m+a*y+l*_,r[1]=c*x+h*b+u*w,r[4]=c*p+h*T+u*A,r[7]=c*m+h*y+u*_,r[2]=f*x+d*b+g*w,r[5]=f*p+d*T+g*A,r[8]=f*m+d*y+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yc.prototype.isMatrix3=!0;var Ye=Yc,Tl=new Ye,nu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){let i={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gt]:{primaries:e,whitePoint:n,transfer:xr,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),i}var nt=pp();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=Is("canvas")),ds.width=e.width,ds.height=e.height;let s=ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Is("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mp=0,Ls=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Al(s[o].image)):r.push(Al(s[o]))}else r=Al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var gp=0,wl=new F,Nt=class i extends Fn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qt,s=Qt,r=St,o=pn,a=_n,l=on,c=i.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Rn(),this.name="",this.source=new Ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bi:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bi:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=bc;Nt.DEFAULT_ANISOTROPY=1;var Kc=class Kc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(d+1)/2,w=(m+1)/2,A=(h+f)/4,_=(u+x)/4,M=(g+p)/4;return T>y&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=_/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=M/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kc.prototype.isVector4=!0;var dt=Kc,Qo=class extends Fn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Nt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let o=this.textures[s],a=o.images?o.images[0]:o.image;a.width=e,a.height=t,a.depth=n,o.isData3DTexture!==!0&&(o.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ls(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vr=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ea=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ma=class Ma{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,x,p)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ma().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_p,e,xp)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),_i.crossVectors(n,an),_i.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),_i.crossVectors(n,an)),_i.normalize(),mo.crossVectors(an,_i),s[0]=_i.x,s[4]=mo.x,s[8]=an.x,s[1]=_i.y,s[5]=mo.y,s[9]=an.y,s[2]=_i.z,s[6]=mo.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],b=n[3],T=n[7],y=n[11],w=n[15],A=s[0],_=s[4],M=s[8],P=s[12],E=s[1],L=s[5],O=s[9],I=s[13],N=s[2],B=s[6],k=s[10],z=s[14],Y=s[3],W=s[7],J=s[11],le=s[15];return r[0]=o*A+a*E+l*N+c*Y,r[4]=o*_+a*L+l*B+c*W,r[8]=o*M+a*O+l*k+c*J,r[12]=o*P+a*I+l*z+c*le,r[1]=h*A+u*E+f*N+d*Y,r[5]=h*_+u*L+f*B+d*W,r[9]=h*M+u*O+f*k+d*J,r[13]=h*P+u*I+f*z+d*le,r[2]=g*A+x*E+p*N+m*Y,r[6]=g*_+x*L+p*B+m*W,r[10]=g*M+x*O+p*k+m*J,r[14]=g*P+x*I+p*z+m*le,r[3]=b*A+T*E+y*N+w*Y,r[7]=b*_+T*L+y*B+w*W,r[11]=b*M+T*O+y*k+w*J,r[15]=b*P+T*I+y*z+w*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15],b=l*d-c*f,T=a*d-c*u,y=a*f-l*u,w=o*d-c*h,A=o*f-l*h,_=o*u-a*h;return t*(x*b-p*T+m*y)-n*(g*b-p*w+m*A)+s*(g*T-x*w+m*_)-r*(g*y-x*A+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],b=t*a-n*o,T=t*l-s*o,y=t*c-r*o,w=n*l-s*a,A=n*c-r*a,_=s*c-r*l,M=h*x-u*g,P=h*p-f*g,E=h*m-d*g,L=u*p-f*x,O=u*m-d*x,I=f*m-d*p,N=b*I-T*O+y*L+w*E-A*P+_*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/N;return e[0]=(a*I-l*O+c*L)*B,e[1]=(s*O-n*I-r*L)*B,e[2]=(x*_-p*A+m*w)*B,e[3]=(f*A-u*_-d*w)*B,e[4]=(l*E-o*I-c*P)*B,e[5]=(t*I-s*E+r*P)*B,e[6]=(p*y-g*_-m*T)*B,e[7]=(h*_-f*y+d*T)*B,e[8]=(o*O-a*E+c*M)*B,e[9]=(n*E-t*O-r*M)*B,e[10]=(g*A-x*y+m*b)*B,e[11]=(u*y-h*A-d*b)*B,e[12]=(a*P-o*L-l*M)*B,e[13]=(t*L-n*P+s*M)*B,e[14]=(x*T-g*w-p*b)*B,e[15]=(h*w-u*T+f*b)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,p=o*u,m=a*u,b=l*c,T=l*h,y=l*u,w=n.x,A=n.y,_=n.z;return s[0]=(1-(x+m))*w,s[1]=(d+y)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(f+m))*A,s[6]=(p+b)*A,s[7]=0,s[8]=(g+T)*_,s[9]=(p-b)*_,s[10]=(1-(f+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=fs.set(s[0],s[1],s[2]).length(),a=fs.set(s[4],s[5],s[6]).length(),l=fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mn.copy(this);let c=1/o,h=1/a,u=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=gn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===gn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Cs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===gn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Cs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ma.prototype.isMatrix4=!0;var Ke=Ma,fs=new F,Mn=new Ke,_p=new F(0,0,0),xp=new F(1,1,1),_i=new F,mo=new F,an=new F,su=new Ke,ru=new cn,Qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var Ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yp=0,ou=new F,ps=new cn,Wn=new Ke,go=new F,sr=new F,vp=new F,Mp=new cn,au=new F(1,0,0),lu=new F(0,1,0),cu=new F(0,0,1),hu={type:"added"},Sp={type:"removed"},ms={type:"childadded",child:null},El={type:"childremoved",child:null},At=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Qn,n=new cn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ye}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(sr,go,this.up):Wn.lookAt(go,sr,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Wn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hu),ms.child=e,this.dispatchEvent(ms),ms.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sp),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hu),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}return n}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new F(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function Rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Fc(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rl(o,r,e+1/3),this.g=Rl(o,r,e),this.b=Rl(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return nt.workingToColorSpace(Yt.copy(this),e),Math.round(et(Yt.r*255,0,255))*65536+Math.round(et(Yt.g*255,0,255))*256+Math.round(et(Yt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=pt){nt.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Hi),Sn.s===0&&(Sn.h=Hi.h),Hi.s===0&&(Hi.h=Sn.h);let n=mr(Sn.h,Hi.h,t),s=mr(Sn.s,Hi.s,t),r=mr(Sn.l,Hi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Ce;Ce.NAMES=Id;var Ti=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bn=new F,Xn=new F,Cl=new F,qn=new F,gs=new F,_s=new F,uu=new F,Il=new F,Pl=new F,Ll=new F,Nl=new dt,Dl=new dt,Ul=new dt,Si=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),Xn.subVectors(n,t),Cl.subVectors(e,t);let o=bn.dot(bn),a=bn.dot(Xn),l=bn.dot(Cl),c=Xn.dot(Xn),h=Xn.dot(Cl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Nl.setScalar(0),Dl.setScalar(0),Ul.setScalar(0),Nl.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,n),Ul.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Nl,r.x),o.addScaledVector(Dl,r.y),o.addScaledVector(Ul,r.z),o}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),Xn.subVectors(e,t),bn.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),bn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gs.subVectors(s,n),_s.subVectors(r,n),Il.subVectors(e,n);let l=gs.dot(Il),c=_s.dot(Il);if(l<=0&&c<=0)return t.copy(n);Pl.subVectors(e,s);let h=gs.dot(Pl),u=_s.dot(Pl);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(gs,o);Ll.subVectors(e,r);let d=gs.dot(Ll),g=_s.dot(Ll);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(_s,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return uu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(uu,a);let m=1/(p+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},un=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),xo.subVectors(this.max,rr),xs.subVectors(e.a,rr),ys.subVectors(e.b,rr),vs.subVectors(e.c,rr),xi.subVectors(ys,xs),yi.subVectors(vs,ys),Vi.subVectors(xs,vs);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Vi.z,Vi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Vi.z,0,-Vi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Vi.y,Vi.x,0];return!Fl(t,xs,ys,vs,xo)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,xs,ys,vs,xo))?!1:(yo.crossVectors(xi,yi),t=[yo.x,yo.y,yo.z],Fl(t,xs,ys,vs,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new F,new F,new F,new F,new F,new F,new F,new F],Tn=new F,_o=new un,xs=new F,ys=new F,vs=new F,xi=new F,yi=new F,Vi=new F,rr=new F,xo=new F,yo=new F,Wi=new F;function Fl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Wi.fromArray(i,r);let a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ct=new F,vo=new he,Tp=0,Lt=class extends Fn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=Kt,this.version=0,this._normalizationScale=e!==void 0?cl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zc(e,this.array)}};var Mr=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Sr=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ap=new un,or=new F,Ol=new F,en=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ap.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Ol)),this.expandByPoint(or.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wp=0,mn=new Ke,Bl=new At,Ms=new F,ln=new un,ar=new un,Ln=new F,Mo=new F,So=new F,Bt=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?Sr:Mr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Mo.addVectors(this.boundingBox.min,ln.min),So.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Mo),this.boundingBox.expandByPoint(So)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Mo.addVectors(ln.min,ar.min),So.addVectors(ln.max,ar.max),ln.expandByPoint(Mo),ln.expandByPoint(So)):(ln.expandByPoint(ar.min),ln.expandByPoint(ar.max))}ln.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ln.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(e,c),Ln.add(Ms)),s=Math.max(s,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new F,l[P]=new F;let h=new F,u=new F,f=new F,d=new he,g=new he,x=new he,p=new F,m=new F;function b(P,E,L){c[P]=c[E]=c[L]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,L),d.fromBufferAttribute(r,P),g.fromBufferAttribute(r,E),x.fromBufferAttribute(r,L),u.sub(h),f.sub(h),g.sub(d),x.sub(d);let O=1/(g.x*x.y-x.x*g.y);isFinite(O)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(O),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(O),a[P].add(p),a[E].add(p),a[L].add(p),l[P].add(m),l[E].add(m),l[L].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,E=T.length;P<E;++P){let L=T[P],O=L.start,I=L.count;for(let N=O,B=Math.min(e.count,O+I);N<B;N+=3)b(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new F,w=new F,A=new F,_=new F;function M(P){A.fromBufferAttribute(s,P),_.copy(A);let E=a[P];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),y.lengthSq()===0&&(Math.abs(_.x)<.9?y.set(1,0,0):y.set(0,1,0),y.crossVectors(_,y).normalize()),w.crossVectors(_,E);let O=w.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,O)}for(let P=0,E=n.count;P<E;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Lt(f,h,u)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Us=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=du(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=du(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function du(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Rn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var $t=new F,Fs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?cl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zc(e,this.data.array)}},zl=new F,Ep=new F,Rp=new Ye,An=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zl.subVectors(n,t).cross(Ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rp.getNormalMatrix(e),s=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cp=0,tn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=qs,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Kn=new F,kl=new F,bo=new F,To=new F,Ai=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kl.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),To.copy(this.origin).sub(kl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=To.dot(this.direction),l=-To.dot(bo),c=To.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kl).addScaledVector(bo,f),d}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,g=t.x-o.x,x=t.y-o.y,p=t.z-o.z,m=n.x-o.x,b=n.y-o.y,T=n.z-o.z,y=Math.abs(l),w=Math.abs(c),A=Math.abs(h),_,M,P,E,L,O,I,N,B,k,z,Y;if(y>=w&&y>=A?(P=l,O=u,B=g,Y=m,l>=0?(_=c,M=h,E=f,L=d,I=x,N=p,k=b,z=T):(_=h,M=c,E=d,L=f,I=p,N=x,k=T,z=b)):w>=A?(P=c,O=f,B=x,Y=b,c>=0?(_=h,M=l,E=d,L=u,I=p,N=g,k=T,z=m):(_=l,M=h,E=u,L=d,I=g,N=p,k=m,z=T)):(P=h,O=d,B=p,Y=T,h>=0?(_=l,M=c,E=u,L=f,I=g,N=x,k=m,z=b):(_=c,M=l,E=f,L=u,I=x,N=g,k=b,z=m)),P===0)return null;let W=_/P,J=M/P,le=1/P,oe=E-W*O,De=L-J*O,q=I-W*B,ee=N-J*B,_e=k-W*Y,Le=z-J*Y,Se=_e*ee-Le*q,Be=oe*Le-De*_e,at=q*De-ee*oe;if(s){if(Se<0||Be<0||at<0)return null}else if((Se<0||Be<0||at<0)&&(Se>0||Be>0||at>0))return null;let ze=Se+Be+at;if(ze===0)return null;let Je=le*(Se*O+Be*B+at*Y);return(ze>0?Je<0:Je>0)?null:this.at(Je/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fu=new Ke,Xi=new Ai,Ao=new en,pu=new F,wo=new F,Eo=new F,Ro=new F,Gl=new F,Co=new F,mu=new F,Io=new F,qe=class extends At{constructor(e=new Bt,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this.count=e.count,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Gl.fromBufferAttribute(u,e),o?Co.addScaledVector(Gl,h):Co.addScaledVector(Gl.sub(t),h))}t.add(Co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(Ao.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Ao,pu)===null||Xi.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(fu.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),T=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,w=T;y<w;y+=3){let A=a.getX(y),_=a.getX(y+1),M=a.getX(y+2);s=Po(this,m,e,n,c,h,u,A,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let b=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);s=Po(this,o,e,n,c,h,u,b,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),T=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,w=T;y<w;y+=3){let A=y,_=y+1,M=y+2;s=Po(this,m,e,n,c,h,u,A,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let b=p,T=p+1,y=p+2;s=Po(this,o,e,n,c,h,u,b,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Ip(i,e,t,n,s,r,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===sn,a),l===null)return null;Io.copy(a),Io.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Io);return c<t.near||c>t.far?null:{distance:c,point:Io.clone(),object:i}}function Po(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,wo),i.getVertexPosition(l,Eo),i.getVertexPosition(c,Ro);let h=Ip(i,e,t,n,wo,Eo,Ro,mu);if(h){let u=new F;Si.getBarycoord(mu,wo,Eo,Ro,u),s&&(h.uv=Si.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};Si.getNormal(wo,Eo,Ro,f.normal),h.face=f,h.barycoord=u}return h}var lr=new dt,gu=new dt,_u=new dt,Pp=new dt,xu=new Ke,Lo=new F,Hl=new en,yu=new Ke,Vl=new Ai,br=class extends qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jl,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lo),this.boundingBox.expandByPoint(Lo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new en),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lo),this.boundingSphere.expandByPoint(Lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hl.copy(this.boundingSphere),Hl.applyMatrix4(s),e.ray.intersectsSphere(Hl)!==!1&&(yu.copy(s).invert(),Vl.copy(e.ray).applyMatrix4(yu),!(this.boundingBox!==null&&Vl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;gu.fromBufferAttribute(s.attributes.skinIndex,e),_u.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(lr.copy(t),t.set(0,0,0,0)):(lr.set(t.x,t.y,t.z,1),t.set(0,0,0)),lr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=_u.getComponent(r);if(o!==0){let a=gu.getComponent(r);xu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pp.copy(lr).applyMatrix4(xu),o)}}return t.isVector4&&(t.w=lr.w),t.applyMatrix4(this.bindMatrixInverse)}},Os=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},wi=class extends Nt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Rt,h=Rt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vu=new Ke,Lp=new Ke,Tr=class i{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Lp;vu.multiplyMatrices(a,t[r]),vu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new wi(t,e,e,_n,Kt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Fe("Skeleton: No bone found with UUID:",r),o=new Os),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ei=class extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ss=new Ke,Mu=new Ke,No=[],Su=new un,Np=new Ke,cr=new qe,hr=new en,Ar=class extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Np)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Su.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Su)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),hr.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),Mu.multiplyMatrices(n,Ss),cr.matrixWorld=Mu,cr.raycast(e,No);for(let o=0,a=No.length;o<a;o++){let l=No[o];l.instanceId=r,l.object=this,t.push(l)}No.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wi(new Float32Array(s*this.count),s,this.count,Ra,Kt));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qi=new en,Dp=new he(.5,.5),Do=new F,Ei=class{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],p=r[10],m=r[11],b=r[12],T=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,d-h,m-g,w-b).normalize(),s[1].setComponents(c+o,d+h,m+g,w+b).normalize(),s[2].setComponents(c+a,d+u,m+x,w+T).normalize(),s[3].setComponents(c-a,d-u,m-x,w-T).normalize(),n)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,d-f,m-p,w-y).normalize();else if(s[4].setComponents(c-l,d-f,m-p,w-y).normalize(),t===gn)s[5].setComponents(c+l,d+f,m+p,w+y).normalize();else if(t===Cs)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);let t=Dp.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Do.x=s.normal.x>0?e.max.x:e.min.x,Do.y=s.normal.y>0?e.max.y:e.min.y,Do.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bu=new Ke,ta=class i{constructor(){this.coordinateSystem=gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];bu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ei),n[s].setFromProjectionMatrix(bu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ei),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Bs=class extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},na=new F,ia=new F,Tu=new Ke,ur=new Ai,Uo=new en,Wl=new F,Au=new F,$i=class extends At{constructor(e=new Bt,t=new Bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)na.fromBufferAttribute(t,s-1),ia.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=na.distanceTo(ia);e.setAttribute("lineDistance",new yt(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;Tu.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Tu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=h.getX(x),b=h.getX(x+1),T=Fo(this,e,ur,l,m,b,x);T&&t.push(T)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(d),m=Fo(this,e,ur,l,x,p,g-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=Fo(this,e,ur,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Fo(this,e,ur,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fo(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(na.fromBufferAttribute(a,s),ia.fromBufferAttribute(a,r),t.distanceSqToSegment(na,ia,Wl,Au)>n)return;Wl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Wl);if(!(c<e.near||c>e.far))return{distance:c,point:Au.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var wu=new F,Eu=new F,wr=class extends $i{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wu.fromBufferAttribute(t,s),Eu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wu.distanceTo(Eu);e.setAttribute("lineDistance",new yt(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Er=class extends $i{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},zs=class extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ru=new Ke,tc=new Ai,Oo=new en,Bo=new F,Rr=class extends At{constructor(e=new Bt,t=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;Ru.copy(s).invert(),tc.copy(e.ray).applyMatrix4(Ru);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);Bo.fromBufferAttribute(u,p),Cu(Bo,p,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Bo.fromBufferAttribute(u,g),Cu(Bo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cu(i,e,t,n,s,r,o){let a=tc.distanceSqToPoint(i);if(a<t){let l=new F;tc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Cr=class extends Nt{constructor(e=[],t=rs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ri=class extends Nt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ti=class extends Nt{constructor(e,t,n=En,s,r,o,a=Rt,l=Rt,c,h=jn,u=1){if(h!==jn&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ir=class extends ti{constructor(e,t=En,n=rs,s,r,o=Rt,a=Rt,l,c=jn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pr=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},dn=class i extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function g(x,p,m,b,T,y,w,A,_,M,P){let E=y/_,L=w/M,O=y/2,I=w/2,N=A/2,B=_+1,k=M+1,z=0,Y=0,W=new F;for(let J=0;J<k;J++){let le=J*L-I;for(let oe=0;oe<B;oe++){let De=oe*E-O;W[x]=De*b,W[p]=le*T,W[m]=N,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[m]=A>0?1:-1,h.push(W.x,W.y,W.z),u.push(oe/_),u.push(1-J/M),z+=1}}for(let J=0;J<M;J++)for(let le=0;le<_;le++){let oe=f+le+B*J,De=f+le+B*(J+1),q=f+(le+1)+B*(J+1),ee=f+(le+1)+B*J;l.push(oe,De,ee),l.push(De,q,ee),Y+=6}a.addGroup(d,Y,P),d+=Y,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ni=class i extends Bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ii=class i extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],p=n/2,m=0;b(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(d,2));function b(){let y=new F,w=new F,A=0,_=(t-e)/n;for(let M=0;M<=r;M++){let P=[],E=M/r,L=E*(t-e)+e;for(let O=0;O<=s;O++){let I=O/s,N=I*l+a,B=Math.sin(N),k=Math.cos(N);w.x=L*B,w.y=-E*n+p,w.z=L*k,u.push(w.x,w.y,w.z),y.set(B,_,k).normalize(),f.push(y.x,y.y,y.z),d.push(I,1-E),P.push(g++)}x.push(P)}for(let M=0;M<s;M++)for(let P=0;P<r;P++){let E=x[P][M],L=x[P+1][M],O=x[P+1][M+1],I=x[P][M+1];(e>0||P!==0)&&(h.push(E,L,I),A+=3),(t>0||P!==r-1)&&(h.push(L,O,I),A+=3)}c.addGroup(m,A,0),m+=A}function T(y){let w=g,A=new he,_=new F,M=0,P=y===!0?e:t,E=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*E,0),f.push(0,E,0),d.push(.5,.5),g++;let L=g;for(let O=0;O<=s;O++){let N=O/s*l+a,B=Math.cos(N),k=Math.sin(N);_.x=P*k,_.y=p*E,_.z=P*B,u.push(_.x,_.y,_.z),f.push(0,E,0),A.x=B*.5+.5,A.y=k*.5*E+.5,d.push(A.x,A.y),g++}for(let O=0;O<s;O++){let I=w+O,N=L+O;y===!0?h.push(N,N+1,I):h.push(N+1,N,I),M+=3}c.addGroup(m,M,y===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,l=new Ke;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ks=class extends fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sa=class extends ks{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Iu=new F,Pu=new F,Xl=new kc,ql=new kc,Yl=new kc,ra=class extends fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Pu.subVectors(s[0],s[1]).add(s[0]),c=Pu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Iu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Xl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),ql.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),Yl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Xl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ql.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Yl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Xl.calc(l),ql.calc(l),Yl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Up(i,e){let t=1-i;return t*t*e}function Fp(i,e){return 2*(1-i)*i*e}function Op(i,e){return i*i*e}function gr(i,e,t,n){return Up(i,e)+Fp(i,t)+Op(i,n)}function Bp(i,e){let t=1-i;return t*t*t*e}function zp(i,e){let t=1-i;return 3*t*t*i*e}function kp(i,e){return 3*(1-i)*i*i*e}function Gp(i,e){return i*i*i*e}function _r(i,e,t,n,s){return Bp(i,e)+zp(i,t)+kp(i,n)+Gp(i,s)}var Lr=class extends fn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,s.x,r.x,o.x,a.x),_r(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends fn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,s.x,r.x,o.x,a.x),_r(e,s.y,r.y,o.y,a.y),_r(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nr=class extends fn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends fn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends fn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,s.x,r.x,o.x),gr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends fn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,s.x,r.x,o.x),gr(e,s.y,r.y,o.y),gr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Lu(a,l.x,c.x,h.x,u.x),Lu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},nc=Object.freeze({__proto__:null,ArcCurve:sa,CatmullRomCurve3:ra,CubicBezierCurve:Lr,CubicBezierCurve3:oa,EllipseCurve:ks,LineCurve:Nr,LineCurve3:aa,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:la,SplineCurve:Ur}),ca=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new nc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ji=class extends ca{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Nr(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Dr(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Lr(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ur(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ks(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ci=class extends ji{constructor(e){super(e),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ji().fromJSON(s))}return this}};function Hp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Pd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Yp(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Fr(r,o,t,a,l,c,0),o}function Pd(i,e,t,n,s){let r;if(s===sm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Nu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Nu(o/n|0,i[o],i[o+1],r);return r&&Gs(r,r.next)&&(Br(r),r=r.next),r}function Qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gs(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&jp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Wp(i,n,s,r):Vp(i)){e.push(l.i,i.i,c.i),Br(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Xp(Qi(i),e),Fr(i,e,t,n,s,r,2)):o===2&&qp(i,e,t,n,s,r):Fr(Qi(i),e,t,n,s,r,1);break}}}function Vp(i){let e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&dr(s,a,r,l,o,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wp(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Tt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),p=Math.max(h,u,f),m=ic(d,g,e,t,n),b=ic(x,p,e,t,n),T=i.prevZ,y=i.nextZ;for(;T&&T.z>=m&&y&&y.z<=b;){if(T.x>=d&&T.x<=x&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&dr(a,h,l,u,c,f,T.x,T.y)&&Tt(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&dr(a,h,l,u,c,f,y.x,y.y)&&Tt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=m;){if(T.x>=d&&T.x<=x&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&dr(a,h,l,u,c,f,T.x,T.y)&&Tt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&dr(a,h,l,u,c,f,y.x,y.y)&&Tt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gs(n,s)&&Nd(n,t,t.next,s)&&Or(n,s)&&Or(s,n)&&(e.push(n.i,t.i,s.i),Br(t),Br(t.next),t=i=s),t=t.next}while(t!==i);return Qi(t)}function qp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tm(o,a)){let l=Dd(o,a);o=Qi(o,o.next),l=Qi(l,l.next),Fr(o,e,t,n,s,r,0),Fr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Yp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Pd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(em(c))}s.sort(Kp);for(let r=0;r<s.length;r++)t=Zp(s[r],t);return t}function Kp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Zp(i,e){let t=Jp(i,e);if(!t)return e;let n=Dd(t,i);return Qi(n,n.next),Qi(t,t.next)}function Jp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Gs(i,t))return t;do{if(Gs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ld(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Or(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&$p(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function $p(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function jp(i,e,t,n){let s=i;do s.z===0&&(s.z=ic(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qp(s)}function Qp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ic(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function em(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ld(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function dr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ld(i,e,t,n,s,r,o,a)}function tm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!nm(i,e)&&(Or(i,e)&&Or(e,i)&&im(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||Gs(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gs(i,e){return i.x===e.x&&i.y===e.y}function Nd(i,e,t,n){let s=ko(Tt(i,e,t)),r=ko(Tt(i,e,n)),o=ko(Tt(t,n,i)),a=ko(Tt(t,n,e));return!!(s!==r&&o!==a||s===0&&zo(i,t,e)||r===0&&zo(i,n,e)||o===0&&zo(t,i,n)||a===0&&zo(t,e,n))}function zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ko(i){return i>0?1:i<0?-1:0}function nm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Or(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function im(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Dd(i,e){let t=sc(i.i,i.x,i.y),n=sc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nu(i,e,t,n){let s=sc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var rc=class{static triangulate(e,t,n=2){return Hp(e,t,n)}},Dn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Du(e),Uu(n,e);let o=e.length;t.forEach(Du);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Uu(n,t[l]);let a=rc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Du(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Uu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var zr=class i extends Bt{constructor(e=new Ci([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:rm,T,y=!1,w,A,_,M;if(m){T=m.getSpacedPoints(h),y=!0,f=!1;let Q=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,Q),A=new F,_=new F,M=new F}f||(p=0,d=0,g=0,x=0);let P=a.extractPoints(c),E=P.shape,L=P.holes;if(!Dn.isClockWise(E)){E=E.reverse();for(let Q=0,ue=L.length;Q<ue;Q++){let ae=L[Q];Dn.isClockWise(ae)&&(L[Q]=ae.reverse())}}function I(Q){let ae=10000000000000001e-36,Te=Q[0];for(let ge=1;ge<=Q.length;ge++){let We=ge%Q.length,Oe=Q[We],re=Oe.x-Te.x,we=Oe.y-Te.y,$e=re*re+we*we,D=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(Te.x),Math.abs(Te.y)),ct=ae*D*D;if($e<=ct){Q.splice(We,1),ge--;continue}Te=Oe}}I(E),L.forEach(I);let N=L.length,B=E;for(let Q=0;Q<N;Q++){let ue=L[Q];E=E.concat(ue)}function k(Q,ue,ae){return ue||Ve("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ue,ae)}let z=E.length;function Y(Q,ue,ae){let Te,ge,We,Oe=Q.x-ue.x,re=Q.y-ue.y,we=ae.x-Q.x,$e=ae.y-Q.y,D=Oe*Oe+re*re,ct=Oe*$e-re*we;if(Math.abs(ct)>Number.EPSILON){let je=Math.sqrt(D),ft=Math.sqrt(we*we+$e*$e),de=ue.x-re/je,vt=ue.y+Oe/je,Ee=ae.x-$e/ft,He=ae.y+we/ft,R=((Ee-de)*$e-(He-vt)*we)/(Oe*$e-re*we);Te=de+Oe*R-Q.x,ge=vt+re*R-Q.y;let v=Te*Te+ge*ge;if(v<=2)return new he(Te,ge);We=Math.sqrt(v/2)}else{let je=!1;Oe>Number.EPSILON?we>Number.EPSILON&&(je=!0):Oe<-Number.EPSILON?we<-Number.EPSILON&&(je=!0):Math.sign(re)===Math.sign($e)&&(je=!0),je?(Te=-re,ge=Oe,We=Math.sqrt(D)):(Te=Oe,ge=re,We=Math.sqrt(D/2))}return new he(Te/We,ge/We)}let W=[];for(let Q=0,ue=B.length,ae=ue-1,Te=Q+1;Q<ue;Q++,ae++,Te++)ae===ue&&(ae=0),Te===ue&&(Te=0),W[Q]=Y(B[Q],B[ae],B[Te]);let J=[],le,oe=W.concat();for(let Q=0,ue=N;Q<ue;Q++){let ae=L[Q];le=[];for(let Te=0,ge=ae.length,We=ge-1,Oe=Te+1;Te<ge;Te++,We++,Oe++)We===ge&&(We=0),Oe===ge&&(Oe=0),le[Te]=Y(ae[Te],ae[We],ae[Oe]);J.push(le),oe=oe.concat(le)}let De;if(p===0)De=Dn.triangulateShape(B,L);else{let Q=[],ue=[];for(let ae=0;ae<p;ae++){let Te=ae/p,ge=d*Math.cos(Te*Math.PI/2),We=g*Math.sin(Te*Math.PI/2)+x;for(let Oe=0,re=B.length;Oe<re;Oe++){let we=k(B[Oe],W[Oe],We);Be(we.x,we.y,-ge),Te===0&&Q.push(we)}for(let Oe=0,re=N;Oe<re;Oe++){let we=L[Oe];le=J[Oe];let $e=[];for(let D=0,ct=we.length;D<ct;D++){let je=k(we[D],le[D],We);Be(je.x,je.y,-ge),Te===0&&$e.push(je)}Te===0&&ue.push($e)}}De=Dn.triangulateShape(Q,ue)}let q=De.length,ee=g+x;for(let Q=0;Q<z;Q++){let ue=f?k(E[Q],oe[Q],ee):E[Q];y?(_.copy(w.normals[0]).multiplyScalar(ue.x),A.copy(w.binormals[0]).multiplyScalar(ue.y),M.copy(T[0]).add(_).add(A),Be(M.x,M.y,M.z)):Be(ue.x,ue.y,0)}for(let Q=1;Q<=h;Q++)for(let ue=0;ue<z;ue++){let ae=f?k(E[ue],oe[ue],ee):E[ue];y?(_.copy(w.normals[Q]).multiplyScalar(ae.x),A.copy(w.binormals[Q]).multiplyScalar(ae.y),M.copy(T[Q]).add(_).add(A),Be(M.x,M.y,M.z)):Be(ae.x,ae.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){let ue=Q/p,ae=d*Math.cos(ue*Math.PI/2),Te=g*Math.sin(ue*Math.PI/2)+x;for(let ge=0,We=B.length;ge<We;ge++){let Oe=k(B[ge],W[ge],Te);Be(Oe.x,Oe.y,u+ae)}for(let ge=0,We=L.length;ge<We;ge++){let Oe=L[ge];le=J[ge];for(let re=0,we=Oe.length;re<we;re++){let $e=k(Oe[re],le[re],Te);y?Be($e.x,$e.y+T[h-1].y,T[h-1].x+ae):Be($e.x,$e.y,u+ae)}}}_e(),Le();function _e(){let Q=s.length/3;if(f){let ue=0,ae=z*ue;for(let Te=0;Te<q;Te++){let ge=De[Te];at(ge[2]+ae,ge[1]+ae,ge[0]+ae)}ue=h+p*2,ae=z*ue;for(let Te=0;Te<q;Te++){let ge=De[Te];at(ge[0]+ae,ge[1]+ae,ge[2]+ae)}}else{for(let ue=0;ue<q;ue++){let ae=De[ue];at(ae[2],ae[1],ae[0])}for(let ue=0;ue<q;ue++){let ae=De[ue];at(ae[0]+z*h,ae[1]+z*h,ae[2]+z*h)}}n.addGroup(Q,s.length/3-Q,0)}function Le(){let Q=s.length/3,ue=0;Se(B,ue),ue+=B.length;for(let ae=0,Te=L.length;ae<Te;ae++){let ge=L[ae];Se(ge,ue),ue+=ge.length}n.addGroup(Q,s.length/3-Q,1)}function Se(Q,ue){let ae=Q.length;for(;--ae>=0;){let Te=ae,ge=ae-1;ge<0&&(ge=Q.length-1);for(let We=0,Oe=h+p*2;We<Oe;We++){let re=z*We,we=z*(We+1),$e=ue+Te+re,D=ue+ge+re,ct=ue+ge+we,je=ue+Te+we;ze($e,D,ct,je)}}}function Be(Q,ue,ae){l.push(Q),l.push(ue),l.push(ae)}function at(Q,ue,ae){Je(Q),Je(ue),Je(ae);let Te=s.length/3,ge=b.generateTopUV(n,s,Te-3,Te-2,Te-1);rt(ge[0]),rt(ge[1]),rt(ge[2])}function ze(Q,ue,ae,Te){Je(Q),Je(ue),Je(Te),Je(ue),Je(ae),Je(Te);let ge=s.length/3,We=b.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);rt(We[0]),rt(We[1]),rt(We[3]),rt(We[1]),rt(We[2]),rt(We[3])}function Je(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function rt(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return om(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nc[s.type]().fromJSON(s)),new i(n,e.options)}},rm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-u),new he(f,1-g),new he(x,1-m)]:[new he(a,1-l),new he(h,1-u),new he(d,1-g),new he(p,1-m)]}};function om(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ii=class i extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let b=m*f-o;for(let T=0;T<c;T++){let y=T*u-r;g.push(y,-b,0),x.push(0,0,1),p.push(T/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let T=b+c*m,y=b+c*(m+1),w=b+1+c*(m+1),A=b+1+c*m;d.push(T,y,A),d.push(y,w,A)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Pi=class i extends Bt{constructor(e=new Ci([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(r,3)),this.setAttribute("uv",new yt(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;Dn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let b=g[p];Dn.isClockWise(b)===!0&&(g[p]=b.reverse())}let x=Dn.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let b=g[p];d=d.concat(b)}for(let p=0,m=d.length;p<m;p++){let b=d[p];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,m=x.length;p<m;p++){let b=x[p],T=b[0]+u,y=b[1]+u,w=b[2]+u;n.push(T,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return am(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function am(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Fu(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Fu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=ls(i[t]);for(let s in n)e[s]=n[s]}return e}function Fu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Ud={clone:ls,merge:Zt},cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.linewidth=e.linewidth,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ha=class extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zt=class extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_t=class extends zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ua=class extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},da=class extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function um(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ou(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function dm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Bn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fa=class extends Bn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jl,endingEnd:jl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ql:r=e,a=2*t-n;break;case ec:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ql:o=e,l=2*n-t;break;case ec:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,b=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-d)*p+(1.5+d)*x+.5*g,y=d*p-d*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+b*o[c+w]+T*o[l+w]+y*o[u+w];return r}},pa=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},ma=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ga=class extends Bn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),x=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*g;return r}let f=a*2,d=e-1;for(let g=0;g!==a;++g){let x=o[c+g],p=o[l+g],m=d*f+g*2,b=u[m],T=u[m+1],y=e*f+g*2,w=h[y],A=h[y+1],_=pm(n,t,b,w,s);r[g]=Fd(_,x,T,A,p)}return r}};function Fd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function fm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function pm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Fd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=fm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mi(t,this.TimeBufferType),this.values=Mi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mi(e.times,Array),values:Mi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),fr(e.settings)&&(n.settings={inTangents:Mi(e.settings.inTangents,Array),outTangents:Mi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ga(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ki:t=this.InterpolantFactoryMethodDiscrete;break;case Zi:t=this.InterpolantFactoryMethodLinear;break;case Vo:t=this.InterpolantFactoryMethodSmooth;break;case $l:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ki;case this.InterpolantFactoryMethodLinear:return Zi;case this.InterpolantFactoryMethodSmooth:return Vo;case this.InterpolantFactoryMethodBezier:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;fr(this.settings)&&(Bu(this.settings.inTangents,e),Bu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;fr(this.settings)&&(zu(this.settings.inTangents,e),zu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&jf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,fr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function zu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Zi;var si=class extends nn{constructor(e,t,n){super(e,t,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Ki;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};kr.prototype.ValueTypeName="color";var ri=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};ri.prototype.ValueTypeName="number";var _a=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},oi=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}};oi.prototype.ValueTypeName="quaternion";oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends nn{constructor(e,t,n){super(e,t,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ki;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Li.prototype.ValueTypeName="vector";var Gr=class{constructor(e="",t=-1,n=[],s=_d){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Rn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(gm(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=um(l);l=Ou(l,1,h),c=Ou(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ri(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function mm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ri;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return kr;case"quaternion":return oi;case"bool":case"boolean":return si;case"string":return ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=mm(i.type);if(i.times===void 0){let n=[],s=[];dm(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),fr(i.settings)&&(t.settings={inTangents:Mi(i.settings.inTangents,Float32Array),outTangents:Mi(i.settings.outTangents,Float32Array)}),t}var Un={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ku(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ku(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ku(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var xa=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Od=new xa,wn=class{constructor(e){this.manager=e!==void 0?e:Od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zn={},oc=class extends Error{constructor(e,t){super(e),this.response=t}},es=class extends wn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Un.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:s});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Zn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,p=new ReadableStream({start(m){b();function b(){u.read().then(({done:T,value:y})=>{if(T)m.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let A=0,_=h.length;A<_;A++){let M=h[A];M.onProgress&&M.onProgress(w)}m.enqueue(y),b()}},T=>{m.error(T)})}}});return new Response(p)}else throw new oc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Un.add(`file:${e}`,c);let h=Zn[e];delete Zn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var bs=new WeakMap,ya=class extends wn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Un.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=bs.get(o);u===void 0&&(u=[],bs.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Is("img");function l(){h(),t&&t(this);let u=bs.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}bs.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Un.remove(`image:${e}`);let f=bs.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}bs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Un.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Hr=class extends wn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new wi,a=new es(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):Ve(h);return}r._applyTexData(o,c),t&&t(o,c)},n,s),o}createDataTexture(e){let t=new wi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Qt,e.wrapT=t.wrapT!==void 0?t.wrapT:Qt,e.magFilter=t.magFilter!==void 0?t.magFilter:St,e.minFilter=t.minFilter!==void 0?t.minFilter:St,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=pn),t.mipmapCount===1&&(e.minFilter=St),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Vr=class extends wn{constructor(e){super(e)}load(e,t,n,s){let r=new Nt,o=new ya(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hs=class extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Kl=new Ke,Gu=new F,Hu=new F,Vs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Kl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Cs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this.filterNode=e.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Go=new F,Ho=new cn,Nn=new F,Wr=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Go,Ho,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){let s=super.updateWorldMatrix(e,t,n);return this.matrixWorld.decompose(Go,Ho,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,Nn.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},vi=new F,Vu=new he,Wu=new he,It=class extends Wr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Wu),t.subVectors(Wu,Vu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ac=class extends Vs{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ji*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xr=class extends Hs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ac}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},lc=class extends Vs{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0}},li=class extends Hs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ts=class extends Wr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cc=class extends Vs{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ni=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new cc}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ci=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Zl=new WeakMap,qr=class extends wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Un.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Zl.has(o)===!0?(s&&s(Zl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Un.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Zl.set(l,c),Un.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Un.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ts=-90,As=1,Ws=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(Ts,As,e,t);s.layers=this.layers,this.add(s);let r=new It(Ts,As,e,t);r.layers=this.layers,this.add(r);let o=new It(Ts,As,e,t);o.layers=this.layers,this.add(o);let a=new It(Ts,As,e,t);a.layers=this.layers,this.add(a);let l=new It(Ts,As,e,t);l.layers=this.layers,this.add(l);let c=new It(Ts,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},va=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Hc="\\[\\]\\.:\\/",_m=new RegExp("["+Hc+"]","g"),Vc="[^"+Hc+"]",xm="[^"+Hc.replace("\\.","")+"]",ym=/((?:WC+[\/:])*)/.source.replace("WC",Vc),vm=/(WCOD+)?/.source.replace("WCOD",xm),Mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),Sm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),bm=new RegExp("^"+ym+vm+Mm+Sm+"$"),Tm=["material","materials","bones","map"],hc=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_m,"")}static parseTrackName(e){let t=bm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=hc;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qy=new Float32Array(1);var Xu=new Ke,Yr=class{constructor(e,t,n=0,s=1/0){this.ray=new Ai(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(e,t=!0,n=[]){return uc(e,this,n,t),n.sort(qu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)uc(e[s],this,n,t);return n.sort(qu),n}};function qu(i,e){return i.distance-e.distance}function uc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)uc(r[o],e,t,!0)}}var Zc=class Zc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Zc.prototype.isMatrix2=!0;var dc=Zc;var Jn=Am();function Am(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function wm(i){Math.abs(i)>65504&&Fe("DataUtils.toHalfFloat(): Value out of range."),i=et(i,-65504,65504),Jn.floatView[0]=i;let e=Jn.uint32View[0],t=e>>23&511;return Jn.baseTable[t]+((e&8388607)>>Jn.shiftTable[t])}function Em(i){let e=i>>10;return Jn.uint32View[0]=Jn.mantissaTable[Jn.offsetTable[e]+(i&1023)]+Jn.exponentTable[e],Jn.floatView[0]}var Di=class{static toHalfFloat(e){return wm(e)}static fromHalfFloat(e){return Em(e)}};function Wc(i,e,t,n){let s=Rm(n);switch(t){case Rc:return i*e;case Ra:return i*e/s.components*s.byteLength;case Ca:return i*e/s.components*s.byteLength;case Ui:return i*e*2/s.components*s.byteLength;case Ia:return i*e*2/s.components*s.byteLength;case Cc:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case Pa:return i*e*4/s.components*s.byteLength;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:case Ua:return Math.max(i,16)*Math.max(e,8)/4;case La:case Da:return Math.max(i,8)*Math.max(e,8)/2;case Fa:case Oa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ba:case eo:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case nl:case il:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rl:case ol:return Math.ceil(i/4)*Math.ceil(e/4)*8;case to:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rm(i){switch(i){case on:case Tc:return{byteLength:1,components:1};case js:case Ac:case jt:return{byteLength:2,components:1};case wa:case Ea:return{byteLength:2,components:4};case En:case Aa:case Kt:return{byteLength:4,components:1};case wc:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);function of(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	#if defined( STANDARD )
		reflectedLight.indirectDiffuse *= computeMultiBounceOcclusion( ambientOcclusion, material.diffuseContribution );
	#else
		reflectedLight.indirectDiffuse *= ambientOcclusion;
	#endif
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= computeSpecularOcclusion( saturate( dot( geometryClearcoatNormal, geometryViewDir ) ), ambientOcclusion, material.clearcoatRoughness );
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		float specularOcclusion = computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
		reflectedLight.indirectSpecular *= computeMultiBounceOcclusion( specularOcclusion, material.specularColorBlended );
	#endif
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( textureLod( gradientMap, coord, 0.0 ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
vec3 getIndirectLightRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if ( NUM_HEMI_LIGHTS > 0 )
		vec3 reflectVec = normalize( mix( reflect( - viewDir, normal ), normal, pow4( roughness ) ) );
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], reflectVec );
		}
		#pragma unroll_loop_end
	#endif
	return irradiance * RECIPROCAL_PI;
}
#include <lightprobes_pars_fragment>`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Eg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = textureLod( dfgLUT, vec2( roughness, dotNV ), 0.0 ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = textureLod( ltc_1, uv, 0.0 );
		vec4 t2 = textureLod( ltc_2, uv, 0.0 );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = textureLod( ltc_1, uvClearcoat, 0.0 );
			vec4 t2Clearcoat = textureLod( ltc_2, uvClearcoat, 0.0 );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 indirectSpecular = radiance * ( singleScattering + multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}
vec3 computeMultiBounceOcclusion( const in float visibility, const in vec3 albedo ) {
	vec3 a = 2.0404 * albedo - 0.3324;
	vec3 b = - 4.7951 * albedo + 0.6417;
	vec3 c = 2.7552 * albedo + 0.6903;
	return max( vec3( visibility ), ( ( visibility * a + b ) * visibility + c ) * visibility );
}`,Rg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = textureLod( dfgLUT, vec2( material.roughness, dotNVms ), 0.0 ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal ) * probesIntensity[ i ];
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = getIndirectLightRadiance( geometryViewDir, geometryNormal, material.roughness );
	vec3 clearcoatRadiance = vec3( 0.0 );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIndirectLightRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			irradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
uniform float probesIntensity[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5 * step( 1.5, probesResolution );
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ), 0.0 );
	vec4 s1 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s2 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s3 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s4 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s5 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s6 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = textureLod( shadowMap, shadowCoord.xy, 0.0 ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = textureLod( shadowMap, shadowCoord.xy, 0.0 ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureLod( shadowMap, bd3D, 0.0 ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,J0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Im,alphahash_pars_fragment:Pm,alphamap_fragment:Lm,alphamap_pars_fragment:Nm,alphatest_fragment:Dm,alphatest_pars_fragment:Um,aomap_fragment:Fm,aomap_pars_fragment:Om,batching_pars_vertex:Bm,batching_vertex:zm,begin_vertex:km,beginnormal_vertex:Gm,bsdfs:Hm,iridescence_fragment:Vm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:Km,color_fragment:Zm,color_pars_fragment:Jm,color_pars_vertex:$m,color_vertex:jm,common:Qm,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:Mg,envmap_vertex:ug,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:_g,lights_lambert_fragment:xg,lights_lambert_pars_fragment:yg,lights_pars_begin:vg,lights_toon_fragment:Sg,lights_toon_pars_fragment:bg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Ag,lights_physical_fragment:wg,lights_physical_pars_fragment:Eg,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Ig,lightprobes_pars_fragment:Pg,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Ug,map_fragment:Fg,map_pars_fragment:Og,map_particle_fragment:Bg,map_particle_pars_fragment:zg,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Gg,morphinstance_vertex:Hg,morphcolor_vertex:Vg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:Kg,normal_pars_fragment:Zg,normal_pars_vertex:Jg,normal_vertex:$g,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:t0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:s0,premultiplied_alpha_fragment:r0,project_vertex:o0,dithering_fragment:a0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:u0,shadowmap_pars_vertex:d0,shadowmap_vertex:f0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:_0,skinnormal_vertex:x0,specularmap_fragment:y0,specularmap_pars_fragment:v0,tonemapping_fragment:M0,tonemapping_pars_fragment:S0,transmission_fragment:b0,transmission_pars_fragment:T0,uv_pars_fragment:A0,uv_pars_vertex:w0,uv_vertex:E0,worldpos_vertex:R0,background_vert:C0,background_frag:I0,backgroundCube_vert:P0,backgroundCube_frag:L0,cube_vert:N0,cube_frag:D0,depth_vert:U0,depth_frag:F0,distance_vert:O0,distance_frag:B0,equirect_vert:z0,equirect_frag:k0,linedashed_vert:G0,linedashed_frag:H0,meshbasic_vert:V0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:q0,meshmatcap_vert:Y0,meshmatcap_frag:K0,meshnormal_vert:Z0,meshnormal_frag:J0,meshphong_vert:$0,meshphong_frag:j0,meshphysical_vert:Q0,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:s_,shadow_vert:r_,shadow_frag:o_,sprite_vert:a_,sprite_frag:l_},be={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Gn={basic:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Zt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Zt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ce(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Zt([be.points,be.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Zt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Zt([be.common,be.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Zt([be.sprite,be.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Zt([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Zt([be.lights,be.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Gn.physical={uniforms:Zt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var hl={r:0,b:0,g:0},c_=new Ke,af=new Ye;af.set(-1,0,0,0,1,0,0,0,1);function h_(i,e,t,n,s,r){let o=new Ce(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let y=b.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(b){let T=!1,y=d(b);y===null?p(o,a):y&&y.isColor&&(p(y,1),T=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,T){let y=d(T);y&&y.isCubeTexture?(c===void 0&&(c=new qe(new dn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ls(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=nt.getTransfer(y.colorSpace)!==ut,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new qe(new Ii(2,2),new On({name:"BackgroundMaterial",uniforms:ls(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,T){b.getRGB(hl,Gc(i)),t.buffers.color.setClear(hl.r,hl.g,hl.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:g,addToRenderList:x,dispose:m}}function u_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(L,O,I,N,B){let k=!1,z=u(L,N,I,O);r!==z&&(r=z,c(r.object)),k=d(L,N,I,B),k&&g(L,N,I,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(L,O,I,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,O,I,N){let B=N.wireframe===!0,k=n[O.id];k===void 0&&(k={},n[O.id]=k);let z=L.isInstancedMesh===!0?L.id:0,Y=k[z];Y===void 0&&(Y={},k[z]=Y);let W=Y[I.id];W===void 0&&(W={},Y[I.id]=W);let J=W[B];return J===void 0&&(J=f(l()),W[B]=J),J}function f(L){let O=[],I=[],N=[];for(let B=0;B<t;B++)O[B]=0,I[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:I,attributeDivisors:N,object:L,attributes:{},index:null}}function d(L,O,I,N){let B=r.attributes,k=O.attributes,z=0,Y=I.getAttributes();for(let W in Y)if(Y[W].location>=0){let le=B[W],oe=k[W];if(oe===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),le===void 0||le.attribute!==oe||oe&&le.data!==oe.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function g(L,O,I,N){let B={},k=O.attributes,z=0,Y=I.getAttributes();for(let W in Y)if(Y[W].location>=0){let le=k[W];le===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(le=L.instanceColor));let oe={};oe.attribute=le,le&&le.data&&(oe.data=le.data),B[W]=oe,z++}r.attributes=B,r.attributesNum=z,r.index=N}function x(){let L=r.newAttributes;for(let O=0,I=L.length;O<I;O++)L[O]=0}function p(L){m(L,0)}function m(L,O){let I=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;I[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),B[L]!==O&&(i.vertexAttribDivisor(L,O),B[L]=O)}function b(){let L=r.newAttributes,O=r.enabledAttributes;for(let I=0,N=O.length;I<N;I++)O[I]!==L[I]&&(i.disableVertexAttribArray(I),O[I]=0)}function T(L,O,I,N,B,k,z){z===!0?i.vertexAttribIPointer(L,O,I,B,k):i.vertexAttribPointer(L,O,I,N,B,k)}function y(L,O,I,N){x();let B=N.attributes,k=I.getAttributes(),z=O.defaultAttributeValues;for(let Y in k){let W=k[Y];if(W.location>=0){let J=B[Y];if(J===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let le=J.normalized,oe=J.itemSize,De=e.get(J);if(De===void 0)continue;let q=De.buffer,ee=De.type,_e=De.bytesPerElement,Le=ee===i.INT||ee===i.UNSIGNED_INT||J.gpuType===Aa;if(J.isInterleavedBufferAttribute){let Se=J.data,Be=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,at=J.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let ze=0;ze<W.locationSize;ze++)m(W.location+ze,Se.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ze=0;ze<W.locationSize;ze++)p(W.location+ze);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ze=0;ze<W.locationSize;ze++)T(W.location+ze,oe/W.locationSize,ee,le,Be*_e,(at+oe/W.locationSize*ze)*_e,Le)}else{if(J.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se,J.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<W.locationSize;Se++)p(W.location+Se);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Se=0;Se<W.locationSize;Se++)T(W.location+Se,oe/W.locationSize,ee,le,oe*_e,oe/W.locationSize*Se*_e,Le)}}else if(z!==void 0){let le=z[Y];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(W.location,le);break;case 3:i.vertexAttrib3fv(W.location,le);break;case 4:i.vertexAttrib4fv(W.location,le);break;default:i.vertexAttrib1fv(W.location,le)}}}}b()}function w(){P();for(let L in n){let O=n[L];for(let I in O){let N=O[I];for(let B in N){let k=N[B];for(let z in k)h(k[z].object),delete k[z];delete N[B]}}delete n[L]}}function A(L){if(n[L.id]===void 0)return;let O=n[L.id];for(let I in O){let N=O[I];for(let B in N){let k=N[B];for(let z in k)h(k[z].object),delete k[z];delete N[B]}}delete n[L.id]}function _(L){for(let O in n){let I=n[O];for(let N in I){let B=I[N];if(B[L.id]===void 0)continue;let k=B[L.id];for(let z in k)h(k[z].object),delete k[z];delete B[L.id]}}}function M(L){for(let O in n){let I=n[O],N=L.isInstancedMesh===!0?L.id:0,B=I[N];if(B!==void 0){for(let k in B){let z=B[k];for(let Y in z)h(z[Y].object),delete z[Y];delete B[k]}delete I[N],Object.keys(I).length===0&&delete n[O]}}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function d_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function f_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==_n&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==on&&_!==Kt&&!M&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:A}}function p_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new An,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,T=b*4,y=m.clippingState||null;l.value=y,y=h(g,f,T,d);for(let w=0;w!==T;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,y=d;T!==x;++T,y+=4)o.copy(u[T]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var ro=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dn(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:ns});r.uniforms.tEquirect.value=t;let o=new qe(s,r),a=t.minFilter;return t.minFilter===pn&&(t.minFilter=St),new Ws(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Bd=256,m_=3,g_=20,lf=256,cf=16,__=3,x_=new F,y_=new Ce,cs=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ws(1,10,null),this._boxMesh=new qe(new dn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=x_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(y_));let p=new Ws(n,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Bd,Oc(e))}_fromTexture(e,t){e.mapping===rs||e.mapping===Zs?this._setSize(e.image.length===0?Bd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=zd(e,!1,!1),n=Math.log2(e)-m_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===rs||e.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=v_(),this._integrationMaterial=M_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/cf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-__)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(lf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=S_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function zd(i,e,t){return new ro(i,{minFilter:pn,generateMipmaps:e,type:jt,colorSpace:Gt,depthBuffer:t})}function oo(i,e,t){return new On({name:i,uniforms:e,vertexShader:tt.cube_vert,fragmentShader:t,side:Ht,blending:ns,depthTest:!1,depthWrite:!1})}function v_(){return oo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function M_(){return oo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function S_(){return oo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${g_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kd(){return oo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Gd(){return oo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function b_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Js||d===ba)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new ro(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Js||d===ba,x=d===rs||d===Zs;if(g||x){let p=t.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new cs(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let b=f.image;return g&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new cs(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===Js?f.mapping=rs:d===ba&&(f.mapping=Zs),f}function l(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function T_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Yi("WebGLRenderer: "+n+" extension not supported."),s}}}function A_(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)e.update(x[p],i.ARRAY_BUFFER)}function u(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let b=x!==null?x.count:p.count-1,T=p.count>=65535?Sr:Mr,y=new T(Math.ceil(b/3)*6,1),w=y.array;if(x!==null){let _=x.array;m=x.version;for(let M=0,P=0;M<b;M+=3){let E=_[M+0],L=_[M+1],O=_[M+2];w[P++]=E,w[P++]=L,w[P++]=L,w[P++]=O,w[P++]=O,w[P++]=E}}else{m=p.version;for(let _=0,M=0;_<b;_+=3){let P=_+0,E=_+1,L=_+2;w[M++]=P,w[M++]=E,w[M++]=E,w[M++]=L,w[M++]=L,w[M++]=P}}y.version=m;let A=r.get(g);A&&e.remove(A),r.set(g,y)}function f(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return r.get(g)}function d(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function w_(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function E_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function R_(i,e,t){let n=new WeakMap,s=new dt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let P=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let y=a.attributes.position.count*T,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*w*4*u),_=new vr(A,y,w,u);_.type=Kt,_.needsUpdate=!0;let M=T*4;for(let E=0;E<u;E++){let L=p[E],O=m[E],I=b[E],N=y*w*4*E;for(let B=0;B<L.count;B++){let k=B*M;d===!0&&(s.fromBufferAttribute(L,B),A[N+k+0]=s.x,A[N+k+1]=s.y,A[N+k+2]=s.z,A[N+k+3]=0),g===!0&&(s.fromBufferAttribute(O,B),A[N+k+4]=s.x,A[N+k+5]=s.y,A[N+k+6]=s.z,A[N+k+7]=0),x===!0&&(s.fromBufferAttribute(I,B),A[N+k+8]=s.x,A[N+k+9]=s.y,A[N+k+10]=s.z,A[N+k+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new he(y,w)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function C_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var I_={[yc]:"LINEAR_TONE_MAPPING",[vc]:"REINHARD_TONE_MAPPING",[Mc]:"CINEON_TONE_MAPPING",[Ys]:"ACES_FILMIC_TONE_MAPPING",[ss]:"AGX_TONE_MAPPING",[Ks]:"NEUTRAL_TONE_MAPPING",[Sc]:"CUSTOM_TONE_MAPPING"};function P_(i,e,t,n,s,r){let o=new hn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Bt;h.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yt([0,2,0,0,2,0],2));let u=new ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new qe(h,u),d=new ts(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,b=null,T=[],y=!1;this.setSize=function(w,A){o.setSize(w,A),a!==null&&a.setSize(w,A),l!==null&&l.setSize(w,A);for(let _=0;_<T.length;_++){let M=T[_];M.setSize&&M.setSize(w,A)}},this.setEffects=function(w){T=w,y=T.length>0&&T[0].isRenderPass===!0;let A=o.width,_=o.height;T.length>0&&a===null&&(a=new hn(A,_,{type:jt,depthBuffer:!1,stencilBuffer:!1}),l=new hn(A,_,{type:jt,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&T.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new ti(A,_),r===!0&&(c.format=hi,c.type=as)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<T.length;P++){let E=T[P];E.setSize&&E.setSize(A,_),M&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(w,A){if(p||w.toneMapping===zn&&T.length===0)return!1;if(b=A,A!==null){let _=A.width,M=A.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return y===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=zn,!0},this.hasRenderPass=function(){return y},this.end=function(w,A){w.toneMapping=m,p=!0;let _=o,M=a;for(let P=0;P<T.length;P++){let E=T[P];E.enabled!==!1&&(E.render(w,M,_,A),E.needsSwap!==!1&&(_=M,M=M===a?l:a))}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,u.defines={},nt.getTransfer(g)===ut&&(u.defines.SRGB_TRANSFER="");let P=I_[x];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(b),w.render(f,d),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var hf=new Nt,uf=new ti(1,1),df=new Ir(1),ff=new vr,pf=new ea,mf=new Cr,Hd=[],Vd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),qd=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hd[s];if(r===void 0&&(r=new Float32Array(s),Hd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fl(i,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function L_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function F_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;qd.set(n),i.uniformMatrix2fv(this.addr,!1,qd),Ut(t,n)}}function O_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Xd.set(n),i.uniformMatrix3fv(this.addr,!1,Xd),Ut(t,n)}}function B_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Wd.set(n),i.uniformMatrix4fv(this.addr,!1,Wd),Ut(t,n)}}function z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function V_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function W_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function pl(i){return i.version===0&&(i.compareFunction=Nc,i.needsUpdate=!0),i}function Y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=pl(uf):r=hf,t.setTexture2D(e||r,s)}function K_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pf,s)}function Z_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=pl(df):r=mf,t.setTextureCube(e||r,s)}function J_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ff,s)}function $_(i){switch(i){case 5126:return L_;case 35664:return N_;case 35665:return D_;case 35666:return U_;case 35674:return F_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return k_;case 35668:case 35672:return G_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}function j_(i,e){i.uniform1fv(this.addr,e)}function Q_(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function ex(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function tx(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function nx(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ix(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sx(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rx(i,e){i.uniform1iv(this.addr,e)}function ox(i,e){i.uniform2iv(this.addr,e)}function ax(i,e){i.uniform3iv(this.addr,e)}function lx(i,e){i.uniform4iv(this.addr,e)}function cx(i,e){i.uniform1uiv(this.addr,e)}function hx(i,e){i.uniform2uiv(this.addr,e)}function ux(i,e){i.uniform3uiv(this.addr,e)}function dx(i,e){i.uniform4uiv(this.addr,e)}function fx(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=pl(uf):o=hf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function px(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pf,r[o])}function mx(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=pl(df):o=mf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function gx(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ff,r[o])}function _x(i){switch(i){case 5126:return j_;case 35664:return Q_;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}var jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}},Qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_x(t.type)}},eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function Yd(i,e){i.seq.push(e),i.map[e.id]=e}function xx(i,e,t){let n=i.name,s=n.length;for(Jc.lastIndex=0;;){let r=Jc.exec(n),o=Jc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yd(t,c===void 0?new jc(a,i,e):new Qc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new eh(a),Yd(t,u)),t=u}}}var er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);xx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Kd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var yx=37297,vx=0;function Mx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Zd=new Ye;function Sx(i){nt._getMatrix(Zd,nt.workingColorSpace,i);let e=`mat3( ${Zd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case xr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Mx(i.getShaderSource(e),a)}else return r}function bx(i,e){let t=Sx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Tx={[yc]:"Linear",[vc]:"Reinhard",[Mc]:"Cineon",[Ys]:"ACESFilmic",[ss]:"AgX",[Ks]:"Neutral",[Sc]:"Custom"};function Ax(i,e){let t=Tx[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ul=new F;function wx(){nt.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),e=ul.y.toFixed(4),t=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ex(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function Rx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function so(i){return i!==""}function $d(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(Ix,Px)}function Px(i,e){let t=tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return th(t)}var Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(i){return i.replace(Lx,Nx)}function Nx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ef(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Dx={[Kr]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function Ux(i){return Dx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fx={[Zs]:"ENVMAP_MODE_REFRACTION"};function Ox(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bx={[xc]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function zx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bx[i.combine]||"ENVMAP_BLENDING_NONE"}function kx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ux(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ox(t),u=zx(t),f=Ex(t),d=Rx(r),g=s.createProgram(),x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(so).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(so).join(`
`),p.length>0&&(p+=`
`)):(x=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?tt.tonemapping_pars_fragment:"",t.toneMapping!==zn?Ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,bx("linearToOutputTexel",t.outputColorSpace),wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=th(o),o=$d(o,t),o=jd(o,t),a=th(a),a=$d(a,t),a=jd(a,t),o=Qd(o),a=Qd(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=m+x+o,T=m+p+a,y=Kd(s,s.VERTEX_SHADER,b),w=Kd(s,s.FRAGMENT_SHADER,T);s.attachShader(g,y),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(E){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(y)||"",I=s.getShaderInfoLog(w)||"",N=L.trim(),B=O.trim(),k=I.trim(),z=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,w);else{let W=Jd(s,y,"vertex"),J=Jd(s,w,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+W+`
`+J)}else N!==""?Fe("WebGLProgram: Program Info Log:",N):(B===""||k==="")&&(Y=!1);Y&&(E.diagnostics={runnable:z,programLog:N,vertexShader:{log:B,prefix:x},fragmentShader:{log:k,prefix:p}})}s.deleteShader(y),s.deleteShader(w),_=new er(s,g),M=Cx(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,yx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=w,this}var Gx=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ih(e),t.set(e,n)),n}},ih=class{constructor(e){this.id=Gx++,this.code=e,this.usedTimes=0}};function Hx(i){return i===Ui||i===eo||i===to}function Vx(i,e,t,n,s,r){let o=new Ns,a=new nh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,M,P,E,L,O){let I=E.fog,N=L.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||B,k),Y=f[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Fe("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,le=J!==void 0?J.length:0,oe=0;N.morphAttributes.position!==void 0&&(oe=1),N.morphAttributes.normal!==void 0&&(oe=2),N.morphAttributes.color!==void 0&&(oe=3);let De,q,ee,_e;if(Y){let Me=Gn[Y];De=Me.vertexShader,q=Me.fragmentShader}else{De=_.vertexShader,q=_.fragmentShader;let Me=a.getVertexShaderStage(_),Qe=a.getFragmentShaderStage(_);a.update(_,Me,Qe),ee=Me.id,_e=Qe.id}let Le=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,at=L.isBatchedMesh===!0,ze=!!_.map,Je=!!_.matcap,rt=!!z,Q=rt&&z.isPMREMTexture===!0,ue=!!_.aoMap,ae=!!_.lightMap,Te=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,We=!!_.displacementMap,Oe=!!_.emissiveMap,re=!!_.metalnessMap,we=!!_.roughnessMap,$e=_.anisotropy>0,D=_.clearcoat>0,ct=_.diffuseRoughness>0,je=_.dispersion>0,ft=_.retroreflectivity>0,de=_.iridescence>0,vt=_.sheen>0,Ee=_.transmission>0,He=$e&&!!_.anisotropyMap,R=D&&!!_.clearcoatMap,v=D&&!!_.clearcoatNormalMap,G=D&&!!_.clearcoatRoughnessMap,se=ct&&!!_.diffuseRoughnessMap,j=de&&!!_.iridescenceMap,ce=de&&!!_.iridescenceThicknessMap,pe=vt&&!!_.sheenColorMap,Z=vt&&!!_.sheenRoughnessMap,$=!!_.specularMap,fe=!!_.specularColorMap,Re=!!_.specularIntensityMap,C=Ee&&!!_.transmissionMap,K=Ee&&!!_.thicknessMap,ne=!!_.gradientMap,te=!!_.alphaMap,me=_.alphaTest>0,xe=!!_.alphaHash,Ge=!!_.extensions,ie=zn;_.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ze=Q?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ne={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:q,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:at,batchingColor:at&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:Je,envMap:rt,envMapMode:rt&&z.mapping,envMapPMREM:Q,envMapMaxLod:Q?Ze.length-1:null,envMapSize:Q?Ze[0].width:null,aoMap:ue,lightMap:ae,bumpMap:Te,normalMap:ge,displacementMap:We,emissiveMap:Oe,normalMapObjectSpace:ge&&_.normalMapType===yd,normalMapTangentSpace:ge&&_.normalMapType===ll,packedNormalMap:ge&&_.normalMapType===ll&&Hx(_.normalMap.format),metalnessMap:re,roughnessMap:we,anisotropy:$e,anisotropyMap:He,clearcoat:D,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:G,diffuseRoughness:ct,diffuseRoughnessMap:se,dispersion:je,retroreflection:ft,iridescence:de,iridescenceMap:j,iridescenceThicknessMap:ce,sheen:vt,sheenColorMap:pe,sheenRoughnessMap:Z,specularMap:$,specularColorMap:fe,specularIntensityMap:Re,transmission:Ee,transmissionMap:C,thicknessMap:K,gradientMap:ne,opaque:_.transparent===!1&&_.blending===qs&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:me,alphaHash:xe,combine:_.combine,mapUv:ze&&d(_.map.channel),aoMapUv:ue&&d(_.aoMap.channel),lightMapUv:ae&&d(_.lightMap.channel),bumpMapUv:Te&&d(_.bumpMap.channel),normalMapUv:ge&&d(_.normalMap.channel),displacementMapUv:We&&d(_.displacementMap.channel),emissiveMapUv:Oe&&d(_.emissiveMap.channel),metalnessMapUv:re&&d(_.metalnessMap.channel),roughnessMapUv:we&&d(_.roughnessMap.channel),anisotropyMapUv:He&&d(_.anisotropyMap.channel),clearcoatMapUv:R&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(_.sheenRoughnessMap.channel),specularMapUv:$&&d(_.specularMap.channel),specularColorMapUv:fe&&d(_.specularColorMap.channel),specularIntensityMapUv:Re&&d(_.specularIntensityMap.channel),transmissionMapUv:C&&d(_.transmissionMap.channel),thicknessMapUv:K&&d(_.thicknessMap.channel),alphaMapUv:te&&d(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ge||$e),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(ze||te),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:oe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbeGrids:O.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===rn,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&_.extensions.multiDraw===!0||at)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)M.push(P),M.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(M,_),m(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let M=f[_.type],P;if(M){let E=Gn[M];P=Ud.clone(E.uniforms)}else P=_.uniforms;return P}function T(_,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new kx(i,M,_,s),c.push(P),h.set(M,P)),P}function y(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:b,acquireProgram:T,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:A}}function Wx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,x,p,m){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:m},i[e]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=g,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=p,b.group=m),e++,b}function l(f,d,g,x,p,m,b){b.reversedDepth===!0&&(p=-p);let T=a(f,d,g,x,p,m);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(f,d,g,x,p,m){let b=a(f,d,g,x,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function h(f,d){t.length>1&&t.sort(f||Xx),n.length>1&&n.sort(d||tf),s.length>1&&s.sort(d||tf)}function u(){for(let f=e,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function qx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new nf,i.set(n,[o])):s>=r.length?(o=new nf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ce};break;case"SpotLight":t={position:new F,direction:new F,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Kx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Zx=0;function Jx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $x(i){let e=new Yx,t=Kx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new F,r=new Ke,o=new Ke;function a(c){let h=0,u=0,f=0,d=0,g=0,x=0,p=0,m=0,b=0,T=0,y=0,w=0,A=0,_=0,M=0,P=0;c.sort(Jx);for(let L=0,O=c.length;L<O;L++){let I=c[L],N=I.color,B=I.intensity,k=I.distance,z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ui?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=N.r*B,u+=N.g*B,f+=N.b*B;else if(I.isSunLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,J=t.get(I);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=z;let le=W.getViewportCount();for(let oe=0;oe<le;oe++)n.sunShadowMatrix[x+oe]=W.getMatrix(oe),n.sunShadowCascade[x+oe]=W._cascadeData[oe];x+=le,g++}n.sun[d]=Y,d++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,J=t.get(I);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=Y,p++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(N).multiplyScalar(B),Y.distance=k,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[b]=Y;let W=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,W.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[b]=W.matrix,I.castShadow){let J=t.get(I);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.spotShadow[b]=J,n.spotShadowMap[b]=z,_++}b++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(N).multiplyScalar(B),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=Y,T++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let W=I.shadow,J=t.get(I);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=I.shadow.matrix,A++}n.point[m]=Y,m++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(B),Y.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[y]=Y,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let E=n.hash;(E.sunLength!==d||E.directionalLength!==p||E.pointLength!==m||E.spotLength!==b||E.rectAreaLength!==T||E.hemiLength!==y||E.numSunShadows!==g||E.numDirectionalShadows!==w||E.numPointShadows!==A||E.numSpotShadows!==_||E.numSpotMaps!==M)&&(n.sun.length=d,n.directional.length=p,n.spot.length=b,n.rectArea.length=T,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,E.sunLength=d,E.directionalLength=p,E.pointLength=m,E.spotLength=b,E.rectAreaLength=T,E.hemiLength=y,E.numSunShadows=g,E.numDirectionalShadows=w,E.numPointShadows=A,E.numSpotShadows=_,E.numSpotMaps=M,n.version=Zx++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){let y=c[b];if(y.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(y.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function sf(i){let e=new $x(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new sf(i),e.set(s,[a])):r>=o.length?(a=new sf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = textureLod( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution, 0.0 ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = textureLod( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution, 0.0 ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ty=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],ny=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],rf=new Ke,io=new F,$c=new F;function iy(i,e,t){let n=new Ei,s=new he,r=new he,o=new dt,a=new ua,l=new da,c={},h=t.maxTextureSize,u={[sn]:Ht,[Ht]:sn,[rn]:rn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Qx,fragmentShader:ey}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let m=this.type;this.render=function(A,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Zu&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kr);let P=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ns),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let I=m!==this.type;I&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=A.length;N<B;N++){let k=A[N],z=k.shadow;if(z===void 0){Fe("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let Y=z.getFrameExtents();s.multiply(Y),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,z.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||I===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Xs){if(k.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new hn(s.x,s.y,{format:Ui,type:jt,minFilter:St,magFilter:St,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new ti(s.x,s.y,Kt),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=jn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Rt,z.map.depthTexture.magFilter=Rt}else k.isPointLight?(z.map=new ro(s.x),z.map.depthTexture=new Ir(s.x,En)):(z.map=new hn(s.x,s.y),z.map.depthTexture=new ti(s.x,s.y,En)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=jn,this.type===Kr?(z.map.depthTexture.compareFunction=W?Lc:Pc,z.map.depthTexture.minFilter=St,z.map.depthTexture.magFilter=St):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Rt,z.map.depthTexture.magFilter=Rt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,M);let le=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let oe=0;oe<J;oe++){let De=z.getCamera(oe);if(k.isPointLight){let q=z.camera,ee=z.matrix,_e=k.distance||q.far;_e!==q.far&&(q.far=_e,q.updateProjectionMatrix()),io.setFromMatrixPosition(k.matrixWorld),q.position.copy(io),$c.copy(q.position),$c.add(ty[oe]),q.up.copy(ny[oe]),q.lookAt($c),q.updateMatrixWorld(),ee.makeTranslation(-io.x,-io.y,-io.z),rf.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(rf,q.coordinateSystem,q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(z.map),i.clear());let q=z.getViewport(oe);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),O.viewport(o)}n=z.getFrustum(oe),y(_,M,De,k,le,this.type)}z.isPointLightShadow!==!0&&this.type===Xs&&b(z,M),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(P,E,L)};function b(A,_){let M=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new hn(s.x,s.y,{format:Ui,type:jt}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,M,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,M,d,x,null)}function T(A,_,M,P){let E=null,L=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)E=L;else if(E=M.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=E.uuid,I=_.uuid,N=c[O];N===void 0&&(N={},c[O]=N);let B=N[I];B===void 0&&(B=E.clone(),N[I]=B,_.addEventListener("dispose",w)),E=B}if(E.visible=_.visible,E.wireframe=_.wireframe,P===Xs?E.side=_.shadowSide!==null?_.shadowSide:_.side:E.side=_.shadowSide!==null?_.shadowSide:u[_.side],E.alphaMap=_.alphaMap,E.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,E.map=_.map,E.clipShadows=_.clipShadows,E.clippingPlanes=_.clippingPlanes,E.clipIntersection=_.clipIntersection,E.displacementMap=_.displacementMap,E.displacementScale=_.displacementScale,E.displacementBias=_.displacementBias,E.wireframeLinewidth=_.wireframeLinewidth,E.linewidth=_.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=M}return E}function y(A,_,M,P,E,L){if(A.visible===!1)return;if(A.layers.test(E)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===Xs)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let N=e.update(A),B=A.material;if(Array.isArray(B)){let k=N.groups;for(let z=0,Y=k.length;z<Y;z++){let W=k[z],J=B[W.materialIndex];if(J&&J.visible){let le=T(A,J,P,L);A.onBeforeShadow(i,A,_,M,N,le,W),i.renderBufferDirect(M,null,N,le,A,W),A.onAfterShadow(i,A,_,M,N,le,W)}}}else if(B.visible){let k=T(A,B,P,L);A.onBeforeShadow(i,A,_,M,N,k,null),i.renderBufferDirect(M,null,N,k,A,null),A.onAfterShadow(i,A,_,M,N,k,null)}}let I=A.children;for(let N=0,B=I.length;N<B;N++)y(I[N],_,M,P,E,L)}function w(A){A.target.removeEventListener("dispose",w);for(let M in c){let P=c[M],E=A.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}function sy(i,e){function t(){let C=!1,K=new dt,ne=null,te=new dt(0,0,0,0);return{setMask:function(me){ne!==me&&!C&&(i.colorMask(me,me,me,me),ne=me)},setLocked:function(me){C=me},setClear:function(me,xe,Ge,ie,Ze){Ze===!0&&(me*=ie,xe*=ie,Ge*=ie),K.set(me,xe,Ge,ie),te.equals(K)===!1&&(i.clearColor(me,xe,Ge,ie),te.copy(K))},reset:function(){C=!1,ne=null,te.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,ne=null,te=null,me=null;return{setReversed:function(xe){if(K!==xe){let Ge=e.get("EXT_clip_control");xe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),K=xe;let ie=me;me=null,this.setClear(ie)}},getReversed:function(){return K},setTest:function(xe){xe?Se(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(xe){ne!==xe&&!C&&(i.depthMask(xe),ne=xe)},setFunc:function(xe){if(K&&(xe=Cd[xe]),te!==xe){switch(xe){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=xe}},setLocked:function(xe){C=xe},setClear:function(xe){me!==xe&&(me=xe,K&&(xe=1-xe),i.clearDepth(xe))},reset:function(){C=!1,ne=null,te=null,me=null,K=!1}}}function s(){let C=!1,K=null,ne=null,te=null,me=null,xe=null,Ge=null,ie=null,Ze=null;return{setTest:function(Ne){C||(Ne?Se(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Ne){K!==Ne&&!C&&(i.stencilMask(Ne),K=Ne)},setFunc:function(Ne,Me,Qe){(ne!==Ne||te!==Me||me!==Qe)&&(i.stencilFunc(Ne,Me,Qe),ne=Ne,te=Me,me=Qe)},setOp:function(Ne,Me,Qe){(xe!==Ne||Ge!==Me||ie!==Qe)&&(i.stencilOp(Ne,Me,Qe),xe=Ne,Ge=Me,ie=Qe)},setLocked:function(Ne){C=Ne},setClear:function(Ne){Ze!==Ne&&(i.clearStencil(Ne),Ze=Ne)},reset:function(){C=!1,K=null,ne=null,te=null,me=null,xe=null,Ge=null,ie=null,Ze=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],x=null,p=!1,m=null,b=null,T=null,y=null,w=null,A=null,_=null,M=new Ce(0,0,0),P=0,E=!1,L=null,O=null,I=null,N=null,B=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Y=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=Y>=2);let J=null,le={},oe=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),q=new dt().fromArray(oe),ee=new dt().fromArray(De);function _e(C,K,ne,te){let me=new Uint8Array(4),xe=i.createTexture();i.bindTexture(C,xe),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<ne;Ge++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(K+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return xe}let Le={};Le[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(i.DEPTH_TEST),o.setFunc(Es),ge(!1),We(fc),Se(i.CULL_FACE),ae(ns);function Se(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Be(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function at(C,K){return C===i.FRAMEBUFFER?f[i.DRAW_FRAMEBUFFER]===K&&f[i.READ_FRAMEBUFFER]===K?!1:(i.bindFramebuffer(i.FRAMEBUFFER,K),f[i.DRAW_FRAMEBUFFER]=K,f[i.READ_FRAMEBUFFER]=K,!0):f[C]===K?!1:(i.bindFramebuffer(C,K),f[C]=K,!0)}function ze(C){return C===i.FRAMEBUFFER&&(C=i.DRAW_FRAMEBUFFER),f[C]||null}function Je(C,K){let ne=g,te=!1;if(C){ne=d.get(K),ne===void 0&&(ne=[],d.set(K,ne));let me=C.textures;if(ne.length!==me.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ge=me.length;xe<Ge;xe++)ne[xe]=i.COLOR_ATTACHMENT0+xe;ne.length=me.length,te=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,te=!0);te&&i.drawBuffers(ne)}function rt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let Q={[is]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};Q[Qu]=i.MIN,Q[ed]=i.MAX;let ue={[td]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[cd]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[rd]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[fd]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(C,K,ne,te,me,xe,Ge,ie,Ze,Ne){if(C===ns){p===!0&&(Be(i.BLEND),p=!1);return}if(p===!1&&(Se(i.BLEND),p=!0),C!==Ju){if(C!==m||Ne!==E){if((b!==is||w!==is)&&(i.blendEquation(i.FUNC_ADD),b=is,w=is),Ne)switch(C){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zr:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",C);break}else switch(C){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pc:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",C);break}T=null,y=null,A=null,_=null,M.set(0,0,0),P=0,m=C,E=Ne}return}me=me||K,xe=xe||ne,Ge=Ge||te,(K!==b||me!==w)&&(i.blendEquationSeparate(Q[K],Q[me]),b=K,w=me),(ne!==T||te!==y||xe!==A||Ge!==_)&&(i.blendFuncSeparate(ue[ne],ue[te],ue[xe],ue[Ge]),T=ne,y=te,A=xe,_=Ge),(ie.equals(M)===!1||Ze!==P)&&(i.blendColor(ie.r,ie.g,ie.b,Ze),M.copy(ie),P=Ze),m=C,E=!1}function Te(C,K){C.side===rn?Be(i.CULL_FACE):Se(i.CULL_FACE);let ne=C.side===Ht;K&&(ne=!ne),ge(ne),C.blending===qs&&C.transparent===!1?ae(ns):ae(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let te=C.stencilWrite;a.setTest(te),te&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),re(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(C){L!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),L=C)}function We(C){C!==Yu?(Se(i.CULL_FACE),C!==O&&(C===fc?i.cullFace(i.BACK):C===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),O=C}function Oe(C){C!==I&&(z&&i.lineWidth(C),I=C)}function re(C,K,ne){C?(Se(i.POLYGON_OFFSET_FILL),(N!==K||B!==ne)&&(N=K,B=ne,o.getReversed()&&(K=-K,ne=-ne),i.polygonOffset(K,ne))):Be(i.POLYGON_OFFSET_FILL)}function we(C){C?Se(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function $e(C){C===void 0&&(C=i.TEXTURE0+k-1),J!==C&&(i.activeTexture(C),J=C)}function D(C,K,ne){ne===void 0&&(J===null?ne=i.TEXTURE0+k-1:ne=J);let te=le[ne];te===void 0&&(te={type:void 0,texture:void 0},le[ne]=te),(te.type!==C||te.texture!==K)&&(J!==ne&&(i.activeTexture(ne),J=ne),i.bindTexture(C,K||Le[C]),te.type=C,te.texture=K)}function ct(){let C=le[J];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function ft(){try{i.compressedTexImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function de(){try{i.texSubImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function vt(){try{i.texSubImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function Ee(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function R(){try{i.texStorage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function v(){try{i.texStorage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function G(){try{i.texImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function se(){try{i.texImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function j(C){return u[C]!==void 0?u[C]:i.getParameter(C)}function ce(C,K){u[C]!==K&&(i.pixelStorei(C,K),u[C]=K)}function pe(C){q.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),q.copy(C))}function Z(C){ee.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ee.copy(C))}function $(C,K){let ne=c.get(K);ne===void 0&&(ne=new WeakMap,c.set(K,ne));let te=ne.get(C);te===void 0&&(te=i.getUniformBlockIndex(K,C.name),i.uniformBlockBinding(K,te,te),ne.set(C,te))}function fe(C,K,ne){let me=c.get(K).get(C);l[me]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,me,ne),l[me]=ne)}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,le={},f={},l={},d=new WeakMap,g=[],x=null,p=!1,m=null,b=null,T=null,y=null,w=null,A=null,_=null,M=new Ce(0,0,0),P=0,E=!1,L=null,O=null,I=null,N=null,B=null,q.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:Be,bindFramebuffer:at,getBoundFramebuffer:ze,drawBuffers:Je,useProgram:rt,setBlending:ae,setMaterial:Te,setFlipSided:ge,setCullFace:We,setLineWidth:Oe,setPolygonOffset:re,setScissorTest:we,activeTexture:$e,bindTexture:D,unbindTexture:ct,compressedTexImage2D:je,compressedTexImage3D:ft,texImage2D:G,texImage3D:se,pixelStorei:ce,getParameter:j,updateUBOMapping:$,uniformBlockBinding:fe,texStorage2D:R,texStorage3D:v,texSubImage2D:de,texSubImage3D:vt,compressedTexSubImage2D:Ee,compressedTexSubImage3D:He,scissor:pe,viewport:Z,reset:Re}}function ry(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,x=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,v){return p?new OffscreenCanvas(R,v):Is("canvas")}function b(R,v,G){let se=1,j=He(R);if((j.width>G||j.height>G)&&(se=G/Math.max(j.width,j.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ce=Math.floor(se*j.width),pe=Math.floor(se*j.height);f===void 0&&(f=m(ce,pe));let Z=v?m(ce,pe):f;return Z.width=ce,Z.height=pe,Z.getContext("2d").drawImage(R,0,0,ce,pe),Fe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ce+"x"+pe+")."),Z}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function T(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(R,v,G,se,j,ce=!1){if(R!==null){if(i[R]!==void 0)return i[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe;se&&(pe=e.get("EXT_texture_norm16"),pe||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8),G===i.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),G===i.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),v===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8),G===i.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),G===i.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),G===i.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),v===i.RGBA){let $=ce?xr:nt.getTransfer(j);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=$===ut?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),G===i.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(R,v){let G;return R?v===null||v===En||v===as?G=i.DEPTH24_STENCIL8:v===Kt?G=i.DEPTH32F_STENCIL8:v===js&&(G=i.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===En||v===as?G=i.DEPTH_COMPONENT24:v===Kt?G=i.DEPTH_COMPONENT32F:v===js&&(G=i.DEPTH_COMPONENT16),G}function M(R,v){return T(R)===!0||R.isFramebufferTexture&&R.minFilter!==Rt&&R.minFilter!==St?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function P(R){let v=new WeakRef(R);n.get(R).__ref=v,g.add(v),x.register(R,v,v)}function E(R){let v=n.get(R).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function L(R){I(R.target)}function O(R){N(R.target)}function I(R){R.removeEventListener("dispose",L),E(R),k(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function N(R){R.removeEventListener("dispose",O),E(R),Y(R)}function B(){for(let R of g){let v=R.deref();v!==void 0&&(v.isRenderTarget===!0?N(v):I(v))}g.clear(),u.clear()}function k(R){let v=n.get(R);if(v.__webglInit===void 0)return;let G=R.source,se=d.get(G);if(se){let j=se[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&z(R),Object.keys(se).length===0&&d.delete(G)}n.remove(R)}function z(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let G=R.source,se=d.get(G);delete se[v.__cacheKey],o.memory.textures--}function Y(R){let v=n.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&I(G),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let ce=0;ce<v.__webglFramebuffer[j].length;ce++)i.deleteFramebuffer(v.__webglFramebuffer[j][ce]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let se=R.textures;for(let j=0,ce=se.length;j<ce;j++){let pe=n.get(se[j]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(se[j])}n.remove(R)}let W=0;function J(){W=0}function le(){return W}function oe(R){W=R}function De(){let R=W;return R>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,R}function q(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function ee(R,v){let G=n.get(R);if(R.isVideoTexture&&vt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let se=R.image;if(se===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(G,R,v);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function _e(R,v){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ae(G,R,v);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function Le(R,v){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ae(G,R,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function Se(R,v){let G=n.get(R);if(R.version>0&&G.__version!==R.version){Te(G,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let Be={[bi]:i.REPEAT,[Qt]:i.CLAMP_TO_EDGE,[Rs]:i.MIRRORED_REPEAT},at={[Rt]:i.NEAREST,[Ta]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[$s]:i.LINEAR_MIPMAP_NEAREST,[pn]:i.LINEAR_MIPMAP_LINEAR},ze={[Md]:i.NEVER,[Nc]:i.ALWAYS,[Sd]:i.LESS,[Pc]:i.LEQUAL,[bd]:i.EQUAL,[Lc]:i.GEQUAL,[Td]:i.GREATER,[Ad]:i.NOTEQUAL};function Je(R,v){if(v.type===Kt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===St||v.magFilter===$s||v.magFilter===os||v.magFilter===pn||v.minFilter===St||v.minFilter===$s||v.minFilter===os||v.minFilter===pn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Be[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Be[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Be[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rt||v.minFilter!==os&&v.minFilter!==pn||v.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function rt(R,v){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",L),P(v));let se=v.source,j=d.get(se);j===void 0&&(j={},d.set(se,j));let ce=q(v);if(ce!==R.__cacheKey){j[ce]===void 0&&(j[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),j[ce].usedTimes++;let pe=j[R.__cacheKey];pe!==void 0&&(j[R.__cacheKey].usedTimes--,pe.usedTimes===0&&z(v)),R.__cacheKey=ce,R.__webglTexture=j[ce].texture}return G}function Q(R,v,G){return Math.floor(Math.floor(R/G)/v)}function ue(R,v,G,se){let ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,se,v.data);else{ce.sort((Re,C)=>Re.start-C.start);let pe=0;for(let Re=1;Re<ce.length;Re++){let C=ce[pe],K=ce[Re],ne=C.start+C.count,te=Q(K.start,v.width,4),me=Q(C.start,v.width,4);K.start<=ne+1&&te===me&&Q(K.start+K.count-1,v.width,4)===te?C.count=Math.max(C.count,K.start+K.count-C.start):(++pe,ce[pe]=K)}ce.length=pe+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Re=0,C=ce.length;Re<C;Re++){let K=ce[Re],ne=Math.floor(K.start/4),te=Math.ceil(K.count/4),me=ne%v.width,xe=Math.floor(ne/v.width),Ge=te,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe),t.texSubImage2D(i.TEXTURE_2D,0,me,xe,Ge,ie,G,se,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function ae(R,v,G){let se=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=i.TEXTURE_3D);let j=rt(R,v),ce=v.source;t.bindTexture(se,R.__webglTexture,i.TEXTURE0+G);let pe=n.get(ce);if(ce.version!==pe.__version||j===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ie=nt.getPrimaries(nt.workingColorSpace),Ze=v.colorSpace===ui?null:nt.getPrimaries(v.colorSpace),Ne=v.colorSpace===ui||ie===Ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let $=b(v.image,!1,s.maxTextureSize);$=Ee(v,$);let fe=r.convert(v.format,v.colorSpace),Re=r.convert(v.type),C=A(v.internalFormat,fe,Re,v.normalized,v.colorSpace,v.isVideoTexture);Je(se,v);let K,ne=v.mipmaps,te=v.isVideoTexture!==!0,me=pe.__version===void 0||j===!0,xe=ce.dataReady,Ge=M(v,$);if(v.isDepthTexture)C=_(v.format===hi,v.type),me&&(te?t.texStorage2D(i.TEXTURE_2D,1,C,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,C,$.width,$.height,0,fe,Re,null));else if(v.isDataTexture)if(ne.length>0){te&&me&&t.texStorage2D(i.TEXTURE_2D,Ge,C,ne[0].width,ne[0].height);for(let ie=0,Ze=ne.length;ie<Ze;ie++)K=ne[ie],te?xe&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,K.width,K.height,fe,Re,K.data):t.texImage2D(i.TEXTURE_2D,ie,C,K.width,K.height,0,fe,Re,K.data);v.generateMipmaps=!1}else te?(me&&t.texStorage2D(i.TEXTURE_2D,Ge,C,$.width,$.height),xe&&ue(v,$,fe,Re)):t.texImage2D(i.TEXTURE_2D,0,C,$.width,$.height,0,fe,Re,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){te&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,C,ne[0].width,ne[0].height,$.depth);for(let ie=0,Ze=ne.length;ie<Ze;ie++)if(K=ne[ie],v.format!==_n)if(fe!==null)if(te){if(xe)if(v.layerUpdates.size>0){let Ne=Wc(K.width,K.height,v.format,v.type);for(let Me of v.layerUpdates){let Qe=K.data.subarray(Me*Ne/K.data.BYTES_PER_ELEMENT,(Me+1)*Ne/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Me,K.width,K.height,1,fe,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,K.width,K.height,$.depth,fe,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,C,K.width,K.height,$.depth,0,K.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,K.width,K.height,$.depth,fe,Re,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,C,K.width,K.height,$.depth,0,fe,Re,K.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{te&&me&&t.texStorage2D(i.TEXTURE_2D,Ge,C,ne[0].width,ne[0].height);for(let ie=0,Ze=ne.length;ie<Ze;ie++)K=ne[ie],v.format!==_n?fe!==null?te?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,K.width,K.height,fe,K.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,C,K.width,K.height,0,K.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?xe&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,K.width,K.height,fe,Re,K.data):t.texImage2D(i.TEXTURE_2D,ie,C,K.width,K.height,0,fe,Re,K.data)}else if(v.isDataArrayTexture)if(te){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,C,$.width,$.height,$.depth),xe)if(v.layerUpdates.size>0){let ie=Wc($.width,$.height,v.format,v.type);for(let Ze of v.layerUpdates){let Ne=$.data.subarray(Ze*ie/$.data.BYTES_PER_ELEMENT,(Ze+1)*ie/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ze,$.width,$.height,1,fe,Re,Ne)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,fe,Re,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,C,$.width,$.height,$.depth,0,fe,Re,$.data);else if(v.isData3DTexture)te?(me&&t.texStorage3D(i.TEXTURE_3D,Ge,C,$.width,$.height,$.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,fe,Re,$.data)):t.texImage3D(i.TEXTURE_3D,0,C,$.width,$.height,$.depth,0,fe,Re,$.data);else if(v.isFramebufferTexture){if(me)if(te)t.texStorage2D(i.TEXTURE_2D,Ge,C,$.width,$.height);else{let ie=$.width,Ze=$.height;for(let Ne=0;Ne<Ge;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,C,ie,Ze,0,fe,Re,null),ie>>=1,Ze>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),$.parentNode!==ie){ie.appendChild($),u.add(v),ie.onpaint=Ze=>{let Ne=Ze.changedElements;for(let Me of u)Ne.includes(Me.image)&&(Me.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let Ne=i.RGBA,Me=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,Me,Qe,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ne.length>0){if(te&&me){let ie=He(ne[0]);t.texStorage2D(i.TEXTURE_2D,Ge,C,ie.width,ie.height)}for(let ie=0,Ze=ne.length;ie<Ze;ie++)K=ne[ie],te?xe&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,fe,Re,K):t.texImage2D(i.TEXTURE_2D,ie,C,fe,Re,K);v.generateMipmaps=!1}else if(te){if(me){let ie=He($);t.texStorage2D(i.TEXTURE_2D,Ge,C,ie.width,ie.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Re,$)}else t.texImage2D(i.TEXTURE_2D,0,C,fe,Re,$);T(v)&&v.mipmapsAutoUpdate===!0&&y(se),pe.__version=ce.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Te(R,v,G){if(v.image.length!==6)return;let se=rt(R,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let ce=n.get(j);if(j.version!==ce.__version||se===!0){t.activeTexture(i.TEXTURE0+G);let pe=nt.getPrimaries(nt.workingColorSpace),Z=v.colorSpace===ui?null:nt.getPrimaries(v.colorSpace),$=v.colorSpace===ui||pe===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let fe=v.isCompressedTexture||v.image[0].isCompressedTexture,Re=v.image[0]&&v.image[0].isDataTexture,C=[];for(let Me=0;Me<6;Me++)!fe&&!Re?C[Me]=b(v.image[Me],!0,s.maxCubemapSize):C[Me]=Re?v.image[Me].image:v.image[Me],C[Me]=Ee(v,C[Me]);let K=C[0],ne=r.convert(v.format,v.colorSpace),te=r.convert(v.type),me=A(v.internalFormat,ne,te,v.normalized,v.colorSpace),xe=v.isVideoTexture!==!0,Ge=ce.__version===void 0||se===!0,ie=j.dataReady,Ze=M(v,K);Je(i.TEXTURE_CUBE_MAP,v);let Ne;if(v.isDepthTexture){if(me=_(v.format===hi,v.type),Ge)if(xe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,me,K.width,K.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,me,K.width,K.height,0,ne,te,null)}else if(fe){xe&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,me,K.width,K.height);for(let Me=0;Me<6;Me++){Ne=C[Me].mipmaps;for(let Qe=0;Qe<Ne.length;Qe++){let Ft=Ne[Qe];v.format!==_n?ne!==null?xe?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Qe,0,0,Ft.width,Ft.height,ne,Ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Qe,me,Ft.width,Ft.height,0,Ft.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Qe,0,0,Ft.width,Ft.height,ne,te,Ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Qe,me,Ft.width,Ft.height,0,ne,te,Ft.data)}}}else{if(Ne=v.mipmaps,xe&&Ge){Ne.length>0&&Ze++;let Me=He(C[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,me,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Re){xe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,C[Me].width,C[Me].height,ne,te,C[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,me,C[Me].width,C[Me].height,0,ne,te,C[Me].data);for(let Qe=0;Qe<Ne.length;Qe++){let mi=Ne[Qe].image[Me].image;xe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Qe+1,0,0,mi.width,mi.height,ne,te,mi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Qe+1,me,mi.width,mi.height,0,ne,te,mi.data)}}else{xe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ne,te,C[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,me,ne,te,C[Me]);for(let Qe=0;Qe<Ne.length;Qe++){let Ft=Ne[Qe];xe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Qe+1,0,0,ne,te,Ft.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Qe+1,me,ne,te,Ft.image[Me])}}}T(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ce.__version=j.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ge(R,v,G,se,j,ce){let pe=r.convert(G.format,G.colorSpace),Z=r.convert(G.type),$=A(G.internalFormat,pe,Z,G.normalized,G.colorSpace),fe=n.get(v),Re=n.get(G);if(Re.__renderTarget=v,!fe.__hasExternalTextures){let C=Math.max(1,v.width>>ce),K=Math.max(1,v.height>>ce);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ce,$,C,K,v.depth,0,pe,Z,null):t.texImage2D(j,ce,$,C,K,0,pe,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),de(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,j,Re.__webglTexture,0,ft(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,j,Re.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(R,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let se=v.depthTexture,j=se&&se.isDepthTexture?se.type:null,ce=_(v.stencilBuffer,j),pe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(v),ce,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(v),ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,R)}else{let se=v.textures;for(let j=0;j<se.length;j++){let ce=se[j],pe=r.convert(ce.format,ce.colorSpace),Z=r.convert(ce.type),$=A(ce.internalFormat,pe,Z,ce.normalized,ce.colorSpace);de(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(v),$,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(v),$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(R,v,G){let se=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(v.depthTexture);j.__renderTarget=v;let ce=se?v.depthTexture.image[0]:v.depthTexture.image;(!j.__webglTexture||ce.width!==v.width||ce.height!==v.height)&&(ce.width=v.width,ce.height=v.height,v.depthTexture.needsUpdate=!0),se?Se(v.depthTexture,0):ee(v.depthTexture,0);let pe=j.__webglTexture,Z=ft(v),$=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,fe=v.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===jn)de(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,$,pe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,fe,$,pe,0);else if(v.depthTexture.format===hi)de(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,$,pe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,fe,$,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(R){let v=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let se=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),se){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,se.removeEventListener("dispose",j)};se.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=se}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let se=0;se<6;se++)Oe(v.__webglFramebuffer[se],R,se);else R.texture.mipmaps.length>0?Oe(v.__webglFramebuffer[0],R,0):Oe(v.__webglFramebuffer,R,0);else if(G){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]===void 0)v.__webglDepthbuffer[se]=i.createRenderbuffer(),We(v.__webglDepthbuffer[se],R,!1);else{let j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),We(v.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(R,v,G){let se=n.get(R);v!==void 0&&ge(se.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&re(R)}function $e(R){let v=R.texture,G=n.get(R),se=n.get(v);R.addEventListener("dispose",O),P(R);let j=R.textures,ce=R.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=v.version,o.memory.textures++),ce){G.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0){G.__webglFramebuffer[Z]=[];for(let $=0;$<v.mipmaps.length;$++)G.__webglFramebuffer[Z][$]=i.createFramebuffer()}else G.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(v.mipmaps.length>0){G.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)G.__webglFramebuffer[Z]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(pe)for(let Z=0,$=j.length;Z<$;Z++){let fe=n.get(j[Z]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&de(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){let $=j[Z];G.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Z]);let fe=r.convert($.format,$.colorSpace),Re=r.convert($.type),C=A($.internalFormat,fe,Re,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),K=ft(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,C,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,G.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),We(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ge(G.__webglFramebuffer[Z][$],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else ge(G.__webglFramebuffer[Z],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);T(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let Z=0,$=j.length;Z<$;Z++){let fe=j[Z],Re=n.get(fe),C=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(C=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(C,Re.__webglTexture),Je(C,fe),ge(G.__webglFramebuffer,R,fe,i.COLOR_ATTACHMENT0+Z,C,0),T(fe)&&y(C)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,se.__webglTexture),Je(Z,v),v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ge(G.__webglFramebuffer[$],R,v,i.COLOR_ATTACHMENT0,Z,$);else ge(G.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,Z,0);T(v)?y(Z):v.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&re(R)}function D(R){let v=R.textures;for(let G=0,se=v.length;G<se;G++){let j=v[G];if(T(j)&&j.mipmapsAutoUpdate===!0){let ce=w(R),pe=n.get(j).__webglTexture;t.bindTexture(ce,pe),y(ce),t.unbindTexture()}}}let ct=[];function je(R){if(R.samples>0){if(de(R)===!1){let v=R.textures,G=R.width,se=R.height,j=i.COLOR_BUFFER_BIT,ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(R),Z=v.length>1;if(Z)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);let Re=n.get(v[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,G,se,0,0,G,se,j,i.NEAREST),l===!0&&(ct.length=0,ct.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ct.push(ce),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);let Re=n.get(v[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ft(R){return Math.min(s.maxSamples,R.samples)}function de(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Ee(R,v){let G=R.colorSpace,se=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Gt&&G!==ui&&(nt.getTransfer(G)===ut?(se!==_n||j!==on)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",G)),v}function He(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=J,this.getTextureUnits=le,this.setTextureUnits=oe,this.setTexture2D=ee,this.setTexture2DArray=_e,this.setTexture3D=Le,this.setTextureCube=Se,this.rebindTextures=we,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=de,this.dispose=B}function oy(i,e){function t(n,s=ui){let r,o=nt.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Aa)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===Kt)return i.FLOAT;if(n===jt)return i.HALF_FLOAT;if(n===Rc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===_n)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===Jr||n===$r||n===jr||n===Qr)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Na||n===Da||n===Ua)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===eo||n===Ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===eo)return r.COMPRESSED_RG11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===Za||n===Ja||n===$a||n===ja||n===Qa||n===el||n===tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nl)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===ol||n===to||n===al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ly=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new On({vertexShader:ay,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends Fn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",p=new sh,m={},b=t.getContextAttributes(),T=null,y=null,w=[],A=[],_=new he,M=null,P=null,E=new It;E.viewport=new dt;let L=new It;L.viewport=new dt;let O=[E,L],I=new va,N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=w[q];return ee===void 0&&(ee=new Ds,w[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=w[q];return ee===void 0&&(ee=new Ds,w[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=w[q];return ee===void 0&&(ee=new Ds,w[q]=ee),ee.getHandSpace()};function k(q){let ee=A.indexOf(q.inputSource);if(ee===-1)return;let _e=w[ee];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<w.length;q++){let ee=A[q];ee!==null&&(A[q]=null,w[q].disconnect(ee))}N=null,B=null,p.reset();for(let q in m)delete m[q];if(e.setRenderTarget(T),d=null,f=null,u=null,s=null,y=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),P!==null){let q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Le=null,Se=null;b.depth&&(Se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?hi:jn,Le=b.stencil?as:En);let Be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new hn(f.textureWidth,f.textureHeight,{format:_n,type:on,depthTexture:new ti(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new hn(d.framebufferWidth,d.framebufferHeight,{format:_n,type:on,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(q){for(let ee=0;ee<q.removed.length;ee++){let _e=q.removed[ee],Le=A.indexOf(_e);Le>=0&&(A[Le]=null,w[Le].disconnect(_e))}for(let ee=0;ee<q.added.length;ee++){let _e=q.added[ee],Le=A.indexOf(_e);if(Le===-1){for(let Be=0;Be<w.length;Be++)if(Be>=A.length){A.push(_e),Le=Be;break}else if(A[Be]===null){A[Be]=_e,Le=Be;break}if(Le===-1)break}let Se=w[Le];Se&&Se.connect(_e)}}function W(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,_e=q.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),I.near=L.near=E.near=ee,I.far=L.far=E.far=_e,(N!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,B=I.far),I.layers.mask=q.layers.mask|6,E.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;let Le=q.parent,Se=I.cameras;W(I,Le);for(let Be=0;Be<Se.length;Be++)W(Se[Be],Le);I.projectionMatrix.copy(E.projectionMatrix),I.projectionMatrixInverse.copy(E.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),J(q,I,Le)};function J(q,ee,_e){_e===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ji*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(q){return m[q]};let le=null;function oe(q,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Le=!1;_e.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let ze=0;ze<_e.length;ze++){let Je=_e[ze],rt=null;if(d!==null)rt=d.getViewport(Je);else{let ue=u.getViewSubImage(f,Je);rt=ue.viewport,ze===0&&(e.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(y))}let Q=O[ze];Q===void 0&&(Q=new It,Q.layers.enable(ze),Q.viewport=new dt,O[ze]=Q),Q.matrix.fromArray(Je.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Je.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(rt.x,rt.y,rt.width,rt.height),ze===0&&(I.matrix.copy(Q.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(Q)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let ze=u.getDepthInformation(_e[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let ze=0;ze<_e.length;ze++){let Je=_e[ze].camera;if(Je){let rt=m[Je];rt||(rt=new Pr,m[Je]=rt);let Q=u.getCameraImage(Je);rt.sourceTexture=Q}}}}for(let _e=0;_e<w.length;_e++){let Le=A[_e],Se=w[_e];Le!==null&&Se!==void 0&&Se.update(Le,ee,c||o)}le&&le(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let De=new of;De.setAnimationLoop(oe),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}},cy=new Ke,gf=new Ye;gf.set(-1,0,0,0,1,0,0,0,1);function hy(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Gc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,T,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ht&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ht&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),T=b.envMap,y=b.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(gf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ht&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uy(i,e,t,n){let s={},r={};function o(b,T){let y=T.program;n.uniformBlockBinding(b,y,s[b.id])}function a(b,T){let y=s[b.id];y===void 0&&(g(b),y=l(b),s[b.id]=y,b.addEventListener("dispose",p));let w=T.program;n.updateUBOMapping(b,w);let A=e.render.frame;r[b.id]!==A&&(c(b),r[b.id]=A)}function l(b){let T=i.createBuffer(),y=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(b){let T=s[b.id],y=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,_=y.length;A<_;A++){let M=y[A];if(Array.isArray(M))for(let P=0,E=M.length;P<E;P++)h(M[P],A,P,w);else h(M,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,T,y,w){if(f(b,T,y,w)===!0){let A=b.__offset,_=b.value;if(Array.isArray(_)){let M=0;for(let P=0;P<_.length;P++){let E=_[P],L=x(E,!0);u(E,b.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,b.__data)}}function u(b,T,y){typeof b=="number"||typeof b=="boolean"?T[y]=b:b.isMatrix3?(T[y]=b.elements[0],T[y+1]=b.elements[1],T[y+2]=b.elements[2],T[y+3]=0,T[y+4]=b.elements[3],T[y+5]=b.elements[4],T[y+6]=b.elements[5],T[y+7]=0,T[y+8]=b.elements[6],T[y+9]=b.elements[7],T[y+10]=b.elements[8],T[y+11]=0):ArrayBuffer.isView(b)?T.set(b.subarray(0,T.length-y),y):b.toArray(T,y)}function f(b,T,y,w){let A=b.value,_=T+"_"+y;if(Array.isArray(A)){w[_]===void 0&&(w[_]=[]);let M=w[_],P=!1;for(let E=0;E<A.length;E++)d(A[E],M,E)===!0&&(P=!0);return P}return d(A,w,_)}function d(b,T,y){if(T[y]===void 0)return typeof b=="number"||typeof b=="boolean"?T[y]=b:ArrayBuffer.isView(b)?T[y]=b.slice():T[y]=b.clone(),!0;{let w=T[y];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return T[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(w.equals(b)===!1)return w.copy(b),!0}}return!1}function g(b){let T=b.uniforms,y=0,w=16;for(let _=0,M=T.length;_<M;_++){let P=Array.isArray(T[_])?T[_]:[T[_]];for(let E=0,L=P.length;E<L;E++){let O=P[E],I=Array.isArray(O.value)?O.value:[O.value],N=Array.isArray(T[_])||Array.isArray(O.value),B=y;for(let z=0,Y=I.length;z<Y;z++){let W=I[z],J=x(W,N),le=y%w,oe=le%J.boundary,De=le+oe;y+=oe,De!==0&&w-De<J.storage&&(y+=w-De),z===0&&(B=y),y+=J.storage}let k=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new k((y-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}let A=y%w;return A>0&&(y+=w-A),b.__size=y,b.__cache={},this}function x(b,T){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",b),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(b){let T=b.target;T.removeEventListener("dispose",p),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:o,update:a,dispose:m}}var dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function fy(){return kn===null&&(kn=new wi(dy,16,16,Ui,jt),kn.name="DFG_LUT",kn.minFilter=St,kn.magFilter=St,kn.wrapS=Qt,kn.wrapT=Qt,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var dl=class{constructor(e={}){let{canvas:t=wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=on}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,p=new Set([Pa,Ia,Ca]),m=new Set([on,En,js,as,wa,Ea]),b=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[],intensity:[]},w=null,A=null,_=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,L=!1,O=null,I=null,N=null,B=null;this._outputColorSpace=pt;let k=0,z=0,Y=null,W=-1,J=null,le=new dt,oe=new dt,De=null,q=new Ce(0),ee=0,_e=t.width,Le=t.height,Se=1,Be=null,at=null,ze=new dt(0,0,_e,Le),Je=new dt(0,0,_e,Le),rt=!1,Q=new Ei,ue=new ta,ae=!1,Te=!1,ge=new Ke,We=new F,Oe=new dt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function $e(){return Y===null?Se:1}let D=n;function ct(S,U){return t.getContext(S,U)}let je,ft,de,vt,Ee,He,R,v,G,se,j,ce,pe,Z,$,fe,Re,C,K,ne,te,me,xe;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Me,!1),D===null){let U="webgl2";if(D=ct(U,S),D===null)throw ct(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(S){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ve("WebGLRenderer: "+S.message),S}function Ge(){je=new T_(D),je.init(),te=new oy(D,je),ft=new f_(D,je,e,te),de=new sy(D,je),ft.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),I=D.createFramebuffer(),N=D.createFramebuffer(),B=D.createFramebuffer(),vt=new E_(D),Ee=new Wx,He=new ry(D,je,de,Ee,ft,te,vt),R=new b_(E),v=new Cm(D),me=new u_(D,v),G=new A_(D,v,vt,me),se=new C_(D,G,v,me,vt),C=new R_(D,ft,He),$=new p_(Ee),j=new Vx(E,R,je,ft,me,$),ce=new hy(E,Ee),pe=new qx,Z=new jx(je),Re=new h_(E,R,de,se,g,l),fe=new iy(E,se,ft),xe=new uy(D,vt,ft,de),K=new d_(D,je,vt),ne=new w_(D,je,vt),vt.programs=j.programs,E.capabilities=ft,E.extensions=je,E.properties=Ee,E.renderLists=pe,E.shadowMap=fe,E.state=de,E.info=vt}x!==on&&(P=new P_(x,t.width,t.height,a,s,r));let ie=new rh(E,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(S){S!==void 0&&(Se=S,this.setSize(_e,Le,!1))},this.getSize=function(S){return S.set(_e,Le)},this.setSize=function(S,U,X=!0){if(ie.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=S,Le=U,t.width=Math.floor(S*Se),t.height=Math.floor(U*Se),X===!0&&(t.style.width=S+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(_e*Se,Le*Se).floor()},this.setDrawingBufferSize=function(S,U,X){_e=S,Le=U,Se=X,t.width=Math.floor(S*X),t.height=Math.floor(U*X),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(x===on){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(le)},this.getViewport=function(S){return S.copy(ze)},this.setViewport=function(S,U,X,H){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,U,X,H),de.viewport(le.copy(ze).multiplyScalar($e()).round())},this.getScissor=function(S){return S.copy(Je)},this.setScissor=function(S,U,X,H){S.isVector4?Je.set(S.x,S.y,S.z,S.w):Je.set(S,U,X,H),de.scissor(oe.copy(Je).multiplyScalar($e()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(S){de.setScissorTest(rt=S)},this.setOpaqueSort=function(S){Be=S},this.setTransparentSort=function(S){at=S},this.getClearColor=function(S){return S.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,X=!0){let H=0;if(S){let V=!1;if(Y!==null){let ye=Y.texture.format;V=p.has(ye)}if(V){let ye=Y.texture.type,Ie=m.has(ye),ve=Re.getClearColor(),Ae=Re.getClearAlpha(),ke=ve.r,Xe=ve.g,ot=ve.b;Ie?(b[0]=ke,b[1]=Xe,b[2]=ot,b[3]=Ae,D.clearBufferuiv(D.COLOR,0,b)):(T[0]=ke,T[1]=Xe,T[2]=ot,T[3]=Ae,D.clearBufferiv(D.COLOR,0,T))}else H|=D.COLOR_BUFFER_BIT}U&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Re.dispose(),pe.dispose(),Z.dispose(),He.dispose(),Ee.dispose(),R.dispose(),se.dispose(),G.dispose(),me.dispose(),xe.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Vh),ie.removeEventListener("sessionend",Wh),zi.stop()};function Ze(S){S.preventDefault(),yr("WebGLRenderer: Context Lost."),L=!0}function Ne(){yr("WebGLRenderer: Context Restored."),L=!1;let S=vt.autoReset,U=fe.enabled,X=fe.autoUpdate,H=fe.needsUpdate,V=fe.type;Ge(),vt.autoReset=S,fe.enabled=U,fe.autoUpdate=X,fe.needsUpdate=H,fe.type=V}function Me(S){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Qe(S){let U=S.target;U.removeEventListener("dispose",Qe),Ft(U)}function Ft(S){mi(S),Ee.remove(S)}function mi(S){let U=Ee.get(S).programs;U!==void 0&&(U.forEach(function(X){j.releaseProgram(X)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,X,H,V,ye){U===null&&(U=re);let Ie=V.isMesh&&V.matrixWorld.determinantAffine()<0,ve=Yf(S,U,X,H,V);de.setMaterial(H,Ie);let Ae=X.index,ke=1;if(H.wireframe===!0){if(Ae=G.getWireframeAttribute(X),Ae===void 0)return;ke=2}let Xe=X.drawRange,ot=X.attributes.position,Ue=Xe.start*ke,st=(Xe.start+Xe.count)*ke;ye!==null&&(Ue=Math.max(Ue,ye.start*ke),st=Math.min(st,(ye.start+ye.count)*ke)),Ae!==null?(Ue=Math.max(Ue,0),st=Math.min(st,Ae.count)):ot!=null&&(Ue=Math.max(Ue,0),st=Math.min(st,ot.count));let Et=st-Ue;if(Et<0||Et===1/0)return;me.setup(V,H,ve,X,Ae);let xt,mt=K;if(Ae!==null&&(xt=v.get(Ae),mt=ne,mt.setIndex(xt)),V.isMesh)H.wireframe===!0?(de.setLineWidth(H.wireframeLinewidth*$e()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(V.isLine){let Wt=H.linewidth;Wt===void 0&&(Wt=1),de.setLineWidth(Wt*$e()),V.isLineSegments?mt.setMode(D.LINES):V.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else V.isPoints?mt.setMode(D.POINTS):V.isSprite&&mt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(je.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Wt=V._multiDrawStarts,Pe=V._multiDrawCounts,Jt=V._multiDrawCount,ht=Ae?v.get(Ae).bytesPerElement:1,ki=Ee.get(H).currentProgram.getUniforms();for(let Xt=0;Xt<Jt;Xt++)ki.setValue(D,"_gl_DrawID",Xt),mt.render(Wt[Xt]/ht,Pe[Xt])}else if(V.isInstancedMesh)mt.renderInstances(Ue,Et,V.count);else if(X.isInstancedBufferGeometry){let Wt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pe=Math.min(X.instanceCount,Wt);mt.renderInstances(Ue,Et,Pe)}else mt.render(Ue,Et)};function Hh(S,U,X,H){O!==null&&S.isNodeMaterial&&O.setObject(H,S),ae===!0&&$.setState(S,X,!1),S.transparent===!0&&S.side===rn&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,ir(S,U,H),S.side=sn,S.needsUpdate=!0,ir(S,U,H),S.side=rn):ir(S,U,H)}this.compile=function(S,U,X=null){X===null&&(X=S),O!==null&&O.renderStart(S,U,X),A=Z.get(X),A.init(U),M.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),Te=this.localClippingEnabled,ae=$.init(this.clippingPlanes,Te),ae===!0&&$.setGlobalState(this.clippingPlanes,U),O!==null&&fe.render(A.state.shadowsArray,X,U);let H=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ye=V.material;if(ye)if(Array.isArray(ye))for(let Ie=0;Ie<ye.length;Ie++){let ve=ye[Ie];Hh(ve,X,U,V),H.add(ve)}else Hh(ye,X,U,V),H.add(ye)}),A=M.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(S,U,X=null){let H=this.compile(S,U,X);return new Promise(V=>{function ye(){if(H.forEach(function(Ie){let Ae=Ee.get(Ie).currentProgram;(Ae===void 0||Ae.isReady())&&H.delete(Ie)}),H.size===0){V(S);return}setTimeout(ye,10)}je.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ml=null;function Xf(S){Ml&&Ml(S)}function Vh(){zi.stop()}function Wh(){zi.start()}let zi=new of;zi.setAnimationLoop(Xf),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(S){Ml=S,ie.setAnimationLoop(S),S===null?zi.stop():zi.start()},ie.addEventListener("sessionstart",Vh),ie.addEventListener("sessionend",Wh),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(S,U);let X=ie.enabled===!0&&ie.isPresenting===!0,H=P!==null&&(Y===null||X)&&P.begin(E,Y);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,U,Y),A=Z.get(S,M.length),A.init(U),A.state.textureUnits=He.getTextureUnits(),M.push(A),ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ue.setFromArrayCamera(U):Q.setFromProjectionMatrix(ge,gn,U.reversedDepth),Te=this.localClippingEnabled,ae=$.init(this.clippingPlanes,Te),w=pe.get(S,_.length),w.init(),_.push(w),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let Ie=E.xr.getDepthSensingMesh();Ie!==null&&Sl(Ie,U,-1/0,E.sortObjects)}Sl(S,U,0,E.sortObjects),w.finish(),O!==null&&O.updateLights(A.state.lightsArray),E.sortObjects===!0&&w.sort(Be,at),we=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,we&&Re.addToRenderList(w,S),this.info.autoReset===!0&&this.info.reset(),ae===!0&&$.beginShadows();let V=A.state.shadowsArray;if(fe.render(V,S,U),ae===!0&&$.endShadows(),(H&&P.hasRenderPass())===!1){let Ie=w.opaque,ve=w.transmissive;if(A.setupLights(),U.isArrayCamera){let Ae=U.cameras;if(ve.length>0)for(let ke=0,Xe=Ae.length;ke<Xe;ke++){let ot=Ae[ke];qh(Ie,ve,S,ot)}we&&Re.render(S);for(let ke=0,Xe=Ae.length;ke<Xe;ke++){let ot=Ae[ke];Xh(w,S,ot,ot.viewport)}}else ve.length>0&&qh(Ie,ve,S,U),we&&Re.render(S),Xh(w,S,U)}Y!==null&&z===0&&(He.updateMultisampleRenderTarget(Y),He.updateRenderTargetMipmap(Y)),H&&P.end(E),S.isScene===!0&&S.onAfterRender(E,S,U),me.resetDefaultState(),W=-1,J=null,M.pop(),M.length>0?(A=M[M.length-1],He.setTextureUnits(A.state.textureUnits),ae===!0&&$.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,O!==null&&O.renderEnd()};function Sl(S,U,X,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){let Ie=U.isArrayCamera?ue:Q;if(!S.frustumCulled||S.intersectsFrustum(Ie)){H&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);let ve=se.update(S),Ae=S.material;Ae.visible&&w.push(S,ve,Ae,X,Oe.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){let Ie=U.isArrayCamera?ue:Q;if(!S.frustumCulled||S.intersectsFrustum(Ie)){let ve=se.update(S),Ae=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Oe.copy(ve.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(ge)),Array.isArray(Ae)){let ke=ve.groups;for(let Xe=0,ot=ke.length;Xe<ot;Xe++){let Ue=ke[Xe],st=Ae[Ue.materialIndex];st&&st.visible&&w.push(S,ve,st,X,Oe.z,Ue,U)}}else Ae.visible&&w.push(S,ve,Ae,X,Oe.z,null,U)}}}let ye=S.children;for(let Ie=0,ve=ye.length;Ie<ve;Ie++)Sl(ye[Ie],U,X,H)}function Xh(S,U,X,H){let{opaque:V,transmissive:ye,transparent:Ie}=S;A.setupLightsView(X),ae===!0&&$.setGlobalState(E.clippingPlanes,X),H&&de.viewport(le.copy(H)),V.length>0&&fo(V,U,X),ye.length>0&&fo(ye,U,X),Ie.length>0&&fo(Ie,U,X),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function qh(S,U,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){let Ue=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new hn(1,1,{generateMipmaps:!0,type:Ue?jt:on,minFilter:pn,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let ye=A.state.transmissionRenderTarget[H.id],Ie=H.viewport||le;ye.setSize(Ie.z*E.transmissionResolutionScale,Ie.w*E.transmissionResolutionScale);let ve=E.getRenderTarget(),Ae=E.getActiveCubeFace(),ke=E.getActiveMipmapLevel();E.setRenderTarget(ye),E.getClearColor(q),ee=E.getClearAlpha(),ee<1&&E.setClearColor(16777215,.5),E.clear(),we&&Re.render(X);let Xe=E.toneMapping;E.toneMapping=zn;let ot=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),ae===!0&&$.setGlobalState(E.clippingPlanes,H),fo(S,X,H),He.updateMultisampleRenderTarget(ye),He.updateRenderTargetMipmap(ye),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let st=0,Et=U.length;st<Et;st++){let xt=U[st],{object:mt,geometry:Wt,material:Pe,group:Jt}=xt;if(Pe.side===rn&&mt.layers.test(H.layers)){let ht=Pe.side;Pe.side=Ht,Pe.needsUpdate=!0,Yh(mt,X,H,Wt,Pe,Jt),Pe.side=ht,Pe.needsUpdate=!0,Ue=!0}}Ue===!0&&(He.updateMultisampleRenderTarget(ye),He.updateRenderTargetMipmap(ye))}E.setRenderTarget(ve,Ae,ke),E.setClearColor(q,ee),ot!==void 0&&(H.viewport=ot),E.toneMapping=Xe}function fo(S,U,X){let H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ye=S.length;V<ye;V++){let Ie=S[V],{object:ve,geometry:Ae,group:ke}=Ie,Xe=Ie.material;Xe.allowOverride===!0&&H!==null&&(Xe=H),ve.layers.test(X.layers)&&Yh(ve,U,X,Ae,Xe,ke)}}function Yh(S,U,X,H,V,ye){O!==null&&V.isNodeMaterial&&O.setObject(S,V),S.onBeforeRender(E,U,X,H,V,ye),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(E,U,X,H,S,ye),V.transparent===!0&&V.side===rn&&V.forceSinglePass===!1?(V.side=Ht,V.needsUpdate=!0,E.renderBufferDirect(X,U,H,V,S,ye),V.side=sn,V.needsUpdate=!0,E.renderBufferDirect(X,U,H,V,S,ye),V.side=rn):E.renderBufferDirect(X,U,H,V,S,ye),S.onAfterRender(E,U,X,H,V,ye)}function Kh(S){let U=0;for(let X of S)X.texture!==null&&U++;return U}function ir(S,U,X){U.isScene!==!0&&(U=re);let H=Ee.get(S),V=A.state.lights,ye=A.state.shadowsArray,Ie=V.state.version,ve=j.getParameters(S,V.state,ye,U,X,A.state.lightProbeGridArray),Ae=j.getProgramCacheKey(ve),ke=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Xe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=R.get(S.envMap||H.environment,Xe),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",Qe),ke=new Map,H.programs=ke,H.programVariants=new Map);let ot=ke.get(Ae);if(ot!==void 0){if(H.currentProgram===ot&&H.lightsStateVersion===Ie)return Jh(S,ve),ot}else ve.uniforms=j.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,X,ve),S.onBeforeCompile(ve,E),ot=j.acquireProgram(ve,Ae),ke.set(Ae,ot),H.uniforms=ve.uniforms;let Ue=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=$.uniform),Jh(S,ve),H.needsLights=Zf(S),H.lightsStateVersion=Ie,H.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.sunLights.value=V.state.sun,Ue.sunLightShadows.value=V.state.sunShadow,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.sunShadowMatrix.value=V.state.sunShadowMatrix,Ue.sunShadowCascade.value=V.state.sunShadowCascade,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Kh(A.state.lightProbeGridArray),H.currentProgram=ot,H.uniformsList=null,ot}function qf(S,U,X,H,V){let ye=Ee.get(S),Ie=ye.currentProgram.id+","+H+","+V,ve=ye.programVariants.get(Ie);return ve===void 0?(ve=ir(S,U,X),ye.programVariants.set(Ie,ve)):(ye.currentProgram=ve,ye.uniformsList=null,ye.outputColorSpace=H,ye.toneMapping=V),ve}function Zh(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=er.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Jh(S,U){let X=Ee.get(S);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Yf(S,U,X,H,V){U.isScene!==!0&&(U=re),He.resetTextureUnits();let ye=U.fog,Ie=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,ve=Y===null?E.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:nt.workingColorSpace,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,ke=R.get(H.envMap||Ie,Ae),Xe=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ot=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,Et=!!X.morphAttributes.color,xt=zn;H.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(xt=E.toneMapping);let mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Wt=mt!==void 0?mt.length:0,Pe=Ee.get(H),Jt=A.state.lights;if(ae===!0&&(Te===!0||S!==J)){let Mt=S===J&&H.id===W;$.setState(H,S,Mt)}let ht=!1,ki=!1;H.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Jt.state.version||V.isBatchedMesh&&Pe.batching===!1||!V.isBatchedMesh&&Pe.batching===!0||V.isBatchedMesh&&Pe.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Pe.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Pe.instancing===!1||!V.isInstancedMesh&&Pe.instancing===!0||V.isSkinnedMesh&&Pe.skinning===!1||!V.isSkinnedMesh&&Pe.skinning===!0||V.isInstancedMesh&&Pe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pe.instancingMorph===!1&&V.morphTexture!==null||Pe.envMap!==ke||H.fog===!0&&Pe.fog!==ye||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==$.numPlanes||Pe.numIntersection!==$.numIntersection)||Pe.vertexAlphas!==Xe||Pe.vertexTangents!==ot||Pe.morphTargets!==Ue||Pe.morphNormals!==st||Pe.morphColors!==Et||Pe.morphTargetsCount!==Wt||Pe.numLightProbeGrids!==Kh(A.state.lightProbeGridArray)?ht=!0:(Pe.outputColorSpace!==ve||Pe.toneMapping!==xt)&&(ki=!0):(ht=!0,Pe.__version=H.version);let Xt=Pe.currentProgram;(ht===!0||ki===!0)&&(Xt=ki===!0?qf(H,U,V,ve,xt):ir(H,U,V),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Xt,Pe));let po=!1,gi=!1,Gi=!1,lt=Xt.getUniforms(),Ot=Pe.uniforms;if(de.useProgram(Xt.program)&&(po=!0,gi=!0,Gi=!0),H.id!==W&&(W=H.id,gi=!0),po||J!==S){de.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),lt.setValue(D,"projectionMatrix",S.projectionMatrix),lt.setValue(D,"viewMatrix",S.matrixWorldInverse);let Pt=lt.map.cameraPosition;Pt!==void 0&&Pt.setValue(D,We.setFromMatrixPosition(S.matrixWorld)),ft.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&lt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,gi=!0,Gi=!0)}if(Pe.needsLights&&(Jt.state.sunShadowMap.length>0&&lt.setValue(D,"sunShadowMap",Jt.state.sunShadowMap,He),Jt.state.directionalShadowMap.length>0&&lt.setValue(D,"directionalShadowMap",Jt.state.directionalShadowMap,He),Jt.state.spotShadowMap.length>0&&lt.setValue(D,"spotShadowMap",Jt.state.spotShadowMap,He),Jt.state.pointShadowMap.length>0&&lt.setValue(D,"pointShadowMap",Jt.state.pointShadowMap,He)),V.isSkinnedMesh){lt.setOptional(D,V,"bindMatrix"),lt.setOptional(D,V,"bindMatrixInverse");let Mt=V.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),lt.setValue(D,"boneTexture",Mt.boneTexture,He))}V.isBatchedMesh&&(lt.setOptional(D,V,"batchingTexture"),lt.setValue(D,"batchingTexture",V._matricesTexture,He),lt.setOptional(D,V,"batchingIdTexture"),lt.setValue(D,"batchingIdTexture",V._indirectTexture,He),lt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&lt.setValue(D,"batchingColorTexture",V._colorsTexture,He));let vn=X.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&C.update(V,X,Xt),(gi||Pe.receiveShadow!==V.receiveShadow)&&(Pe.receiveShadow=V.receiveShadow,lt.setValue(D,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Ot.envMapIntensity.value=U.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=fy()),gi){if(lt.setValue(D,"toneMappingExposure",E.toneMappingExposure),Pe.needsLights&&Kf(Ot,Gi),ye&&H.fog===!0&&ce.refreshFogUniforms(Ot,ye),ce.refreshMaterialUniforms(Ot,H,Se,Le,A.state.transmissionRenderTarget[S.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){let Mt=y,Pt=0;for(let Pn of A.state.lightProbeGridArray)Pn.texture!==null&&(Mt.textures[Pt]=Pn.texture,Mt.min[Pt]=Pn.boundingBox.min,Mt.max[Pt]=Pn.boundingBox.max,Mt.resolution[Pt]=Pn.resolution,Mt.intensity[Pt]=Pn.intensity,Pt++);for(let Pn in Mt)Mt[Pn].length=Pt;Ot.probesSH.value=Mt.textures,Ot.probesMin.value=Mt.min,Ot.probesMax.value=Mt.max,Ot.probesResolution.value=Mt.resolution,Ot.probesIntensity.value=Mt.intensity}er.upload(D,Zh(Pe),Ot,He)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(er.upload(D,Zh(Pe),Ot,He),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&lt.setValue(D,"center",V.center),lt.setValue(D,"modelViewMatrix",V.modelViewMatrix),lt.setValue(D,"normalMatrix",V.normalMatrix),lt.setValue(D,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Mt=H.uniformsGroups;for(let Pt=0,Pn=Mt.length;Pt<Pn;Pt++){let jh=Mt[Pt];xe.update(jh,Xt),xe.bind(jh,Xt)}}return Xt}function Kf(S,U){S.ambientLightColor.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Zf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(S,U,X){let H=Ee.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ee.get(S.texture).__webglTexture=U,Ee.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let X=Ee.get(S);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,X=0){Y=S,k=U,z=X;let H=null,V=!1,ye=!1;if(S){let ve=Ee.get(S);if(ve.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(D.FRAMEBUFFER,ve.__webglFramebuffer),le.copy(S.viewport),oe.copy(S.scissor),De=S.scissorTest,de.viewport(le),de.scissor(oe),de.setScissorTest(De),W=-1;return}else if(ve.__webglFramebuffer===void 0)He.setupRenderTarget(S);else if(ve.__hasExternalTextures)He.rebindTextures(S,Ee.get(S.texture).__webglTexture,Ee.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Xe=S.depthTexture;if(ve.__boundDepthTexture!==Xe){if(Xe!==null&&Ee.has(Xe)&&(S.width!==Xe.image.width||S.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(S)}}let Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);let ke=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?H=ke[U][X]:H=ke[U],V=!0):S.samples>0&&He.useMultisampledRTT(S)===!1?H=Ee.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[X]:H=ke,le.copy(S.viewport),oe.copy(S.scissor),De=S.scissorTest}else le.copy(ze).multiplyScalar(Se).floor(),oe.copy(Je).multiplyScalar(Se).floor(),De=rt;if(X!==0&&(H=I),de.bindFramebuffer(D.FRAMEBUFFER,H)&&de.drawBuffers(S,H),de.viewport(le),de.scissor(oe),de.setScissorTest(De),V){let ve=Ee.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,X)}else if(ye){let ve=U;for(let Ae=0;Ae<S.textures.length;Ae++){let ke=Ee.get(S.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,ke.__webglTexture,X,ve)}}else if(S!==null&&X!==0){let ve=Ee.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,X)}W=-1};function $h(S){let U=Ee.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=ft.textureFormatReadable(S.format),U.__typeReadable=ft.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,X,H,V,ye,Ie,ve=0){if(!(S&&S.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ae=Ae[Ie]),Array.isArray(Ae)&&(Ae=Ae[0]),Ae){let ke=de.getBoundFramebuffer(D.READ_FRAMEBUFFER);de.bindFramebuffer(D.READ_FRAMEBUFFER,Ae);try{let Xe=S.textures[ve],ot=Xe.format,Ue=Xe.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve);let st=$h(Xe);if(st.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(st.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&X>=0&&X<=S.height-V&&D.readPixels(U,X,H,V,te.convert(ot),te.convert(Ue),ye)}finally{de.bindFramebuffer(D.READ_FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,U,X,H,V,ye,Ie,ve=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ae=Ae[Ie]),Array.isArray(Ae)&&(Ae=Ae[0]),Ae)if(U>=0&&U<=S.width-H&&X>=0&&X<=S.height-V){let ke=de.getBoundFramebuffer(D.READ_FRAMEBUFFER);de.bindFramebuffer(D.READ_FRAMEBUFFER,Ae);let Xe=S.textures[ve],ot=Xe.format,Ue=Xe.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve);let st=$h(Xe);if(st.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(st.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(U,X,H,V,te.convert(ot),te.convert(Ue),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),de.bindFramebuffer(D.READ_FRAMEBUFFER,ke);let xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Rd(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Et),D.deleteSync(xt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,X=0){let H=Math.pow(2,-X),V=Math.floor(S.image.width*H),ye=Math.floor(S.image.height*H),Ie=U!==null?U.x:0,ve=U!==null?U.y:0;He.setTexture2D(S,0),de.activeTexture(D.TEXTURE0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Ie,ve,V,ye),de.unbindTexture()},this.copyTextureToTexture=function(S,U,X=null,H=null,V=0,ye=0){let Ie,ve,Ae,ke,Xe,ot,Ue,st,Et,xt=S.isCompressedTexture?S.mipmaps[ye]:S.image;if(X!==null)Ie=X.max.x-X.min.x,ve=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,Xe=X.min.y,ot=X.isBox3?X.min.z:0;else{let lt=Math.pow(2,-V);Ie=Math.floor(S.width*lt),ve=Math.floor(S.height*lt),S.isDataArrayTexture?Ae=xt.depth:S.isData3DTexture?Ae=Math.floor(xt.depth*lt):Ae=1,ke=0,Xe=0,ot=0}H!==null?(Ue=H.x,st=H.y,Et=H.z):(Ue=0,st=0,Et=0);let mt=te.convert(U.format),Wt=te.convert(U.type),Pe;U.isData3DTexture?(He.setTexture3D(U,0),Pe=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Pe=D.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Pe=D.TEXTURE_2D),de.activeTexture(D.TEXTURE0),de.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),de.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),de.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Jt=de.getParameter(D.UNPACK_ROW_LENGTH),ht=de.getParameter(D.UNPACK_IMAGE_HEIGHT),ki=de.getParameter(D.UNPACK_SKIP_PIXELS),Xt=de.getParameter(D.UNPACK_SKIP_ROWS),po=de.getParameter(D.UNPACK_SKIP_IMAGES);de.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),de.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),de.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),de.pixelStorei(D.UNPACK_SKIP_IMAGES,ot);let gi=S.isDataArrayTexture||S.isData3DTexture,Gi=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let lt=Ee.get(S),Ot=Ee.get(U),vn=Ee.get(lt.__renderTarget),Mt=Ee.get(Ot.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,vn.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Pt=0;Pt<Ae;Pt++)gi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.get(S).__webglTexture,V,ot+Pt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,ye,Et+Pt)),D.blitFramebuffer(ke,Xe,ke+Ie,Xe+ve,Ue,st,Ue+Ie,st+ve,D.DEPTH_BUFFER_BIT,D.NEAREST);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||Ee.has(S)){let lt=Ee.get(S),Ot=Ee.get(U);de.bindFramebuffer(D.READ_FRAMEBUFFER,N),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let vn=0;vn<Ae;vn++)gi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,lt.__webglTexture,V,ot+vn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,lt.__webglTexture,V),Gi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,ye,Et+vn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ot.__webglTexture,ye),V!==0?D.blitFramebuffer(ke,Xe,ke+Ie,Xe+ve,Ue,st,Ue+Ie,st+ve,D.COLOR_BUFFER_BIT,D.NEAREST):Gi?D.copyTexSubImage3D(Pe,ye,Ue,st,Et+vn,ke,Xe,Ie,ve):D.copyTexSubImage2D(Pe,ye,Ue,st,ke,Xe,Ie,ve);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Gi?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Pe,ye,Ue,st,Et,Ie,ve,Ae,mt,Wt,xt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,ye,Ue,st,Et,xt.width,xt.height,Ae,mt,xt.data):D.texSubImage3D(Pe,ye,Ue,st,Et,Ie,ve,Ae,mt,Wt,xt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Ue,st,Ie,ve,mt,Wt,xt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Ue,st,xt.width,xt.height,mt,xt.data):D.texSubImage2D(D.TEXTURE_2D,ye,Ue,st,Ie,ve,mt,Wt,xt);de.pixelStorei(D.UNPACK_ROW_LENGTH,Jt),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),de.pixelStorei(D.UNPACK_SKIP_PIXELS,ki),de.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),de.pixelStorei(D.UNPACK_SKIP_IMAGES,po),ye===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&D.generateMipmap(Pe),de.unbindTexture()},this.initRenderTarget=function(S){Ee.get(S).__webglFramebuffer===void 0&&He.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?He.setTextureCube(S,0):S.isData3DTexture?He.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?He.setTexture2DArray(S,0):He.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){k=0,z=0,Y=null,de.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var ao=new F;function xn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ao.copy(e),ao[n]=0,ao.normalize();let c=.5*o/(o+a),h=1-ao.angleTo(i)/l;return Math.sign(ao[t])===1?h*c:a/(o+a)+c+c*(1-h)}var fi=class i extends dn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new F,c=new F,h=new F(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,x=new F,p=.5/o;for(let m=0,b=0;m<u.length;m+=3,b+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:x.set(1,0,0),d[b+0]=xn(x,c,"z","y",r,n),d[b+1]=1-xn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[b+0]=1-xn(x,c,"z","y",r,n),d[b+1]=1-xn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[b+0]=1-xn(x,c,"x","z",r,e),d[b+1]=xn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[b+0]=1-xn(x,c,"x","z",r,e),d[b+1]=1-xn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[b+0]=1-xn(x,c,"x","y",r,e),d[b+1]=1-xn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[b+0]=xn(x,c,"x","y",r,e),d[b+1]=1-xn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Hn=1.46,Cn=3,Vt=.16,hs=.24,co={black:{frame:"#3b3b3e",glass:"#1c1c1f",rough:.36},white:{frame:"#d8d7d3",glass:"#eceae4",rough:.4},natural:{frame:"#bdb6aa",glass:"#c7c1b4",rough:.34},blue:{frame:"#43536a",glass:"#33435c",rough:.36},desert:{frame:"#c4a888",glass:"#cfb89c",rough:.36},pink:{frame:"#e3c2c0",glass:"#efd2ce",rough:.4},green:{frame:"#5f7262",glass:"#a5bba9",rough:.4},purple:{frame:"#5a4a62",glass:"#6b5a73",rough:.38},yellow:{frame:"#e2d28a",glass:"#f0e4a8",rough:.4},red:{frame:"#a3141d",glass:"#b31620",rough:.36},gray:{frame:"#5c5c60",glass:"#4a4a4e",rough:.36},orange:{frame:"#d06a2c",glass:"#dc7a3c",rough:.36},silver:{frame:"#cfd0d3",glass:"#e1e2e4",rough:.3},burgundy:{frame:"#5a1a24",glass:"#6c2230",rough:.36},glacier:{frame:"#a9c0d4",glass:"#c3d6e6",rough:.36},ultramarine:{frame:"#4f62c4",glass:"#6a7fe0",rough:.4},sierra:{frame:"#9bb2cc",glass:"#aec3da",rough:.34}};function _f(i,e,t,n=new Ci){let s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function Fi(i,e,t,n=new Ci){let s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.absarc(s+i-t,r+t,t,-Math.PI/2,0,!1),n.lineTo(s+i,r+e-t),n.absarc(s+i-t,r+e-t,t,0,Math.PI/2,!1),n.lineTo(s+t,r+e),n.absarc(s+t,r+e-t,t,Math.PI/2,Math.PI,!1),n.lineTo(s,r+t),n.absarc(s+t,r+t,t,Math.PI,Math.PI*1.5,!1),n}function py(i,e,t){return Fi(i,e,t,new ji)}function lo(i,e,t=.008,n=3,s=28){let r=new zr(i,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:n,curveSegments:s});return r.translate(0,0,-e/2),r}function xf(i,e,t){let n=i.attributes.position,s=i.attributes.uv;for(let r=0;r<n.count;r++)s.setXY(r,n.getX(r)/e+.5,n.getY(r)/t+.5);return s.needsUpdate=!0,i}function my(i="sans-serif",e="monospace"){let t=document.createElement("canvas");t.width=640,t.height=1316;let n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,t.height);s.addColorStop(0,"#0b0b0c"),s.addColorStop(1,"#050505"),n.fillStyle=s,n.fillRect(0,0,t.width,t.height);let r=n.createRadialGradient(470,330,10,470,330,520);r.addColorStop(0,"rgba(255,32,40,.34)"),r.addColorStop(1,"rgba(255,32,40,0)"),n.fillStyle=r,n.fillRect(0,0,t.width,t.height),n.textBaseline="alphabetic",n.font=`900 66px ${i}`,n.fillStyle="#ff2a2f",n.fillText("i",56,196);let o=n.measureText("i").width;n.fillStyle="#ffffff",n.fillText("SPAYAL",56+o+2,196),n.fillStyle="#ff2a2f",n.beginPath(),n.arc(t.width-76,174,16,0,Math.PI*2),n.fill(),n.font=`500 24px ${e}`,n.fillStyle="rgba(255,255,255,.5)",n.fillText("\u041F\u0410\u0421\u041F\u041E\u0420\u0422 \u0422\u0415\u041B\u0415\u0424\u041E\u041D\u0423",58,246);let a=320,l=560,c=190;n.lineWidth=26,n.lineCap="round",n.strokeStyle="rgba(255,255,255,.09)",n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.stroke(),n.strokeStyle="#ff2a2f",n.beginPath(),n.arc(a,l,c,-Math.PI/2,-Math.PI/2+Math.PI*2*.91),n.stroke(),n.textAlign="center",n.fillStyle="#fff",n.font=`900 132px ${i}`,n.fillText("91%",a+6,l+40),n.font=`500 26px ${e}`,n.fillStyle="rgba(255,255,255,.55)",n.fillText("\u0410\u041A\u0411 \xB7 278 \u0426\u0418\u041A\u041B\u0406\u0412",a,l+96),n.textAlign="left",[["\u0421\u0422\u0410\u041D","9,9 | 10"],["\u041A\u041E\u0420\u041F\u0423\u0421","\u0413\u0415\u0420\u041C\u0415\u0422\u0418\u0427\u041D\u0418\u0419"],["\u0420\u0415\u041C\u041E\u041D\u0422","\u0411\u0415\u0417 \u0421\u041B\u0406\u0414\u0406\u0412"],["\u0413\u0410\u0420\u0410\u041D\u0422\u0406\u042F","90 \u0414\u041D\u0406\u0412"]].forEach(([f,d],g)=>{let x=870+g*92;n.fillStyle="rgba(255,255,255,.07)",n.fillRect(56,x+30,t.width-112,2),n.font=`500 26px ${e}`,n.fillStyle="rgba(255,255,255,.5)",n.fillText(f,56,x),n.textAlign="right",n.font=`600 30px ${i}`,n.fillStyle="#fff",n.fillText(d,t.width-56,x),n.textAlign="left"}),n.fillStyle="rgba(255,255,255,.12)",n.fillRect(56,1262,t.width-112,8),n.fillStyle="#ff2a2f",n.fillRect(56,1262,(t.width-112)*.99,8);let u=new Ri(t);return u.colorSpace=pt,u.anisotropy=4,u}function gy(i,e){let t=document.createElement("canvas");t.width=512,t.height=720;let n=t.getContext("2d");n.fillStyle="#141416",n.fillRect(0,0,512,720),n.fillStyle="#ff2a2f",n.fillRect(0,0,512,22),n.fillStyle="#e9e9e9",n.font=`900 64px ${i}`,n.fillText("\u0410\u041A\u0411 100%",40,150),n.font=`500 26px ${e}`,n.fillStyle="rgba(255,255,255,.55)",["Li-ion \xB7 3.87 V","\u0417\u0410\u041C\u0406\u041D\u0410 \u0412 \u0421\u0415\u0420\u0412\u0406\u0421\u0406","iSPAYAL"].forEach((r,o)=>n.fillText(r,42,220+o*46)),n.strokeStyle="rgba(255,255,255,.18)",n.lineWidth=2;for(let r=0;r<6;r++)n.beginPath(),n.moveTo(42,420+r*40),n.lineTo(470,420+r*40),n.stroke();let s=new Ri(t);return s.colorSpace=pt,s}function oh({tint:i="natural",fontFamily:e="sans-serif",monoFamily:t="monospace",screen:n=!0,internals:s=!0}={}){let r=co[i]||co.natural,o=new kt,a={},l=T=>{let y=new kt;return y.name=T,o.add(y),a[T]={group:y,meshes:[]},y},c=(T,y)=>(a[T].group.add(y),a[T].meshes.push(y),y),h=new _t({color:new Ce(r.frame),metalness:1,roughness:r.rough,clearcoat:.4,clearcoatRoughness:.25}),u=new _t({color:new Ce(r.glass),metalness:.05,roughness:.55,clearcoat:1,clearcoatRoughness:.18,sheen:.3,sheenColor:new Ce("#ffffff")}),f=new _t({color:new Ce(r.glass),metalness:.1,roughness:.12,clearcoat:1,clearcoatRoughness:.04}),d=new _t({color:new Ce(r.frame),metalness:1,roughness:.22}),g=new _t({color:new Ce("#07080b"),metalness:.2,roughness:.05,clearcoat:1,iridescence:1,iridescenceIOR:1.9,iridescenceThicknessMinimum:200,iridescenceThicknessMaximum:620}),x=new zt({color:"#0a0a0b",metalness:.4,roughness:.5}),p=l("frame");{let T=Fi(Hn,Cn,hs);T.holes.push(py(Hn-.07,Cn-.07,hs-.035)),c("frame",new qe(lo(T,Vt-.02,.012,4,36),h));let y=(A,_,M)=>{let P=new qe(new fi(.03,M,.06,2,.012),h);P.position.set(A,_,0),c("frame",P)};y(Hn/2+.012,.55,.42),y(-Hn/2-.012,.78,.22),y(-Hn/2-.012,.46,.22);let w=new qe(new fi(.26,.03,.05,2,.012),x);w.position.set(0,-Cn/2-.004,0),c("frame",w);for(let A=0;A<5;A++){let _=new qe(new ii(.012,.012,.03,10),x);_.position.set(.3+A*.05,-Cn/2-.002,0),c("frame",_)}}let m=l("back");{let T=lo(Fi(Hn-.075,Cn-.075,hs-.04),.012,.004,2,36),y=new qe(T,u);y.position.z=-Vt/2+.012,c("back",y);let w=.6,A=.76,_=Hn/2-.085-w/2,M=Cn/2-.085-A/2,P=new qe(lo(Fi(w,A,.17),.03,.012,4,36),f);P.position.set(_,M,-Vt/2-.012),c("back",P);let E=_+.115;[.17,-.17].forEach(B=>{let k=new qe(new ii(.142,.146,.05,56),d);k.rotation.x=Math.PI/2,k.position.set(E,M+B,-Vt/2-.045),c("back",k);let z=new qe(new ii(.108,.108,.052,56),g);z.rotation.x=Math.PI/2,z.position.set(E,M+B,-Vt/2-.04),c("back",z);let Y=new qe(new ni(.028,24),new bt({color:"#33415e",transparent:!0,opacity:.55}));Y.position.set(E-.03,M+B+.03,-Vt/2-.0665),Y.rotation.y=Math.PI,c("back",Y)});let L=_-.17,O=new qe(new ii(.05,.05,.02,32),new _t({color:"#f3ead6",roughness:.3,emissive:"#3a2e18",emissiveIntensity:.3}));O.rotation.x=Math.PI/2,O.position.set(L,M+.17,-Vt/2-.047),c("back",O);let I=new qe(new ii(.024,.024,.02,20),x);I.rotation.x=Math.PI/2,I.position.set(L,M-.17,-Vt/2-.047),c("back",I);let N=new qe(new ni(.1,48),new bt({color:"#ff1f26",toneMapped:!1}));N.rotation.y=Math.PI,N.position.set(0,.05,-Vt/2-5e-4),c("back",N)}let b=l("screen");{let T=Hn-.075,y=Cn-.075,w=new qe(lo(Fi(T,y,hs-.04),.012,.004,2,36),new _t({color:"#000000",metalness:0,roughness:.04,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:.16,depthWrite:!1}));w.position.z=Vt/2-.008,c("screen",w);let A=T-.09,_=y-.09,M=xf(new Pi(Fi(A,_,hs-.085),32),A,_),P=n?my(e,t):null,E=new qe(M,P?new bt({map:P,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}):new bt({color:"#050505",polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));E.position.z=Vt/2-.011,c("screen",E);let L=new qe(new Pi(Fi(T,y,hs-.04),24),new bt({color:"#000",polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2}));L.position.z=Vt/2-.016,c("screen",L);let O=new qe(new Pi(Fi(T-.02,y-.02,hs-.05),24),new zt({color:"#3a3a3f",metalness:.85,roughness:.38}));O.rotation.y=Math.PI,O.position.z=Vt/2-.02,c("screen",O);let I=new qe(new dn(.3,.5,.01),new zt({color:"#c47a1c",metalness:.6,roughness:.4}));I.position.set(.25,-.6,Vt/2-.026),c("screen",I);let N=new qe(new ni(.045,32),new bt({color:"#000",polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));N.position.set(0,_/2-.11,Vt/2-.0085),c("screen",N)}if(s){l("battery");{let T=gy(e,t),y=new qe(new fi(.98,1.4,.05,3,.03),new _t({color:"#19191b",metalness:.3,roughness:.45,clearcoat:.6}));y.position.set(.12,-.5,0),c("battery",y);let w=new qe(new Pi(_f(.9,1.3,.02)),new bt({map:T}));xf(w.geometry,.9,1.3),w.rotation.y=Math.PI,w.position.set(.12,-.5,-.026),c("battery",w);let A=new qe(new dn(.18,.3,.012),new zt({color:"#c47a1c",metalness:.6,roughness:.4}));A.position.set(.48,.3,-.01),c("battery",A)}l("board");{let T=new qe(lo(_f(1.2,1.02,.08),.022,.004,1,8),new zt({color:"#0e1d17",metalness:.3,roughness:.55}));T.position.set(.04,.9,0),c("board",T);let y=new _t({color:"#b8bcc2",metalness:1,roughness:.28}),w=new zt({color:"#101012",metalness:.2,roughness:.35}),A=new zt({color:"#d6a640",metalness:1,roughness:.3}),_=(E,L,O,I,N,B)=>{let k=new qe(new fi(E,L,O,1,Math.min(E,L,O)*.2),B);k.position.set(I,N,-.022),c("board",k)};_(.42,.42,.04,.22,.95,y),_(.3,.22,.035,-.3,1.18,y),_(.18,.18,.03,-.32,.7,w),_(.12,.2,.03,-.08,.62,w),_(.16,.12,.03,.5,.58,w),_(.09,.09,.025,.5,1.3,w);for(let E=0;E<7;E++)_(.03,.1,.012,-.5+E*.05,.48,A);_(.1,.1,.03,.05,.47,new zt({color:"#1a1a1d",metalness:.3,roughness:.3}));let M=new qe(new fi(.42,.2,.05,2,.02),w);M.position.set(.3,-1.3,0),c("board",M);let P=new qe(new fi(.34,.16,.05,2,.02),y);P.position.set(-.34,-1.3,0),c("board",P)}}return Object.values(a).forEach(T=>{T.mats=[],T.meshes.forEach(y=>{y.material&&y.material.emissive&&(y.material=y.material.clone(),T.mats.push({m:y.material,base:y.material.emissive.clone(),bi:y.material.emissiveIntensity}))})}),{root:o,parts:a}}var _y={screen:[1.55,.34,0],frame:[.55,.14,0],board:[-.42,.06,0],battery:[-1.05,-.08,0],back:[-1.8,-.26,0]},yf={screen:new F(-.35,.9,Vt/2),frame:new F(-Hn/2-.01,-.95,0),board:new F(.22,.95,-.05),battery:new F(.12,-.6,-.03),back:new F(Hn/2-.2,.95,-Vt/2-.06)};function vf(i,e){for(let[t,[n,s,r]]of Object.entries(_y)){let o=i[t];o&&o.group.position.set(r*e,s*e,n*e)}}var xy=new Ce("#ff2a2f");function ah(i,e,t){for(let[n,s]of Object.entries(i)){let r=n===e?t:0;s.mats.forEach(({m:o,base:a,bi:l})=>{o.emissive.copy(a).lerp(xy,r),o.emissiveIntensity=l+r*.6})}}function lh(i,e){if(e===Ic)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Qs||e===no){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Qs)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Mf(i){let e=new Map,t=new Map,n=i.clone();return Sf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Sf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Sf(i.children[n],e.children[n],t)}var ml=class extends wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new gl(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new gl(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ch(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ci.extractUrlBase(e);o=ci.resolveURL(c,this.path)}else o=ci.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new es(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ef){try{o[it.KHR_BINARY_GLTF]=new Ih(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Oh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new fh;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ph(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new Lh;break;case it.KHR_MESH_QUANTIZATION:o[u]=new Nh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function yy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function wt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},dh=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Gt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ni(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new li(h),c.distance=u;break;case"spot":c=new Xr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Vn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},fh=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return bt}extendParams(e,t,n){let s=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(s)}},ph=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},mh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(r,r)}return Promise.all(s)}},gh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},_h=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},xh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},yh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Gt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,pt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},vh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Mh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],Gt),Promise.all(s)}},Sh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},bh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],Gt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,pt)),Promise.all(s)}},Th=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ah=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return wt(this.parser,e,this.name)!==null?_t:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},wh=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Eh=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Rh=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},gl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Ch=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==yn.TRIANGLES&&c.mode!==yn.TRIANGLE_STRIP&&c.mode!==yn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let x=new Ke,p=new F,m=new cn,b=new F(1,1,1),T=new Ar(g.geometry,g.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&b.fromBufferAttribute(l.SCALE,w),T.setMatrixAt(w,x.compose(p,m,b));let y=null;for(let w in l)if(w==="_COLOR_0"){let A=l[w];T.instanceColor=new ei(A.array,A.itemSize,A.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(y===null){let _=T.geometry;y=new Bt,y.name=_.name;for(let M in _.attributes)y.setAttribute(M,_.attributes[M]);for(let M in _.morphAttributes)y.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(let M of _.groups)y.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),T.geometry=y}let A=l[w];y.setAttribute(w,new ei(A.array,A.itemSize,A.normalized))}At.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),d.push(T)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Ef="glTF",ho=12,bf={JSON:1313821514,BIN:5130562},Ih=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ho),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ef)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ho,r=new DataView(e,ho),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===bf.JSON){let c=new Uint8Array(e,ho+o,a);this.content=n.decode(c)}else if(l===bf.BIN){let c=ho+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ph=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Uh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Uh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=nr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],p=l[g];p!==void 0&&(x.normalized=p)}u(d)},a,c,Gt,f)})})}},Lh=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nh=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},_l=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,x=g-c,p=-2*d+3*f,m=d-f,b=1-p,T=m-f+u;for(let y=0;y!==a;y++){let w=o[x+y+a],A=o[x+y+l]*h,_=o[g+y+a],M=o[g+y]*h;r[y]=b*w+T*A+p*_+m*M}return r}},vy=new cn,Dh=class extends _l{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return vy.fromArray(r).normalize().toArray(r),r}},yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tf={9728:Rt,9729:St,9984:Ta,9985:$s,9986:os,9987:pn},Af={33071:Qt,33648:Rs,10497:bi},ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},My={CUBICSPLINE:void 0,LINEAR:Zi,STEP:Ki},hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),i.DefaultMaterial}function us(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function by(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Ty(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ay(i){let e,t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uh(t.attributes):e=i.indices+":"+uh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+uh(i.targets[n]);return e}function uh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ey=new Ke,Oh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Vr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new qr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new es(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return us(r,a,s),Vn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ci.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ch[s.type],a=nr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Lt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=ch[s.type],c=nr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(d&&d!==u){let m=Math.floor(f/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,T=t.cache.get(b);T||(x=new c(a,m*d,s.count*d/h),T=new Us(x,d/h),t.cache.add(b,T)),p=new Fs(T,l,f%d/h,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),p=new Lt(x,l,g);if(s.sparse!==void 0){let m=ch.SCALAR,b=nr[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new b(o[1],T,s.sparse.count*m),A=new c(o[2],y,s.sparse.count*l);a!==null&&(p=new Lt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,M=w.length;_<M;_++){let P=w[_];if(p.setX(P,A[_*l]),l>=2&&p.setY(P,A[_*l+1]),l>=3&&p.setZ(P,A[_*l+2]),l>=4&&p.setW(P,A[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Tf[f.magFilter]||St,h.minFilter=Tf[f.minFilter]||pn,h.wrapS=Af[f.wrapS]||bi,h.wrapT=Af[f.wrapT]||bi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rt&&h.minFilter!==St,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,g){t.parse(f,d,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(d,g){let x=d;t.isImageBitmapLoader===!0&&(x=function(p){let m=new Nt(p);m.needsUpdate=!0,d(m)}),t.load(ci.resolveURL(f,r.path),x,void 0,g)})})}let u=h.then(function(f){return c===!0&&a.revokeObjectURL(l),Vn(f,o),f.userData.mimeType=o.mimeType||wy(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new zs,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bs,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return zt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){let u=s[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Gt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=rn);let h=r.alphaMode||hh.OPAQUE;if(h===hh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===hh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==bt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==bt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==bt){let u=r.emissiveFactor;a.emissive=new Ce().setRGB(u[0],u[1],u[2],Gt)}return r.emissiveTexture!==void 0&&o!==bt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Vn(u,r),t.associations.set(u,{materials:e}),r.extensions&&us(s,u,r),u})}createUniqueName(e){let t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return wf(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Ay(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=wf(new Bt,c,t),c.mode===yn.TRIANGLE_STRIP?f=f.then(d=>lh(d,no)):c.mode===yn.TRIANGLE_FAN&&(f=f.then(d=>lh(d,Qs))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Sy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],p=o[d],m,b=c[d];if(p.mode===yn.TRIANGLES||p.mode===yn.TRIANGLE_STRIP||p.mode===yn.TRIANGLE_FAN||p.mode===void 0){let T=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");T&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=T&&y?new br(x,b):new qe(x,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===yn.LINES)m=new wr(x,b);else if(p.mode===yn.LINE_STRIP)m=new $i(x,b);else if(p.mode===yn.LINE_LOOP)m=new Er(x,b);else if(p.mode===yn.POINTS)m=new Rr(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ty(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Vn(m,r),p.extensions&&us(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&us(s,u[0],r),u[0];let f=new kt;r.extensions&&us(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(di.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ts(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Tr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],x=d.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let T=0,y=f.length;T<y;T++){let w=f[T],A=d[T],_=g[T],M=x[T],P=p[T];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let E=n._createAnimationTracks(w,A,_,M,P);if(E)for(let L=0;L<E.length;L++)m.push(E[L])}let b=new Gr(r,void 0,m);return Vn(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Ey)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,g=u[0];h.pivot=new F().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Os:c.length>1?h=new kt:c.length===1?h=c[0]:h=new At,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Vn(h,r),r.extensions&&us(n,h,r),r.matrix!==void 0){let u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new kt;n.name&&(r.name=s.createUniqueName(n.name)),Vn(r,n),n.extensions&&us(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(Mf(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof tn||f instanceof Nt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Oi[r.path]===Oi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Oi[r.path]){case Oi.weights:h=ri;break;case Oi.rotation:h=oi;break;case Oi.translation:case Oi.scale:h=Li;break;default:n.itemSize===1?h=ri:h=Li;break}let u=s.interpolation!==void 0?My[s.interpolation]:Zi,f=this._getArrayFromAccessor(n);for(let d=0,g=l.length;d<g;d++){let x=new h(l[d]+"."+Oi[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Fh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof oi?Dh:_l;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ry(i,e,t){let n=e.attributes,s=new un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){let h=Fh(nr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,l=new F;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=Fh(nr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new en;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function wf(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Uh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return nt.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Vn(i,e),Ry(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?by(i,e.targets,t):i})}var Cy=new URL("../models/",import.meta.url),Iy=1,xl=new Map,Py="";function If(i){if(xl.has(i))return xl.get(i);let e=new ml().loadAsync(new URL(i,Cy).href).then(t=>(Py=i,t));return e.catch(()=>xl.delete(i)),xl.set(i,e),e}var Ly=["screen","frame","board","battery","back"],Rf=i=>new Ce(i);function In(i,e={}){let t=new _t;return zt.prototype.copy.call(t,i),t.defines={STANDARD:"",PHYSICAL:""},t.specularIntensity=1,t.ior=1.5,t.transparent||(t.side=sn),t.aoMap&&(t.aoMapIntensity=Iy),Object.assign(t,e),t}function Ny(i){let e=i.name;switch(e){case"frame_titanium":return In(i,{metalness:1,roughness:.34,anisotropy:.55,anisotropyRotation:Math.PI/2});case"frame_chamfer":return In(i,{metalness:1,roughness:.07});case"back_glass":return In(i,{metalness:0,roughness:.48,clearcoat:.7,clearcoatRoughness:.22,side:sn});case"island_glass":return In(i,{metalness:0,roughness:.06,clearcoat:1,clearcoatRoughness:.03});case"lens_ring":case"lens_innerring":case"steel":case"speaker_grille":case"rf_shield_etched":return In(i,{roughness:Math.max(.1,i.roughness)});case"lens_innerelement":return In(i,{iridescence:.7,iridescenceIOR:1.8,iridescenceThicknessMinimum:220,iridescenceThicknessMaximum:600,clearcoat:1,clearcoatRoughness:.02});case"sapphire_cover":case"lens_frontelement":return In(i,{clearcoat:1,clearcoatRoughness:.02,depthWrite:!1});case"screen_cover":return In(i,{color:new Ce(0,0,0),roughness:.035,metalness:0,transparent:!0,opacity:1,blending:Zr,depthWrite:!1,side:sn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,specularIntensity:1});case"screen_ui":{let t=new bt({name:e,map:i.emissiveMap||i.map,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.map&&(t.map.colorSpace=pt,t.map.anisotropy=4),t}case"screen_pill":return In(i,{polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});case"screen_mask":return In(i,{polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2});default:return In(i)}}function Pf(i){let e=i.attributes.uv;if(!e)return!1;for(let t=1;t<e.count;t++)if(Math.abs(e.getX(t)-e.getX(0))+Math.abs(e.getY(t)-e.getY(0))>1e-4)return!0;return!1}function Dy(i){let e=i.attributes.position;if(Pf(i))return;i.computeBoundingBox();let t=i.boundingBox,n=t.max.x-t.min.x,s=t.max.y-t.min.y,r=new Float32Array(e.count*2);for(let o=0;o<e.count;o++)r[o*2]=(t.max.x-e.getX(o))/n,r[o*2+1]=(t.max.y-e.getY(o))/s;i.setAttribute("uv",new Lt(r,2))}var Bh=new WeakMap;function Uy(i){if(!i)return null;if(Bh.has(i))return Bh.get(i);let e=null;try{let t=i.width,n=i.height,s=document.createElement("canvas");s.width=t,s.height=n;let r=s.getContext("2d");r.drawImage(i,0,0);let o=r.getImageData(0,0,t,n).data,a=0,l=0,c=0,h=0,u=0,f=0;for(let d=0;d<n;d++)for(let g=0;g<t;g++){let x=(d*t+g)*4;o[x]>96&&o[x]>o[x+1]*2&&(a++,l+=g,c+=d,h+=o[x],u+=o[x+1],f+=o[x+2])}a>8&&(e={u:l/a/t,v:c/a/n,ru:Math.sqrt(a/Math.PI)/t,color:new Ce().setRGB(h/a/255,u/a/255,f/a/255,pt)})}catch{}return Bh.set(i,e),e}function Fy(i){let e=i.material,t=Uy(e.emissiveMap&&e.emissiveMap.image);if(!t)return null;let n=i.geometry;n.computeBoundingBox();let s=n.boundingBox,r=s.max.x-s.min.x,o=s.max.y-s.min.y,a=new qe(new ni(t.ru*r,48),new bt({name:"brand_dot",color:t.color,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return a.position.set(s.max.x-t.u*r,s.max.y-t.v*o,s.min.z-2e-4),a.rotation.y=Math.PI,a.name="brand_dot",i.parent.add(a),e.emissiveMap=null,e.emissive.setRGB(0,0,0),e.needsUpdate=!0,a}function Lf(i,{tint:e="natural",internals:t=!0}={}){let s=(i.scene.getObjectByName("phone")||i.scene).clone(!0);s.position.set(0,0,0),s.rotation.set(0,0,0),s.scale.set(1,1,1);let r={},o=new Map,a=c=>c&&(o.has(c)||o.set(c,c.clone()),o.get(c));for(let c of Ly){let h=s.getObjectByName(c);if(!h)continue;if(!t&&(c==="board"||c==="battery")){h.removeFromParent();continue}let u=r[c]={group:h,meshes:[],mats:[],tintable:[]},f=new Map;h.traverse(d=>{if(!d.isMesh)return;d.geometry=d.geometry.clone(),d.material.name==="back_glass"&&Dy(d.geometry),d.material.name==="frame_titanium"&&!Pf(d.geometry)&&(d.userData.noAniso=!0);let g=d.material.name==="frame_titanium"&&d.userData.noAniso?"noAniso":d.material;if(!f.has(g)){let x=Ny(d.material);d.userData.noAniso&&(x.anisotropy=0);for(let p of["map","emissiveMap","aoMap","normalMap","roughnessMap","metalnessMap"])x[p]&&(x[p]=a(x[p]));f.set(g,x)}d.material=f.get(g),d.frustumCulled=!0,u.meshes.push(d)});for(let d of u.meshes)if(d.material.name==="back_glass"&&d.material.emissiveMap){let g=Fy(d);g&&u.meshes.push(g)}for(let d of f.values())d.emissive&&(d.emissiveMap?u.mats.push({m:d,base:d.emissive.clone(),bi:d.emissiveIntensity,viaColor:!0,baseColor:d.color.clone()}):u.mats.push({m:d,base:d.emissive.clone(),bi:d.emissiveIntensity})),u.tintable.push(d)}let l={root:s,parts:r,tint:null};return uo(l,e),l}function uo(i,e){let t=co[e]||co.natural;i.tint=e;let n=Rf(t.frame),s=Rf(t.glass),r=new Ce(1,1,1);for(let o of Object.values(i.parts))for(let a of o.tintable){switch(a.name){case"back_glass":a.color.copy(s);break;case"island_glass":a.color.copy(s);break;case"logo_gloss":a.color.copy(s);break;case"frame_titanium":a.color.copy(n),a.roughness=t.rough;break;case"frame_chamfer":a.color.copy(n).lerp(r,.1);break;case"lens_ring":a.color.copy(n);break;case"antenna_band":a.color.copy(n).multiplyScalar(.7);break;default:continue}let l=o.mats.find(c=>c.m===a);l&&l.viaColor&&l.baseColor.copy(a.color)}}var Cf=new Ce("#ff2a2f");function Nf(i,e,t){for(let[n,s]of Object.entries(i)){let r=n===e?t:0;for(let o of s.mats)o.viaColor?o.m.color.copy(o.baseColor).lerp(Cf,r*.55):(o.m.emissive.copy(o.base).lerp(Cf,r),o.m.emissiveIntensity=o.bi+r*.6)}}function Bi(i){let e=new Set;i.traverse(t=>{t.geometry&&t.geometry.dispose();let n=t.material?Array.isArray(t.material)?t.material:[t.material]:[];for(let s of n)if(!e.has(s)){e.add(s);for(let r in s){let o=s[r];o&&o.isTexture&&o.dispose()}s.dispose()}})}var yl=class extends Hr{constructor(e){super(e),this.type=jt}parse(e){let o=function(M,P){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(P||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(P||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(P||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(P||""))}},u=function(M,P,E){P=P||1024;let O=M.pos,I=-1,N=0,B="",k=String.fromCharCode.apply(null,new Uint16Array(M.subarray(O,O+128)));for(;0>(I=k.indexOf(`
`))&&N<P&&O<M.byteLength;)B+=k,N+=k.length,O+=128,k=String.fromCharCode.apply(null,new Uint16Array(M.subarray(O,O+128)));return-1<I?(E!==!1&&(M.pos+=N+I+1),B+k.slice(0,I)):!1},f=function(M){let P=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},B,k;for((M.pos>=M.byteLength||!(B=u(M)))&&o(1,"no header found"),(k=B.match(P))||o(3,"bad initial token"),N.valid|=1,N.programtype=k[1],N.string+=B+`
`;B=u(M),B!==!1;){if(N.string+=B+`
`,B.charAt(0)==="#"){N.comments+=B+`
`;continue}if((k=B.match(E))&&(N.gamma=parseFloat(k[1])),(k=B.match(L))&&(N.exposure=parseFloat(k[1])),(k=B.match(O))&&(N.valid|=2,N.format=k[1]),(k=B.match(I))&&(N.valid|=4,N.height=parseInt(k[1],10),N.width=parseInt(k[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||o(3,"missing format specifier"),N.valid&4||o(3,"missing image size specifier"),N},d=function(M,P,E){let L=P;if(L<8||L>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);L!==(M[2]<<8|M[3])&&o(3,"wrong scanline width");let O=new Uint8Array(4*P*E);O.length||o(4,"unable to allocate buffer space");let I=0,N=0,B=4*L,k=new Uint8Array(4),z=new Uint8Array(B),Y=E;for(;Y>0&&N<M.byteLength;){N+4>M.byteLength&&o(1),k[0]=M[N++],k[1]=M[N++],k[2]=M[N++],k[3]=M[N++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=L)&&o(3,"bad rgbe scanline format");let W=0,J;for(;W<B&&N<M.byteLength;){J=M[N++];let oe=J>128;if(oe&&(J-=128),(J===0||W+J>B)&&o(3,"bad scanline data"),oe){let De=M[N++];for(let q=0;q<J;q++)z[W++]=De}else z.set(M.subarray(N,N+J),W),W+=J,N+=J}let le=L;for(let oe=0;oe<le;oe++){let De=0;O[I]=z[oe+De],De+=L,O[I+1]=z[oe+De],De+=L,O[I+2]=z[oe+De],De+=L,O[I+3]=z[oe+De],I+=4}Y--}return O},g=function(M,P,E,L){let O=M[P+3],I=Math.pow(2,O-128)/255;E[L+0]=M[P+0]*I,E[L+1]=M[P+1]*I,E[L+2]=M[P+2]*I,E[L+3]=1},x=function(M,P,E,L){let O=M[P+3],I=Math.pow(2,O-128)/255;E[L+0]=Di.toHalfFloat(Math.min(M[P+0]*I,65504)),E[L+1]=Di.toHalfFloat(Math.min(M[P+1]*I,65504)),E[L+2]=Di.toHalfFloat(Math.min(M[P+2]*I,65504)),E[L+3]=Di.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;let m=f(p),b=m.width,T=m.height,y=d(p.subarray(p.pos),b,T),w,A,_;switch(this.type){case Kt:_=y.length/4;let M=new Float32Array(_*4);for(let E=0;E<_;E++)g(y,E*4,M,E*4);w=M,A=Kt;break;case jt:_=y.length/4;let P=new Uint16Array(_*4);for(let E=0;E<_;E++)x(y,E*4,P,E*4);w=P,A=jt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:b,height:T,data:w,header:m.string,gamma:m.gamma,exposure:m.exposure,type:A,colorSpace:Gt,minFilter:St,magFilter:St,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};function Oy(){let i=new Ti,e=new Ii(1,1),t=new qe(new dn(14,10,14),new bt({color:new Ce(.012,.012,.014),side:Ht}));i.add(t);let n=(s,r,o,a,l,c,h=[1,1,1])=>{let u=new qe(e,new bt({color:new Ce(h[0]*c,h[1]*c,h[2]*c),side:rn}));return u.scale.set(s,r,1),u.position.set(o,a,l),u.lookAt(0,0,0),i.add(u),u};return n(5,2.4,-1.2,4.6,2.2,5.5),n(.55,7,-5.2,.4,1.2,9),n(.55,7,5.2,.2,-.4,7),n(3.6,.35,0,2.6,-5.5,4),n(2.4,6,-5.4,.8,-2.6,2.6),n(6,3,0,-.2,6.5,.9,[1,.98,.95]),n(1.6,5,-3.6,1,4.6,3.2),n(.4,4.5,4.6,-1.4,-3.6,2.4,[1,.12,.13]),n(4,.6,0,-4.6,1.5,.6,[1,.9,.8]),i}function Df(i){let e=new cs(i),t=Oy(),n=e.fromScene(t,.035,.1,40);return e.dispose(),t.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),n}var zh=new Map;function Uf(i){return i?(zh.has(i)||zh.set(i,new yl().loadAsync(new URL("../env/"+i,import.meta.url).href).then(e=>(e.mapping=Js,e)).catch(e=>(console.info("studio env unavailable, softbox",e&&e.message),null))),zh.get(i)):Promise.resolve(null)}function Ff(i,e){let t=new cs(i),n=t.fromEquirectangular(e);return t.dispose(),n}var kh=null;function By(){if(kh)return kh;let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d"),t=(n,s,r)=>{e.save(),e.translate(128,64),e.scale(1,n);let o=e.createRadialGradient(0,0,0,0,0,s);o.addColorStop(0,`rgba(0,0,0,${r})`),o.addColorStop(.55,`rgba(0,0,0,${r*.45})`),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.fillRect(-s,-s,s*2,s*2),e.restore()};return t(.42,120,.55),t(.16,80,.75),kh=i,i}function Gh({width:i=2.2,depth:e=1,opacity:t=.6}={}){let n=new Ri(By());n.colorSpace=pt;let s=new qe(new Ii(i,e),new bt({map:n,transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.renderOrder=-1,s.userData.baseOpacity=t,s}var zy="phone_v6.glb",ky="studio.hdr",Gy={agx:ss,aces:Ys,neutral:Ks},Of=new URLSearchParams(location.search),Bf=Gy[Of.get("tone")]??ss,Hy={[ss]:1.25,[Ys]:.95,[Ks]:1}[Bf],Vy={softbox:1,hdr:1},vl=(i,e,t)=>{let n=di.clamp((t-i)/(e-i),0,1);return n*n*n*(n*(n*6-15)+10)},zf=()=>matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<820,Wy=i=>i?1.25:zf()?1.75:2;function kf(i,e){let t=new dl({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture});return t.toneMapping=Bf,t.toneMappingExposure=Hy,t.outputColorSpace=pt,t.setClearColor(0,0),t}function Gf(i,e,t){let n=null,s="",r=0,o=(a,l)=>{n&&n.dispose(),n=a,s=l,e.environment=a.texture,e.environmentIntensity=Vy[l]};return{build(){let a=++r;o(Df(i),"softbox"),Uf(ky).then(l=>{l&&a===r&&!i.getContext().isContextLost()&&(o(Ff(i,l),"hdr"),t&&t())})},get kind(){return s},dispose(){r++,n&&n.dispose(),n=null,e.environment=null}}}async function Hf({tint:i,font:e,mono:t,internals:n}){try{if(Of.has("procphone"))throw new Error("forced by ?procphone");let s=await If(zy),r=Lf(s,{tint:i,internals:n});return{root:r.root,parts:r.parts,glb:!0,inst:r}}catch(s){console.info("phone GLB unavailable, procedural fallback",s&&s.message);let{root:r,parts:o}=oh({tint:i,fontFamily:e||"sans-serif",monoFamily:t||"monospace",internals:n});return{root:r,parts:o,glb:!1,inst:null}}}async function Vf(i,e,t){try{i.extensions.has("KHR_parallel_shader_compile")?await i.compileAsync(e,t):(i.compile(e,t),await new Promise(n=>requestAnimationFrame(n)))}catch{}}function Wf(){let i=[];return()=>{let e=performance.now();for(i.push(e);i.length&&e-i[0]>6e4;)i.shift();return i.length>=3}}function ab(i,e={}){let t=kf(i,e),n=Math.min(Wy(e.lowPower),e.dpr||window.devicePixelRatio||1);t.setPixelRatio(n);let s=new Ti,r=Gf(t,s,()=>ze());r.build();let o=new li(16718884,30,14,1.6);o.position.set(-3.2,1.6,-2.2),s.add(o);let a=new li(16722479,16,10,1.6);a.position.set(3.4,-2.4,-1.6),s.add(a);let l=new Ni(16726586,1.2);l.position.set(-2,3,-5),s.add(l);let c=new It(28,1,.1,100),h=new kt;s.add(h);let u=Gh({width:2.3,depth:.9,opacity:.55});u.position.y=-Cn/2-.16,s.add(u);let f=null,d=null,g=ah,x=e.progress??0,p=x,m=0,b=0,T=0,y=0,w=null,A=0,_=!0,M=0,P=performance.now(),E=!0,L=!1,O=!!e.still,I=e.labels||{},N=e.anchor,B=i.closest("[data-stage]")||i.parentElement;queueMicrotask(()=>{!L&&B&&B.classList.remove("has-gl")});function k(){let re=i.clientWidth||z.w||i.width,we=i.clientHeight||z.h||i.height;return t.setSize(re,we,!1),c.aspect=re/we,c.updateProjectionMatrix(),{w:re,h:we}}let z={w:0,h:0};z=k();let Y={fps:0,renders:0,lost:0,dpr:n,frames:0,slow:0,model:"",env:""},W=!1,J=!1,le=Wf();function oe(re){if(!d)return;let we=(re-P)/1e3,$e=Math.min(.25,Math.max(.001,(re-(oe.last||re))/1e3));oe.last=re;let D=O?1:1-Math.exp(-$e*7);p+=(x-p)*D,m+=(T-m)*(1-Math.exp(-$e*4)),b+=(y-b)*(1-Math.exp(-$e*4));let ct=p,je=vl(0,.34,ct),ft=vl(.12,.38,ct),de=vl(.78,.92,ct),vt=vl(.78,.95,ct),Ee=ft*(1-de);vf(d,Ee),Q=Ee;let He=Ee>.002;d.board&&(d.board.group.visible=He),d.battery&&(d.battery.group.visible=He),A+=((w?1:0)-A)*(1-Math.exp(-$e*9)),g(d,w,A*(.75+.25*Math.sin(we*5))*Ee);let R=O?0:1;h.rotation.y=-.42+je*2.62+vt*(Math.PI*2-2.62)+m*.45*(1-Ee*.5)+Math.sin(we*.5)*.06*R*(1-Ee),h.rotation.x=.06+je*.12-vt*.12+b*.22+Ee*.06,h.rotation.z=-.05*(1-Ee)+Ee*.04,h.position.y=Math.sin(we*.9)*.05*R,u.material.opacity=u.userData.baseOpacity*(1-Ee)*(1-h.position.y*3),u.visible=u.material.opacity>.01;let{w:v,h:G}=z,se=v/2,j=G/2,ce=G*.8,pe=v*.8;if(N){let ne=i.getBoundingClientRect(),te=N.getBoundingClientRect();te.width&&(se=te.left-ne.left+te.width/2,j=te.top-ne.top+te.height/2,ce=te.height,pe=te.width)}let Z=Math.tan(di.degToRad(c.fov/2)),$=Z*c.aspect,fe=Cn*(1.08+.2*Ee),Re=1.9+2.9*Ee,C=Math.max(fe/2/Z*(G/ce),Re/2/$*(v/pe));c.position.set(0,0,C),c.lookAt(0,0,0),c.near=Math.max(.1,C-4.5),c.far=C+4.5,c.setViewOffset(v,G,v/2-se,G/2-j,v,G),o.intensity=30-Ee*14,W||(t.render(s,c),Y.renders++,e.onRender&&e.onRender(t));let K=di.clamp((Ee-.55)/.35,0,1);for(let[ne,te]of Object.entries(I)){if(!te||!d[ne])continue;let me=K.toFixed(3);if(me==="0.000"&&te._op===me)continue;let xe=yf[ne].clone();d[ne].group.localToWorld(xe),xe.project(c);let Ge=(xe.x+1)/2*v,ie=(1-xe.y)/2*G,Ze=te._w||(te._w=te.offsetWidth),Ne=!!(Ze&&Ge+Ze+24>v);Ne&&(Ge=v-Ze-24),te._cl!==Ne&&(te.classList.toggle("is-clamped",Ne),te._cl=Ne);let Me=`translate3d(${Ge.toFixed(1)}px, ${ie.toFixed(1)}px, 0)`;te._tr!==Me&&(te.style.transform=Me,te._tr=Me),te._op!==me&&(te.style.opacity=me,te._op=me);let Qe=ne===w;te._h!==Qe&&(te.classList.toggle("is-hl",Qe),te._h=Qe)}}let De=()=>!!document.querySelector("dialog[open]"),q=performance.now(),ee=0,_e=16.7,Le=0;function Se(re){if(ee++,re-q>=1e3&&(Y.fps=Math.round(ee*1e3/(re-q)),ee=0,q=re),!Le){Le=re;return}let we=Math.min(120,re-Le);Le=re,_e+=(we-_e)*.08,Y.frames++,_e>24&&n>1&&Y.frames>45&&!e.dpr&&(n=Math.max(1,+(n-.25).toFixed(2)),t.setPixelRatio(n),z=k(),Y.dpr=n,Y.slow++,Y.frames=0,_e=18)}function Be(re){if(M=0,!(!E||!L)){if(De()){Le=0,M=requestAnimationFrame(Be);return}Se(re),oe(re),_&&!O?M=requestAnimationFrame(Be):Le=0}}function at(){!M&&!O&&L&&E&&!J&&(M=requestAnimationFrame(Be))}function ze(){O?oe(performance.now()):at()}let Je=new Yr,rt=new he,Q=0;function ue(re){if(Q<.6||!d)return null;let we=i.getBoundingClientRect();rt.set((re.clientX-we.left)/we.width*2-1,-((re.clientY-we.top)/we.height)*2+1),Je.setFromCamera(rt,c);let $e=Je.intersectObjects(Object.values(d).map(D=>D.group),!0);for(let D of $e){let ct=D.object;for(;ct&&!d[ct.name];)ct=ct.parent;if(ct)return ct.name}return null}let ae=[],Te=(re,we,$e,D)=>{re.addEventListener(we,$e,D),ae.push(()=>re.removeEventListener(we,$e,D))};e.onPick&&(Te(i,"click",re=>{let we=ue(re);we&&e.onPick(we)}),Te(i,"pointermove",re=>{i.style.cursor=ue(re)?"pointer":""},{passive:!0}));let ge=new ResizeObserver(()=>{let re=i.clientWidth,we=i.clientHeight;!re||!we||re===z.w&&we===z.h||(z=k(),oe(performance.now()))});ge.observe(i),Te(i,"webglcontextlost",re=>{E&&(re.preventDefault(),W=!0,Y.lost++,le()&&(J=!0),e.onLost&&e.onLost())},!1),Te(i,"webglcontextrestored",()=>{!E||J||(r.build(),W=!1,z=k(),oe(performance.now()),L&&e.onRestored&&e.onRestored(),at())},!1);let We=null;if(!O){Te(window,"pointermove",we=>{we.pointerType==="mouse"&&(T=we.clientX/window.innerWidth*2-1,y=we.clientY/window.innerHeight*2-1)},{passive:!0});let re=!0;We=new IntersectionObserver(([we])=>{re=we.isIntersecting,_=re&&!document.hidden,_&&at()},{rootMargin:"160px 0px"}),We.observe(i),Te(document,"visibilitychange",()=>{_=re&&!document.hidden,_&&at()})}e.debug&&Xy(Y,()=>t.getPixelRatio());let Oe=Hf({tint:e.tint||"natural",font:e.font,mono:e.mono,internals:!0}).then(async re=>{if(!E){Bi(re.root);return}f=re,d=re.parts,g=re.glb?Nf:ah,h.add(re.root),Y.model=re.glb?"glb":"procedural",oe(performance.now());for(let we of["board","battery"])d[we]&&(d[we].group.visible=!0);await Vf(t,s,c),E&&(L=!0,Y.env=r.kind,oe(performance.now()),!W&&B&&B.classList.add("has-gl"),at())});return{setProgress(re){x=di.clamp(re,0,1),at()},setHighlight(re){w=re||null,at()},setTint(re){f&&f.glb&&(uo(f.inst,re),ze())},renderAt(re,we){x=p=re,w=we||null,A=we?1:0,oe(performance.now())},get ready(){return Oe},get envKind(){return r.kind},canvas:i,renderer:t,stats:Y,_dbg:{scene:s,camera:c,pivot:h},dispose(){E&&(E=!1,cancelAnimationFrame(M),M=0,ge.disconnect(),We&&We.disconnect(),ae.forEach(re=>re()),f&&Bi(f.root),Bi(u),r.dispose(),t.dispose())}}}var pi={live:0,lost:0,renders:0};function Xy(i,e){let t=document.createElement("div");t.setAttribute("aria-hidden","true"),t.style.cssText="position:fixed;left:8px;top:64px;z-index:9999;font:500 11px/1.35 ui-monospace,monospace;color:#0f0;background:rgba(0,0,0,.75);padding:6px 8px;border-radius:6px;pointer-events:none;white-space:pre",document.body.appendChild(t);let n=i.renders,s=pi.renders;setInterval(()=>{let r=i.renders-n,o=pi.renders-s;n=i.renders,s=pi.renders,t.textContent=`fps ${i.fps}  dpr ${e()}  ${i.model}/${i.env}
hero renders/s ${r}
viewers ${pi.live} \xB7 ${o}/s
ctx lost ${i.lost+pi.lost}  dpr drops ${i.slow}`},1e3)}function lb(i,{tint:e="natural",font:t,mono:n,auto:s=!0}={}){let r=kf(i,{});r.setPixelRatio(Math.min(zf()?1.5:1.75,window.devicePixelRatio||1));let o=new Ti,a=Gf(r,o,()=>N());a.build();let l=new Ni(16777215,.6);l.position.set(-3,4,-5),o.add(l);let c=new li(16722479,18,12,1.6);c.position.set(3,-1.5,-2.5),o.add(c);let h=new It(26,1,5,30);h.position.set(0,0,9.4);let u=new kt;o.add(u);let f=Gh({width:2.2,depth:.85,opacity:.5});f.position.y=-Cn/2-.14,o.add(f);let d=null,g=0,x=Math.PI-.55,p=s?.006:0,m=!1,b=0,T=0,y=!0,w=!1,A=!1,_=!0,M=0,P=0,E=i.parentElement;i.style.opacity="0",i.style.transition="opacity .5s";let L=null,O=!1;queueMicrotask(()=>{if(w||!E)return;E.classList.contains("has-gl")&&(E.classList.remove("has-gl"),O=!0);let ee=E.querySelector("[data-pv-img]");ee&&ee.style.visibility==="hidden"&&(ee.style.visibility="",L=ee)});let I=()=>{i.style.opacity="1",O&&E.classList.add("has-gl"),L&&(L.style.visibility="hidden")},N=()=>{!A&&w&&(r.render(o,h),pi.renders++)},B=()=>{let ee=i.clientWidth,_e=i.clientHeight;!ee||!_e||ee===M&&_e===P||(M=ee,P=_e,r.setSize(ee,_e,!1),h.aspect=ee/_e,h.position.z=9.4*Math.max(1,.62/Math.min(h.aspect,.62)),h.updateProjectionMatrix(),N())};B();let k=new ResizeObserver(B);k.observe(i),pi.live++;let z=Wf(),Y=!1;i.addEventListener("webglcontextlost",ee=>{y&&(ee.preventDefault(),A=!0,pi.lost++,z()&&(Y=!0),i.parentNode&&i.parentNode.classList.remove("has-gl"))},!1),i.addEventListener("webglcontextrestored",()=>{!y||Y||(a.build(),A=!1,M=P=0,B(),w&&i.parentNode&&i.parentNode.classList.add("has-gl"),q())},!1);let W=new IntersectionObserver(([ee])=>{_=ee.isIntersecting,q()},{rootMargin:"120px 0px"});W.observe(i);let J=()=>q();document.addEventListener("visibilitychange",J),i.addEventListener("pointerdown",ee=>{m=!0,b=ee.clientX,i.setPointerCapture(ee.pointerId)}),i.addEventListener("pointermove",ee=>{if(!m)return;let _e=ee.clientX-b;b=ee.clientX,x+=_e*.012,p=_e*.0012});let le=()=>{m=!1};i.addEventListener("pointerup",le),i.addEventListener("pointercancel",le),i.addEventListener("keydown",ee=>{ee.key==="ArrowLeft"&&(x-=.3),ee.key==="ArrowRight"&&(x+=.3),q()});let oe=()=>y&&w&&_&&!document.hidden,De=()=>{if(T=0,!!oe()){if(m||(x+=p,p+=((s?.004:0)-p)*.02),g>.001){let ee=g*.09;x+=ee,g-=ee}u.rotation.set(.08,x,-.04),N(),T=requestAnimationFrame(De)}};function q(){!T&&oe()&&(T=requestAnimationFrame(De))}return Hf({tint:e,font:t,mono:n,internals:!1}).then(async ee=>{if(!y){Bi(ee.root);return}d=ee,u.add(ee.root),u.rotation.set(.08,x,-.04),await Vf(r,o,h),y&&(d.glb&&d.inst.tint!==e&&uo(d.inst,e),w=!0,N(),I(),q())}),{setTint(ee){if(ee!==e){if(e=ee,d&&d.glb)uo(d.inst,ee);else if(d){u.remove(d.root),Bi(d.root);let{root:_e,parts:Le}=oh({tint:e,fontFamily:t,monoFamily:n,internals:!1});d={root:_e,parts:Le,glb:!1},u.add(_e)}s&&(g+=Math.PI*2),N(),q()}},destroy(){y&&(y=!1,pi.live--,k.disconnect(),W.disconnect(),document.removeEventListener("visibilitychange",J),cancelAnimationFrame(T),d&&Bi(d.root),Bi(f),a.dispose(),r.dispose(),r.forceContextLoss())},resize:B}}export{If as loadGLB,ab as start,lb as startViewer,pi as viewerStats};
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
