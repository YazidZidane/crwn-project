import './form-input.styles.scss'

export default function FormInput({label, ...others}) {
  return (
    <div className='group'>
      <input className='form-input' {...others} />
      {label && (
        <label
          className={`${others.value.length > 0 ? 'shrink' : ''} 
          form-input-label`}>
          {label}
        </label>
      )}
    </div>
  )
}
