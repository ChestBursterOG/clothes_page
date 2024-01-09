import styles from "./Container3.module.css"
import mainstyles from "@/components/global.module.css"


const Container5 = () => {

    return (
        <div className={`${mainstyles.maincontainer} ${styles.main}`}>
            <div className={mainstyles.ubercontainer}>
                <h1 className={mainstyles.title}>
                    Popularne style i trendy
                </h1>
                <div className={mainstyles.container}>
                    <div className={mainstyles.card}>
                        <img className={mainstyles.image} src="/main/boho.jpg" />
                        <p className={mainstyles.subtitle}>Boho chic</p>
                        <p className={mainstyles.description}>Wyraź swój indywidualizmi
                            stylizuj się wduchu boho chic.
                            Haftowane elementy w
                            połączeniu z luźnymi fasonami
                            to idealne połączenie.
                        </p>
                    </div>
                    <div className={mainstyles.card}>
                        <img className={mainstyles.image} src="/main/vintage.jpg" />
                        <p className={mainstyles.subtitle}>Vintage look</p>
                        <p className={mainstyles.description}>Wróć do przeszłości z haftami w
                            stylu vintage. Dodaj swoim
                            stylizacjomodrobinę nostalgii i
                            elegancji.
                        </p>
                    </div>
                    <div className={mainstyles.card}>
                        <img className={mainstyles.image} src="/main/streetwear.jpg" />
                        <p className={mainstyles.subtitle}>Streetwear</p>
                        <p className={mainstyles.description}>Haftowane ubrania nie tylko na
                            wyjątkoweokazje - również i w
                            miejskim stylu! Kombinuj i
                            wyrażaj swoją kreatywność w
                            codziennych lookach.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Container5;