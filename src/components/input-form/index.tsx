import './index.scss';

interface InputFormData {
    onSubmit: () => void,
    buttonText: string,
    children: React.ReactNode,
}

export const InputFrom = (input: InputFormData) => {
    return (
        <div className='fields-container'>
            {input.children}
            <div className='button-container'>
                <button onClick={input.onSubmit} >{input.buttonText}</button>
            </div>
        </div>
    );
}