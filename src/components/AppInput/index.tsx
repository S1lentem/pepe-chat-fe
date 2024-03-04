import './index.css';

interface AppInputProps {
    label: string;
    type: 'text' | 'password';
    onChange: (value: string) => void;
}

export const AppInput : React.FunctionComponent<AppInputProps> = ({label, type, onChange} : AppInputProps) => {
    return (
        <div className='input-container'>
            <label>{label}</label>
            <input type={type} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}