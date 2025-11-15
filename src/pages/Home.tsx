import { Hero } from '../components/dronahq/Hero';
import { TrustedBy } from '../components/dronahq/TrustedBy';
import { Features } from '../components/dronahq/Features';
import { UseCases } from '../components/dronahq/UseCases';
import { Testimonials } from '../components/dronahq/Testimonials';
import { CTA } from '../components/dronahq/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <UseCases />
      <Testimonials />
      <CTA />
    </>
  );
}
