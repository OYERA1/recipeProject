'use client'

import Card from './card/card'
import { motion } from 'framer-motion'

export default function Trends() {
    // const trends = [
    //     {
    //         title: 'Spaghetti',
    //         src: 'https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-superJumbo.jpg',
    //         alt: 'Spaghetti'
    //     },
    //     {
    //         title: 'Hamburger',
    //         src: 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1',
    //         alt: 'Hamburguer'
    //     }
    // ]

    return (
        <div className="flex gap-4">
            <motion.div whileTap={{ cursor: 'grabbing' }}>
                <motion.div drag="x" className="flex gap-3">
                    {/* {trends.map(e => (
                        <motion.div drag="x" key={e.title} className="flex">
                            <Card props={e} />
                        </motion.div>
                    ))} */}
                </motion.div>
            </motion.div>
        </div>
    )
}
