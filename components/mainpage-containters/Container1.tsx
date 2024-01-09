import styles from "./Container1.module.css"
import mainstyles from "@/components/global.module.css"


const Container1 = () => {

    return (
        <div className={`${mainstyles.maincontainer} ${styles.main}`}>
            <h1 className={styles.title}>
                Haftowana odziez jako produkt
            </h1>
            <p className={styles.description}>
                W naszej ofercie znajdziesz wyjątkową odzież haftowaną na zamówienie. Zapewniamy niepowtarzalne
                wzory, haftowane elementy oraz unikatowe produkty korzystające z technologii NFT-C. Śledź
                popularne style i trendy!
            </p>
            <button className={`${mainstyles.achromaticbutton} ${styles.button1}`}>
                Zamów teraz
            </button>

        </div>
    );
};

export default Container1;