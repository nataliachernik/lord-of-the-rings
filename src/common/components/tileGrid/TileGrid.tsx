import React from 'react'

import styles from './TileGrid.module.css'

interface TileGridProps {
    children: React.ReactNode
}

const TileGrid: React.FC<TileGridProps> = ({children}) => {
    return (
        <div className={styles.tileGrid}>
            {children}
        </div>
    )
}

export default TileGrid