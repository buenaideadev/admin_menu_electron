function VisibilityControls({ styles, selected, onUpdateNestedField }) {

    return (

        <div style={styles.visibilityControlsContainer}>

            <label style={styles.label}>Visibilidad</label>

            <div style={styles.styleControlsContainerDecoration}>

                <label>
                    <input
                        style={{ marginRight: 5 }}
                        type="checkbox"
                        checked={selected.visibility?.desktop || false}
                        onChange={(e) =>
                            onUpdateNestedField('visibility', 'desktop', e.target.checked)
                        }
                    />
                    Desktop
                </label>

                <label>
                    <input
                        style={{ marginRight: 5 }}
                        type="checkbox"
                        checked={selected.visibility?.mobile || false}
                        onChange={(e) =>
                            onUpdateNestedField('visibility', 'mobile', e.target.checked)
                        }
                    />
                    Mobile
                </label>

            </div>

        </div>

    )

}

export default VisibilityControls
