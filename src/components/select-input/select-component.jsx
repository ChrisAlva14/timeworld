import React from 'react'

import Select from './select'

const SelectComponent = ({ contentList, itemsCollected, emptyMessage, placeHolder, selectItem }) => {

    return (
        <Select
            contentList={contentList}
            itemsCollected={itemsCollected}
            emptyMessage={emptyMessage}
            placeHolder={placeHolder}
            selectItem={selectItem}
        />
    )
}

export default SelectComponent