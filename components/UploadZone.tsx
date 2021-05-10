import React from 'react'
import styles from '../styles/UploadZone.module.css'

export default function UploadZone(props) {
    return (
        <div>
            <input type="file"
                onChange={props.handleFile}
                onDrop={props.handleFile}
            />
        </div>
    )
}
