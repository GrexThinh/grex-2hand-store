import RelatedPost from "@/components/Blog/RelatedPost";
import { productData } from "@/components/Blog/blogData";
import ProductSection from "@/components/ProductSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <ProductSection productData={productData} />
          {/* <div className="flex flex-col gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Kobe Steel plant that supplied
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Jhon Doe
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 30, 2023
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    Events
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                    leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                    vel turpis in dolor volutpat imperdiet in ut mi. Integer non
                    volutpat nulla. Nunc elementum elit viverra, tempus quam
                    non, interdum ipsum.
                  </p>

                  <p>
                    Aenean augue ex, condimentum vel metus vitae, aliquam porta
                    elit. Quisque non metus ac orci mollis posuere. Mauris vel
                    ipsum a diam interdum ultricies sed vitae neque. Nulla
                    porttitor quam vitae pulvinar placerat. Nulla fringilla elit
                    sit amet justo feugiat sodales. Morbi eleifend, enim non
                    eleifend laoreet, odio libero lobortis lectus, non porttitor
                    sem urna sit amet metus. In sollicitudin quam est,
                    pellentesque consectetur felis fermentum vitae.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">
                    Nunc elementum elit viverra, tempus quam non
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                    leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                    vel turpis in dolor volutpat imperdiet in ut mi. Integer non
                    volutpat nulla. Nunc elementum elit viverra, tempus quam
                    non, interdum ipsum.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 lg:w-[30%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection"></div>
            </div>
          </div> */}
        </div>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <RelatedPost />
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
