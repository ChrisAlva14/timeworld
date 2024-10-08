import React, { useEffect, useState } from 'react'

export const SelectList = ({ inputValue, setInputValue, listaDisplay, setListaDisplay, contentList, selectRef, itemsRef, selectItem, itemsCollected, emptyMessage }) => {

    const [itemsList, setItemsList] = useState(contentList)

    function normalizarCadena(cadena) {
        return cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    const filtrarItems = (entrada) => {
        const entradaNormalizada = normalizarCadena(entrada.toLowerCase());
        const arrayFiltrado = contentList.filter((item) =>
            normalizarCadena(item.toLowerCase()).includes(entradaNormalizada)
        );
        setItemsList(arrayFiltrado);
    }

    useEffect(() => {
        filtrarItems(inputValue)
    }, [inputValue])

    const clickItem = (item) => {

        if (itemsCollected === null) {
            selectItem(item)
            setInputValue(item)
            return setListaDisplay('none')
        }

        if (itemsCollected && !Array.isArray(itemsCollected)) {
            if (itemsCollected === item) {
                return alert('El item ya fue seleccionado')
            }
            selectItem(item)
            setInputValue(item)
            return setListaDisplay('none')
        }

        if (itemsCollected?.some((itemCollect) => itemCollect === item)) {
            return alert('El item ya fue seleccionado')
        }

        selectItem(item)
        setInputValue('')
        setListaDisplay('none')
    }

    return (
        <ul style={{ display: `${listaDisplay}` }}
            role="listbox"
            aria-label="Lista de elementos"
            ref={selectRef}
        >
            {
                (inputValue !== '' && itemsList.length === 0) &&
                <li className='emptyMessage' >{emptyMessage}</li>
            }

            {
                itemsList.map((item) => (
                    <li key={item}
                        role="option"
                        tabIndex="0"
                        onClick={() => clickItem(item)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                clickItem(item)
                            }
                        }}
                    >
                        {item}
                    </li>
                ))
            }

        </ul>
    )
}