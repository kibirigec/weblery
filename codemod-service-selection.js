const fs = require('fs');

let content = fs.readFileSync('src/app/components/onboarding/ServiceSelection.js', 'utf8');

if (!content.includes('useIsAEMarket')) {
  content = content.replace(/import \{([^}]+isUSMarket[^}]+)\} from "\.\.\/\.\.\/\.\.\/lib\/market";/, 'import { $1, useIsAEMarket } from "../../../lib/market";');
}
if (!content.includes('useIsAEMarket')) {
    content = content.replace(/import \{ servicesData \} from '\.\/data';/, "import { servicesData, servicesDataAE } from './data';\nimport { useIsAEMarket } from '../../../lib/market';");
}

content = content.replace('export default function ServiceSelection({ formData, updateFormData, onNext }) {', 'export default function ServiceSelection({ formData, updateFormData, onNext }) {\n  const isAE = useIsAEMarket();\n  const activeServicesData = isAE ? servicesDataAE : servicesData;');

content = content.replace(/servicesData\.map/g, 'activeServicesData.map');

fs.writeFileSync('src/app/components/onboarding/ServiceSelection.js', content);

let subContent = fs.readFileSync('src/app/components/onboarding/SubServiceSelection.js', 'utf8');
if (!subContent.includes('useIsAEMarket')) {
    subContent = subContent.replace(/import \{([^}]+getServiceBySlug[^}]+)\} from '\.\/data';/, "import { $1, servicesDataAE } from './data';\nimport { useIsAEMarket } from '../../../lib/market';");
}

subContent = subContent.replace('export default function SubServiceSelection({ formData, updateFormData, onNext, onBack }) {', 'export default function SubServiceSelection({ formData, updateFormData, onNext, onBack }) {\n  const isAE = useIsAEMarket();');
subContent = subContent.replace(/getServiceBySlug\(([^)]+)\)/g, 'getServiceBySlug($1, isAE)');

fs.writeFileSync('src/app/components/onboarding/SubServiceSelection.js', subContent);

console.log('Updated ServiceSelection and SubServiceSelection');
