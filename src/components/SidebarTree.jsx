function SidebarTree({
    styles,
    tree,
    selectedId,
    expanded,
    itemActive,
    onAddDepartment,
    onSelect,
    onToggleExpand
}) {
    return (
        <div style={styles.sidebar}>
            <h5>Árbol del menú</h5>

            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                {tree.map(dep => (
                    <div key={dep.department_id}>
                        {/* DEP */}
                        <div
                            style={{
                                ...styles.item,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                                background: dep.department_id === selectedId ? itemActive() : 'transparent'
                            }}
                        >
                            {dep.categories.length > 0 && (
                                <span
                                    onClick={() => onToggleExpand(dep.department_id)}
                                    style={{ cursor: 'pointer', fontSize: '12px' }}
                                >
                                    {expanded[dep.department_id] ? '▼' : '▶'}
                                </span>
                            )}

                            <span
                                onClick={() => {
                                    onSelect(dep.department_id);
                                    onToggleExpand(dep.department_id);
                                }}
                                style={{
                                    color: dep.styles?.color || '#fff',
                                    fontWeight: dep.styles?.negrita ? 'bold' : 'normal',
                                    fontStyle: dep.styles?.curisva ? 'italic' : 'normal',
                                    textDecoration: dep.styles?.subrayado ? 'underline' : 'none'
                                }}
                            >
                                {expanded[dep.department_id] ? '📂' : '📁'} {dep.department_name}
                            </span>
                        </div>

                        {/* CAT */}
                        {expanded[dep.department_id] &&
                            dep.categories?.map(cat => (
                                <div key={cat.category_id}>
                                    {/* CATEGORÍA */}
                                    <div
                                        style={{
                                            ...styles.item,
                                            paddingLeft: 25,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6,
                                            background: cat.category_id === selectedId ? itemActive() : 'transparent'
                                        }}
                                    >
                                        {/* TOGGLE */}
                                        {cat.subcategories.length > 0 && (
                                            <span
                                                onClick={() => onToggleExpand(cat.category_id)}
                                                style={{ cursor: 'pointer', fontSize: '12px' }}
                                            >
                                                {expanded[cat.category_id] ? '▼' : '▶'}
                                            </span>
                                        )}

                                        {/* LABEL */}
                                        <span
                                            onClick={() => {
                                                onSelect(cat.category_id);
                                                onToggleExpand(cat.category_id);
                                            }}
                                            style={{
                                                color: cat.styles?.color || '#fff',
                                                fontWeight: cat.styles?.negrita ? 'bold' : 'normal',
                                                fontStyle: cat.styles?.curisva ? 'italic' : 'normal',
                                                textDecoration: cat.styles?.subrayado ? 'underline' : 'none'
                                            }}
                                        >
                                            {expanded[cat.category_id] ? '📂' : '📁'} {cat.category_name}
                                        </span>
                                    </div>

                                    {/* SUBCATEGORÍAS */}
                                    {expanded[cat.category_id] &&
                                        cat.subcategories?.map(sub => (
                                            <div
                                                key={sub.subcategory_id}
                                                onClick={() => onSelect(sub.subcategory_id)}
                                                style={{
                                                    ...styles.item,
                                                    paddingLeft: 45,
                                                    background: sub.subcategory_id === selectedId ? itemActive() : 'transparent'
                                                }}
                                            >
                                                <span style={{
                                                    color: sub.styles?.color || '#fff',
                                                    fontWeight: sub.styles?.negrita ? 'bold' : 'normal',
                                                    fontStyle: sub.styles?.curisva ? 'italic' : 'normal',
                                                    textDecoration: sub.styles?.subrayado ? 'underline' : 'none'
                                                }}>
                                                    📄 {sub.subcategory_name}
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            ))}
                    </div>
                ))}
            </div>

            <button className='btn gradient-orange' onClick={onAddDepartment}>
                <svg className='iconAddDelete' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V17M7 12H17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>
                <p>Agregar Departamento</p>
            </button>
        </div>
    )
}

export default SidebarTree
