import React from 'react'
import { useTranslation } from 'react-i18next'

const Message = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h1>
                {t('top_bar_title')}
            </h1>
        </div>
    )
}

export default Message