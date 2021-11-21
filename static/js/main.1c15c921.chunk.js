(this["webpackJsonpmy-app-frontend"]=this["webpackJsonpmy-app-frontend"]||[]).push([[0],{43:function(e,n,t){"use strict";t.r(n);var r,i,a,o=t(1),c=t(22),s=t.n(c),l=t(20),d=t(7),u=t(2),b=t(3),h=t(8),j=(t(31),t(0));var m,p,x,g=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(O,{children:[Object(j.jsx)(h.b,{to:"/mainpage",children:Object(j.jsx)(f,{children:" My Routines"})}),Object(j.jsx)(v,{children:"Simplified Fitness"})]})})},O=b.a.div(r||(r=Object(u.a)(['\n\n    background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");\n    position: fixed;\n    min-width: 100%;\n    min-height: 100%;\n    background-size: cover;\n    background-position: cover;\n    h1{\n        justify-content: center;\n    }\n']))),f=b.a.button(i||(i=Object(u.a)(["\n    background: ",";\n    color: ",";\n    font-family: 'Lobster', cursive;\n    font-size: 1.25em;\n    margin: 2em;\n    padding: 0.25em 1em;\n    border: 2px solid white;\n    border-radius: 3px;\n    cursor: pointer;\n    box-shadow: 0 0 3px gray;\n    &:hover {\n        outline: none;\n        transform: scale(1.05);\n    }\n    margin-left: 1300px;\n"])),(function(e){return e.primary?"palevioletred":"white"}),(function(e){return e.primary?"white":"palevioletred"})),v=b.a.div(a||(a=Object(u.a)(["\n    display:flex;\n    justify-content:space-around;\n    font-family: 'Lobster', cursive;\n    color: white;\n    font-size: 10em;\n    margin: .9em;\n"])));var y,w,k=function(e){var n=e.routine,t=e.handleDelete,r=e.displayDetails,i=e.displayRoutineImage,a=e.isTrue;return Object(j.jsxs)(_,{children:[Object(j.jsx)("h3",{style:{fontSize:"1.30em"},children:n.routine_name}),Object(j.jsxs)(D,{children:[Object(j.jsxs)("li",{children:["Routine ID: ",n.id]}),"Focus: ",n.muscle_group]}),Object(j.jsx)(I,{onClick:function(){a(),i(n.routine_image),r(n.exercises)},children:"Details"}),Object(j.jsx)(I,{onClick:function(){return t(n.id)},children:"Delete"})]})},_=b.a.div(m||(m=Object(u.a)(["\n    margin: 48px auto 0;\n    width: 350px;\n    height: 200px;\n    font-family: Quicksand, arial, sans-serif; \n    font-size: 1em;\n    padding: 0.25em 1em;\n    border: 2px solid palevioletred;\n    border-radius: 3px;\n    border: 2px solid WHITE;\n    cursor: pointer;\n    box-shadow: 0 0 3px gray;\n    &:hover {\n        outline: none;\n        transform: scale(1.05);\n        }\n\n"]))),I=b.a.button(p||(p=Object(u.a)(["\n    background: ",";\n    color: ",";\n    font-family: 'Lobster', cursive;\n    font-size: 1.25em;\n    margin: 0.5em;\n    padding: 0.01em 0.5em;\n    border: 2px solid WHITE;\n    border-radius: 3px;\n    cursor: pointer;\n    box-shadow: 0 0 3px gray;\n    &:hover {\n        outline: none;\n        transform: scale(1.05);\n    }\n"])),(function(e){return e.primary?"black":"white"}),(function(e){return e.primary?"white":"black"})),D=b.a.h5(x||(x=Object(u.a)(["\n    color: ",";\n    font-family: 'Montagu Slab', serif;\n    font-size: 1em;\n    margin: 2em;\n    padding: 0.25em 1em;\n    overflow-y: auto;\n    border: 2px solid WHITE;\n    border-radius: 3px;\n    cursor: pointer;\n    width: 20em;\n    height:6em;\n    margin: auto;\n    box-shadow: 0 0 3px gray;\n    &:hover {\n        outline: none;\n        transform: scale(1.05);\n    }\n"])),(function(e){return e.primary?"white":"black"}));var E,T,z,F=function(e){var n=e.routineExercises,t=e.routineImage;return Object(j.jsxs)(R,{children:[Object(j.jsx)("div",{children:t?Object(j.jsx)("img",{style:{margin:"2rem"},alt:"routineImage",src:t}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{style:{color:"gray",marginTop:"20rem"},children:"Click on a routine for more details"}),Object(j.jsx)("p",{children:"| \ud83d\udcaa | \ud83c\udfcb\ufe0f | \ud83c\udfc3\u200d\u2640\ufe0f |"})]})}),Object(j.jsx)("div",{children:n.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(S,{children:[Object(j.jsxs)("p",{children:["Exercise Name: ",e.name]}),Object(j.jsxs)("p",{children:["Instructions: ",e.instructions]})]})})}))})]})},R=b.a.div(y||(y=Object(u.a)(["\n    height: 80vh;\n    width: 95%;\n    border: 2px solid white;\n    border-radius: 3px;\n    box-shadow: 0 0 3px gray;\n    float:right;\n    text-align: center;\n    margin: 1rem 1rem 1rem 1rem;\n    background: rgba(255, 255, 255, 0.8);\n    overflow: scroll;\n"]))),S=b.a.div(w||(w=Object(u.a)(["\n    margin: 48px auto 0;\n    width: 650px;\n    height: 100px;\n    font-family: Quicksand, arial, sans-serif; \n    font-size: 1.25em;\n    padding: 0.25em 1em;\n    border: 2px solid palevioletred;\n    border-radius: 3px;\n    border: 2px solid WHITE;\n    cursor: pointer;\n    box-shadow: 0 0 3px gray;\n    &:hover {\n        outline: none;\n        transform: scale(1.05);\n        }\n"])));var C,L,N=function(e){var n=e.routines,t=e.handleDelete,r=Object(o.useState)([]),i=Object(d.a)(r,2),a=i[0],c=i[1],s=Object(o.useState)([]),l=Object(d.a)(s,2),u=l[0],b=l[1],h=Object(o.useState)(!1),m=Object(d.a)(h,2),p=(m[0],m[1]),x=function(e){c(e)},g=function(e){b(e)},O=function(e){p((function(e){return!e}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(H,{children:"Routine List:"}),Object(j.jsxs)(A,{children:[Object(j.jsx)(P,{children:n.map((function(e){return Object(j.jsx)(k,{routine:e,handleDelete:t,displayDetails:x,displayRoutineImage:g,isTrue:O},e.id)}))}),Object(j.jsx)(F,{routineImage:u,routineExercises:a})]})]})},P=b.a.div(E||(E=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    text-align: center;\n    justify-content: left;\n    overflow-y: auto;\n    height: 80vh;\n    width: 80%;\n    background: rgba(255, 255, 255, 0.8);\n    border: 2px solid white;\n    border-radius: 3px;\n    box-shadow: 0 0 3px gray;\n    margin-left: 3rem;\n    margin-top: 1rem;\n"]))),H=b.a.h1(T||(T=Object(u.a)(["\n    font-family: 'Lobster', cursive;\n    color: black;\n    text-align: left;\n    font-size: 1.8em;\n    margin-left: 2rem;\n"]))),A=b.a.div(z||(z=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n"])));var W,M=function(){return Object(j.jsxs)(G,{children:[Object(j.jsx)(h.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"Simplified Fitness"}),Object(j.jsx)(h.b,{to:"/mainpage",children:Object(j.jsx)(J,{children:"Home"})}),Object(j.jsx)(h.b,{to:"/newroutine",children:Object(j.jsx)(J,{children:"Design New Routine"})}),Object(j.jsx)(h.b,{to:"/newexercise",children:Object(j.jsx)(J,{children:"Add New Exercises"})})]})},G=b.a.div(C||(C=Object(u.a)(["\n    justify-content:space-around;\n    font-family: 'Lobster', cursive;\n    color: black;\n    text-align: center;\n    font-size: 3.5em;\n    margin: 0.1em;\n"]))),J=b.a.button(L||(L=Object(u.a)(["\n    background: ",";\n    color: ",";\n    font-family: 'Lobster', cursive;\n    font-size: 0.4em;\n    padding: 0.2em 1em;\n    border: 2px solid WHITE;\n    border-radius: 3px;\n    cursor: pointer;\n    box-shadow: 0 0 3px gray;\n    &:hover {\n        outline: none;\n        transform: scale(1.05);\n    } \n    margin-left: 5em;\n"])),(function(e){return e.primary?"black":"white"}),(function(e){return e.primary?"white":"black"}));var Q,B,U,q,K=function(e){var n=e.routines,t=e.handleDelete;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(V,{children:[Object(j.jsx)(M,{}),Object(j.jsx)(N,{routines:n,handleDelete:t})]})})},V=b.a.div(W||(W=Object(u.a)(['\n    \n    background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");\n    position: fixed;\n    min-width: 100%;\n    min-height: 100%;\n    background-size: cover;\n    background-position: cover;\n    background-repeat: no-repeat;\n']))),X=t(10),Y=t(9);var Z,$,ee,ne,te=function(e){var n=e.handleAddRoutine,t=Object(o.useState)({routine_name:"",muscle_group:"",personal_trainer_id:"",routine_image:""}),r=Object(d.a)(t,2),i=r[0],a=r[1],c=function(e){a(Object(Y.a)(Object(Y.a)({},i),{},Object(X.a)({},e.target.name,e.target.value)))},s=function(e){var t=Object(Y.a)({},i);e.preventDefault(),n(t),l()},l=function(){a({routine_name:"",muscle_group:"",personal_trainer_id:"",routine_image:""})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(re,{children:[Object(j.jsx)(M,{}),Object(j.jsx)(ae,{children:Object(j.jsxs)("form",{onSubmit:s,children:[Object(j.jsxs)(ie,{children:[Object(j.jsx)("label",{htmlFor:"RoutineName",children:" Routine Name: "}),Object(j.jsx)("input",{id:"RoutineName",type:"text",name:"routine_name",placeholder:"Routine name here...",value:i.routine_name,onChange:c})]}),Object(j.jsxs)(ie,{children:[Object(j.jsx)("label",{htmlFor:"MuscleGroup",children:" Muscle Group: "}),Object(j.jsx)("input",{type:"text",id:"MuscleGroup",name:"muscle_group",placeholder:"Muscle Group here...",value:i.muscle_group,onChange:c})]}),Object(j.jsxs)(ie,{children:[Object(j.jsx)("label",{htmlFor:"PersonalTrainer",children:" Personal Trainer ID: "}),Object(j.jsx)("input",{type:"number",id:"PersonalTrainerID",name:"personal_trainer_id",placeholder:"Personal Trainer ID here...",value:i.personal_trainer_id,onChange:c})]}),Object(j.jsxs)(ie,{children:[Object(j.jsx)("label",{htmlFor:"image",children:" Picture URL: "}),Object(j.jsx)("input",{id:"imageInput",type:"url",name:"routine_image",placeholder:"Image here...",value:i.routine_image,onChange:c})]}),Object(j.jsx)(oe,{type:"reset",onClick:s,children:"Add Routine "})]})})]})})},re=b.a.div(Q||(Q=Object(u.a)(['\n    \n    background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");\n    position: fixed;\n    min-width: 100%;\n    min-height: 100%;\n    background-size: cover;\n    background-position: cover;\n    background-repeat: no-repeat;\n    \n']))),ie=b.a.div(B||(B=Object(u.a)(["\n\n    font-size: 1.5em;\n    text-align: center;\n    margin: 3rem 1rem 1rem 1rem ; \n"]))),ae=b.a.div(U||(U=Object(u.a)(["\n    width: 50em;\n    height: auto;\n    border: 2px solid white;\n    border-radius: 3px;\n    box-shadow: 0 0 3px gray;\n    float:center;\n    vertical-align: center;\n    text-align: center;\n    margin: auto;\n    margin-top: 10rem ;\n    background: rgba(255, 255, 255, 0.8);\n"]))),oe=b.a.button(q||(q=Object(u.a)(["\n    background: ",";\n    color: ",";\n    font-family: 'Lobster', cursive;\n    font-size: 1.25em;\n    margin: 0.5em;\n    padding: 0.01em 0.5em;\n    border: 2px solid WHITE;\n    border-radius: 3px;\n    cursor: pointer;\n    box-shadow: 0 0 3px gray;\n    &:hover {\n        outline: none;\n        transform: scale(1.05);\n    }\n"])),(function(e){return e.primary?"black":"white"}),(function(e){return e.primary?"white":"black"}));var ce=function(e){var n=e.handleAddExercise,t=Object(o.useState)({name:"",instructions:"",personal_trainer_id:"",routine_id:""}),r=Object(d.a)(t,2),i=r[0],a=r[1],c=function(e){a(Object(Y.a)(Object(Y.a)({},i),{},Object(X.a)({},e.target.name,e.target.value)))},s=function(e){var t=Object(Y.a)({},i);e.preventDefault(),n(t),l()},l=function(){a({name:"",instructions:"",personal_trainer_id:"",routine_id:""})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(se,{children:[Object(j.jsx)(M,{}),Object(j.jsx)(de,{children:Object(j.jsxs)("form",{onSubmit:s,children:[Object(j.jsxs)(le,{children:[Object(j.jsx)("label",{htmlFor:"ExerciseName",children:" Exercise Name: "}),Object(j.jsx)("input",{id:"ExerciseName",type:"text",name:"name",placeholder:"Exercise name here...",value:i.name,onChange:c})]}),Object(j.jsxs)(le,{children:[Object(j.jsx)("label",{htmlFor:"Instructions",children:" Instructions: "}),Object(j.jsx)("input",{type:"text",id:"Instructions",name:"instructions",placeholder:"Instructions here...",value:i.instructions,onChange:c})]}),Object(j.jsxs)(le,{children:[Object(j.jsx)("label",{htmlFor:"PersonalTrainerId",children:" Personal Trainer ID: "}),Object(j.jsx)("input",{type:"number",id:"PersonalTrainerId",name:"personal_trainer_id",placeholder:"Personal Trainer ID here...",value:i.personal_trainer_id,onChange:c})]}),Object(j.jsxs)(le,{children:[Object(j.jsx)("label",{htmlFor:"RoutineId",children:" Routine ID: "}),Object(j.jsx)("input",{type:"number",id:"RoutineId",name:"routine_id",placeholder:"Routine ID here...",value:i.routine_id,onChange:c})]}),Object(j.jsx)(ue,{type:"reset",onClick:s,children:"Add Exercise "})]})})]})})},se=b.a.div(Z||(Z=Object(u.a)(['\n    \n    background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");\n    position: fixed;\n    min-width: 100%;\n    min-height: 100%;\n    background-size: cover;\n    background-position: cover;\n    background-repeat: no-repeat;  \n']))),le=b.a.div($||($=Object(u.a)(["\n\n    font-size: 1.5em;\n    text-align: center;\n    margin: 3rem 1rem 1rem 1rem ; \n"]))),de=b.a.div(ee||(ee=Object(u.a)(["\n    width: 50em;\n    height: auto;\n    border: 2px solid white;\n    border-radius: 3px;\n    box-shadow: 0 0 3px gray;\n    float:center;\n    vertical-align: center;\n    text-align: center;\n    margin: auto;\n    margin-top: 10rem ;\n    background: rgba(255, 255, 255, 0.8);\n"]))),ue=b.a.button(ne||(ne=Object(u.a)(["\n    background: ",";\n    color: ",";\n    font-family: 'Lobster', cursive;\n    font-size: 1.25em;\n    margin: 0.5em;\n    padding: 0.01em 0.5em;\n    border: 2px solid WHITE;\n    border-radius: 3px;\n    cursor: pointer;\n    box-shadow: 0 0 3px gray;\n    &:hover {\n        outline: none;\n        transform: scale(1.05);\n    }\n"])),(function(e){return e.primary?"black":"white"}),(function(e){return e.primary?"white":"black"})),be=t(4);var he=function(){var e=function(e){return e.json()},n=Object(o.useState)([]),t=Object(d.a)(n,2),r=t[0],i=t[1],a=Object(o.useState)([]),c=Object(d.a)(a,2),s=c[0],u=c[1];Object(o.useEffect)((function(){fetch("http://localhost:9292/routines").then(e).then(i)}),[]);var b=Object(be.e)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(be.a,{exact:!0,path:"/",children:Object(j.jsx)(g,{})}),Object(j.jsx)(be.a,{exact:!0,path:"/mainpage",children:Object(j.jsx)(K,{routines:r,handleDelete:function(n){fetch("http://localhost:9292/routines/".concat(n),{method:"DELETE",headers:{"Content-type":"application/json"}}).then(e).then(i)}})}),Object(j.jsx)(be.a,{exact:!0,path:"/newexercise",children:Object(j.jsx)(ce,{handleAddExercise:function(n){fetch("http://localhost:9292/exercises",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e).then((function(e){var n=[e].concat(Object(l.a)(s));u(n),b.push("/mainpage")}))}})}),Object(j.jsx)(be.a,{exact:!0,path:"/newroutine",children:Object(j.jsx)(te,{handleAddRoutine:function(n){fetch("http://localhost:9292/routines",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e).then((function(e){var n=[e].concat(Object(l.a)(r));i(n),b.push("/mainpage")}))}})})]})};s.a.render(Object(j.jsx)(h.a,{children:Object(j.jsx)(he,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.1c15c921.chunk.js.map