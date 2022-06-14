import React from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button';

const Alert = ({
    visible,
    position,
    title,
    message,
    onHide,
}) => {
    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={onHide} /></div>;

    return (
        <Dialog visible={visible} onHide={onHide} position={position} footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
            <div className="flex align-items-center flex-column pt-6 px-3">
                <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                {/* <h5>Registration Successful!</h5> */}
                <h5>{title}</h5>
                <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                    {/* Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions. */}
                    {message}
                </p>
            </div>
        </Dialog>
    )
}

export default Alert