import { useEffect, useState } from 'react'

export const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved === 'dark'
    })

    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'Modo oscuro' : 'Modo claro')
    }, [isDark])

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }

    return { isDark, toggleTheme }
}
