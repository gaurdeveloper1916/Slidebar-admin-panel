import { motion,AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-bootstrap'
import { route } from '../globalcomponent/Globalcomponent'
import { FaBars } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'
const Slidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0
        },  
        show: {
            width: "140px",
            padding: "5px 15px",
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    }
    const listAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5
            }
        },
        show: {
            width: 'auto',
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    }
    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "200px" : "45px",
                        transition: {
                            duration: 0.5,
                            type: 'spring',
                            damping: '11'
                        }
                    }}
                    className='sidebar'>
                    <div className="top_section">
                        {isOpen && <h1 className="logo"> Admin Panel </h1>}
                        <div className="bars"> <FaBars size={25} onClick={toggle} /></div>
                    </div>
                    <div className="search">
                        <div className="search_icon">
                            <BiSearch size={30} />
                        </div>
                        <AnimatePresence>
                            {isOpen &&
                                <motion.input
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    variants={inputAnimation}
                                    placeholder='Search'>
                                </motion.input>}
                        </AnimatePresence>
                    </div>
                    <section className='routes'>
                        {
                            route.map((routes) => {
                                return (
                                    <NavLink
                                        activeClassName="active"
                                        href={routes.path}
                                        key={routes.name}
                                        className='link'>
                                        <div className="icon">{routes.icon}</div>
                                        
                                            {isOpen && <motion.div
                                                variants={listAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text">{routes.name}</motion.div>}
                                       
                                    </NavLink>
                                )
                            })
                        }
                    </section>
                </motion.div>
                <main>{children}</main>
            </div>
        </>
    )
}
export default Slidebar