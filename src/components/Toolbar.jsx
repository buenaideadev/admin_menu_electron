function Toolbar({ styles, isDark, onSave, onToggleTheme }) {
    return (
        <div style={styles.toolbar}>
            <h3 style={{ color: '#bcbcbc' }}>Mega Menu CMS</h3>

            {/* <img style={styles.logo} src={ isDark ? 'assets/logo/logo_kudos_light.svg' : 'assets/logo/logo_kudos_dark.svg' } alt="logo_kudos" /> */}

            <div style={styles.toolbarButtonContainer}>
                <button className='btn gradient-orange' onClick={onSave}>💾 Guardar cambios</button>
                <button className='btn gradient-gray' onClick={onToggleTheme}>{isDark ? '🌙 Modo oscuro' : '☀️ Modo claro'}</button>
            </div>
        </div>
    )
}

export default Toolbar
