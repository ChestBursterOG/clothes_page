import styles from "./Container3.module.css"
import mainstyles from "@/components/global.module.css"


const Container4 = () => {

    return (
        <div className={`${mainstyles.maincontainer} ${styles.main}`}>
            <div className={mainstyles.ubercontainer}>
                <h1 className={mainstyles.title}>
                    Haftowane elementy
                </h1>
                <div className={mainstyles.container}>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>Aplikacje haftowane</p>
                        <p className={mainstyles.description}>Dodaj trochę blasku i
                            elegancji do swojej garderoby
                            za pomocą haftowanych
                            aplikacji. Możesz je
                            zamocować na swetrze,
                            spódnicy lub kurtce.
                        </p>
                    </div>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>Haftowane mankiety</p>
                        <p className={mainstyles.description}>Podkreśl swój styl z
                            precyzyjnie wyhaftowanymi
                            mankietami. Dodająone
                            unikalności i elegancji do
                            każdej bluzki czy sukienki.
                        </p>
                    </div>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>Kieszonki haftowane</p>
                        <p className={mainstyles.description}>Zamień zwykłe ubranie w
                            modny i stylowy element
                            garderoby dzięki haftowanym
                            kieszonkom. Dodadząone
                            oryginalności i wyjątkowości
                            Twojemu lookowi.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Container4;