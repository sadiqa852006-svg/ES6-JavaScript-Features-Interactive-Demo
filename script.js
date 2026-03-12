// Scroll reveal
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("visible")
}
})
})

document.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el))



// Arrow demo
function runArrow(){

const add=(a,b)=>a+b
const square=n=>n*n
const greet=name=>`Hello ${name}`

document.getElementById("arrow-out").textContent=
`add(3,4) = ${add(3,4)}
square(5) = ${square(5)}
greet("Alex") = ${greet("Alex")}`

}



// Promise demo
function simulateAPI(){

return new Promise((resolve,reject)=>{

setTimeout(()=>{

if(Math.random()>0.3)
resolve("Data Loaded")

else
reject("Error loading")

},1000)

})

}

async function runPromise(){

const out=document.getElementById("promise-out")

out.textContent="Loading..."

try{

const data=await simulateAPI()
out.textContent=data

}
catch(err){

out.textContent=err

}

}



// Async demo
function delay(ms){
return new Promise(r=>setTimeout(r,ms))
}

async function runAsync(){

const steps=["step1","step2","step3","step4"]

for(let i=0;i<steps.length;i++){

const el=document.getElementById(steps[i])

el.style.color="#00f5c4"

await delay(700)

}

}



// Destructuring demo
function runDestruct(){

const user={
name:"Alex",
skills:["JavaScript","React"]
}

const {name}=user
const [first,second]=user.skills

document.getElementById("destruct-out").textContent=
`Name: ${name}
Primary Skill: ${first}
Second Skill: ${second}`

}



// Template literal demo
function updateTemplate(){

const name=document.getElementById("tl-name").value
const role=document.getElementById("tl-role").value
const lang=document.getElementById("tl-lang").value
const year=document.getElementById("tl-year").value

document.getElementById("tl-result").textContent=
`Hi I'm ${name}, a ${role} who loves ${lang}.
Started coding in ${year}.`

}

updateTemplate()