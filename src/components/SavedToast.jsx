function SavedToast({ styles, message }) {
    return (
        <div style={styles.savedToastWrapper}>
            <div style={styles.savedToastContainer}>
                {message}
            </div>
        </div>
    )
}

export default SavedToast
