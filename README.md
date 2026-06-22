# Jung-Min Yoon — Research Portfolio

Personal research portfolio site for Jung-Min Yoon, Ph.D. candidate in Sport Biomechanics at Korea National Sport University (KNSU), Motion Innovation Center.

🔗 **Live site:** _add your GitHub Pages URL here after deployment_

## About

A single-page site covering:
- Academic background and athletic foundation (former national speed skater)
- Four research focus areas: sports biomechanics, gait analysis, wearable sensors, digital health
- Two published, peer-reviewed projects (slide-board training, foot-angle cutting mechanics)
- An in-progress aging/gait study and a funded NRF grant (2025–2027)
- Embedded video: on-ice training footage and a Visual3D motion-capture pipeline demo
- Contact details

## Structure

```
.
├── index.html              Main page
├── assets/
│   ├── css/style.css        All styles
│   ├── js/main.js           Nav, scroll-reveal, video behavior
│   ├── img/                 Photos, diagrams, figures (from the source portfolio PDF)
│   └── video/                Two embedded videos (compressed for web)
└── README.md
```

## Running locally

No build step — it's static HTML/CSS/JS.

```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```

## Editing content

Everything is in `index.html`, in plain sections — search for the `<!-- ===== -->` comments to jump to a section (Hero, About, Athletic Foundation, Research Focus, Publications, Project I–IV, Contact, etc.).

Colors, fonts, and spacing are all defined as CSS variables at the top of `assets/css/style.css` under `:root`.

## Notes

- Email/phone are publicly listed on the Contact section as provided in the source content — remove or edit them in `index.html` if you'd prefer not to publish them.
- Videos are re-encoded (H.264, reduced resolution/bitrate) from the original files for web playback compatibility and smaller size.
