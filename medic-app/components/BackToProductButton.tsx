
import Link from 'next/link'

function BackToProductButton() {
  return (
    <Link href="/products" passHref>
      <div
        className="bg-amber-500 hover:bg-amber-400 rounded-md w-full md:w-2/3 lg:w-1/2 border border-white text-white font-primary pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-lighter"
      >
        <div className="sm:text-lg text-xs" />
        Quay lại tất cả sản phẩm
      </div>
    </Link>
  )
}

export default BackToProductButton
