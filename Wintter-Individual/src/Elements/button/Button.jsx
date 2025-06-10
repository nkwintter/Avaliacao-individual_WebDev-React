import './button.module.css'
import '../../index.css'


export function Button({ toggleDarkMode, darkMode }) {
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? '🌑 Modo Escuro' : '🌞 Modo Claro'}
    </button>
  )
}
