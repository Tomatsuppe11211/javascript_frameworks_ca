import { Suspense } from "react";
import SingleProduct from "@/app/components/singleProduct";

export default function SingleProductPage({
    params,
}: {
    params: Promise<{productsId: string}>
}) {
    return(
        <Suspense fallback={<p className="text-sm md:text-base xl:text-lg">Loading product details...</p>}>
            <SingleProduct params={params} />
        </Suspense>
    )
}