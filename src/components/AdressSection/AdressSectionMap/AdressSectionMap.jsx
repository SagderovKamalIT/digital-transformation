import { useEffect } from "react";
import styles from "./AdressSectionMap.module.scss";

import uniMark from "../../../assets/images/AdressSection/university.png"

const AdressSectionMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=fdd1faee-f6d8-4e6b-bfdf-251c073826ce";
    script.async = true;

    script.onload = () => {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map("map-test", {
          center: [55.652168103714395, 37.49959758962493],
          zoom: 17,
          controls: [],
        });

      
        const placemark = new window.ymaps.Placemark(
          [55.652168103714395, 37.49959758962493],
          {
            hintContent: "РУДН",
            balloonContent: "РУДН"
          },
          {
            iconLayout: 'default#image',
            iconImageHref: uniMark, 
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40]
          }
        );

        map.geoObjects.add(placemark);

       
        map.behaviors.disable('scrollZoom');

      
        map.controls.remove('geolocationControl');
        map.controls.remove('searchControl');
        map.controls.remove('trafficControl');
        map.controls.remove('typeSelector');
        map.controls.remove('fullscreenControl');
        map.controls.remove('zoomControl');
        map.controls.remove('rulerControl');

        
        const panes = map.panes.get('ground');
        panes.getElement().style.filter = 'invert(90%) brightness(80%)';

  
        const copyrightPane = map.panes.get('copyrights');
        copyrightPane.getElement().style.display = 'none';
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map-test" className={styles.map}></div>;
};

export default AdressSectionMap;
