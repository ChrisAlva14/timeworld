
const setReactiveBg = (value)=>{
    localStorage.setItem("ReactiveBg", value);
}

const getReactiveBg = ()=>{
    const value = localStorage.getItem("ReactiveBg");
    if(value=="true"){
        return true
    }
    return false
}


export {
    setReactiveBg,
    getReactiveBg
}