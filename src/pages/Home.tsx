import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonFab, IonFabButton } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home: React.FC = () => {
  const {t, i18n} = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('Welcome')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Me</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
            </IonBadge>
          </IonItem>
        </IonList>
        
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>S</IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
