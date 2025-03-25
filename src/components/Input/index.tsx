import { InputField } from './styles';

interface InputProps {
    type: string;
    onChange?: () => any;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    others?: any[];
};

const Input = ({ type, onChange, placeholder, required, disabled, others }: InputProps) => {
    return (
        <InputField type={type} required={required} onChange={onchange} placeholder={placeholder ? placeholder : "Fill here..."} disabled={disabled ? disabled : false} {...others}/>
    );
};

export default Input;