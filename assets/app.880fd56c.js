var G=Object.defineProperty,Y=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var j=(n,e,c)=>e in n?G(n,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[e]=c,N=(n,e)=>{for(var c in e||(e={}))U.call(e,c)&&j(n,c,e[c]);if(R)for(var c of R(e))K.call(e,c)&&j(n,c,e[c]);return n},A=(n,e)=>Y(n,J(e));import{c as X,N as I,a as Q,d as B,o as y,b as M,e as b,t as D,f as Z,u as e1,r as n1,g as c1,h as t1,i as $,j as k,F as a1,k as H,l as o1,m as i1,V as r1}from"./vendor.7b585607.js";const s1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=c(t);fetch(t.href,a)}};s1();const l1=Object.fromEntries(Object.entries({}).map(([n,e])=>{const c=n.endsWith(".yaml");return[n.slice(14,c?-5:-4),e.default]})),d1=({app:n})=>{const e=X({legacy:!1,locale:"en",messages:l1});n.use(e)};var u1=Object.freeze(Object.defineProperty({__proto__:null,install:d1},Symbol.toStringTag,{value:"Module"}));const _1=({isClient:n,router:e})=>{n&&(e.beforeEach(()=>{I.start()}),e.afterEach(()=>{I.done()}))};var p1=Object.freeze(Object.defineProperty({__proto__:null,install:_1},Symbol.toStringTag,{value:"Module"}));const f1=({isClient:n,initialState:e,app:c})=>{const s=Q();c.use(s),n?s.state.value=e.pinia||{}:e.pinia=s.state.value};var m1=Object.freeze(Object.defineProperty({__proto__:null,install:f1},Symbol.toStringTag,{value:"Module"}));const h1="modulepreload",T={},g1="/",P=function(e,c){return!c||c.length===0?e():Promise.all(c.map(s=>{if(s=`${g1}${s}`,s in T)return;T[s]=!0;const t=s.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=t?"stylesheet":h1,t||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),t)return new Promise((g,m)=>{l.addEventListener("load",g),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},v1=({isClient:n,router:e})=>{!n||e.isReady().then(async()=>{const{registerSW:c}=await P(()=>import("./virtual_pwa-register.0b4e155d.js"),[]);c({immediate:!0})})};var b1=Object.freeze(Object.defineProperty({__proto__:null,install:v1},Symbol.toStringTag,{value:"Module"}));const y1={class:"wish transition animate-slow animate-fadeIn",text:"center"},C1={text:"3xl",font:"light",m:"2"},z1={text:"3xl",font:"normal"},M1=B({props:{name:{default:"You"},msg:{default:"Happy Birthday!"}},setup(n){return(e,c)=>(y(),M("div",y1,[b("h1",C1,D(n.name),1),b("h2",z1,D(n.msg),1)]))}});var E=(n,e)=>{const c=n.__vccOpts||n;for(const[s,t]of e)c[s]=t;return c};const x1={},w1={class:"birthday"},S1=Z(`<div class="velas" data-v-bc9a355a><div class="fuego" data-v-bc9a355a></div><div class="fuego" data-v-bc9a355a></div><div class="fuego" data-v-bc9a355a></div><div class="fuego" data-v-bc9a355a></div><div class="fuego" data-v-bc9a355a></div></div><svg id="cake" version="1.1" x="0px" y="0px" width="200px" height="500px" viewBox="0 0 200 500" enable-background="new 0 0 200 500" xml:space="preserve" data-v-bc9a355a><path fill="#a88679" d="M173.667-13.94c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002
      c44.697,0,96.586,0,147.334,0C177.667-29.942,177.668-13.94,173.667-13.94z" data-v-bc9a355a><animate id="bizcocho_3" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1" begin="relleno_2.end" dur="0.3s" fill="freeze" values="
                            M173.667-13.94c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002
      c44.697,0,96.586,0,147.334,0C177.667-29.942,177.668-13.94,173.667-13.94z
                            ;
                            M173.667,411.567c-47.995,12.408-102.955,12.561-147.334,0
      c-3.848-1.089-0.189-16.089,3.661-15.002c44.836,12.66,90.519,12.753,139.427,0.07
      C173.293,395.631,177.541,410.566,173.667,411.567z
                            ;
                            M173.667,427.569c-49.795,0-101.101,0-147.334,0c-3.999,0-4-16.002,0-16.002
      c46.385,0,97.539,0,147.334,0C177.668,411.567,177.667,427.569,173.667,427.569z
                            " data-v-bc9a355a></animate></path><path fill="#8b6a60" d="M100-178.521c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227
      c0,19.144,0,57.431,0,76.574c0,10.152,0,40.607,0,40.607c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364c0,0,0-30.455,0-40.607c0-19.144,0-57.432,0-76.575c0-11.057,0-44.226,0-44.226C96.636-177.015,98.142-178.521,100-178.521
      L100-178.521z" data-v-bc9a355a><animate id="relleno_2" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 0.58 1" begin="bizcocho_2.end" dur="0.5s" fill="freeze" values="
                            M100-178.521c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227
      c0,19.144,0,57.431,0,76.574c0,10.152,0,40.607,0,40.607c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364c0,0,0-30.455,0-40.607c0-19.144,0-57.432,0-76.575c0-11.057,0-44.226,0-44.226C96.636-177.015,98.142-178.521,100-178.521
      L100-178.521z
                            ;
                            M100,267.257c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227
      c0,19.143,0,57.43,0,76.574c0,10.151,0,40.606,0,40.606c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364
      c0,0,0-30.455,0-40.606c0-19.145,0-57.432,0-76.576c0-11.057,0-44.225,0-44.225C96.636,268.763,98.142,267.257,100,267.257
      L100,267.257z
                            ;
                            M93.928,405.433c-0.655,6.444-0.102,9.067,2.957,11.798c0,0,8.083,5.571,16.828,3.503
      c18.629-4.406,43.813,6.194,50.792,7.791c14.75,3.375,9.162,6.867,9.162,6.867c-2.412,2.258-58.328,0-73.667,0l0,0
      c-1.858,0-69.995,2.133-73.667,0c0,0-3.337-2.439,6.172-5.992c11.375-4.25,52.875,8.822,47.139-9.442
      c-6.333-20.167,5.226-21.514,5.226-21.514c3.435-0.915,12.78-6.663,10.923-0.546L93.928,405.433z
                            ;
                            M102.242,427.569c5.348,0,14.079,0,17.462,0c0,0,17.026,0,27.504,0
      c19.143,0,20.39-3.797,26.459,0c3,1.877,0,7.823,0,7.823c-2.412,2.258-58.328,0-73.667,0l0,0c-1.858,0-67.187,0-73.667,0
      c0,0-4.125-4.983,0-7.823c5.201-3.58,16.085,0,23.725,0c8.841,0,20.762,0,20.762,0c3.686,0,8.597,0,19.511,0H102.242z
                            " data-v-bc9a355a></animate></path><path fill="#a88679" d="M173.667-15.929c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002
      c43.566,0,97.96,0,147.334,0C177.667-31.931,177.666-15.929,173.667-15.929z" data-v-bc9a355a><animate id="bizcocho_2" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0.25 0 0.58 1" begin="relleno_1.end" dur="0.5s" fill="freeze" values="
                            M173.667-15.929c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002
      c43.566,0,97.96,0,147.334,0C177.667-31.931,177.666-15.929,173.667-15.929z
                            ;
                            M173.434,445.393c-47.269,8.001-105.245,8.001-147.334,0c-3.929-0.747-0.692-16.543,3.243-15.824
      c43.828,8.001,92.165,8.001,140.739,0C174.029,428.918,177.377,444.726,173.434,445.393z
                            ;
                            M173.667,449.514c-47.576-5.454-102.799-5.744-147.333,0c-3.966,0.512-3.938-15.297,0-16.002
      c43.683-7.823,97.646-8.026,147.333,0C177.616,434.15,177.642,449.969,173.667,449.514z
                            ;
                            M173.667,451.394c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002
      c44.697,0,96.586,0,147.334,0C177.667,435.392,177.668,451.394,173.667,451.394z
                            " data-v-bc9a355a></animate></path><path fill="#8b6a60" d="M101.368-73.685c0,12.164,0,15.18,0,28.519c0,22.702,0-13.661,0,8.304c0,14.48,0,18.233,0,30.512
      c0,1.753-2.958,1.847-2.958,0c0-12.68,0-16.277,0-30.401c0-21.983,0,11.66,0-8.305c0-13.027,0-15.992,0-28.628
      C98.411-75.883,101.368-75.592,101.368-73.685z" data-v-bc9a355a><animate id="relleno_1" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 0.6 1" begin="bizcocho_1.end" dur="0.5s" fill="freeze" values="
                            M101.368-73.685c0,12.164,0,15.18,0,28.519c0,22.702,0-13.661,0,8.304c0,14.48,0,18.233,0,30.512
      c0,1.753-2.958,1.847-2.958,0c0-12.68,0-16.277,0-30.401c0-21.983,0,11.66,0-8.305c0-13.027,0-15.992,0-28.628
      C98.411-75.883,101.368-75.592,101.368-73.685z
                            ;
                            M101.368,350.885c0,12.164,0,65.18,0,78.518c0,22.703,0-33.66,0-11.695c0,14.48,0,28.232,0,40.512
      c0,1.753-2.958,1.847-2.958,0c0-12.68,0-26.277,0-40.402c0-21.982,0,31.66,0,11.695c0-13.027,0-65.992,0-78.627
      C98.411,348.686,101.368,348.977,101.368,350.885z
                            ;
                            M128.38,447.567c37.626,6.312,39.303,13.658,26.833,12.833c-22.653-1.499-13.636-0.831-23.302-0.831
      c-14.48,0-17.884,0-30.163,0c-2.087,0-2.068,0-3.915,0c-13.333,0-8.963,0-23.088,0c-11.668,0-14.062,5.995-27.532,1.164
      c-12.629-4.529,38.667-3.167,46.833-17.333C100.077,432.94,105.546,443.736,128.38,447.567z
                            ;
                            M173.667,451.394c2.875,0,2.997,9.257,0,9.131c-22.662-0.956-32.09-0.956-41.756-0.956
      c-14.48,0-17.884,0-30.163,0c-2.087,0-2.068,0-3.915,0c-13.333,0-8.963,0-23.088,0c-11.668,0-34.99-0.294-48.412,1.831
      c-4.109,0.65-3.01-10.006,0-10.006C37.129,451.394,149.379,451.394,173.667,451.394z
                            " data-v-bc9a355a></animate></path><path fill="#a88679" d="M173.667,21.571c-33.174,0-111.467,0-147.334,0c-4,0-4-16.002,0-16.002c39.836,0,105.982,0,147.334,0
      C177.668,5.569,177.667,21.571,173.667,21.571z" data-v-bc9a355a><animate id="bizcocho_1" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0.25 0 0.6 1" begin="2s" dur="0.8s" fill="freeze" values="
                            M173.667,21.571c-33.174,0-111.467,0-147.334,0c-4,0-4-16.002,0-16.002c39.836,0,105.982,0,147.334,0
      C177.668,5.569,177.667,21.571,173.667,21.571z
                            ;
                            M173.667,459.569c-33.197,16.002-110.782,16.002-147.334,0c-3.664-1.604,1.614-15.617,5.337-14.153
      c40.702,16.002,94.289,16.104,136.505,0.103C171.917,444.1,177.271,457.832,173.667,459.569z
                            ;
                            M171.817,475.571c-39.361-3.001-105.438-2.571-143.556,0c-3.991,0.27-7.377-14.736-3.387-15.014
      c41.553-2.888,104.421-3.121,150.51-0.233C179.378,460.574,175.806,475.875,171.817,475.571z
                            ;
                            M171.817,459.564c-38.8-12.188-104.504-13.762-143.556,0c-3.772,1.329-7.961-12.604-4.178-13.905
      c40.864-14.064,105.114-15.52,151.918-0.973C179.822,445.874,175.634,460.762,171.817,459.564z
                            ;
                            M173.667,475.571c-46.376-5.005-105.924-4.003-147.334,0c-3.981,0.385-3.479-15.421,0.479-16.002
      c43.087-6.327,97.705-7.083,146.855,0.438C177.621,460.613,177.644,476,173.667,475.571z
                            ;
                            M173.667,474.117c-46.376,1.866-105.638,2.01-147.334,0c-3.995-0.192-3.52-16.144,0.479-16.002
      c43.794,1.55,96.341,1.541,145.723,0C176.532,457.99,177.663,473.956,173.667,474.117z
                            ;
                            M173.667,475.571c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002c43.566,0,97.96,0,147.334,0
      C177.667,459.569,177.666,475.571,173.667,475.571z
                            " data-v-bc9a355a></animate></path><path fill="#fefae9" d="M104.812,113.216c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.375
    c0-5.143,0-15.427,0-20.568c0-7.333,0-21.998,0-29.33c0-5.523,0-16.569,0-22.092c0-3.295,0-9.885,0-13.181
    C95.188,2.551,97.353,0,100,0c2.648,0,4.812,2.551,4.812,5.669c0,3.248,0,9.743,0,12.991c0,5.428,0,16.284,0,21.711
    c0,7.618,0,22.854,0,30.472c0,4.952,0,14.854,0,19.807C104.812,96.292,104.812,107.576,104.812,113.216z" data-v-bc9a355a><animate id="crema" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0 0 0.58 1" begin="bizcocho_3.end" dur="2s" fill="freeze" values="
                            M104.812,113.216c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.375
    c0-5.143,0-15.427,0-20.568c0-7.333,0-21.998,0-29.33c0-5.523,0-16.569,0-22.092c0-3.295,0-9.885,0-13.181
    C95.188,2.551,97.353,0,100,0c2.648,0,4.812,2.551,4.812,5.669c0,3.248,0,9.743,0,12.991c0,5.428,0,16.284,0,21.711
    c0,7.618,0,22.854,0,30.472c0,4.952,0,14.854,0,19.807C104.812,96.292,104.812,107.576,104.812,113.216z
                            ;
                            M104.812,405.897c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.376
    c0-5.143,0-15.426,0-20.568c0-7.332,0-21.997,0-29.33c0-5.522,0-16.568,0-22.092c0-3.295,0-9.885,0-13.181
    c0-3.118,2.165-5.669,4.812-5.669c2.648,0,4.812,2.551,4.812,5.669c0,3.247,0,9.743,0,12.991c0,5.428,0,16.283,0,21.711
    c0,7.618,0,22.854,0,30.473c0,4.951,0,14.854,0,19.807C104.812,388.972,104.812,400.256,104.812,405.897z
                            ;
                            M111.873,411.567c-3.119,0-9.226,0-11.874,0c-2.646,0-7.748,0-10.867,0c-7.086,0-12.698,0-18.292,0
    c-6.592,0-12.871,7.371-19.166,3.008c-10.043-6.961-7.776-10.169,2.991-17.745c12.61-8.873,27.713,1.994,25.919-7.531
    c-2.589-13.742,11.008-14.513,11.365-17.789c0.441-4.051,4.235-11.107,8.051-8.175c3.113,2.393,1.007,8.008,0,13.159
    c-1.871,9.569,8.058,2.113,9.494,14.155c2.592,21.732,21.184-0.675,29.309,7.976c5.216,5.553,18.413,5.552,15.426,12.942
    c-3.131,7.745-15.825-4.369-23.8,2.903C126.261,418.271,118.301,411.567,111.873,411.567z
                            ;
                            M111.873,411.567c-3.119,0-9.226,0-11.874,0c-2.646,0-9.734,4.069-12.853,4.069
    c-7.086,0-10.712-4.069-16.306-4.069c-6.592,0-12.12,6.013-19.166,3.008c-7.053-3.008-7.458,2.026-18.659,1.165
    c-6.832-0.525-7.522-3.034-7.533-6.265c-0.037-10.336,22.073-2.452,36.613-2.628c10.234-0.124,19.856-1.439,37.905-2.102
    c16.642-0.61,32.699,1.552,46.009,1.927c12.438,0.351,29.663-8.99,31.532,3.315c0.773,5.093-5.605,3.342-11.211,9.579
    c-5.093,5.667-7.59-4.605-12.965-3.832c-8.269,1.189-14.962-8.537-22.937-1.265C126.261,418.271,118.301,411.567,111.873,411.567z
                            ;
                            M110.946,413.652c-2.904-1.137-8.405-2.748-12.446-0.97c-6.099,2.685-7.273,10.358-13.253,8.242
    c-7.843-2.775-8.953-5.008-14.546-5.01c-24.653-0.011-4.849,26.507-18.264,26.507c-12.377,0,5.791-33.537-19.422-26.682
    c-7.703,2.095-9.806-0.942-9.817-4.173c-0.037-10.336,24.357-4.544,38.897-4.72c10.234-0.124,19.856-1.439,37.905-2.102
    c16.642-0.61,32.699,1.552,46.009,1.927c12.438,0.351,28.973-8.865,31.532,3.315c1.449,6.896,0.318,15.624-3.874,15.624
    c-7.619,0-1.788-15.192-19.243-7.111c-7.581,3.51-15.963-9.738-26.669,1.066C120.644,426.744,118.381,416.561,110.946,413.652z
                            ;
                            M111.547,413.9c-2.969-0.956-8.775-0.949-13.167-0.5c-14.667,1.5-8.325,16.508-14.667,16.666
    c-6.667,0.166-0.167-13.5-13.013-14.151c-30.471-1.545-5.572,46.651-18.987,46.651c-12.377,0,10.333-50.166-18.667-44.5
    c-7.835,1.531-9.537-1.417-9.548-4.647c-0.037-10.336,23.675-5.177,38.215-5.353c10.234-0.124,20.618-1.671,38.667-2.333
    c16.642-0.61,32.023,1.458,45.333,1.833c12.438,0.351,33.819-8.431,33.199,4.001c-0.532,10.666,0.414,26.166-5.245,25.833
    c-7.606-0.447-2.954-31.5-19.243-18.899c-7.985,6.177-17.658-5.969-27.377,5.732C118.88,434.066,121.38,417.067,111.547,413.9z
                            ;
                            M111.547,415.233c-6.667-0.834-9.667,4.667-13.833,3.333c-19.649-6.291-8.158,22.176-14.5,22.334
    c-6.667,0.166,2.833-18-13.333-22.167c-29.544-7.615-9.667,43.833-20.167,43.833c-10.333,0,8.004-55.006-16.833-39
    c-7.5,4.833-9.508-3.78-9.299-7.004c0.799-12.329,23.592-7.153,38.132-7.329c10.234-0.124,20.238-1.505,38.287-2.167
    c16.642-0.61,32.903,1.125,46.213,1.5c12.438,0.351,35.058-5.579,31.863,6.451c-5.532,20.833,1.25,28.216-4.409,27.883
    c-7.606-0.447-6.058-37.895-20.62-23.333c-10.167,10.166-15.972-0.747-25,12C119.547,443.568,121.798,416.515,111.547,415.233z
                            " data-v-bc9a355a></animate></path><rect x="10" y="475.571" fill="#fefae9" width="180" height="4" data-v-bc9a355a></rect></svg>`,2),$1=[S1];function k1(n,e){return y(),M("div",w1,$1)}var B1=E(x1,[["render",k1],["__scopeId","data-v-bc9a355a"]]);function P1(){const n=document.querySelectorAll("#bg"),e=n[0],c=n[1],s=n[2],t={circle:{amount:15,layer:3,color:[255,255,255],alpha:.3},line:{amount:12,layer:3,color:[255,255,255],alpha:.3},speed:.5,angle:20};if(e.getContext){const a=e.getContext("2d"),l=c.getContext("2d"),g=s.getContext("2d"),m=window.Math,C=t.angle/360*m.PI*2;let z=[],w=[],r,p,S;if(!a||!l||!g)return;const F=function(){r=window.innerWidth,p=window.innerHeight,n.forEach(o=>{o.width=r,o.height=p})},V=function(o,i,v,h,d){const _=l.createRadialGradient(o,i,v,o,i,0);_.addColorStop(0,`rgba(${h[0]},${h[1]},${h[2]},${d})`),_.addColorStop(1,`rgba(${h[0]},${h[1]},${h[2]},${d-.1})`),l.beginPath(),l.arc(o,i,v,0,m.PI*2,!0),l.fillStyle=_,l.fill()},W=function(o,i,v,h,d){const _=o+m.sin(C)*v,f=i-m.cos(C)*v,u=g.createLinearGradient(o,i,_,f);u.addColorStop(0,`rgba(${h[0]},${h[1]},${h[2]},${d})`),u.addColorStop(1,`rgba(${h[0]},${h[1]},${h[2]},${d-.1})`),g.beginPath(),g.moveTo(o,i),g.lineTo(_,f),g.lineWidth=3,g.lineCap="round",g.strokeStyle=u,g.stroke()},q=function(){a.clearRect(0,0,r,p);const o=[];o[0]=a.createRadialGradient(r*.3,p*.1,0,r*.3,p*.1,r*.9),o[0].addColorStop(1,"transparent"),a.translate(r,0),a.scale(-1,1),a.beginPath(),a.fillStyle=o[0],a.fillRect(0,0,r,p),o[1]=a.createRadialGradient(r*.1,p*.1,0,r*.3,p*.1,r),o[1].addColorStop(.8,"transparent"),a.translate(r,0),a.scale(-1,1),a.beginPath(),a.fillStyle=o[1],a.fillRect(0,0,r,p),o[2]=a.createRadialGradient(r*.1,p*.5,0,r*.1,p*.5,r*.5),o[2].addColorStop(1,"transparent"),a.beginPath(),a.fillStyle=o[2],a.fillRect(0,0,r,p)},O=function(){const o=m.sin(C),i=m.cos(C);{if(!l)return;l.clearRect(0,0,r,p);for(let v=0,h=z.length;v<h;v++){const d=z[v];let _=d.x,f=d.y;const u=d.radius,x=d.speed;_>r+u?_=-u:_<-u?_=r+u:_+=o*x,f>p+u?f=-u:f<-u?f=p+u:f-=i*x,d.x=_,d.y=f,V(_,f,u,d.color,d.alpha)}}{if(!g)return;g.clearRect(0,0,r,p);for(let v=0,h=w.length;v<h;v++){const d=w[v];let _=d.x,f=d.y;const u=d.width,x=d.speed;_>r+u*o?_=-u*o:_<-u*o?_=r+u*o:_+=o*x,f>p+u*i?f=-u*i:f<-u*i?f=p+u*i:f-=i*x,d.x=_,d.y=f,W(_,f,u,d.color,d.alpha)}}S=requestAnimationFrame(O)},L=function(){z=[],w=[];for(let o=0;o<t.circle.amount/t.circle.layer;o++)for(let i=0;i<t.circle.layer;i++)z.push({x:m.random()*r,y:m.random()*p,radius:m.random()*(20+i*5)+(20+i*5),color:t.circle.color,alpha:m.random()*.2+(t.circle.alpha-i*.1),speed:t.speed*(1+i*.5)});for(let o=0;o<t.line.amount/t.line.layer;o++)for(let i=0;i<t.line.layer;i++)w.push({x:m.random()*r,y:m.random()*p,width:m.random()*(20+i*5)+(20+i*5),color:t.line.color,alpha:m.random()*.2+(t.line.alpha-i*.1),speed:t.speed*(1+i*.5)});cancelAnimationFrame(S),S=requestAnimationFrame(O),q()};window.onload=function(){F(),L()},window.onresize=function(){F(),L()}}}const E1={key:0,"i-mdi-music-note-outline":"",class:"animate-spin animate-slow"},F1={key:1,"i-mdi-music-note-off-outline":""},O1={id:"bg"},L1={ref:"bg"},R1={ref:"fg1"},j1={ref:"fg2"},N1=["src"],A1=B({setup(n){const e=e1("/audio/happy-birthday.mp3"),c=n1("/audio/happy-birthday.mp3"),s=c1(),t=s.query.name,a=s.query.msg,l=()=>{e.isPlaying.value?e.pause():e.play()};return t1(()=>{P1()}),(g,m)=>{const C=B1,z=M1;return y(),M(a1,null,[b("button",{class:"music-btn absolute right-6 top-6 rounded-full",bg:"transparent",p:"1",text:"lg",onClick:l},[$(e).isPlaying.value?(y(),M("div",E1)):(y(),M("div",F1))]),b("div",{class:"card",h:"screen",onClick:l},[b("div",O1,[b("canvas",L1,null,512),b("canvas",R1,null,512),b("canvas",j1,null,512)]),k(C),k(z,{name:$(t),msg:$(a)},null,8,["name","msg"]),b("audio",{ref:"music",src:c.value,autoplay:"",loop:""}," \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 audio \u6807\u7B7E\u3002 ",8,N1)])],64)}}});var I1=E(A1,[["__scopeId","data-v-57f2427c"]]);const D1=[{name:"about",path:"/about",component:()=>P(()=>import("./about.805bc27d.js"),["assets/about.805bc27d.js","assets/about.87b82160.css","assets/vendor.7b585607.js"]),props:!0},{name:"index",path:"/",component:I1,props:!0}],T1={},H1={class:"text-center text-gray-700 dark:text-gray-200"};function V1(n,e){const c=H("router-view");return y(),M("main",H1,[k(c)])}var W1=E(T1,[["render",V1]]);const q1={"404":()=>P(()=>import("./404.620b2ca8.js"),["assets/404.620b2ca8.js","assets/404.d5b89c50.css","assets/vendor.7b585607.js"]),default:W1};function G1(n){return n.map(e=>{var c;return{path:e.path,component:q1[((c=e.meta)==null?void 0:c.layout)||"default"],children:[A(N({},e),{path:""})]}})}const Y1=B({setup(n){return o1({title:"Birthday",meta:[{name:"description",content:"Happy Birthday!"}]}),(e,c)=>{const s=H("router-view");return y(),i1(s)}}});console.log("%c Happy Birthday! ","background-color:#93B7F3;color:white;padding:2px;");console.log("%c \u867D\u7136\u79BB\u6B7B\u4EA1\u66F4\u8FDB\u4E00\u6B65\uFF0C\u4F46\u795D\u4F60\u65B0\u7684\u4E00\u5C81\u66F4\u52A0\u5F00\u5FC3\uFF01","background-color:dodgerblue;color:white;padding:2px;");console.log("%c From your friend. @YunYouJun %c https://github.com/YunYouJun/birthday ","background-color:#000000;color:white;padding:3px;","border: 1px solid black;padding:2px;");const J1=G1(D1);r1(Y1,{routes:J1},n=>{Object.values({"./modules/i18n.ts":u1,"./modules/nprogress.ts":p1,"./modules/pinia.ts":m1,"./modules/pwa.ts":b1}).map(e=>{var c;return(c=e.install)==null?void 0:c.call(e,n)})});
