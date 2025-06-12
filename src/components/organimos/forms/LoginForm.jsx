import { useForm } from 'react-hook-form'
import { useLogin } from '../../../hooks/useLogin'
import { useNavigate } from 'react-router'

export const LoginForm = () => {
  const { login } = useLogin()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors}, reset} = useForm(
    {
      mode: 'onChange'
    }
  )

  const onSubmit = async(data) => {
    console.log(data);
    await login(data)
    reset()
  }

  const goToRegisterForm=()=>{
    navigate('/register')
    console.log('Hola')
  }
    return (
    <div className="bg-white rounded-lg shadow-lg ml-50 mt-50 h-100 w-100 p-8" >

      <div className="flex flex-col justify-center items-center space-y-2">
        <h2 className="text-2xl font-medium text-slate-700">Bienvenido de nuevo</h2>
        <p className="text-slate-500">Ingresa tus datos</p>
      </div>

      <form className="w-full mt-4 space-y-3" onSubmit={handleSubmit(onSubmit)}>

        <div>
          <input 
            className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" 
            placeholder="Username" 
            id="username" 
            name="username" 
            type="text" 
            {...register('userLogin', {
              required: {
                value: true,
                message: 'Usuario o email es obligatorio',
              }
            })}
          />
          {errors.userLogin && <span className="text-red-500 text-sm">{errors.userLogin.message}</span>}
        </div>

        <div>
          <input 
            className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" 
            placeholder="Password" 
            id="password" 
            name="password" 
            type="password" 
            {...register('password', {
              required: {
                value: true,
                message: 'La contraseña es obligatoria',
              }
            })}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input className="mr-2 w-4 h-4" id="remember" name="remember" type="checkbox" />
            <span className="text-slate-500">Remember me </span>
          </div>
          <a className="text-blue-500 font-medium hover:underline" href="*">Forgot Password</a>
        </div>

        <button 
          className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2" 
          id="login" 
          name="login" 
          type="submit"
        >
          login
        </button>
      </form>
            <br/>
      <button onClick={goToRegisterForm}
          className='w-full justify-center py-1 bg-blue-300 hover:bg-blue-400 active:bg-blue-300 rounded-md text-white ring-2'
          id="register"
          name='register'
          type='submit'
        >
          Registrarse
        </button>
    </div>
  )
}
