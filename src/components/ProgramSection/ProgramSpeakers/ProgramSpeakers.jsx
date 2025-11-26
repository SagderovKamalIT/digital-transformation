import styles from "./ProgramSpeakers.module.scss";
import ProgramSpeakersCard from "./ProgramSpeakersCard/ProgramSpeakersCard";

import ebzeeva from '../../../assets/images/ProgramSpeakers/Эбзеева_Юлия.png';
import kvashin from '../../../assets/images/ProgramSpeakers/Квашин_Александ.png';
import ostrovskaya from '../../../assets/images/ProgramSpeakers/Островская_Анна.png';
import volkov from '../../../assets/images/ProgramSpeakers/Волков_Владимир.png';
import kislov from '../../../assets/images/ProgramSpeakers/Кислов_Алексей.png';
import konstantin from '../../../assets/images/ProgramSpeakers/Константин_Христофор.png';
import gerneshiy from '../../../assets/images/ProgramSpeakers/Гернешний_Василий.png';
import goryanov from '../../../assets/images/ProgramSpeakers/Горянов_Константин.png';
import gerneshiyV from '../../../assets/images/ProgramSpeakers/Гернеший_ВасилийВ.png';
import krasnorutskaya from '../../../assets/images/ProgramSpeakers/krasnorutskaya.png';


export const speakersData  = [
  { name: "Эбзеева Юлия Николаевна", src: ebzeeva, alt: "Эбзеева Юлия", text: ["Первый проректор –\n проректор по образовательной деятельности РУДН"] },
  { name: "Квашин Александр Дмитриевич", src: kvashin, alt: "Квашин Александр", text: ["Директор по цифровизации РУДН"] },
  { name: "Островская Анна Александровна", src: ostrovskaya, alt: "Островская Анна", text: ["Директор \nВысшей школы управления РУДН"] },
  { name: "Кислов Алексей Сергеевич", src: kislov, alt: "Кислов Алексей", text: ["Директор департамента развития \nпрактики ERP, 1C"] },
  { name: "Волков Илья Владимирович", src: volkov, alt: "Волков Владимир", text: ["Эксперт в области маркетинга \nи цифровых коммуникаций", "Исполнительный директор Points Lab"] },
  { name: "Красноруцкая Милена Владимировна", src: krasnorutskaya, alt: "Красноруцкая Милена Владимировна", text: ["Операционный директор ООО «Пуск» "] }
];

export const speakersDataPart2 = [

   { name: "Константиниди Христофор Александрович", src: konstantin, alt: "Константиниди Христофор Александрович", text: ["Заведующий кафедрой \nтуризма и сервиса \nВысшей школы управления РУДН"] },

     { name: "Гернеший Василий Васильевич", src: gerneshiy, alt: "Гернеший Василий Васильевич", text: ["Заместитель директора \nВысшей школы управления РУДН"] },

      { name: "Горяинов Константин Станиславович", src:  goryanov, alt: "Горяинов Константин Станиславович", text: ["Исполнительный директор \nООО «Сафмар плаза»", "Генеральный менеджер отеля «Националь»"] },


        { name: "Тимохов Федор Дмитриевич", src: gerneshiyV, alt: "Тимохов Федор Дмитриевич", text: ["Менеджер по продвижению TravelLine" ]}

]


const ProgramSpeakers = ({ data }) => {
  return (
    <div className={styles.speakers}>
      <div className={styles.speakers__list}>
        {data.map((s, i) => (
          <ProgramSpeakersCard 
            key={i}
            src={s.src}
            alt={s.alt}
            name={s.name}
          >
            {s.text}
          </ProgramSpeakersCard>
        ))}
      </div>
    </div>
  );
};

export default ProgramSpeakers;


