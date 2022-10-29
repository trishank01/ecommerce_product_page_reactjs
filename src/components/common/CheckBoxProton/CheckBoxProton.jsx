import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        '&$checked': {
          color: '#000',
        },
      },
      checked: {},
      wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 0,
      },
      label: {
        fontSize: '.8rem',
        fontFamily: `'Raleway', sans-serif`,
      },
})

const CheckBoxProton = ({changeChecked , cusine }) => {
    const classes = useStyles()
    const {checked , label , id} = cusine
  return (
    <div>
        <FormControlLabel 
        classes={{
            label : classes.label ,
            root: classes.wrap
        }}
        control={
            <Checkbox classes={{
                checked:classes.checked,
                root:classes.root
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
            
            />
        }
        label={label}
        />
    </div>
  )
}

export default CheckBoxProton