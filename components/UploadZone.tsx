import React from 'react'
import styles from '../styles/UploadZone.module.css'

export default function UploadZone({ handleFile }) {
    return (
        <div>
            <input type="file"
                onChange={handleFile}
                onDrop={handleFile}
            />
        </div>
    )
}
