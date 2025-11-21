import styles from "./Footer.module.scss"


const Footer = () => {
  return (

    <div className={styles.footer} >

      <div className={styles.section__wrap} >

        <div className={styles.footer__container} >

          <span className={styles.footer__containerSpan} >

          </span>
          
          <div className={styles.footer__text} >

            <a className={styles.footer__textLink} href="https://www.rudn.ru/storage/media/documents/e1bee4fb-c76b-46e2-9a94-4a81c0037db3/HF49MKfGpR7GqAoseQSjFQGbuRuBjWwsLrdCqGax.pdf" target="_blank" rel="noopener noreferrer">

              Политика конфиденциальности

            </a>

            <p className={styles.footer__textParagraph} >
              © 2006-2025 Российский университет дружбы народов им. Патриса Лумумбы
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}
export default Footer;