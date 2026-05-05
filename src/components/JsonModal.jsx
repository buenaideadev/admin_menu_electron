function JsonModal({ styles, tree, copied, onCopy, onClose }) {
    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modal}>
                <h3 style={styles.modalTitle}>JSON generado</h3>

                <textarea
                    value={JSON.stringify(tree)}
                    readOnly
                    style={styles.jsonBox}
                />

                <div style={{ display: 'flex', gap: 10, marginTop: 15 }}>
                    <button className='btn gradient-orange' onClick={() => { onCopy(tree) }}>
                        📋 Copiar
                    </button>

                    <button className='btn gradient-gray' onClick={onClose}>
                        Cerrar
                    </button>
                </div>

                {copied && (
                    <div style={styles.copyToastWrappper}>
                        <div style={styles.copyToastContainer}>
                            ✔ JSON copiado al portapapeles
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default JsonModal
