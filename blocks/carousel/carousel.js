export default function decorate(block) {
    const rows = [...block.children];
    [...block.children].forEach((row,r) => {
        if(r=== 0) {
            const nextBtn = document.createElement('button');
            nextBtn.classList.add('btn');
            nextBtn.classList.add('btn-next');
            const node = document.createTextNode(row.textContent);
            nextBtn.append(node);
            row.replaceWith(nextBtn);

        } else if(r==rows.length-1) {
            const preBtn = document.createElement('button');
            preBtn.classList.add('btn');
            preBtn.classList.add('btn-prev');
            const node = document.createTextNode(row.textContent); 
            preBtn.append(node);
            row.replaceWith(preBtn);
        } else {
            row.classList.add('slide');
            [...row.children].forEach((col,c) => {
                if(c==1) {
                    col.classList.add('slide-text');
                }
            })
        }
      
    });

    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide,index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
    });

    const nextSlide = document.querySelector(".btn-next");
    let curSlide = 0;
    let maxSlide = slides.length - 1;

    nextSlide.addEventListener("click", function()  {
        if(curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }

         //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
    });

    const prevSlide = document.querySelector(".btn-prev");

    prevSlide.addEventListener("click", function() {
        if(curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }

        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
          });
    })

}