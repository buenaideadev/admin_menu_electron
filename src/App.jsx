import { useState } from 'react'
import EditorPanel from './components/EditorPanel/EditorPanel'
import JsonModal from './components/JsonModal'
import SavedToast from './components/SavedToast'
import SidebarTree from './components/SidebarTree'
import Toolbar from './components/Toolbar'
import UnsavedBanner from './components/UnsavedBanner'
import { getStyles } from './styles/getStyles'
import { useClipboard } from './hooks/useClipboard'
import { useMenuTree } from './hooks/useMenuTree'
import { useTheme } from './hooks/useTheme'

function App() {

    const { copied, copy } = useClipboard()
    const { isDark, toggleTheme } = useTheme()
    const menuTree = useMenuTree()
    const [showJsonModal, setShowJsonModal] = useState(false)
    const [showSaved, setShowSaved] = useState(false)
    const [savedMsg, setSavedMsg] = useState('')
    const styles = getStyles(isDark)

    const save = async () => {

        if (window.api) {

            try {

                await window.api.saveJSON(menuTree.tree)

                menuTree.markSaved()
                setSavedMsg('✅ Mega menú guardado correctamente!')
                setShowSaved(true)
                setTimeout(() => setShowSaved(false), 2000)

                setShowJsonModal(true)     // 👈 abrimos modal

            } catch {

                setSavedMsg('❌ Error al guardar los cambios')
                setShowSaved(true)
                setTimeout(() => setShowSaved(false), 2000)
                
            }

        }

    }

    function itemActive() {
        return isDark ? '#1e293b' : "#dfdfdf"
    }

    return (

        <>

            <div style={styles.container}>

                <Toolbar
                    styles={styles}
                    isDark={isDark}
                    onSave={save}
                    onToggleTheme={toggleTheme}
                />

                {menuTree.hasChanges && <UnsavedBanner styles={styles} />}

                <div style={styles.content}>

                    <SidebarTree
                        styles={styles}
                        tree={menuTree.tree}
                        selectedId={menuTree.selectedId}
                        expanded={menuTree.expanded}
                        itemActive={itemActive}
                        onAddDepartment={menuTree.addDepartment}
                        onSelect={menuTree.setSelectedId}
                        onToggleExpand={menuTree.toggleExpand}
                    />

                    <EditorPanel
                        styles={styles}
                        selected={menuTree.selected}
                        isCategory={menuTree.isCategory}
                        isSubcategory={menuTree.isSubcategory}
                        onAddCategory={menuTree.addCategory}
                        onAddSubcategory={menuTree.addSubcategory}
                        onDeleteCategory={menuTree.deleteCategory}
                        onDeleteDepartment={menuTree.deleteDepartment}
                        onDeleteSubcategory={menuTree.deleteSubcategory}
                        onMoveCategory={menuTree.moveCategory}
                        onMoveDepartment={menuTree.moveDepartment}
                        onMoveSubcategory={menuTree.moveSubcategory}
                        onUpdateField={menuTree.updateField}
                        onUpdateNestedField={menuTree.updateNestedField}
                    />

                </div>

            </div>

            {showSaved && <SavedToast styles={styles} message={savedMsg} />}

            {showJsonModal && (
                <JsonModal
                    styles={styles}
                    tree={menuTree.tree}
                    copied={copied}
                    onCopy={copy}
                    onClose={() => setShowJsonModal(false)}
                />
            )}

        </>

    )

}

export default App
