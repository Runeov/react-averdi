import React from 'react';
import { Helmet } from 'react-helmet-async';

// Import the new modular components
// Make sure file paths match where you saved the components above
import OrganisasjonHero from './Organisasjon/OrganisasjonHero';
import OrganisasjonFeaturesGrid from './Organisasjon/OrganisasjonFeaturesGrid';
import OrganisasjonTestimonial from './Organisasjon/OrganisasjonTestimonial';
import OrganisasjonCTA from './Organisasjon/OrganisasjonCTA';
import FeatureTabs from '../../../components/FeatureTabs';
import type { FeatureTabItem } from '../../../components/FeatureTabs';

const OrganisasjonHub: React.FC = () => {

  // Define data for FeatureTabs specific to OrganisasjonHub
  // I've mapped the content from your old "Våre tjenester" section here.
  const organisasjonFeaturesData: FeatureTabItem[] = [
    {
      id: 'medlem',
      tabLabel: 'Medlemsregister',
      title: 'Full oversikt over medlemmene',
      description: 'Et moderne og GDPR-kompatibelt medlemsregister som gir deg full kontroll. Håndter innmeldinger, utmeldinger og medlemsdata enkelt og sikkert.',
      benefits: [
        'Automatisk oppdatering av kontaktinfo',
        'GDPR-kompatibelt samtykkehåndtering',
        'Fleksible medlemskategorier og grupper',
        'Historikk på alle medlemmer'
      ],
      // Replace placeholder with actual image asset
      imageSrc: '/placeholder.svg?height=400&width=600&text=Medlemsregister+Dashboard', 
    },
    {
      id: 'fakturering',
      tabLabel: 'Fakturering & Betaling',
      title: 'Effektiv innkreving av kontingenter',
      description: 'Automatiser fakturering av medlemskontingenter og treningsavgifter. Tilby moderne betalingsløsninger som Vipps og eFaktura for raskere innbetaling.',
      benefits: [
        'Masseutsendelse av fakturaer',
        'Automatisk purring og oppfølging',
        'Integrasjon med Vipps og regnskap',
        'Oversikt over utestående fordringer'
      ],
      imageSrc: '/placeholder.svg?height=400&width=600&text=Vipps+Integrasjon',
      // LINK ADDED HERE: Link to the Vipps guide
      contentLink: {
        text: "Se vår Vipps-guide for idrettslag",
        // Update this route if your guide is located elsewhere
        url: "/ressurser/vipps-veileder-idrettslag" 
      }
    },
    {
      id: 'arrangement',
      tabLabel: 'Arrangement',
      title: 'Enkel påmelding og betaling',
      description: 'Forenkle administrasjonen av kurs, cuper og arrangementer. Håndter påmeldinger, ventelister og betalinger i én sømløs flyt.',
      benefits: [
        'Fleksible påmeldingsskjemaer',
        'Håndtering av early-bird priser',
        'Kommunikasjon med deltakere',
        'Økonomisk oversikt per arrangement'
      ],
      imageSrc: '/placeholder.svg?height=400&width=600&text=Arrangement+Oversikt',
    },
    {
      id: 'kommunikasjon',
      tabLabel: 'Kommunikasjon',
      title: 'Nå ut til medlemmene',
      description: 'Effektiv kommunikasjon med medlemmer, trenere og foresatte. Send e-post, SMS eller push-varsler direkte fra plattformen.',
      benefits: [
        'Målrettede utsendelser til grupper',
        'Nyhetsbrev og maler',
        'SMS-varsling ved viktige beskjeder',
        'Logg over all kommunikasjon'
      ],
      imageSrc: '/placeholder.svg?height=400&width=600&text=Kommunikasjonsverktøy',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
       <Helmet>
        <title>Organisasjonshub | Averdi - Alt for foreningsdrift</title>
        <meta name="description" content="Averdi Organisasjonshub samler alle verktøy du trenger for effektiv drift av din forening eller idrettslag. Medlemsregister, fakturering, arrangement og kommunikasjon på ett sted." />
      </Helmet>

      <OrganisasjonHero />

      <OrganisasjonFeaturesGrid />

      {/* The old "Våre tjenester" section is replaced by FeatureTabs.
        We pass the specific data defined above.
      */}
      <FeatureTabs 
        title="Alt dere trenger på ett sted"
        introText="Vi har samlet de viktigste verktøyene for effektiv foreningsdrift i én brukervennlig plattform, slik at dere kan bruke mindre tid på admin og mer tid på aktivitet."
        features={organisasjonFeaturesData}
      />

      <OrganisasjonTestimonial />

      <OrganisasjonCTA />
    </div>
  );
};

export default OrganisasjonHub;