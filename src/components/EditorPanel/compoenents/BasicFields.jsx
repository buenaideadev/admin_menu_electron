const getNameField = (selected) => {
    if (selected.department_name !== undefined) return 'department_name'
    if (selected.category_name !== undefined) return 'category_name'
    return 'subcategory_name'
}

const getImageField = (selected) => (
    selected.department_image !== undefined ? 'department_image' : 'category_image'
)

function BasicFields({ styles, selected, isSubcategory, onUpdateField }) {

    return (

        <div style={styles.basicFieldsContainer}>

            <div style={styles.basicFieldsItem}>

                <label style={styles.label}>Nombre</label>
                <input
                    style={styles.input}
                    value={
                        selected.department_name ?? selected.category_name ?? selected.subcategory_name ?? ''
                    }
                    onChange={(e) =>
                        onUpdateField(getNameField(selected), e.target.value)
                    }
                />

            </div>

            <div style={styles.basicFieldsItem}>

                <label style={styles.label}>URL</label>
                <input
                    style={styles.input}
                    value={selected.url || ''}
                    onChange={(e) => onUpdateField('url', e.target.value)}
                />

            </div>

            {!isSubcategory && (

                <>

                    <div style={styles.basicFieldsItem}>

                        <label style={styles.label}>Imagen</label>
                        <input
                            style={styles.input}
                            value={
                                selected.department_image || selected.category_image || ''
                            }
                            onChange={(e) =>
                                onUpdateField(getImageField(selected), e.target.value)
                            }
                        />

                        {

                            (selected.department_image || selected.category_image) && (

                                <div style={styles.viewImageContainer}>
                                    
                                    <p style={styles.label}>Vista previa</p>

                                    <img
                                        src={selected.department_image || selected.category_image}
                                        alt=""
                                        style={{
                                            width: 150,
                                            height: 150,
                                            objectFit: 'cover',
                                            // border: '1px solid #1e293b'
                                        }}
                                    />

                                </div>
                            
                            )

                        }

                    </div>

                </>

            )}

        </div>

    )

}

export default BasicFields
