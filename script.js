const plus = (a, b) => a+b
const minus = (a, b) => a-b
const umn = (a, b) => a*b
const del = (a, b) => a/b

let oper=''
let s = ''
document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', () => {
        s = s + el.innerHTML
        document.getElementById('ekran').innerHTML=s
        if(el.innerHTML=='+'||el.innerHTML=='-'||el.innerHTML=='*'||el.innerHTML=='/'){oper=el.innerHTML}
    })
})
document.getElementById('equal').addEventListener('click', () => {
    numbers=s.replace("=",'').split(oper)
    if(oper=='+'){
        document.getElementById('ekran').innerHTML=plus(+numbers[0],+numbers[1])
    }else if(oper=='-'){
        document.getElementById('ekran').innerHTML=minus(+numbers[0],+numbers[1])
    }else if(oper=='*'){
        document.getElementById('ekran').innerHTML=umn(+numbers[0],+numbers[1])
    }else if(oper=='/'){
        document.getElementById('ekran').innerHTML=del(+numbers[0],+numbers[1])
    }else{
        document.getElementById('ekran').innerHTML="Правильно пишите задачу!"
    }
    s=''
 })

 document.getElementById('delete').addEventListener('click', () => {
    s=''
    document.getElementById('ekran').innerHTML=''})


