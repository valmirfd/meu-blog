import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";




export default async function HomePage() {



  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href='#'>
          <Image
            className="w-full h-full group-hover:scale-105 transition"
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt="Post destaque"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4">

          <time className="text-slate-600 block text-sm/tight" dateTime="2025-11-17">17/11/2025 10:05</time>

          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Lorem ipsum dolor sit amet consectetur</Link>
          </h1>

          <p>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nemo perspiciatis ab officia delectus, quam ipsam asperiores, consequatur consequuntur rem voluptatem dolorum facere! Sed nemo exercitationem blanditiis laboriosam voluptatum magni?
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
