import { useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { CiCreditCardOff } from 'react-icons/ci';
import Swal from 'sweetalert2';
import { API_FORMULARIO_BTN_ARREPENT } from '../../components/constants/apis';
const BotonArrepentimiento = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    address: '',
    city: '',
    province: '',
    phone: '',
    email: '',
    cardLastDigits: '',
    securityCode: '',
    accountNumber: '',
  });
  const initialFormState = {
    firstName: '',
    lastName: '',
    dni: '',
    address: '',
    city: '',
    province: '',
    phone: '',
    email: '',
    cardLastDigits: '',
    securityCode: '',
    accountNumber: '',
  };
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const provinces = [
    'La Pampa',
    'Buenos Aires',
    'Córdoba',
    'Santa Fe',
    'Mendoza',
    'Tucumán',
    'Entre Ríos',
    'Salta',
    'Chaco',
    'Corrientes',
    'Santiago del Estero',
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.length < 2 ? 'Este campo es obligatorio' : '';
      case 'dni':
        return !/^\d{8}$/.test(value) ? 'DNI inválido' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email inválido' : '';
      case 'phone':
        return !/^\d{10}$/.test(value) ? 'Teléfono inválido' : '';
      case 'cardLastDigits':
        return !/^\d{4}$/.test(value) ? 'Últimos 4 dígitos inválidos' : '';
      case 'securityCode':
        return !/^\d{3}$/.test(value) ? 'Código de seguridad inválido' : '';
      case 'accountNumber':
        return !/^\d{7}$/.test(value) ? 'Número de cuenta inválido' : '';
      default:
        return value.length < 1 ? 'Este campo es obligatorio' : '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(API_FORMULARIO_BTN_ARREPENT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          Swal.fire({
            title: 'Formulario enviado!',
            text: 'Formulario enviado con éxito',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          setIsSuccess(true);
          // Limpiar formulario después del éxito
          setFormData(initialFormState);
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Hubo un error al enviar el formulario',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
        setErrors(newErrors);
      } catch (error) {
        setErrors({
          ...newErrors,
          submit: 'Ocurrió un error al procesar la solicitud' + error,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-purple-600 pt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <CiCreditCardOff className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulario de Arrepentimiento</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex items-start justify-center space-x-4">
              <FiInfo className="h-5 w-5 text-yellow-400 mt-0.5" />
              <div className="ml-8">
                <h3 className="text-sm font-medium text-yellow-800">Información Importante</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <ol className="list-decimal pl-5 space-y-0">
                    <li className="pl-1">Complete todos los campos requeridos</li>
                    <li className="pl-1">Verifique la información ingresada</li>
                    <li className="pl-1">El proceso puede demorar hasta 48 horas hábiles</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <BsCheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-green-900 mb-2">Solicitud Enviada con Éxito</h3>
            <p className="text-green-700 mb-4">Recibirá un correo de confirmación en breve</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Información Personal</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.firstName
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Apellido <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.lastName
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>

                <div>
                  <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                    DNI/DNU <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="dni"
                    id="dni"
                    value={formData.dni}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.dni
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.dni && <p className="mt-1 text-sm text-red-600">{errors.dni}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.phone
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Dirección <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.address
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Ciudad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.city
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                </div>

                <div>
                  <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                    Provincia <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="province"
                    id="province"
                    value={formData.province}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.province
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  >
                    <option value="">Seleccione una provincia</option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                  {errors.province && <p className="mt-1 text-sm text-red-600">{errors.province}</p>}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Información de Tarjeta</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="cardLastDigits" className="block text-sm font-medium text-gray-700">
                    Últimos 4 dígitos <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cardLastDigits"
                    id="cardLastDigits"
                    maxLength="4"
                    value={formData.cardLastDigits}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.cardLastDigits
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.cardLastDigits && <p className="mt-1 text-sm text-red-600">{errors.cardLastDigits}</p>}
                </div>

                <div>
                  <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700">
                    Código de Seguridad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="securityCode"
                    id="securityCode"
                    maxLength="3"
                    value={formData.securityCode}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.securityCode
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.securityCode && <p className="mt-1 text-sm text-red-600">{errors.securityCode}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                    Número de Cuenta <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    id="accountNumber"
                    maxLength="7"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.accountNumber
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.accountNumber && <p className="mt-1 text-sm text-red-600">{errors.accountNumber}</p>}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center pt-4 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                }  text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Procesando...
                  </>
                ) : (
                  'Enviar Solicitud'
                )}
              </button>
            </div>

            {errors.submit && (
              <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400">
                <div className="flex">
                  <BsXCircle className="h-5 w-5 text-red-400" />
                  <p className="ml-3 text-sm text-red-700">{errors.submit}</p>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default BotonArrepentimiento;
