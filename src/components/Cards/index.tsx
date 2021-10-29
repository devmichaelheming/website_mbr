import React from 'react';
import {
  LanguageTwoTone,
  PhoneAndroidTwoTone,
  WbIncandescentTwoTone,
  PeopleAltTwoTone
} from '@material-ui/icons';

import styles from './style.module.scss';

export function Cards(){
  return (
    <div className={styles.container}>
      <div className={styles.card}>
          <div className={styles.header}>
              <LanguageTwoTone
                style={{ color: '#833DF4' }}
                className={styles.icon}
              />
          </div>
          <div className={styles.title}>
            Soluções Web
          </div>
          <div className={styles.line}></div>
          <div className={styles.content}>
            Quem não é visto não será lembrado. Disponibilize em tempo integral as suas informações, disponível de qualquer lugar e de qualquer dispositivo com acesso a Internet. A MBR TECH personaliza um layout exclusivo, garantindo a usabilidade de acordo com os padrões da Interação Humano-Computador.
          </div>
      </div>

      <div className={styles.card}>
          <div className={styles.header}>
              <PhoneAndroidTwoTone
                style={{ color: '#833DF4' }}
                className={styles.icon}
              />
          </div>
          <div className={styles.title}>
            APPs Multiplataforma
          </div>
          <div className={styles.line}></div>
          <div className={styles.content}>
            Torne sua empresa competitiva aproximando os clientes de seus vendedores e produtos. A MBR TECH tem colaboradores especialistas em desenvolvimento mobile. Além disso, acreditamos no potencial elevado de tecnologias inovadoras e escaláveis, o que garantirá maior vida útil ao seu software.
          </div>
      </div>

      <div className={styles.card}>
          <div className={styles.header}>
              <WbIncandescentTwoTone
                className={styles.icon}
                style={{ transform: 'rotate(180deg)', color: '#833DF4' }}
              />
          </div>
          <div className={styles.title}>
            Soluções Inovadoras
          </div>
          <div className={styles.line}></div>
          <div className={styles.content}>
            A MBR TECH desenvolve para a sua empresa as soluções que possam automatizar seus processos, facilitando o dia a dia da organização, o qual resulta no aumento de nível dos meios de produção organizacional e da gestão.
          </div>
      </div>

      <div className={styles.card}>
          <div className={styles.header}>
              <PeopleAltTwoTone
              style={{ color: '#833DF4' }}
                className={styles.icon}
              />
          </div>
          <div className={styles.title}>
            Consultoria Científica
          </div>
          <div className={styles.line}></div>
          <div className={styles.content}>
            Acreditamos na ciência como fundamento prático para a solução de problemas empresariais. Através da análise sistêmica das patologias operacionais encontradas em uma organização, a solução baseada na ciência será proposta, podendo resultar em novos produtos de software que resolvam tais problemas.
          </div>
      </div>
    </div>
  );
}
