import React from 'react'
import i18next from 'i18next'
const SwitchLanguage = () => {
    return (
        <div>
            <button onClick={() => i18next.changeLanguage('en')}> English</button>
            <button onClick={() => i18next.changeLanguage('bn')}> Bangla</button>
            <button onClick={() => i18next.changeLanguage('es')}> Spanish</button>
        </div>
    )
}

export default SwitchLanguage