import { useState } from 'react'

export const useClipboard = () => {
    const [copied, setCopied] = useState(false)

    const showCopied = () => {
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }

    const copy = (data) => {
        const text = JSON.stringify(data, null, 2)

        // Intento 1: API Moderna (Navigator)
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    showCopied()
                    console.log("Copiado con clipboard")
                })
                .catch(err => console.error("Error al copiar:", err))
        } else {
            // Intento 2: Método "Old School" (textarea invisible)
            const textArea = document.createElement("textarea")
            textArea.value = text

            // Aseguramos que no se vea pero que esté en el DOM
            textArea.style.position = "fixed"
            textArea.style.left = "-999999px"
            textArea.style.top = "-999999px"
            document.body.appendChild(textArea)

            textArea.focus()
            textArea.select()

            try {
                document.execCommand('copy')
                console.log("Copiado con execCommand")
                showCopied()
            } catch (err) {
                console.error("Fallo total al copiar:", err)
            }

            document.body.removeChild(textArea)
        }
    }

    return { copied, copy }
}
