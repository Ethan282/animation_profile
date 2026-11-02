import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FiX } from "react-icons/fi";

const OverlayMenu = ({ isOpen, onClose }) => {
  const menuList = ['Home', 'About', 'Skills', 'Project', 'Contact']
  return (
    <AnimatePresence>
      {isOpen && (

        <motion.div
          className=" fixed inset-0 flex items-center justify-center z-50" >

          <button className=' absolute top-6 right-6 text-white text-3xl' onClick={onClose}>
            <FiX />
          </button>

          <ul className=' space-y-6  text-center'>
            {menuList.map((item, index) => (
              <motion.li key={index}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}

              >
                <a href={`#${item.toLowerCase()}`} onClick={onClose}
                  className='text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300 '>
                  {item}</a>

              </motion.li>
            ))

            }


          </ul>

        </motion.div>

      )}

    </AnimatePresence>
  )
}

export default OverlayMenu