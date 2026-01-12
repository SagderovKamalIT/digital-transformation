import styles from "./ProgramSpeakers.module.scss";
import ProgramSpeakersCard from "./ProgramSpeakersCard/ProgramSpeakersCard";

import kvashin from "../../../assets/images/ProgramSpeakers/Квашин_Александ.png";
import ostrovskaya from "../../../assets/images/ProgramSpeakers/Островская_Анна.png";
import volkov from "../../../assets/images/ProgramSpeakers/Волков_Владимир.png";
import kislov from "../../../assets/images/ProgramSpeakers/Кислов_Алексей.png";
import gerneshiy from "../../../assets/images/ProgramSpeakers/Гернешний_Василий.png";
import goryanov from "../../../assets/images/ProgramSpeakers/Горянов_Константин.png";
import gerneshiyV from "../../../assets/images/ProgramSpeakers/Гернеший_ВасилийВ.png";
import krasnorutskaya from "../../../assets/images/ProgramSpeakers/krasnorutskaya.png";
import volkovv from "../../../assets/images/ProgramSpeakers/Волков.png";
import andreev from "../../../assets/images/ProgramSpeakers/Андреев.png";
import gerber from "../../../assets/images/ProgramSpeakers/Гербер.png";
import oleynik from "../../../assets/images/ProgramSpeakers/Олейник.png";
import shedrov from "../../../assets/images/ProgramSpeakers/Щедров.png";
import borisov from "../../../assets/images/ProgramSpeakers/Борисов.png";
import konstatinov from "../../../assets/images/ProgramSpeakers/konstatinov.png";


export const speakersData = [
  {
    name: "Квашин Александр Дмитриевич",
    src: kvashin,
    alt: "Квашин Александр",
    text: ["Модератор\n \nДиректор по цифровизации РУДН"],
  },
  {
    name: "Островская Анна Александровна",
    src: ostrovskaya,
    alt: "Островская Анна",
    text: ["Директор \nВысшей школы управления РУДН"],
  },

  {
    name: "Кислов Алексей Сергеевич",
    src: kislov,
    alt: "Кислов Алексей",
    text: ["Директор департамента развития \nпрактики ERP, 1C"],
  },

  {
    name: "Волков Илья Владимирович",
    src: volkov,
    alt: "Волков Владимир",
    text: [
      "Эксперт в области маркетинга \nи цифровых коммуникаций",
      "Исполнительный директор \nPoints Lab",
    ],
  },

  {
    name: "Красноруцкая Милена Владимировна",
    src: krasnorutskaya,
    alt: "Красноруцкая Милена Владимировна",
    text: ["Операционный директор ООО «Пуск» "],
  },

  {
    name: "Борисов Роман Борисович",
    src: borisov,
    alt: "Борисов Роман Борисович",
    text: [
      "Директор департамента развития \nи продаж в образовании \n«Группа Астра»  ",
    ],
  },

  {
    name: "Олейник Дмитрий Валерьевич",
    src: oleynik,
    alt: "Олейник Дмитрий Валерьевич",
    text: ["«Сбер» \nРуководитель проектов по цифровому развитию клиентов"],
  },



  {
    name: "Щедров Алексей Александрович",
    src: shedrov,
    alt: "Щедров Алексей Александрович",
    text: ["Директор по развитию бизнеса \nICL Техно"],
  },
];

export const speakersDataPart2 = [
  {
    name: "Горяинов Константин Станиславович",
    src: goryanov,
    alt: "Горяинов Константин Станиславович",
    text: [
      "Модератор \n \nИсполнительный директор \nООО «Сафмар плаза»",
      "Генеральный менеджер отеля «Националь»",
    ],
  },

  {
    name: "Гернеший Василий Васильевич",
    src: gerneshiy,
    alt: "Гернеший Василий Васильевич",
    text: ["Заместитель директора \nВысшей школы управления РУДН"],
  },

  {
    name: "Тимохов Федор Дмитриевич",
    src: gerneshiyV,
    alt: "Тимохов Федор Дмитриевич",
    text: ["Директор по продвижению TravelLine"],
  },

  {
    name: "Гербер Константин Александрович",
    src: gerber,
    alt: "Гербер Константин Александрович",
    text: ["HRS"],
  },

  {
    name: "Волков Кирилл Алексеевич",
    src: volkovv,
    alt: "Волков Кирилл Алексеевич",
    text: ["Директор TRN, \n основатель Travel IT World"],
  },

  {
    name: "Андреев Валентин Александрович",
    src: andreev,
    alt: "Андреев Валентин Александрович",
    text: ["Генеральный директор «Погнали!»"],
  },

     {
    name: "Константинов Никита Сергеевич",
    src: konstatinov,
    alt: "Константинов Никита Сергеевич",
    text: ["Разработчик VISIT RUSSIA"],
  },

  


];

const ProgramSpeakers = ({ data }) => {
  return (
    <div className={styles.speakers}>
      <div className={styles.speakers__list}>
        {data.map((s, i) => (
          <ProgramSpeakersCard key={i} src={s.src} alt={s.alt} name={s.name}>
            {s.text}
          </ProgramSpeakersCard>
        ))}
      </div>
    </div>
  );
};

export default ProgramSpeakers;
