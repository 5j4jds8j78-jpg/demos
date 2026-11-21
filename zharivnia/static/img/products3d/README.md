# products3d — photoreal 3D packshots (coffee bags + drip products)

Made by 3D artist #1. Replace the cartoon SVGs in `static/img/products/` for coffee bags and drip products.
Templates/app code are untouched; integration is up to whoever wires images (3D artist #2).

All files are 1000×1250 (4:5), WebP q≈85, each < 250 KB. Naming matches `catalog_data.py` `art` slots:

| suffix | content |
|---|---|
| `<slug>-1.webp` | front packshot (bag: straight front; drip: carton in 3/4) |
| `<slug>-2.webp` | 3/4 angle on linen with a few roasted beans (drip: carton + sachets + beans) |
| `<slug>-3.webp` | bag: back label; drip: flat-lay top view of sachets (+ carton for single origins) |

## Files (delivered; the scope was cut to 18 images by the coordinator)

Full sets (-1 front, -2 3/4 with beans on linen, -3 back label):
- `ethiopia-yirgacheffe-kochere-{1,2,3}.webp` (kraft)
- `ethiopia-guji-natural-{1,2,3}.webp`
- `kenya-nyeri-aa-{1,2,3}.webp`
- `colombia-huila-{1,2,3}.webp`
- `brazil-cerrado-{1,2,3}.webp`

Front only:
- `espresso-blend-ranok-1.webp`
- `colombia-anaerobic-pink-bourbon-1.webp`
- `drip-ethiopia-1.webp` (drip carton, 3/4)

Not rendered (scope cut, keep the SVGs): guatemala-antigua, costa-rica-tarrazu-honey, colombia-decaf,
drip-colombia, drip-assorted, plus -2/-3 of ranok / pink-bourbon / drip-ethiopia. Shot setups for all of them already
exist in `render.py`: `python3 render.py <slug> [-v 1,2,3]`.

`hero*.webp` / `tile-*.webp` in this folder belong to 3D artist #2, not to this set.

## How to re-render

Scripts live in `/home/claude/shop/render3d/`:

```bash
cd /home/claude/shop/render3d
python3 render.py                                   # everything (≈1.5 h on 2 CPU cores, SwiftShader)
python3 render.py kenya-nyeri-aa -v 2               # one product, one view
python3 render.py drip-colombia --frames 24 --scale 0.5 --out /tmp/draft   # fast draft
python3 render.py --sheet                           # contact sheet -> render3d/_sheet_bags.jpg
```

- `textures.py` — flat label/print artwork re-using `kit/pack.py` (same labels, fonts, colours, vignettes, stamps),
  numpy detail maps (paper fibre, crimp/zip normal map, linen). Output in `render3d/_tex/`.
- `scene.js` — three.js scene (vendored r188 in `render3d/vendor/`): procedural pouch with gusset bottom,
  crimped top seal, tear notches, zip ridge, degassing valve, creases/pleats; sticker labels as separate
  conforming meshes; rounded carton with cube-net UVs; pillow drip sachets; roasted beans with crease.
  Rendered progressively: each frame jitters area-light samples (key/fill/rim softboxes), a sky-dome shadowed
  light (contact shadows / occlusion), lens position (depth of field) and sub-pixel offset; frames are averaged
  in a float buffer, then Khronos PBR Neutral tonemapping.
- `render.py` — shot definitions (cameras, layouts), local HTTP server + headless Chromium, grain + light
  sharpening, WebP export, contact sheet.

New coffee: add it to `kit/make_kit.py` `COFFEES` (or `DRIPS`) and run `python3 render.py <slug>`.

## Site images by 3D artist #2

- `hero.webp` (1920×1080): SDF ray-marched scene (Kochere/Kenya/Ranok bags with the kit label art, glazed cup with
  coffee + crema ring on a saucer, bean heap + scattered beans, limestone table, warm window light, DOF).
  Source: `render3d/a2/` (`scenes.py hero`, GLSL in `render3d/a2/glsl/`, runs on cards/kit/engine.py).
- `hero-m.webp` (880×1100): crop of hero.webp (`render3d/a2/crops.py`).
- `tile-zerno.webp` (800×800): crop of `ethiopia-yirgacheffe-kochere-2.webp`; `tile-drip.webp` is cropped from
  `drip-ethiopia-1.webp` by `python3 render3d/a2/crops.py` once that render exists. Gear tile stays SVG.
- Story section uses `ethiopia-yirgacheffe-kochere-2.webp`.

Integration: `app.product_img()` / `site_img()` pick `products3d/*.webp` when present, otherwise the old SVG.
When a product has any 3D render, its gallery shows only the 3D images.
