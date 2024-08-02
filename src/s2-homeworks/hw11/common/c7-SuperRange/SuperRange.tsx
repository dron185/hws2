import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px', height: '4px', color: 'rgb(0, 204, 34)',
                '& .MuiSlider-rail': {
                    color: 'rgb(139, 139, 139)',
                },
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid rgb(0, 204, 34)',
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },
                    '&::after': {
                        height: 6,
                        width: 6,
                        backgroundColor: 'rgb(1, 203, 34)',
                    }
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange


