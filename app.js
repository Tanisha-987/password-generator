let r
let no="0123456789"
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower="abcdefghijklmnopqrstuvwxyz"
let special="!@#$%^&*(){}[];:|?/<>,.~`_-+=''"
let pass=""


let p=document.getElementById("password1")
let g=document.getElementById("generate1")


let a=document.getElementById("o1")
let b=document.getElementById("o2")
let c=document.getElementById("o3")
let d=document.getElementById("o4")

let password
g.addEventListener('click',function()
{
    if(a.checked)
    {
        pass+=no
    }
    if(b.checked)
    {
        pass+=upper
    }
    if(c.checked)
    {
        pass+=lower
    }
    if(d.checked)
    {
        pass+=special
    }

        password=""
        for(let i=0;i<8;i++)
        {
            r=Math.floor(Math.random()*pass.length)
            
            password+=pass.charAt(r)
        }

        p.innerHTML=password
    
})





