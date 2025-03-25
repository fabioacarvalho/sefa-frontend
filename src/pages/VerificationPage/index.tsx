// VerificationPage.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import formService from "../../services/formService";
import { toast } from 'react-toastify';


const VerificationPage = () => {
    const location = useLocation();
    const { verification_code, form_id } = location.state || {};

    const [code, setCode] = useState(['', '', '', '', '', '']);
    const navigate = useNavigate();

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value.slice(0, 1); // Apenas 1 número por campo
    setCode(newCode);
  };

  const handleSubmit = async () => {
    const verificationCode = code.join('');
    if (verificationCode.length === 6) {
        console.log('Verificando código:', verificationCode);
        console.log('Verificando form id:', form_id);
        await formService.verifyCode(verificationCode, form_id)
            .then((response) => {
                console.log('Código verificado:', response);
                navigate('/');
                toast.success('Código verificado e formulário salvo com sucesso!');

            })
            .catch((error) => {
                toast.error('O código informado é inválido.');

                console.error('Erro ao verificar código:', error);
            });
    } else {
      console.log('Código incompleto');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
        <h2>Verificação de Código</h2>
        <p>Informe o código de verificação enviado para o seu e-mail: {verification_code}</p>
        <div style={styles.inputContainer}>
            {code.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    style={styles.input}
                />
            ))}
        </div>
        <div style={styles.buttonContainer}>
            <button onClick={handleSubmit} style={styles.button}>Confirmar</button>
            <button onClick={handleCancel} style={{ backgroundColor: '#F05365;' }} className='btn btn-danger'>Cancelar</button>
        </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    width: '40px',
    height: '40px',
    fontSize: '20px',
    textAlign: 'center',
    border: '2px solid #ccc',
    borderRadius: '8px',
    outline: 'none',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default VerificationPage;