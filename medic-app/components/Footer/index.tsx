"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-16">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <a href="index.html" className="relative flex justify-center">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/vmedic.svg"
                    alt="Logo"
                    className="dark:hidden"
                  />
                </a>

                <p className="mb-10 mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-around md:gap-8 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Các trang chính
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Trang chủ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Trang sản phẩm
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Trang liên hệ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Trang thông tin công ty
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Thông tin liên hệ
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Số điện thoại: 0123456789
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Zalo: 0123456789
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Facebook: https://www.facebook.com/vmedic
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Email: vmedic@gmail.com
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap items-center justify-end gap-5 border-t border-stroke py-2 dark:border-strokedark lg:flex-row lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              Developed by Grex
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
