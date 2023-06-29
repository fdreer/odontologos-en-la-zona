import {useEffect, useMemo, useRef, useState} from 'react'

function useForm({notify}) {
  const initialValues = useMemo(() => {
    return {
      nameAndLastName: '',
      email: '',
      comment: '',
    }
  }, [])

  const isFirstRender = useRef(true)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let newErrors = {nameAndLastName: false, email: false, comment: false}

    const regexNombre = /^[a-zA-Z]+$/
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!regexNombre.test(values.nameAndLastName)) {
      newErrors = {...newErrors, nameAndLastName: true}
    } else {
      newErrors = {...newErrors, nameAndLastName: false}
    }

    if (!regexEmail.test(values.email)) {
      newErrors = {...newErrors, email: true}
    } else {
      newErrors = {...newErrors, email: false}
    }

    if (values.comment.length < 5 || values.comment.length > 200) {
      newErrors = {...newErrors, comment: true}
    } else {
      newErrors = {...newErrors, comment: false}
    }

    setErrors(newErrors)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false // Ignorar el primer renderizado
      return
    }

    const hasErrors = () => {
      return Object.values(errors).includes(true)
    }

    if (hasErrors()) {
      console.log('Tiene errores')
      return
    } else {
      notify()
    }
  }, [errors])

  return {values, errors, validateForm, setValues}
}
export default useForm
