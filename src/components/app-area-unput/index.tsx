import './index.scss';

interface AppAreaInputProps {
    placeholder?: string;
    onChanges: (value: string) => void; 
}

export const AppAreaInput = (props: AppAreaInputProps) => {
    return (
        <textarea
            onChange={(e) => console.log(e)}
            className='app-area-input'/>
    )
}