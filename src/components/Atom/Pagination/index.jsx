import { Box, Pagination } from '@mui/material'
import React from 'react'

export default function PaginationCard({ total, page, handleChange }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ backgroundColor: 'white', padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%', borderRadius: '24px' }}>
                <Pagination count={total} page={page} onChange={handleChange} variant="outlined" color="primary" sx={{ margin: 'auto' }} />
            </Box>
        </Box>
    )
}
