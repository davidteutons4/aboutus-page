import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MissionVision from '@/components/MissionVision';
import Leadership from '@/components/Leadership';
import CoreValues from '@/components/CoreValues';
import Timeline from '@/components/Timeline';
import Achievements from '@/components/Achievements';
import Partners from '@/components/Partners';
import TeamGallery from '@/components/TeamGallery';
import Media from '@/components/Media';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionVision />
      <Leadership />
      <CoreValues />
      <Timeline />
      <Achievements />
      <Partners />
      <TeamGallery />
      <Media />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
