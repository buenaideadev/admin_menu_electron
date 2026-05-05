import { createCategory, createSubcategory } from '../utils/treeHelpers'

export const findSelectedNode = (tree, selectedId) => {
    let selected = null
    let isCategory = false
    let isSubcategory = false

    for (const dep of tree) {
        if (dep.department_id === selectedId) {
            selected = dep
            isCategory = false
            break
        }

        for (const cat of dep.categories || []) {
            if (cat.category_id === selectedId) {
                selected = cat
                isCategory = true
                break
            }

            for (const sub of cat.subcategories || []) {
                if (sub.subcategory_id === selectedId) {
                    selected = sub
                    isSubcategory = true
                    break
                }
            }

            if (selected) break
        }

        if (selected) break
    }

    return { selected, isCategory, isSubcategory }
}

export const addCategoryToTree = (tree, selectedId) => {
    const dep = tree.find(d => d.department_id === selectedId)
    if (!dep) return tree

    return tree.map(d =>
        d.department_id === selectedId
            ? {
                ...d,
                categories: [...(d.categories || []), createCategory()]
            }
            : d
    )
}

export const deleteDepartmentFromTree = (tree, selectedId) => (
    tree.filter(d => d.department_id !== selectedId)
)

export const moveDepartmentInTree = (tree, selectedId, direction) => {
    const index = tree.findIndex(d => d.department_id === selectedId)
    if (index === -1) return tree

    const newTree = [...tree]

    if (direction === 'up' && index > 0) {
        ;[newTree[index - 1], newTree[index]] =
            [newTree[index], newTree[index - 1]]
    }

    if (direction === 'down' && index < newTree.length - 1) {
        ;[newTree[index + 1], newTree[index]] =
            [newTree[index], newTree[index + 1]]
    }

    return newTree
}

export const addSubcategoryToTree = (tree, selectedId) => (
    tree.map(dep => ({
        ...dep,
        categories: dep.categories?.map(cat =>
            cat.category_id === selectedId
                ? {
                    ...cat,
                    subcategories: [
                        ...(cat.subcategories || []),
                        createSubcategory()
                    ]
                }
                : cat
        )
    }))
)

export const deleteCategoryFromTree = (tree, selectedId) => (
    tree.map(dep => ({
        ...dep,
        categories: dep.categories?.filter(
            cat => cat.category_id !== selectedId
        )
    }))
)

export const deleteSubcategoryFromTree = (tree, selectedId) => (
    tree.map(dep => ({
        ...dep,
        categories: dep.categories?.map(cat => {
            const exists = cat.subcategories?.some(
                sub => sub.subcategory_id === selectedId
            )

            if (!exists) return cat

            return {
                ...cat,
                subcategories: cat.subcategories.filter(
                    sub => sub.subcategory_id !== selectedId
                )
            }
        })
    }))
)

export const moveCategoryInTree = (tree, selectedId, direction) => (
    tree.map(dep => {
        const index = dep.categories?.findIndex(
            cat => cat.category_id === selectedId
        )

        if (index === -1 || index === undefined) return dep

        const newCats = [...dep.categories]

        if (direction === 'up' && index > 0) {
            ;[newCats[index - 1], newCats[index]] =
                [newCats[index], newCats[index - 1]]
        }

        if (direction === 'down' && index < newCats.length - 1) {
            ;[newCats[index + 1], newCats[index]] =
                [newCats[index], newCats[index + 1]]
        }

        return { ...dep, categories: newCats }
    })
)

export const moveSubcategoryInTree = (tree, selectedId, direction) => (
    tree.map(dep => ({
        ...dep,
        categories: dep.categories?.map(cat => {
            const index = cat.subcategories?.findIndex(
                sub => sub.subcategory_id === selectedId
            )

            if (index === undefined || index === -1) return cat

            const newSubs = [...(cat.subcategories || [])]

            if (direction === 'up' && index > 0) {
                ;[newSubs[index - 1], newSubs[index]] =
                    [newSubs[index], newSubs[index - 1]]
            }

            if (direction === 'down' && index < newSubs.length - 1) {
                ;[newSubs[index + 1], newSubs[index]] =
                    [newSubs[index], newSubs[index + 1]]
            }

            return {
                ...cat,
                subcategories: newSubs
            }
        })
    }))
)

export const updateNodeFieldInTree = (tree, selectedId, selection, field, value) => (
    tree.map(dep => {
        if (!selection.isCategory && !selection.isSubcategory && dep.department_id === selectedId) {
            return { ...dep, [field]: value }
        }

        return {
            ...dep,
            categories: dep.categories?.map(cat => {
                if (selection.isCategory && cat.category_id === selectedId) {
                    return { ...cat, [field]: value }
                }

                if (selection.isSubcategory) {
                    const exists = cat.subcategories?.some(
                        sub => sub.subcategory_id === selectedId
                    )

                    if (!exists) return cat

                    return {
                        ...cat,
                        subcategories: cat.subcategories.map(sub =>
                            sub.subcategory_id === selectedId
                                ? { ...sub, [field]: value }
                                : sub
                        )
                    }
                }

                return cat
            })
        }
    })
)

export const updateNodeNestedFieldInTree = (tree, selectedId, selection, parent, field, value) => (
    tree.map(dep => {
        if (!selection.isCategory && dep.department_id === selectedId) {
            return {
                ...dep,
                [parent]: {
                    ...dep[parent],
                    [field]: value
                }
            }
        }

        return {
            ...dep,
            categories: dep.categories?.map(cat => {
                if (selection.isCategory && cat.category_id === selectedId) {
                    return {
                        ...cat,
                        [parent]: {
                            ...cat[parent],
                            [field]: value
                        }
                    }
                }

                if (selection.isSubcategory) {
                    return {
                        ...cat,
                        subcategories: cat.subcategories?.map(sub =>
                            sub.subcategory_id === selectedId
                                ? {
                                    ...sub,
                                    [parent]: {
                                        ...sub[parent],
                                        [field]: value
                                    }
                                }
                                : sub
                        )
                    }
                }

                return cat
            })
        }
    })
)
