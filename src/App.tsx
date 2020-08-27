import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { alarmSharp, settingsOutline } from 'ionicons/icons';

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
import Reminders from './pages/Reminders';
import Settings from './pages/Settings';
import { useTranslation } from 'react-i18next';

const App: React.FC<{setDirectionCB: Function, direction: string}> = ({setDirectionCB, direction}) => {
  const [dir, setDirection] = useState(direction);
  const [t] = useTranslation();
  setDirectionCB(setDirection);
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
                    <IonIcon icon={alarmSharp} />
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
