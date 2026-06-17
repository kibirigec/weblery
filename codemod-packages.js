const fs = require('fs');

let content = fs.readFileSync('src/app/components/onboarding/PackageSelection.js', 'utf8');
if (!content.includes('useIsAEMarket')) {
  content = content.replace(/import \{ pricingTiers \} from '\.\/data';/, "import { pricingTiers, pricingTiersAE } from './data';\nimport { useIsAEMarket } from '../../../lib/market';");
}

content = content.replace('export default function PackageSelection({ formData, updateFormData, onNext, onBack }) {', 'export default function PackageSelection({ formData, updateFormData, onNext, onBack }) {\n  const isAE = useIsAEMarket();\n  const activePricingTiers = isAE ? pricingTiersAE : pricingTiers;');
content = content.replace(/pricingTiers\.map/g, 'activePricingTiers.map');

fs.writeFileSync('src/app/components/onboarding/PackageSelection.js', content);
console.log('Updated PackageSelection');
