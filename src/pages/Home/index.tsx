import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { InputText } from 'primereact/inputtext';

import { Cards } from "../../components/Cards";

import styles from "./style.module.scss";

import Icon from "../../assets/icon.png";
import InfoOne from "../../assets/infoOne.png";
import InfoTwo from "../../assets/infoTwo.jpg";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const [name, setName] = useState('');

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div className={styles.container}>
      <div className={styles.header}>

          <div className={styles.contentHeaderLeft}>
            {/* <img className={styles.logo} src={Logo} alt="logo"/> */}
            <div className={styles.titleHeaderLeft}>
              MBR Tech Soluções Inteligentes
            </div>
            
            <div className={styles.textHeaderLeft}>
                <span>Torne sua empresa digital.</span>
                <span style={{ paddingLeft: '100px' }}>Torne sua empresa acessível a novos negócios.</span>
                <span>Torne-se competitivo no mercado.</span>
            </div>
          </div>
          <div className={styles.contentHeaderRight}>
            <img src={Icon} alt="Icon" className={styles.icon}/>
          </div>
          
      </div>
      
      <div className={styles.sectionSolutions}>
        <div className={styles.titleSolutions}>
          Nossas Soluções
        </div>
        <div className={styles.contentSolutions}>
          <Cards />
        </div>
      </div>

      <div className={styles.sectionInformation}>
        <div className={styles.contentInformation}>
          <div className={styles.contentLeft}>
            <img src={InfoOne} alt="information_logo" className={styles.imageInformation}/>
          </div>
          <div className={styles.contentRight} style={{ marginLeft: '40px' }}>
            <div className={styles.titleInformation}>
              Engenharia de Software é fundamental
            </div>
            <div className={styles.descInformation}>
              O processo de desenvolvimento de software prevê um protocolo composto por um conjunto de etapas que devem ser seguidas para garantir custo, prazo e qualidade do produto. A integridade, segurança e usabilidade são elementos que não podem ser ignorados. Desse modo, a MBR Tech segue rigorosamente o protocolo previsto, documentando seus produtos através de representações ontológicas e projetos contendo a especificação funcional e arquitetural de seus produtos.
            </div>
          </div>
        </div>

        <div className={styles.contentInformation}>
          <div className={styles.contentLeft}>
            <img src={InfoTwo} alt="information_logo" className={styles.imageInformation}/>
          </div>
          <div className={styles.contentRight} style={{ marginRight: '40px' }}>
            <div className={styles.titleInformation}>
              Software sob demanda é o futuro
            </div>
            <div className={styles.descInformation}>
              Os produtos MBR Tech são exclusivistas. Isso significa que são desenvolvidos sob demanda, de acordo com as necessidades do cliente. Para tanto, o cliente é ator ativo durante todo o processo de desenvolvimento de software. O desenvolvimento ágil permitirá o acesso rápido e ao produto personalizado, para que este se encaixe perfeitamente no domínio da aplicação da organização, garantindo integridade, escalabilidade e performance.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionContact}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className="p-float-label">
              <InputText id="in" value={name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor="in">Username</label>
          </span>
          
          {/* <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>} */}
          
          <input type="submit" />
        </form>
      </div>
      <div className={styles.sectionFooter}>

      </div>
    </div>
  )
}