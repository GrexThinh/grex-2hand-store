import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function BackToProductButton() {
  return (
    <Link href="/products" passHref>
      <div
        className="pb-2 hover:underline"
      >
        <div className="text-xs sm:text-lg">
          <ArrowBackIosIcon className="pb-1" /> Back to all products
        </div>
      </div>
    </Link>
  );
}

export default BackToProductButton;
