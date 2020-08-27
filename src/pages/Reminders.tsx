import React from 'react';
import { useTranslation } from 'react-i18next';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonContent } from '@ionic/react';

const Reminders: React.FC = () => {
    const [t] = useTranslation();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t('Reminders')}</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    );
}

export default Reminders;