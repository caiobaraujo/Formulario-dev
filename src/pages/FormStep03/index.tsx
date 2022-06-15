import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../context/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep03 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleFinalStep = () => {
    if (state.email !== '' && state.github !== '') {
      navigate('/final');
    } else {
      alert('Preencha os dados.');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato</p>

        <hr />
        <label>
          Qual o seu e-mail?
          <input type="text" value={state.email} onChange={handleEmailChange} />
        </label>
        <label>
          Qual o seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGitHubChange}
          />
        </label>

        <Link to="/step02" className="backButton">
          Voltar
        </Link>
        <button onClick={handleFinalStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
