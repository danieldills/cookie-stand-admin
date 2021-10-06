import Link from "next/link";
import { useSelector } from "react-redux";

function Footer() {
  const count = useSelector((state) => state.count.value);
  return (
    <div className="flex items-center justify-between p-3 mt-12 bg-green-500 text-black-100">
      <h3>{count} Locations World Wide</h3>
    </div>
  );
}

export default Footer;
