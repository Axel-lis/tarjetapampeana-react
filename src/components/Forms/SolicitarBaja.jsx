import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FiAlertCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { API_FORMULARIO_BAJA } from '../../components/constants/apis';
import Swal from 'sweetalert2';
import { CiCreditCardOff } from 'react-icons/ci';
const formSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  dni: z.string().regex(/^\d+$/, 'DNI/DNU debe contener solo números').max(9, 'DNI/DNU inválido'),
  direccion: z.string().min(5, 'La dirección debe tener al menos 5 caracteres'),
  localidad: z.string().min(3, 'La localidad debe tener al menos 3 caracteres'),
  provincia: z.string().min(3, 'La provincia debe tener al menos 3 caracteres'),
  telefono: z.string().regex(/^\d{10}$/, 'El teléfono debe tener exactamente 10 dígitos'),
  email: z.string().email('El e-mail no es válido'),
  tarjeta4: z
    .string()
    .regex(/^\d{4}$/, 'Debe ingresar exactamente 4 números')
    .max(4, 'Debe ingresar exactamente 4 números'),
  codigoSeguridad: z.string().regex(/^\d{3}$/, 'Debe ingresar exactamente 3 dígitos'),
  cuentaTarjeta: z.string().regex(/^\d{7}$/, 'La cuenta debe tener exactamente 7 dígitos'),
  motivoBaja: z.string().min(10, 'El motivo debe tener al menos 10 caracteres'),
});

const InputFields = ({ register, errors }) => {
  const inputFields = [
    { name: 'nombre', label: 'Nombre', placeholder: 'Ingrese su nombre' },
    { name: 'apellido', label: 'Apellido', placeholder: 'Ingrese su apellido' },
    { name: 'dni', label: 'DNI/DNU', placeholder: 'Ingrese su DNI', maxLength: 8 },
    { name: 'direccion', label: 'Dirección', placeholder: 'Ingrese su dirección' },
    { name: 'localidad', label: 'Localidad', placeholder: 'Ingrese su localidad' },
    { name: 'provincia', label: 'Provincia', placeholder: 'Ingrese su provincia' },
    { name: 'telefono', label: 'Teléfono', placeholder: 'Ingrese su teléfono', maxLength: 10 },
    { name: 'email', label: 'Email', placeholder: 'Ingrese su email', type: 'email' },
    { name: 'tarjeta4', label: 'Últimos 4 dígitos de tarjeta', placeholder: 'XXXX', maxLength: 4 },
    { name: 'codigoSeguridad', label: 'Código de seguridad', placeholder: 'XXX', maxLength: 3 },
    { name: 'cuentaTarjeta', label: 'Número de cuenta', placeholder: 'XXXXXXX', maxLength: 7 },
    { name: 'motivoBaja', label: 'Motivo de baja', placeholder: 'Ingrese el motivo', textarea: true },
  ];

  return (
    <div className="space-y-4 ">
      {inputFields.map((field) => (
        <div key={field.name} className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label} <span className="text-red-500">*</span>
          </label>
          {field.textarea ? (
            <textarea
              {...register(field.name)}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          ) : (
            <input
              {...register(field.name)}
              type={field.type || 'text'}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
          {errors[field.name] && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <FiAlertCircle className="mr-1" />
              <span>{errors[field.name].message}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FormContainer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(API_FORMULARIO_BAJA, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Formulario enviado!',
          text: 'Formulario enviado con éxito',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        reset();
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Error al enviar el formulario',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Error al enviar el formulario' + error,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="min-h-screen bg-purple-600 flex flex-col items-center justify-center py-12 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Formulario de Baja</h2>

        {isSubmitSuccessful && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
            <CiCreditCardOff className="mr-2 text-2xl text-red-500" />
            Formulario de baja de tarjeta enviado exitosamente!
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputFields register={register} errors={errors} />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Formulario'}
          </button>
        </form>
      </div>
    </div>
  );
};
InputFields.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FormContainer;
