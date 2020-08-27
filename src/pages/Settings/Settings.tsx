import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonToggle, IonItemDivider } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import './Settings.css';

const Settings: React.FC = () => {
    const [t] = useTranslation();
    const [fasting, setFasting] = useState(true);
    const [athkarMorning, setAthkarMorning] = useState(true);
    const [athkarEvening, setAthkarEvening] = useState(true);

    useEffect(() => {
        ['fasting', 'athkarMorning', 'athkarEvening'].forEach(key => {
            Plugins.Storage.get({
                key
            })
            .then ((res) => setSettings(key, res.value === "true"))
            .catch((e) => console.error(e));
        });
    }, []);

    function handleToggle (event: CustomEvent<{value: string; checked: boolean}>) {
        const {value, checked} = event.detail;
        console.log(value, checked);
        Plugins.Storage.set({
            key: value,
            value: checked.toString()
        })
        .catch((e) => console.error(e));
    }

    function setSettings (key: string, value: boolean) {
        switch (key) {
            case 'fasting':
                setFasting(value);
                break;
            case 'athkarMorning':
                setAthkarMorning(value);
                break;
            case 'athkarEvening':
                setAthkarEvening(value);
                break;
        }
    }

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
                        <IonToggle slot="start" name="fasting" value="fasting" checked={fasting} onIonChange={handleToggle}></IonToggle>
                    </IonItem>
                    <IonItemDivider>
                        <IonLabel color="dark">
                            <h2>{t('Athkar')}</h2>
                        </IonLabel>
                    </IonItemDivider>
                    <IonItem lines="none">
                        <IonLabel>{t('Morning')}</IonLabel>
                        <IonToggle slot="start" name="athkarMorning" value="athkarMorning" checked={athkarMorning} onIonChange={handleToggle}></IonToggle>
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel>{t('Evening')}</IonLabel>
                        <IonToggle slot="start" name="athkarEvening" value="athkarEvening" checked={athkarEvening} onIonChange={handleToggle}></IonToggle>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Settings;