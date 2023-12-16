import './index.scss';

interface InputFormData {
    fields: JSX.Element[],
    onSubmit: () => void,
    buttonText: string,
}

export const InputFrom = (input: InputFormData) =>{
    return (
        <div className='fields-container'>
            {input.fields}
            <div className='button-container'>
                <button onClick={input.onSubmit} >{input.buttonText}</button>
            </div>
        </div>
    );
}