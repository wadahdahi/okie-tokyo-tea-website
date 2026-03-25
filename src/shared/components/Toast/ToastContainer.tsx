import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../../hooks/useAppRedux";
import { removeToast, ToastMessage } from "../../lib/uiSlice";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";

const ToastItem: React.FC<{ toast: ToastMessage }> = ({ toast }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast(toast.id));
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast.id, dispatch]);

  const icons = {
    success: <FaCheckCircle className="text-green-500" />,
    error: <FaExclamationCircle className="text-red-500" />,
    info: <FaInfoCircle className="text-blue-500" />,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className="flex items-center gap-3 bg-brand-card border border-brand-border p-4 rounded-2xl shadow-2xl min-w-[280px] pointer-events-auto"
    >
      <div className="text-xl">{icons[toast.type]}</div>
      <p className="flex-1 text-sm font-bold text-brand-text truncate">
        {toast.message}
      </p>
      <button
        onClick={() => dispatch(removeToast(toast.id))}
        className="text-brand-muted hover:text-brand-text transition-colors"
        title="Close notification"
      >
        <FaTimes />
      </button>
    </motion.div>
  );
};

const ToastContainer: React.FC = () => {
  const toasts = useAppSelector((state) => state.ui.toasts);

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-2001 flex flex-col items-center gap-3 pointer-events-none w-max max-w-[90vw]">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
