import { motion } from 'framer-motion'
const Animated = () => {

    return (
        <div className="container">
            <motion.div className="meterior"
                animate={{
                y: [ 0, 20, 0 ],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                duration: 2,
                repeat: Infinity,
                }}
            >
            <img alt="nova" src='./images/bottom right small meterior.svg' width={110} height={110} />
            </motion.div>
            <motion.div className="flyingMeterior"
            whileHover={{
                scale: 0,
                transition: { duration: 3 }
            }}
            >
            <img alt="nova" src='./images/flyingMeterior.svg' width={200} height={200} />
            </motion.div>
            <motion.div className="meterior4"
            whileHover={{
                scale: 1.5,
                transition: { duration: 2 },
            }}
            >
            <img alt="nova" src='./images/half meterior3.svg' width={300} height={300} />
            </motion.div>
            <motion.div className="meterior1"
            whileHover={{
                scale: 1.5,
                transition: { duration: 2 },
            }}
            >
            <img alt="nova" src='./images/meteror half.svg' width={150} height={150} />
            </motion.div>
            <motion.div className="planet"
            animate={{
                y: [ 0, 20, 0 ],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
            }}
            >
            <img alt="nova" src='./images/planet.svg' width={200} height={200} />
            </motion.div>
            <motion.div className="satellite"
            animate={{
                rotate: 360,
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 100,
                repeat: Infinity,
            }}          
            >
            <img alt="nova" src='./images/satellite.svg' width={150} height={150} />
            </motion.div>
            <motion.div className="meterior3"
            whileHover={{
                scale: 1.5,
                transition: { duration: 2 },
            }}
            >
            <img alt="nova" src='./images/second half.svg' width={200} height={200} />
            </motion.div>
            <motion.div className="astronaut"
            animate={{
                scale: [ 1, 2, 1 ],
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
            }}
            >
            <img alt="nova" src='./images/manWithSpacesuit.svg' width={90} height={90} />
            </motion.div>
            
            <div className="small2">
            <img alt="nova" src='./images/small meterior 2.svg' width={110} height={110} />
            </div>
            <div className="small1">
            <img alt="nova" src='./images/small meterior 1.svg' width={200} height={200} />
            </div>
            <div className="small3">
            <img alt="nova" src='./images/small meterior 3.svg' width={110} height={110} />
            </div>
            <motion.div className="meterior2"
            whileHover={{
                scale: 1.5,
                transition: { duration: 2 },
            }}
            >
            <img alt="nova" src='./images/Untitled design (49) 4.svg' width={144} height={144} />
            </motion.div>
        </div>
    )
  }

  export default Animated;