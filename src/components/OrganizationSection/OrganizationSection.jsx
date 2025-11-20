import styles from "./OrganizationSection.module.scss";
import OrgCard from "./OrgSectionCard/OrgSectionCard";

const OrganizationSection = () => {
  return (
    <section className={styles.organization}>
      <div className={styles.section__wrap}>
        <div className={styles.organization__container}>
          <OrgCard>
            <div className={styles.organization__content}>
              <h3>Организационный комитет:</h3>
              <ul className={styles.organization__list} >
                <li className={styles.organization__listElement} >
                  <strong>Председатель</strong>
                  <span className={styles.organization__listSpan} >директор ВШУ, к.э.н., доц.</span>
                  <p className={styles.organization__listParagraph} >Островская Анна Александровна</p>
                </li>
                <li className={styles.organization__listElement}  >
                  <strong>Зам. председателя</strong>
                  <span className={styles.organization__listSpan}  >
                    зам. директора по научной работе и международной деятельности
                    ВШУ, к.с.ц.
                    
                  </span>
                  <p className={styles.organization__listParagraph} >
                      Чистяков Денис Игоревич</p>
                </li>
                <li className={styles.organization__listElement}  >
                  Зам. председателя
                  <span className={styles.organization__listSpan}  >
                    зав. кафедрой математического моделирования и информационных
                    технологий ВШУ, к.э.н., доц.
                  </span>
                  <p className={styles.organization__listParagraph} >Кокуйцева Татьяна Владимировна</p>
                </li>
              </ul>
            </div>
          </OrgCard>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
