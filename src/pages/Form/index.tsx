import { Content } from "../../components/Content";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputContainer, InputField, Label, SelectField, FormContainer } from "./styles";
import { useEffect, useState } from "react";
import formService from "../../services/formService";
import { useNavigate } from "react-router-dom";


type Inputs = {
  nome: string;
  cpf: string;
  cargo: string;
  email: string;
  municipio: string;
};

const Form = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const response = await formService.addForm(data);
    console.log(response);

    const { verification_code, form_id } = response;
    navigate("/confirm", { state: { verification_code: verification_code, form_id: form_id } });
  }

  // Estado para armazenar municípios da API
  const [municipios, setMunicipios] = useState<string[]>([]);

  const getMunicipios = async () => {
    try {
      const data = await formService.getMunicipios();
      setMunicipios(data.municipios || []);
    } catch (error) {
      console.error("Failed to get municipios:", error);
    }
  }

  useEffect(() => {
    // Buscar lista de municípios da API Flask
    getMunicipios();
  }, []);

  const cargos = [
    "Prefeito", "Secretário de Finanças", "Contador"
  ];

  return (
    <Content>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <InputContainer>
            <Label>Nome</Label>
            <InputField placeholder="Preencha aqui seu Nome" {...register("nome", { required: true })} />
            {errors.nome && <span className="error">Este campo é obrigatório</span>}
          </InputContainer>

          <InputContainer>
            <Label>CPF</Label>
            <InputField placeholder="Preencha aqui seu CPF" {...register("cpf", { required: true })} />
            {errors.cpf && <span className="error">Este campo é obrigatório</span>}
          </InputContainer>

          <InputContainer>
            <Label>Cargo</Label>
            <SelectField {...register("cargo", { required: true })}>
              <option value="">Selecione um cargo</option>
              {cargos.map((cargo) => (
                <option key={cargo} value={cargo}>
                  {cargo}
                </option>
              ))}
            </SelectField>
            {errors.cargo && <span className="error">Este campo é obrigatório</span>}
          </InputContainer>

          <InputContainer>
            <Label>E-mail</Label>
            <InputField placeholder="Preencha aqui seu E-mail" {...register("email", { required: true })} />
            {errors.email && <span className="error">Este campo é obrigatório</span>}
          </InputContainer>

          <InputContainer>
            <Label>Município</Label>
            <SelectField {...register("municipio", { required: true })}>
              <option value="">Selecione um município</option>
              {municipios.map((municipio, idx) => (
                <option key={`${municipio}-${idx}`} value={municipio}>
                  {municipio}
                </option>
              ))}
            </SelectField>
            {errors.municipio && <span className="error">Este campo é obrigatório</span>}
          </InputContainer>
        </FormContainer>
        <InputField style={{ marginTop: 15 }} type="submit" value="Cadastrar" className="btn btn-primary"/>
      </form>
    </Content>
  );
};

export default Form;