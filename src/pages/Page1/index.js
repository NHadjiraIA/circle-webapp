import React from 'react'
import { ROOT } from 'navigation/CONSTANTS'
import { Typography } from '@material-ui/core'
import {Link } from 'react-router-dom'
import { Math } from './Math'
import { Dashboard } from '@material-ui/icons'

export const Page1 = () => {
    return (
        <div>
            <Link to={ROOT}>Home</Link>
            <Link to={Dashboard}>   testindexpage1</Link>
            <Typography variant="h2">Page 1</Typography>
            <Math />
        </div>
    )
}
