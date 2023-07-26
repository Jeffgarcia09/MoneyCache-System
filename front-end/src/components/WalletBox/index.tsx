import { Container } from "./styles";

import dollarImg from '../../assets/dolar.svg';
import arrowup from '../../assets/arrow-up.svg';
import arrowdown from '../../assets/arrow-down.svg';
import { useMemo } from "react";

import CountUp from 'react-countup';

interface Icons {
    icon: 'dollar' | 'arrowup' | 'arrowdown'
}

type WalletBoxTypeProps = {
    title: string
    amount: number
    footerLabel: string
    icon: Icons["icon"]
    color: string
}

function WalletBox({ title, amount, footerLabel, icon, color }: WalletBoxTypeProps) {
    const iconSelected = useMemo(() => {
        if (icon === 'dollar') return dollarImg
        if (icon === 'arrowdown') return arrowdown
        return arrowup
    }, [])

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp end={amount} prefix={"$ "} separator="." decimal="," decimals={2}/>
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected ?? dollarImg} alt={title} />
        </Container>
    );
}

export default WalletBox;