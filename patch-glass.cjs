const fs = require('fs');

const dir = './src/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

const glassStyle = `
  background-color: var(--color-glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--color-glass-border);
  box-shadow: var(--glass-shadow);`;

const targets = [
  '.testimonial-card',
  '.blog-card',
  '.tech-badge',
  '.info-chip',
  '.cert-card',
  '.timeline-card',
  '.project-card',
  '.contact-card',
  '.service-card',
  '.hackathon-card',
  '.contact-form input',
  '.contact-form textarea'
];

files.forEach(file => {
  let content = fs.readFileSync(`${dir}/${file}`, 'utf8');
  let changed = false;
  
  targets.forEach(target => {
    // A simple regex to find the target block and insert the glass style
    // E.g. .service-card { ... background-color: var(--color-bg-primary); ... }
    // It's safer to just replace any `background-color: var(--color-bg-primary);` or `secondary`
    // within the scope of the target selector. We split by target
    
    let parts = content.split(target);
    if (parts.length > 1) {
      for (let i = 1; i < parts.length; i++) {
        // find the first closing brace `}`
        let endIdx = parts[i].indexOf('}');
        if (endIdx !== -1) {
          let block = parts[i].substring(0, endIdx);
          if (block.includes('background-color: var(--color-bg-primary);') || block.includes('background-color: var(--color-bg-secondary);')) {
            block = block.replace(/background-color:\s*var\(--color-bg-(primary|secondary)\);/, glassStyle);
            parts[i] = block + parts[i].substring(endIdx);
            changed = true;
          }
        }
      }
      content = parts.join(target);
    }
  });

  if (changed) {
    fs.writeFileSync(`${dir}/${file}`, content, 'utf8');
    console.log('Patched: ' + file);
  }
});
