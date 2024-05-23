'use client'

import { TbArrowNarrowUp } from 'react-icons/tb'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const BackToTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='fixed right-0 bottom-[10%] z-50 bg-purple-contact/80 py-2 px-3 rounded hover:bg-purple-contact transition-all duration-300'
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          {show ? (
            <button
              onClick={scrollToTop}
              className='shadow-lg shadow-emerald-400/20 text-xl'
            >
              <TbArrowNarrowUp className="text-white" size={20} />
            </button>
          ) : null}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
