import { useState, type ReactNode } from 'react';
import tiltakssonenNorgeskart from '../assets/tiltakssonen_norgeskart.avif';
import artikkelTilleggskatt from '../assets/artikkel_tilleggskatt.avif';

// --- DATA DEFINISJONER ---

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  author: string;
  content: ReactNode;
}

export const articles: Article[] = [
  {
    slug: 'regler-tiltakssonen-2025',
    title: 'Alt om arbeidsgiveravgift i Tiltakssonen (2025/26)',
    description: 'Sparer din bedrift nok? I Finnmark og Nord-Troms er satsen 0%, men feilrapportering kan bli dyrt. Her er ekspertguiden.',
    publishDate: '2025-12-04',
    author: 'Rune Laiti',
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8 font-medium">
          Å drive bedrift i tiltakssonen gir et enormt konkurransefortrinn, men regelverket rundt nullsats på arbeidsgiveravgift har noen feller. Vet du om du bruker dem riktig?
        </p>

        {/* BILDE 1: Norgeskart */}
        <figure className="mb-10 rounded-xl overflow-hidden shadow-lg border border-slate-100 max-w-md mx-auto">
            <img
                src={tiltakssonenNorgeskart}
                alt="Norgeskart som viser Tiltakssonen i grønt for null arbeidsgiveravgift"
                className="w-full h-auto"
                loading="lazy"
            />
            <figcaption className="text-center text-sm text-slate-500 mt-3 p-2 bg-slate-50 italic">
                Sone 5 (markert i grønt) har 0 kroner i arbeidsgiveravgift.
            </figcaption>
        </figure>

        <h2>Hvor store er besparelsene egentlig?</h2>
        <p>
          I Finnmark og Nord-Troms (Tiltakssonen) er satsen for arbeidsgiveravgift <strong>0%</strong>. Mange bedriftsledere ser tallet, men regner ikke på hva det faktisk betyr for bunnlinjen før slutten av året.
        </p>
        <p>
          
        </p>


        <h3>Hvem gjelder nullsatsen for?</h3>
        <p>
          Hovedregelen er at virksomheten må være lokalisert i tiltakssonen. Men her oppstår ofte misforståelsene. Det er ikke nok å ha en postboks i Alta hvis de ansatte jobber i Oslo.
        </p>
        
        <div className="my-6 bg-slate-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-slate-800 mb-2">Tiltakssonen omfatter:</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
                Hele Finnmark, samt kommunene Karlsøy, Kvænangen, Kåfjord, Lyngen, Nordreisa, Skjervøy og Storfjord i Troms.
            </p>
        </div>

        <ul className="list-disc pl-5 space-y-3 mb-8 text-slate-700">
          <li><strong>Hovedregel:</strong> Arbeidet må utføres i tiltakssonen.</li>
          <li><strong>Ambulerende virksomhet:</strong> Hvis du sender ansatte på oppdrag utenfor sonen, kan du fortsatt bruke nullsats, gitt at hoveddelen av arbeidet skjer i nord.</li>
          <li><strong>Hjemmekontor:</strong> Har du ansatte med permanent hjemmekontor i Oslo? Da skal det beregnes 14,1% avgift på deres lønn, selv om firmaet ligger i Karasjok.</li>
        </ul>

        <h2>Fribeløpsordningen – "Unntaket"</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="flex-1">
                <p>
                  Noen sektorer (som transport, finans, og energi) omfattes av EØS-regler for statsstøtte. De kan ikke bruke nullsatsen ubegrenset.
                </p>
                <p className="mt-4">
                  For disse bedriftene gjelder et <strong>fribeløp</strong>. For 2025 er dette taket justert (sjekk alltid oppdaterte satser hos Skatteetaten). Overskrider dere fribeløpet, må dere betale full avgift på det overskytende.
                </p>
            </div>
            
            {/* BILDE 2: Illustrasjon Feller/Byggeklosser */}
            <div className="w-full md:w-1/3">
                <img
                    src={artikkelTilleggskatt}
                    alt="Illustrasjon av en person som bygger klosser, der en rød kloss symboliserer risiko for feilrapportering"
                    className="rounded-lg shadow-md w-full h-auto"
                    loading="lazy"
                />
            </div>
        </div>
        
        <h3>3 vanlige feil vi ser i Averdi</h3>
        <ol className="list-decimal pl-5 space-y-4 mb-8 text-slate-700">
          <li>
            <strong>Blanding av soner:</strong> <br/>
            Bedrifter glemmer å splitte lønnsrapporteringen på ansatte som bor/jobber sørpå.
          </li>
          <li>
            <strong>Feil sektor-kode:</strong> <br/>
            Bedriften er registrert i Brønnøysund med feil næringskode, og tror de omfattes av fribeløpet når de egentlig har krav på fullt fritak.
          </li>
          <li>
            <strong>Manglende dokumentasjon:</strong> <br/>
            Ved kontroll må du kunne bevise hvor arbeidet er utført. Reiseregninger og timelister er gull verdt.
          </li>
        </ol>

        {/* CTA SEKSJON */}
        <div className="bg-blue-50 p-8 rounded-xl text-center my-12 border border-blue-100 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-slate-900">Usikker på om du rapporterer riktig?</h3>
            <p className="mb-6 text-slate-600 max-w-lg mx-auto">
                Feil rapportering kan gi deg en stor regning (eller at du går glipp av penger) senere. Vi tar en rask sjekk av a-meldingen din.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 hover:shadow-lg transition duration-200">
                Ta en uforpliktende prat med Rune
            </button>
        </div>

        <h2>Hvordan rapportere dette i A-meldingen?</h2>
        <p>
          I lønnssystemet ditt (f.eks. Tripletex eller PowerOffice) må du sette opp arbeidsstedsonen korrekt. Sone for Tiltakssonen er ofte kodet som <strong>Sone V (5)</strong> eller <strong>Sone 1a</strong> avhengig av systemet.
        </p>
        <p className="mt-4">
          Er du usikker på om du har betalt for mye avgift tidligere år? Det er mulig å korrigere A-meldinger 3 år tilbake i tid. Vi har hjulpet flere kunder med å få tilbakebetalt store summer.
        </p>
      </>
    )
  },
  {
    slug: 'finnmarksfradraget-guide',
    title: 'Finnmarksfradraget: En guide for arbeidsgivere',
    description: 'Slik bruker du Finnmarksfradraget aktivt i rekruttering.',
    publishDate: '2025-12-05',
    author: 'Averdi AS',
    content: <p>Kommer snart...</p>
  }
];