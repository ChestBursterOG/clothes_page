
import mainstyles from "@/components/global.module.css"


const Container2 = () => {

    return (
        <div className={`${mainstyles.maincontainer} `}>
            <div className={mainstyles.ubercontainer}>
                <h1 className={mainstyles.title}>
                    Nasza oferta
                </h1>
                <div className={mainstyles.container}>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>T-shirty</p>
                        <img className={mainstyles.image} src="/offer/t-shirt.jpg" />
                    </div>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>Bluzy</p>
                        <img className={mainstyles.image} src="/offer/hoodie.jpg" />
                    </div>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>Spódnice</p>
                        <img className={mainstyles.image} src="/offer/skirt.jpg" />
                    </div>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>Sukienki</p>
                        <img className={mainstyles.image} src="/offer/dress.jpg" />
                    </div>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>Jeansy</p>
                        <img className={mainstyles.image} src="/offer/jeans.jpg" />
                    </div>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>Kamizelki</p>
                        <img className={mainstyles.image} src="/offer/vest.jpg" />
                    </div>
                    <div className={mainstyles.card}>
                        <p className={mainstyles.subtitle}>Plecaki</p>
                        <img className={mainstyles.image} src="/offer/backpack.jpg" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Container2;