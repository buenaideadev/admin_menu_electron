export const getStyles = (isDark) => ({

    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: isDark ? '#101935' : '#F5F6F8',
        color: isDark ? '#e5e7eb' : '#2E2E2E',
        fontFamily: 'Inter, system-ui, sans-serif'
    },

    toolbar: {
        height: 60,
        background: isDark ? '#020617' : '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        borderBottom: `1px solid ${isDark ? '#1e293b' : '#E5E7EB'}`
    },

    logo: {
        height: '50px'
    },

    toolbarButtonContainer: {
        display: 'flex',
        gap: '10px'
    },

    content: {
        flex: 1,
        display: 'flex',
        overflow: 'hidden'
    },

    sidebar: {
        minWidth: '280px',
        padding: 16,
        borderRight: `1px solid ${isDark ? '#1e293b' : '#E5E7EB'
            }`,
        overflowY: 'auto',
        background: isDark ? '#020617' : '#FFFFFF'
    },

    editor: {
        flex: 1,
        padding: 30,
        overflowY: 'auto',
        background: isDark ? '#020617' : '#FFFFFF'
    },

    item: {
        padding: '10px 12px',
        cursor: 'pointer',
        borderRadius: 8,
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: 6
    },

    secondaryBtn: {
    },

    deleteBtn: {
        background: '#ef4444',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
        marginTop: 20
    },

    input: {
        width: '100%',
        boxSizing: 'border-box',
        padding: 12,
        borderRadius: 4,
        border: `1px solid ${isDark ? '#1e293b' : '#E5E7EB'} `,
        background: isDark ? '#020617' : '#F9FAFB',
        color: isDark ? '#fff' : '#111827'
    },

    basicFieldsContainer: {
        marginTop: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20
    },

    basicFieldsItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },

    styleControlsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginTop: 20
    },

    viewImageContainer: {
        padding: 15,
        borderRadius: 4,
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        marginTop: 15,
        background: '#f9fafb',
        border: `1px solid ${isDark ? '#1e293b' : '#E5E7EB'} `,
        background: isDark ? '#020617' : '#F9FAFB',
    },

    styleControlsContainerColor: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },

    styleControlsContainerText: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },

    styleControlsContainerDecoration: {
        display: 'flex',
        gap: 20
    },

    visibilityControlsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        marginTop: 20
    },

    label: {
        fontSize: 13,
        display: 'block',
        color: isDark ? '#9ca3af' : '#6B7280'
    },

    savedToastWrapper: {
        zIndex: 1001,
        position: 'fixed',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',
        background: 'rgba(103, 103, 103, 0.4)'
    },

    savedToastContainer: {
        padding: '15px 20px',
        marginBottom: '15px',
        marginRight: '15px',
        background: '#FFFFFF',
        borderRadius: 8,
        color: '#2e2e2e',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
    },

    unsaved: {
        background: isDark ? '#3f1d1d' : '#FDECEC',
        border: `1px solid ${isDark ? '#7f1d1d' : '#F5C2C0'
            } `,
        padding: 10,
        textAlign: 'center',
        fontSize: 13,
        color: isDark ? '#fca5a5' : '#7f1d1d'
    },

    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    },

    modal: {
        position: 'relative',
        width: '600px',
        maxWidth: '90%',
        background: isDark ? '#020617' : '#ffffff',
        padding: 20,
        borderRadius: 12,
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    },

    modalTitle: {
        color: isDark ? '#FFFFFF' : '#000000'
    },

    jsonBox: {
        marginTop: '15px',
        padding: 10,
        width: '100%',
        height: '300px',
        boxSizing: 'border-box',
        borderRadius: 8,
        border: `1px solid ${isDark ? '#1e293b' : '#E5E7EB'} `,
        background: isDark ? '#020617' : '#F9FAFB',
        color: isDark ? '#e5e7eb' : '#111827',
        fontSize: 12,
        fontFamily: 'monospace',
        resize: 'none'
    },

    copyToastWrappper: {
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        background: isDark ? 'rgba( 255, 255, 255, 0.1 )' : 'rgba( 0, 0, 0, 0.1 )'
    },

    copyToastContainer: {
        padding: '15px 20px',
        borderRadius: '4px',
        color: isDark ? '#000000' : '#FFFFFF',
        background: isDark ? '#FFFFFF' : '#FF5A2C'
    }

})
