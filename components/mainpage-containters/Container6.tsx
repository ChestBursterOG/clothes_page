import styles from "./Container3.module.css"
import mainstyles from "@/components/global.module.css"


const Container4 = () => {

    return (
        <div className={`${mainstyles.maincontainer} ${styles.main}`}>
            <div className={mainstyles.ubercontainer}>
                <h1 className={mainstyles.title}>
                    Zobacz jakie to proste!
                </h1>
                <div className={mainstyles.container}>
                    <div className={mainstyles.card}>
                        <img className={mainstyles.image} src="/guide/choose.jpg" />
                        <p className={mainstyles.subtitle}>Wybierz produkt</p>
                        <p className={mainstyles.description}>Przejrzyj naszą ofertę i
                            wybierz odzież lub akcesoria,
                            które najbardziej Ci się
                            podobaja.
                        </p>
                    </div>
                    <div className={mainstyles.card}>
                        <img className={mainstyles.image} src="/guide/form.jpg" />
                        <p className={mainstyles.subtitle}>Wypełnij formularz</p>
                        <p className={mainstyles.description}>Wypełnij formularz w masz możliwość przesłać do nas grafikę,
                            omówić swoje preferencje i
                            dokonać zamówienia
                        </p>
                    </div>
                    <div className={mainstyles.card}>
                        <img className={mainstyles.image} src="/guide/realization.jpg" />
                        <p className={mainstyles.subtitle}>Poczekaj na realizację</p>
                        <p className={mainstyles.description}>Nasz zespół szybko zajmie się realizacją
                            Twojego zamówienia. Pozwól
                            nam stworzyć dla Ciebie coś
                            wyjątkowego!
                        </p>
                    </div>
                </div>
                <button className={`${mainstyles.achromaticbutton} ${styles.button1}`}>
                Zamów teraz
            </button>
            </div>
            
        </div>
    );
};

export default Container4;