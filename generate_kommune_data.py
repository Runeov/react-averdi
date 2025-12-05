import csv
import json

# Read CSV and generate TypeScript
with open('src/data/DifferansiertArbeidsgiveravgift.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    kommuner = []
    for row in reader:
        kommune = {
            'kommunenr': row['Kommunenr.'],
            'kommunenavn': row['Kommunenavn'],
            'fylke': row['Fylke'],
            'sone': row['Sone']
        }
        if row.get('Kommentar'):
            kommune['kommentar'] = row['Kommentar']
        kommuner.append(kommune)

# Generate TypeScript file
ts_content = '''export interface Kommune {
  kommunenr: string;
  kommunenavn: string;
  fylke: string;
  sone: string;
  kommentar?: string;
}

interface SoneRate {
  ordinaer: number;
  landbruk: number;
  navn: string;
  fribeloep?: number;
}

export const soneRates: Record<string, SoneRate> = {
  "1": { ordinaer: 0.141, landbruk: 0.141, navn: "Sone I" },
  "1a": { ordinaer: 0.141, landbruk: 0.106, navn: "Sone Ia", fribeloep: 850000 },
  "2": { ordinaer: 0.106, landbruk: 0.106, navn: "Sone II" },
  "3": { ordinaer: 0.064, landbruk: 0.064, navn: "Sone III" },
  "4": { ordinaer: 0.051, landbruk: 0.051, navn: "Sone IV" },
  "4a": { ordinaer: 0.079, landbruk: 0.051, navn: "Sone IVa" },
  "5": { ordinaer: 0.00, landbruk: 0.00, navn: "Sone V (Tiltakssonen)" }
};

export const kommuneData: Kommune[] = '''

ts_content += json.dumps(kommuner, ensure_ascii=False, indent=2)
ts_content += ''';

export function getKommuneBySone(sone: string): Kommune[] {
  return kommuneData.filter(k => k.sone === sone);
}

export function searchKommuner(query: string): Kommune[] {
  const lowerQuery = query.toLowerCase();
  return kommuneData.filter(k => 
    k.kommunenavn.toLowerCase().includes(lowerQuery) ||
    k.fylke.toLowerCase().includes(lowerQuery)
  ).slice(0, 10);
}

export function getKommuneByNummer(nummer: string): Kommune | undefined {
  return kommuneData.find(k => k.kommunenr === nummer);
}

export function calculateArbeidsgiveravgift(
  payroll: number, 
  sone: string, 
  isLandbruk: boolean = false
): { cost: number; rate: number; fribeloepUsed?: number } {
  const rates = soneRates[sone as keyof typeof soneRates];
  if (!rates) return { cost: 0, rate: 0 };

  const rate = isLandbruk ? rates.landbruk : rates.ordinaer;

  if (sone === "1a" && rates.fribeloep !== undefined) {
    const normalCost = payroll * 0.141;
    const reducedCost = payroll * rate;
    const savings = normalCost - reducedCost;

    if (savings <= rates.fribeloep) {
      return { 
        cost: Math.round(reducedCost), 
        rate,
        fribeloepUsed: Math.round(savings)
      };
    } else {
      const excessSavings = savings - rates.fribeloep;
      const excessPayroll = excessSavings / (0.141 - rate);
      const finalCost = (payroll - excessPayroll) * rate + excessPayroll * 0.141;
      return { 
        cost: Math.round(finalCost), 
        rate: finalCost / payroll,
        fribeloepUsed: rates.fribeloep
      };
    }
  }

  return { cost: Math.round(payroll * rate), rate };
}
'''

with open('src/data/kommuneData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Generated kommuneData.ts successfully!")