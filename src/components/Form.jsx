import {Toaster, toast} from 'react-hot-toast'
import useForm from '../hooks/useForm'
import SendButton from './SendButton/SendButton'

function FormContact() {
  const notify = () =>
    toast.success(
      `Gracias ${values.nameAndLastName.toLocaleUpperCase()}, te contactaremos cuando antes vía mail :)`
    )
  const {values, errors, validateForm, setValues} = useForm({notify})

  const handleSubmit = e => {
    e.preventDefault()
    validateForm()
  }

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value.trim(),
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="group">
        <input
          placeholder="Nombre y Apellido"
          type="text"
          name="nameAndLastName"
          onChange={handleChange}
        />
        {errors.nameAndLastName && (
          <i className="fa-solid fa-circle-exclamation error-exclamation"></i>
        )}
      </div>
      <div className="group">
        <input placeholder="Email" name="email" onChange={handleChange} />
        {errors.email && (
          <i className="fa-solid fa-circle-exclamation error-exclamation"></i>
        )}
      </div>
      <div className="group">
        <textarea
          placeholder="Escribe tu mensaje..."
          name="comment"
          rows="5"
          onChange={handleChange}
        ></textarea>
        {errors.comment && (
          <i className="fa-solid fa-circle-exclamation error-exclamation"></i>
        )}
      </div>
      <SendButton />
      <Toaster
        containerStyle={{
          position: 'relative',
          top: '40px',
          width: '300px',
        }}
        toastOptions={{
          style: {
            padding: '10px',
            border: '1px solid #242424',
          },
        }}
        reverseOrder={false}
      />
    </form>
  )
}
export default FormContact
