import React from 'react'

import iconUp from '../../assets/up.svg'
import iconDown from '../../assets/down.svg'
import iconGroup from '../../assets/group.svg'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
//const noneIcon = '[--]'

const downIcon = iconDown
const upIcon = iconUp
const noneIcon = iconGroup

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') {
        return down
    } else if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    } else {
        return down
    }
    // //return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{display: 'inline-flex'}}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />

            {/*{icon} */}{/*а это убрать*/}
        </span>
    )
}

export default SuperSort

