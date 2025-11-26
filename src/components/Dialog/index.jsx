import { useRef } from 'react';
import './dialog.style.css';
export function Dialog() {
    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.showModal()
    }

    const closeDialog = () => {
        dialogRef.current.close()
    }

    return (
        <>
        <dialog ref={dialogRef}>
            <button autoFocus onClick={closeDialog}>Close</button>
            <p>This modal dialog has a groovy backdrop!</p>
        </dialog>
        <button onClick={openDialog}>Show the dialog</button>
        </>
    )
}