import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";
import Link from "next/link";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="space-y-20 px-6 py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Pawradise Pet Market – Raw &amp; Natural Food for Dogs in [Your
            City]
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Locally trusted for premium raw &amp; fresh dog food. Nationwide
            shipping available for select specialty products.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <Link
              href="/search/raw-food"
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
            >
              Shop Raw Food
            </Link>
            <Link
              href="/search/treats"
              className="px-6 py-3 border border-black text-black rounded hover:bg-gray-100"
            >
              Browse Treats
            </Link>
          </div>
        </section>

        {/* Local Trust Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold">
              Why Local Pet Parents Choose Us
            </h2>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li>Fresh, raw, and frozen pet food from trusted brands</li>
              <li>Convenient local pickup &amp; delivery</li>
              <li>Expert recommendations tailored to your dog’s needs</li>
            </ul>
          </div>
          <img
            src="/images/local-dog-food-delivery.jpg"
            alt="Dog with raw food bowl"
            className="rounded-lg shadow-lg"
          />
        </section>

        {/* Featured Product Grid (Replace with dynamic later) */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border p-4 rounded hover:shadow">
              <Link href="/product/salmon-bites">
                <img
                  src="/images/salmon-bites.jpg"
                  alt="Salmon Bites"
                  className="mb-2"
                />
                <h3 className="font-medium">Wild Salmon Bites</h3>
                <p className="text-sm text-gray-500">$14.99</p>
              </Link>
            </div>
            {/* Add 3 more placeholder products here or map real ones later */}
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="bg-gray-100 rounded-xl p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-2">
            Serving [Your City], [Your State]
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're more than just a store – we're your local pet wellness
            partner. Stop by, call, or order online.
          </p>
          <p className="mt-4 font-medium">
            📍 123 Main Street, [Your City], [State ZIP]
          </p>
        </section>
      </div>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
