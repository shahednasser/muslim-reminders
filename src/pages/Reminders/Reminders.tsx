import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plugins } from '@capacitor/core';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonLoading, IonAlert, IonItem, IonCheckbox, IonLabel, IonList, IonListHeader, IonNote } from '@ionic/react';
import MonthlyReminder from '../../models/MonthlyReminder';
import ReminderType from '../../models/interfaces/ReminderType';
import Reminder from '../../models/interfaces/Reminder';
import './Reminders.css';

const Reminders: React.FC = () => {
    const [t] = useTranslation();
    const defaultReminders: MonthlyReminder = {month: 0, reminderTypes: []};
    const [reminders, setReminders] = useState(defaultReminders);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        Plugins.Storage.get({key: 'reminders'})
            .then ((res) => {
                let value = JSON.parse(res.value ? res.value : "[]");
                if (!value.length) {
                    value = defaultReminders;
                }
                setReminders(value);
                setLoading(false);
            })
            .catch((e) => {
                console.error(e);
                setError("An error occured, please try again later.");
            });
    }, []);

    let list = reminders.reminderTypes.map((reminderType: ReminderType, i) => {
        const innerList = reminderType.reminders.map((reminder: Reminder, j) => (
            <IonItem key={j}>
                <IonCheckbox />
                <IonLabel>{reminder.title}</IonLabel>
            </IonItem>
        ));
        return (
            <IonList key={i}>
                <IonListHeader>
                    <h2>{reminderType.name}</h2>
                    {innerList}
                </IonListHeader>
            </IonList>
        );
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t('Reminders')}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {loading && 
                    <IonLoading isOpen={loading} onDidDismiss={() => setLoading(false)} />
                }
                {error.length > 0 &&
                    <IonAlert isOpen={true} header="Error" message={error} />}
                {list.length === 0 && list}
                {list.length === 0 && !loading && 
                    <IonNote className="no-reminders">
                        <span>{t('You currently have no reminders')}</span>
                    </IonNote>}
            </IonContent>
        </IonPage>
    );
}

export default Reminders;