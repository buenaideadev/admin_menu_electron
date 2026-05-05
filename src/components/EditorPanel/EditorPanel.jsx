import BasicFields from './compoenents/BasicFields'
import EditorActions from './compoenents/EditorActions'
import StyleControls from './compoenents/StyleControls'
import VisibilityControls from './compoenents/VisibilityControls'

function EditorPanel({
    styles,
    selected,
    isCategory,
    isSubcategory,
    onAddCategory,
    onAddSubcategory,
    onDeleteCategory,
    onDeleteDepartment,
    onDeleteSubcategory,
    onMoveCategory,
    onMoveDepartment,
    onMoveSubcategory,
    onUpdateField,
    onUpdateNestedField
}) {

    if (!selected) {

        return (

            <div style={styles.editor}>

                <p>Seleccioná un elemento</p>
                
            </div>

        )

    }

    return (

        <div style={styles.editor}>

            <h2>Editar</h2>

            <EditorActions
                styles={styles}
                isCategory={isCategory}
                isSubcategory={isSubcategory}
                onAddCategory={onAddCategory}
                onAddSubcategory={onAddSubcategory}
                onDeleteCategory={onDeleteCategory}
                onDeleteDepartment={onDeleteDepartment}
                onDeleteSubcategory={onDeleteSubcategory}
                onMoveCategory={onMoveCategory}
                onMoveDepartment={onMoveDepartment}
                onMoveSubcategory={onMoveSubcategory}
            />

            <BasicFields
                styles={styles}
                selected={selected}
                isSubcategory={isSubcategory}
                onUpdateField={onUpdateField}
            />

            <StyleControls
                styles={styles}
                selected={selected}
                onUpdateNestedField={onUpdateNestedField}
            />

            <VisibilityControls
                styles={styles}
                selected={selected}
                onUpdateNestedField={onUpdateNestedField}
            />

        </div>

    )

}

export default EditorPanel
