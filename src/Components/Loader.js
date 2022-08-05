import React from 'react'
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Stack direction="row" alignItem="center" justifyContent="center" width="100%">
            <InfinitySpin color="#ff2625" />
        </Stack>
    )
}

export default Loader
