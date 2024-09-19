import Swal from "sweetalert2";


const copyText = () => {
    let data = ""

    const contentElement = document.querySelector('.modal-container');

    if (contentElement) {
        const contentTitle = document.querySelector('.invitationCardTitle').textContent.trim();
        if (contentTitle) {
            data = data + contentTitle
        }

        const contentDescription = document.querySelector('.invitationCardDescription').textContent.trim();
        if (contentDescription) {
            data = data + "\n" + contentDescription
        }

        const contentLink = document.querySelector('.invitationCardLink').textContent.trim();
        if (contentLink) {
            data = data + "\n" + contentLink + "\n"
        }

        const contentCities = document.querySelectorAll('.invitationCardCityCopy')
        contentCities.forEach(el => {
            data = data + "\n" + el.textContent.trim()
        })
        

        navigator.clipboard.writeText(data)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "¡Datos copiados!",
                    text: "Los datos han sido copiados al portapapeles exitosamente.",
                    confirmButton: false,
                    timer: 2000,
                })
            })
            .catch((err) => {
                console.error('Error al copiar el texto: ', err);
                Swal.fire({
                    icon: "error",
                    title: "¡Datos NO copiados!",
                    text: "Los datos no se pudieron copiar correctamente.",
                    confirmButton: false,
                    timer: 2000,
                })
            });
    }
};

export {
    copyText
}