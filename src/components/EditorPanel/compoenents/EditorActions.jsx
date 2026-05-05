import { DeleteIcon, DownIcon, PlusIcon, UpIcon } from './EditorIcons'

function EditorActions({
    styles,
    isCategory,
    isSubcategory,
    onAddCategory,
    onAddSubcategory,
    onDeleteCategory,
    onDeleteDepartment,
    onDeleteSubcategory,
    onMoveCategory,
    onMoveDepartment,
    onMoveSubcategory
}) {

    if (!isCategory && !isSubcategory) {

        return (

            <div className='upDownAddContainer'>

                <div className="upDownContainer">

                    <button onClick={() => onMoveDepartment('up')} title="subir departamento">
                        <UpIcon />
                    </button>

                    <button onClick={() => onMoveDepartment('down')} title="bajar departamento">
                        <DownIcon />
                    </button>

                </div>

                <button className='btn gradient-orange' onClick={onDeleteDepartment}>
                    <DeleteIcon />
                    Eliminar Departamento
                </button>

                <button className='btn gradient-orange' onClick={onAddCategory}>
                    <PlusIcon />
                    <p>Agregar Categoría</p>
                </button>

            </div>

        )

    }

    if (isCategory) {

        return (

            <div className='upDownAddContainer'>

                <div className="upDownContainer">

                    <button onClick={() => onMoveCategory('up')} title="subir categoria">
                        <UpIcon />
                    </button>


                    <button onClick={() => onMoveCategory('down')} title="bajar categoria">
                        <DownIcon />
                    </button>

                </div>

                <button className='btn gradient-orange' onClick={onDeleteCategory}>
                    <DeleteIcon />
                    Eliminar Categoría
                </button>

                <button className='btn gradient-orange' onClick={onAddSubcategory}>
                    <PlusIcon />
                    <p>Agregar Subcategoría</p>
                </button>


            </div>

        )

    }

    return (

        <div className='upDownAddContainer'>

            <div className="upDownContainer">

                <button onClick={() => onMoveSubcategory('up')} title="subir subcategoria">
                    <UpIcon />
                </button>

                <button onClick={() => onMoveSubcategory('down')} title="subir subcategoria">
                    <DownIcon />
                </button>

            </div>


            <button className='btn gradient-orange' onClick={onDeleteSubcategory}>
                <DeleteIcon />
                Eliminar Subcategoría
            </button>

        </div>

    )

}

export default EditorActions
