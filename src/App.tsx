import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Reminders from './pages/Reminders/Reminders';
import Settings from './pages/Settings/Settings';
import { useTranslation } from 'react-i18next';
import { alarmOutline, settingsOutline } from 'ionicons/icons';
import { checkReminders } from './utils/helpers';  

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/dark-mode.css';
import './theme/tabs.css';

const App: React.FC<{setDirectionCB: Function, direction: string}> = ({setDirectionCB, direction}) => {
  const [dir, setDirection] = useState(direction);
  const [t] = useTranslation();
  setDirectionCB(setDirection);

  useEffect(() => {
    //check if new reminders need to be added

  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet dir={dir}>
                <Route path="/reminders" component={Reminders} exact={true} />
                <Route path="/settings" component={Settings} exact={true} />
                <Route path="/" render={() => <Redirect to="/reminders" />} exact={true} /> 
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="reminders" href="/reminders">
                    <IonIcon icon={alarmOutline} />
                    <IonLabel>{t('Reminders')}</IonLabel>
                </IonTabButton>
                <IonTabButton tab="settings" href="/settings">
                    <IonIcon icon={settingsOutline} />
                    <IonLabel>{t('Settings')}</IonLabel>
                </IonTabButton>
            </IonTabBar>
          </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
