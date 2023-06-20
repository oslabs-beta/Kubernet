//  Dependencies
import React, { useState, useEffect } from 'react';

//  Styles
import styles from './WineGlass.module.scss';

//  Assets
import WineSwirl from './WineSwirl.gif';

function WineGlass(): JSX.Element {
  const messageArray: string[] = [
    'Decanting your Statistics',
    'Bottling your Pods',
    'Aerating your Metrics',
    'Finding a Pairing for your Nodes',
    'Starting Grapevine Monitoring',
    'Analyzing your Vintage',
    'Sipping Service Statistics',
    'Cellaring Container Data',
    'You are the Sommelier of Scalability',
  ];

  const [message, setMessage] = useState<string>(
    messageArray[Math.floor(Math.random() * messageArray.length)]
  );

    //  Rotate through array of loading messages
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messageArray.length);
      setMessage(messageArray[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <img
        src={WineSwirl}
        alt='loading...'
        style={{ height: '480px', width: '640px' }}
      />
      <h1 className={styles.animation} key={message}>
        {message}...
      </h1>
    </div>
  );
}

export default WineGlass;
