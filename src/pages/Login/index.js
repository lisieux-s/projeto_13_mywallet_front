import { Routes } from 'react-router-dom';
import StyledLink from '../../components/StyledLink';


export default function Login() {
  return (
    <>
      <div className='logo'>MyWallet</div>
      <form>
        <input />
        <input />
        <button>Entrar</button>
      </form>
      <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </>
  );
}
