export function isLight() {
    const theme = localStorage.getItem("vite-ui-theme") || "system"

    return theme === 'light'
}
