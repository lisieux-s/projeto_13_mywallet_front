import { Container } from './style'
import EXIT from '../../assets/exit.png'

export default function Header() {
    return(
        <Container>
            <h1>header</h1>
            <img src={EXIT} alt='exit' />
        </Container>
    )
}