import mainstyles from "@/components/global.module.css"


const Container4 = () => {

    return (
        <div className={`${mainstyles.maincontainer}`}>
            <div className={mainstyles.card2}>
            <img className={mainstyles.mainimage} src="variety.jpg" />
                <p className={mainstyles.title}>Indywidualne realizacje</p>
                <p>Mamy dla Ciebie opcję dostosowania naszych ubrań do Twojego indywidualnego stylu. Możesz wybrać gotowe wzory lub przesłać nam swój własny projekt. Nasza ekipa z przyjemnością pomoże Ci stworzyć unikatowe ubrania, które będą idealnie oddawać Twoją wizję i markę.</p>

                <button id={mainstyles.abtn1} className={mainstyles.achromaticbutton}>Prześlij projekt</button>
            </div>
        </div>
    );
};

export default Container4;