import { useState } from 'react';
import { imgAdherirComercio } from '../constants/index.js';
import { motion } from 'framer-motion';
import Modal from '../Common/Modal';
import { MdAddHomeWork } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const AdherirComercio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleNavigateToForm = () => {
    navigate('/form-adherir-comercio');
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -50 }, // Oculto al inicio
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        repeat: Infinity, // Repetir infinitamente
        repeatType: 'loop', // Loop normal
        repeatDelay: 10, // Pausa de 10 segundos entre cada ciclo
      },
    },
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10" onClick={handleOpenModal}>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          src={imgAdherirComercio}
          alt="Adherir Comercio"
          className="w-full cursor-pointer"
        />
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title="Tarjeta Pampeana: Adherir Comercio"
        message="¿Te gustaría que tu comercio forme parte de la red de Tarjeta Pampeana? ¡Llená este formulario para comenzar!"
        confirmText="Ir al formulario"
        cancelText="Cancelar"
        onConfirm={handleNavigateToForm}
        color="green"
        icon={MdAddHomeWork}
      />
    </div>
  );
};

export default AdherirComercio;
