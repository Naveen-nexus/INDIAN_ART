/**
 * CHITRAKALA - INDIAN ART HISTORY ATLAS
 * Complete Interactive Application Engine & Geographic Vector Map
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================
       HERITAGE ARTWORK ILLUSTRATION GENERATOR
       Creates distinctive SVG artwork representations for each hub
       ========================================================== */
    function getArtworkIllustration(hubId, title, category) {
        /* ----------------------------------------------------------
           REAL PHOTOGRAPH LOOKUP
           Replace any URL below with your own image link.
           Sourced from Wikimedia Commons (public domain / CC).
           ---------------------------------------------------------- */
        const realPhotos = {
            'ajanta': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoc4Q9fBreOSKtXXBo_iGimL3PxmjFubsU7Oc90da7bjR661MkVB87d1U&s=10',
            'ellora': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxnt6ZPN8goc0r2GsIblZ1gQ_QratwqTWZgYbs22OtA&s=10',
            'bhimbetka': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxglEW7vfb-70_IN-aHX2eaUbaZHErQ3EDfJzEa66Qcw&s=10',
            'thanjavur': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2qhZNmJlV8MQ3w7Q-ZhP86hsxbo0DbzsK_pJ2Bk-nA&s=10',
            'madhubani': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQun5DomyBaseuOeb-VpdoqV29_xl7Wn6DhipHUVQQcHg&s=10',
            'kishangarh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmQRMijGPfpMQAF4wzFX7hvSVzZH6-742e8OEmZIyfQ&s=10',
            'kangra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwP0nSIVN9j8J6YNIQjbYn_f6t4AaCGc0ch8h1_1HXw&s=10',
            'warli': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUruit3DYy7X5uUZ2gkNNT9bmQKNQ94rQzqh3rhERkA&s=10',
            'kolkata-bengal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuQKQb09R4bGn_BRK1fPsu8K8y-q9sxDCsKwGxs0HsQ&s=10',
            'raghurajpur': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ovorGikK2xHhxT_2UcghjLh6dJNUFRaMkrRhxWXvRQ&s=10',
            'hampi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4Aih3ENn78mXYRMuPxzPAGNi9dyPVz_ErDOcIOG22g&s=10',
            'khajuraho': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHko4izl_Jc81WYogikwmrjhAycFr3V3ZNV2FwQGeGdQ&s=10',
            'mathura': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiyVgQmnMNEWsYZ4iY45xUHPnJjfR-d-aOJ2pJjyUyZw&s=10',
            'nathdwara': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWfv3WOayMiqXCIhZ5h4CMg_99Tx3J4jMtwadgBNoSA&s=10',
            'srikalahasti': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeX3WttwreWdsP93JwvBfTI7Of605rLQofdOI7_meRHA&s=10',
            'bastar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-GLlTXxSZk-JTSEMtAL1VU8a4mMOjkp0qUs71a87Jg&s=10',
            'unakoti': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl37cCwLwt8HgZB5hHGAdXNS5o-yywBUvqcvJPOYcuuA&s=10',
            'kochi-murals': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeTTbLg0IcFW1tLuFyZpYehH4WvmMQfNmvSrfFnTw6w&s=10',
            'cheriyal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4onNZTYfpUiuzXX_cVhZ8n7hAZW_93xGAmR1EIEUY5AiztBisv81xYcd&s=10',
            'kutch-rogan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdOMtW7mSzE_VJcspsP9I6k52iFmO4wLgA300GfbtaA&s=10',
            'belur-halebidu': 'https://www.gudlu.in/blog/wp-content/uploads/2023/03/overview-4.jpg',
            'travancore-varma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKBFh2FnfqR54gClluQ5gafqsRsXs6VxEUTdc7zkVqw&s=10',
            'delhi-mughal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4atQ-Mo18LQgnoGTciS9Y4qy4M8R93OS2MVGarfw8w&s=10',
            'gandhara': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ffAtDW5ZdUVvXaF8r_itxKRF86aIDi_WsnSjhVq4mRHs70Sg5AWbvZY&s=10'
        };
        if (realPhotos[hubId]) return realPhotos[hubId];

        const palettes = {
            'ajanta': { bg: '#2b1d16', accent: '#dfb74d', sub: '#4a82a6', motif: 'lotus' },
            'ellora': { bg: '#231f1c', accent: '#c29b38', sub: '#a37081', motif: 'temple' },
            'bhimbetka': { bg: '#3a2016', accent: '#e07a5f', sub: '#f4f1de', motif: 'cave' },
            'thanjavur': { bg: '#1c222e', accent: '#dfb74d', sub: '#d90429', motif: 'nataraja' },
            'madhubani': { bg: '#2a221b', accent: '#e63946', sub: '#f4a261', motif: 'mithila' },
            'kishangarh': { bg: '#231a24', accent: '#dfb74d', sub: '#f1faee', motif: 'banithani' },
            'kangra': { bg: '#1a261d', accent: '#52b788', sub: '#dfb74d', motif: 'pahari' },
            'warli': { bg: '#382b22', accent: '#ffffff', sub: '#dfb74d', motif: 'warli' },
            'kolkata-bengal': { bg: '#22222a', accent: '#dfb74d', sub: '#e63946', motif: 'bengal' },
            'raghurajpur': { bg: '#281c15', accent: '#f77f00', sub: '#dfb74d', motif: 'pattachitra' },
            'hampi': { bg: '#26201a', accent: '#dfb74d', sub: '#9e3623', motif: 'chariot' },
            'khajuraho': { bg: '#2b2319', accent: '#dfb74d', sub: '#b56576', motif: 'sculpture' },
            'mathura': { bg: '#331d1a', accent: '#dfb74d', sub: '#f28482', motif: 'buddha' },
            'nathdwara': { bg: '#18232c', accent: '#dfb74d', sub: '#ffffff', motif: 'pichwai' },
            'srikalahasti': { bg: '#2c221a', accent: '#dfb74d', sub: '#2a9d8f', motif: 'kalamkari' },
            'bastar': { bg: '#23201c', accent: '#dfb74d', sub: '#84a59d', motif: 'dhokra' },
            'unakoti': { bg: '#1a2622', accent: '#dfb74d', sub: '#588157', motif: 'rockshiva' },
            'kochi-murals': { bg: '#2c1e14', accent: '#f4a261', sub: '#2a9d8f', motif: 'keralamural' },
            'cheriyal': { bg: '#381616', accent: '#dfb74d', sub: '#f8edeb', motif: 'cheriyal' },
            'kutch-rogan': { bg: '#1c242b', accent: '#dfb74d', sub: '#e76f51', motif: 'rogan' },
            'belur-halebidu': { bg: '#242124', accent: '#dfb74d', sub: '#a37081', motif: 'bracket' },
            'travancore-varma': { bg: '#19222d', accent: '#dfb74d', sub: '#e63946', motif: 'varma' },
            'delhi-mughal': { bg: '#241b18', accent: '#dfb74d', sub: '#457b9d', motif: 'mughal' },
            'gandhara': { bg: '#252528', accent: '#dfb74d', sub: '#90be6d', motif: 'gandhara' }
        };

        const theme = palettes[hubId] || { bg: '#2c241c', accent: '#dfb74d', sub: '#e5ddd2', motif: 'generic' };

        // Generate customized geometric heritage SVG
        let motifSvg = '';
        if (theme.motif === 'nataraja') {
            motifSvg = `
                <circle cx="300" cy="180" r="110" fill="none" stroke="${theme.accent}" stroke-width="6" stroke-dasharray="10, 14" opacity="0.85"/>
                <path d="M300 100 L300 260 M250 150 L350 210 M250 210 L350 150 M260 250 L340 120" stroke="${theme.accent}" stroke-width="4" stroke-linecap="round"/>
                <circle cx="300" cy="130" r="22" fill="${theme.sub}"/>
                <polygon points="300,70 310,95 290,95" fill="${theme.accent}"/>
            `;
        } else if (theme.motif === 'warli') {
            motifSvg = `
                <circle cx="300" cy="180" r="120" fill="none" stroke="${theme.sub}" stroke-width="2" stroke-dasharray="8,8" opacity="0.4"/>
                <polygon points="285,150 315,150 300,180" fill="${theme.accent}"/>
                <polygon points="300,180 285,210 315,210" fill="${theme.accent}"/>
                <circle cx="300" cy="140" r="10" fill="${theme.accent}"/>
                <!-- Spiral mini dancers -->
                <circle cx="240" cy="160" r="6" fill="${theme.sub}"/><line x1="240" y1="166" x2="240" y2="190" stroke="${theme.sub}" stroke-width="3"/>
                <circle cx="360" cy="160" r="6" fill="${theme.sub}"/><line x1="360" y1="166" x2="360" y2="190" stroke="${theme.sub}" stroke-width="3"/>
                <circle cx="300" cy="240" r="6" fill="${theme.sub}"/><line x1="300" y1="246" x2="300" y2="270" stroke="${theme.sub}" stroke-width="3"/>
                <circle cx="300" cy="100" r="6" fill="${theme.sub}"/><line x1="300" y1="106" x2="300" y2="130" stroke="${theme.sub}" stroke-width="3"/>
            `;
        } else if (theme.motif === 'lotus' || theme.motif === 'banithani') {
            motifSvg = `
                <circle cx="300" cy="180" r="100" fill="none" stroke="${theme.accent}" stroke-width="2" opacity="0.5"/>
                <path d="M300 110 C340 150 340 210 300 250 C260 210 260 150 300 110 Z" fill="${theme.accent}" opacity="0.8"/>
                <path d="M230 180 C270 140 330 140 370 180 C330 220 270 220 230 180 Z" fill="${theme.sub}" opacity="0.6"/>
                <circle cx="300" cy="180" r="16" fill="${theme.accent}"/>
            `;
        } else {
            motifSvg = `
                <circle cx="300" cy="180" r="120" fill="none" stroke="${theme.accent}" stroke-width="2" stroke-dasharray="6,8" opacity="0.6"/>
                <polygon points="300,100 360,180 300,260 240,180" fill="none" stroke="${theme.accent}" stroke-width="3"/>
                <circle cx="300" cy="180" r="45" fill="${theme.sub}" opacity="0.75"/>
                <polygon points="300,120 340,180 300,240 260,180" fill="${theme.accent}" opacity="0.9"/>
            `;
        }

        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
            <rect width="600" height="360" fill="${theme.bg}"/>
            <rect x="15" y="15" width="570" height="330" fill="none" stroke="${theme.accent}" stroke-width="1.5" opacity="0.5" rx="10"/>
            <rect x="25" y="25" width="550" height="310" fill="none" stroke="${theme.accent}" stroke-width="0.75" stroke-dasharray="4,4" opacity="0.4" rx="8"/>
            ${motifSvg}
            <text x="300" y="300" font-family="'Cinzel',serif" font-size="20" font-weight="bold" fill="${theme.accent}" text-anchor="middle">${title}</text>
            <text x="300" y="325" font-family="sans-serif" font-size="12" font-weight="600" fill="#d5cbbf" text-anchor="middle" letter-spacing="2">${category.toUpperCase()}</text>
        </svg>`;
        return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
    }

    /* ==========================================================
       DATASET: 24 KEY ART HISTORICAL HUBS OF INDIA
       ========================================================== */
    const artLocations = [
        {
            id: 'ajanta',
            name: 'Ajanta Caves',
            state: 'Maharashtra',
            lat: 20.5519,
            lng: 75.7033,
            era: 'Classical & Cave Art',
            eraEpoch: 'Classical',
            period: '2nd Century BCE – 5th Century CE',
            category: 'Murals & Frescoes',
            galleryCat: 'fresco',
            region: 'West',
            dynasty: 'Satavahana & Vakataka Empires',
            patron: 'Emperor Harishena & Royal Monastic Guilds',
            artist: 'Ancient Buddhist Monastic Guilds (Sthapatis & Chitrakaras)',
            masterpiece: 'Bodhisattva Padmapani',
            medium: 'Mineral tempera on mud-cow dung plaster with lime finish',
            tagline: 'The Zenith of Classical Buddhist Fresco Painting & Celestial Compassion',
            shortDesc: 'A horseshoe gorge of 30 rock-cut caves adorned with masterpiece Buddhist frescoes illustrating Jataka tales, celestial Bodhisattvas, and courtly splendor.',
            fullDesc: 'The Ajanta Caves represent the pinnacle of classical Indian mural painting. Carved into the basalt cliffs of the Waghora river, these 30 Buddhist rock-cut monasteries and prayer halls showcase breathtaking tempera frescoes. The painters mastered three-dimensional modeling with natural minerals, rendering supple limbs, cascading pearls, and deeply compassionate expressions, best exemplified by the iconic Bodhisattva Padmapani in Cave 1.',
            historyContext: 'Begun in the 2nd century BCE under the Satavahanas and revived in a spectacular second phase (5th century CE) under the Vakataka Emperor Harishena, Ajanta flourished as a key intellectual and pilgrimage sanctuary along ancient Deccan trade routes linking Ujjain with the Arabian Sea.',
            preservation: 'Designated a UNESCO World Heritage Site in 1983; maintained and conserved using non-invasive micro-chemical cleaning by the Archaeological Survey of India (ASI).',
            techniques: [
                { name: 'Ground Layer Plaster', desc: 'Mud, clay, cow dung, straw, and rock grit mixed and applied directly to basalt stone.' },
                { name: 'Wash & Outline', desc: 'Fine lime wash coat followed by sinuous reddish-brown ochre calligraphic outlines.' },
                { name: 'Mineral Pigments', desc: 'Lapis lazuli (blue), red & yellow ochre, terra verde (green), kaolin (white), and lampblack.' },
                { name: 'Gradated Shading (Vartana)', desc: 'Cross-hatching and subtle pigment gradation creating lifelike anatomical depth and volume.' }
            ],
            influence: {
                origin: 'Ajanta (Maharashtra)',
                destinations: 'Bagh Caves (MP), Sigiriya (Sri Lanka), Kizil & Dunhuang (Silk Road, China)',
                text: 'Ajanta established the pan-Asian aesthetic grammar of Buddhist sacred art. Its linear elegance directly inspired the 5th-century cloud maidens of Sigiriya in Sri Lanka and traversed caravan trails into Central Asian cave complexes and the Mogao Grottoes of Dunhuang.'
            },
            audioTranscript: 'Welcome to Ajanta. Stand before Cave 1 and behold the Bodhisattva Padmapani. Holding a delicate blue lotus, his gently tilted head and half-closed eyes embody Karuna, or universal compassion. Notice how the ancient masters used lapis lazuli imported from distant Badakhshan to illuminate royal tiaras, bringing divine grace to life upon living rock.'
        },
        {
            id: 'ellora',
            name: 'Ellora Caves & Kailasa Temple',
            state: 'Maharashtra',
            lat: 20.0268,
            lng: 75.1780,
            era: 'Medieval Temple Age',
            eraEpoch: 'Medieval',
            period: '6th – 10th Century CE',
            category: 'Rock-cut & Sculpture',
            galleryCat: 'sculpture',
            region: 'West',
            dynasty: 'Rashtrakuta & Yadava Dynasties',
            patron: 'King Krishna I of the Rashtrakutas',
            artist: 'Master Guild of Vishwakarma Sculptors',
            masterpiece: 'Kailasa Monolithic Temple (Cave 16) & Ravana Shaking Kailasa',
            medium: 'Monolithic top-down basalt rock excavation and relief carving',
            tagline: 'The World’s Greatest Monolithic Architectural & Sculptural Triumph',
            shortDesc: 'A colossal monolithic temple carved top-down from a single basalt cliff, featuring dramatic multi-armed deities and monumental rock architecture.',
            fullDesc: 'Ellora features 34 major rock-cut monuments spanning Hindu, Buddhist, and Jain traditions. The crown jewel is Cave 16, the Kailasa Temple—an entire multi-storey Dravidian temple complex carved top-to-bottom from a single mountain of living basalt rock, removing over 200,000 tons of stone without scaffolding. Its bas-reliefs, such as Ravana Shaking Mount Kailasa, exhibit unmatched dramatic tension and spatial dynamism.',
            historyContext: 'Constructed primarily under the Rashtrakuta monarch Krishna I (c. 756–773 CE), Ellora reflects an era of religious pluralism and imperial ambition, synthesizing northern Nagara and southern Dravidian architectural canons.',
            preservation: 'UNESCO World Heritage Site since 1983; protected by the ASI with continuous 3D laser mapping and cliff drainage maintenance.',
            techniques: [
                { name: 'Top-Down Excavation', desc: 'Quarrying began from the cliff crown downward, carving finials first to avoid scaffold collapse.' },
                { name: 'Deep Relief Undercutting', desc: 'Sculpting high relief figures with dramatic shadows that accentuate muscular vitality.' },
                { name: 'White Plaster Coating', desc: 'Originally coated with white lime plaster to evoke the snow-clad peaks of Mount Kailasa.' }
            ],
            influence: {
                origin: 'Ellora (Maharashtra)',
                destinations: 'Elephanta Caves, Badami Chalukyan Temples, Pattadakal',
                text: 'Ellora’s bold monolithic engineering inspired regional Deccan dynasties and set new benchmarks for structural temple complexes throughout peninsular India.'
            },
            audioTranscript: 'You are beholding the Kailasa at Ellora. Over a millennium ago, architects began chiseling at the mountain peak, working downward with uncanny mathematical precision. Look at the frieze of life-sized elephants supporting the temple base, symbolizing cosmic equilibrium.'
        },
        {
            id: 'bhimbetka',
            name: 'Bhimbetka Rock Shelters',
            state: 'Madhya Pradesh',
            lat: 22.9372,
            lng: 77.5833,
            era: 'Prehistoric & Ancient',
            eraEpoch: 'Prehistoric',
            period: '10,000 BCE – 1,000 BCE',
            category: 'Murals & Frescoes',
            galleryCat: 'fresco',
            region: 'Central',
            dynasty: 'Mesolithic & Upper Paleolithic Hunter-Gatherer Bands',
            patron: 'Indigenous Mesolithic Communities',
            artist: 'Prehistoric Shaman-Artists',
            masterpiece: 'Zoo Rock & The Great Horned Boar',
            medium: 'Natural mineral pigments on sandstone shelter walls',
            tagline: 'Dawn of Human Aesthetic Consciousness on the Indian Subcontinent',
            shortDesc: 'Over 750 sandstone rock shelters displaying Mesolithic cave paintings of hunts, dances, animals, and sacred rituals in red and white ochre.',
            fullDesc: 'Nestled in the Vindhyan sandstone hills, Bhimbetka holds one of the world’s oldest continuous rock art archives. The paintings span from the Upper Paleolithic through the Mesolithic to historic times. Dynamic silhouette stick figures depict wild bison, elephants, rhinos, community circle dances, child-rearing, and shamanic hunts rendered with vitality and rhythm.',
            historyContext: 'Discovered in 1957 by archaeologist Dr. V.S. Wakankar, these shelters demonstrate over 100,000 years of human habitation and provide invaluable insight into the origins of symbolic thinking in South Asia.',
            preservation: 'UNESCO World Heritage Site; strictly protected to shield natural vegetable binders and mineral layers from humidity and visitor touch.',
            techniques: [
                { name: 'Natural Mineral Powders', desc: 'Hematite (red iron oxide), manganese, kaolin (white), and copper-infused green ochre.' },
                { name: 'Organic Binders', desc: 'Pigments blended with animal fat, plant resin, and water to bond with porous sandstone.' },
                { name: 'Twig & Fiber Brushes', desc: 'Frayed bamboo splints and animal hair applied with rhythmic linear strokes.' }
            ],
            influence: {
                origin: 'Bhimbetka (Vindhya Range)',
                destinations: 'Warli Art (Maharashtra), Gond Tribal Murals (MP), Pithora Wall Art (Gujarat)',
                text: 'The geometric stick figures, communal circular dances, and reverence for wild beasts seen at Bhimbetka survive directly in contemporary Indian tribal arts like Warli and Gond.'
            },
            audioTranscript: 'Step back ten thousand years into the sandstone sanctuaries of Bhimbetka. Look closely at the famous Zoo Rock: Mesolithic hunter-artists captured galloping deer and massive horned boars using red hematite ochre mixed with tree sap.'
        },
        {
            id: 'thanjavur',
            name: 'Thanjavur (Tanjore)',
            state: 'Tamil Nadu',
            lat: 10.7870,
            lng: 79.1378,
            era: 'Medieval Temple Age',
            eraEpoch: 'Medieval',
            period: '9th – 18th Century CE',
            category: 'Rock-cut & Sculpture',
            galleryCat: 'sculpture',
            region: 'South',
            dynasty: 'Imperial Chola & Maratha Dynasties',
            patron: 'Rajaraja Chola I & King Serfoji II',
            artist: 'Chola Royal Bronze Guilds (Sthapatis)',
            masterpiece: 'Shiva as Nataraja (Lord of Cosmic Dance)',
            medium: 'Lost-wax (Cire-perdue) bronze casting & 22-carat gold foil on teak',
            tagline: 'The Apex of Sacred Bronze Sculpture & Radiant Gilded Iconography',
            shortDesc: 'The cultural capital of the Cholas, famed for the Great Living Brihadeeswarar Temple, divine lost-wax bronze Natarajas, and glowing Tanjore gold-leaf paintings.',
            fullDesc: 'Thanjavur was the beating heart of the Imperial Cholas. Here, master sculptors perfected the Cire-perdue (lost-wax) technique to cast the Nataraja—the iconic representation of Shiva dancing the Anandatandava within an arch of cosmic flames. Later under Nayaka and Maratha rulers, the city developed Tanjore painting, renowned for wooden planks embossed with gesso, precious stones, and pure 22-karat gold foil.',
            historyContext: 'Built under Emperor Rajaraja Chola I (c. 1010 CE), the Brihadeeswarar Temple was the ideological centerpiece of a maritime empire that connected South India with Southeast Asia, radiating artistic canons across oceans.',
            preservation: 'Part of the UNESCO "Great Living Chola Temples"; bronze casting traditions continue unbroken in nearby Swamimalai under hereditary master craftsmen.',
            techniques: [
                { name: 'Madhuchehishtavidhana (Lost-Wax)', desc: 'Beeswax core sculpting, clay encapsulation, baking to melt wax, and pouring molten Panchaloha alloy.' },
                { name: 'Panchaloha Metal Alloy', desc: 'Sacred five-metal alloy of copper, brass, lead, silver, and gold providing resonance and luster.' },
                { name: 'Tanjore Gesso & Gold Leaf', desc: 'Chalk powder and gum paste relief work overlaid with genuine micro-thin gold foil and Jaipur gems.' }
            ],
            influence: {
                origin: 'Thanjavur (Kaveri Delta)',
                destinations: 'Polonnaruwa (Sri Lanka), Angkor (Cambodia), Prambanan (Java, Indonesia)',
                text: 'Chola maritime trade carried bronze casting blueprints and Hindu-Buddhist iconography to royal courts across the Bay of Bengal, shaping Khmer and Javanese sacred art.'
            },
            audioTranscript: 'Welcome to Thanjavur, where bronze was transformed into cosmic poetry. Observe the Nataraja: his right foot crushes the dwarf of spiritual ignorance, his upper hands hold the drum of creation and the fire of dissolution, balanced in eternal dynamic stillness.'
        },
        {
            id: 'madhubani',
            name: 'Mithila & Madhubani',
            state: 'Bihar',
            lat: 26.3540,
            lng: 86.0716,
            era: 'Modern & Living Heritage',
            eraEpoch: 'Modern',
            period: 'Ancient Antiquity to Living Tradition',
            category: 'Folk & Tribal Art',
            galleryCat: 'folk',
            region: 'East',
            dynasty: 'Mithila Folk Tradition & Karnata Dynasty',
            patron: 'Mithila Matriarchs & Community Elders',
            artist: 'Sita Devi, Ganga Devi, Mahasundari Devi & Village Women',
            masterpiece: 'Kohbar Nuptial Chamber Mural & Krishna-Radha Lila',
            medium: 'Natural dyes on handmade paper & mud walls using bamboo twigs and nibs',
            tagline: 'Sacred Matriarchal Ritual Murals & Cosmic Symbolism',
            shortDesc: 'Vibrant ritual paintings with intricate double outlines, filled with nature, deities, and geometric symbols painted on nuptial walls and handmade paper.',
            fullDesc: 'Mithila (Madhubani) art is a 2,500-year-old living tradition practiced predominantly by women in northern Bihar and southern Nepal. Characterized by double-line contours, vibrant natural plant pigments, and horror vacui (filling every empty space with birds, flora, and geometric hatchings), the art encompasses distinct styles: the vibrant Bharni and fine Kachni line work, Godna tattoo motifs, and sacred Kohbar fertility diagrams.',
            historyContext: 'Legend traces its origin to King Janaka commissioning artists to decorate Mithila for the wedding of Sita and Rama. In 1934, British officer William G. Archer discovered the interior murals after an earthquake, bringing them to international attention.',
            preservation: 'Protected by Geographical Indication (GI) status; celebrated globally through master painters like Ganga Devi, whose works are in the National Crafts Museum.',
            techniques: [
                { name: 'Bamboo Pen (Tilli)', desc: 'Pointed bamboo twigs and cotton-wrapped matchsticks used to draw fluid double outlines.' },
                { name: 'Organic Pigment Extraction', desc: 'Turmeric (yellow), indigo (blue), aparajita flower, kusum petal red, and kohl/soot (black).' },
                { name: 'Kachni (Hatching)', desc: 'Parallel fine line hatching and cross-hatching creating rhythmic texture and optical movement.' }
            ],
            influence: {
                origin: 'Mithila / Madhubani (Bihar)',
                destinations: 'Global Folk Art Museums, Modern Indian Narrative Art, Jamini Roy Modernism',
                text: 'Madhubani’s direct, flat plane geometry and mythic narrative style profoundly influenced modern Indian folk revivals and international indigenous art movements.'
            },
            audioTranscript: 'You are looking at a masterwork of Mithila art. Notice how no space is left empty: every corner blossoms with lotus flowers, parrots, and sun symbols, painted using natural juices from crushed turmeric, indigo leaves, and lamp soot.'
        },
        {
            id: 'kishangarh',
            name: 'Kishangarh & Jaipur',
            state: 'Rajasthan',
            lat: 26.5746,
            lng: 74.8647,
            era: 'Mughal & Rajput Golden Age',
            eraEpoch: 'Mughal-Rajput',
            period: '18th Century CE (c. 1740–1780)',
            category: 'Miniature Painting',
            galleryCat: 'painting',
            region: 'West',
            dynasty: 'Rathore Rajput Principality',
            patron: 'Savant Singh (Nagari Das)',
            artist: 'Master Painter Nihal Chand',
            masterpiece: 'Radha as Bani Thani (The Indian Mona Lisa)',
            medium: 'Opaque watercolor (gouache) and gold leaf on handmade Wasli paper',
            tagline: 'Lyrical Mysticism & Languid Grace of Rajput Miniatures',
            shortDesc: 'Renowned for the ethereal Bani Thani portrait with exaggerated lotus eyes, arched brows, translucent odhni veils, and romantic Radha-Krishna devotion.',
            fullDesc: 'The Kishangarh school under the visionary court painter Nihal Chand developed one of the most distinctive aesthetic styles in Indian miniature history. Inspired by the poet-king Savant Singh and his beloved singer-poetess Bani Thani, Chand created idealized portraits featuring elongated faces, sweeping arched brows, serpentine tresses, and whisper-thin gossamer veils decorated with gold leaf speckles.',
            historyContext: 'Flourishing during the mid-18th century as Mughal central authority decentralized, Kishangarh artists infused the refined techniques of Delhi ateliers with passionate Vaishnava Bhakti devotion.',
            preservation: 'Key folios preserved in the National Museum, New Delhi, and City Palace collections; Bani Thani was honored on a commemorative Indian postage stamp.',
            techniques: [
                { name: 'Wasli Paper Preparation', desc: 'Multiple sheets of rice/jute paper laminated with starch paste and burnished with agate stone.' },
                { name: 'Squirrel Hair Micro-Brushes', desc: 'Single-hair brushes crafted from squirrel tails enabling sub-millimeter detailing of eyelashes.' },
                { name: 'Gouache & Gold Gilding', desc: 'Opaque mineral pigments with Arabic gum and burnished pure gold leaf (varaq).' }
            ],
            influence: {
                origin: 'Kishangarh (Rajasthan)',
                destinations: 'Jaipur, Bikaner, Mewar, Bundi Miniature Schools',
                text: 'The Kishangarh aesthetic redefined the romantic visual vocabulary of Rajput court miniatures, spreading stylized facial conventions across Marwar and Mewar.'
            },
            audioTranscript: 'Behold the celebrated Bani Thani of Kishangarh, painted by master Nihal Chand. Her arched eyebrow bends like Kama’s bow; her elongated lotus eyes gaze into the distance. She is not merely a court beauty, but an embodiment of Radha’s spiritual longing for Krishna.'
        },
        {
            id: 'kangra',
            name: 'Kangra & Basohli',
            state: 'Himachal Pradesh',
            lat: 32.0998,
            lng: 76.2691,
            era: 'Mughal & Rajput Golden Age',
            eraEpoch: 'Mughal-Rajput',
            period: '17th – 19th Century CE',
            category: 'Miniature Painting',
            galleryCat: 'painting',
            region: 'North',
            dynasty: 'Katoch Dynasty & Pahari Hill States',
            patron: 'Maharaja Sansar Chand & Raja Kripal Pal',
            artist: 'Pandit Seu Family (Nainsukh, Manaku, Fattu)',
            masterpiece: 'Gita Govinda & Bhagavata Purana Lyrical Folios',
            medium: 'Tempera on Wasli paper using beetle-wing cases and natural hill minerals',
            tagline: 'Lyrical Pahari Miniatures & Verdant Himalayan Poetics',
            shortDesc: 'Pahari miniature painting renowned for gentle naturalism, emerald green Himalayan landscapes, exquisite female portraits, and luminous Gita Govinda illustrations.',
            fullDesc: 'Nestled in the shadow of the snow-peaked Dhauladhar mountains, the Kangra and Basohli schools created some of the most emotionally resonant paintings in the world. Basohli pioneered intense monochrome yellow backgrounds and shimmering beetle-wing cases; later, master Nainsukh and his family in Kangra introduced subtle realism, porcelain-like skin tones, and lush pastoral landscapes where every leaf and stream echoes divine love.',
            historyContext: 'Maharaja Sansar Chand of Kangra (reigned 1775–1823) gathered master artists fleeing political unrest in the plains, turning the Kangra valley into a flourishing center of romantic miniature production.',
            preservation: 'Immortalized in seminal art historical monographs by Dr. B.N. Goswamy; celebrated in the Kangra Arts Museum, Dharamshala, and Chandigarh Museum.',
            techniques: [
                { name: 'Beetle-Wing Elytra (Basohli)', desc: 'Iridescent emerald-green pieces of jewel beetle wings cut and pasted as emerald jewelry.' },
                { name: 'Pahari Wasli Burnishing', desc: 'Polishing paper with conch shells to create an enamel-smooth, non-absorbent surface.' },
                { name: 'Verdant Color Harmonies', desc: 'Mineral malachite greens, cinnabar reds, and lapis blues evoking monsoon meadows.' }
            ],
            influence: {
                origin: 'Kangra & Basohli (Pahari Hills)',
                destinations: 'Guler, Chamba, Mandi, Garhwal (Uttarakhand)',
                text: 'Nainsukh’s pioneering painterly family migrated between hill courts, establishing the signature Pahari idiom that spread from Jammu to Tehri-Garhwal.'
            },
            audioTranscript: 'Welcome to the enchanted valleys of Kangra. Look at the verdant green hills framing Radha and Krishna. Master Nainsukh revolutionized Indian art by capturing the quiet, private intimacy of human emotion against majestic Himalayan scenery.'
        },
        {
            id: 'warli',
            name: 'Warli Region, Palghar',
            state: 'Maharashtra',
            lat: 19.6967,
            lng: 72.7699,
            era: 'Modern & Living Heritage',
            eraEpoch: 'Modern',
            period: 'Ancient Traditions to Contemporary Masterwork',
            category: 'Folk & Tribal Art',
            galleryCat: 'folk',
            region: 'West',
            dynasty: 'Warli Indigenous Tribal Society',
            patron: 'Suvasinis (Married Tribal Priestesses) & Village Community',
            artist: 'Jivya Soma Mashe (Padma Shri)',
            masterpiece: 'The Great Tarpa Dance & Palghat Goddess Murals',
            medium: 'White rice flour paste on mud & cow-dung ochre walls using bamboo sticks',
            tagline: 'Elementary Geometry & Sacred Harmony with Mother Nature',
            shortDesc: 'Minimalist tribal paintings using circles, triangles, and squares rendered in white rice paste against earthen walls to portray harvest dances, hunts, and deities.',
            fullDesc: 'The Warli tribe residing in the northern Sahyadri ranges creates a unique visual language based on basic geometric forms: the circle, the triangle, and the square. In the iconic Tarpa dance, dancers interlock hands in a spiral mimicking the cosmic coil of life around a central horn player.',
            historyContext: 'Traditionally painted exclusively by women (Suvasinis) during weddings to bless the home with harvest fertility, the art was elevated to global contemporary prominence by master artist Jivya Soma Mashe in the 1970s.',
            preservation: 'Awarded GI status; exhibited internationally in Paris (Centre Pompidou) and Tokyo; sustained through master tribal artisan cooperatives.',
            techniques: [
                { name: 'Lippan Earth Base', desc: 'Wall coated with a mixture of red soil, cow dung, and acacia tree gum.' },
                { name: 'Rice Flour Paint', desc: 'Ground rice paste mixed with water and natural gum binder to achieve stark white brilliance.' },
                { name: 'Bamboo Chewed Nib', desc: 'Chewed bamboo twig acting as a flexible calligraphy brush.' }
            ],
            influence: {
                origin: 'Palghar / Thane (Maharashtra)',
                destinations: 'Contemporary Indian Graphic Design, Global Indigenous Art, Architecture',
                text: 'Warli’s minimalist geometric aesthetic has achieved worldwide acclaim, bridging ancient tribal cosmology with modern graphic sensibilities.'
            },
            audioTranscript: 'Listen to the sound of the Tarpa horn. In this Warli painting, human figures formed by two interlocking triangles hold hands in an unbroken spiral dance. For the Warli, life is cyclical, lived in humble symbiosis with the forest and its creatures.'
        },
        {
            id: 'kolkata-bengal',
            name: 'Kolkata & Santiniketan',
            state: 'West Bengal',
            lat: 22.5726,
            lng: 88.3639,
            era: 'Colonial & Bengal School',
            eraEpoch: 'Modern',
            period: 'Late 19th – Mid 20th Century CE',
            category: 'Modern & Renaissance',
            galleryCat: 'painting',
            region: 'East',
            dynasty: 'Bengal Renaissance & Swadeshi Movement',
            patron: 'Tagore Family & Swadeshi Art Guilds',
            artist: 'Abanindranath Tagore, Nandalal Bose, Jamini Roy, Rabindranath Tagore',
            masterpiece: 'Bharat Mata (1905) by Abanindranath Tagore & Santhal Mother by Jamini Roy',
            medium: 'Japanese wash technique, tempera, and folk-inspired natural earth pigments',
            tagline: 'The Swadeshi Awakening & The Birth of Modern Indian Art',
            shortDesc: 'The cradle of the Bengal School of Art, pioneering an anti-colonial Swadeshi visual identity rooted in Ajanta frescoes, Mughal miniatures, and rural Kalighat folk art.',
            fullDesc: 'At the turn of the 20th century, Kolkata and Rabindranath Tagore’s Kala Bhavana at Santiniketan became the crucible of the modern Indian art movement. Rejecting academic Western realism taught by British colonial schools, Abanindranath Tagore synthesized Japanese wash techniques with Mughal delicacy and Ajanta spiritualism to paint "Bharat Mata". Concurrently, Jamini Roy rediscovered the bold, rhythmic lines of village Kalighat patuas.',
            historyContext: 'Aligned with the anti-partition Swadeshi movement of 1905, the Bengal School provided India with an autonomous national visual language that reclaimed cultural sovereignty.',
            preservation: 'Masterpieces preserved in the National Gallery of Modern Art (NGMA), Victoria Memorial, and Rabindra Bharati Museum.',
            techniques: [
                { name: 'Bengal Wash Technique', desc: 'Repeatedly applying translucent watercolor washes and rinsing in water trays for a hazy, dreamlike luminosity.' },
                { name: 'Folk Tempera on Cloth/Wood', desc: 'Jamini Roy’s use of local clay, soot, tamarind seed gum, and chalk on woven canvas.' },
                { name: 'Ajanta Calligraphic Contour', desc: 'Sweeping lyrical brushwork defining emotional silhouettes without harsh chiaroscuro.' }
            ],
            influence: {
                origin: 'Kolkata & Santiniketan (Bengal)',
                destinations: 'Mumbai (Progressive Artists Group), Delhi Silpi Chakra, Madras Movement',
                text: 'The Bengal School ignited modernist movements across India, directly inspiring subsequent generations of artists in Bombay, Baroda, and Chennai to forge modern Indian identities.'
            },
            audioTranscript: 'You stand in Kolkata at the birth of Modern Indian Art. In 1905, Abanindranath Tagore painted Bharat Mata as a serene ascetic woman in saffron robes, offering food, cloth, knowledge, and spiritual peace, awakening a nation’s artistic soul.'
        },
        {
            id: 'raghurajpur',
            name: 'Raghurajpur & Puri',
            state: 'Odisha',
            lat: 19.8837,
            lng: 85.8309,
            era: 'Medieval Temple Age',
            eraEpoch: 'Medieval',
            period: '12th Century CE to Living Tradition',
            category: 'Folk & Tribal Art',
            galleryCat: 'folk',
            region: 'East',
            dynasty: 'Eastern Ganga & Gajapati Dynasties',
            patron: 'Lord Jagannath Temple & Gajapati Kings',
            artist: 'Chitrakar Master Guilds & Palm Leaf Engravers',
            masterpiece: 'Tala Pattachitra (Palm Leaf Etching) & Jagannath Dasavatara',
            medium: 'Natural mineral colors on treated cotton canvas & etched palm leaves',
            tagline: 'Sacred Cloth Scrolls & Palm Leaf Miniature Engravings',
            shortDesc: 'A heritage crafts village where every family creates intricate Pattachitra cloth scrolls, palm-leaf (Talapatra) etchings, and Jagannath temple icons.',
            fullDesc: 'Raghurajpur is an open-air living museum where the sacred art of Pattachitra has been practiced for over a millennium. Chitrakars prepare canvas using layers of cotton cloth glued with tamarind seed paste and coated with soft white clay. They paint intricate episodes from the Gita Govinda, Ramayana, and the triad of Lord Jagannath.',
            historyContext: 'Originally created as ritual substitutes (Anasara Patti) for the idols of the Jagannath Temple in Puri during the annual fortnight when the sanctum is closed.',
            preservation: 'Declared Odisha’s first Heritage Crafts Village in 2000; Chitrakar families pass down centuries-old palm leaf manuscripts and natural pigment recipes.',
            techniques: [
                { name: 'Patta Cloth Preparation', desc: 'Old cotton treated with boiled tamarind seed paste and ground river chalk, burnished with stones.' },
                { name: 'Talapatra Palm Leaf Etching', desc: 'Dried palm leaves inscribed with an iron stylus and rubbed with lampblack paste.' },
                { name: 'Conch Shell White (Sankha)', desc: 'Crushed sea conch shells ground into an intensely opaque, permanent white pigment.' }
            ],
            influence: {
                origin: 'Raghurajpur / Puri (Odisha)',
                destinations: 'Konark Sun Temple Carvings, Bengal Scroll Painting, Modern Scroll Narrative',
                text: 'Pattachitra’s dynamic floral borders and stylized almond eyes mirror the monumental 13th-century stone carvings of Konark, preserving an unbroken artistic continuum.'
            },
            audioTranscript: 'Welcome to Raghurajpur, Odisha’s sacred craft village. Watch a master Chitrakar engrave a dry palm leaf with a sharp iron stylus before rubbing black lamp soot into the grooves, unveiling stories of Lord Jagannath with microscopic precision.'
        },
        {
            id: 'hampi',
            name: 'Hampi & Badami',
            state: 'Karnataka',
            lat: 15.3350,
            lng: 76.4600,
            era: 'Late Medieval & Sultanate',
            eraEpoch: 'Medieval',
            period: '6th – 16th Century CE',
            category: 'Rock-cut & Sculpture',
            galleryCat: 'sculpture',
            region: 'South',
            dynasty: 'Early Chalukya & Vijayanagara Empire',
            patron: 'Pulakeshin II & Emperor Krishnadevaraya',
            artist: 'Vijayanagara Imperial Guilds of Sculptors & Muralists',
            masterpiece: 'Stone Chariot at Vittala Temple & Virupaksha Ceiling Murals',
            medium: 'Granite carving, musical pillars, and ceiling tempera frescoes',
            tagline: 'Granite Splendor & Celestial Epics of the Vijayanagara Empire',
            shortDesc: 'A colossal boulder-strewn capital city featuring the iconic Stone Chariot, musical granite pillared halls, and narrative bas-reliefs from the Ramayana.',
            fullDesc: 'Hampi, the capital of the Vijayanagara Empire, stands amidst a landscape of giant granite boulders along the Tungabhadra River. Its temples—such as the Vittala complex with its iconic Stone Chariot and resonant musical pillars—showcase granite carving pushed to its structural and aesthetic limits.',
            historyContext: 'Under Emperor Krishnadevaraya (1509–1529), Hampi was one of the wealthiest and largest cities in the world, serving as a bastion of Southern Indian architecture, arts, and literature.',
            preservation: 'UNESCO World Heritage Site; under rigorous conservation by ASI and the Hampi World Heritage Area Management Authority (HWHAMA).',
            techniques: [
                { name: 'Hard Granite Carving', desc: 'Splitting and carving crystalline hard granite without modern power tools.' },
                { name: 'Musical Pillar Resonance', desc: 'Hollowing and calibrating granite stone pillars to emit distinct musical notes.' },
                { name: 'Vijayanagara Ceiling Tempera', desc: 'Lime-plastered temple ceilings painted with vibrant narrative episodes of cosmic battles.' }
            ],
            influence: {
                origin: 'Hampi (Karnataka)',
                destinations: 'Lepakshi (AP), Madurai Nayaka Temples (TN), Padmanabhapuram (Kerala)',
                text: 'Vijayanagara artistic idioms spread across South India, profoundly influencing the dramatic Nayaka temple sculptures of Madurai and the Veerabhadra frescoes at Lepakshi.'
            },
            audioTranscript: 'Stand before the Stone Chariot of Vittala Temple in Hampi. Carved out of multiple blocks of granite with joints disguised with uncanny mastery, its wheels were once designed to rotate, representing the celestial chariot of Garuda.'
        },
        {
            id: 'khajuraho',
            name: 'Khajuraho Temples',
            state: 'Madhya Pradesh',
            lat: 24.8318,
            lng: 79.9199,
            era: 'Medieval Temple Age',
            eraEpoch: 'Medieval',
            period: 'c. 950 – 1050 CE',
            category: 'Rock-cut & Sculpture',
            galleryCat: 'sculpture',
            region: 'Central',
            dynasty: 'Chandela Rajput Dynasty',
            patron: 'Kings Yashovarman, Dhanga & Vidyadhara',
            artist: 'Nagara Guild Master Sthapatis',
            masterpiece: 'Kandariya Mahadeva Temple & Celestial Apsaras',
            medium: 'Buff-colored sandstone relief sculpting & interlocking dry masonry',
            tagline: 'The Pinnacle of Nagara Architecture & Sensual Sacred Sculpture',
            shortDesc: 'Magnificent sandstone temples rising like Himalayan peaks, covered in thousands of exquisitely detailed sculptures of deities, celestial dancers (Apsaras), and mithunas.',
            fullDesc: 'The Khajuraho group of temples represents the zenith of Nagara temple architecture and sculptural virtuosity in Central India. Built by the Chandela rulers, the sandstone facades are enveloped in intricate sculptural bands ranging from soaring shikharas to voluptuous surasundaris.',
            historyContext: 'Built over a century of artistic exuberance between 950 and 1050 CE, the temples celebrate Tantric philosophies where sensual joy (Kama) and spiritual liberation (Moksha) coexist harmoniously.',
            preservation: 'UNESCO World Heritage Site since 1986; carefully protected against sandstone weathering and microbial growth by ASI experts.',
            techniques: [
                { name: 'Mortarless Interlocking Stone', desc: 'Precision mortise-and-tenon interlocking joints held purely by gravity and balance.' },
                { name: 'High-Relief Undercutting', desc: 'Sculpting figures nearly in the round, creating dramatic light-and-shade contrast.' },
                { name: 'Buff Panna Sandstone', desc: 'Fine-grained sandstone quarried from Panna, allowing exquisite rendering of jewelry and fabric.' }
            ],
            influence: {
                origin: 'Khajuraho (Bundelkhand)',
                destinations: 'Sun Temple Modhera (Gujarat), Konark (Odisha), Central Indian Nagara Temples',
                text: 'Khajuraho set the standard for high medieval Nagara temple proportions, influencing sacred architecture across northern and western India.'
            },
            audioTranscript: 'Welcome to Khajuraho. Gaze up at the shikhara of Kandariya Mahadeva, sculpted to mimic Mount Kailasa. The thousands of celestial dancers carved into the sandstone celebrate every facet of human joy, music, and divine ecstasy.'
        },
        {
            id: 'mathura',
            name: 'Mathura & Sarnath',
            state: 'Uttar Pradesh',
            lat: 27.4924,
            lng: 77.6737,
            era: 'Prehistoric & Ancient',
            eraEpoch: 'Classical',
            period: '1st Century BCE – 6th Century CE',
            category: 'Rock-cut & Sculpture',
            galleryCat: 'sculpture',
            region: 'North',
            dynasty: 'Kushana & Gupta Empires',
            patron: 'Emperor Kanishka & Gupta Monarchs',
            artist: 'Mathura Sandstone Sculptural Guilds',
            masterpiece: 'Kushana Buddha with Halo & Sarnath Preaching Buddha',
            medium: 'Spotted red sandstone (Sikri) and Chunar sandstone sculpture',
            tagline: 'The Genesis of Anthropomorphic Deity Sculpture & Gupta Classical Ideal',
            shortDesc: 'The ancient workshop that pioneered the first anthropomorphic representations of the Buddha, Hindu divinities, and sensual Yakshis in spotted red sandstone.',
            fullDesc: 'Mathura was the foremost sculptural atelier of ancient India. Under the Kushana Empire, master sculptors created the earliest freestanding anthropomorphic statues of the Buddha. During the subsequent Gupta period, the Mathura and Sarnath workshops refined this into the classical golden ideal.',
            historyContext: 'Positioned at the strategic crossroads of ancient trade routes (Uttarapatha and Dakshinapatha), Mathura synthesized indigenous Vedic forms with Hellenistic Gandharan elements.',
            preservation: 'Extensive masterworks preserved in the Government Museum Mathura, National Museum New Delhi, and Musée Guimet Paris.',
            techniques: [
                { name: 'Spotted Red Sandstone', desc: 'Quarried from Sikri/Karahari, featuring natural white and cream speckles.' },
                { name: 'Prana (Life-Breath) Modeling', desc: 'Sculpting smooth, taut surfaces suggesting inner pneumatic breath rather than overt muscularity.' },
                { name: 'Elaborate Halo Carving', desc: 'Carving concentric rings of lotus petals, foliage, and bead-and-reel motifs behind divine heads.' }
            ],
            influence: {
                origin: 'Mathura (Uttar Pradesh)',
                destinations: 'Sarnath, Ajanta, Gandhara (NW Frontier), Northern Silk Road',
                text: 'Mathura’s iconographic canon defined how Buddhist and Hindu divinities were sculpted across the subcontinent and throughout Central Asia for centuries.'
            },
            audioTranscript: 'Stand before the Kushana Buddha of Mathura. Unlike Hellenistic statues with heavy realistic drapery, Mathura sculptors infused the sandstone with inner vital breath, creating a serene, smiling face crowned with a halo of cosmic light.'
        },
        {
            id: 'nathdwara',
            name: 'Nathdwara (Pichwai)',
            state: 'Rajasthan',
            lat: 24.9317,
            lng: 73.8188,
            era: 'Mughal & Rajput Golden Age',
            eraEpoch: 'Mughal-Rajput',
            period: '17th Century CE to Present',
            category: 'Textiles & Pichwai',
            galleryCat: 'folk',
            region: 'West',
            dynasty: 'Pushtimarg Vallabhacharya Sampradaya',
            patron: 'Shrinathji Temple & Goswami Priests',
            artist: 'Adi Gaur & Jangid Brahmin Chitrakar Families',
            masterpiece: 'Sharad Purnima & Annakut Festival Pichwai',
            medium: 'Stone pigments and pure gold foil on handspun starched cotton',
            tagline: 'Sacred Textile Hangings of Shrinathji & Celestial Cows',
            shortDesc: 'Intricate cloth tapestries hung behind the sanctum deity of Shrinathji, depicting lotus ponds, divine cows, and Raas Leela dances in rich jewel tones and gold.',
            fullDesc: 'Pichwai is a sacred textile art developed in the temple town of Nathdwara near Udaipur. These large cloth hangings serve as theatrical backdrops for the deity Shrinathji, changing according to the Hindu calendar, seasons, and festivals.',
            historyContext: 'Originating in 1672 when the sacred idol of Shrinathji was moved from Govardhan near Mathura to Mewar to protect it during Aurangzeb’s reign.',
            preservation: 'Protected by GI tag; active studios preserved in Chitron ki Gali (Painters’ Lane) in Nathdwara.',
            techniques: [
                { name: 'Kadi Cotton Starching', desc: 'Handspun cotton soaked in arrowroot and rice water starch, polished with cowrie shells.' },
                { name: 'Natural Mineral Pastes', desc: 'Precious lapis, cinnabar, orpiment (yellow), and silver/gold leaf ground with gum.' },
                { name: 'Shringar & Sthiti Composition', desc: 'Strict iconographic grids mapping celestial trees, gopis, and cows facing the deity.' }
            ],
            influence: {
                origin: 'Nathdwara (Mewar, Rajasthan)',
                destinations: 'Gujarat, Bikaner, Kota, Global Indian Art Collectors',
                text: 'Pichwai’s devotional iconography spread throughout western India and inspired contemporary luxury textile and interior design worldwide.'
            },
            audioTranscript: 'Welcome to Nathdwara. In this Pichwai hanging, see how the white cows of Braj tilt their heads in adoration toward Shrinathji. Master painters spent months grinding gold dust and blue lapis lazuli to bring the fragrance of Vrindavan to life.'
        },
        {
            id: 'srikalahasti',
            name: 'Srikalahasti & Machilipatnam',
            state: 'Andhra Pradesh',
            lat: 13.7498,
            lng: 79.7036,
            era: 'Late Medieval & Sultanate',
            eraEpoch: 'Medieval',
            period: '15th Century CE to Present',
            category: 'Textiles & Pichwai',
            galleryCat: 'folk',
            region: 'South',
            dynasty: 'Vijayanagara & Golconda Sultanates',
            patron: 'Temple Trusts & Maritime Coromandel Merchants',
            artist: 'Chitrakattis (Narrative Pen Artisans)',
            masterpiece: 'Ramayana Narrative Kalamkari Temple Hangings',
            medium: 'Natural vegetable dyes on cotton using a sharp bamboo reed pen (Kalam)',
            tagline: 'The Ancient Art of Freehand Bamboo-Pen Textile Storytelling',
            shortDesc: 'Exquisite hand-painted textiles (Kalamkari) depicting epics, deities, and the Tree of Life, created using bamboo pens, fermented jaggery, and natural vegetable dyes.',
            fullDesc: 'Kalamkari is an ancient textile art practiced in two distinct styles: the freehand temple narrative style of Srikalahasti and the block-printed decorative style of Machilipatnam.',
            historyContext: 'Flourished under the Vijayanagara rulers for temple wall tapestries and later gained global fame as "Chintz" exported to Europe by Dutch and British trading companies in the 17th century.',
            preservation: 'GI certified; sustained through master artisan training institutes supported by the Ministry of Textiles.',
            techniques: [
                { name: 'Kalam Pen Drawing', desc: 'Sharpened bamboo reed tied with woolen twine to hold and release dye evenly.' },
                { name: 'Myrobalan & Buffalo Milk Bath', desc: 'Treating cotton in myrobalan nut astringent and milk to prevent dyes from bleeding.' },
                { name: 'Fermented Iron & Jaggery Black', desc: 'Fermenting rusted iron pieces with jaggery water for 21 days to produce jet black outlines.' }
            ],
            influence: {
                origin: 'Coromandel Coast (Andhra Pradesh)',
                destinations: 'European Chintz Trade, Indonesian Batik, Southeast Asian Trade Cloths',
                text: 'Kalamkari textiles dominated Indian Ocean trade for centuries, fundamentally revolutionizing the European fashion industry as imported "Indian Chintz".'
            },
            audioTranscript: 'Discover the artistry of Kalamkari. The artisan uses a simple bamboo reed pen dipped in fermented iron water to draw intricate epic murals on organic cotton, washed and fixed in the sacred flowing waters of the Swarnamukhi River.'
        },
        {
            id: 'bastar',
            name: 'Bastar & Kondagaon',
            state: 'Chhattisgarh',
            lat: 19.0746,
            lng: 82.0298,
            era: 'Modern & Living Heritage',
            eraEpoch: 'Modern',
            period: '4,000 BCE to Living Present',
            category: 'Folk & Tribal Art',
            galleryCat: 'sculpture',
            region: 'Central',
            dynasty: 'Maria & Muria Gond Tribal Communities',
            patron: 'Tribal Devgudis (Village Shrines)',
            artist: 'Ghadwa Master Metal Casters & Jaidev Baghel',
            masterpiece: 'Lost-Wax Dhokra Tribal Horsemen & Danteshwari Deities',
            medium: 'Dhokra non-ferrous lost-wax bell metal casting using beeswax threads',
            tagline: 'Ancient Indus Lost-Wax Metalcraft Preserved in Forest Shrines',
            shortDesc: 'A 4,000-year-old unbroken tradition of lost-wax bell metal casting, creating slender, textured figurines of tribal deities, forest animals, and musician bands.',
            fullDesc: 'Dhokra bell-metal casting from Bastar traces its technological lineage directly to the famed Dancing Girl of Mohenjo-daro (c. 2500 BCE). The Ghadwa craftspersons build a clay core, wind thin natural beeswax noodles over it to form detailed filigree textures, and cast molten bell metal.',
            historyContext: 'Passed down orally through generations in the dense sal forests of Dandakaranya, Dhokra sculptures originally served as sacred offerings to appease tribal forest spirits.',
            preservation: 'Awarded GI status; recognized as one of the world’s oldest surviving continuous metallurgical traditions.',
            techniques: [
                { name: 'Wax Thread Filigree (Dhokra)', desc: 'Beeswax mixed with dammar tree resin, pressed through wooden strainers into delicate noodles.' },
                { name: 'Clay Mold Encapsulation', desc: 'Multiple layers of anthill clay and river mud baked in open pit-kilns with charcoal.' },
                { name: 'Lost-Wax Pouring', desc: 'Molten scrap brass and bronze poured into pre-heated clay molds as the wax drains away.' }
            ],
            influence: {
                origin: 'Bastar (Chhattisgarh)',
                destinations: 'Global Primitive Sculpture, Modernist Bronze Sculptors (Henry Moore, Giacometti)',
                text: 'Dhokra’s raw, expressive linearity and textured metalwork have profoundly inspired 20th-century European modernists and contemporary Indian sculptors.'
            },
            audioTranscript: 'You are listening to the rhythm of Bastar’s tribal furnaces. For over four thousand years, since the days of the Harappan civilization, Dhokra masters have hand-coiled beeswax threads to cast brass forest deities in clay molds.'
        },
        {
            id: 'unakoti',
            name: 'Unakoti & Pilak',
            state: 'Tripura',
            lat: 24.3167,
            lng: 92.0167,
            era: 'Medieval Temple Age',
            eraEpoch: 'Medieval',
            period: '7th – 9th Century CE',
            category: 'Rock-cut & Sculpture',
            galleryCat: 'sculpture',
            region: 'Northeast',
            dynasty: 'Tripura Rulers & Palas of Bengal',
            patron: 'Shaivite & Buddhist Royal Monarchs',
            artist: 'Indigenous Master Rock Sculptors',
            masterpiece: 'Unakotiswara Kal Bhairava Colossal Rock Carving (30 ft)',
            medium: 'Colossal bas-relief rock carving on hill slopes and sandstone cliffs',
            tagline: 'Colossal Rock-Cut Shaivite Sanctuaries of Northeast India',
            shortDesc: 'A mystical hillside pilgrimage site featuring colossal rock-carved reliefs of Shiva, Ganesha, and Durga—the largest bas-relief rock carvings in Northeast India.',
            fullDesc: 'Unakoti is a magnificent open-air rock-cut Shaivite pilgrimage site hidden in the forested hills of northern Tripura. The central masterpiece is the Unakotiswara Kal Bhairava—a colossal 30-foot-tall rock-carved head of Lord Shiva with elaborate headdress and ear ornaments.',
            historyContext: 'Carved between the 7th and 9th centuries CE, Unakoti exhibits an intriguing fusion of classical Hindu Shaivite iconography with the distinct facial features and tribal aesthetic of indigenous Northeast hill communities.',
            preservation: 'Protected by the ASI and on the Tentative List for UNESCO World Heritage Status.',
            techniques: [
                { name: 'Hillside Bas-Relief Carving', desc: 'Sculpting colossal figures directly onto natural rocky hill escarpments and waterfalls.' },
                { name: 'Tribal-Classical Synthesis', desc: 'Blending classical Shaivite iconography with tribal facial profiles, flat noses, and bold jewelry.' }
            ],
            influence: {
                origin: 'Unakoti (Tripura)',
                destinations: 'Pilak, Sylhet, Bengal-Assam Rock Art traditions',
                text: 'Unakoti represents a rare monument of rock-cut artistic mastery in Northeast India, linking the artistic traditions of the Brahmaputra valley with ancient Bengal.'
            },
            audioTranscript: 'Welcome to the mystical forest sanctuary of Unakoti in Tripura. Look up at the colossal 30-foot face of Shiva carved directly into the living hill cliff, serenely listening to the mountain stream cascading beneath his feet.'
        },
        {
            id: 'kochi-murals',
            name: 'Kochi & Padmanabhapuram',
            state: 'Kerala',
            lat: 9.9312,
            lng: 76.2673,
            era: 'Late Medieval & Sultanate',
            eraEpoch: 'Medieval',
            period: '14th – 18th Century CE',
            category: 'Murals & Frescoes',
            galleryCat: 'fresco',
            region: 'South',
            dynasty: 'Kingdom of Cochin & Travancore Dynasty',
            patron: 'Veera Kerala Varma & Maharaja Marthanda Varma',
            artist: 'Traditional Kerala Chuvarchitra Guilds',
            masterpiece: 'Mattancherry Palace Ramayana Murals & Ananthasayanam',
            medium: 'Panchavarna (five sacred natural colors) on lime-washed laterite walls',
            tagline: 'Vibrant Panchavarna Ochre Murals of Kerala Palaces & Temples',
            shortDesc: 'Palace and temple wall murals painted in rich glowing red, yellow, and green ochre tones depicting voluptuous deities with stylized cylindrical anatomy.',
            fullDesc: 'Kerala mural painting (Chuvarchitra) is one of India’s most visually striking fresco traditions. Masterpieces preserved in the Mattancherry Palace in Kochi and Padmanabhapuram Palace showcase dramatic scenes from the Ramayana and Bhagavata Purana.',
            historyContext: 'Evolving from ancient rock art and Dravidian Kalamezhuthu, the style reached its golden zenith during the 16th to 18th centuries under the patronage of Travancore and Cochin royalty.',
            preservation: 'Taught and preserved by the Center for Study of Mural Paintings in Guruvayur Temple.',
            techniques: [
                { name: 'Panchavarna (Five Colors)', desc: 'Yellow & red ochre stones, green from Eravikkara leaves, lamp soot black, and lime white.' },
                { name: 'Herbal Wash Base', desc: 'Laterite stone walls plastered with lime, coconut water, and herbal decoctions for mold resistance.' },
                { name: 'Pine Resin Glaze', desc: 'Finished with natural pine resin and oil to produce a durable, moisture-resistant luster.' }
            ],
            influence: {
                origin: 'Kochi & Travancore (Kerala)',
                destinations: 'Mattancherry, Padmanabhapuram, Guruvayur, Tamil Nadu border temples',
                text: 'Kerala murals adapted the Vijayanagara linear dynamic into a distinct coastal idiom that influenced temple arts throughout southwestern India.'
            },
            audioTranscript: 'Step inside the royal chambers of Mattancherry Palace in Kochi. Notice the warm glow of the Panchavarna natural colors: yellow ochre from river stones and emerald green from wild leaves, bringing the Ramayana to life on temple walls.'
        },
        {
            id: 'cheriyal',
            name: 'Cheriyal, Warangal',
            state: 'Telangana',
            lat: 17.9689,
            lng: 79.5941,
            era: 'Late Medieval & Sultanate',
            eraEpoch: 'Medieval',
            period: '15th Century CE to Present',
            category: 'Folk & Tribal Art',
            galleryCat: 'folk',
            region: 'South',
            dynasty: 'Kakatiya Legacy & Golconda Deccan Sultanate',
            patron: 'Village Storytelling Communities (Kaki Padagollu)',
            artist: 'Nakashi Artisan Families (D. Vaikuntam Nakash)',
            masterpiece: 'Cheriyal 50-Foot Narrative Scroll & Storyteller Masks',
            medium: 'Natural mineral tempera on hand-treated khadi cloth and sawdust-tamarind masks',
            tagline: 'Deccan Traveling Storyteller Scrolls & Theatrical Masks',
            shortDesc: 'Vibrant narrative scroll paintings and expressive wooden masks used by traveling village bards in Telangana to sing stories from local epics.',
            fullDesc: 'Cheriyal scroll painting is a specialized pictorial storytelling tradition practiced by the Nakashi community in Telangana. Traditionally painted on long scrolls of khadi cloth extending up to 40 to 50 feet, these paintings served as visual aids for traveling minstrels.',
            historyContext: 'Flourishing in the Deccan region under the Kakatiya and later Qutb Shahi periods, Cheriyal scrolls were integral to rural performing arts and oral literature.',
            preservation: 'Awarded GI status in 2007; maintained by dedicated master craftsman families in Cheriyal village and Hyderabad.',
            techniques: [
                { name: 'Khadi Scroll Preparation', desc: 'Khadi cloth coated with boiled tamarind seed paste, white mud, and gum.' },
                { name: 'Sawdust & Tamarind Masks', desc: 'Crafting lightweight character masks from a mixture of sawdust and tamarind paste.' },
                { name: 'Red Ochre Ground (Geru)', desc: 'Solid scarlet-red backdrop making foreground characters pop with dramatic presence.' }
            ],
            influence: {
                origin: 'Warangal / Cheriyal (Telangana)',
                destinations: 'Deccan Narrative Scroll Arts, Rural Puppetry & Theater',
                text: 'Cheriyal scrolls formed a crucial link between visual folk art and oral performance traditions across the Deccan plateau.'
            },
            audioTranscript: 'Welcome to Cheriyal. Imagine a village bard unrolling a 40-foot scarlet scroll beneath the banyan tree at sunset, singing ancient folk ballads as villagers marvel at each hand-painted episode of heroic adventures.'
        },
        {
            id: 'kutch-rogan',
            name: 'Kutch & Nirona',
            state: 'Gujarat',
            lat: 23.2420,
            lng: 69.6669,
            era: 'Modern & Living Heritage',
            eraEpoch: 'Modern',
            period: '300-Year-Old Living Tradition',
            category: 'Textiles & Pichwai',
            galleryCat: 'folk',
            region: 'West',
            dynasty: 'Kutch Principality & Khatri Artisans',
            patron: 'Kutch Royal Court & Bridal Troussaux',
            artist: 'Khatri Abdul Gafur Family (Padma Shri)',
            masterpiece: 'Tree of Life Rogan Textile Masterpiece',
            medium: 'Boiled castor oil paste and mineral pigments applied with an iron stylus without touching the cloth',
            tagline: 'The Miracle of Castor-Oil Thread Painting & Symmetrical Miracles',
            shortDesc: 'A rare 300-year-old art where boiled castor oil paste is manipulated with an iron stylus in mid-air to create intricate, jewel-like patterns on silk and cotton.',
            fullDesc: 'Rogan art is an extraordinary craft practiced exclusively by a single family in Nirona village in the desert of Kutch. Castor seed oil is boiled for two days until it transforms into a thick, elastic gelatinous residue, which is then blended with natural mineral pigments.',
            historyContext: 'Believed to have migrated from Persia via Sindh to Kutch over three centuries ago, Rogan was traditionally used to embellish bridal skirts and ghagras.',
            preservation: 'Rescued from near extinction by Padma Shri Abdul Gafur Khatri; presented by Prime Minister Narendra Modi to US President Barack Obama in 2014.',
            techniques: [
                { name: 'Boiled Castor Oil Gel', desc: 'Castor oil boiled continuously for 48 hours to create a sticky rubbery paste.' },
                { name: 'Air-Drawn Thread Drawing', desc: 'Stretching the colored paste into hair-thin filaments using body heat and a blunt metal rod.' },
                { name: 'Mirror-Fold Transfer', desc: 'Folding the fabric in half to stamp and mirror the wet design with perfect mathematical symmetry.' }
            ],
            influence: {
                origin: 'Kutch (Gujarat)',
                destinations: 'Global Haute Couture, State Gifts, Contemporary Indian Textile Arts',
                text: 'Rogan art has transformed from a regional bridal craft into an internationally celebrated symbol of Indian artisanal wizardry.'
            },
            audioTranscript: 'Watch in awe as the master artist of Kutch spins a thread of colored castor-oil paste in mid-air with a blunt iron stylus. By folding the fabric, he creates a perfectly mirrored "Tree of Life" with mathematical precision.'
        },
        {
            id: 'belur-halebidu',
            name: 'Belur & Halebidu',
            state: 'Karnataka',
            lat: 13.1623,
            lng: 75.8643,
            era: 'Medieval Temple Age',
            eraEpoch: 'Medieval',
            period: '12th – 13th Century CE',
            category: 'Rock-cut & Sculpture',
            galleryCat: 'sculpture',
            region: 'South',
            dynasty: 'Hoysala Empire',
            patron: 'King Vishnuvardhana & Queen Shantala Devi',
            artist: 'Master Sculptors Jakanachari, Ruvari Mallitamma & Dasoja',
            masterpiece: 'Madanika Bracket Beauties & Chennakeshava Relief Friezes',
            medium: 'Intricate chloritic schist (soapstone) filigree relief sculpting',
            tagline: 'The Ultimate Jewel-Box Soapstone Filigree of the Hoysalas',
            shortDesc: 'Star-shaped temples carved from chloritic soapstone with jewelry-like delicacy, featuring famous Madanika bracket dancers and friezes of thousands of unique elephants.',
            fullDesc: 'The Hoysala temples of Belur and Halebidu are unmatched for their microscopic sculptural density. Carved from soft chloritic schist (soapstone) that hardens upon exposure to air, master sculptors achieved filigree-like delicacy in stone.',
            historyContext: 'Commissioned by King Vishnuvardhana to commemorate military victories, the Hoysalas were unique in allowing master sculptors like Dasoja and Mallitamma to sign their works.',
            preservation: 'Inscribed as a UNESCO World Heritage Site in 2023 ("Sacred Ensembles of the Hoysalas").',
            techniques: [
                { name: 'Chloritic Schist (Soapstone)', desc: 'Soft metamorphic rock easily chiseled when freshly quarried, hardening permanently over time.' },
                { name: 'Stellate (Star-Shaped) Platform', desc: 'Star-shaped temple plinths maximizing wall surface area for uninterrupted sculptural friezes.' },
                { name: 'Lace & Filigree Undercutting', desc: 'Carving stone ribbons, rotating beads, and hanging floral garlands completely detached from background stone.' }
            ],
            influence: {
                origin: 'Belur & Halebidu (Karnataka)',
                destinations: 'Somnathpur, Sringeri, Southern Hoysala Temple Schools',
                text: 'Hoysala soapstone mastery represents the highest pinnacle of micro-sculptural filigree in South Asian art history.'
            },
            audioTranscript: 'Welcome to Belur. Run your eyes over the Madanika bracket figures: sculptors carved soapstone so delicately that the stone beads in her necklace seem to sway with her dance, with every fingernail and ear pendant chiseled with jeweler’s precision.'
        },
        {
            id: 'travancore-varma',
            name: 'Thiruvananthapuram (Ravi Varma)',
            state: 'Kerala',
            lat: 8.5241,
            lng: 76.9366,
            era: 'Colonial & Bengal School',
            eraEpoch: 'Modern',
            period: 'Late 19th – Early 20th Century CE',
            category: 'Modern & Renaissance',
            galleryCat: 'painting',
            region: 'South',
            dynasty: 'Travancore Royal Family',
            patron: 'Ayilyam Thirunal of Travancore & Gaekwads of Baroda',
            artist: 'Raja Ravi Varma (1848–1906)',
            masterpiece: 'Shakuntala Looking Back & Hamsa Damayanti',
            medium: 'European oil on canvas & pioneering oleographic chromolithography',
            tagline: 'The Fusion of Indian Epic Mythology with European Academic Realism',
            shortDesc: 'The birthplace of Raja Ravi Varma, who fused European academic oil painting techniques with Indian mythological sensibilities and democratized art through oleographs.',
            fullDesc: 'Raja Ravi Varma revolutionized Indian visual culture. By mastering European oil painting techniques (linear perspective, dramatic chiaroscuro lighting, and realistic skin tones), he gave tangible human form to Indian gods, goddesses, and Sanskrit epics.',
            historyContext: 'Awarded the Kaisar-i-Hind Gold Medal in 1904, Ravi Varma won international awards at the 1893 World’s Columbian Exposition in Chicago.',
            preservation: 'Major collections housed in the Sri Chitra Art Gallery in Thiruvananthapuram, Laxmi Vilas Palace in Vadodara, and NGMA.',
            techniques: [
                { name: 'Academic Oil Glazing', desc: 'Layering translucent oil glazes to achieve luminous flesh tones and radiant silk fabrics.' },
                { name: 'Chiaroscuro & Perspective', desc: 'Dramatic three-dimensional lighting and atmospheric depth applied to Indian epic themes.' },
                { name: 'Oleography (Chromolithography)', desc: 'Mass-printing color lithographs using up to 16 separate limestone stones per color plate.' }
            ],
            influence: {
                origin: 'Travancore (Kerala)',
                destinations: 'Mumbai, Baroda, All-India Popular Culture, Early Indian Cinema (Dadasaheb Phalke)',
                text: 'Ravi Varma’s visual archetypes of deities and heroines laid the foundation for modern Indian calendar art, comic books (Amar Chitra Katha), and early Indian cinema.'
            },
            audioTranscript: 'Behold Hamsa Damayanti by Raja Ravi Varma. Notice the luminous sheen of Damayanti’s crimson sari and the soft glow of her face as she converses with the golden swan. Ravi Varma gave Indian gods and heroines a face that lives in every home.'
        },
        {
            id: 'delhi-mughal',
            name: 'Delhi & Agra (Mughal Atelier)',
            state: 'Delhi / UP',
            lat: 28.6139,
            lng: 77.2090,
            era: 'Mughal & Rajput Golden Age',
            eraEpoch: 'Mughal-Rajput',
            period: '16th – 18th Century CE',
            category: 'Miniature Painting',
            galleryCat: 'painting',
            region: 'North',
            dynasty: 'Imperial Mughal Empire',
            patron: 'Emperors Akbar, Jahangir & Shah Jahan',
            artist: 'Mir Sayyid Ali, Abd al-Samad, Basawan, Mansur (Nadir al-Asr), Bishandas',
            masterpiece: 'Akbarnama & Jahangirnama Folios by Ustad Mansur',
            medium: 'Opaque watercolor, crushed pearls, lapis lazuli, and pure gold on paper',
            tagline: 'The Imperial Imperial Synthesis of Persian, Indian & European Realism',
            shortDesc: 'The imperial court workshops where hundreds of master artists illustrated lavish imperial chronicles, botanical wildlife portraits, and royal durbars in glowing gouache.',
            fullDesc: 'Under Emperors Akbar and Jahangir, the Mughal imperial atelier in Delhi, Agra, and Lahore brought together Persian masters and Indian artists. They created dynamic historical chronicles like the Hamzanama and Akbarnama.',
            historyContext: 'Spanning from the mid-16th century through the mid-18th century, the Mughal atelier was the richest and most technologically sophisticated royal workshop in the world.',
            preservation: 'Folios preserved in the National Museum New Delhi, Victoria and Albert Museum London, and British Library.',
            techniques: [
                { name: 'Nim Qalam (Grisaille Tinting)', desc: 'Delicate monochromatic ink drawing with subtle washes of soft tinting.' },
                { name: 'Pricking & Pouncing', desc: 'Transferring master sketches by puncturing contours with fine pins and dusting charcoal powder.' },
                { name: 'Burnished Gold Leafing', desc: 'Laying 24-karat gold leaf and burnishing with agate stone to achieve an enamel-like gleam.' }
            ],
            influence: {
                origin: 'Delhi & Agra (Imperial Ateliers)',
                destinations: 'Rajput Courts (Jaipur, Mewar, Bikaner), Pahari Hills (Kangra), Deccan Sultanates (Bijapur, Golconda)',
                text: 'The dispersal of Mughal master painters in the 18th century directly seeded and energized regional miniature painting schools across Rajasthan, the Punjab Hills, and the Deccan.'
            },
            audioTranscript: 'Welcome to the Imperial Mughal Atelier. Under Emperor Akbar, over a hundred Hindu and Muslim painters worked side-by-side, blending Persian lyricism with Indian color to paint the Akbarnama with crushed lapis, gold, and ruby dust.'
        },
        {
            id: 'gandhara',
            name: 'Taxila & Gandhara',
            state: 'Ancient Northwest',
            lat: 33.7463,
            lng: 72.8270,
            era: 'Prehistoric & Ancient',
            eraEpoch: 'Classical',
            period: '1st Century BCE – 5th Century CE',
            category: 'Rock-cut & Sculpture',
            galleryCat: 'sculpture',
            region: 'North',
            dynasty: 'Greco-Bactrian & Kushana Empires',
            patron: 'Kushana Emperors (Kanishka) & Silk Road Guilds',
            artist: 'Greco-Indian Sculptural Guilds',
            masterpiece: 'Fasting Siddhartha & Standing Buddha in Hellenistic Toga',
            medium: 'Grey-blue quartz-mica schist and stucco relief carving',
            tagline: 'The Syncretic Fusion of Greek Classical Aesthetics & Buddhist Philosophy',
            shortDesc: 'A syncretic school of Buddhist art where the Buddha was depicted with wavy Apollo-like hair, heavy drapery, and realistic anatomical precision in grey schist stone.',
            fullDesc: 'The Gandhara school arose in the northwestern frontier of ancient India where the Silk Road intersected Hellenistic, Persian, and Indian civilizations. Following Alexander the Great’s campaigns, sculptors adapted Greco-Roman artistic conventions to express Mahayana Buddhist theology.',
            historyContext: 'Flourishing under the Kushana Empire (1st–5th century CE), Gandhara was a major center for Buddhist monastic universities that attracted pilgrims from China and Central Asia.',
            preservation: 'Masterpieces preserved in the National Museum New Delhi, Indian Museum Kolkata, Lahore Museum, and British Museum.',
            techniques: [
                { name: 'Grey Schist Stone Carving', desc: 'Fine-grained quartz-mica schist from the Swat valley allowing deep carving of drapery folds.' },
                { name: 'Stucco & Terracotta Modeling', desc: 'Molded lime plaster and clay figures painted with vibrant mineral slips.' },
                { name: 'Contrapposto Posture', desc: 'Asymmetrical weight shift lending dynamic realism and physical presence to standing deities.' }
            ],
            influence: {
                origin: 'Gandhara (Northwest Frontier)',
                destinations: 'Bamiyan (Afghanistan), Dunhuang & Mogao (China), Korea & Japan',
                text: 'Gandhara’s Greco-Buddhist sculptural model traveled across the Silk Road, shaping the first Buddhist icons of East Asia and the monumental Bamiyan Buddhas.'
            },
            audioTranscript: 'Look upon the Standing Buddha of Gandhara. Notice the extraordinary synthesis: his face carries the calm classical nobility of Apollo, his robe drapes like a Roman toga, yet his spiritual essence is entirely rooted in the Buddha’s path to enlightenment.'
        }
    ];

    /* ==========================================================
       HISTORICAL INFLUENCE & DIFFUSION ROUTES
       ========================================================== */
    const influenceRoutes = [
        {
            id: 'ajanta-silkroad',
            name: "Ajanta's Continental Wave",
            category: 'Global Cave Frescoes',
            badge: 'Continental Silk Road & Maritime',
            color: '#9e3623',
            points: [
                [20.5519, 75.7033], // Ajanta
                [22.3700, 74.7800], // Bagh Caves (MP)
                [15.9189, 75.6833], // Badami (Karnataka)
                [7.9570, 80.7603],  // Sigiriya (Sri Lanka)
                [34.8000, 67.8000], // Bamiyan (Afghanistan)
                [40.0400, 94.8000]  // Dunhuang Mogao (China)
            ],
            title: "Ajanta's Continental Wave & Cave Frescoes",
            desc1: "The fluid contours, emotional facial expressions, and naturalistic shading perfected in the Vakataka caves of Ajanta (5th century CE) became the gold standard for sacred Buddhist painting throughout Asia.",
            quote: "From the basalt cliffs of the Waghora river, the aesthetic language of the Bodhisattvas travelled along the northern Silk Route to Dunhuang in China and southward across the Palk Strait to the Sigiriya cloud maidens of Sri Lanka.",
            desc2: "Monks and artist guilds carried sketchbooks along trade caravans, ensuring that Ajanta's three-dimensional modeling technique influenced the wall paintings of Bagh Caves in Central India, Bamiyan in Afghanistan, and Kizil in Central Asia.",
            nodes: ['Ajanta (Origin)', 'Bagh & Badami', 'Sigiriya & Dunhuang']
        },
        {
            id: 'mughal-pahari',
            name: 'The Miniature Synthesis',
            category: 'Royal Ateliers',
            badge: 'Imperial to Regional Ateliers',
            color: '#c29b38',
            points: [
                [28.6139, 77.2090], // Delhi / Agra
                [27.1767, 78.0081], // Agra
                [26.5746, 74.8647], // Kishangarh / Jaipur
                [24.9317, 73.8188], // Nathdwara / Mewar
                [32.0998, 76.2691], // Kangra / Basohli (HP)
                [24.1800, 88.2700]  // Murshidabad (Bengal)
            ],
            title: 'Persian Ateliers, Imperial Mughal & Pahari Hill Miniatures',
            desc1: 'The encounter between Persian master painters brought by Humayun and indigenous Indian masters at Akbar’s court created the Mughal imperial style. When imperial patronage declined in Delhi, master painters migrated to regional Rajput kingdoms and the Himalayan Pahari hills.',
            quote: "Master painters like Nainsukh took the rigorous naturalism of the Delhi court and infused it with lyrical Vaishnava romance amidst the green valleys of Kangra.",
            desc2: "This diffusion created distinct sub-schools: the romantic stylization of Kishangarh, the vibrant devotion of Nathdwara Pichwai, and the sublime poetics of Kangra and Basohli miniatures.",
            nodes: ['Delhi Atelier', 'Rajput Courts', 'Kangra & Basohli']
        },
        {
            id: 'chola-maritime',
            name: 'Chola Maritime Bronze Diffusion',
            category: 'Sacred Metallurgy',
            badge: 'Bay of Bengal Maritime Trade',
            color: '#1b4965',
            points: [
                [10.7870, 79.1378], // Thanjavur (Kaveri Delta)
                [8.5241, 76.9366],  // Travancore
                [7.9403, 81.0188],  // Polonnaruwa (Sri Lanka)
                [-2.9761, 104.7754],// Srivijaya / Palembang (Indonesia)
                [13.4125, 103.8670],// Angkor (Cambodia)
                [15.8800, 108.3300] // Champa (Vietnam)
            ],
            title: 'Chola Maritime Bronze Diffusion & Temple Canons',
            desc1: 'During the 10th to 12th centuries, the Chola Empire established naval supremacy over the Bay of Bengal, linking the Kaveri delta with ports across Sri Lanka, the Straits of Malacca, and the Khmer Empire.',
            quote: "The lost-wax bronze casting canon of the Nataraja and the architectural plan of Dravidian vimanas became the visual grammar of sacred kingship across Southeast Asia.",
            desc2: "Ship-borne guilds of Sthapatis and Brahmins transported sacred texts (Agamas) and bronze casting recipes, directly enriching Khmer metalwork at Angkor and the Hindu-Buddhist shrines of Sumatra and Java.",
            nodes: ['Thanjavur (Origin)', 'Sri Lanka', 'Angkor & Srivijaya']
        },
        {
            id: 'bengal-renaissance',
            name: 'Bengal Renaissance to Modernism',
            category: 'Nationalist Modern Art',
            badge: 'Pan-Indian Modernist Movement',
            color: '#d90429',
            points: [
                [22.5726, 88.3639], // Kolkata
                [23.6800, 87.6800], // Santiniketan
                [18.9220, 72.8347], // Mumbai (PAG)
                [13.0827, 80.2707], // Chennai (Madras Movement)
                [28.6139, 77.2090]  // New Delhi (NGMA)
            ],
            title: 'The Swadeshi Awakening to Pan-Indian Modernism',
            desc1: 'The Bengal School led by Abanindranath Tagore in Kolkata and Nandalal Bose in Santiniketan challenged British colonial academic realism, pioneering an indigenous visual identity.',
            quote: "By turning back to Ajanta, Mughal miniatures, and rural Kalighat folk art, Santiniketan and Kolkata ignited modern art movements from Bombay to Madras.",
            desc2: "This foundational spark inspired subsequent generations: the Progressive Artists' Group in Bombay (MF Husain, FN Souza, SH Raza), the Madras Crafts Village at Cholamandal, and modern graphic design.",
            nodes: ['Santiniketan', 'Bombay PAG', 'Pan-India Modernism']
        },
        {
            id: 'deccan-kerala',
            name: 'Vijayanagara to Kerala Murals',
            category: 'Deccan Murals',
            badge: 'Peninsular Mural Diffusion',
            color: '#2d6a4f',
            points: [
                [15.3350, 76.4600], // Hampi
                [14.0000, 77.6000], // Lepakshi (Andhra)
                [9.9312, 76.2673],  // Mattancherry (Kochi)
                [8.2500, 77.3300]   // Padmanabhapuram
            ],
            title: 'Vijayanagara to Kerala Temple Murals',
            desc1: 'The bold, theatrical linear mural style of the Vijayanagara Empire (exemplified at Lepakshi) spread southward following royal matrimonial alliances and migrating guilds.',
            quote: "In the palace and temple shrines of Kerala, Vijayanagara line work merged with indigenous Panchavarna pigment traditions to create radiant ochre frescoes.",
            desc2: "From the Virupaksha ceilings in Hampi to the Mattancherry Palace in Kochi and Padmanabhapuram in Travancore, this route traces the golden sunset of classical Indian mural painting.",
            nodes: ['Hampi', 'Lepakshi', 'Kochi & Travancore']
        }
    ];

    /* ==========================================================
       CURATED THEMATIC TOURS
       ========================================================== */
    const curatedTours = {
        frescoes: {
            name: 'The Sacred Frescoes Route',
            desc: 'Journey through 10,000 years of cave wall and temple mural artistry across India.',
            stops: ['bhimbetka', 'ajanta', 'hampi', 'kochi-murals']
        },
        miniatures: {
            name: 'Royal Miniature Painting Odyssey',
            desc: 'Discover the lyrical refinement, jewel-like colors, and romanticism of royal court ateliers.',
            stops: ['delhi-mughal', 'kishangarh', 'kangra', 'nathdwara']
        },
        sculptures: {
            name: 'Imperial Sculptures & Monoliths',
            desc: 'Marvel at monolithic rock excavations, lost-wax bronzes, and soapstone filigree.',
            stops: ['mathura', 'gandhara', 'ellora', 'thanjavur', 'belur-halebidu', 'khajuraho']
        },
        tribal: {
            name: 'Living Indigenous & Tribal Traditions',
            desc: 'Celebrate unbroken vernacular expressions rooted in sacred nature and folklore.',
            stops: ['warli', 'madhubani', 'raghurajpur', 'bastar', 'cheriyal', 'kutch-rogan']
        }
    };

    /* ==========================================================
       ART HISTORIAN INTERACTIVE QUIZ DATA
       ========================================================== */
    const quizQuestions = [
        {
            hubId: 'ajanta',
            question: "Which ancient cave complex houses the celebrated 5th-century fresco of 'Bodhisattva Padmapani' holding a blue lotus?",
            options: ['Ellora Caves', 'Ajanta Caves', 'Elephanta Caves', 'Bhimbetka Shelters'],
            answerIndex: 1,
            explanation: "Ajanta Cave 1 is internationally renowned for the sublime Gupta-Vakataka tempera fresco of Bodhisattva Padmapani, symbolizing universal compassion (Karuna)."
        },
        {
            hubId: 'kishangarh',
            question: "The world-famous 'Bani Thani' portrait, often hailed as the 'Indian Mona Lisa', was painted by Nihal Chand in which Rajput school?",
            options: ['Mewar School', 'Kishangarh School', 'Bundi School', 'Kangra School'],
            answerIndex: 1,
            explanation: "Master painter Nihal Chand created the iconic Bani Thani portrait at the royal court of Kishangarh in the 18th century, characterized by arched brows and lotus eyes."
        },
        {
            hubId: 'thanjavur',
            question: "The iconic lost-wax bronze sculpture of 'Shiva as Nataraja' (Lord of Cosmic Dance) reached its sculptural zenith under which imperial dynasty?",
            options: ['Gupta Empire', 'Imperial Cholas', 'Rashtrakutas', 'Vijayanagara Empire'],
            answerIndex: 1,
            explanation: "The Imperial Chola bronze casters of Thanjavur perfected the lost-wax (Cire-perdue) technique to cast the cosmic Nataraja, celebrated as a pinnacle of world sculpture."
        },
        {
            hubId: 'warli',
            question: "Which indigenous tribal art from Maharashtra is characterized by minimalist geometric white rice paste figures dancing in a spiral?",
            options: ['Gond Art', 'Pattachitra', 'Warli Art', 'Cheriyal Scroll'],
            answerIndex: 2,
            explanation: "Warli art uses basic geometric circles and triangles painted in white rice flour paste to depict community harvest rituals, such as the famous Tarpa spiral dance."
        },
        {
            hubId: 'ellora',
            question: "The colossal monolithic Kailasa Temple (Cave 16), carved top-down from a single basalt mountain cliff, is located in which UNESCO site?",
            options: ['Ajanta Caves', 'Badami Caves', 'Ellora Caves', 'Hampi Complex'],
            answerIndex: 2,
            explanation: "Cave 16 at Ellora is the largest monolithic rock excavation in the world, carved from top to bottom under the Rashtrakuta King Krishna I."
        },
        {
            hubId: 'madhubani',
            question: "Which sacred folk art from Bihar is traditionally created by matriarchs on mud walls and handmade paper using double lines and natural plant dyes?",
            options: ['Pichwai Art', 'Madhubani / Mithila Painting', 'Kalamkari', 'Rogan Art'],
            answerIndex: 1,
            explanation: "Madhubani (Mithila) art is a living 2,500-year-old matriarchal tradition from northern Bihar featuring double-line contours and vibrant natural vegetable dyes."
        },
        {
            hubId: 'kolkata-bengal',
            question: "Who painted the iconic patriotic masterwork 'Bharat Mata' (1905) using the translucent watercolor wash technique during the Swadeshi movement?",
            options: ['Raja Ravi Varma', 'Abanindranath Tagore', 'Nandalal Bose', 'Jamini Roy'],
            answerIndex: 1,
            explanation: "Abanindranath Tagore painted 'Bharat Mata' in 1905, synthesizing Japanese wash technique with Indian spiritual symbolism to anchor the Bengal School of Art."
        },
        {
            hubId: 'kutch-rogan',
            question: "Which rare 300-year-old textile art from Kutch, Gujarat, uses boiled castor-oil paste spun in mid-air with an iron stylus?",
            options: ['Ajrakh Printing', 'Pichwai Hangings', 'Rogan Art', 'Kalamkari'],
            answerIndex: 2,
            explanation: "Rogan art is an extraordinarily rare craft from Nirona in Kutch where boiled castor oil paste is drawn in threads in mid-air and mirrored onto fabric."
        }
    ];

    /* ==========================================================
       APPLICATION STATE MANAGEMENT
       ========================================================== */
    let currentMapMode = 'vector'; // 'vector' or 'tile'
    let leafletMap = null;
    let leafletMarkersLayer = null;
    let leafletRouteLayers = [];
    let activeHubId = 'ajanta';
    let activeTourKey = null;
    let activeTourStep = 0;
    let tourAutoTimer = null;
    let speechSynth = window.speechSynthesis;
    let currentSpeechUtterance = null;
    let savedBookmarks = JSON.parse(localStorage.getItem('chitrakala_bookmarks') || '[]');
    let isShowingInfluenceRoutes = false;

    // Filter states
    let currentCategoryFilter = 'all';
    let currentEraFilter = 'all';
    let currentRegionFilter = 'all';
    let currentSearchQuery = '';

    // Quiz states
    let quizCurrentIndex = 0;
    let quizScore = 0;
    let quizAnswered = false;

    /* ==========================================================
       INITIALIZATION
       ========================================================== */
    initTheme();
    initHeritageVectorMap();
    initLeafletMapSafe();
    renderTourThumbnails();
    renderTimelineFeed();
    renderGallery();
    initEventListeners();
    updateBookmarkUI();

    // Select initial default hub
    selectLocation('ajanta', false);

    /* ==========================================================
       THEME MANAGEMENT
       ========================================================== */
    function initTheme() {
        const savedTheme = localStorage.getItem('chitrakala_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeToggleIcon(savedTheme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('chitrakala_theme', newTheme);
        updateThemeToggleIcon(newTheme);

        if (leafletMap && typeof L !== 'undefined') {
            updateLeafletTileLayer(newTheme);
        }
        // Re-render vector map to match new theme
        renderHeritageVectorMap();
    }

    function updateThemeToggleIcon(theme) {
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        }
    }

    /* ==========================================================
       MAP COORDINATE PROJECTION (LAT/LNG -> SVG VIEWBOX 800x800)
       ========================================================== */
    function projectLatLngToSvg(lat, lng) {
        // India bounding box approx: Lat 7.5 to 37.5, Lng 67.5 to 98.0
        const minLat = 6.8;
        const maxLat = 37.5;
        const minLng = 67.0;
        const maxLng = 98.5;

        const x = ((lng - minLng) / (maxLng - minLng)) * 720 + 40;
        const y = ((maxLat - lat) / (maxLat - minLat)) * 720 + 40;
        return { x: Math.round(x), y: Math.round(y) };
    }

    function getCategoryColor(category) {
        switch (category) {
            case 'Murals & Frescoes': return '#9e3623';
            case 'Miniature Painting': return '#c29b38';
            case 'Rock-cut & Sculpture': return '#1b4965';
            case 'Folk & Tribal Art': return '#2d6a4f';
            case 'Textiles & Pichwai': return '#a37081';
            case 'Modern & Renaissance': return '#d90429';
            default: return '#9e3623';
        }
    }

    function getCategoryIcon(category) {
        switch (category) {
            case 'Murals & Frescoes': return 'fa-brush';
            case 'Miniature Painting': return 'fa-palette';
            case 'Rock-cut & Sculpture': return 'fa-gem';
            case 'Folk & Tribal Art': return 'fa-feather';
            case 'Textiles & Pichwai': return 'fa-scroll';
            case 'Modern & Renaissance': return 'fa-wand-magic-sparkles';
            default: return 'fa-location-dot';
        }
    }

    /* ==========================================================
       HERITAGE GEOGRAPHIC VECTOR MAP ENGINE (STANDALONE SVG)
       ========================================================== */
    function initHeritageVectorMap() {
        renderHeritageVectorMap();
    }

    function renderHeritageVectorMap() {
        const container = document.getElementById('vector-map-canvas');
        if (!container) return;

        const filtered = getFilteredLocations();
        document.getElementById('visible-count').textContent = filtered.length;
        document.getElementById('total-count').textContent = artLocations.length;

        // Base geographic outline of India and subregions
        const indiaLandPath = `
            M 240,60 
            C 280,45 320,60 360,75 
            C 400,90 420,130 450,170 
            C 480,210 540,240 600,270 
            C 660,290 730,300 750,330 
            C 760,360 720,400 680,420 
            C 640,440 600,430 580,460 
            C 560,490 530,550 510,590 
            C 470,660 410,720 370,760 
            C 350,775 340,780 330,765 
            C 310,720 280,640 260,560 
            C 240,480 180,440 120,410 
            C 90,390 100,340 130,310 
            C 160,280 190,250 210,190 
            C 220,140 210,90 240,60 Z
        `;

        // Generate Diffusion Route Paths
        let routePathsSvg = '';
        if (isShowingInfluenceRoutes) {
            influenceRoutes.forEach(route => {
                const points = route.points.map(pt => projectLatLngToSvg(pt[0], pt[1]));
                if (points.length > 1) {
                    let d = `M ${points[0].x},${points[0].y}`;
                    for (let i = 1; i < points.length; i++) {
                        d += ` L ${points[i].x},${points[i].y}`;
                    }
                    routePathsSvg += `
                        <path d="${d}" class="map-route-line" stroke="${route.color}" stroke-opacity="0.8"/>
                    `;
                }
            });
        }

        // Generate Pin Markers
        let pinsSvg = '';
        filtered.forEach(loc => {
            const { x, y } = projectLatLngToSvg(loc.lat, loc.lng);
            const color = getCategoryColor(loc.category);
            const isActive = loc.id === activeHubId;
            const r = isActive ? 12 : 8;

            const pulseRing = isActive ? `
                <circle cx="${x}" cy="${y}" r="16" class="vector-pin-pulse" fill="none" stroke="${color}" stroke-width="2.5"/>
            ` : '';

            pinsSvg += `
                <g class="vector-pin ${isActive ? 'active' : ''}" data-hub-id="${loc.id}" transform-origin="${x} ${y}">
                    ${pulseRing}
                    <circle cx="${x}" cy="${y}" r="${r + 4}" fill="${color}" opacity="0.3"/>
                    <circle cx="${x}" cy="${y}" r="${r}" fill="${color}" stroke="#ffffff" stroke-width="2.5"/>
                    <circle cx="${x}" cy="${y}" r="${r - 4}" fill="#ffffff" opacity="0.9"/>
                    <text x="${x}" y="${y - 14}" class="vector-pin-label" text-anchor="middle">${loc.name}</text>
                </g>
            `;
        });

        // Assemble Full SVG
        container.innerHTML = `
            <svg class="vector-map-svg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="landGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#44362a" stop-opacity="0.9"/>
                        <stop offset="100%" stop-color="#2a221a" stop-opacity="0.7"/>
                    </radialGradient>
                    <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                    </filter>
                </defs>

                <!-- India Subcontinent Vector Base -->
                <path d="${indiaLandPath}" class="map-geo-path" fill="url(#landGlow)"/>

                <!-- Decorative Latitude / Longitude lines -->
                <line x1="80" y1="200" x2="720" y2="200" stroke="#44392e" stroke-width="0.75" stroke-dasharray="4,6" opacity="0.4"/>
                <line x1="80" y1="400" x2="720" y2="400" stroke="#44392e" stroke-width="0.75" stroke-dasharray="4,6" opacity="0.4"/>
                <line x1="80" y1="600" x2="720" y2="600" stroke="#44392e" stroke-width="0.75" stroke-dasharray="4,6" opacity="0.4"/>
                <line x1="200" y1="80" x2="200" y2="720" stroke="#44392e" stroke-width="0.75" stroke-dasharray="4,6" opacity="0.4"/>
                <line x1="400" y1="80" x2="400" y2="720" stroke="#44392e" stroke-width="0.75" stroke-dasharray="4,6" opacity="0.4"/>
                <line x1="600" y1="80" x2="600" y2="720" stroke="#44392e" stroke-width="0.75" stroke-dasharray="4,6" opacity="0.4"/>

                <!-- Diffusion Route Lines -->
                <g id="vector-routes-group">
                    ${routePathsSvg}
                </g>

                <!-- Interactive Pins -->
                <g id="vector-pins-group">
                    ${pinsSvg}
                </g>
            </svg>
        `;

        // Attach Click Listeners to Pins
        container.querySelectorAll('.vector-pin').forEach(pin => {
            pin.addEventListener('click', () => {
                const hubId = pin.getAttribute('data-hub-id');
                selectLocation(hubId, true);
            });
        });
    }

    /* ==========================================================
       LEAFLET MAP INTEGRATION (WITH ERROR SAFETY)
       ========================================================== */
    function initLeafletMapSafe() {
        if (typeof L === 'undefined') {
            console.warn('Leaflet not loaded. Using Native Heritage Vector Map.');
            return;
        }

        try {
            leafletMap = L.map('art-map', {
                center: [22.0, 78.9],
                zoom: 5,
                minZoom: 4,
                maxZoom: 14,
                zoomControl: false
            });

            L.control.zoom({ position: 'topright' }).addTo(leafletMap);

            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            updateLeafletTileLayer(currentTheme);

            leafletMarkersLayer = L.layerGroup().addTo(leafletMap);
            renderLeafletMarkers();

            setTimeout(() => {
                if (leafletMap) leafletMap.invalidateSize();
            }, 300);
        } catch (err) {
            console.warn('Leaflet map initialization skipped:', err);
        }
    }

    function updateLeafletTileLayer(theme) {
        if (!leafletMap) return;

        const tileUrl = theme === 'dark'
            ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
            : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

        L.tileLayer(tileUrl, {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(leafletMap);
    }

    function renderLeafletMarkers() {
        if (!leafletMarkersLayer) return;
        leafletMarkersLayer.clearLayers();

        const filtered = getFilteredLocations();

        filtered.forEach(loc => {
            const color = getCategoryColor(loc.category);
            const iconClass = getCategoryIcon(loc.category);
            const isSelected = loc.id === activeHubId;

            const markerIcon = L.divIcon({
                className: 'custom-art-marker-container',
                html: `
                    <div class="art-marker-wrapper">
                        ${isSelected ? `<div class="pulse-ring" style="border: 2px solid ${color};"></div>` : ''}
                        <div class="art-marker-pin" style="background-color: ${color};">
                            <i class="fa-solid ${iconClass} art-marker-icon"></i>
                        </div>
                    </div>
                `,
                iconSize: [38, 38],
                iconAnchor: [19, 38]
            });

            const marker = L.marker([loc.lat, loc.lng], { icon: markerIcon, title: loc.name });

            marker.on('click', () => {
                selectLocation(loc.id, false);
            });

            leafletMarkersLayer.addLayer(marker);
        });
    }

    /* ==========================================================
       LOCATION SELECTION & PREVIEW SIDEBAR
       ========================================================== */
    function selectLocation(id, pan = true) {
        const loc = artLocations.find(l => l.id === id);
        if (!loc) return;

        activeHubId = id;

        // Update preview sidebar
        updateMapSidebar(loc);

        // Re-render vector map to update active pulse
        renderHeritageVectorMap();

        // If in Leaflet mode, fly to coordinates
        if (currentMapMode === 'tile' && leafletMap && pan) {
            leafletMap.flyTo([loc.lat, loc.lng], 8, { duration: 1.2 });
            renderLeafletMarkers();
        }
    }

    function updateMapSidebar(loc) {
        const sidebar = document.getElementById('map-sidebar');
        if (!sidebar) return;

        document.getElementById('sidebar-category').textContent = loc.category;
        document.getElementById('sidebar-category').style.color = getCategoryColor(loc.category);
        document.getElementById('sidebar-category').style.background = `${getCategoryColor(loc.category)}18`;

        const sideImg = document.getElementById('sidebar-img');
        sideImg.src = getArtworkIllustration(loc.id, loc.masterpiece, loc.name);

        document.getElementById('sidebar-period').textContent = loc.period;
        document.getElementById('sidebar-title').textContent = loc.name;
        document.getElementById('sidebar-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${loc.state}`;
        document.getElementById('sidebar-dynasty').innerHTML = `<i class="fa-solid fa-crown"></i> ${loc.dynasty}`;
        document.getElementById('sidebar-desc').textContent = loc.shortDesc;
        document.getElementById('sidebar-masterpiece').textContent = loc.masterpiece;
        document.getElementById('sidebar-medium').textContent = loc.medium;

        // Check if bookmarked
        const bookmarkBtn = document.getElementById('sidebar-bookmark-btn');
        const isSaved = savedBookmarks.includes(loc.id);
        bookmarkBtn.innerHTML = isSaved ? '<i class="fa-solid fa-bookmark"></i> Saved' : '<i class="fa-regular fa-bookmark"></i> Save';

        sidebar.classList.add('active');
    }

    function getFilteredLocations() {
        return artLocations.filter(loc => {
            if (currentCategoryFilter !== 'all' && loc.category !== currentCategoryFilter) {
                return false;
            }
            if (currentEraFilter !== 'all' && loc.era !== currentEraFilter) {
                return false;
            }
            if (currentRegionFilter !== 'all' && loc.region !== currentRegionFilter) {
                return false;
            }
            if (currentSearchQuery.trim() !== '') {
                const q = currentSearchQuery.toLowerCase();
                const matched = loc.name.toLowerCase().includes(q) ||
                    loc.state.toLowerCase().includes(q) ||
                    loc.dynasty.toLowerCase().includes(q) ||
                    loc.masterpiece.toLowerCase().includes(q) ||
                    loc.artist.toLowerCase().includes(q) ||
                    loc.category.toLowerCase().includes(q) ||
                    loc.shortDesc.toLowerCase().includes(q);
                if (!matched) return false;
            }
            return true;
        });
    }

    /* ==========================================================
       DIFFUSION ROUTES CONTROLLER
       ========================================================== */
    function toggleAllInfluenceRoutes() {
        isShowingInfluenceRoutes = !isShowingInfluenceRoutes;
        const btnText = document.getElementById('influence-btn-text');
        const btn = document.getElementById('toggle-influence-btn');

        if (isShowingInfluenceRoutes) {
            btnText.textContent = 'Hide Influence Routes';
            btn.classList.add('active');
            showToast('Showing all 5 historical diffusion routes');
        } else {
            btnText.textContent = 'Show Influence Routes';
            btn.classList.remove('active');
            showToast('Influence routes hidden');
        }

        renderHeritageVectorMap();

        if (leafletMap && typeof L !== 'undefined') {
            leafletRouteLayers.forEach(l => leafletMap.removeLayer(l));
            leafletRouteLayers = [];

            if (isShowingInfluenceRoutes) {
                influenceRoutes.forEach(r => {
                    const polyline = L.polyline(r.points, { color: r.color, weight: 4, opacity: 0.8, dashArray: '6, 10' }).addTo(leafletMap);
                    leafletRouteLayers.push(polyline);
                });
            }
        }
    }

    function plotSingleInfluenceRoute(routeId) {
        isShowingInfluenceRoutes = true;
        document.getElementById('influence-btn-text').textContent = 'Hide Influence Routes';
        document.getElementById('toggle-influence-btn')?.classList.add('active');
        renderHeritageVectorMap();
        showToast(`Plotting diffusion vector: ${routeId}`);
    }

    /* ==========================================================
       CURATED TOURS ENGINE
       ========================================================== */
    function renderTourThumbnails() {
        const tourKeys = ['frescoes', 'miniatures', 'sculptures', 'tribal'];
        const tourIllustrations = {
            frescoes: getArtworkIllustration('ajanta', 'The Sacred Frescoes', 'Cave Murals'),
            miniatures: getArtworkIllustration('kishangarh', 'Miniature Odyssey', 'Royal Ateliers'),
            sculptures: getArtworkIllustration('thanjavur', 'Imperial Monoliths', 'Sacred Bronzes'),
            tribal: getArtworkIllustration('warli', 'Living Traditions', 'Vernacular Arts')
        };

        tourKeys.forEach(k => {
            const el = document.getElementById(`tour-img-${k}`);
            if (el) {
                const img = document.createElement('img');
                img.src = tourIllustrations[k];
                img.alt = k;
                el.prepend(img);
            }
        });
    }

    function startCuratedTour(tourKey) {
        const tour = curatedTours[tourKey];
        if (!tour) return;

        activeTourKey = tourKey;
        activeTourStep = 0;

        const panel = document.getElementById('tour-control-panel');
        panel.classList.add('active');

        document.getElementById('current-tour-name').textContent = tour.name;
        document.getElementById('current-tour-desc').textContent = tour.desc;
        document.getElementById('tour-step-total').textContent = tour.stops.length;

        document.getElementById('map-explorer').scrollIntoView({ behavior: 'smooth' });

        updateTourStep();
    }

    function updateTourStep() {
        const tour = curatedTours[activeTourKey];
        if (!tour) return;

        const stopId = tour.stops[activeTourStep];
        const loc = artLocations.find(l => l.id === stopId);
        if (!loc) return;

        document.getElementById('tour-step-current').textContent = activeTourStep + 1;
        document.getElementById('tour-step-title').textContent = `${loc.name} (${loc.state})`;

        selectLocation(loc.id, true);
    }

    function nextTourStep() {
        const tour = curatedTours[activeTourKey];
        if (!tour) return;

        if (activeTourStep < tour.stops.length - 1) {
            activeTourStep++;
            updateTourStep();
        } else {
            showToast('You have reached the end of this journey!');
            stopAutoTour();
        }
    }

    function prevTourStep() {
        if (activeTourStep > 0) {
            activeTourStep--;
            updateTourStep();
        }
    }

    function toggleAutoTour() {
        const btn = document.getElementById('tour-auto-play-btn');
        if (tourAutoTimer) {
            stopAutoTour();
        } else {
            btn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
            showToast('Auto tour playing (6s per stop)');
            tourAutoTimer = setInterval(() => {
                const tour = curatedTours[activeTourKey];
                if (activeTourStep < tour.stops.length - 1) {
                    nextTourStep();
                } else {
                    stopAutoTour();
                }
            }, 6000);
        }
    }

    function stopAutoTour() {
        if (tourAutoTimer) {
            clearInterval(tourAutoTimer);
            tourAutoTimer = null;
        }
        const btn = document.getElementById('tour-auto-play-btn');
        if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i> Auto Tour';
    }

    function exitTour() {
        stopAutoTour();
        activeTourKey = null;
        document.getElementById('tour-control-panel').classList.remove('active');
    }

    /* ==========================================================
       DETAILED LOCATION DOSSIER MODAL & TABS
       ========================================================== */
    function openDossierModal(id) {
        const loc = artLocations.find(l => l.id === id);
        if (!loc) return;

        activeHubId = id;
        const modal = document.getElementById('location-modal');

        // Header
        document.getElementById('modal-title').textContent = loc.name;
        document.getElementById('modal-tagline').textContent = loc.tagline;
        document.getElementById('modal-category').innerHTML = `<i class="fa-solid ${getCategoryIcon(loc.category)}"></i> ${loc.category}`;
        document.getElementById('modal-period').innerHTML = `<i class="fa-solid fa-clock"></i> ${loc.period}`;
        document.getElementById('modal-region').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${loc.state} (${loc.region} India)`;
        document.getElementById('modal-dynasty').innerHTML = `<i class="fa-solid fa-crown"></i> ${loc.dynasty}`;

        // Tab 1: Artwork Display
        const artworkBox = document.getElementById('modal-artwork-box');
        artworkBox.innerHTML = `<img src="${getArtworkIllustration(loc.id, loc.masterpiece, loc.name)}" alt="${loc.masterpiece}">`;

        document.getElementById('modal-artwork-title').textContent = `${loc.masterpiece} • ${loc.name}`;
        document.getElementById('modal-desc-full').textContent = loc.fullDesc;
        document.getElementById('modal-artist').textContent = loc.artist;
        document.getElementById('modal-prop-medium').textContent = loc.medium;
        document.getElementById('modal-prop-themes').textContent = `Royal Patronage under ${loc.patron}; sacred philosophical traditions.`;

        // Tab 2: Context
        document.getElementById('modal-history-text').textContent = loc.historyContext;
        document.getElementById('modal-dynasty-details').textContent = `Patronized extensively by ${loc.patron} during the ${loc.dynasty}.`;
        document.getElementById('modal-preservation').textContent = loc.preservation;

        // Tab 3: Technique
        document.getElementById('modal-technique-text').textContent = `The creation of ${loc.name}'s masterworks required specialized guild knowledge passed through hereditary lineages:`;
        const pillsContainer = document.getElementById('modal-technique-pills');
        pillsContainer.innerHTML = '';
        loc.techniques.forEach(tech => {
            const card = document.createElement('div');
            card.className = 'technique-pill-card';
            card.innerHTML = `
                <h5><i class="fa-solid fa-circle-dot"></i> ${tech.name}</h5>
                <p>${tech.desc}</p>
            `;
            pillsContainer.appendChild(card);
        });

        // Tab 4: Influence
        document.getElementById('modal-influence-text').textContent = loc.influence.text;
        document.getElementById('modal-vector-start').textContent = loc.influence.origin;
        document.getElementById('modal-vector-end').textContent = loc.influence.destinations;

        // Tab 5: Audio Guide
        document.getElementById('modal-audio-target-name').textContent = loc.name;
        document.getElementById('modal-audio-transcript').textContent = `"${loc.audioTranscript}"`;

        // Update bookmark button state in modal
        const isSaved = savedBookmarks.includes(loc.id);
        document.getElementById('modal-bookmark-action').innerHTML = isSaved
            ? '<i class="fa-solid fa-bookmark"></i> Saved in Expedition'
            : '<i class="fa-regular fa-bookmark"></i> Save to Expedition';

        // Reset to first tab
        switchModalTab('tab-overview');

        stopVoiceNarration();

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDossierModal() {
        const modal = document.getElementById('location-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        stopVoiceNarration();
    }

    function switchModalTab(tabId) {
        document.querySelectorAll('.modal-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
        });
        document.querySelectorAll('.modal-tab-content').forEach(content => {
            content.classList.toggle('active', content.id === tabId);
        });
    }

    function navigateModal(direction) {
        const currentIndex = artLocations.findIndex(l => l.id === activeHubId);
        let nextIndex = currentIndex + direction;
        if (nextIndex < 0) nextIndex = artLocations.length - 1;
        if (nextIndex >= artLocations.length) nextIndex = 0;

        openDossierModal(artLocations[nextIndex].id);
    }

    /* ==========================================================
       FULLSCREEN LIGHTBOX
       ========================================================== */
    function openLightbox(hubId, caption) {
        const loc = artLocations.find(l => l.id === hubId);
        const title = loc ? loc.masterpiece : caption;
        const sub = loc ? loc.name : 'Heritage Masterpiece';

        const lightbox = document.getElementById('lightbox');
        const box = document.getElementById('lightbox-artwork-box');
        box.innerHTML = `<img src="${getArtworkIllustration(hubId, title, sub)}" alt="${caption}">`;
        document.getElementById('lightbox-caption').textContent = caption || `${title} • ${sub}`;
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        document.getElementById('lightbox').classList.remove('active');
    }

    /* ==========================================================
       TIMELINE FEED COMPONENT
       ========================================================== */
    function renderTimelineFeed(epochFilter = 'all', searchFilter = '') {
        const container = document.getElementById('timeline-container');
        const noResults = document.getElementById('timeline-no-results');
        if (!container) return;

        container.innerHTML = '';

        let items = [...artLocations];

        if (epochFilter !== 'all') {
            items = items.filter(item => item.eraEpoch === epochFilter);
        }

        if (searchFilter.trim() !== '') {
            const q = searchFilter.toLowerCase();
            items = items.filter(item =>
                item.name.toLowerCase().includes(q) ||
                item.era.toLowerCase().includes(q) ||
                item.period.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q) ||
                item.dynasty.toLowerCase().includes(q)
            );
        }

        if (items.length === 0) {
            noResults.classList.remove('hidden');
            return;
        } else {
            noResults.classList.add('hidden');
        }

        items.forEach(loc => {
            const itemEl = document.createElement('div');
            itemEl.className = 'timeline-item';
            itemEl.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${loc.period}</span>
                    <h3 class="timeline-title">${loc.name}</h3>
                    <div class="timeline-location">
                        <i class="fa-solid fa-location-dot"></i> ${loc.state} &bull; <i class="fa-solid fa-crown"></i> ${loc.dynasty}
                    </div>
                    <div class="timeline-img-wrap" data-hub-id="${loc.id}" data-caption="${loc.masterpiece} (${loc.name})">
                        <img src="${getArtworkIllustration(loc.id, loc.masterpiece, loc.name)}" alt="${loc.name}">
                    </div>
                    <p class="timeline-desc">${loc.shortDesc}</p>
                    <div class="timeline-card-actions">
                        <button class="btn btn-primary btn-sm timeline-open-dossier" data-id="${loc.id}">
                            <i class="fa-solid fa-book-open"></i> Full Dossier
                        </button>
                        <button class="btn btn-outline btn-sm timeline-locate-map" data-id="${loc.id}">
                            <i class="fa-solid fa-map-location-dot"></i> View on Map
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(itemEl);
        });
    }

    /* ==========================================================
       MASTER ART GALLERY COMPONENT
       ========================================================== */
    function renderGallery(galleryCatFilter = 'all') {
        const grid = document.getElementById('gallery-grid');
        if (!grid) return;

        grid.innerHTML = '';

        let items = [...artLocations];
        if (galleryCatFilter !== 'all') {
            items = items.filter(loc => loc.galleryCat === galleryCatFilter);
        }

        items.forEach(loc => {
            const card = document.createElement('div');
            card.className = 'gallery-card';
            card.innerHTML = `
                <div class="gallery-card-img" data-hub-id="${loc.id}" data-caption="${loc.masterpiece} • ${loc.name}">
                    <img src="${getArtworkIllustration(loc.id, loc.masterpiece, loc.name)}" alt="${loc.masterpiece}">
                    <div class="gallery-zoom-badge"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
                </div>
                <div class="gallery-card-body">
                    <div>
                        <span class="gallery-card-period">${loc.period}</span>
                        <h4 class="gallery-card-title">${loc.masterpiece}</h4>
                        <div class="gallery-card-meta">
                            <i class="fa-solid fa-landmark"></i> ${loc.name}, ${loc.state}
                        </div>
                    </div>
                    <button class="btn btn-outline btn-sm btn-block gallery-dossier-btn" data-id="${loc.id}">
                        <i class="fa-solid fa-compass"></i> Explore Art Hub
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    /* ==========================================================
       ART HISTORIAN INTERACTIVE QUIZ ENGINE
       ========================================================== */
    function startQuiz() {
        quizCurrentIndex = 0;
        quizScore = 0;
        quizAnswered = false;

        document.getElementById('quiz-intro-state').classList.add('hidden');
        document.getElementById('quiz-results-state').classList.add('hidden');
        document.getElementById('quiz-active-state').classList.remove('hidden');

        document.getElementById('quiz-total-q').textContent = quizQuestions.length;
        document.getElementById('results-max-score').textContent = quizQuestions.length;

        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        quizAnswered = false;
        const q = quizQuestions[quizCurrentIndex];

        document.getElementById('quiz-curr-q').textContent = quizCurrentIndex + 1;
        document.getElementById('quiz-curr-score').textContent = quizScore;
        document.getElementById('quiz-question-text').textContent = q.question;

        const progressPct = ((quizCurrentIndex + 1) / quizQuestions.length) * 100;
        document.getElementById('quiz-progress-fill').style.width = `${progressPct}%`;

        // Quiz Artwork Display
        const artworkDisplay = document.getElementById('quiz-artwork-display');
        artworkDisplay.innerHTML = `<img src="${getArtworkIllustration(q.hubId, 'Art Historian Clue', 'Question ' + (quizCurrentIndex + 1))}" alt="Quiz Clue">`;

        // Hide feedback box
        document.getElementById('quiz-feedback-box').classList.add('hidden');

        // Options Grid
        const grid = document.getElementById('quiz-options-grid');
        grid.innerHTML = '';

        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + idx)}.</span> ${opt}`;
            btn.addEventListener('click', () => handleQuizAnswer(idx, q));
            grid.appendChild(btn);
        });
    }

    function handleQuizAnswer(selectedIndex, q) {
        if (quizAnswered) return;
        quizAnswered = true;

        const isCorrect = selectedIndex === q.answerIndex;
        const optionButtons = document.querySelectorAll('.quiz-option-btn');

        optionButtons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.answerIndex) {
                btn.classList.add('correct');
            } else if (idx === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        const feedbackBox = document.getElementById('quiz-feedback-box');
        const feedbackIcon = document.getElementById('feedback-icon');
        const feedbackTitle = document.getElementById('feedback-title');
        const feedbackExplanation = document.getElementById('feedback-explanation');

        if (isCorrect) {
            quizScore++;
            document.getElementById('quiz-curr-score').textContent = quizScore;
            feedbackBox.className = 'quiz-feedback-box correct-fb';
            feedbackIcon.className = 'fa-solid fa-circle-check';
            feedbackTitle.textContent = 'Splendid! Correct Answer';
        } else {
            feedbackBox.className = 'quiz-feedback-box incorrect-fb';
            feedbackIcon.className = 'fa-solid fa-circle-xmark';
            feedbackTitle.textContent = 'Incorrect!';
        }

        feedbackExplanation.textContent = q.explanation;
        feedbackBox.classList.remove('hidden');
    }

    function nextQuizQuestion() {
        if (quizCurrentIndex < quizQuestions.length - 1) {
            quizCurrentIndex++;
            renderQuizQuestion();
        } else {
            showQuizResults();
        }
    }

    function showQuizResults() {
        document.getElementById('quiz-active-state').classList.add('hidden');
        document.getElementById('quiz-results-state').classList.remove('hidden');

        document.getElementById('results-final-score').textContent = quizScore;
        const pct = Math.round((quizScore / quizQuestions.length) * 100);
        document.getElementById('results-percent').textContent = `${pct}%`;

        const headline = document.getElementById('results-headline');
        const msg = document.getElementById('results-feedback-msg');

        if (pct >= 85) {
            headline.textContent = 'Grand Master of Indian Art History!';
            msg.textContent = 'Phenomenal! Your profound understanding of Indian cave frescoes, royal ateliers, and sacred iconography is truly exemplary.';
            if (typeof confetti === 'function') {
                confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
            }
        } else if (pct >= 50) {
            headline.textContent = 'Connoisseur of Indian Arts';
            msg.textContent = 'Great effort! You have a solid grasp of major art traditions, and our digital atlas can help you discover even deeper historical nuances.';
        } else {
            headline.textContent = 'Budding Art Explorer';
            msg.textContent = 'A wonderful start! Use our interactive map, guided tours, and audio guides to further immerse yourself in 5,000 years of aesthetic mastery.';
        }
    }

    /* ==========================================================
       MY EXPEDITION BOOKMARKING & ITINERARY PLANNER
       ========================================================== */
    function toggleBookmark(id) {
        const index = savedBookmarks.indexOf(id);
        const loc = artLocations.find(l => l.id === id);
        if (!loc) return;

        if (index > -1) {
            savedBookmarks.splice(index, 1);
            showToast(`Removed ${loc.name} from expedition`);
        } else {
            savedBookmarks.push(id);
            showToast(`Added ${loc.name} to expedition!`);
        }

        localStorage.setItem('chitrakala_bookmarks', JSON.stringify(savedBookmarks));
        updateBookmarkUI();

        if (activeHubId === id) {
            updateMapSidebar(loc);
            const modalBtn = document.getElementById('modal-bookmark-action');
            if (modalBtn) {
                const isSaved = savedBookmarks.includes(id);
                modalBtn.innerHTML = isSaved
                    ? '<i class="fa-solid fa-bookmark"></i> Saved in Expedition'
                    : '<i class="fa-regular fa-bookmark"></i> Save to Expedition';
            }
        }
    }

    function updateBookmarkUI() {
        const badge = document.getElementById('bookmark-count');
        if (badge) badge.textContent = savedBookmarks.length;

        const list = document.getElementById('saved-hubs-list');
        const emptyMsg = document.getElementById('empty-expedition-msg');

        if (!list) return;

        const existingCards = list.querySelectorAll('.saved-hub-card');
        existingCards.forEach(c => c.remove());

        if (savedBookmarks.length === 0) {
            if (emptyMsg) emptyMsg.classList.remove('hidden');
        } else {
            if (emptyMsg) emptyMsg.classList.add('hidden');

            savedBookmarks.forEach(id => {
                const loc = artLocations.find(l => l.id === id);
                if (!loc) return;

                const card = document.createElement('div');
                card.className = 'saved-hub-card';
                card.innerHTML = `
                    <img src="${getArtworkIllustration(loc.id, loc.masterpiece, loc.name)}" alt="${loc.name}" class="saved-hub-thumb">
                    <div class="saved-hub-info">
                        <h4>${loc.name}</h4>
                        <p>${loc.category} &bull; ${loc.state}</p>
                    </div>
                    <button class="remove-saved-btn" data-id="${loc.id}" title="Remove from expedition">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                `;
                list.appendChild(card);
            });
        }
    }

    function exportItinerary() {
        if (savedBookmarks.length === 0) {
            showToast('Please bookmark at least one art location first!');
            return;
        }

        let summary = `========================================================\n`;
        summary += `CHITRAKALA - MY PERSONAL INDIAN ART EXPEDITION\n`;
        summary += `Generated on: ${new Date().toLocaleDateString()}\n`;
        summary += `========================================================\n\n`;

        savedBookmarks.forEach((id, idx) => {
            const loc = artLocations.find(l => l.id === id);
            if (!loc) return;
            summary += `[Stop ${idx + 1}] ${loc.name.toUpperCase()} (${loc.state})\n`;
            summary += `Era: ${loc.period} | Dynasty: ${loc.dynasty}\n`;
            summary += `Art Form: ${loc.category}\n`;
            summary += `Iconic Work: ${loc.masterpiece}\n`;
            summary += `Medium: ${loc.medium}\n`;
            summary += `Historical Overview: ${loc.shortDesc}\n`;
            summary += `--------------------------------------------------------\n\n`;
        });

        const blob = new Blob([summary], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ChitraKala_Art_Expedition_${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('Itinerary exported successfully!');
    }

    function clearExpedition() {
        if (savedBookmarks.length === 0) return;
        if (confirm('Are you sure you want to clear your saved art expedition?')) {
            savedBookmarks = [];
            localStorage.setItem('chitrakala_bookmarks', JSON.stringify(savedBookmarks));
            updateBookmarkUI();
            showToast('Expedition list cleared');
        }
    }

    /* ==========================================================
       AUDIO NARRATION SYNTHESIZER
       ========================================================== */
    function playVoiceNarration(locId) {
        const loc = artLocations.find(l => l.id === locId) || artLocations.find(l => l.id === activeHubId);
        if (!loc) return;

        if (!speechSynth) {
            showToast('Speech synthesizer not supported in this browser');
            return;
        }

        stopVoiceNarration();

        const rateSelect = document.getElementById('speech-rate-select');
        const rate = rateSelect ? parseFloat(rateSelect.value) : 1.0;

        const fullNarrative = `${loc.name}, located in ${loc.state}. ${loc.shortDesc}. ${loc.audioTranscript}`;

        currentSpeechUtterance = new SpeechSynthesisUtterance(fullNarrative);
        currentSpeechUtterance.rate = rate;

        const voices = speechSynth.getVoices();
        const indianVoice = voices.find(v => v.lang.includes('en-IN') || v.name.includes('India'));
        if (indianVoice) {
            currentSpeechUtterance.voice = indianVoice;
        }

        currentSpeechUtterance.onstart = () => {
            const playText = document.getElementById('audio-play-text');
            if (playText) playText.textContent = 'Speaking...';
            showToast(`Now playing audio narration for ${loc.name}`);
        };

        currentSpeechUtterance.onend = () => {
            const playText = document.getElementById('audio-play-text');
            if (playText) playText.textContent = 'Play Narration';
        };

        currentSpeechUtterance.onerror = () => {
            const playText = document.getElementById('audio-play-text');
            if (playText) playText.textContent = 'Play Narration';
        };

        speechSynth.speak(currentSpeechUtterance);
    }

    function stopVoiceNarration() {
        if (speechSynth && speechSynth.speaking) {
            speechSynth.cancel();
        }
        const playText = document.getElementById('audio-play-text');
        if (playText) playText.textContent = 'Play Narration';
    }

    /* ==========================================================
       TOAST NOTIFICATIONS
       ========================================================== */
    function showToast(message) {
        let toast = document.querySelector('.toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast-notification';
            document.body.appendChild(toast);
        }

        toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>${message}</span>`;
        toast.classList.add('active');

        setTimeout(() => {
            toast.classList.remove('active');
        }, 3200);
    }

    /* ==========================================================
       EVENT LISTENERS & BINDINGS
       ========================================================== */
    function initEventListeners() {
        // Theme toggle
        document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

        // Mobile hamburger
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        hamburger?.addEventListener('click', () => {
            navMenu?.classList.toggle('active');
        });

        // Close mobile nav on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu?.classList.remove('active');
            });
        });

        // Map View Switchers (Heritage Vector Map vs Tile Map)
        const vectorMapCanvas = document.getElementById('vector-map-canvas');
        const artMapCanvas = document.getElementById('art-map');
        const viewVectorBtn = document.getElementById('view-vector-map-btn');
        const viewTileBtn = document.getElementById('view-tile-map-btn');

        viewVectorBtn?.addEventListener('click', () => {
            currentMapMode = 'vector';
            viewVectorBtn.classList.add('active');
            viewTileBtn.classList.remove('active');
            vectorMapCanvas.classList.remove('hidden');
            artMapCanvas.classList.add('hidden');
            renderHeritageVectorMap();
            showToast('Switched to Heritage Vector Map');
        });

        viewTileBtn?.addEventListener('click', () => {
            currentMapMode = 'tile';
            viewTileBtn.classList.add('active');
            viewVectorBtn.classList.remove('active');
            vectorMapCanvas.classList.add('hidden');
            artMapCanvas.classList.remove('hidden');
            if (leafletMap) {
                leafletMap.invalidateSize();
                renderLeafletMarkers();
            }
            showToast('Switched to Street Tile Map');
        });

        // Map Category Filter Chips
        document.querySelectorAll('#category-filter-chips .chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('#category-filter-chips .chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentCategoryFilter = chip.getAttribute('data-category');
                renderHeritageVectorMap();
                if (leafletMap) renderLeafletMarkers();
            });
        });

        // Map Dropdown Filters
        document.getElementById('era-select')?.addEventListener('change', (e) => {
            currentEraFilter = e.target.value;
            renderHeritageVectorMap();
            if (leafletMap) renderLeafletMarkers();
        });

        document.getElementById('region-select')?.addEventListener('change', (e) => {
            currentRegionFilter = e.target.value;
            renderHeritageVectorMap();
            if (leafletMap) renderLeafletMarkers();
        });

        // Map Search input
        const mapSearchInput = document.getElementById('map-search-input');
        const mapSearchClear = document.getElementById('map-search-clear');

        mapSearchInput?.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            if (currentSearchQuery.length > 0) {
                mapSearchClear?.classList.remove('hidden');
            } else {
                mapSearchClear?.classList.add('hidden');
            }
            renderHeritageVectorMap();
            if (leafletMap) renderLeafletMarkers();
        });

        mapSearchClear?.addEventListener('click', () => {
            mapSearchInput.value = '';
            currentSearchQuery = '';
            mapSearchClear.classList.add('hidden');
            renderHeritageVectorMap();
            if (leafletMap) renderLeafletMarkers();
        });

        // Toggle Influence Routes Button
        document.getElementById('toggle-influence-btn')?.addEventListener('click', toggleAllInfluenceRoutes);

        // Reset Map View Button
        document.getElementById('reset-map-view-btn')?.addEventListener('click', () => {
            selectLocation('ajanta', true);
            isShowingInfluenceRoutes = false;
            document.getElementById('influence-btn-text').textContent = 'Show Influence Routes';
            document.getElementById('toggle-influence-btn')?.classList.remove('active');
            renderHeritageVectorMap();
        });

        // Sidebar Actions
        document.getElementById('sidebar-close-btn')?.addEventListener('click', () => {
            document.getElementById('map-sidebar')?.classList.remove('active');
        });

        document.getElementById('sidebar-open-dossier')?.addEventListener('click', () => {
            openDossierModal(activeHubId);
        });

        document.getElementById('sidebar-audio-play')?.addEventListener('click', () => {
            playVoiceNarration(activeHubId);
        });

        document.getElementById('sidebar-bookmark-btn')?.addEventListener('click', () => {
            toggleBookmark(activeHubId);
        });

        // Tour Buttons from Hero / Cards
        document.querySelectorAll('.start-tour-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tourKey = btn.getAttribute('data-tour');
                startCuratedTour(tourKey);
            });
        });

        document.getElementById('hero-tours-btn')?.addEventListener('click', () => {
            startCuratedTour('frescoes');
        });

        // Tour Panel Navigation
        document.getElementById('tour-next-btn')?.addEventListener('click', nextTourStep);
        document.getElementById('tour-prev-btn')?.addEventListener('click', prevTourStep);
        document.getElementById('tour-auto-play-btn')?.addEventListener('click', toggleAutoTour);
        document.getElementById('tour-exit-btn')?.addEventListener('click', exitTour);
        document.getElementById('tour-view-stop-btn')?.addEventListener('click', () => {
            openDossierModal(activeHubId);
        });

        // Influence Routes Showcase Section
        document.querySelectorAll('.route-item').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.route-item').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const routeId = btn.getAttribute('data-route');
                const route = influenceRoutes.find(r => r.id === routeId);
                if (!route) return;

                document.getElementById('route-badge').textContent = route.badge;
                document.getElementById('route-title').textContent = route.title;
                document.getElementById('route-desc-1').textContent = route.desc1;
                document.getElementById('route-quote-text').textContent = `"${route.quote}"`;
                document.getElementById('route-desc-2').textContent = route.desc2;

                const nodesContainer = document.querySelector('.route-nodes-flow');
                if (nodesContainer && route.nodes) {
                    nodesContainer.innerHTML = `
                        <div class="node-pill"><i class="fa-solid fa-circle-dot"></i> <span>${route.nodes[0]}</span></div>
                        <i class="fa-solid fa-arrow-right node-arrow"></i>
                        <div class="node-pill"><i class="fa-solid fa-mountain"></i> <span>${route.nodes[1]}</span></div>
                        <i class="fa-solid fa-arrow-right node-arrow"></i>
                        <div class="node-pill"><i class="fa-solid fa-earth-asia"></i> <span>${route.nodes[2]}</span></div>
                    `;
                }

                plotSingleInfluenceRoute(routeId);
            });
        });

        document.getElementById('visualize-all-routes-btn')?.addEventListener('click', () => {
            const activeRouteBtn = document.querySelector('.route-item.active');
            const routeId = activeRouteBtn ? activeRouteBtn.getAttribute('data-route') : 'ajanta-silkroad';
            plotSingleInfluenceRoute(routeId);
            document.getElementById('map-explorer')?.scrollIntoView({ behavior: 'smooth' });
        });

        // Timeline Epoch Filters
        document.querySelectorAll('#timeline-filter-buttons .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#timeline-filter-buttons .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const era = btn.getAttribute('data-era');
                renderTimelineFeed(era, document.getElementById('timeline-search')?.value || '');
            });
        });

        // Timeline Search
        document.getElementById('timeline-search')?.addEventListener('input', (e) => {
            const activeEpochBtn = document.querySelector('#timeline-filter-buttons .filter-btn.active');
            const era = activeEpochBtn ? activeEpochBtn.getAttribute('data-era') : 'all';
            renderTimelineFeed(era, e.target.value);
        });

        // Timeline Card Delegated Events
        document.getElementById('timeline-container')?.addEventListener('click', (e) => {
            const dossierBtn = e.target.closest('.timeline-open-dossier');
            if (dossierBtn) {
                openDossierModal(dossierBtn.getAttribute('data-id'));
                return;
            }

            const locateBtn = e.target.closest('.timeline-locate-map');
            if (locateBtn) {
                const id = locateBtn.getAttribute('data-id');
                selectLocation(id, true);
                document.getElementById('map-explorer')?.scrollIntoView({ behavior: 'smooth' });
                return;
            }

            const imgWrap = e.target.closest('.timeline-img-wrap');
            if (imgWrap) {
                openLightbox(imgWrap.getAttribute('data-hub-id'), imgWrap.getAttribute('data-caption'));
            }
        });

        // Gallery Filter Buttons
        document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const cat = btn.getAttribute('data-gallery-cat');
                renderGallery(cat);
            });
        });

        // Gallery Card Delegated Events
        document.getElementById('gallery-grid')?.addEventListener('click', (e) => {
            const dossierBtn = e.target.closest('.gallery-dossier-btn');
            if (dossierBtn) {
                openDossierModal(dossierBtn.getAttribute('data-id'));
                return;
            }

            const imgWrap = e.target.closest('.gallery-card-img');
            if (imgWrap) {
                openLightbox(imgWrap.getAttribute('data-hub-id'), imgWrap.getAttribute('data-caption'));
            }
        });

        // Modal Tab Buttons
        document.querySelectorAll('.modal-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                switchModalTab(tabId);
            });
        });

        // Modal Close
        document.getElementById('modal-close-btn')?.addEventListener('click', closeDossierModal);
        document.getElementById('modal-backdrop')?.addEventListener('click', closeDossierModal);

        // Modal Nav
        document.getElementById('modal-prev-btn')?.addEventListener('click', () => navigateModal(-1));
        document.getElementById('modal-next-btn')?.addEventListener('click', () => navigateModal(1));

        document.getElementById('modal-bookmark-action')?.addEventListener('click', () => {
            toggleBookmark(activeHubId);
        });

        document.getElementById('modal-center-map-btn')?.addEventListener('click', () => {
            closeDossierModal();
            selectLocation(activeHubId, true);
            document.getElementById('map-explorer')?.scrollIntoView({ behavior: 'smooth' });
        });

        // Modal Lightbox Trigger
        document.getElementById('modal-img-container')?.addEventListener('click', () => {
            const loc = artLocations.find(l => l.id === activeHubId);
            if (loc) openLightbox(loc.id, `${loc.masterpiece} • ${loc.name}`);
        });

        // Modal Audio Guide Controls
        document.getElementById('modal-audio-play-btn')?.addEventListener('click', () => {
            playVoiceNarration(activeHubId);
        });

        document.getElementById('modal-audio-stop-btn')?.addEventListener('click', stopVoiceNarration);

        // Lightbox Close
        document.getElementById('lightbox-close-btn')?.addEventListener('click', closeLightbox);
        document.getElementById('lightbox')?.addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') closeLightbox();
        });

        // Expedition Drawer Toggle
        document.getElementById('expedition-toggle-btn')?.addEventListener('click', () => {
            document.getElementById('expedition-drawer')?.classList.toggle('active');
        });

        document.getElementById('drawer-close-btn')?.addEventListener('click', () => {
            document.getElementById('expedition-drawer')?.classList.remove('active');
        });

        document.getElementById('export-itinerary-btn')?.addEventListener('click', exportItinerary);
        document.getElementById('clear-expedition-btn')?.addEventListener('click', clearExpedition);

        // Delegated Remove from Expedition
        document.getElementById('saved-hubs-list')?.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-saved-btn');
            if (removeBtn) {
                const id = removeBtn.getAttribute('data-id');
                toggleBookmark(id);
            }
        });

        // Quiz Start & Next
        document.getElementById('quiz-start-btn')?.addEventListener('click', startQuiz);
        document.getElementById('quiz-next-q-btn')?.addEventListener('click', nextQuizQuestion);
        document.getElementById('quiz-restart-btn')?.addEventListener('click', startQuiz);

        // Scroll to Top Button
        const scrollTopBtn = document.getElementById('scroll-top-btn');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn?.classList.add('visible');
            } else {
                scrollTopBtn?.classList.remove('visible');
            }
        });

        scrollTopBtn?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Keyboard navigation (ESC to close modals/lightboxes)
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDossierModal();
                closeLightbox();
                document.getElementById('expedition-drawer')?.classList.remove('active');
            }
        });
    }

});
