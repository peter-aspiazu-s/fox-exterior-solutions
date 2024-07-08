import { FC, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const CountUp: FC<{ value: number }> = ({ value }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const animationDuration = 2000; // Duración de la animación en milisegundos
        const framesPerSecond = 60; // Cuadros por segundo para la animación
        const totalFrames = Math.ceil(animationDuration / 1000 * framesPerSecond); // Número total de cuadros
    
        const valueIncrement = Math.ceil(value / totalFrames); // Incremento para cada cuadro
    
        let frame = 0;
    
        const interval = setInterval(() => {
          if (currentValue < value) {
            setCurrentValue((prevValue) => prevValue + valueIncrement);
          } else {
            setCurrentValue(value);
            clearInterval(interval);
          }
    
          frame++;
    
          if (frame >= totalFrames) {
            setCurrentValue(value);
            clearInterval(interval);
          }
        }, 3000 / framesPerSecond);
    
        return () => clearInterval(interval);
      }, [value, currentValue]);

    return <>{currentValue}</>;
};

export const AmountOfWorkDone: FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación se activa solo una vez
        threshold: 0.5, // Umbral para determinar cuándo el componente es visible
    });

    return (
        <div className="amountofworkdone">
            <div className="amountofworkdone__container" ref={ref}>
                <div className="amountofworkdone-title">
                    Strength in Numbers
                    <span></span>
                </div>
                <div className="amountofworkdone__paragraph">
                    We have crews out all 4 seasons, and we never take deposits - you won't pay us until the job is complete. If you need a new roof, siding, windows, gutters or trim, there's no better time to call us. Trust Besroi - our strength is in the numbers. Call us today!
                </div>
                <div className="amountofworkdone__container-quantityworks">
                    <div className="amountofworkdone__quantityworks">
                        <div className="amountofworkdone__quantityworks-animation">
                            {inView ? <CountUp value={1500} /> : 0}+
                        </div>
                        <div className="amountofworkdone__quantityworks-text">Roofs installed each year in WNY.</div>
                    </div>
                    <div className="amountofworkdone__quantityworks">
                        <div className="amountofworkdone__quantityworks-animation">
                            {inView ? <CountUp value={1000} /> : 0}+
                        </div>
                        <div className="amountofworkdone__quantityworks-text">Siding projects installed each year in WNY.</div>
                    </div>
                    <div className="amountofworkdone__quantityworks">
                        <div className="amountofworkdone__quantityworks-animation">
                            {inView ? <CountUp value={750} /> : 0}+
                        </div>
                        <div className="amountofworkdone__quantityworks-text">Trim & gutter projects installed each year in WNY.</div>
                    </div>
                    <div className="amountofworkdone__quantityworks">
                        <div className="amountofworkdone__quantityworks-animation">
                            {inView ? <CountUp value={65} /> : 0}+
                        </div>
                        <div className="amountofworkdone__quantityworks-text">Years in business, serving Buffalo and Rochester.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
