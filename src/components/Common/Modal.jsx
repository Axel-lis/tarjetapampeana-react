import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import PropTypes from 'prop-types';

export default function Modal({
  isOpen,
  onClose,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  color,
  icon: Icon,
}) {
  // Mapear colores a clases Tailwind válidas
  const colorClasses = {
    red: 'bg-red-600 hover:bg-red-500 text-red-500 bg-red-100',
    green: 'bg-green-600 hover:bg-green-500 text-green-500 bg-green-100',
    blue: 'bg-blue-600 hover:bg-blue-500 text-blue-500 bg-blue-100',
    yellow: 'bg-yellow-600 hover:bg-yellow-500 text-yellow-500 bg-yellow-100',
    purple: 'bg-purple-600 hover:bg-purple-500 text-purple-500 bg-purple-100',
  };

  const confirmButtonColor = colorClasses[color]?.split(' ')[0] || 'bg-gray-600';
  const confirmButtonHover = colorClasses[color]?.split(' ')[1] || 'hover:bg-gray-500';
  const iconBgColor = colorClasses[color]?.split(' ')[2] || 'bg-gray-100';
  const iconTextColor = colorClasses[color]?.split(' ')[3] || 'text-gray-500';
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div
                  className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${iconBgColor} sm:mx-0 sm:size-10`}
                >
                  {Icon && <Icon className={`size-8 ${iconTextColor} bg-transparent`} />}
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    {title}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{message}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={onConfirm}
                className={`inline-flex w-full justify-center rounded-md ${confirmButtonColor} px-3 py-2 text-sm font-semibold text-white shadow-sm ${confirmButtonHover} sm:ml-3 sm:w-auto`}
              >
                {confirmText}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                {cancelText}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
// Validación de propiedades con PropTypes
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'purple']).isRequired,
  icon: PropTypes.elementType,
};
