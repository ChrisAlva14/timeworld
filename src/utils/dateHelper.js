function getDate() {
    const ahora = new Date()
    const anio = ahora.getFullYear()
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0')
    const dia = ahora.getDate().toString().padStart(2, '0')
    return `${anio}-${mes}-${dia}`
}

function getHour() {
    const ahora = new Date()
    const horas = ahora.getHours().toString().padStart(2, '0')
    const minutos = ahora.getMinutes().toString().padStart(2, '0')
    return `${horas}:${minutos}`
}


export {
    getDate,
    getHour,
}