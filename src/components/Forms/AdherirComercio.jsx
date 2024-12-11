import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { FaQuestionCircle, FaExternalLinkAlt } from 'react-icons/fa';
import ProgressButton from '../Common/ProgressButton';
import Alerts from '../Common/Alerts';
import { API_FORMULARIOS } from '../../components/constants/apis';
import Modal from '../Common/Modal';
// Esquema de validación con Zod
const schema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  lastName: z.string().min(3, { message: 'El apellido debe tener al menos 3 caracteres' }),
  address: z.string().min(5, { message: 'La dirección debe tener al menos 5 caracteres' }),
  locality: z.string().min(3, { message: 'La localidad debe tener al menos 3 caracteres' }),
  province: z.string().min(3, { message: 'La provincia debe tener al menos 3 caracteres' }),
  phone: z.string().regex(/^\d{10}$/, { message: 'El teléfono debe tener 10 dígitos' }), // Asumiendo formato de teléfono de 10 dígitos
  email: z.string().email({ message: 'Por favor ingresa un correo electrónico válido' }),
  businessType: z.string().min(4, { message: 'El rubro de comercio debe tener al menos 4 caracteres' }),
  businessName: z.string().min(4, { message: 'El nombre de fantasía debe tener al menos 4 caracteres' }),
  cuit: z.string().regex(/^\d{11}$/, { message: 'El número de CUIT debe tener 11 dígitos' }),
  logoLink: z.string().url({ message: 'Por favor ingresa una URL válida para el logo' }),
});

// Componente FormInput
const FormInput = ({ label, type, register, error, id }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <input
        {...register(id)}
        type={type}
        id={id}
        className={`w-full px-4 py-2 rounded-lg border ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        } focus:border-transparent focus:outline-none focus:ring-2 transition duration-200`}
        aria-label={label}
      />
      {error && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <FiX className="h-5 w-5 text-red-500" />
        </div>
      )}
    </div>
    {error && (
      <p className="mt-1 text-sm text-red-500" role="alert">
        {error.message}
      </p>
    )}
  </div>
);

const AdherirComercio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(API_FORMULARIOS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Hubo un error al enviar los datos');
      }

      setSubmitStatus('success');
      setAlertMessage('Formulario enviado exitosamente.');
      reset();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
      setAlertMessage('Ocurrió un error al enviar el formulario. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-purple-600 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-12 text-center text-3xl font-bold text-gray-800">Adherir mi comercio a Pampeana</h2>
          <h5 className="text-center text-gray-600">¡Es fácil, rápido y gratuito!</h5>
        </div>
        {submitStatus && <Alerts type={submitStatus} message={alertMessage} />}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <FormInput label="Nombre" type="text" id="name" register={register} error={errors.name} />
          <FormInput label="Apellido" type="text" id="lastName" register={register} error={errors.lastName} />
          <FormInput label="Dirección" type="text" id="address" register={register} error={errors.address} />
          <FormInput label="Localidad" type="text" id="locality" register={register} error={errors.locality} />
          <FormInput label="Provincia" type="text" id="province" register={register} error={errors.province} />
          <FormInput label="Teléfono" type="text" id="phone" register={register} error={errors.phone} />
          <FormInput label="E-mail" type="email" id="email" register={register} error={errors.email} />
          <FormInput
            label="Rubro de Comercio"
            type="text"
            id="businessType"
            register={register}
            error={errors.businessType}
          />
          <FormInput
            label="Nombre de Fantasía"
            type="text"
            id="businessName"
            register={register}
            error={errors.businessName}
          />
          <FormInput label="Número de CUIT" type="text" id="cuit" register={register} error={errors.cuit} />
          <FormInput
            label="Adjunta el enlace a la imagen del logo"
            type="text"
            id="logoLink"
            register={register}
            error={errors.logoLink}
          />

          <div className="flex-nowrap items-center space-x-2 text-l cursor-pointer" onClick={handleOpenModal}>
            <FaQuestionCircle className="text-inline inline bg-gray-50 mx-1" />
            ¿Cómo obtener un link para mi logo?
          </div>
          <Modal
            isOpen={modalOpen}
            onClose={handleCloseModal}
            title="Tarjeta Pampeana: Adherir Comercio"
            message={
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    `Puedes obtener un enlace para tu imagen siguiendo estos pasos:<br><br>` +
                    `1. Visita <a href='https://postimages.org/' target='_blank' className='text-blue-700 underline hover:text-blue-600'>postimages.org</a><br><br>` +
                    `2. Haz clic en 'Choose images'<br><br>` +
                    `3. Selecciona tu imagen<br><br>` +
                    `4. Haz clic en 'Upload now'<br><br>` +
                    `5. Copia el enlace que se proporciona en la sección 'Direct link'`,
                }}
              />
            }
            confirmText="Volver al formulario"
            cancelText="Cancelar"
            onConfirm={handleCloseModal}
            color="green"
            icon={FaExternalLinkAlt}
          />
          <div className="flex items-center justify-center">
            <ProgressButton type="submit" hasError={Object.keys(errors).length > 0} />
          </div>
        </form>
      </div>
    </div>
  );
};

// Definición de las PropTypes
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired, // Ahora register es una función
  error: PropTypes.object, // Puede ser null o un objeto si hay un error
  id: PropTypes.string.isRequired,
};

export default AdherirComercio;
