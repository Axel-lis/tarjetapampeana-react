import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CiCreditCardOff } from 'react-icons/ci';
import { FiAlertCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { API_CYR } from '../../components/constants/apis';

const formSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio').max(30, 'El nombre no puede exceder 30 caracteres'),
  apellido: z.string().min(1, 'El apellido es obligatorio').max(30, 'El apellido no puede exceder 30 caracteres'),
  dni: z
    .string()
    .min(1, 'El número de DNI es obligatorio')
    .regex(/^\d+$/, 'El DNI debe ser un número válido')
    .max(15, 'El DNI no puede exceder 15 dígitos'),
  direccion: z.string().min(1, 'La dirección es obligatoria').max(50, 'La dirección no puede exceder 50 caracteres'),
  localidad: z.string().min(1, 'La localidad es obligatoria').max(50, 'La localidad no puede exceder 50 caracteres'),
  provincia: z.string().min(1, 'La provincia es obligatoria').max(50, 'La provincia no puede exceder 50 caracteres'),
  telefono: z
    .string()
    .min(1, 'El teléfono es obligatorio')
    .regex(/^\+?\d{7,15}$/, 'El teléfono debe ser un número válido'),
  email: z.string().min(1, 'El email es obligatorio').email('Debe ingresar un email válido'),
  consulta: z.string().min(1, 'Debe seleccionar una opción del menú'),
  mensaje: z
    .string()
    .min(1, 'El mensaje adicional es obligatorio')
    .max(500, 'El mensaje no puede exceder 500 caracteres'),
});

const InputFields = ({ register, errors }) => {
  const inputFields = [
    { name: 'nombre', label: 'Nombre', placeholder: 'Ingrese su nombre' },
    { name: 'apellido', label: 'Apellido', placeholder: 'Ingrese su apellido' },
    { name: 'dni', label: 'DNI/DNU', placeholder: 'Ingrese su DNI', maxLength: 15 },
    { name: 'direccion', label: 'Dirección', placeholder: 'Ingrese su dirección' },
    { name: 'localidad', label: 'Localidad', placeholder: 'Ingrese su localidad' },
    { name: 'provincia', label: 'Provincia', placeholder: 'Ingrese su provincia' },
    { name: 'telefono', label: 'Teléfono', placeholder: 'Ingrese su teléfono', maxLength: 15 },
    { name: 'email', label: 'Email', placeholder: 'Ingrese su email', type: 'email' },
    {
      name: 'consulta',
      label: 'Consulta',
      placeholder: 'Seleccione una opción',
      type: 'select',
      options: [
        'No recepción de la tarjeta',
        'Tarjeta bloqueada o inhabilitada',
        'Resumen no recibido o recibido después de vencimiento',
        'Intereses no procedentes o mal aplicados en Tarjeta de Crédito',
        'Cargos / comisiones no procedentes o mal aplicados en Tarjeta de Crédito',
        'Promociones no aplicados o aplicados incorrectamente en Tarjeta de Crédito',
        'Desconocimiento de compras o transacciones',
        'Información crediticia incorrecta a burós de crédito',
        'Información crediticia incorrecta a Central de Deudores del BCRA',
        'Tiempos prolongados de espera en sucursales y centros de atención',
        'Desconsideración, discriminación o modos inadecuados en el trato',
        'Información errónea, sesgada o incompleta sobre condiciones de productos y servicios',
        'Publicidad engañosa',
        'Otros Reclamos en Tarjeta de Crédito',
        'Cargos / comisiones no procedentes o mal aplicados en Préstamo Personal',
        'Intereses mal aplicados en Préstamo Personal',
        'Aplicación de Condiciones NO Pactadas en Préstamo Personal',
        'Producto no solicitado en Préstamo Personal',
        'Otros reclamos en Préstamo Personal',
        'Falta de respuesta al requerimiento de estado de cuenta ó libre deuda',
        'Trato indigno por terceros a cargo de las gestiones de cobro',
        'Costos adicionales por la intervención de tercero en las gestiones de cobro',
        'Otros Reclamos en Gestión de Cobranza',
        'Retenciones y Percepciones impositivas cuestionadas',
        'Seguros contratados accesoriamente a productos financieros',
      ],
    },
    { name: 'mensaje', label: 'Mensaje adicional', placeholder: 'Ingrese su mensaje', textarea: true },
  ];

  return (
    <div className="space-y-4">
      {inputFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          {field.type === 'select' ? (
            <select
              id={field.name}
              {...register(field.name)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">{field.placeholder}</option>
              {field.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type || 'text'}
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register(field.name)}
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
      const response = await fetch(API_CYR, {
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
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Consultas y Reclamos</h2>
        <p className="text-gray-700 text-center text-sm">
          Para iniciar una consulta ó reclamo deberá completar el siguiente formulario. Una vez que finalice se derivará
          al sector de <strong>Atención al Cliente de Tarjeta Pampeana</strong> para que sea resuelta su consulta y/o
          reclamo en el menor tiempo posible. Por favor completar el formulario a continuación:
        </p>
        {isSubmitSuccessful && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
            <CiCreditCardOff className="mr-2 text-2xl text-red-500" />
            ¡Tu consulta fue enviada exitosamente!
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
