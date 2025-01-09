import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaTimesCircle, FaCalculator, FaCreditCard } from 'react-icons/fa';
import { API_PRESTAMOS } from '../../components/constants/apis';
import Alerts from '../Common/Alerts';

const formSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  dni: z.string().min(7, 'DNI/DNU inválido'),
  calle: z.string().min(3, 'Calle inválida'),
  numero: z.string().min(1, 'Número inválido'),
  localidad: z.string().min(3, 'Localidad inválida'),
  provincia: z.string().min(3, 'Provincia inválida'),
  telefono: z.string().min(10, 'Teléfono inválido'),
  email: z.string().email('Email inválido'),
  monto: z.number().min(10000).max(1000000),
  cuotas: z.number().min(6).max(24),
  tarjetaPampeana: z.boolean(),
  ultimosCuatroNumeros: z.string().refine((val) => /^\d{4}$/.test(val), {
    message: 'Debe ingresar los últimos 4 números de su Tarjeta Pampeana',
  }),
  codigoSeguridad: z.string().refine((val) => /^\d{3}$/.test(val), {
    message: 'Código de seguridad inválido (3 dígitos)',
  }),
});

const SolicitarPrestamo = () => {
  const [cuotaMensual, setCuotaMensual] = useState(0);
  const [showCalculation, setShowCalculation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monto: 10000,
      cuotas: 6,
      tarjetaPampeana: false,
      ultimosCuatroNumeros: '',
      codigoSeguridad: '',
    },
  });

  const generarPeriodo = () => {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const mesFormateado = mes < 10 ? `0${mes}` : mes;
    return `${año}${mesFormateado}`;
  };

  const tarjetaPampeana = watch('tarjetaPampeana');
  const monto = watch('monto');
  const cuotas = watch('cuotas');

  const calcularCuota = async () => {
    setLoading(true);
    const periodo = generarPeriodo();

    try {
      const response = await axios.post(API_PRESTAMOS + '/calcular', {
        pimporte: monto,
        pcuotas: cuotas,
        periodo,
      });

      if (response.data && response.data.cuota) {
        setCuotaMensual(response.data.cuota);
        setShowCalculation(true);
      }
    } catch (error) {
      console.error('Error al calcular la cuota:', error);
    } finally {
      setLoading(false);
    }
  };
  const formatCurrency = (number) => {
    return number
      .toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };
  const onSubmit = async (data) => {
    setLoading(true);
    setAlertData(null); // Limpia alertas anteriores

    try {
      const response = await axios.post(API_PRESTAMOS + '/send-email', {
        ...data,
      });

      if (response.data && response.data.success) {
        setAlertData({ type: 'success', message: 'Solicitud enviada correctamente!' });
      } else {
        setAlertData({ type: 'error', message: 'Hubo un error al enviar la solicitud.' });
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setAlertData({ type: 'error', message: 'Hubo un error al enviar la solicitud.' });
    } finally {
      setLoading(false);
    }
  };
  const inputStyle = 'w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500';
  const errorStyle = 'text-red-500 text-sm mt-1';
  const labelStyle = 'block text-gray-700 font-medium mb-2';

  return (
    <div className="min-h-screen bg-purple-600 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Solicitud de Préstamo</h2>
        <img src="/src/assets/logos/pampaCash-logo-violeta.png" alt="PampaCa$h Logo" className="w-80 mx-auto mb-8" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Nombre</label>
              <input type="text" {...register('nombre')} className={inputStyle} placeholder="Ingrese su nombre" />
              {errors.nombre && <p className={errorStyle}>{errors.nombre.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Apellido</label>
              <input type="text" {...register('apellido')} className={inputStyle} placeholder="Ingrese su apellido" />
              {errors.apellido && <p className={errorStyle}>{errors.apellido.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>DNI/DNU</label>
              <input type="text" {...register('dni')} className={inputStyle} placeholder="Ingrese su DNI/DNU" />
              {errors.dni && <p className={errorStyle}>{errors.dni.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Calle</label>
                <input type="text" {...register('calle')} className={inputStyle} placeholder="Ingrese la calle" />
                {errors.calle && <p className={errorStyle}>{errors.calle.message}</p>}
              </div>

              <div>
                <label className={labelStyle}>Número</label>
                <input type="text" {...register('numero')} className={inputStyle} placeholder="Número" />
                {errors.numero && <p className={errorStyle}>{errors.numero.message}</p>}
              </div>
            </div>

            <div>
              <label className={labelStyle}>Localidad</label>
              <input type="text" {...register('localidad')} className={inputStyle} placeholder="Ingrese su localidad" />
              {errors.localidad && <p className={errorStyle}>{errors.localidad.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Provincia</label>
              <input type="text" {...register('provincia')} className={inputStyle} placeholder="Ingrese su provincia" />
              {errors.provincia && <p className={errorStyle}>{errors.provincia.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Teléfono</label>
              <input type="tel" {...register('telefono')} className={inputStyle} placeholder="Ingrese su teléfono" />
              {errors.telefono && <p className={errorStyle}>{errors.telefono.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Email</label>
              <input type="email" {...register('email')} className={inputStyle} placeholder="Ingrese su email" />
              {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Monto Solicitado</label>
              <input
                type="range"
                {...register('monto', { valueAsNumber: true })}
                min="100000"
                max="300000"
                step="25000"
                className="w-full bg-green-400"
              />
              <p className="text-center text-gray-600 mt-2">${monto}</p>
            </div>

            <div>
              <label className={labelStyle}>Cuotas</label>
              <select {...register('cuotas', { valueAsNumber: true })} className={inputStyle}>
                {Array.from({ length: 7 }, (_, i) => 6 + i * 3).map((num) => (
                  <option key={num} value={num}>
                    {num} cuotas
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-6">
            <input type="checkbox" {...register('tarjetaPampeana')} className="w-4 h-4 text-blue-600" />
            <label className="text-gray-700">¿Tienes Tarjeta Pampeana?</label>
          </div>

          {tarjetaPampeana && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyle}>Últimos 4 números de tu Tarjeta Pampeana</label>
                <input
                  type="text"
                  {...register('ultimosCuatroNumeros')}
                  className={inputStyle}
                  placeholder="Últimos 4 números de tu Tarjeta Pampeana"
                  maxLength={4}
                />
                {errors.ultimosCuatroNumeros && <p className={errorStyle}>{errors.ultimosCuatroNumeros.message}</p>}
              </div>

              <div>
                <label className={labelStyle}>Código de Seguridad (3 Dígitos)</label>
                <input
                  type="text"
                  {...register('codigoSeguridad')}
                  className={inputStyle}
                  placeholder="Código de Seguridad (3 Dígitos)"
                  maxLength={3}
                />
                {errors.codigoSeguridad && <p className={errorStyle}>{errors.codigoSeguridad.message}</p>}
              </div>
            </div>
          )}

          {!tarjetaPampeana && (
            <div className="bg-yellow-50 p-4 rounded-lg flex items-center space-x-2">
              <FaCreditCard className="text-yellow-600" />
              <p className="text-yellow-700">
                Debes tener la Tarjeta Pampeana para continuar.
                <a
                  href="https://solicitatutarjeta.pampeana.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  Para solicitar la tarjeta, haz click aquí.
                </a>
              </p>
            </div>
          )}
          <div>{alertData && <Alerts type={alertData.type} message={alertData.message} />}</div>
          <button
            type="button"
            onClick={calcularCuota}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            disabled={loading}
          >
            <FaCalculator />
            {loading ? 'Calculando...' : 'Calcular Valor de la Cuota'}
          </button>

          {showCalculation && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-center text-lg">
                El monto de tu cuota mensual es de:
                <span className="text-green-600 font-semibold text-2xl">{` $${formatCurrency(cuotaMensual)}`} </span>
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={!tarjetaPampeana}
            className={`w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 ${
              tarjetaPampeana
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {tarjetaPampeana ? <FaCheckCircle /> : <FaTimesCircle />}
            <span>Enviar Solicitud</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SolicitarPrestamo;
