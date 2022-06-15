import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../context/FormContext';

export const Final = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleClickChange = () => {
    navigate('/');
  };
  return (
    <C.Container>
      <h1>Obrigado, {state.name}!</h1>
      <h2>Esta é a pagina final da aplicaçao</h2>
      <C.FinalText>
        Iremos te enviar uma proposta de emprego nível{' '}
        {state.level === 1 ? 'Programador' : 'Iniciante'} pelo email:{' '}
        {state.email}. Vamos analizar seu github: {state.github} para ver em
        qual area voce se encaixa.
      </C.FinalText>

      <button onClick={handleClickChange}>Voltar</button>
    </C.Container>
  );
};
