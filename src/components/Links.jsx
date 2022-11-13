import React from 'react';
import { motion } from 'framer-motion'

export default function Links () {
    return (
        <div className="mt-40 flex flex-col justify-center items-center">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className='text-gray-50 lowercase flex gap-8 text-4xl mt-8 md:mt-20 pb-20'>
                {/* github */}
                <a href="https://github.com/krisette" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 16 16" className="h-100px hover:fill-pink-400 transition-colors duration-300">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg></a>
                {/* email */}
                <a href="mailto:hey@krisette.io" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 16 16" className="h-45px hover:fill-pink-400 transition-colors duration-300">
                <path fill-rule="evenodd" d="m3 7.5 3.5 2L8 8.75l1.5.75 3.5-2v-6A1.5 1.5 0 0 0 11.5 0h-7A1.5 1.5 0 0 0 3 1.5v6ZM2 3.133l-.941.502A2 2 0 0 0 0 5.4v.313l2 1.173V3.133Zm12 3.753 2-1.173V5.4a2 2 0 0 0-1.059-1.765L14 3.133v3.753Zm-3.693 3.324L16 6.873v6.5l-5.693-3.163Zm5.634 4.274L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM5.693 10.21 0 13.372v-6.5l5.693 3.338ZM8 1.982C9.664.309 13.825 3.236 8 7 2.175 3.236 6.336.31 8 1.982Z"/>
                </svg></a>
                {/* linkedin */}
                <a href="https://linkedin.com/in/krisette" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 16 16" className="h-45px hover:fill-pink-400 transition-colors duration-300"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></a>
            </motion.div>
        </div>
    )
}