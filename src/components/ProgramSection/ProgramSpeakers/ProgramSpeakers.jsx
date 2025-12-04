import styles from "./ProgramSpeakers.module.scss";
import ProgramSpeakersCard from "./ProgramSpeakersCard/ProgramSpeakersCard";


import kvashin from '../../../assets/images/ProgramSpeakers/Квашин_Александ.png';
import ostrovskaya from '../../../assets/images/ProgramSpeakers/Островская_Анна.png';
import volkov from '../../../assets/images/ProgramSpeakers/Волков_Владимир.png';
import kislov from '../../../assets/images/ProgramSpeakers/Кислов_Алексей.png';
import gerneshiy from '../../../assets/images/ProgramSpeakers/Гернешний_Василий.png';
import goryanov from '../../../assets/images/ProgramSpeakers/Горянов_Константин.png';
import gerneshiyV from '../../../assets/images/ProgramSpeakers/Гернеший_ВасилийВ.png';
import krasnorutskaya from '../../../assets/images/ProgramSpeakers/krasnorutskaya.png';


export const speakersData  = [
  { name: "Квашин Александр Дмитриевич", src: kvashin, alt: "Квашин Александр", text: ["Модератор\n \nДиректор по цифровизации РУДН"] },
  { name: "Островская Анна Александровна", src: ostrovskaya, alt: "Островская Анна", text: ["Директор \nВысшей школы управления РУДН"] },
  { name: "Кислов Алексей Сергеевич", src: kislov, alt: "Кислов Алексей", text: ["Директор департамента развития \nпрактики ERP, 1C"] },
  { name: "Волков Илья Владимирович", src: volkov, alt: "Волков Владимир", text: ["Эксперт в области маркетинга \nи цифровых коммуникаций", "Исполнительный директор Points Lab"] },
  { name: "Красноруцкая Милена Владимировна", src: krasnorutskaya, alt: "Красноруцкая Милена Владимировна", text: ["Операционный директор ООО «Пуск» "] }
];

export const speakersDataPart2 = [

        { name: "Горяинов Константин Станиславович", src:  goryanov, alt: "Горяинов Константин Станиславович", text: ["Модератор \n \nИсполнительный директор \nООО «Сафмар плаза»", "Генеральный менеджер отеля «Националь»"] },


     { name: "Гернеший Василий Васильевич", src: gerneshiy, alt: "Гернеший Василий Васильевич", text: ["Заместитель директора \nВысшей школы управления РУДН"] },



        { name: "Тимохов Федор Дмитриевич", src: gerneshiyV, alt: "Тимохов Федор Дмитриевич", text: ["Директор по продвижению TravelLine" ]}

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


