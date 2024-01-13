
import Link from 'next/link'

function BackToProductButton() {
  return (
    <Link href="/blog" passHref>
      <div
        className="w-full md:w-2/3 lg:w-1/2 border border-palette-primary text-palette-primary font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-lighter rounded-sm"
      >
        <div className="sm:text-lg text-xs" />
        Back To All Products
      </div>
    </Link>
  )
}

export default BackToProductButton
