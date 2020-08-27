import React from 'react';
import { useTranslation } from 'react-i18next';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonToggle, IonItemDivider } from '@ionic/react';
import './Settings.css';

const Settings: React.FC = () => {
    const [t] = useTranslation();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t('Settings')}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="settings-content">
                <IonList>
                    <IonListHeader>
                        <h2>{t('Reminder Types')}</h2>
                    </IonListHeader>
                    <IonItem lines="none">
                        <IonLabel>{t('Sunnah Fasting Days')}</IonLabel>
                        <IonToggle slot="start" name="fasting" checked></IonToggle>
                    </IonItem>
                    <IonItemDivider>
                        <IonLabel color="dark">
                            <h2>{t('Athkar')}</h2>
                        </IonLabel>
                    </IonItemDivider>
                    <IonItem lines="none">
                        <IonLabel>{t('Morning')}</IonLabel>
                        <IonToggle slot="start" name="athkar_morning" checked></IonToggle>
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel>{t('Evening')}</IonLabel>
                        <IonToggle slot="start" name="athkar_evening" checked></IonToggle>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Settings;