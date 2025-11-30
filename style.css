:root{
  --bg:#f4f7fb;
  --card:#fff;
  --accent:#0b66d4;
  --muted:#666;
}
*{box-sizing:border-box}
body{margin:0;font-family:Inter,system-ui,Arial,sans-serif; background:var(--bg); color:#111}
.wrap{max-width:1100px;margin:0 auto;padding:18px}

/* header */
.site-header{background:var(--accent);color:#fff;padding:14px 0;margin-bottom:12px}
.site-header h1{margin:0;font-size:20px; padding-left:6px}

/* sections */
.section{margin-bottom:18px}
.section h2{margin:0 0 10px 0;font-size:18px}

/* carousel */
.carousel{display:flex;align-items:center;gap:8px}
.carousel-track{display:flex;gap:12px;overflow-x:auto;padding:8px;border-radius:8px;flex:1;scroll-behavior:smooth}
.carousel-track::-webkit-scrollbar{height:10px}
.carousel-track img{display:block;border-radius:8px;min-width:260px;height:150px;object-fit:cover;cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,.08)}
.carousel-btn{background:#fff;border:1px solid #ddd;padding:8px 10px;border-radius:6px;cursor:pointer}

/* grid */
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px}
.card{background:var(--card);border-radius:8px;overflow:hidden;cursor:pointer;box-shadow:0 6px 18px rgba(11,102,212,.06);transition:transform .12s}
.card:hover{transform:translateY(-4px)}
.card img{width:100%;height:140px;object-fit:cover;display:block}
.card .meta{padding:10px}
.card .meta h3{margin:0 0 6px 0;font-size:15px}
.card .meta p{margin:0;color:var(--muted);font-size:13px}

/* past launches */
.past{background:#fff;border-radius:8px;padding:12px}
.past-list{max-height:280px;overflow:auto;padding-right:6px}
.past-row{display:flex;gap:10px;padding:8px;border-bottom:1px solid #f0f0f0}
.past-row img{width:96px;height:64px;object-fit:cover;border-radius:6px}
.past-row .info small{color:var(--muted)}

/* modal */
.modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.45);z-index:1000;padding:18px}
.modal.show{display:flex}
.modal-panel{background:#fff;border-radius:10px;max-width:720px;width:100%;padding:18px;position:relative;box-shadow:0 12px 40px rgba(2,6,23,.2)}
.modal-close{position:absolute;right:12px;top:10px;border:none;background:transparent;font-size:18px;cursor:pointer}
.modal-img{width:100%;height:280px;object-fit:cover;border-radius:6px}
.modal-actions{display:flex;gap:12px;margin-top:12px}
.btn{padding:8px 12px;border-radius:6px;border:1px solid #ddd;background:#fff;cursor:pointer;text-decoration:none;color:inherit}
.btn.primary{background:var(--accent);color:#fff;border:none}
.hidden{display:none}

/* about full text */
.about-full{margin-top:12px;background:#fafbfd;padding:12px;border-radius:8px;border:1px solid #eef3ff}

/* responsive */
@media (min-width:1000px){
  .wrap{display:grid;grid-template-columns:1fr 320px;gap:18px}
  main{grid-column:1}
  aside{grid-column:2}
  .past{position:sticky;top:20px}
}
@media (max-width:999px){
  .wrap{display:block}
}
