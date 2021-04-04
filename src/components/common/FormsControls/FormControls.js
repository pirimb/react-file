import s from './FormControls.module.css'

export const Element = (Element) => ({input, meta, ...props}) => {
    const hasError = meta.error &&  meta.touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')} >
            <div>
                <Element {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = Element('input')
export const Textarea = Element('textarea')
