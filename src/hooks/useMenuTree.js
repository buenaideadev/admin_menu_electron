import { useEffect, useState } from 'react'
import {
    addCategoryToTree,
    addSubcategoryToTree,
    deleteCategoryFromTree,
    deleteDepartmentFromTree,
    deleteSubcategoryFromTree,
    findSelectedNode,
    moveCategoryInTree,
    moveDepartmentInTree,
    moveSubcategoryInTree,
    updateNodeFieldInTree,
    updateNodeNestedFieldInTree
} from '../helpers/treeOperations'
import { createDepartment } from '../utils/treeHelpers'

const cloneTree = (tree) => JSON.parse(JSON.stringify(tree))

export const useMenuTree = () => {
    const [tree, setTree] = useState([])
    const [originalTree, setOriginalTree] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    const [expanded, setExpanded] = useState({})

    useEffect(() => {
        if (window.api) {
            window.api.loadJSON().then(data => {
                const safeData = data || []
                setTree(cloneTree(safeData))
                setOriginalTree(cloneTree(safeData))
            })
        }
    }, [])

    const hasChanges = JSON.stringify(tree) !== JSON.stringify(originalTree)
    const { selected, isCategory, isSubcategory } = findSelectedNode(tree, selectedId)

    const markSaved = () => {
        setOriginalTree(cloneTree(tree))
    }

    const addDepartment = () => {
        setTree(prev => [...prev, createDepartment()])
    }

    const addCategory = () => {
        setTree(prev => addCategoryToTree(prev, selectedId))
    }

    const deleteDepartment = () => {
        const confirmDelete = window.confirm('¿Eliminar departamento?')
        if (!confirmDelete) return

        setTree(prev => deleteDepartmentFromTree(prev, selectedId))
        setSelectedId(null)
    }

    const moveDepartment = (direction) => {
        setTree(prev => moveDepartmentInTree(prev, selectedId, direction))
    }

    const addSubcategory = () => {
        setTree(prev => addSubcategoryToTree(prev, selectedId))
    }

    const deleteCategory = () => {
        if (!window.confirm('¿Eliminar categoría?')) return

        setTree(prev => deleteCategoryFromTree(prev, selectedId))
        setSelectedId(null)
    }

    const deleteSubcategory = () => {
        if (!window.confirm('¿Eliminar subcategoría?')) return

        setTree(prev => deleteSubcategoryFromTree(prev, selectedId))
        setSelectedId(null)
    }

    const moveCategory = (direction) => {
        setTree(prev => moveCategoryInTree(prev, selectedId, direction))
    }

    const moveSubcategory = (direction) => {
        setTree(prev => moveSubcategoryInTree(prev, selectedId, direction))
    }

    const toggleExpand = (depId) => {
        setExpanded(prev => ({
            ...prev,
            [depId]: !prev[depId]
        }))
    }

    const updateField = (field, value) => {
        setTree(prev =>
            updateNodeFieldInTree(prev, selectedId, { isCategory, isSubcategory }, field, value)
        )
    }

    const updateNestedField = (parent, field, value) => {
        setTree(prev =>
            updateNodeNestedFieldInTree(prev, selectedId, { isCategory, isSubcategory }, parent, field, value)
        )
    }

    return {
        tree,
        selectedId,
        setSelectedId,
        expanded,
        hasChanges,
        selected,
        isCategory,
        isSubcategory,
        markSaved,
        addDepartment,
        addCategory,
        deleteDepartment,
        moveDepartment,
        addSubcategory,
        deleteCategory,
        deleteSubcategory,
        moveCategory,
        moveSubcategory,
        toggleExpand,
        updateField,
        updateNestedField
    }
}
