import React from 'react';
import { useTranslation } from 'react-i18next';
import { IonHeader, IonToolbar, IonTitle, IonPage } from '@ionic/react';

const Settings: React.FC = () => {
    const [t] = useTranslation();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t('Settings')}</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    );
}

export default Settings;