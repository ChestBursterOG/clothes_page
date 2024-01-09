"use client"

import styles from "./Container3.module.css"
import mainstyles from "@/components/global.module.css"
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';



const Container3 = () => {


    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const containerTop = containerRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (containerTop < windowHeight * 0.8) {
                    setIsInView(true);
                }
            }
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check when the component mounts
        handleScroll();

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={containerRef} className={`${mainstyles.maincontainer} ${styles.main}`}>
            <div className={mainstyles.ubercontainer}>
                <h1 className={mainstyles.title}>
                    Inspiracje
                </h1>
                <div className={mainstyles.container}>
                    <div className={mainstyles.card}>
                        <img className={mainstyles.image} src="/main/flowers.jpg" />
                        <p className={mainstyles.subtitle}>Wejscie w naturę</p>
                        <p className={mainstyles.description}>Wzory inspirowane pięknem
                            przyrody. Odkryj haftowane
                            motywy kwiatowe i roślinne,
                            które dodadzą Twojej
                            garderobie świeżości i
                            delikatności.
                        </p>
                    </div>
                    <div className={mainstyles.card}>
                        <img className={mainstyles.image} src="/main/shapes.jpg" />
                        <p className={mainstyles.subtitle}>Geometryczne inspiracje</p>
                        <p className={mainstyles.description}>Wzory geometryczne, które
                            nadadzą Twojemu ubraniu
                            nowoczesny i modny wygląd.
                            Doskonałe na wyjątkowe okazje
                            i wieczorne wyjścia.
                        </p>
                    </div>
                    <div className={mainstyles.card}>
                        <img className={mainstyles.image} src="/main/animal.jpg" />
                        <p className={mainstyles.subtitle}>Motywy zwierzęce</p>
                        <p className={mainstyles.description}>Haftowane wzory z motywami
                            zwierzęcymi, które nadadzą
                            Twojej stylizacji charakteru.
                            Wyraź swoją indywidualność za
                            pomocą tychoryginalnych
                            wzorów.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Container3;