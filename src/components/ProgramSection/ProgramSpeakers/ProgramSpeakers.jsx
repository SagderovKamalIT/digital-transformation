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


export const speakersData  = [
  { name: "Эбзеева Юлия Николаевна", src: ebzeeva, alt: "Эбзеева Юлия", text: ["Первый проректор –\n проректор по образовательной деятельности РУДН,", "зав. кафедрой\n иностранных языков филологического факультета"] },
  { name: "Квашин Александр Дмитриевич", src: kvashin, alt: "Квашин Александр", text: ["Директор по цифровизации", "Кандидат экономических наук"] },
  { name: "Островская Анна Александровна", src: ostrovskaya, alt: "Островская Анна", text: ["Директор Высшей школы управления РУДН", "зав. кафедрой\n прикладной экономики ВШУ", "Кандидат экономических наук"] },
  { name: "Волков Илья Владимирович", src: volkov, alt: "Волков Владимир", text: ["Эксперт в области маркетинга \nи цифровых коммуникаций", "Исполнительный директор Points Lab"] },
  { name: "Кислов Алексей Сергеевич", src: kislov, alt: "Кислов Алексей", text: ["Директор департамента развития практики ERP, 1C"] }
];

export const speakersDataPart2 = [

   { name: "Константиниди Христофор Александрович", src: konstantin, alt: "Константиниди Христофор Александрович", text: ["Зав. кафедрой туризма и сервиса ВШУ, ", "Кандидат экономических наук"] },

     { name: "Гернеший Василий Васильевич", src: gerneshiy, alt: "Гернеший Василий Васильевич", text: ["Заместитель директора \nВысшей школы управление РУДН,", "Кандидат военных наук"] },

      { name: "Горяинов Константин Станиславович", src:  goryanov, alt: "Горяинов Константин Станиславович", text: ["Исполнительный директор ООО «Сафмар плаза»", "Генеральный менеджер отеля «Националь»", "Заместитель Председателя экспертного совета комитета \nГосударственной думы РФ \nпо туризму и развитию туристической инфраструктуры"] },


        { name: "Гернеший Василий Васильевич", src: gerneshiyV, alt: "Гернеший Василий Васильевич", text: ["Менеджер по продвижению TraveiLine" ]}

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


