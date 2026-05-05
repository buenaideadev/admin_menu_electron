function StyleControls({ styles, selected, onUpdateNestedField }) {

    return (

        <div style={styles.styleControlsContainer}>

            <div style={styles.styleControlsContainerColor}>

                <label style={styles.label}>Color</label>

                <input
                    type="color"
                    value={selected.styles?.color || '#000000'}
                    onChange={(e) =>
                        onUpdateNestedField('styles', 'color', e.target.value)
                    }
                />

            </div>

            <div style={styles.styleControlsContainerText}>

                <label style={styles.label}>Decorado de texto</label>

                <div style={styles.styleControlsContainerDecoration}>

                    <label>
                        <input
                            style={{ marginRight: 5 }}
                            type="checkbox"
                            checked={selected.styles?.negrita || false}
                            onChange={(e) =>
                                onUpdateNestedField('styles', 'negrita', e.target.checked)
                            }
                        />
                        Negrita
                    </label>

                    <label>
                        <input
                            style={{ marginRight: 5 }}
                            type="checkbox"
                            checked={selected.styles?.curisva || false}
                            onChange={(e) =>
                                onUpdateNestedField('styles', 'curisva', e.target.checked)
                            }
                        />
                        Cursiva
                    </label>

                    <label>
                        <input
                            style={{ marginRight: 5 }}
                            type="checkbox"
                            checked={selected.styles?.subrayado || false}
                            onChange={(e) =>
                                onUpdateNestedField('styles', 'subrayado', e.target.checked)
                            }
                        />
                        Subrayado
                    </label>

                </div>

            </div>

        </div>

    )

}

export default StyleControls
