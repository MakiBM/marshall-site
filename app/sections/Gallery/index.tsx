import style from "./style.module.scss";

export default function Gallery() {
  const imgs = ['/img/gallery_1.jpg', '/img/gallery_2.jpg', '/img/gallery_3.jpg', '/img/gallery_1.jpg', '/img/gallery_2.jpg', '/img/gallery_3.jpg'];

  const gridMap = [
    [1, 1, 2, 2],
    [3, 1, 1, 1],
    [3, 2, 1, 1],
    [1, 3, 3, 1],
    [1, 4, 2, 1],
    [3, 4, 1, 1],

    [4, 3, 2, 2],
    [6, 3, 1, 1],
    [6, 4, 1, 1],
    [4, 1, 3, 1],
    [4, 2, 2, 1],
    [6, 2, 1, 1],
  ]
  
  return (
    <section className={style.gallery}>

      {/*
        Produce spacer per each items batch of 6
      */}
      {Array.from({ length: Math.ceil(imgs.length / 6) }).map((_, i) => (
        <span className={style.gallery__spacer} style={{ gridArea: `${i * 3 + 1} / 1 / span 3 / span 4` }} key={i}></span>
      ))}

      {/*
        Produce items by mapping it over gridMap.
        Restore gridMap index to 0 after 12 items to repeat the grid pattern.
        Adjust row number after each 12 items to move the grid down.
      */}
      {imgs.map((_, i) => (
        <div 
          style={{ 
            gridArea: `${gridMap[i%12][0] + 6 * Math.floor(i/12)} / ${gridMap[i%12][1]} / span ${gridMap[i%12][2]} / span ${gridMap[i%12][3]}`,
            backgroundImage: `url(${imgs[i]})`
          }} 
          className={style.gallery__img}
          key={i}
        />
      ))}

    </section>
  )
}